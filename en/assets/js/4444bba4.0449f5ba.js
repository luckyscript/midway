"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u5c0f\u7a0b\u5e8f\u4e00\u4f53\u5316"},i=void 0,s={unversionedId:"hooks/hooks_miniprogram",id:"version-2.0.0/hooks/hooks_miniprogram",title:"\u5c0f\u7a0b\u5e8f\u4e00\u4f53\u5316",description:"\u5c0f\u7a0b\u5e8f\u4e00\u4f53\u5316\u662f Midway.js \u56e2\u961f\u4e0e Rax \u56e2\u961f\u5408\u4f5c\u7684\u4ea7\u54c1\uff0c\u901a\u8fc7 Midway.js \u5bf9\u4e00\u4f53\u5316\u7684\u652f\u6301\u4e0e Rax \u5bf9\u5c0f\u7a0b\u5e8f\u7684\u652f\u6301\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u5c0f\u7a0b\u5e8f\u5e26\u53bb\u66f4\u597d\u7684\u7814\u53d1\u4f53\u9a8c\u3002",source:"@site/versioned_docs/version-2.0.0/hooks/hooks_miniprogram.md",sourceDirName:"hooks",slug:"/hooks/hooks_miniprogram",permalink:"/en/docs/2.0.0/hooks/hooks_miniprogram",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/hooks/hooks_miniprogram.md",tags:[],version:"2.0.0",frontMatter:{title:"\u5c0f\u7a0b\u5e8f\u4e00\u4f53\u5316"},sidebar:"hooks",previous:{title:"OSS \u6587\u4ef6\u4e0a\u4f20",permalink:"/en/docs/2.0.0/hooks/oss_upload"},next:{title:"\u975e Serverless \u73af\u5883\u4f7f\u7528\u4e00\u4f53\u5316",permalink:"/en/docs/2.0.0/hooks/application_integration"}},l={},p=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",level:2},{value:"\u914d\u7f6e AppId",id:"\u914d\u7f6e-appid",level:3},{value:"\u672c\u5730\u542f\u52a8",id:"\u672c\u5730\u542f\u52a8",level:3},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u5de5\u5177\u9884\u89c8",id:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u5de5\u5177\u9884\u89c8",level:3},{value:"\u5f00\u53d1\u51fd\u6570",id:"\u5f00\u53d1\u51fd\u6570",level:3},{value:"\u51fd\u6570\u90e8\u7f72",id:"\u51fd\u6570\u90e8\u7f72",level:3},{value:"\u672c\u5730\u8c03\u8bd5",id:"\u672c\u5730\u8c03\u8bd5",level:3},{value:"\u9879\u76ee\u90e8\u7f72",id:"\u9879\u76ee\u90e8\u7f72",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u4e00\u4f53\u5316\u662f Midway.js \u56e2\u961f\u4e0e Rax \u56e2\u961f\u5408\u4f5c\u7684\u4ea7\u54c1\uff0c\u901a\u8fc7 Midway.js \u5bf9\u4e00\u4f53\u5316\u7684\u652f\u6301\u4e0e Rax \u5bf9\u5c0f\u7a0b\u5e8f\u7684\u652f\u6301\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u5c0f\u7a0b\u5e8f\u5e26\u53bb\u66f4\u597d\u7684\u7814\u53d1\u4f53\u9a8c\u3002"),(0,r.kt)("h2",{id:""}),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1630379244981-d18b59d3-e27d-455e-8562-0eb7e370f6b9.png#clientId=uae0cc9ff-b84a-4&from=paste&height=1080&id=u4a272148&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&size=108701&status=done&style=stroke&taskId=u4b884bcc-4e76-4311-93fe-877bb69b911&width=1920",width:"1920"}),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5373\u53ef\u5feb\u901f\u5b8c\u6210\u5c0f\u7a0b\u5e8f\u4e00\u4f53\u5316\u9879\u76ee\u7684\u521b\u5efa\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init rax\n")),(0,r.kt)("p",null,"\u9009\u62e9 App -> \u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u4e00\u4f53\u5316\u5e94\u7528\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4e3a\u4f8b")),(0,r.kt)("p",null,"\u9879\u76ee\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e-appid"},"\u914d\u7f6e AppId"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7684\u8fd0\u884c\u4e0e\u9884\u89c8\u4f9d\u8d56\u4e8e AppId\uff08",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7"},"\u83b7\u53d6\u65b9\u5f0f"),"\uff09\uff0c\u83b7\u53d6\u5230 AppID \u65f6\uff0c\u4f60\u53ef\u4ee5\u6253\u5f00\u9879\u76ee\u6839\u76ee\u5f55\u7684 build.json \u6587\u4ef6\uff0c\u5c06 AppId \u914d\u7f6e\u5728\u6b64\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "targets": [\n    //...\n  ],\n  "plugins": [\n    //...\n  ],\n  "wechat-miniprogram": {\n    "nativeConfig": {\n      "appid": "<\u4f60\u7684 AppID>",\n      "name": "nativeConfig \u662f\u7528\u6237\u914d\u7f6e project.config.json \u7684\u5730\u65b9"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"\u672c\u5730\u542f\u52a8"},"\u672c\u5730\u542f\u52a8"),(0,r.kt)("p",null,"\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"npm start\n")),(0,r.kt)("p",null,"\u672c\u5730\u670d\u52a1\u542f\u52a8\u540e\u5c06\u8f93\u51fa\u4ee5\u4e0b\u65e5\u5fd7\u3002"),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1630379551910-f8a43b3b-0017-4aad-b5f8-5eca9056f4df.png#clientId=uae0cc9ff-b84a-4&from=paste&height=326&id=uc1e5095d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=326&originWidth=981&originalType=binary&ratio=1&size=56255&status=done&style=stroke&taskId=u26c58d5b-51ea-487b-906f-0484e4bd264&width=981",width:"981"}),(0,r.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("p",null,"\u6574\u4f53\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src\uff1a\u524d\u7aef\u5f00\u53d1\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"src/cloud\uff1a\u4e91\u5f00\u53d1\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"src/cloud/functions\uff1a\u4e91\u51fd\u6570\u76ee\u5f55")),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1630379466121-ef63511d-4a9a-441a-846d-6c80912f3bd8.png#clientId=uae0cc9ff-b84a-4&from=paste&height=1124&id=lhHzc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1124&originWidth=2272&originalType=binary&ratio=1&size=363965&status=done&style=stroke&taskId=uf9b75197-be74-4d6d-b23d-4142578e747&width=2272",width:"2272"}),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u5de5\u5177\u9884\u89c8"},"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u5de5\u5177\u9884\u89c8"),(0,r.kt)("p",null,"\u6253\u5f00\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u9009\u62e9\u5bfc\u5165\u9879\u76ee\uff0c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u76ee\u5f55\u662f <\u9879\u76ee\u6839\u76ee\u5f55>/build/wechat-miniprogram."),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1630381124950-fd510d0e-fd14-42e3-a01a-6efa92be1ea2.png#clientId=u5ad910ea-f37d-4&from=paste&height=909&id=ufe8e37e3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=909&originWidth=1708&originalType=binary&ratio=1&size=125292&status=done&style=none&taskId=ud11606b5-14a1-42d3-9cd2-f09afba9eeb&width=1708",width:"1708"}),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u6b64\u5904\u9884\u89c8\u9879\u76ee\uff0c\u5e76\u8fdb\u884c\u51fd\u6570\u7684\u90e8\u7f72\u4e0e\u53d1\u5e03\u5de5\u4f5c\u3002"),(0,r.kt)("h3",{id:"\u5f00\u53d1\u51fd\u6570"},"\u5f00\u53d1\u51fd\u6570"),(0,r.kt)("p",null,"\u4f7f\u7528 Midway Hooks \u53ef\u4ee5\u65b9\u4fbf\u7684\u5f00\u53d1\u4e91\u51fd\u6570\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u83b7\u53d6 OpenId \u4e3a\u4f8b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const getOpenId = async () => {\n  const wechatContext = cloud.getWXContext();\n\n  return {\n    openId: wechatContext.OPENID,\n  };\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u524d\u7aef\u8c03\u7528\u4ee3\u7801\uff08\u9700\u8981\u63d0\u524d\u5b89\u88c5 rax-use-async-effect \u4f9d\u8d56\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createElement, useState } from 'rax';\nimport useAsyncEffect from 'rax-use-async-effect';\nimport View from 'rax-view';\nimport Text from 'rax-text';\nimport styles from './index.module.css';\nimport Logo from '../../components/Logo';\nimport { hello, getOpenId } from '@/cloud/function';\n\nexport default function Home() {\n  const [message, setMessage] = useState('');\n  const [openId, setOpenId] = useState('');\n\n  useAsyncEffect(async () => {\n    const message = await hello('Rax', 'Midway.js');\n    setMessage(message);\n\n    const { openId } = await getOpenId();\n    setOpenId(`${openId!.substring(0, 3)}***************${openId!.substring(14)}`);\n  }, []);\n\n  return (\n    <View className={styles.homeContainer}>\n      <Logo uri=\"//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png\" />\n      <Text className={styles.homeTitle}>Welcome to Your Rax App</Text>\n      <Text className={styles.homeInfo}>Message: {message}</Text>\n      <Text className={styles.homeInfo}>OpenId: {openId}</Text>\n    </View>\n  );\n}\n")),(0,r.kt)("p",null,"Midway Hooks \u76f8\u5173\u7684\u8bed\u6cd5\u548c\u6587\u6863\u53ef\u53c2\u8003\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/hooks/intro?view=doc_embed"},"\u4ecb\u7ecd")),(0,r.kt)("h3",{id:"\u51fd\u6570\u90e8\u7f72"},"\u51fd\u6570\u90e8\u7f72"),(0,r.kt)("p",null,"\u4e91\u5f00\u53d1\u7684\u51fd\u6570\u9700\u8981\u90e8\u7f72\u540e\u624d\u80fd\u8c03\u7528\uff0c\u4f60\u53ef\u4ee5\u5728\u751f\u6210\u7684 cloudfunctions \u76ee\u5f55\u4e0b\uff0c\u901a\u8fc7\u53f3\u952e\u70b9\u51fb\u4e0a\u4f20\u90e8\u7f72\u51fd\u6570\u3002"),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1630381168629-1871ca82-65b7-45d4-9625-3b3cb12327b8.png#clientId=u5ad910ea-f37d-4&from=paste&height=220&id=u9070ab28&margin=%5Bobject%20Object%5D&name=image.png&originHeight=220&originWidth=611&originalType=binary&ratio=1&size=42440&status=done&style=none&taskId=u87382ca9-543b-4541-8748-12e0e7eb4be&width=611",width:"611"}),(0,r.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\u91cd\u65b0\u7f16\u8bd1\u9879\u76ee\u5373\u53ef\u67e5\u770b\u51fd\u6570\u8fd0\u884c\u7ed3\u679c\uff0c\u66f4\u591a\u7684\u4e91\u5f00\u53d1\u6307\u5bfc\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a"),(0,r.kt)("h3",{id:"\u672c\u5730\u8c03\u8bd5"},"\u672c\u5730\u8c03\u8bd5"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u65b9\u4fbf\u7684\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u5de5\u5177\u6765\u8fdb\u884c\u51fd\u6570\u8c03\u8bd5\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1630381412803-f33ed7ef-c043-4a96-bcbf-40d308c4b523.png#clientId=u5ad910ea-f37d-4&from=paste&height=794&id=uf83f1005&margin=%5Bobject%20Object%5D&name=image.png&originHeight=794&originWidth=1752&originalType=binary&ratio=1&size=490406&status=done&style=none&taskId=u7623c3c6-3c12-4d40-bbb0-8e4a0544197&width=1752",width:"1752"}),(0,r.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,r.kt)("h2",{id:"\u9879\u76ee\u90e8\u7f72"},"\u9879\u76ee\u90e8\u7f72"),(0,r.kt)("p",null,"\u5728\u5b8c\u6210\u5f00\u53d1\u540e\uff0c\u5373\u53ef\u5f00\u59cb\u53d1\u5e03\u5c0f\u7a0b\u5e8f\uff0c\u540e\u7eed\u53c2\u8003\u4e91\u5f00\u53d1\u5e73\u53f0\u7684\u53d1\u5e03\u6587\u6863\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u53d1\u5e03\uff1a"))}u.isMDXComponent=!0}}]);