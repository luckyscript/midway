"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},o="Static file hosting",l={unversionedId:"extensions/static_file",id:"extensions/static_file",title:"Static file hosting",description:"midway provides static resource hosting components based on the koa-static-cache module.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/static_file.md",sourceDirName:"extensions",slug:"/extensions/static_file",permalink:"/en/docs/extensions/static_file",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/static_file.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Role authentication",permalink:"/en/docs/extensions/casbin"},next:{title:"Cross-domain",permalink:"/en/docs/extensions/cross_domain"}},s={},d=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Introducing components",id:"introducing-components",level:2},{value:"Use",id:"use",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Modify default behavior",id:"modify-default-behavior",level:3},{value:"Add a new directory",id:"add-a-new-directory",level:3},{value:"Available configuration",id:"available-configuration",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"1. The route under the function does not take effect",id:"1-the-route-under-the-function-does-not-take-effect",level:3},{value:"2. Default index.html",id:"2-default-indexhtml",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"static-file-hosting"},"Static file hosting"),(0,r.kt)("p",null,"midway provides static resource hosting components based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koajs/static-cache"},"koa-static-cache")," module."),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Web support"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udcac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udcac Some function computing platforms do not support streaming request responses. Please refer to the corresponding platform capabilities.")),(0,r.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/static-file@3 --save\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/static-file": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"introducing-components"},"Introducing components"),(0,r.kt)("p",null,"First, introduce components and import them in ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as staticFile from '@midwayjs/static-file';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    koa\n    staticFile\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory in the root directory of the project is hosted."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 public\n|   \u251c\u2500\u2500 index.html\n\u2502   \u2514\u2500\u2500 hello.js\n\u2502\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,"You can directly use the path to access ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /public/index.html")," and obtain the corresponding results."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"modify-default-behavior"},"Modify default behavior"),(0,r.kt)("p",null,"The hosting of the resource uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"dirs")," field, which has a ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," attribute that we can modify."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// {app_root}/src/config/config.default.ts\nexport default {\n  // ...\n  staticFile: {\n    dirs: {\n      default: {\n        prefix: '/',\n        dir: 'xxx',\n      },\n    }\n  },\n}\n")),(0,r.kt)("p",null,"The value of the object in ",(0,r.kt)("inlineCode",{parentName:"p"},"dirs")," is merged with the value under the ",(0,r.kt)("inlineCode",{parentName:"p"},"staticFile")," and passed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"koa-static-cache")," middleware."),(0,r.kt)("h3",{id:"add-a-new-directory"},"Add a new directory"),(0,r.kt)("p",null,"You can modify dirs and add a new directory. the key is not repeated, and the value is merged with the default configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// {app_root}/src/config/config.default.ts\nexport default {\n  // ...\n  staticFile: {\n    dirs: {\n      default: {\n        prefix: '/',\n        dir: 'xxx',\n      },\n      another: {\n        prefix: '/',\n        dir: 'xxx',\n      },\n    }\n    // ...\n  },\n}\n")),(0,r.kt)("h3",{id:"available-configuration"},"Available configuration"),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koajs/static-cache"},"koa-static-cache")," configurations are supported. The default configuration is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dirs"),(0,r.kt)("td",{parentName:"tr",align:null},'{"default": {prefix: "/public", "dir": "xxxx"}}'),(0,r.kt)("td",{parentName:"tr",align:null},"Managed directories, in order to support multiple directories, are objects. ",(0,r.kt)("br",null),"In addition to the default, other keys can be added at will, and the object values in dirs will be merged with the external default values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dynamic"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Load files dynamically instead of caching after initialization reading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preload"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the cache is being initialized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxAge"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod is 31536000, others are 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum cache time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},"Prod is true and the rest is false"),(0,r.kt)("td",{parentName:"tr",align:null},"Use buffer character to return")))),(0,r.kt)("p",null,"For more configuration, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koajs/static-cache"},"koa-static-cache")," ."),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"1-the-route-under-the-function-does-not-take-effect"},"1. The route under the function does not take effect"),(0,r.kt)("p",null,"Function routes need to be explicitly configured to take effect. Generally, a wildwith route is added for static files, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"/*")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/*"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Provide,\n  ServerlessTrigger,\n  ServerlessTriggerType\n} from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloHTTPService {\n\n  @ServerlessTrigger(ServerlessTriggerType.HTTP, {\n    path: '/public/*',\n    method: 'get',\n  })\n  async handleStaticFile() {\n    // This function can have no method body, just to let the gateway register an additional route\n  }\n}\n\n")),(0,r.kt)("h3",{id:"2-default-indexhtml"},"2. Default index.html"),(0,r.kt)("p",null,"Since ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koajs/static-cache"},"koa-static-cache")," does not support the default ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," configuration, it can be solved by its alias function."),(0,r.kt)("p",null,"You can configure ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," to point to ",(0,r.kt)("inlineCode",{parentName:"p"},"/index.html"),". Wildcards and regular expressions are not supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n   // ...\n   staticFile: {\n     dirs: {\n       default: {\n         prefix: '/',\n         alias: {\n           '/': '/index.html',\n         },\n       },\n     },\n     // ...\n   },\n}\n")))}u.isMDXComponent=!0}}]);