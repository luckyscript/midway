"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[620],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,k=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},73122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={},l="2.x \u5347\u7ea7\u6307\u5357",i={unversionedId:"upgrade_v3",id:"upgrade_v3",title:"2.x \u5347\u7ea7\u6307\u5357",description:"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u4ece midway v2 \u5347\u7ea7\u4e3a midway v3 \u7684\u65b9\u5f0f\u3002",source:"@site/docs/upgrade_v3.md",sourceDirName:".",slug:"/upgrade_v3",permalink:"/docs/upgrade_v3",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/upgrade_v3.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/quick_guide"},next:{title:"\u521b\u5efa\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/docs/quickstart"}},p={},s=[{value:"\u81ea\u52a8\u5347\u7ea7\u5de5\u5177",id:"\u81ea\u52a8\u5347\u7ea7\u5de5\u5177",level:2},{value:"\u624b\u52a8\u5347\u7ea7",id:"\u624b\u52a8\u5347\u7ea7",level:2},{value:"\u5305\u7248\u672c\u66f4\u65b0",id:"\u5305\u7248\u672c\u66f4\u65b0",level:3},{value:"Query/Body/Param/Header \u88c5\u9970\u5668\u53d8\u66f4",id:"querybodyparamheader-\u88c5\u9970\u5668\u53d8\u66f4",level:3},{value:"Validate/Rule \u88c5\u9970\u5668",id:"validaterule-\u88c5\u9970\u5668",level:3},{value:"task \u7ec4\u4ef6\u914d\u7f6e key \u53d8\u66f4",id:"task-\u7ec4\u4ef6\u914d\u7f6e-key-\u53d8\u66f4",level:3},{value:"\u914d\u7f6e\u7684\u7edd\u5bf9\u8def\u5f84",id:"\u914d\u7f6e\u7684\u7edd\u5bf9\u8def\u5f84",level:3},{value:"\u4f7f\u7528\u9ed8\u8ba4\u6846\u67b6/\u591a\u6846\u67b6",id:"\u4f7f\u7528\u9ed8\u8ba4\u6846\u67b6\u591a\u6846\u67b6",level:3},{value:"\u5220\u9664\u4e86\u4e00\u6279 IoC \u5bb9\u5668 API",id:"\u5220\u9664\u4e86\u4e00\u6279-ioc-\u5bb9\u5668-api",level:3},{value:"@midwayjs/web\uff08egg\uff09\u90e8\u5206",id:"midwayjswebegg\u90e8\u5206",level:2},{value:"\u542f\u52a8\u7aef\u53e3",id:"\u542f\u52a8\u7aef\u53e3",level:3},{value:"\u6dfb\u52a0 egg-mock",id:"\u6dfb\u52a0-egg-mock",level:3},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:3},{value:"egg \u63d2\u4ef6",id:"egg-\u63d2\u4ef6",level:3},{value:"\u5b9a\u65f6\u4efb\u52a1",id:"\u5b9a\u65f6\u4efb\u52a1",level:3},{value:"\u5176\u4ed6\u9762\u5bf9\u7ec4\u4ef6/\u6846\u67b6\u5f00\u53d1\u8005\u7684\u8c03\u6574",id:"\u5176\u4ed6\u9762\u5bf9\u7ec4\u4ef6\u6846\u67b6\u5f00\u53d1\u8005\u7684\u8c03\u6574",level:2},{value:"\u7ec4\u4ef6\u4e2d registerObject \u4e0d\u518d\u589e\u52a0 namespace",id:"\u7ec4\u4ef6\u4e2d-registerobject-\u4e0d\u518d\u589e\u52a0-namespace",level:3},{value:"\u81ea\u5b9a\u4e49\u6846\u67b6\u90e8\u5206",id:"\u81ea\u5b9a\u4e49\u6846\u67b6\u90e8\u5206",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2x-\u5347\u7ea7\u6307\u5357"},"2.x \u5347\u7ea7\u6307\u5357"),(0,r.kt)("p",null,"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u4ece midway v2 \u5347\u7ea7\u4e3a midway v3 \u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u4ece Midway v2 \u5347\u7ea7\u5230 Midway v3\uff0c\u4f1a\u6709\u4e00\u4e9b Breaking Change\u3002\u672c\u7bc7\u6587\u6863\u4f1a\u8be6\u7ec6\u5217\u51fa\u8fd9\u4e9b Breaking \u7684\u5730\u65b9\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u63d0\u524d\u77e5\u9053\u53d8\u5316\uff0c\u505a\u51fa\u5e94\u5bf9\u3002"),(0,r.kt)("h2",{id:"\u81ea\u52a8\u5347\u7ea7\u5de5\u5177"},"\u81ea\u52a8\u5347\u7ea7\u5de5\u5177"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u5347\u7ea7\u524d\uff0c\u8bf7\u5207\u51fa\u4e00\u4e2a\u65b0\u7684\u5206\u652f\uff0c\u907f\u514d\u5347\u7ea7\u5931\u8d25\u5bfc\u81f4\u65e0\u6cd5\u6062\u590d\uff01\uff01\uff01")),(0,r.kt)("p",null,"\u62f7\u8d1d\u4ee5\u4e0b\u811a\u672c\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx --ignore-existing midway-upgrade\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u4e1a\u52a1\u60c5\u51b5\u5404\u5f02\uff0c\u8bf7\u5728\u811a\u672c\u5347\u7ea7\u4e4b\u540e\uff0c\u518d\u8fdb\u884c\u624b\u52a8\u5347\u7ea7\u7684\u6838\u5bf9\u3002")),(0,r.kt)("h2",{id:"\u624b\u52a8\u5347\u7ea7"},"\u624b\u52a8\u5347\u7ea7"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"midway v3 \u652f\u6301\u4ece node v12 \u8d77\u3002")),(0,r.kt)("h3",{id:"\u5305\u7248\u672c\u66f4\u65b0"},"\u5305\u7248\u672c\u66f4\u65b0"),(0,r.kt)("p",null,"\u6240\u6709\u7684\u7ec4\u4ef6\u5305\uff0c\u6838\u5fc3\u5305\u90fd\u5c06\u5347\u7ea7\u4e3a 3.x \u7248\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/bootstrap": "^3.0.0",\n    "@midwayjs/core": "^3.0.0",\n    "@midwayjs/decorator": "^3.0.0",\n    "@midwayjs/koa": "^3.0.0",\n    "@midwayjs/task": "^3.0.0",\n  },\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.90",\n    "@midwayjs/luckyeye": "^1.0.0",\n    "@midwayjs/mock": "^3.0.0",\n    // ...\n  }\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwyajs/luckeye"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/logger")," \u7684\u7248\u672c\u9664\u5916\u3002"),(0,r.kt)("h3",{id:"querybodyparamheader-\u88c5\u9970\u5668\u53d8\u66f4"},"Query/Body/Param/Header \u88c5\u9970\u5668\u53d8\u66f4"),(0,r.kt)("p",null,"\u4e3b\u8981\u662f\u9ed8\u8ba4\u65e0\u53c2\u6570\u4e0b\u7684\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u65e7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async invoke(@Query() name) {\n    // ctx.query.name\n}\n")),(0,r.kt)("p",null,"\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async invoke(@Query() name) {\n    // ctx.query\n}\n\nasync invoke(@Query('name') name) {\n    // ctx.query.name\n}\n")),(0,r.kt)("h3",{id:"validaterule-\u88c5\u9970\u5668"},"Validate/Rule \u88c5\u9970\u5668"),(0,r.kt)("p",null,"\u65e7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Validate, Rule, RuleType } from '@midwayjs/decorator';\n")),(0,r.kt)("p",null,"\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Validate, Rule, RuleType } from '@midwayjs/validate';\n")),(0,r.kt)("p",null,"\u7531\u4e8e validate \u62bd\u8c61\u6210\u4e86\u7ec4\u4ef6\uff0c\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u5b89\u88c5\u4f9d\u8d56\u5e76\u5f00\u542f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\nimport * as validate from '@midwayjs/validate';\n\n@Configuration({\n  // ...\n  imports: [\n    validate\n  ],\n})\nexport class MainConfiguration {\n    // ...\n}\n\n")),(0,r.kt)("h3",{id:"task-\u7ec4\u4ef6\u914d\u7f6e-key-\u53d8\u66f4"},"task \u7ec4\u4ef6\u914d\u7f6e key \u53d8\u66f4"),(0,r.kt)("p",null,"\u65e7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const taskConfig = {};\n")),(0,r.kt)("p",null,"\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const task = {};\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u7684\u7edd\u5bf9\u8def\u5f84"},"\u914d\u7f6e\u7684\u7edd\u5bf9\u8def\u5f84"),(0,r.kt)("p",null,"\u4e0d\u518d\u652f\u6301\u76f8\u5bf9\u8def\u5f84"),(0,r.kt)("p",null,"\u65e7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\n\n@Configuration({\n  // ...\n  importConfigs: [\n    './config'          // ok\n  ]\n})\nexport class MainConfiguration {\n    // ...\n}\n\n")),(0,r.kt)("p",null,"\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// src/configuration\nimport { join } from 'path';\n\n@Configuration({\n  // ...\n  importConfigs: [\n-   './config'                           // error\n+   join(__dirname, './config')          // ok\n  ]\n})\nexport class MainConfiguration {\n    // ...\n}\n\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u9ed8\u8ba4\u6846\u67b6\u591a\u6846\u67b6"},"\u4f7f\u7528\u9ed8\u8ba4\u6846\u67b6/\u591a\u6846\u67b6"),(0,r.kt)("p",null,"\u65e7\uff0c\u4f1a\u5728 bootstrap.js \u4e2d\u5f15\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const WebFramework = require('@midwayjs/koa').Framework;\nconst GRPCFramework = require('@midwayjs/grpc').Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\nBootstrap\n  .load(config => {\n    return new WebFramework().configure(config.cluster);\n  })\n  .load(config => {\n    return new GRPCFramemwork().configure(config.grpcServer);\n  })\n  .run();\n")),(0,r.kt)("p",null,"\u65b0\u7248\u672c"),(0,r.kt)("p",null,"bootstrap.js \u4e2d\u4e0d\u518d\u9700\u8981\u5355\u72ec\u5b9e\u4f8b\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { Bootstrap } = require('@midwayjs/bootstrap');\nBootstrap.run();\n")),(0,r.kt)("p",null,"\u4f5c\u4e3a\u66ff\u4ee3\uff0c\u4ee5\u7ec4\u4ef6\u7684\u5f62\u5f0f\u5f15\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\nimport * as web from '@midwayjs/web';\nimport * as grpc from '@midwayjs/grpc';\n\n@Configuration({\n  // ...\n  imports: [\n    web,\n    grpc,\n    //...\n  ],\n})\nexport class MainConfiguration {\n    // ...\n}\n\n")),(0,r.kt)("p",null,"\u5176\u4ed6\u5f71\u54cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001\u6d4b\u8bd5\u4e2d\u4e0d\u518d\u9700\u8981\u4f7f\u7528 createBootstrap \u65b9\u6cd5\u4ece bootstrap.js \u542f\u52a8"),(0,r.kt)("li",{parentName:"ul"},"2\u3001\u539f\u6709\u5165\u53e3 Framework \u7684\u914d\u7f6e\u73b0\u5728\u53ef\u4ee5\u653e\u5230 config.*.ts \u4e2d\uff0c\u4ee5\u6846\u67b6\u540d\u4f5c\u4e3a key")),(0,r.kt)("h3",{id:"\u5220\u9664\u4e86\u4e00\u6279-ioc-\u5bb9\u5668-api"},"\u5220\u9664\u4e86\u4e00\u6279 IoC \u5bb9\u5668 API"),(0,r.kt)("p",null,"\u79fb\u9664 container \u4e0a\u7684\u4e0b\u5217\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getConfigService(): IConfigService;"),(0,r.kt)("li",{parentName:"ul"},"getEnvironmentService(): IEnvironmentService;"),(0,r.kt)("li",{parentName:"ul"},"getInformationService(): IInformationService;"),(0,r.kt)("li",{parentName:"ul"},"setInformationService(service: IInformationService): void;"),(0,r.kt)("li",{parentName:"ul"},"getAspectService(): IAspectService;"),(0,r.kt)("li",{parentName:"ul"},"getCurrentEnv(): string;")),(0,r.kt)("p",null,"\u73b0\u5728\u90fd\u6709\u76f8\u5e94\u7684\u6846\u67b6\u5185\u7f6e\u670d\u52a1\u6765\u66ff\u4ee3\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u65e7\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const environmentService = app.getApplicationContext().getEnvironmentService();\nconst env = environmentService.getCurrentEnvironment();\n")),(0,r.kt)("p",null,"\u65b0\u5199\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const environmentService = app.getApplicationContext().get(MidwayEnvironmentService)\nconst env = environmentService.getCurrentEnvironment();\n")),(0,r.kt)("h2",{id:"midwayjswebegg\u90e8\u5206"},"@midwayjs/web\uff08egg\uff09\u90e8\u5206"),(0,r.kt)("h3",{id:"\u542f\u52a8\u7aef\u53e3"},"\u542f\u52a8\u7aef\u53e3"),(0,r.kt)("p",null,"\u65b0\u7248\u672c\u6846\u67b6\u542f\u52a8\u4f1a\u8bfb\u53d6\u4e00\u4e2a\u7aef\u53e3\u914d\u7f6e\uff0c\u5982\u679c\u672a\u914d\uff0c\u53ef\u80fd\u4e0d\u4f1a\u542f\u52a8\u7aef\u53e3\u76d1\u542c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"// src/config/config.default\nexport default {\n  // ...\n  egg: {\n    port: 7001,\n  },\n}\n")),(0,r.kt)("h3",{id:"\u6dfb\u52a0-egg-mock"},"\u6dfb\u52a0 egg-mock"),(0,r.kt)("p",null,"\u7531\u4e8e\u6846\u67b6\u79fb\u9664\u4e86 egg-mock \u5305\uff0c\u5728\u65b0\u7248\u672c ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u9700\u8981\u624b\u52a8\u5f15\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "egg-mock": "^1.0.0",\n    // ...\n  }\n}\n')),(0,r.kt)("h3",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,r.kt)("p",null,"\u65b0\u7248\u672c\uff0c\u7edf\u4e00\u4f7f\u7528 @midwayjs/logger\uff0c\u4e0d\u7ba1\u662f\u4e0d\u662f\u542f\u7528 egg logger\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u548c egg \u65e5\u5fd7\u4e0d\u51b2\u7a81\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u65b0\u7684 key\uff0c\u539f\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"midwayFeature")," \u5b57\u6bb5\u4e0d\u518d\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u65e7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const logger = {\n  level: 'warn',\n  consoleLevel: 'info'\n}\n")),(0,r.kt)("p",null,"\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const midwayLogger = {\n  default: {\n    level: 'warn',\n    consoleLevel: 'info'\n  }\n}\n")),(0,r.kt)("p",null,"Egg \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"customLogger")," \u5b57\u6bb5\uff0c\u9488\u5bf9\u65e0\u6cd5\u4fee\u6539\u7684 egg \u63d2\u4ef6\uff0c\u6211\u4eec\u505a\u4e86\u517c\u5bb9\uff0c\u5bf9\u4e8e\u4e1a\u52a1\u4ee3\u7801\uff0c\u6700\u597d\u505a\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const midwayLogger = {\n  default: {\n    level: 'warn',\n    consoleLevel: 'info'\n  },\n  clients: {\n    // \u81ea\u5b9a\u4e49\u65e5\u5fd7\n    customLoggerA: {\n        // ...\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u5176\u4f59\u7684\u66f4\u5177\u4f53\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"logger"},"\u65e5\u5fd7\u7ae0\u8282 ")," \u4e2d\u7684\u81ea\u5b9a\u4e49\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"egg-\u63d2\u4ef6"},"egg \u63d2\u4ef6"),(0,r.kt)("p",null,"\u5728 Midway3 \u4e2d\uff0c\u4e3a\u4e86\u6587\u6863\u548c\u884c\u4e3a\u7edf\u4e00\uff0c\u6211\u4eec\u5173\u95ed\u4e86\u5927\u90e8\u5206 egg \u9ed8\u8ba4\u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u65b0\u7248\u672c\u9ed8\u8ba4\u63d2\u4ef6\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  onerror: true,\n  security: true,\n  static: false,\n  development: false,\n  watcher: false,\n  multipart: false,\n  logrotator: false,\n  view: false,\n  schedule: false,\n  i18n: false,\n}\n")),(0,r.kt)("p",null,"\u8bf7\u914c\u60c5\u5f00\u542f\uff08\u53ef\u80fd\u4f1a\u548c midway \u80fd\u529b\u51b2\u7a81\uff09\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u7684 egg \u65e5\u5fd7\u5207\u5272\u63d2\u4ef6\uff08logrotator\uff09\uff0c\u7531\u4e8e\u65e5\u5fd7\u4e0d\u518d\u652f\u6301 egg logger\uff0c\u6211\u4eec\u5728\u6846\u67b6\u4e2d\u76f4\u63a5\u5173\u95ed\u4e86\uff08midway logger \u81ea\u5e26\u4e86\u5207\u5272\uff09\u3002"),(0,r.kt)("h3",{id:"\u5b9a\u65f6\u4efb\u52a1"},"\u5b9a\u65f6\u4efb\u52a1"),(0,r.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u4f7f\u7528\u8001\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Schedule")," \u88c5\u9970\u5668\uff0c\u9700\u8981\u989d\u5916\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"midway-schedule")," \u5305\uff0c\u5e76\u4ee5 egg \u63d2\u4ef6\u7684\u5f62\u5f0f\u5f15\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/plugin.ts\n\nexport default {\n  schedule: true,\n  schedulePlus: {\n    enable: true,\n    package: 'midway-schedule',\n  }\n  // ...\n}\n")),(0,r.kt)("h2",{id:"\u5176\u4ed6\u9762\u5bf9\u7ec4\u4ef6\u6846\u67b6\u5f00\u53d1\u8005\u7684\u8c03\u6574"},"\u5176\u4ed6\u9762\u5bf9\u7ec4\u4ef6/\u6846\u67b6\u5f00\u53d1\u8005\u7684\u8c03\u6574"),(0,r.kt)("h3",{id:"\u7ec4\u4ef6\u4e2d-registerobject-\u4e0d\u518d\u589e\u52a0-namespace"},"\u7ec4\u4ef6\u4e2d registerObject \u4e0d\u518d\u589e\u52a0 namespace"),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6\u5f00\u53d1\u65f6\uff0c\u4e0d\u518d\u589e\u52a0 namespace \u524d\u7f00\u3002"),(0,r.kt)("p",null,"\u65e7\uff0c\u7ec4\u4ef6\u5165\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  namespace: 'A'\n  // ...\n})\nexport class MainConfiguration {\n\n  async onReady(container) {\n    container.registerObject('aaa', 'bbb');\n  }\n}\n\ncontainer.getAsync('A:aaa'); // => OK\n")),(0,r.kt)("p",null,"\u65b0\u7ec4\u4ef6\u5165\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  namespace: 'A'\n  // ...\n})\nexport class MainConfiguration {\n\n  async onReady(container) {\n    container.registerObject('aaa', 'bbb');\n  }\n}\n\ncontainer.getAsync('aaa'); // => OK\n")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6846\u67b6\u90e8\u5206"},"\u81ea\u5b9a\u4e49\u6846\u67b6\u90e8\u5206"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u6846\u67b6\u7684\u53d8\u5316\u6bd4\u8f83\u5927\uff0c\u6846\u67b6\u7ec4\u4ef6\u5316\u662f\u8fd9\u4e00\u7248\u672c\u7684\u76ee\u6807\u3002\u6709\u51e0\u4e2a\u5730\u65b9\u9700\u8981\u4fee\u6539\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\u3001\u5728\u539f\u6846\u67b6\u4e0a\u589e\u52a0 @Framework \u6807\u8bc6")),(0,r.kt)("p",null,"\u65e7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CustomKoaFramework extends BaseFramework {\n    // ...\n}\n")),(0,r.kt)("p",null,"\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/decorator';\n\n@Framework()\nexport class CustomKoaFramework extends BaseFramework {\n    // ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\u3001\u5728\u5165\u53e3\u5904\u6309\u7ec4\u4ef6\u89c4\u8303\u5bfc\u51fa Configuration")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 configuration \u4e2d\u4f7f\u7528\u751f\u547d\u5468\u671f\uff0c\u548c\u7ec4\u4ef6\u76f8\u540c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"run")," \u65b9\u6cd5\u5c06\u5728\u65b0\u589e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onServerReady")," \u8fd9\u4e2a\u751f\u547d\u5468\u671f\u663e\u5f0f\u8c03\u7528\u6267\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration,Inject } from '@midwayjs/decorator';\nimport { MidwayKoaFramework } from './framework';\n\n@Configuration({\n  namespace: 'koa',\n})\nexport class KoaConfiguration {\n  @Inject()\n  framework: MidwayKoaFramework;\n\n  async onReady() {}\n\n  async onServerReady() {\n    // ...\n  }\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\u3001\u6846\u67b6\u5f00\u53d1\u65f6")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u6846\u67b6\u521d\u59cb\u5316\u5728\u7528\u6237\u751f\u547d\u5468\u671f\u524d\uff0c\u6240\u4ee5 applicationInit \u7684\u65f6\u5019\uff0c\u4e0d\u8981\u901a\u8fc7 @Config \u88c5\u9970\u5668\u6ce8\u5165\u914d\u7f6e\uff0c\u800c\u662f\u8c03\u7528 configService \u53bb\u83b7\u53d6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/decorator';\n\n@Framework()\nexport class CustomKoaFramework extends BaseFramework {\n\n   configure() {\n     /**\n     * \u8fd9\u91cc\u8fd4\u56de\u4f60\u7684\u914d\u7f6e\n     * \u8fd4\u56de\u7684\u503c\u4f1a\u8d4b\u503c\u5230 this.configurationOptions\uff0c\u5bf9\u63a5\u539f\u6765\u7684\u7528\u6237\u663e\u5f0f\u5165\u53c2\n     *\n     */\n     return this.configService.getConfiguration('xxxxxxx');\n   }\n\n  /**\n   * \u8fd9\u4e2a\u65b0\u589e\u7684\u65b9\u6cd5\uff0c\u7528\u6765\u5224\u65ad\u6846\u67b6\u662f\u5426\u52a0\u8f7d\n   * \u6709\u65f6\u5019\u7ec4\u4ef6\u4e2d\u5305\u62ec server \u7aef\uff08\u6846\u67b6\uff09\u548c client \u7aef\uff0c\u5c31\u9700\u8981\u5224\u65ad\n   *\n   */\n   isEnable(): boolean {\n     return this.configurationOptions.services?.length > 0;\n   }\n\n    // ...\n}\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u5728\u5916\u9762\u4f7f\u7528\u65f6\u4e5f\u53ef\u4ee5\u5224\u65ad\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration,Inject } from '@midwayjs/decorator';\nimport { MidwayKoaFramework } from './framework';\n\n@Configuration({\n  namespace: 'koa',\n})\nexport class KoaConfiguration {\n  @Inject()\n  framework: MidwayKoaFramework;\n\n  async onReady() {}\n\n  async onServerReady() {\n    // \u5982\u679c isEnable \u4e3a true\uff0c\u6846\u67b6\u4f1a\u9ed8\u8ba4\u8c03\u7528 framework.run()\n    // \u5982\u679c\u4e00\u5f00\u59cb enable \u4e3a false\uff0c\u4e5f\u53ef\u4ee5\u5ef6\u540e\u53bb\u624b\u52a8 run\n    if (/* \u5ef6\u540e\u6267\u884c */) {\n        await this.framework.run();\n    }\n  }\n}\n\n")))}m.isMDXComponent=!0}}]);