---
id: configure-paperclip
title: Paperclip Config
sidebar_label: paperclip.config.json
---

Paperclip looks for a `paperclip.config.json` file which provides information about your project, and how
to compile your `*.pc` files. It typically lives in your project root directory alongside your `package.json` file.

Here's an example of what it might look like:


```javascript
{

  // options for the target compiler "name"
  "compilerOptions": {

    // compiler that translate `*.pc` files into the target framework. 
    "name": "paperclip-compiler-react"
  },

  // directory where all of the Paperclip files live
  "sourceDirectory": "./src"
}
```