"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60400],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,g=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"\u5f00\u53d1\u51fd\u6570"},l=void 0,s={unversionedId:"serverless/serverless_dev",id:"version-2.0.0/serverless/serverless_dev",title:"\u5f00\u53d1\u51fd\u6570",description:"\u521d\u59cb\u5316\u4ee3\u7801",source:"@site/versioned_docs/version-2.0.0/serverless/serverless_dev.md",sourceDirName:"serverless",slug:"/serverless/serverless_dev",permalink:"/docs/2.0.0/serverless/serverless_dev",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/serverless_dev.md",tags:[],version:"2.0.0",frontMatter:{title:"\u5f00\u53d1\u51fd\u6570"},sidebar:"Serverless",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/2.0.0/serverless/serverless_intro"},next:{title:"\u6d4b\u8bd5\u51fd\u6570",permalink:"/docs/2.0.0/serverless/serverless_testing"}},o={},p=[{value:"\u521d\u59cb\u5316\u4ee3\u7801",id:"\u521d\u59cb\u5316\u4ee3\u7801",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u51fd\u6570\u6587\u4ef6",id:"\u51fd\u6570\u6587\u4ef6",level:2},{value:"\u51fd\u6570\u5b9a\u4e49\u6587\u4ef6",id:"\u51fd\u6570\u5b9a\u4e49\u6587\u4ef6",level:2},{value:"\u89e6\u53d1\u5668\u88c5\u9970\u5668\u53c2\u6570",id:"\u89e6\u53d1\u5668\u88c5\u9970\u5668\u53c2\u6570",level:2},{value:"\u51fd\u6570\u88c5\u9970\u5668\u53c2\u6570",id:"\u51fd\u6570\u88c5\u9970\u5668\u53c2\u6570",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",level:2},{value:"\u90e8\u7f72\u51fd\u6570",id:"\u90e8\u7f72\u51fd\u6570",level:2}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u4ee3\u7801"},"\u521d\u59cb\u5316\u4ee3\u7801"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u5f00\u53d1\u7b2c\u4e00\u4e2a\u7eaf HTTP \u51fd\u6570\uff0c\u6765\u5c1d\u8bd5\u5c06\u5b83\u90e8\u7f72\u5230\u4e91\u73af\u5883\uff08\u4e0d\u7528\u62c5\u5fc3\uff0c\u51fd\u6570\u73b0\u5728\u90fd\u6709\u514d\u8d39\u989d\u5ea6\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u82b1\u94b1\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm -v\n\n# \u5982\u679c\u662f npm v6\n$ npm init midway --type=faas my_midway_app\n\n# \u5982\u679c\u662f npm v7\n$ npm init midway -- --type=faas my_midway_app\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm init midway"),"\xa0\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"faas"),"\xa0 \u811a\u624b\u67b6\u3002"),(0,a.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\u7684\u6700\u7cbe\u7b80\u7684\u7ed3\u6784\uff0c\u6838\u5fc3\u4f1a\u5305\u62ec\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," \u6807\u51c6\u5316\u51fd\u6570\u6587\u4ef6\uff0c\u4ee5\u53ca TypeScript \u7684\u9879\u76ee\u7ed3\u6784\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 f.yml               # \u6807\u51c6\u5316 spec \u6587\u4ef6\n\u251c\u2500\u2500 package.json        # \u9879\u76ee\u4f9d\u8d56\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 function\n\u2502       \u2514\u2500\u2500 hello.ts    ## \u51fd\u6570\u6587\u4ef6\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b\u6587\u4ef6\u5185\u5bb9\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"f.yml")," \xa0 \u51fd\u6570\u5b9a\u4e49\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," TypeScript \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src")," \u51fd\u6570\u6e90\u7801\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/function/hello.ts")," \u793a\u4f8b\u51fd\u6570\u6587\u4ef6")),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u51fd\u6570\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"function"),"\u76ee\u5f55\u4e0b\uff0c\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u548c\u5176\u4ed6\u7c7b\u578b\u7684\u4ee3\u7801\u5206\u5f00\u3002"),(0,a.kt)("h2",{id:"\u51fd\u6570\u6587\u4ef6"},"\u51fd\u6570\u6587\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u9996\u5148\u6765\u770b\u770b\u51fd\u6570\u6587\u4ef6\uff0c\u4f20\u7edf\u7684\u51fd\u6570\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," \uff0c\u4e3a\u4e86\u66f4\u7b26\u5408 midway \u4f53\u7cfb\uff0c\u4ee5\u53ca\u4f7f\u7528\u6211\u4eec\u7684\u4f9d\u8d56\u6ce8\u5165\uff0c\u8fd9\u91cc\u5c06\u5b83\u53d8\u6210\u4e86 Class\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessTrigger"),"\xa0 \u88c5\u9970\u5668\uff0c\u6211\u4eec\u5c06\u65b9\u6cd5\u6807\u6ce8\u4e3a\u4e00\u4e2a HTTP \u63a5\u53e3\uff0c\u5e76\u4e14\u6807\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\xa0 \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"method"),"\xa0 \u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType, Query } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloHTTPService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.HTTP, {\n    path: '/',\n    method: 'get',\n  })\n  async handleHTTPEvent(@Query() name = 'midway') {\n    return `hello ${name}`;\n  }\n}\n")),(0,a.kt)("p",null,"\u9664\u4e86\u89e6\u53d1\u5668\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessFunction")," \u88c5\u9970\u5668\u63cf\u8ff0\u51fd\u6570\u5c42\u9762\u7684\u5143\u4fe1\u606f\uff0c\u6bd4\u5982\u51fd\u6570\u540d\uff0c\u5e76\u53d1\u5ea6\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u5f53\u6211\u4eec\u5728\u4e00\u4e2a\u51fd\u6570\u4e0a\uff0c\u4f7f\u7528\u591a\u4e2a\u89e6\u53d1\u5668\u65f6\uff0c\u5c31\u53ef\u4ee5\u8fd9\u6837\u8bbe\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType, Query } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloServerlessService {\n  @Inject()\n  ctx: Context;\n\n  // \u4e00\u4e2a\u51fd\u6570\u591a\u4e2a\u89e6\u53d1\u5668\n  @ServerlessFunction({\n    functionName: 'abcde',\n  })\n  @ServerlessTrigger(ServerlessTriggerType.TIMER, {\n    type: 'every',\n    value: '5m',\n  })\n  @ServerlessTrigger(ServerlessTriggerType.TIMER, {\n    type: 'every',\n    value: '10m',\n  })\n  async handleTimerEvent() {\n    // TODO\n  }\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u6709\u4e9b\u5e73\u53f0\u65e0\u6cd5\u5c06\u4e0d\u540c\u7c7b\u578b\u7684\u89e6\u53d1\u5668\u653e\u5728\u540c\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u6bd4\u5982\u963f\u91cc\u4e91\u89c4\u5b9a\uff0cHTTP \u89e6\u53d1\u5668\u548c\u5176\u4ed6\u89e6\u53d1\u5668\u4e0d\u80fd\u540c\u65f6\u5728\u4e00\u4e2a\u51fd\u6570\u751f\u6548\u3002")),(0,a.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49\u6587\u4ef6"},"\u51fd\u6570\u5b9a\u4e49\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," \u662f\u51fd\u6570\u7684\u5b9a\u4e49\u6587\u4ef6\uff0c\u901a\u8fc7\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5728\u6784\u5efa\u65f6\u751f\u6210\u4e0d\u540c\u5e73\u53f0\u6240\u80fd\u8ba4\u8bc6\u7684\u6587\u4ef6\uff0c\u793a\u4f8b\u4e2d\u7684\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples ## \u51fd\u6570\u7ec4\u540d\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u5e94\u7528\u540d\n\nprovider:\n  name: aliyun ## \u53d1\u5e03\u7684\u5e73\u53f0\uff0c\u8fd9\u91cc\u662f\u963f\u91cc\u4e91\n\ncustom:\n  customDomain:\n    domainName: auto ## \u7531\u4e8e\u53d1\u5e03 HTTP \u670d\u52a1\uff0c\u57df\u540d\u8fd9\u91cc\u4f7f\u7528\u81ea\u52a8\u751f\u6210\uff0c\u540e\u7eed\u53ef\u4ee5\u5355\u72ec\u7ed1\u5b9a\n")),(0,a.kt)("h3",{id:""}),(0,a.kt)("h2",{id:"\u89e6\u53d1\u5668\u88c5\u9970\u5668\u53c2\u6570"},"\u89e6\u53d1\u5668\u88c5\u9970\u5668\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessTrigger")," \u88c5\u9970\u5668\u7528\u4e8e\u5b9a\u4e49\u4e0d\u540c\u7684\u89e6\u53d1\u5668\uff0c\u5b83\u7684\u53c2\u6570\u4e3a\u6bcf\u4e2a\u89e6\u53d1\u5668\u4fe1\u606f\uff0c\u4ee5\u53ca\u901a\u7528\u89e6\u53d1\u5668\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u89e6\u53d1\u5668\u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/serverless_yml#YoMeC"},"f.yml \u7684\u5b9a\u4e49"),"\u4fdd\u6301\u4e00\u81f4\uff0c\u5f53\u524d\u7684\u5b9a\u4e49\u8bf7\u53c2\u8003\u6bcf\u4e2a\u89e6\u53d1\u5668\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/blob/2.x/packages/decorator/src/interface.ts#L141"},"interface"),"\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u89e6\u53d1\u5668\u7684\u540d\u79f0\u4fee\u6539\u4e3a abc\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  @ServerlessTrigger(ServerlessTriggerType.TIMER, {\n    name: 'abc'\n    type: 'every',\n    value: '5m',\n  })\n")),(0,a.kt)("h2",{id:"\u51fd\u6570\u88c5\u9970\u5668\u53c2\u6570"},"\u51fd\u6570\u88c5\u9970\u5668\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessFunction")," \u88c5\u9970\u5668\u7528\u4e8e\u5b9a\u4e49\u51fd\u6570\uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u4fee\u6539\u51fd\u6570\u540d\u3002"),(0,a.kt)("p",null,"\u51fd\u6570\u89e6\u53d1\u5668\u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/serverless_yml#f1568472"},"f.yml \u7684\u5b9a\u4e49")," \u4fdd\u6301\u4e00\u81f4\uff0c\u5f53\u524d\u7684\u5b9a\u4e49\u8bf7\u53c2\u8003\u6bcf\u4e2a\u89e6\u53d1\u5668\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/blob/2.x/packages/decorator/src/interface.ts#L141"},"interface"),"\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessFunction({\n  functionName: 'abcde',\n  initTimeout: 3,       // \u521d\u59cb\u5316\u8d85\u65f6\uff0c\u53ea\u5bf9\u963f\u91cc\u4e91 fc \u6709\u6548\uff0c\u9ed8\u8ba4 3s\n  timeout: 3                // \u51fd\u6570\u6267\u884c\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4 3s\n})\n")),(0,a.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,a.kt)("p",null,"HTTP \u51fd\u6570\u672c\u5730\u5f00\u53d1\u548c\u4f20\u7edf Web \u76f8\u540c\uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run dev\n$ open http://localhost:7001\n")),(0,a.kt)("p",null,"Midway \u4f1a\u542f\u52a8 HTTP \u670d\u52a1\u5668\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:7001"},"http://127.0.0.1:7001")," \uff0c\u6d4f\u89c8\u5668\u4f1a\u6253\u5370\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello midwayjs")," \xa0 \u7684\u4fe1\u606f\u3002"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1615045887650-73a90be7-1d49-4024-82c4-fd6b5192e75e.png#height=384&id=X8Jmz&margin=%5Bobject%20Object%5D&name=image.png&originHeight=768&originWidth=1268&originalType=binary&ratio=1&size=85174&status=done&style=none&width=634",width:"634"}),(0,a.kt)("h2",{id:"\u90e8\u7f72\u51fd\u6570"},"\u90e8\u7f72\u51fd\u6570"),(0,a.kt)("p",null,"\u90e8\u7f72\u51fd\u6570\uff0c\u76f4\u63a5\u4f7f\u7528\u53d1\u5e03\u547d\u4ee4\u5373\u53ef\u6253\u5305\u5e76\u90e8\u7f72\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run deploy\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8f93\u9519\u4e86\u4fe1\u606f\uff0c\u53ef\u4ee5\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npx midway-bin deploy --resetConfig")," \u4fee\u6539\u3002")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7528\u963f\u91cc\u4e91 FC \u5e73\u53f0\u6765\u6f14\u793a\uff0c\u5982\u9700\u90e8\u7f72\u5230\u817e\u8baf\u4e91\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"deploy_to_tencent"},"\u817e\u8baf\u4e91\u90e8\u7f72"),"\u3002"),(0,a.kt)("p",null,"\u963f\u91cc\u4e91\u90e8\u7f72\u9996\u6b21\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"accountId"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"accountKey"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"accountSecret")),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654967-11e1bcbd-5a56-4239-99e1-5a1472ad49fd.png#height=514&id=cd07s&margin=%5Bobject%20Object%5D&originHeight=514&originWidth=1152&originalType=binary&ratio=1&size=0&status=done&style=none&width=1152",width:"1152"}),(0,a.kt)("p",null,"\u76f8\u5173\u914d\u7f6e\u83b7\u53d6\uff0c\u53ef\u53c2\u7167\u4e0b\u65b9\u56fe\u7247\uff1a"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654949-9c14958c-3aff-403a-b89b-d03a3a95cd18.png#height=696&id=XCMN7&margin=%5Bobject%20Object%5D&originHeight=696&originWidth=1832&originalType=binary&ratio=1&size=0&status=done&style=none&width=1832",width:"1832"}),(0,a.kt)("p",null,"\u70b9\u51fb\u6b64\u5904\u8df3\u8f6c\u963f\u91cc\u4e91",(0,a.kt)("a",{parentName:"p",href:"https://account.console.aliyun.com/#/secure"},"\u5b89\u5168\u8bbe\u7f6e\u9875"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654950-19a811c5-2cf3-4843-a619-cfd744430fae.png#height=184&id=H5HaQ&margin=%5Bobject%20Object%5D&originHeight=592&originWidth=2406&originalType=binary&ratio=1&size=0&status=done&style=none&width=746",width:"746"}),(0,a.kt)("p",null,"\u70b9\u51fb\u8df3\u8f6c\u963f\u91cc\u4e91\u4e2a\u4eba ",(0,a.kt)("a",{parentName:"p",href:"https://usercenter.console.aliyun.com/#/manage/ak"},"AccessKey \u9875\u9762"),"\u3002"),(0,a.kt)("p",null,"\u6574\u4e2a\u90e8\u7f72\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/svg/501408/1618722302423-d7d159b3-45b0-4a93-a2b1-daf50f46bc9f.svg#clientId=ude874b22-3d94-4&from=ui&id=w8IDi&margin=%5Bobject%20Object%5D&originHeight=1015&originWidth=1620&originalType=binary&ratio=1&size=458083&status=done&style=none&taskId=u53dbfdb6-ec4e-4b4e-866d-ab578d3839a",width:"undefined"}),(0,a.kt)("p",null,"\u53d1\u5e03\u5b8c\u540e\uff0c\u4ece\u63a7\u5236\u53f0\u83b7\u53d6\u5f53\u524d\u7684 url \u5373\u53ef\u8bbf\u95ee\u3002"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618722353090-bf9e0061-ea62-46a2-a77e-57236a4e4024.png#clientId=ude874b22-3d94-4&from=paste&height=361&id=u7afbff35&margin=%5Bobject%20Object%5D&originHeight=722&originWidth=2084&originalType=binary&ratio=1&size=156355&status=done&style=none&taskId=u39af502c-85b3-4eeb-b387-a5d70448c89&width=1042",width:"1042"}),(0,a.kt)("p",null,"\u7531\u4e8e\u5f00\u542f\u4e86\u81ea\u52a8\u57df\u540d\uff0c\u963f\u91cc\u4e91\u4f1a\u514d\u8d39\u589e\u9001\u4e00\u4e2a\u4e34\u65f6\u57df\u540d\u7528\u5f00\u53d1\u548c\u8c03\u8bd5\uff0c\u540e\u7eed\u4e5f\u53ef\u4ee5\u81ea\u5df1\u7ed1\u5b9a\u65b0\u57df\u540d\u3002"))}m.isMDXComponent=!0}}]);