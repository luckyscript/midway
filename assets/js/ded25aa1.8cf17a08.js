"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24094],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={date:"2023-08-24T20:00",authors:["czy88840616","waitingsong"]},o="v3.12.3",l={permalink:"/changelog/v3.12.3",source:"@site/changelog/source/v3.12.3.md",title:"v3.12.3",description:"Bug Fix",date:"2023-08-24T20:00:00.000Z",formattedDate:"2023\u5e748\u670824\u65e5",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"waiting",alias:"waitingsong",url:"https://github.com/waitingsong",imageURL:"https://github.com/waitingsong.png",key:"waitingsong"}],frontMatter:{date:"2023-08-24T20:00",authors:["czy88840616","waitingsong"]},prevItem:{title:"v3.12.4",permalink:"/changelog/v3.12.4"},nextItem:{title:"v3.12.2",permalink:"/changelog/v3.12.2"},listPageLink:"/changelog/"},p={authorsImageUrls:[void 0,void 0]},m=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 2",id:"committers-2",level:2}],c={toc:m},u="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"core"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3191"},"#3191")," fix: add glob load model args (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,r.kt)("h2",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3181"},"#3181")," docs(site): ",(0,r.kt)("strong",{parentName:"li"},"filename, "),"dirname under ESM (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/waitingsong"},"@waitingsong"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3166"},"#3166")," docs: add document for esm version (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")),(0,r.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3193"},"#3193")," chore(deps): update dependency jest to v29.6.4 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3183"},"#3183")," chore(deps): update dependency jest to v29.6.3 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3186"},"#3186")," chore(deps): update dependency @types/node to v18.17.7 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3177"},"#3177")," fix(deps): update dependency accepts to v1.3.8 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mongoose"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/3187"},"#3187")," chore(deps): update dependency mongoose to v7.4.4 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,r.kt)("h2",{id:"committers-2"},"Committers: 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Harry Chen (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,r.kt)("li",{parentName:"ul"},"waiting (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/waitingsong"},"@waitingsong"),")")))}s.isMDXComponent=!0}}]);