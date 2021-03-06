// if (typeof TextDecoder === "undefined") {
//   // eslint-disable-next-line
//   global.TextDecoder = require('util').TextDecoder;
// }

import { createEngine as createEngine2 } from "./esm";
import init, { NativeEngine } from "./native/web/paperclip-no-import-meta.js";

// eslint-disable-next-line
const initp = init("/paperclip_bg.wasm").catch(() => {});

export const createEngine = createEngine2(async (...args) => {
  await initp;
  return NativeEngine.new(...args);
});
