"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(n),u=a,v=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u4ece Serverless v1 \u8fc1\u79fb\u5230 v2"},i=void 0,s={unversionedId:"serverless/serverless_v1_upgrade_serverless_v2",id:"version-2.0.0/serverless/serverless_v1_upgrade_serverless_v2",title:"\u4ece Serverless v1 \u8fc1\u79fb\u5230 v2",description:"\u672c\u6587\u7ae0\u4ecb\u7ecd\u5982\u4f55\u4ece Serverless v1.0 \u8fc1\u79fb\u5230 Serverless v2.0\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/serverless_v1_upgrade_serverless_v2.md",sourceDirName:"serverless",slug:"/serverless/serverless_v1_upgrade_serverless_v2",permalink:"/docs/2.0.0/serverless/serverless_v1_upgrade_serverless_v2",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/serverless_v1_upgrade_serverless_v2.md",tags:[],version:"2.0.0",frontMatter:{title:"\u4ece Serverless v1 \u8fc1\u79fb\u5230 v2"},sidebar:"Serverless",previous:{title:"\u9759\u6001\u7f51\u7ad9\u6258\u7ba1",permalink:"/docs/2.0.0/serverless/migrate_static"}},p={},o=[{value:"\u5347\u7ea7\u65b9\u5f0f",id:"\u5347\u7ea7\u65b9\u5f0f",level:2},{value:"1\u3001\u5168\u5c40 CLI \u7684\u5347\u7ea7",id:"1\u5168\u5c40-cli-\u7684\u5347\u7ea7",level:3},{value:"2\u3001\u9879\u76ee\u5305\u7248\u672c\u7684\u5347\u7ea7",id:"2\u9879\u76ee\u5305\u7248\u672c\u7684\u5347\u7ea7",level:3},{value:"3\u3001\u811a\u672c\u7684\u5347\u7ea7",id:"3\u811a\u672c\u7684\u5347\u7ea7",level:3},{value:"4\u3001\u5305\u5b9a\u4e49\u53d8\u66f4",id:"4\u5305\u5b9a\u4e49\u53d8\u66f4",level:3},{value:"5\u3001\u8fd0\u884c",id:"5\u8fd0\u884c",level:3},{value:"\u53ef\u9009\u7684\u8c03\u6574",id:"\u53ef\u9009\u7684\u8c03\u6574",level:2},{value:"1\u3001@Func \u88c5\u9970\u5668\u5347\u7ea7\u4e3a @ServerlessTrigger \u88c5\u9970\u5668",id:"1func-\u88c5\u9970\u5668\u5347\u7ea7\u4e3a-serverlesstrigger-\u88c5\u9970\u5668",level:3},{value:"2\u3001f.yml",id:"2fyml",level:3},{value:"3\u3001\u6d4b\u8bd5\u4ee3\u7801\u7684\u8c03\u6574",id:"3\u6d4b\u8bd5\u4ee3\u7801\u7684\u8c03\u6574",level:3}],c={toc:o},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u7ae0\u4ecb\u7ecd\u5982\u4f55\u4ece Serverless v1.0 \u8fc1\u79fb\u5230 Serverless v2.0\u3002"),(0,a.kt)("p",null,"Midway Serverless 2.0 \u7684\u5347\u7ea7\u4e3b\u8981\u4f53\u73b0\u5728\u67b6\u6784\u548c\u5305\u7684\u53d8\u5316\u4e0a\uff0c\u529f\u80fd\u672c\u8eab\u53d8\u5316\u4e0d\u5927\u3002"),(0,a.kt)("h2",{id:"\u5347\u7ea7\u65b9\u5f0f"},"\u5347\u7ea7\u65b9\u5f0f"),(0,a.kt)("h3",{id:"1\u5168\u5c40-cli-\u7684\u5347\u7ea7"},"1\u3001\u5168\u5c40 CLI \u7684\u5347\u7ea7"),(0,a.kt)("p",null,"\u79fb\u9664\u539f\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas-cli"),"\xa0 \u5305\uff0c\u4e0d\u518d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"f"),"\xa0 \u5168\u5c40\u547d\u4ee4\uff0c\u6539\u4e3a\u9879\u76ee\u4e0b\u7684\u5305\u548c\u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm uninstall @midwayjs/faas-cli -g\n")),(0,a.kt)("h3",{id:"2\u9879\u76ee\u5305\u7248\u672c\u7684\u5347\u7ea7"},"2\u3001\u9879\u76ee\u5305\u7248\u672c\u7684\u5347\u7ea7"),(0,a.kt)("p",null,"\u4f9d\u8d56\u5305\u5347\u7ea7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "@midwayjs/faas": "^2.0.0"\n},\n')),(0,a.kt)("p",null,"\u5f00\u53d1\u4f9d\u8d56\u5305\u5347\u7ea7\uff08\u5411\u4f20\u7edf\u5e94\u7528\u9760\u62e2\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "devDependencies": {\n    "@midwayjs/cli": "^1.2.45",\n    "@midwayjs/mock": "^2.8.7",\n    "@midwayjs/serverless-app": "^2.8.7",\n    "@midwayjs/fcli-plugin-fc": "^1.2.45",\n    "@types/jest": "^26.0.10",\n    "@types/node": "^14",\n    "typescript": "^4.0.0"\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u5c06\u539f\u6709\u7684 mocha \u6d4b\u8bd5\u6362\u6210\u4e86 jest\uff0c\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"@types/mocha"),"\xa0 \u53d8\u4e3a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"@types/jest"),"\xa0\u3002"),(0,a.kt)("li",{parentName:"ul"},"2\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"@midwayjs/serverless-invoke"),"\xa0 \u88ab\u79fb\u9664\uff0c\u7531\u4e8e\u91c7\u7528\u4e86\u5e94\u7528\u7684\u6d4b\u8bd5\u65b9\u5f0f\uff0c\u4e0d\u518d\u9700\u8981\u3002"),(0,a.kt)("li",{parentName:"ul"},"3\u3001\u5e73\u53f0\u6a21\u5757\u533a\u5206\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"@midwayjs/fcli-plugin-fc"),"\xa0 \u8be5\u6a21\u5757\u662f\u7528\u4e8e\u963f\u91cc\u4e91 FC \u73af\u5883\u7684\u5de5\u5177\u5305\uff0c\u5982\u679c\u8981\u53d1\u5e03\u5230\u817e\u8baf\u4e91 SCF \u73af\u5883\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"midwayjs/fcli-plugin-scf"),"\xa0\u3002")),(0,a.kt)("h3",{id:"3\u811a\u672c\u7684\u5347\u7ea7"},"3\u3001\u811a\u672c\u7684\u5347\u7ea7"),(0,a.kt)("p",null,"\u5411\u5e94\u7528\u9760\u62e2\uff0c\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),"\xa0\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"\xa0\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy"),"\xa0 \u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "dev": "midway-bin dev --ts",\n    "test": "midway-bin test --ts",\n    "deploy": "midway-bin deploy"\n  },\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u539f\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," \u547d\u4ee4\u88ab\u79fb\u9664\uff0c\u56e0\u4e3a\u90e8\u7f72\u65f6 deploy \u4f1a\u81ea\u52a8 build"),(0,a.kt)("li",{parentName:"ul"},"\u539f\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"f test"),"\xa0 \u547d\u4ee4\u5c06\u548c\u5f00\u53d1\u5e94\u7528\u76f8\u540c\uff0c\u66ff\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"midway-bin test --ts")),(0,a.kt)("li",{parentName:"ul"},"\u539f\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"f dev"),"\xa0 \u548c debug\uff0c\u5c06\u548c\u5f00\u53d1\u5e94\u7528\u76f8\u540c\uff0c\u7edf\u4e00\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"midway-bin dev --ts"),"\xa0\uff0c\u8c03\u8bd5\u65b9\u5f0f\u4e5f\u76f8\u540c")),(0,a.kt)("h3",{id:"4\u5305\u5b9a\u4e49\u53d8\u66f4"},"4\u3001\u5305\u5b9a\u4e49\u53d8\u66f4"),(0,a.kt)("p",null,"\u5e38\u89c1\u5b9a\u4e49\u53d8\u66f4\u3002"),(0,a.kt)("p",null,"\u539f\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"IFaaSApplication")," \u53d8\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," \uff0c\u548c\u5e94\u7528\u4e00\u81f4\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@midawyjs/faas")," \u5305\u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context } from '@midwayjs/faas';\n")),(0,a.kt)("p",null,"\u539f\u6709\u7684\u5c0f\u5199\u88c5\u9970\u5668\u53d8\u4e3a\u5927\u5199\uff0c\u548c\u5e94\u7528\u4e00\u81f4\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")," \u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Config } from '@midwayjs/decorator';\n")),(0,a.kt)("p",null,"\u539f\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ILifeCycle")," \uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"IMidwayContainer")," \u4e3a\u5bb9\u5668\u5b9a\u4e49\uff0c\u548c\u5e94\u7528\u4e00\u81f4\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," \u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';\n")),(0,a.kt)("h3",{id:"5\u8fd0\u884c"},"5\u3001\u8fd0\u884c"),(0,a.kt)("p",null,"HTTP \u7c7b\u7684\u51fd\u6570\uff0c\u672c\u5730\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," \u8fd0\u884c\uff0c\u975e HTTP \u7c7b\u7684\u51fd\u6570\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," \u8fdb\u884c\u6d4b\u8bd5\u5f00\u53d1\u3002"),(0,a.kt)("h2",{id:"\u53ef\u9009\u7684\u8c03\u6574"},"\u53ef\u9009\u7684\u8c03\u6574"),(0,a.kt)("h3",{id:"1func-\u88c5\u9970\u5668\u5347\u7ea7\u4e3a-serverlesstrigger-\u88c5\u9970\u5668"},"1\u3001@Func \u88c5\u9970\u5668\u5347\u7ea7\u4e3a @ServerlessTrigger \u88c5\u9970\u5668"),(0,a.kt)("p",null,"\u73b0\u6709\u4ee3\u7801\u4f9d\u65e7\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Func")," \u88c5\u9970\u5668\u517c\u5bb9\uff0c\u65b0\u4ee3\u7801\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessTrigger")," \u88c5\u9970\u5668\uff0c\u6784\u5efa\u5668\u53ef\u4ee5\u901a\u8fc7\u5206\u6790 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessTrigger")," \u88c5\u9970\u5668\uff0c\u81ea\u52a8\u751f\u6210 yml \u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"2fyml"},"2\u3001f.yml"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessTrigger")," \u88c5\u9970\u5668\u540e\uff0cf.yml \u4e2d\u7684 functions \u5b57\u6bb5\u53ef\u4ee5\u79fb\u9664\u3002\u7f16\u8bd1\u65f6\u4f1a\u81ea\u52a8\u6839\u636e\u4ee3\u7801\u751f\u6210\u51fd\u6570\u8def\u7531\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"3\u6d4b\u8bd5\u4ee3\u7801\u7684\u8c03\u6574"},"3\u3001\u6d4b\u8bd5\u4ee3\u7801\u7684\u8c03\u6574"),(0,a.kt)("p",null,"HTTP \u7c7b\u578b\u7684\u51fd\u6570\uff0c\u4f7f\u7528\u548c\u5e94\u7528\u76f8\u540c\u7684\u5c01\u88c5\u4e86 supertest \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"createHttpRequest")," \u65b9\u6cd5\u521b\u5efa HTTP \u5ba2\u6237\u7aef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  let app: Application;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from api gateway trigger', async () => {\n    const result = await createHttpRequest(app).get('/').query({\n      name: 'zhangting',\n    });\n    expect(result.text).toEqual('hello zhangting');\n  });\n});\n")),(0,a.kt)("p",null,"\u9664\u4e86\u7c7b HTTP \u89e6\u53d1\u5668\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u6709\u5176\u4ed6\u6bd4\u5982\u5b9a\u65f6\u5668\u3001\u5bf9\u8c61\u5b58\u50a8\u7b49\u51fd\u6570\u89e6\u53d1\u5668\uff0c\u8fd9\u4e9b\u89e6\u53d1\u5668\u7531\u4e8e\u548c\u7f51\u5173\u5173\u7cfb\u5bc6\u5207\uff0c\u4e0d\u80fd\u4f7f\u7528 HTTP \u884c\u4e3a\u6765\u6d4b\u8bd5\uff0c\u800c\u662f\u4f7f\u7528\u4f20\u7edf\u7684\u65b9\u6cd5\u8c03\u7528\u6765\u505a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { createInitializeContext } from '@midwayjs/serverless-fc-trigger';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  let app: Application;\n  let instance: HelloAliyunService;\n\n  beforeAll(async () => {\n    // \u521b\u5efa\u51fd\u6570 app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext(), // \u8fd9\u91cc\u4f20\u5165\u4e86 aliyun \u7279\u6709\u7684\u521d\u59cb\u5316\u4e0a\u4e0b\u6587\u6570\u636e\n    });\n\n    // \u62ff\u5230\u670d\u52a1\u7c7b\n    instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from event trigger', async () => {\n    // \u8c03\u7528\u51fd\u6570\u65b9\u6cd5\uff0c\u4f20\u5165\u53c2\u6570\n    expect(await instance.handleEvent('hello world')).toEqual('hello world');\n  });\n});\n")))}m.isMDXComponent=!0}}]);