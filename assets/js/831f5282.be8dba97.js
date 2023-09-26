"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},i="\u9759\u6001\u6587\u4ef6\u6258\u7ba1",p={unversionedId:"extensions/static_file",id:"extensions/static_file",title:"\u9759\u6001\u6587\u4ef6\u6258\u7ba1",description:"midway \u63d0\u4f9b\u4e86\u57fa\u4e8e koa-static-cache \u6a21\u5757\u7684\u9759\u6001\u8d44\u6e90\u6258\u7ba1\u7ec4\u4ef6\u3002",source:"@site/docs/extensions/static_file.md",sourceDirName:"extensions",slug:"/extensions/static_file",permalink:"/docs/extensions/static_file",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/static_file.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u89d2\u8272\u9274\u6743",permalink:"/docs/extensions/casbin"},next:{title:"\u8de8\u57df",permalink:"/docs/extensions/cross_domain"}},o={},s=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a",id:"\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u589e\u52a0\u65b0\u7684\u76ee\u5f55",id:"\u589e\u52a0\u65b0\u7684\u76ee\u5f55",level:3},{value:"\u53ef\u7528\u914d\u7f6e",id:"\u53ef\u7528\u914d\u7f6e",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"1\u3001\u51fd\u6570\u4e0b\u8def\u7531\u672a\u751f\u6548",id:"1\u51fd\u6570\u4e0b\u8def\u7531\u672a\u751f\u6548",level:3},{value:"2\u3001\u9ed8\u8ba4 index.html",id:"2\u9ed8\u8ba4-indexhtml",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9759\u6001\u6587\u4ef6\u6258\u7ba1"},"\u9759\u6001\u6587\u4ef6\u6258\u7ba1"),(0,r.kt)("p",null,"midway \u63d0\u4f9b\u4e86\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koajs/static-cache"},"koa-static-cache")," \u6a21\u5757\u7684\u9759\u6001\u8d44\u6e90\u6258\u7ba1\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udcac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udcac \u90e8\u5206\u51fd\u6570\u8ba1\u7b97\u5e73\u53f0\u4e0d\u652f\u6301\u6d41\u5f0f\u8bf7\u6c42\u54cd\u5e94\uff0c\u8bf7\u53c2\u8003\u5bf9\u5e94\u5e73\u53f0\u80fd\u529b\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/static-file@3 --save\n")),(0,r.kt)("p",null,"\u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/static-file": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 \u7ec4\u4ef6\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as staticFile from '@midwayjs/static-file';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    koa,\n    staticFile\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f1a\u6258\u7ba1\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," \u76ee\u5f55\u4e2d\u7684\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 public\n|   \u251c\u2500\u2500 index.html\n\u2502   \u2514\u2500\u2500 hello.js\n\u2502\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8def\u5f84\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /public/index.html")," \u5e76\u83b7\u53d6\u76f8\u5e94\u7684\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a"},"\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a"),(0,r.kt)("p",null,"\u8d44\u6e90\u7684\u6258\u7ba1\u4f7f\u7528\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"dirs")," \u5b57\u6bb5\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," \u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// {app_root}/src/config/config.default.ts\nexport default {\n  // ...\n  staticFile: {\n    dirs: {\n      default: {\n        prefix: '/',\n        dir: 'xxx',\n      },\n    }\n  },\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dirs")," \u4e2d\u7684\u5bf9\u8c61\u503c\uff0c\u4f1a\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"staticFile")," \u4e0b\u7684\u503c\u5408\u5e76\u540e\uff0c\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"koa-static-cache")," \u4e2d\u95f4\u4ef6\u4e2d\u3002"),(0,r.kt)("h3",{id:"\u589e\u52a0\u65b0\u7684\u76ee\u5f55"},"\u589e\u52a0\u65b0\u7684\u76ee\u5f55"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5bf9 dirs \u505a\u4fee\u6539\uff0c\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u76ee\u5f55\u3002key \u4e0d\u91cd\u590d\u5373\u53ef\uff0cvalue \u4f1a\u548c\u9ed8\u8ba4\u7684\u914d\u7f6e\u5408\u5e76\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// {app_root}/src/config/config.default.ts\nexport default {\n  // ...\n  staticFile: {\n    dirs: {\n      default: {\n        prefix: '/',\n        dir: 'xxx',\n      },\n      another: {\n        prefix: '/',\n        dir: 'xxx',\n      },\n    }\n    // ...\n  },\n}\n")),(0,r.kt)("h3",{id:"\u53ef\u7528\u914d\u7f6e"},"\u53ef\u7528\u914d\u7f6e"),(0,r.kt)("p",null,"\u652f\u6301\u6240\u6709\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koajs/static-cache"},"koa-static-cache")," \u914d\u7f6e\uff0c\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dirs"),(0,r.kt)("td",{parentName:"tr",align:null},'{"default": {prefix: "/public", "dir": "xxxx"}}'),(0,r.kt)("td",{parentName:"tr",align:null},"\u6258\u7ba1\u7684\u76ee\u5f55\uff0c\u4e3a\u4e86\u652f\u6301\u591a\u4e2a\u76ee\u5f55\uff0c\u662f\u4e2a\u5bf9\u8c61\u3002",(0,r.kt)("br",null),"\u9664\u4e86 default \u4e4b\u5916\uff0c\u5176\u4ed6\u7684 key \u53ef\u4ee5\u968f\u610f\u6dfb\u52a0\uff0cdirs \u4e2d\u7684\u5bf9\u8c61\u503c\u4f1a\u548c\u5916\u90e8\u9ed8\u8ba4\u503c\u505a\u5408\u5e76")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dynamic"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u52a0\u8f7d\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u5728\u521d\u59cb\u5316\u8bfb\u53d6\u540e\u505a\u7f13\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preload"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u521d\u59cb\u5316\u7f13\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxAge"),(0,r.kt)("td",{parentName:"tr",align:null},"prod \u4e3a 31536000\uff0c\u5176\u4ed6\u4e3a 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u7684\u6700\u5927\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},"prod \u4e3a true\uff0c\u5176\u4f59\u4e3a false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 buffer \u5b57\u7b26\u8fd4\u56de")))),(0,r.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koajs/static-cache"},"koa-static-cache")," \u3002"),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"1\u51fd\u6570\u4e0b\u8def\u7531\u672a\u751f\u6548"},"1\u3001\u51fd\u6570\u4e0b\u8def\u7531\u672a\u751f\u6548"),(0,r.kt)("p",null,"\u51fd\u6570\u8def\u7531\u9700\u8981\u663e\u5f0f\u914d\u7f6e\u624d\u80fd\u751f\u6548\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u4f1a\u6dfb\u52a0\u4e00\u4e2a\u901a\u914d\u7684\u8def\u7531\u7528\u4e8e\u9759\u6001\u6587\u4ef6\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"/*"),"\uff0c\u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/*"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Provide,\n  ServerlessTrigger,\n  ServerlessTriggerType,\n} from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloHTTPService {\n\n  @ServerlessTrigger(ServerlessTriggerType.HTTP, {\n    path: '/public/*',\n    method: 'get',\n  })\n  async handleStaticFile() {\n    // \u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u6ca1\u6709\u65b9\u6cd5\u4f53\uff0c\u53ea\u662f\u4e3a\u4e86\u8ba9\u7f51\u5173\u6ce8\u518c\u4e00\u4e2a\u989d\u5916\u7684\u8def\u7531\n  }\n}\n\n")),(0,r.kt)("h3",{id:"2\u9ed8\u8ba4-indexhtml"},"2\u3001\u9ed8\u8ba4 index.html"),(0,r.kt)("p",null,"\u7531\u4e8e  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koajs/static-cache"},"koa-static-cache"),"  \u4e0d\u652f\u6301\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," \u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b83\u7684 alias \u529f\u80fd\u6765\u89e3\u51b3\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u6307\u5411\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/index.html")," \u5373\u53ef\uff0c\u4e0d\u652f\u6301\u901a\u914d\u548c\u6b63\u5219\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  staticFile: {\n    dirs: {\n      default: {\n        prefix: '/',\n        alias: {\n          '/': '/index.html',\n        },\n      },\n    },\n    // ...\n  },\n}\n")))}m.isMDXComponent=!0}}]);