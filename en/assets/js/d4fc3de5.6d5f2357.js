"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="TableStore",l={unversionedId:"extensions/tablestore",id:"extensions/tablestore",title:"TableStore",description:"this topic describes how to use midway to access alibaba cloud TableStore.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/tablestore.md",sourceDirName:"extensions",slug:"/extensions/tablestore",permalink:"/en/docs/extensions/tablestore",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/tablestore.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Tencent Cloud Object Storage (COS)",permalink:"/en/docs/extensions/cos"},next:{title:"MikroORM",permalink:"/en/docs/extensions/mikro"}},s={},c=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Introducing components",id:"introducing-components",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Use TableStore service",id:"use-tablestore-service",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tablestore"},"TableStore"),(0,a.kt)("p",null,"this topic describes how to use midway to access alibaba cloud TableStore."),(0,a.kt)("p",null,"Related information:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/tablestore@3 --save\n")),(0,a.kt)("p",null,"Or reinstall the following dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/tablestore": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,a.kt)("h2",{id:"introducing-components"},"Introducing components"),(0,a.kt)("p",null,"First, introduce components and import them in ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as tablestore from '@midwayjs/tablestore';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    tablestore // Import tablestore Components\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Single-client configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  tableStore: {\n    client: {\n      accessKeyId: '<your access key id>',\n      secretAccessKey: '<your access key secret>',\n      stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html */\n      endpoint: '<your endpoint>',\n      instancename: '<your instance name>'\n    },\n  },\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Multiple client configuration, need to configure multiple")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  tableStore: {\n    clients: {\n      db1: {\n        accessKeyId: '<your access key id>',\n        secretAccessKey: '<your access key secret>',\n        stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html */\n        endpoint: '<your endpoint>',\n        instancename: '<your instance name>'\n      },\n      db2: {\n        accessKeyId: '<your access key id>',\n        secretAccessKey: '<your access key secret>',\n        stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html */\n        endpoint: '<your endpoint>',\n        instancename: '<your instance name>'\n      },\n    },\n  },\n}\n")),(0,a.kt)("p",null,"For more parameters, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aliyun/aliyun-tablestore-nodejs-sdk"},"aliyun tablestore sdk")," document."),(0,a.kt)("h2",{id:"use-tablestore-service"},"Use TableStore service"),(0,a.kt)("p",null,"We can inject it into any code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Controller, Inject, Get } from '@midwayjs/decorator';\nimport { TableStoreService } from '@midwayjs/tablestore';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  tableStoreService: TableStoreService;\n\n  async invoke() {\n    await this.tableStoreService.putRow(params);\n  }\n}\n")),(0,a.kt)("p",null,"Different instances can be obtained using ",(0,a.kt)("inlineCode",{parentName:"p"},"TableStoreServiceFactory"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TableStoreServiceFactory } from '@midwayjs/tablestore';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  tableStoreServiceFactory: TableStoreServiceFactory;\n\n  async save() {\n    const db1 = await this.tableStoreServiceFactory.get('db1');\n    const db2 = await this.tableStoreServiceFactory.get('db2');\n\n    //...\n\n  }\n}\n")),(0,a.kt)("p",null,"Example: getRow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { join } from 'path';\nimport {\n  TableStoreService\n  Long\n  CompositeCondition\n  SingleColumnCondition\n  LogicalOperator\n  ComparatorType\n} from '@midawyjs/tablestore';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  tableStoreService: TableStoreService;\n\n  async getInfo() {\n\n    const data = await tableStoreService.getRow({\n      tableName: \"sampleTable \",\n      primaryKey: [{ 'gid': Long.fromNumber(20013) }, { 'uid': Long.fromNumber(20013) }]\n      columnFilter: condition\n    });\n\n    // TODO\n\n  }\n}\n")),(0,a.kt)("p",null,"As shown in the example, the types exported in the original tablestore package should have been proxied and taken over by @midwayjs/tablestore. For more specific method parameters, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/tree/2.x/packages/tablestore/test/sample"},"example"),"."))}d.isMDXComponent=!0}}]);