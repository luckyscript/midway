"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"core-decorator-merge",title:"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd",authors:["harry"],tags:["decorator","core"]},l=void 0,i={permalink:"/blog/core-decorator-merge",source:"@site/blog/2022-10-26-core-decorator-merge.md",title:"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd",description:"\u4ece v3.6.0 \u5f00\u59cb\uff0cMidway \u5728\u4ee3\u7801\u5c42\u9762\u5c06 @midwayjs/decorator \u4e2d\u7684\u4ee3\u7801\u8fc1\u79fb\u5230\u4e86 @midwayjs/core \u4e2d\uff0c\u672a\u6765 @midwayjs/decorator \u5305\u5c06\u9010\u6b65\u51cf\u5c11\u4f7f\u7528\u3002",date:"2022-10-26T00:00:00.000Z",formattedDate:"2022\u5e7410\u670826\u65e5",tags:[{label:"decorator",permalink:"/blog/tags/decorator"},{label:"core",permalink:"/blog/tags/core"}],readingTime:1.62,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"core-decorator-merge",title:"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd",authors:["harry"],tags:["decorator","core"]},prevItem:{title:"Jest v29 \u66f4\u65b0",permalink:"/blog/jest_update"},nextItem:{title:"Release 3.6.0",permalink:"/blog/release/3.6.0"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ece v3.6.0 \u5f00\u59cb\uff0cMidway \u5728\u4ee3\u7801\u5c42\u9762\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")," \u4e2d\u7684\u4ee3\u7801\u8fc1\u79fb\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," \u4e2d\uff0c\u672a\u6765 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")," \u5305\u5c06\u9010\u6b65\u51cf\u5c11\u4f7f\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")," \u4e2d\u7684\u4ee3\u7801\u5168\u90e8\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," \u4e2d\u4ee3\u7406\u51fa\u6765\uff0c\u4ee3\u7801\u5c42\u9762\u4fdd\u6301\u5411\u4e0b\u517c\u5bb9\u3002"),(0,a.kt)("p",null,"\u6700\u8fd1\u53d1\u73b0\u6709\u4e9b\u7528\u6237\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u4e0b\u9762\u7684\u62a5\u9519\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01ZUf1P31oSBRQlBEhv_!!6000000005223-0-tps-3148-554.jpg",alt:null})),(0,a.kt)("p",null,"\u539f\u56e0\u6709\u4e24\u7c7b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\u3001v3 \u7684\u7248\u672c\u7684 core \u548c\u7ec4\u4ef6\u7248\u672c\u4e0d\u4e00\u81f4")),(0,a.kt)("p",null,"\u5728\u5f00\u53d1\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," \u800c\u5b89\u88c5\u4e86 latest \u7248\u672c\uff08>=v3.6.0\uff09 \u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e core \u7684\u7248\u672c\u4f9d\u65e7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"3.6.0")," \u4ee5\u4e0b\uff0c\u4f46\u662f\u7ec4\u4ef6\u4f9d\u8d56\u4e86\u6700\u65b0\u7248\u672c core \u7684 API\uff0c\u4ece\u800c\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"../docs/how_to_update_midway"},"\u5982\u4f55\u66f4\u65b0 Midway")," \u4e2d\u6709\u63cf\u8ff0\uff0c\u8bf7\u4e0d\u8981\u5355\u72ec\u5347\u7ea7\u67d0\u4e2a\u7ec4\u4ef6\u5305\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\u6709\u4e24\u4e2a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u53ef\u4ee5\u4f7f\u7528\u4f4e\u7248\u672c\u7684\u7ec4\u4ef6\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"3.6.0")," \u4ee5\u4e0b"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u6216\u8005\u5347\u7ea7 core \u548c\u5176\u4ed6\u7684\u7248\u672c\u7edf\u4e00\u5230  ",(0,a.kt)("inlineCode",{parentName:"li"},"3.6.0")," \u4ee5\u4e0a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2\u3001v2 \u7684\u7248\u672c\u4f7f\u7528\u4e86 v3 \u7684\u7ec4\u4ef6")),(0,a.kt)("p",null,"\u5728 v2 \u7248\u672c\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," \u800c\u9519\u8bef\u5b89\u88c5\u4e86 latest \u7248\u672c\uff08v3\uff09 \u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4e3a\u4e86\u9002\u914d\u6700\u65b0\u7684\u7248\u672c\u6b63\u597d\u5347\u7ea7\u4e86 v3 \u7684\u7ec4\u4ef6\uff0c\u4ece\u800c\u66b4\u9732\u4e86\u5f15\u4e86\u9519\u8bef\u7684\u7248\u672c\u7684\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u73b0\u5728 v2 \u548c v3 \u7684\u7ec4\u4ef6\u4e0d\u4fdd\u8bc1\u80fd\u5b8c\u5168\u517c\u5bb9\uff0c\u6240\u4ee5\u8bf7\u5728\u5b89\u88c5\u65f6\u505a\u597d\u533a\u5206\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a\u4f7f\u7528 v2 \u7248\u672c\u7684\u7ec4\u4ef6\u3002"))}s.isMDXComponent=!0}}]);