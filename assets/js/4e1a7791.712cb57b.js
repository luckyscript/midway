"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="\u5e38\u89c1\u6846\u67b6\u95ee\u9898",l={unversionedId:"faq/framework_problem",id:"faq/framework_problem",title:"\u5e38\u89c1\u6846\u67b6\u95ee\u9898",description:"\u591a\u4e2a @midwayjs/decorator \u8b66\u544a",source:"@site/docs/faq/framework_problem.md",sourceDirName:"faq",slug:"/faq/framework_problem",permalink:"/docs/faq/framework_problem",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/faq/framework_problem.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"\u670d\u52a1\u5668\u542f\u52a8\u5931\u8d25\u6392\u67e5",permalink:"/docs/ops/ecs_start_err"},next:{title:"\u5e38\u89c1 git \u95ee\u9898",permalink:"/docs/faq/git_problem"}},p={},c=[{value:"\u591a\u4e2a @midwayjs/decorator \u8b66\u544a",id:"\u591a\u4e2a-midwayjsdecorator-\u8b66\u544a",level:2},{value:"xxx is not valid in current context",id:"xxx-is-not-valid-in-current-context",level:2},{value:"TypeError: (0 ,decorator_1.Framework) is not a function",id:"typeerror-0-decorator_1framework-is-not-a-function",level:2}],m={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e38\u89c1\u6846\u67b6\u95ee\u9898"},"\u5e38\u89c1\u6846\u67b6\u95ee\u9898"),(0,a.kt)("h2",{id:"\u591a\u4e2a-midwayjsdecorator-\u8b66\u544a"},"\u591a\u4e2a @midwayjs/decorator \u8b66\u544a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")," \u5305\u4e00\u822c\u6765\u8bf4\uff0cnpm \u4f1a\u8ba9\u76f8\u540c\u7684\u4f9d\u8d56\u5728 node_modules \u5b58\u5728\u4e00\u4efd\u5b9e\u4f8b\uff0c\u5176\u4f59\u7684\u6a21\u5757\u90fd\u4f1a\u901a\u8fc7\u8f6f\u94fe\uff08link\uff09\u94fe\u63a5\u5230 node_modules/@midwayjs/decorator\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4f1a\u7528\u5230\u4e0b\u9762\u7684\u547d\u4ee4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"npm ls")," \u4f1a\u5217\u51fa\u9879\u76ee\u5e95\u4e0b\u67d0\u4e2a\u5305\u7684\u4f9d\u8d56\u6811\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm ls @midwayjs/decorator\n")),(0,a.kt)("p",null,"\u6bd4\u5982\u4e0b\u56fe\u6240\u793a\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01Td86gC1tQsKjRB8XU_!!6000000005897-2-tps-541-183.png",alt:"image.png"}),"\n\u7070\u8272\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"deduped")," \u6307\u7684\u5c31\u662f\u8be5\u5305\u662f\u88ab npm \u8f6f\u94fe\u5230\u540c\u4e00\u4e2a\u6a21\u5757\uff0c\u662f\u6b63\u5e38\u7684\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u518d\u6765\u770b\u4e0b\u6709\u95ee\u9898\u7684\u793a\u4f8b\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01gsnexD1i6lA7kM48q_!!6000000004364-2-tps-1010-308.png",alt:"image.png"})),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a lerna \u9879\u76ee\uff0c\u6700\u4e0b\u9762\u7684 demo-docs \u4e2d\u7684 decorator \u5305\uff0c\u540e\u9762\u6ca1\u6709 ",(0,a.kt)("strong",{parentName:"p"},"deduped")," \u6807\u793a\uff0c\u8bf4\u660e\u8fd9\u4e2a\u5305\u662f\u72ec\u7acb\u5b58\u5728\u7684\uff0c\u662f\u9519\u8bef\u7684\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u8fd9\u4e2a\u601d\u8def\uff0c\u6211\u4eec\u53ef\u4ee5\u9010\u6b65\u6392\u67e5\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u4e0a\u56fe\uff0c\u53ef\u80fd\u662f\u5728\u5355\u4e2a\u6a21\u5757\u4e2d\u4f7f\u7528\u7684 npm install\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 lerna \u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u4e0b\u9762\u7684\u601d\u8def\u9010\u6b65\u6392\u67e5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u5305\u542b\u4e0d\u540c\u7248\u672c\u7684 decorator \u5305\uff08\u6bd4\u5982\uff0cpackage-lock \u9501\u5305\uff0c\u6216\u8005\u4f9d\u8d56\u5199\u6b7b\u7248\u672c\uff09"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u672a\u6b63\u786e\u4f7f\u7528 lerna \u7684 hoist \u6a21\u5f0f\uff08\u6bd4\u5982\u4e0a\u56fe\uff0c\u53ef\u80fd\u662f\u5728\u5355\u4e2a\u6a21\u5757\u4e2d\u4f7f\u7528\u7684 npm install\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 lerna \u5b89\u88c5\uff09")),(0,a.kt)("h2",{id:"xxx-is-not-valid-in-current-context"},"xxx is not valid in current context"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u662f\u5f53\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u4e2d\u67d0\u4e2a\u5c5e\u6027\u6240\u5173\u8054\u7684\u7c7b\u5728\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u4e2d\u627e\u4e0d\u5230\u7206\u51fa\u7684\u3002\u8fd9\u4e2a\u9519\u8bef\u5c55\u793a\u7684\u53ef\u80fd\u4f1a\u9012\u5f52\uff0c\u6bd4\u8f83\u6df1\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01sTvqNX1NiDcoiyS2a_!!6000000001603-2-tps-1053-141.png",alt:"image.png"}),"\n\u9519\u8bef\u6838\u5fc3\u5c31\u662f\u7b2c\u4e00\u4e2a\u5c5e\u6027\uff0c\u5728\u67d0\u4e2a\u7c7b\u4e2d\u627e\u4e0d\u5230\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u4e0a\u56fe\u7684\u6838\u5fc3\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"packageBuildInfoHsfService")," \u8fd9\u4e2a\u6ce8\u5165\u7684\u7c7b\u627e\u4e0d\u5230\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01BBe4gu1KHhqnT0S75_!!6000000001139-2-tps-765-166.png",alt:"image.png"}),"\n\u8fd9\u4e2a\u65f6\u5019\uff0c\u5c31\u9700\u8981\u53bb\u5bf9\u5e94\u7684\u7c7b\u4e2d\u53bb\u770b\uff0c\u662f\u5426\u662f provide \u51fa\u6765\u7684\u540d\u5b57\u88ab\u81ea\u5b9a\u4e49\u4e86\u3002"),(0,a.kt)("p",null,"\u5e38\u89c1\u7684\u95ee\u9898\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001Provide \u88c5\u9970\u5668\u5bfc\u51fa\u7684\u540d\u5b57\u4e0d\u5bf9\uff0c\u65e0\u6cd5\u548c\u5c5e\u6027\u5bf9\u5e94"),(0,a.kt)("li",{parentName:"ul"},"2\u3001Provide \u4e3a\u7a7a\u7684\u8bdd\uff0c\u5927\u6982\u7387\u662f\u5927\u5c0f\u5199\u6ca1\u5199\u5bf9"),(0,a.kt)("li",{parentName:"ul"},"3\u3001\u6ce8\u5165\u662f\u7ec4\u4ef6\u7684\u8bdd\uff0c\u53ef\u80fd\u662f\u6f0f\u4e86\u7ec4\u4ef6\u540d")),(0,a.kt)("p",null,"\u7b80\u5355\u7684\u89e3\u6cd5\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"@Inject")," \u88c5\u9970\u5668\u4e0d\u52a0\u53c2\u6570\uff0c\u5c5e\u6027\u7684\u5b9a\u4e49\u5199\u660e\u786e\u7684\u7c7b\uff0c\u8fd9\u6837 midway \u53ef\u4ee5\u81ea\u52a8\u627e\u5230\u5bf9\u5e94\u7684\u7c7b\u5e76\u6ce8\u5165\uff08\u4e0d\u9002\u7528\u4e8e\u591a\u6001\u7684\u60c5\u51b5\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Inject()\nservice: PackageBuildInfoHsfService;\n")),(0,a.kt)("h2",{id:"typeerror-0-decorator_1framework-is-not-a-function"},"TypeError: (0 ,decorator_1.Framework) is not a function"),(0,a.kt)("p",null,"\u539f\u56e0\u4e3a\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u7248\u672c\uff0c\u6bd4\u5982\u4f4e\u7248\u672c\u7684\u6846\u67b6\uff0c\u4f7f\u7528\u4e86\u9ad8\u7248\u672c\u7684\u7ec4\u4ef6\uff082.x \u7684\u6846\u67b6\u4f7f\u7528\u4e86 3.x \u7684\u7ec4\u4ef6\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01G7gzCj1EkCpW1gaJl_!!6000000000389-2-tps-1461-491.png",alt:null})),(0,a.kt)("p",null,"\u89e3\u6cd5\uff1a\u786e\u8ba4\u81ea\u5df1\u7684\u6846\u67b6\u5927\u7248\u672c\uff08@midwayjs/core \u7684\u7248\u672c\u5373\u4e3a\u6846\u67b6\u7248\u672c\uff09\uff0c\u9009\u62e9\u5bf9\u5e94\u7684\u6587\u6863\uff0c\u5bf9\u5e94\u7684\u7ec4\u4ef6\u4f7f\u7528\u3002"))}u.isMDXComponent=!0}}]);