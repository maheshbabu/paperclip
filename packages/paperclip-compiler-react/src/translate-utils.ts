import { Options } from "./utils";
import { ClassNameExport } from "paperclip";

export type TranslateContext = {
  fileUri: string;
  buffer: string;
  lineNumber: number;
  currentIndexKey?: string;
  scopes: {
    [identifier: string]: boolean;
  };
  isNewLine: boolean;
  hasLogicFile: boolean;
  classNames: Record<string, ClassNameExport>;
  indent: string;

  // @deprecated
  imports: Record<string, string>;
  importIds: string[];
  partIds: string[];
  args: Options;
  keyCount: number;
};

export const createTranslateContext = (
  fileUri: string,
  importIds: string[],
  imports: Record<string, string>,
  classNames: Record<string, ClassNameExport>,
  partIds: string[],
  hasLogicFile: boolean,
  args: Options,
  indent = "  "
): TranslateContext => ({
  buffer: "",
  classNames,
  fileUri,
  importIds,
  partIds,
  scopes: {},
  imports,
  hasLogicFile,
  isNewLine: true,
  lineNumber: 0,
  indent,
  args,
  keyCount: 0
});

export const addBuffer = (buffer: string, context: TranslateContext) => ({
  ...context,
  buffer:
    context.buffer +
    (context.isNewLine ? context.indent.repeat(context.lineNumber) : "") +
    buffer,
  isNewLine: buffer.indexOf("\n") === buffer.length - 1
});

export const startBlock = (context: TranslateContext) => ({
  ...context,
  lineNumber: context.lineNumber + 1
});

export const endBlock = (context: TranslateContext) => ({
  ...context,
  lineNumber: context.lineNumber - 1
});
