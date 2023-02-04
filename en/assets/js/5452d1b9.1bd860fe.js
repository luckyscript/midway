"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,k=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},i="Data simulation",s={unversionedId:"mock",id:"mock",title:"Data simulation",description:"Midway provides the built-in ability to simulate data during development and testing.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/mock.md",sourceDirName:".",slug:"/mock",permalink:"/en/docs/mock",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/mock.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Test",permalink:"/en/docs/testing"},next:{title:"Debugger",permalink:"/en/docs/debugger"}},l={},c=[{value:"Mock during testing",id:"mock-during-testing",level:2},{value:"Simulation context",id:"simulation-context",level:3},{value:"Analog Session",id:"analog-session",level:3},{value:"Simulate Header",id:"simulate-header",level:3},{value:"Simulation class attribute",id:"simulation-class-attribute",level:3},{value:"Simulate common object properties",id:"simulate-common-object-properties",level:3},{value:"Clean up mock",id:"clean-up-mock",level:3},{value:"Standard Mock service",id:"standard-mock-service",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-simulation"},"Data simulation"),(0,o.kt)("p",null,"Midway provides the built-in ability to simulate data during development and testing."),(0,o.kt)("h2",{id:"mock-during-testing"},"Mock during testing"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/mock")," provides some more general APIs for simulation during testing."),(0,o.kt)("h3",{id:"simulation-context"},"Simulation context"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mockContext")," methods are used to simulate the context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mockContext } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n  const app = await createApp();\n\n  // Simulation context\n  mockContext(app, 'user', 'midway');\n\n  const result1 = await createHttpRequest(app).get('/');\n  // ctx.user => midway\n  // ...\n});\n")),(0,o.kt)("p",null,"If your data is complex or logical, you can also use the callback form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mockContext } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n  const app = await createApp();\n\n  // Simulation context\n  mockContext(app, (ctx) => {\n    ctx.user = 'midway';\n  });\n});\n")),(0,o.kt)("p",null,"Note that this mock behavior is executed before all middleware."),(0,o.kt)("h3",{id:"analog-session"},"Analog Session"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mockSession")," methods are used to simulate Session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mockSession } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n  const app = await createApp();\n\n  mockSession(app, 'user', 'midway');\n\n  const result1 = await createHttpRequest(app).get('/');\n  // ctx.session.user => midway\n  // ...\n});\n")),(0,o.kt)("h3",{id:"simulate-header"},"Simulate Header"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"mockHeader")," methods to simulate Header."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mockHeader } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n  const app = await createApp();\n\n  mockHeader(app, 'x-abc', 'bbb');\n\n  const result1 = await createHttpRequest(app).get('/');\n  // ctx.headers['x-abc'] => bbb\n  // ...\n});\n")),(0,o.kt)("h3",{id:"simulation-class-attribute"},"Simulation class attribute"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"mockClassProperty")," method to simulate the properties of the class."),(0,o.kt)("p",null,"If there is the following service class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class UserService {\n  data;\n\n  async getUser() {\n    return 'hello';\n  }\n}\n")),(0,o.kt)("p",null,"We can simulate it when we use it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mockClassProperty } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n\n  mockClassProperty(UserService, 'data', {\n    bbb: 1\n  });\n  // userService.data => {bbb: 1}\n\n  // ...\n});\n")),(0,o.kt)("p",null,"It is also possible to simulate the method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mockClassProperty } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n\n  mockClassProperty(UserService, 'getUser', async () => {\n    return 'midway';\n  });\n\n  // userService.getUser() => 'midway'\n\n  // ...\n});\n")),(0,o.kt)("h3",{id:"simulate-common-object-properties"},"Simulate common object properties"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"mockProperty")," method to mock object properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mockProperty } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n\n  const a = {};\n  mockProperty(a, 'name', 'hello');\n\n  // a['name'] => 'hello'\n\n  // ...\n});\n")),(0,o.kt)("p",null,"It is also possible to simulate the method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { mockProperty } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n\n  const a = {};\n  mockProperty(a, 'getUser', async () => {\n    return 'midway';\n  });\n\n  // a.getUser() => 'midway'\n\n  // ...\n});\n")),(0,o.kt)("h3",{id:"clean-up-mock"},"Clean up mock"),(0,o.kt)("p",null,"Every time the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method is called, all mock data is automatically cleared."),(0,o.kt)("p",null,"If you want to clean up manually, you can also perform method ",(0,o.kt)("inlineCode",{parentName:"p"},"restoreAllMocks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { restoreAllMocks } from '@midwayjs/mock';\n\nit('should test create koa app with new mode with mock', async () => {\n  restoreAllMocks();\n  // ...\n});\n")),(0,o.kt)("h2",{id:"standard-mock-service"},"Standard Mock service"),(0,o.kt)("p",null,"Midway provides standard MidwayMockService services for simulating data in code."),(0,o.kt)("p",null,"Various simulation methods in ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/mock")," have all called this service at the bottom."),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"./built_in_service#midwaymockservice"},"Built-in services"),"."))}u.isMDXComponent=!0}}]);