"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),h=n,y=u["".concat(p,".").concat(h)]||u[h]||s[h]||i;return a?r.createElement(y,l(l({ref:t},c),{},{components:a})):r.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={date:"2022-12-13T20:00",authors:["czy88840616"]},l="v3.9.0",o={permalink:"/en/changelog/v3.9.0",source:"@site/changelog/source/v3.9.0.md",title:"v3.9.0",description:"New Feature",date:"2022-12-13T20:00:00.000Z",formattedDate:"December 13, 2022",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"}],frontMatter:{date:"2022-12-13T20:00",authors:["czy88840616"]},prevItem:{title:"v3.9.1",permalink:"/en/changelog/v3.9.1"},nextItem:{title:"v3.8.4",permalink:"/en/changelog/v3.8.4"},listPageLink:"/en/changelog/"},p={authorsImageUrls:[void 0]},m=[{value:"\ud83d\ude80 New Feature",id:"-new-feature",level:2},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udd27 Maintenance",id:"-maintenance",level:2},{value:"Committers: 1",id:"committers-1",level:2}],c={toc:m},u="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-new-feature"},"\ud83d\ude80 New Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bootstrap"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2551"},"#2551")," feat: support socket.io sticky session (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"casbin-redis-adapter"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"casbin"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"redis"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2560"},"#2560")," feat: support casbin watcher (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2574"},"#2574")," feat: add @injectClient for service factory (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2533"},"#2533")," fix: glob support more wildcard string (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"web"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2573"},"#2573")," fix: ignore backup egg logger error (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"faas"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"mock"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2576"},"#2576")," fix: event not format in faas (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"-maintenance"},"\ud83d\udd27 Maintenance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2534"},"#2534")," chore: sync code from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/fork-dep-monitor/pu%E2%80%A6"},"https://github.com/midwayjs/fork-dep-monitor/pu\u2026")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"web-koa"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2535"},"#2535")," chore: sync code from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/fork-dep-monitor/pu%E2%80%A6"},"https://github.com/midwayjs/fork-dep-monitor/pu\u2026")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,n.kt)("h2",{id:"committers-1"},"Committers: 1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Harry Chen (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))}s.isMDXComponent=!0}}]);