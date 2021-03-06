use crate::base::parser::ParseError;
use crate::base::tokenizer::{BaseTokenizer, Position};

#[derive(PartialEq, Debug)]
pub enum Token<'a> {
  // <
  LessThan,

  // -
  Minus,

  // *
  Star,

  // *=
  StarEqual,

  // +
  Plus,

  // ~
  Squiggle,

  // ~=
  SquiggleEqual,

  // |=
  PipeEqual,

  // |=
  DollarEqual,

  // ^=
  CaretEqual,

  // @
  At,

  // !
  Bang,

  // {#
  BlockOpen,

  // {/
  BlockClose,

  // {
  CurlyOpen,

  // }
  CurlyClose,

  // [
  SquareOpen,

  // ]
  SquareClose,

  // (
  ParenOpen,

  // )
  ParenClose,

  // "
  Str((&'a str, &'a str)),
  Escape(u8),

  // =
  Equals,

  // ==
  DoubleEquals,

  // ===
  TrippleEquals,

  //
  Whitespace,

  // ...
  Spread,

  // .
  Dot,

  // #
  Hash,

  // ,
  Comma,

  // :
  Colon,

  // :
  Semicolon,

  // /*
  ScriptCommentOpen,

  // */
  ScriptCommentClose,

  // //
  LineCommentOpen,

  // div, blay
  Keyword(&'a str),

  // 5, .5, 0.5
  Number(&'a str),

  Byte(u8),
  Cluster(&'a [u8]),
}

pub struct Tokenizer<'a> {
  pub source: &'a [u8],
  pub pos: usize,
  pub utf16_pos: usize,
}

impl<'a> Tokenizer<'a> {
  pub fn eat_whitespace(&mut self) {
    if self.is_eof() {
      return;
    }
    let is_whitepace = |c| -> bool { matches!(c, b' ' | b'\t' | b'\r' | b'\n') };
    while !self.is_eof() && is_whitepace(self.curr_byte().unwrap()) {
      self.pos += 1;
      self.utf16_pos += 1;
    }
  }

  pub fn utf8_pos() {}

  pub fn peek(&mut self, steps: u8) -> Result<Token<'a>, ParseError> {
    let pos = self.get_pos();
    let mut i = 0;
    let mut result = Err(ParseError::unknown());
    while i < steps {
      result = self.next();
      i += 1;
    }
    self.set_pos(pos);
    result
  }
  pub fn peek_eat_whitespace(&mut self, steps: u8) -> Result<Token<'a>, ParseError> {
    let pos = self.get_pos();
    let mut i = 0;
    let mut result = Err(ParseError::unknown());
    while i < steps {
      self.eat_whitespace();
      result = self.next();
      i += 1;
    }
    self.set_pos(pos);
    result
  }

  pub fn next_expect(&mut self, expected_token: Token) -> Result<Token<'a>, ParseError> {
    let pos = self.pos;
    let token = self.next()?;
    if token == expected_token {
      return Ok(token);
    } else {
      return Err(ParseError::unexpected_token(pos));
    }
  }

  pub fn get_pos(&self) -> Position {
    Position {
      u8_pos: self.pos,
      u16_pos: self.utf16_pos,
    }
  }
  pub fn set_pos(&mut self, pos: Position) {
    self.pos = pos.u8_pos;
    self.utf16_pos = pos.u16_pos;
  }

  // pub fn next_word_value(&mut self) -> Result<String, ParseError> {
  //   let pos = self.pos;
  //   if let Token::Word(value) = self.next()? {
  //     Ok(value.to_string())
  //   } else {
  //     Err(ParseError::unexpected_token(pos))
  //   }
  // }

  pub fn next(&mut self) -> Result<Token<'a>, ParseError> {
    if self.is_eof() {
      return Err(ParseError::eof());
    }

    let c = self.curr_byte()?;

    match c {
      b'/' => {
        if self.starts_with(b"//") {
          self.forward(2);
          self.scan(|c| -> bool { !matches!(c, b'\n' | b'\r') });
          self.forward(1);
          Ok(Token::LineCommentOpen)
        } else if self.starts_with(b"/*") {
          self.forward(2);

          while !self.is_eof() {
            if self.pos < self.source.len() - 2
              && self.source[self.pos] == b'*'
              && self.source[self.pos + 1] == b'/'
            {
              break;
            }
            self.next_utf16_char()?;
          }
          Ok(Token::ScriptCommentOpen)
        } else {
          self.forward(1);
          Ok(Token::Byte(b'/'))
        }
      }
      b'-' => {
        if self.starts_with(b"- ") {
          self.forward(1);
          Ok(Token::Minus)
        } else {
          Ok(Token::Keyword(self.search_keyword()))
        }
      }
      b'*' => {
        if self.starts_with(b"*/") {
          self.forward(2);
          Ok(Token::ScriptCommentClose)
        } else if self.starts_with(b"*=") {
          self.forward(2);
          Ok(Token::StarEqual)
        } else {
          self.forward(1);
          Ok(Token::Star)
        }
      }
      b'!' => {
        self.forward(1);
        Ok(Token::Bang)
      }
      b'+' => {
        self.forward(1);
        Ok(Token::Plus)
      }
      b'~' => {
        if self.starts_with(b"~=") {
          self.forward(2);
          Ok(Token::SquiggleEqual)
        } else {
          self.forward(1);
          Ok(Token::Squiggle)
        }
      }
      b'@' => {
        self.forward(1);
        Ok(Token::At)
      }
      b',' => {
        self.forward(1);
        Ok(Token::Comma)
      }
      b':' => {
        self.forward(1);
        Ok(Token::Colon)
      }
      b';' => {
        self.forward(1);
        Ok(Token::Semicolon)
      }
      b'.' => {
        if self.starts_with(b"...") {
          self.forward(3);
          Ok(Token::Spread)
        } else {
          self.forward(1);
          let is_number = |c| matches!(c, b'0'..=b'9');

          if !self.is_eof() && is_number(self.curr_byte().unwrap()) {
            let start = self.pos - 1;
            self.scan(is_number);
            Ok(Token::Number(self.since(start)))
          } else {
            Ok(Token::Dot)
          }
        }
      }
      b'{' => {
        self.forward(1);
        if self.starts_with(b"#") {
          self.forward(1);
          Ok(Token::BlockOpen)
        } else if self.starts_with(b"/") {
          self.forward(1);
          Ok(Token::BlockClose)
        } else {
          Ok(Token::CurlyOpen)
        }
      }
      b'}' => {
        self.forward(1);
        Ok(Token::CurlyClose)
      }
      b'0'..=b'9' => {
        let start = self.pos;
        let is_number = |c| matches!(c, b'0'..=b'9');
        self.scan(is_number);
        if self.starts_with(b".") {
          self.forward(1);
          self.scan(is_number);
        }

        Ok(Token::Number(self.since(start)))
      }
      b'|' => {
        if self.starts_with(b"|=") {
          self.forward(2);
          Ok(Token::PipeEqual)
        } else {
          self.forward(1);
          Ok(Token::Byte(b'|'))
        }
      }
      b'$' => {
        if self.starts_with(b"$=") {
          self.forward(2);
          Ok(Token::DollarEqual)
        } else {
          self.forward(1);
          Ok(Token::Byte(b'$'))
        }
      }
      b'^' => {
        if self.starts_with(b"^=") {
          self.forward(2);
          Ok(Token::CaretEqual)
        } else {
          self.forward(1);
          Ok(Token::Byte(b'^'))
        }
      }
      b'[' => {
        self.forward(1);
        Ok(Token::SquareOpen)
      }
      b']' => {
        self.forward(1);
        Ok(Token::SquareClose)
      }
      b'(' => {
        self.forward(1);
        Ok(Token::ParenOpen)
      }
      b')' => {
        self.forward(1);
        Ok(Token::ParenClose)
      }
      b'#' => {
        self.forward(1);
        Ok(Token::Hash)
      }
      b'"' => {
        self.forward(1);
        let buffer = self.search(|c| -> bool { c != b'"' });
        self.forward(1); // eat "
        Ok(Token::Str((buffer, "\"")))
      }
      b'\'' => {
        self.forward(1);
        let buffer = self.search(|c| -> bool { c != b'\'' });
        self.forward(1); // eat "
        Ok(Token::Str((buffer, "'")))
      }
      b'\\' => {
        self.forward(1);
        let c = self.curr_byte()?;
        self.forward(1);
        Ok(Token::Escape(c))
      }
      b'=' => {
        if self.starts_with(b"===") {
          self.forward(3);
          Ok(Token::TrippleEquals)
        } else if self.starts_with(b"==") {
          self.forward(2);
          Ok(Token::DoubleEquals)
        } else {
          self.forward(1);
          Ok(Token::Equals)
        }
      }
      b'a'..=b'z' | b'_' | b'A'..=b'Z' => Ok(Token::Keyword(self.search_keyword())),
      b' ' | b'\t' | b'\r' | b'\n' => {
        self.scan(|c| -> bool { matches!(c, b' ' | b'\t' | b'\r' | b'\n') });
        Ok(Token::Whitespace)
      }
      _ => self.next_utf16_char(),
    }
  }

  fn next_utf16_char(&mut self) -> Result<Token<'a>, ParseError> {
    let c = self.curr_byte()?;
    let mut len = 1;
    let mut utf8_step = 1;

    if c < 0x80 {
      len = 1;
    } else if c < 0xC0 {
      len = 1;
    } else if c < 0xE0 {
      len = 2;
    } else if c < 0xF0 {
      len = 3;
    } else if c < 0xF8 {
      len = 4;
      utf8_step = 2;
    }

    if len == 1 {
      self.forward(1);
      Ok(Token::Byte(c))
    } else {
      let utf8_pos = self.utf16_pos;
      let buffer = &self.source[self.pos..(self.pos + len)];
      self.forward(len);
      self.utf16_pos = utf8_pos + utf8_step;
      Ok(Token::Cluster(buffer))
    }
  }

  fn search_keyword(&mut self) -> &'a str {
    self.search(|c| -> bool { matches!(c, b'a'..=b'z' | b'A'..=b'Z' | b'0'..=b'9' | b'_' | b'-') })
  }

  fn starts_with(&mut self, pattern: &[u8]) -> bool {
    self.source[self.pos..].starts_with(pattern)
  }
  pub fn forward(&mut self, pos: usize) {
    self.pos += pos;
    self.utf16_pos += pos;
  }
  pub fn curr_byte(&mut self) -> Result<u8, ParseError> {
    if self.is_eof() {
      Err(ParseError::eof())
    } else {
      Ok(self.source[self.pos])
    }
  }
  fn search<FF>(&mut self, test: FF) -> &'a str
  where
    FF: Fn(u8) -> bool,
  {
    let start = self.pos;
    self.scan(test);
    self.since(start)
  }

  fn since(&mut self, start: usize) -> &'a str {
    std::str::from_utf8(&self.source[start..self.pos]).unwrap()
  }

  fn scan<FF>(&mut self, test: FF) -> Result<(), ParseError>
  where
    FF: Fn(u8) -> bool,
  {
    while !self.is_eof() {
      let pos = self.get_pos();
      let c = self.next_utf16_char()?;

      match c {
        Token::Byte(b) => {
          if !test(b) {
            self.set_pos(pos);
            break;
          }
        }
        _ => {}
      }
    }
    Ok(())
  }
  pub fn is_eof(&mut self) -> bool {
    self.pos >= self.source.len()
  }
  pub fn new(source: &'a str) -> Tokenizer {
    Tokenizer {
      source: source.as_bytes(),
      pos: 0,
      utf16_pos: 0,
    }
  }
  pub fn get_source(&self) -> &'a [u8] {
    self.source
  }
  pub fn new_from_bytes(source: &'a [u8], pos: Position) -> Tokenizer {
    Tokenizer {
      source: source,
      pos: pos.u8_pos,
      utf16_pos: pos.u16_pos,
    }
  }
}

impl<'a> BaseTokenizer<'a> for Tokenizer<'a> {
  fn is_eof(&self) -> bool {
    self.pos >= self.source.len()
  }
  fn skip(&mut self) -> Result<(), ParseError> {
    self.next()?;
    Ok(())
  }
  fn get_source(&self) -> &'a [u8] {
    self.source
  }
  fn get_pos(&self) -> usize {
    self.pos
  }
}
