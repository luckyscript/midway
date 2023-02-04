"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76271],{99703:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(95999),r=a(32244);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(9460),r=a(46651);function o(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},91851:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),l=a(9460),r=a(20988),o=a(57624),i=a(86010),m=a(39960);const c={image:"image_oRbT"};function s(e){let{author:t,className:a}=e;const{name:l,url:r,imageURL:o}=t;return n.createElement("div",{className:(0,i.Z)("avatar margin-bottom--sm",a)},o&&n.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:c.image,src:o,alt:l,onError:e=>{e.currentTarget.src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" fill="none" stroke="%2325c2a0" stroke-width="30" version="1.1"><circle cx="300" cy="230" r="115"/><path stroke-linecap="butt" d="M106.81863443903,481.4 a205,205 1 0,1 386.36273112194,0"/></svg>'}})))}var g=a(87462);function u(e){let{expanded:t,...a}=e;return t?n.createElement("svg",(0,g.Z)({viewBox:"0 0 1024 1024",width:"20",height:"20",fill:"currentColor"},a),n.createElement("path",{d:"M783.915092 1009.031953l-271.898251-277.615587-271.930737 277.550617a49.214558 49.214558 0 0 1-70.752018 0 51.780862 51.780862 0 0 1 0-72.246322l307.274261-313.706262a49.279528 49.279528 0 0 1 70.784503 0l307.33923 313.706262a51.975771 51.975771 0 0 1 0 72.311292 49.409467 49.409467 0 0 1-70.816988 0z m-307.306745-608.05155L169.269117 87.274141A51.975771 51.975771 0 0 1 169.269117 14.96285a49.409467 49.409467 0 0 1 70.816987 0l271.930737 277.615586L783.850122 14.96285a49.409467 49.409467 0 0 1 70.816988 0 51.975771 51.975771 0 0 1 0 72.311291l-307.33923 313.706262a49.376982 49.376982 0 0 1-70.719533 0z"})):n.createElement("svg",(0,g.Z)({viewBox:"0 0 1024 1024",width:"20",height:"20",fill:"currentColor"},a),n.createElement("path",{d:"M476.612887 1009.12034L169.240699 695.380437a51.981345 51.981345 0 0 1 0-72.319045 49.382277 49.382277 0 0 1 70.824582 0l271.959897 277.645356 271.862433-277.645356a49.382277 49.382277 0 0 1 70.824582 0 51.981345 51.981345 0 0 1 0 72.319045l-307.307212 313.739903a49.447254 49.447254 0 0 1-70.792094 0z m307.274724-608.116755L511.99269 123.455693l-271.959897 277.645357a49.382277 49.382277 0 0 1-70.824582 0 51.981345 51.981345 0 0 1 0-72.319045L476.580399 15.042102a49.382277 49.382277 0 0 1 70.727117 0l307.372188 313.739903a51.981345 51.981345 0 0 1 0 72.319045 49.414766 49.414766 0 0 1-70.824582 0z"}))}const h={authorCol:"authorCol_mDBc",imageOnlyAuthorRow:"imageOnlyAuthorRow_WiD6",imageOnlyAuthorCol:"imageOnlyAuthorCol_uiac",toggleButton:"toggleButton_WvRg",toggleButtonIconExpanded:"toggleButtonIconExpanded_ERxv"};function d(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,l.C)(),[o,m]=(0,n.useState)(!1);if(0===a.length)return null;const c=a.slice(0,o?a.length:10);return n.createElement("div",{className:(0,i.Z)("margin-top--md margin-bottom--sm",h.imageOnlyAuthorRow,t)},c.map(((e,t)=>n.createElement("div",{className:h.imageOnlyAuthorCol,key:t},n.createElement(s,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})))),a.length>10&&n.createElement("button",{className:(0,i.Z)("clean-btn",h.toggleButton),type:"button",onClick:()=>m((e=>!e)),"aria-label":"expand"},n.createElement(u,{expanded:o})))}const E={changelogItemTitleList:"changelogItemTitleList_sueG"};function p(){const{isBlogPostPage:e}=(0,l.C)();return n.createElement(r.Z,{className:e?void 0:E.changelogItemTitleList})}function b(){return n.createElement("header",null,n.createElement(p,null),n.createElement(o.Z,null),n.createElement(d,null))}var v=a(15289),Z=a(99714);const f={changelogItemContainer:"changelogItemContainer_jeDt"};function w(e){let{children:t}=e;return n.createElement(v.Z,{className:f.changelogItemContainer},n.createElement(b,null),n.createElement(Z.Z,null,t))}},79750:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(67294),l=a(86010),r=a(10833),o=a(35281),i=a(39058),m=a(99703),c=a(79985),s=a(90197),g=a(91851);a(95999),a(39960);function u(e){let{blogTitle:t}=e;return n.createElement("header",{className:"margin-bottom--lg"},n.createElement("h1",{style:{fontSize:"3rem"}},t))}function h(e){const{metadata:t}=e,{blogTitle:a,blogDescription:l}=t;return n.createElement(n.Fragment,null,n.createElement(r.d,{title:a,description:l}),n.createElement(s.Z,{tag:"blog_posts_list"}))}function d(e){const{metadata:t,items:a,sidebar:l}=e,{blogTitle:r}=t;return n.createElement(i.Z,{sidebar:l},n.createElement(u,{blogTitle:r}),n.createElement(c.Z,{items:a,component:g.Z}),n.createElement(m.Z,{metadata:t}))}function E(e){return n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(h,e),n.createElement(d,e))}}}]);