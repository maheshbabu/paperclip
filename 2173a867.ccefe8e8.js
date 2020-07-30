(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||i;return t?o.a.createElement(m,l(l({ref:n},c),{},{components:t})):o.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),i=(t(0),t(116)),a={id:"guide-third-party-libraries",title:"Using Third-party Libraries",sidebar_label:"Third-party Libraries"},l={id:"guide-third-party-libraries",isDocsHomePage:!1,title:"Using Third-party Libraries",description:"Third-party CSS",source:"@site/docs/guide-third-party-libraries.md",permalink:"/docs/guide-third-party-libraries",editUrl:"https://github.com/crcn/paperclip/edit/master/packages/paperclip-website/docs/guide-third-party-libraries.md",sidebar_label:"Third-party Libraries",sidebar:"docs",previous:{title:"Organizing Paperclip components",permalink:"/docs/guide-organization"},next:{title:"Dynamically Changing Styles Using JavaScript",permalink:"/docs/guide-dynamic-styles"}},s=[{value:"Third-party CSS",id:"third-party-css",children:[]},{value:"Styling third-party components",id:"styling-third-party-components",children:[]}],c={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"third-party-css"},"Third-party CSS"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ergonomics for this aren't ideal, and I plan on making tooling to make this experiense better.")),Object(i.b)("p",null,"If you're using third-party CSS such as Bootstrap or Tailwind, you'll need to move the CSS over\nto a ",Object(i.b)("inlineCode",{parentName:"p"},"*.pc")," file. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".my-1 {\n  /* tailwind code */\n}\n\n.my-2 {\n  /* tailwind code */\n}\n\n.text-color-black-100 {\n  /* tailwind code */\n}\n")),Object(i.b)("p",null,"This must be converted to Paperclip like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"<style>\n  @export {\n    .my-1 {\n      /* tailwind code */\n    }\n\n    .my-2 {\n      /* tailwind code */\n    }\n\n    .text-color-black-100 {\n      /* tailwind code */\n    }\n  }\n</style>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"@export")," block is necessary for CSS that you plan on using in other Paperclip files, since Paperclip requires ",Object(i.b)("em",{parentName:"p"},"explicity"),". You can make all selectors global with ",Object(i.b)("inlineCode",{parentName:"p"},":global")," if you really want to, but I don't recommend that because you're losing safety in favor of convenience. ")),Object(i.b)("p",null,"\u261d Here's how you can use these styles in another Paperclip file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<import src="modules/tailwind.pc" as="tw">\n\n<div className=">>>tw.text-color-black-100 >>>tw.my-1">\n  Something\n</div>\n')),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/crcn/paperclip/tree/master/examples/tailwind"}),"Tailwind example")," is a good place to start if you're looking to do this."),Object(i.b)("h2",{id:"styling-third-party-components"},"Styling third-party components"),Object(i.b)("p",null,"You may use classes defined in Paperclip on third-party components. Here's a simple example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<style>\n  @export {\n    .my-styles {\n\n      /* some components may have nested style rules in the global namespace. \n      In that case you can use the :global selector */\n      :global(.nested-rule) {\n\n      }\n    }\n  }\n</style>\n")),Object(i.b)("p",null,"Then, in your JSX code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import * as ui from "./Component.pc";\nimport SomeThirdPartyComponent from "some-third-paty-component";\n\n<SomeThirdPartyComponent className={ui.classNames["my-style"]} />\n')),Object(i.b)("p",null,"\u261d this works for many cases. However, it's a bit inconvenient since you'll be using the browser\nin order to debug your styles. To make things easier, you can copy & paste the third-party component's HTML & CSS directly in your PC file & open it up in VS Code to visually style it. Don't worry, this approach is only a guide to make custom styling easier. It's not for production."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/third-party-libraries/copy-paste.gif",alt:"alt copy-paste html"}))),Object(i.b)("p",null,"Let's use a real example now. Here's a custom theme for the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-select.com/"}),"react select")," module:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:"live",live:!0}),'// file: Select.pc\n\n<import src="./tokens.pc">\n\n\x3c!-- style overrides --\x3e\n<style>\n  .wrapper {\n    :global(.select__) {\n      &control {\n        display: flex;\n        background: var(--color-background);\n        border: none;\n        border-radius: var(--border-radius-default) var(--border-radius-default) 0 0;\n        color: var(--color-white-default);\n        border-bottom: 1px solid #575752;\n        transition: box-shadow 300ms ease-in-out;\n        cursor: pointer;\n        box-sizing: border-box;\n        padding-bottom: 2px;\n        padding-top: 1px;\n        transition: border 120ms ease-in-out;\n\n        &--is-focused {\n          border-bottom: 1px solid #fff;\n          background: var(--color-background-lighter);\n          box-shadow: none;\n          outline: none;\n        }\n        &:hover {\n          border-bottom: 1px solid #fff;\n        }\n      }\n      &value-container,\n      &single-value,\n      &multi-value__label,\n      &input {\n        color: var(--color-white-default);\n      }\n      &menu-list,\n      &multi-value {\n        background: var(--color-background);\n        box-shadow: var(--shadow-4);\n        border-radius: 4px;\n      }\n      &multi-value {\n        border: 1px solid #575752;\n      }\n      &option {\n        color: var(--color-white-default);\n        cursor: pointer;\n        transition: background 70ms ease-in-out;\n\n        &--is-focused {\n          background: var(--color-grey-300);\n        }\n        &--is-selected {\n          background:  var(--color-black-100);\n          font-weight: 600;\n        }\n        &--is-selected.select__option--is-focused {\n          background:  var(--color-grey-300);\n        }\n        &:hover {\n          background:  var(--color-background);\n        }\n      }\n      &placeholder,\n      &single-value {\n        user-select: none;\n      }\n    }\n  }\n\n  .preview {\n    padding: 30px;\n    background: var(--color-black-default);\n    width: 100vw;\n    height: 100vh;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n</style>\n\n\x3c!-- TODO - need some way to omit this from the build. Maybe no-compile attribute --\x3e\n<style>\n\n  /* copied from chrome. Here just for the preview */\n  .css-2b097c-container {\n    position:relative;\n    box-sizing:border-box;\n  }\n\n  .css-1ml51p6-MenuList {\n    max-height:300px;\n    overflow-y:auto;\n    padding-bottom:4px;\n    padding-top:4px;\n    position:relative;\n    -webkit-overflow-scrolling:touch;\n    box-sizing:border-box;\n  }\n  \n  .css-yt9ioa-option {\n    background-color:transparent;\n    color:inherit;\n    cursor:default;\n    display:block;\n    font-size:inherit;\n    padding:8px 12px;\n    width:100%;\n    -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n    -webkit-tap-highlight-color:rgba(0,0,0,0);\n    box-sizing:border-box;\n  }\n\n  .css-1uccc91-singleValue {\n    color:hsl(0,0%,20%);\n    margin-left:2px;\n    margin-right:2px;\n    max-width:calc(100% - 8px);\n    overflow:hidden;\n    position:absolute;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    top:50%;\n    -webkit-transform:translateY(-50%);\n    -ms-transform:translateY(-50%);\n    transform:translateY(-50%);\n    box-sizing:border-box;\n  }\n  .css-26l3qy-menu {\n    top:100%;\n    border-radius:4px;\n    box-shadow:0 0 0 1px hsla(0,0%,0%,0.1),0 4px 11px hsla(0,0%,0%,0.1);\n    margin-bottom:8px;\n    margin-top:8px;\n    position:absolute;\n    width:100%;\n    z-index:1;\n    box-sizing:border-box;\n  }\n\n\n  .css-1hwfws3 {\n    align-items:center;\n    display:flex;\n    flex:1;\n    flex-wrap:wrap;\n    padding:2px 8px;\n    -webkit-overflow-scrolling:touch;\n    position:relative;\n    overflow:hidden;\n    box-sizing:border-box;\n  }\n\n  .css-w8afj7-Input {\n    margin:2px;\n    padding-bottom:2px;\n    padding-top:2px;\n    visibility:visible;\n    color:hsl(0,0%,20%);\n    box-sizing:border-box;\n  }\n\n  .css-tj5bde-Svg {\n    fill: currentColor;\n    line-height: 1;\n    stroke: currentColor;\n    stroke-width: 0;\n  }\n  .css-1okebmr-indicatorSeparator {\n    align-self:stretch;\n    background-color:hsl(0,0%,80%);\n    margin-bottom:8px;\n    margin-top:8px;\n    width:1px;\n    box-sizing:border-box;\n  }\n  \n  .css-yk16xz-control {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    padding: 2px 8px;\n    overflow: hidden;\n    box-sizing: border-box;\n  }\n</style>\n\n\n<div export component as="Wrapper" className="wrapper">\n  {children}\n</div>\n  \n<div className="preview">\n  <Wrapper>\n\n   \x3c!-- coppied from Chrome inspector --\x3e\n  <div class="StyledSelect-sc-1taf1wi-0 hAUldd css-2b097c-container">\n    <div class="select__control select__control--menu-is-open css-yk16xz-control">\n        <div class="select__value-container select__value-container--has-value css-1hwfws3">\n          <div class="select__single-value css-1uccc91-singleValue">Last modified</div>\n          <div class="css-w8afj7-Input">\n              <div class="select__input" style="display: inline-block;">\n                <input autocapitalize="none" autocomplete="off" autocorrect="off" id="Sort by" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-label="Sort by" style="box-sizing: content-box; width: 2px; background: rgba(0, 0, 0, 0) none repeat scroll 0px center; border: 0px none; font-size: inherit; opacity: 1; outline: currentcolor none 0px; padding: 0px; color: inherit;" value="">\n                <div style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 16px; font-family: Eina, sans-serif; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;"></div>\n              </div>\n          </div>\n        </div>\n        <div class="select__indicators css-1g48xl4-IndicatorsContainer">\n          <span class="select__indicator-separator css-1okebmr-indicatorSeparator"></span>\n          <div aria-hidden="true" class="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer">\n              <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-tj5bde-Svg">\n                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>\n              </svg>\n          </div>\n        </div>\n    </div>\n    <div class="select__menu css-26l3qy-menu">\n        <div class="select__menu-list css-1ml51p6-MenuList">\n          <div class="select__option select__option--is-focused css-yt9ioa-option" id="react-select-2-option-0" tabindex="-1">Alphabetically</div>\n          <div class="select__option css-yt9ioa-option" id="react-select-2-option-1" tabindex="-1">Most recently added</div>\n          <div class="select__option select__option--is-selected css-yt9ioa-option" id="react-select-2-option-2" tabindex="-1">Last modified</div>\n        </div>\n    </div>\n  </div>\n\n  </Wrapper>\n</div>\n\n// file: tokens.pc\n\n<style>\n  :root {\n    --border-radius-default: 4px;\n    --color-white-default: #f5f5f3;\n\n    --color-grey-300: #6b6b65;\n\n    --color-black-400: #252524;\n    --color-black-200: #2d2d2a;\n    --color-black-100: #2f2f2c;\n    --color-black-default: #171716;\n\n    --color-background: rgba(46, 45, 42, 0.9);\n    --color-background-lighter: rgba(46, 45, 42, 1);\n  }\n\n</style>\n')),Object(i.b)("p",null,"Here's how we can apply this theme in React code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Wrapper as SelectWrapper } from './Select.pc';\nimport Select from 'react-select';\n\nfunction StyledSelect(props) {\n  return (    \n    <SelectWrapper>\n      <Select classNamePrefix=\"select\" {...props} />\n    </SelectWrapper>\n  );\n}\n")),Object(i.b)("p",null,"That's all there is to it really. "))}p.isMDXComponent=!0}}]);