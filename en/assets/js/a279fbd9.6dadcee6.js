"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={date:"2023-11-02T20:00",authors:["odex21"]},i="v3.12.9",l={permalink:"/en/changelog/v3.12.9",source:"@site/changelog/source/v3.12.9.md",title:"v3.12.9",description:"Bug Fix",date:"2023-11-02T20:00:00.000Z",formattedDate:"November 2, 2023",tags:[],hasTruncateMarker:!0,authors:[{name:"odex21",alias:"odex21",url:"https://github.com/odex21",imageURL:"https://github.com/odex21.png",key:"odex21"}],frontMatter:{date:"2023-11-02T20:00",authors:["odex21"]},prevItem:{title:"v3.12.10",permalink:"/en/changelog/v3.12.10"},nextItem:{title:"v3.12.8",permalink:"/en/changelog/v3.12.8"},listPageLink:"/en/changelog/"},p={authorsImageUrls:[void 0]},u=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 1",id:"committers-1",level:2}],m={toc:u},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"swagger"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3382"},"#3382")," fix(swagger): api property should support $ref (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/odex21"},"@odex21"),")")))),(0,a.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"consul"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3373"},"#3373")," chore(deps): update dependency nock to v13.3.7 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mongoose"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3375"},"#3375")," chore(deps): update dependency mongoose to v7.6.4 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"oss"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3364"},"#3364")," fix(deps): update dependency @types/ali-oss to v6.16.10 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,a.kt)("h2",{id:"committers-1"},"Committers: 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/odex21"},"@odex21"))))}s.isMDXComponent=!0}}]);