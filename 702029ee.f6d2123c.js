(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||f[m]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(116)),a={id:"guide-writing-components-quickly",title:"Writing Components Efficiently",sidebar_label:"Writing Components Efficiently"},c={id:"guide-writing-components-quickly",isDocsHomePage:!1,title:"Writing Components Efficiently",description:"I think an easy way to start writing components is to simply write the HTML & CSS first. This involves writing a lot of redundant code up front, but seeing how all of the HTML & CSS is rendered will allow us to indentify what to componentize exactly.",source:"@site/docs/guide-writing-components.md",permalink:"/docs/guide-writing-components-quickly",editUrl:"https://github.com/crcn/paperclip/edit/master/packages/paperclip-website/docs/guide-writing-components.md",sidebar_label:"Writing Components Efficiently"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I think an easy way to start writing components is to simply write the HTML & CSS first. This involves writing a lot of redundant code up front, but seeing how all of the HTML & CSS is rendered will allow us to indentify what to componentize exactly."),Object(i.b)("p",null,"Let's use a simple website:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),"<style>\n  .header {\n\n  }\n</style>\n\n\n")),Object(i.b)("p",null,"This approach is fast & simple. The components also reveal themselves. Here they are:"),Object(i.b)("p",null,"\u261d\ud83c\udffb This much doesn't require much thought. It's a lot of copy & paste, but that  and now we can physically ",Object(i.b)("em",{parentName:"p"},"see")," where the boundaries are for components. Now we can start slicing things up into re-usable components."))}p.isMDXComponent=!0}}]);