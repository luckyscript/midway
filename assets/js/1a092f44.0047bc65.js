"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="\u817e\u8baf\u4e91\u5bf9\u8c61\u5b58\u50a8\uff08COS\uff09",l={unversionedId:"extensions/cos",id:"extensions/cos",title:"\u817e\u8baf\u4e91\u5bf9\u8c61\u5b58\u50a8\uff08COS\uff09",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 midway \u63a5\u5165\u817e\u8baf\u4e91 COS\u3002",source:"@site/docs/extensions/cos.md",sourceDirName:"extensions",slug:"/extensions/cos",permalink:"/docs/extensions/cos",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/cos.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u963f\u91cc\u4e91\u5bf9\u8c61\u5b58\u50a8\uff08OSS\uff09",permalink:"/docs/extensions/oss"},next:{title:"TableStore",permalink:"/docs/extensions/tablestore"}},c={},s=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u4f7f\u7528 COS \u670d\u52a1",id:"\u4f7f\u7528-cos-\u670d\u52a1",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u817e\u8baf\u4e91\u5bf9\u8c61\u5b58\u50a8cos"},"\u817e\u8baf\u4e91\u5bf9\u8c61\u5b58\u50a8\uff08COS\uff09"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 midway \u63a5\u5165\u817e\u8baf\u4e91 COS\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u4e3b\u6846\u67b6"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u65e5\u5fd7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/cos@3 --save\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/cos": "^3.0.0",\n    // ...\n  },\n}\n')),(0,a.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 \u7ec4\u4ef6\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as cos from '@midwayjs/cos';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    // ...\n    cos     // \u5bfc\u5165 cos \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5355\u5ba2\u6237\u7aef\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  cos: {\n    client: {\n      SecretId: '***********',\n      SecretKey: '***********',\n    },\n  },\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u9700\u8981\u914d\u7f6e\u591a\u4e2a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  cos: {\n    clients: {\n      instance1: {\n        SecretId: '***********',\n        SecretKey: '***********',\n      },\n      instance2: {\n        SecretId: '***********',\n        SecretKey: '***********',\n      },\n    },\n  },\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u53c2\u6570\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tencentyun/cos-nodejs-sdk-v5"},"cos-nodejs-sdk-v5")," \u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-cos-\u670d\u52a1"},"\u4f7f\u7528 COS \u670d\u52a1"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u4efb\u610f\u7684\u4ee3\u7801\u4e2d\u6ce8\u5165\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Controller, Inject, Get } from '@midwayjs/decorator';\nimport { COSService } from '@midwayjs/cos';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cosService: COSService;\n\n  async invoke() {\n    await this.cosService.sliceUploadFile({\n      Bucket: 'test-1250000000',\n      Region: 'ap-guangzhou',\n      Key: '1.zip',\n      FilePath: './1.zip'\n    },\n  }\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"COSServiceFactory")," \u83b7\u53d6\u4e0d\u540c\u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { COSServiceFactory } from '@midwayjs/cos';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cosServiceFactory: COSServiceFactory;\n\n  async save() {\n    const cos1 = await this.cosServiceFactory.get('instance1');\n    const cos2 = await this.cosServiceFactory.get('instance3');\n\n    //...\n\n  }\n}\n")))}u.isMDXComponent=!0}}]);