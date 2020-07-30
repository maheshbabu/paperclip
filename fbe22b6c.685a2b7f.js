(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(116)),o={id:"guide-dynamic-styles",title:"Dynamically Changing Styles Using JavaScript",sidebar_label:"Dynamic Styles"},c={id:"guide-dynamic-styles",isDocsHomePage:!1,title:"Dynamically Changing Styles Using JavaScript",description:"While Paperclip can cover most of your UI, there will probably be edge cases where you need to compute styles using code. Here's an example Paperclip file:",source:"@site/docs/guide-dynamic-styles.md",permalink:"/docs/guide-dynamic-styles",editUrl:"https://github.com/crcn/paperclip/edit/master/packages/paperclip-website/docs/guide-dynamic-styles.md",sidebar_label:"Dynamic Styles",sidebar:"docs",previous:{title:"Using Third-party Libraries",permalink:"/docs/guide-third-party-libraries"},next:{title:"Theming",permalink:"/docs/guide-theming"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"While Paperclip can cover ",Object(i.b)("em",{parentName:"p"},"most")," of your UI, there will probably be edge cases where you need to compute styles using code. Here's an example Paperclip file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),'<style>\n  .progress {\n    .bar {\n      background: linear-gradient(to right, #F60, #00CC00);\n      border-radius: 99px;\n      height: 3px;\n      box-sizing: border-box;\n      transition: 1s ease-out;\n    }\n    margin: 4px;\n    box-sizing: border-box;\n  }\n</style>\n\n\x3c!-- {style} must be explicity defined for it to be assignable to this element --\x3e\n<div export component as="Progress" class="progress">\n  <div class="bar" style={barStyle} />\n</div>\n\n\x3c!-- previews --\x3e\n\n<Progress barStyle="width: 50%" />\n<Progress barStyle="width: 75%" />\n<Progress barStyle="width: 100%" />\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This code can actually be done purely in CSS, but we'll just use it for this demo anyways. ")),Object(i.b)("p",null,"In JavaScript, we can simply add styles like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {Progress} from "./progress.pc";\n\n<Progress barStyle={{ width: `${progress}%` }} />\n')),Object(i.b)("p",null,"That's just about it. Just pass a ",Object(i.b)("inlineCode",{parentName:"p"},"style")," attribute to Paperclip whenever you need to do styling in JavaScript. And be sure to expose ",Object(i.b)("inlineCode",{parentName:"p"},"{style?}")," in Paperclip, otherwise it won't work. If you need to stylize nested elements, you can do this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div export component as="Something">\n  <div style={myNestedStyle}>\n  </div>\n</div>\n')))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(y,c(c({ref:t},l),{},{components:n})):a.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);