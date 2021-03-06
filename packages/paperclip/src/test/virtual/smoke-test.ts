import { expect } from "chai";
import { stringifyVirtualNode, stringifyCSSSheet } from "paperclip-utils";
import { createMockEngine, Graph } from "../utils";

describe(__filename + "#", () => {
  [
    // basic parsing
    [
      {
        "/entry.pc": `Hello World`
      },
      {},
      `<style></style>Hello World`
    ],
    [
      {
        "/entry.pc": `<span>more text</span>`
      },
      {},
      `<style></style><span data-pc-80f4925f>more text</span>`
    ],

    // styles
    [
      {
        "/entry.pc": `
          <style>
            span {
              color: red;
            }
          </style>
          <span>more text</span>
        `
      },
      {},
      `
      <style>span[data-pc-80f4925f] { color:red; }</style><span data-pc-80f4925f>more text</span> 
      `
    ],

    // components
    [
      {
        "/button.pc": `
          <style>
            span {
              color: red;
            }
          </style>
          <span export component as="default">{children}!</span>

        `,
        "/entry.pc": `
          <import as="something" src="./button.pc" />
          <something>hello world</something>
        `
      },
      {},
      `
      <style>span[data-pc-1d7dbc06] { color:red; }</style><span data-pc-1d7dbc06>hello world!</span>`
    ],

    // basic css
    [
      {
        "/button.pc": `
          <style>
            /* indivisual selectors */
            .class { }
            .a1.b1 {}
            .a.b.c {}
            .a.b {}

            .class[a] {}
            .class1.class2 {}
            .class1 .class2 {}
            #id {}
            * {}
            element {}
            element.class {}
            [attribute] {}
            [attribute=value]  {}
            [attribute="value"]  {}
            [attribute='value']  {}
            /*[attribute~='value']  {}
            [attribute^='value']  {}
            [attribute$='value']  {}
            [attribute$='value']  {}
            [attribute*='value']  {}*/
            div[attr1][attr1]  {}
            :active {}
            ::active {}
            element::active {}
            ::after {}

            /* functions */
            ::lang(it) {}
            p::lang(it) {}
            :not(p) {}
            :nth-child(5) {}
            :placeholder {}

            /* groups */
            element1, element2 {}
            element, .class, #id.class {}

            /* descendent */
            element1 element2 {}
            element1.class element2[attr][attr2] {}
            element1.class element2[attr], #id.group {}

            /* children */
            element1 > element2 {}
            element1 > .child .descendent {}
            element1 > .child .descendent, [group-attr="something"] {}

            /* next sibling */
            element1 + element2 {}

            /* sibling */
            element1 ~ element2 {}

            /* media queries */
            @media only screen and (max-width: 600px) {
              div {
                color: red;
              }
            }

            /* keyframes */
            @keyframes mymove {
              from {top: 0px;}
              to {top: 200px;}
            }
            
          </style>
          <span export component as="default">{children}!</span>

        `,
        "/entry.pc": `
          <import as="something" src="./button.pc" />
          <something>hello world</something>
        `
      },
      {},
      `<style>[class]._1d7dbc06_class { } [class]._1d7dbc06_a1[class]._1d7dbc06_b1 { } [class]._1d7dbc06_a[class]._1d7dbc06_b[class]._1d7dbc06_c { } [class]._1d7dbc06_a[class]._1d7dbc06_b { } [class]._1d7dbc06_class[a] { } [class]._1d7dbc06_class1[class]._1d7dbc06_class2 { } [class]._1d7dbc06_class1 [class]._1d7dbc06_class2 { } #id[data-pc-1d7dbc06] { } [data-pc-1d7dbc06] { } element[data-pc-1d7dbc06] { } element[class]._1d7dbc06_class { } [attribute][data-pc-1d7dbc06] { } [attribute=value][data-pc-1d7dbc06] { } [attribute="value"][data-pc-1d7dbc06] { } [attribute='value'][data-pc-1d7dbc06] { } div[attr1][attr1][data-pc-1d7dbc06] { } [data-pc-1d7dbc06]:active { } [data-pc-1d7dbc06]::active { } element::active[data-pc-1d7dbc06] { } [data-pc-1d7dbc06]::after { } [data-pc-1d7dbc06]:lang(it) { } p:lang(it)[data-pc-1d7dbc06] { } [data-pc-1d7dbc06]:not(p[data-pc-1d7dbc06]) { } [data-pc-1d7dbc06]:nth-child(5) { } [data-pc-1d7dbc06]:placeholder { } element1[data-pc-1d7dbc06], element2[data-pc-1d7dbc06] { } element[data-pc-1d7dbc06], [class]._1d7dbc06_class, #id[class]._1d7dbc06_class { } element1[data-pc-1d7dbc06] element2[data-pc-1d7dbc06] { } element1[class]._1d7dbc06_class element2[attr][attr2][data-pc-1d7dbc06] { } element1[class]._1d7dbc06_class element2[attr][data-pc-1d7dbc06], #id[class]._1d7dbc06_group { } element1[data-pc-1d7dbc06] > element2[data-pc-1d7dbc06] { } element1[data-pc-1d7dbc06] > [class]._1d7dbc06_child [class]._1d7dbc06_descendent { } element1[data-pc-1d7dbc06] > [class]._1d7dbc06_child [class]._1d7dbc06_descendent, [group-attr="something"][data-pc-1d7dbc06] { } element1[data-pc-1d7dbc06] + element2[data-pc-1d7dbc06] { } element1[data-pc-1d7dbc06] ~ element2[data-pc-1d7dbc06] { } @media only screen and (max-width: 600px) { div[data-pc-1d7dbc06] { color:red; } } @keyframes _1d7dbc06_mymove { from { top:0px; } to { top:200px; } }</style><span data-pc-1d7dbc06>hello world!</span>`

      // TODO - import css
    ],
    [
      // parse different tag names
      {
        "/entry.pc": `
          <span component as="test">
          {_someRef}
          {_some5ref}
          {_ref}
          {$$ref}
          </span>

          <test 
            _someRef="a" 
            _some5ref="b" 
            _ref="c"
            $$ref="d"
          />
        `
      },
      {},
      `<style></style><span data-pc-80f4925f>abcd</span>`
    ],
    [
      // parse different tag names
      {
        "/entry.pc": `
          <span component as="test">{a} b</span>
          <test a="c" />
        `
      },
      {},
      `<style></style><span data-pc-80f4925f>c b</span>`
    ],
    [
      // class names prefixed with scope
      {
        "/entry.pc": `
          <span component as="test" class="something something2">
          </span>
          <test />
        `
      },
      {},
      `<style></style><span class="_80f4925f_something something _80f4925f_something2 something2" data-pc-80f4925f></span>`
    ],
    [
      // class name isn't used if not explicitly defined in component
      {
        "/entry.pc": `
          <import as="Message" src="./message.pc">
          <Message class="red" />
        `,

        // ensure that root is span
        "/message.pc": `<span export component as="default" class="blue">
            message
          </span>`
      },

      {},
      `<style></style><span class="_1acb798_blue blue" data-pc-1acb798>message </span>`
    ],
    [
      // class piercing
      {
        "/entry.pc": `
          <import as="Message" src="./message.pc">
          <Message class="$red" />
        `,

        // ensure that root is span
        "/message.pc": `<span export component as="default" {class}>
            message
          </span>`
      },
      {},
      `<style></style><span class="_80f4925f_red red" data-pc-1acb798>message </span>`
    ],
    [
      // no class mod for components if shadow pierce operator is not defined
      {
        "/entry.pc": `
          <import as="Message" src="./message.pc">
          <Message class="red" />
        `,

        // ensure that root is span
        "/message.pc": `<span export component as="default" {class}>
            message
          </span>`
      },

      {},
      `<style></style><span class="_1acb798_red red" data-pc-1acb798>message </span>`
    ],
    [
      // style classes prefixed with scope
      {
        "/entry.pc": `
          <style>
            .something > .something2 {

            }
          </style>
          <span component as="test" class="something2">
          </span>
          <test />
        `
      },
      {},
      `<style>[class]._80f4925f_something > [class]._80f4925f_something2 { }</style><span class="_80f4925f_something2 something2" data-pc-80f4925f></span>`
    ],
    [
      // no class mod for components if shadow pierce operator is not defined
      {
        "/entry.pc": `
          <import as="Message" src="./message.pc">
          <Message class="$red" />
          <span />
        `,

        // ensure that root is span
        "/message.pc": `<span export component as="default" class="blue {class}">
            message
          </span>`
      },
      {},
      `<style></style><span class="_1acb798_blue blue _80f4925f_red red" data-pc-1acb798>message </span><span data-pc-80f4925f></span>`
    ],
    // [
    //   // nexted style declarations
    //   {
    //     "/entry.pc": `
    //       <style>
    //         :global(.a) {
    //           .b {

    //           }
    //         }
    //       </style>
    //       <div>ok</div>
    //     `
    //   },
    //   {},
    //   `<style>.a { color:blue; display:block; } .a--secondary { } .a--secondary--thirdly { color:blue; } .a.c { } .a ._80f4925f_d { } .a > .e { color:blue; } .a > .e-f { color:red; }</style><div data-pc-80f4925f>ok</div>`
    // ],
    [
      // nexted style declarations
      {
        "/entry.pc": `
          <style>
            :global(.a) {
              &--secondary {
                &--thirdly {
                  color: blue;
                }
              }
              color: blue;
              &.c {

              }
              display: block;
              & .d {

              }
              & > :global(.e) {
                &-f {
                  color: red;
                }
                color: blue;
              }
            }
          </style>
          <div>ok</div>
        `
      },
      {},
      `<style>[class].a { color:blue; display:block; } [class].a--secondary { } [class].a--secondary--thirdly { color:blue; } [class].a[class].c { } [class].a [class]._80f4925f_d { } [class].a > [class].e { color:blue; } [class].a > [class].e-f { color:red; }</style><div data-pc-80f4925f>ok</div>`
    ],
    [
      // no class mod for components if shadow pierce operator is not defined
      {
        "/entry.pc": `
          <import as="Message" src="./message.pc">
          <Message component as="test">
            {children}!
          </Message>
          <test>child</test>
        `,

        // ensure that root is span
        "/message.pc": `<span export component as="default">
            {children}
          </span>`
      },
      {},
      `<style></style><span data-pc-1acb798>child! </span>`
    ],
    [
      // no class mod for components if shadow pierce operator is not defined
      {
        "/entry.pc": `
          <style>
            .a, .b {
              &--c {
                color: blue;
              }
            }
          </style>
        `
      },
      {},
      `<style>[class]._80f4925f_a, [class]._80f4925f_b { } [class]._80f4925f_a--c { color:blue; } [class]._80f4925f_b--c { color:blue; }</style>`
    ],
    [
      // no class mod for components if shadow pierce operator is not defined
      {
        "/entry.pc": `
          <style>
            :global(.a, .b) {
              &--c {
                color: blue;
              }
            }
          </style>
        `
      },
      {},
      `<style>[class].a, [class].b { } [class].a--c { color:blue; } [class].b--c { color:blue; }</style>`
    ],
    [
      // no class mod for components if shadow pierce operator is not defined
      {
        "/entry.pc": `
          <style>
            :global(.a, .b) {
              &--c {
                color: blue;
              }
            }
          </style>
        `
      },
      {},
      `<style>[class].a, [class].b { } [class].a--c { color:blue; } [class].b--c { color:blue; }</style>`
    ],
    [
      // no class mod for components if shadow pierce operator is not defined
      {
        "/entry.pc": `
          <style>
            .a {
              &--c {
                color: blue;
              }
            }
          </style>
        `
      },
      {},
      `<style>[class]._80f4925f_a { } [class]._80f4925f_a--c { color:blue; }</style>`
    ],
    [
      // no class mod for components if shadow pierce operator is not defined
      {
        "/entry.pc": `
          <style>
            :global(.a, .b) {
              &--c {
                color: blue;
              }
            }
          </style>
        `
      },
      {},
      `<style>[class].a, [class].b { } [class].a--c { color:blue; } [class].b--c { color:blue; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            @mixin a {
              color: b;
            }
            
            .a {
              @include a;
              background: c;
            }
          </style>
        `
      },
      {},
      `<style>[class]._80f4925f_a { color:b; background:c; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            @mixin a {
              color: b;
            }
            @mixin b {
              @include a;
              color: c;
            }
            
            .c {
              @include b;
              background: c;
            }
          </style>
        `
      },
      {},

      `<style>[class]._80f4925f_c { color:b; color:c; background:c; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <import as="a" src="./module.pc">
          <style>
            @export {
              .c {
                @include a.b;
                background: c;
              }
            }
          </style>
        `,
        "/module.pc": `
          <import as="a" src="./module2.pc">
          <style>
            @export {
              @mixin b {
                @include a.b;
                color: blue;
              }
            }          
          </style>
        `,
        "/module2.pc": `
          <style>
            @export {
              @mixin b {
                color: orange;
              }
            }          
          </style>
        `
      },
      {},
      `<style>[class]._80f4925f_c { color:orange; color:blue; background:c; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <import as="mod" src="./module.pc">
          <mod>
            <mod.item>a</mod.item>
            <mod.item>b</mod.item>
            <mod.item>c</mod.item>
          </mod>
        `,
        "/module.pc": `
          <div export component as="default">
            {children}
          </div>
          <span export component as="item">
            {children}
          </span>
        `
      },
      {},
      `<style></style><div data-pc-139cec8e><span data-pc-139cec8e>a</span><span data-pc-139cec8e>b</span><span data-pc-139cec8e>c</span></div>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            div {
              &[b] {
              }
            }
          </style>

        `
      },
      {},
      `<style>div[data-pc-80f4925f] { } div[data-pc-80f4925f][b] { }</style>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            div {
              &[data-hover], &:hover {
                color: orange;
              }
              & [data-hover], :hover {
                color: blue;
              }
            }
          </style>
        `
      },
      {},
      `<style>div[data-pc-80f4925f] { } div[data-pc-80f4925f][data-hover], div[data-pc-80f4925f]:hover { color:orange; } div[data-pc-80f4925f] [data-hover][data-pc-80f4925f], div[data-pc-80f4925f] [data-pc-80f4925f]:hover { color:blue; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            a {
              &-b, &-b2 {
                &-c, &-c2 {
                  color: blue;
                }
              }
            }
          </style>
        `
      },
      {},
      `<style>a[data-pc-80f4925f] { } a[data-pc-80f4925f]-b, a[data-pc-80f4925f]-b2 { } a[data-pc-80f4925f]-b-c, a[data-pc-80f4925f]-b-c2 { color:blue; } a[data-pc-80f4925f]-b2-c, a[data-pc-80f4925f]-b2-c2 { color:blue; }</style>`
    ],

    // & + &
    [
      {
        "/entry.pc": `
          <style>
            div {
              & + & {
                color: blue;
              }
            }
          </style>
        `
      },
      {},
      `<style>div[data-pc-80f4925f] { } div[data-pc-80f4925f] + div[data-pc-80f4925f] { color:blue; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            a::before {
              content: "blue";
            }
          </style>
        `
      },
      {},
      `<style>a::before[data-pc-80f4925f] { content:"blue"; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            @keyframes example {
              0% {background-color: red;}
              100% {background-color: yellow;}
            }

            div {
              animation-name: example;
              animation: example 5s infinite;
            }
          </style>
        `
      },
      {},
      `<style>@keyframes _80f4925f_example { 0% { background-color:red; } 100% { background-color:yellow; } } div[data-pc-80f4925f] { animation-name:_80f4925f_example; animation:_80f4925f_example 5s infinite; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            @mixin a {
              color: red;
            }
            @mixin b {
              color: blue;
            }

            div {
              @include a b;
            }
          </style>
        `
      },
      {},
      `<style>div[data-pc-80f4925f] { color:red; color:blue; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <import as="test" src="./module.pc">
          <div className="$test.button"></div>
        `,
        "/module.pc": `
          <style>
            @export {
              .button {
                color: red;
              }
            }
          </style>
        `
      },
      {},
      `<style>[class]._139cec8e_button { color:red; }</style><div className="_139cec8e_button button" data-pc-80f4925f></div>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            [a="b"] {
              color: blue;
            }
            [a~="c"] {
              color: purple;
            }
            [a^="c2"] {
              color: black;
            }
            [a$="c3"] {
              color: orange;
            }
          </style>
        `
      },

      {},
      `<style>[a="b"][data-pc-80f4925f] { color:blue; } [a~="c"][data-pc-80f4925f] { color:purple; } [a^="c2"][data-pc-80f4925f] { color:black; } [a$="c3"][data-pc-80f4925f] { color:orange; }</style>`
    ],
    [
      {
        "/entry.pc": `
          <style>
            .a {
              & + b {
                &:hover:active:test {

                }
              }
            }
          </style>
        `
      },
      {},
      `<style>[class]._80f4925f_a { } [class]._80f4925f_a + b[data-pc-80f4925f] { } [class]._80f4925f_a + b[data-pc-80f4925f]:hover:active:test { }</style>`
    ]
  ].forEach(([graph, , expectedHTML]: [Graph, any, string]) => {
    it(`can render "${JSON.stringify(graph)}"`, async () => {
      const engine = await createMockEngine(graph);

      const { sheet, preview, importedSheets: sheets } = await engine.run(
        "/entry.pc"
      );

      const sheetText = [...sheets.map(({ sheet }) => sheet), sheet]
        .map(sheet => {
          return stringifyCSSSheet(sheet, { protocol: "" });
        })
        .join("\n")
        .trim();

      const buffer = `<style>${sheetText}</style>${stringifyVirtualNode(
        preview
      )}`;
      expect(buffer.replace(/[\r\n\t\s]+/g, " ").trim()).to.eql(
        String(expectedHTML)
          .replace(/[\r\n\t\s]+/g, " ")
          .trim()
      );
    });
  });
});
