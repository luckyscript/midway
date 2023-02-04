"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={},i="Function Context",l={unversionedId:"serverless/serverless_context",id:"serverless/serverless_context",title:"Function Context",description:"Event conversion",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/serverless_context.md",sourceDirName:"serverless",slug:"/serverless/serverless_context",permalink:"/en/docs/serverless/serverless_context",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_context.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",previous:{title:"Test function",permalink:"/en/docs/serverless/serverless_testing"},next:{title:"f.yml definition",permalink:"/en/docs/serverless/serverless_yml"}},o={},p=[{value:"Event conversion",id:"event-conversion",level:2},{value:"Context",id:"context",level:2},{value:"ctx.logger",id:"ctxlogger",level:3},{value:"ctx.env",id:"ctxenv",level:3},{value:"ctx.requestContext",id:"ctxrequestcontext",level:3},{value:"FaaSHTTPContext",id:"faashttpcontext",level:2},{value:"ctx.request",id:"ctxrequest",level:3},{value:"ctx.response",id:"ctxresponse",level:3},{value:"<strong>ctx.params</strong>",id:"ctxparams",level:3},{value:"ctx.set",id:"ctxset",level:3},{value:"ctx.status",id:"ctxstatus",level:3},{value:"Request aliases",id:"request-aliases",level:3},{value:"Response aliases",id:"response-aliases",level:3},{value:"FaaSHTTPRequest",id:"faashttprequest",level:2},{value:"request.headers",id:"requestheaders",level:3},{value:"request.ip",id:"requestip",level:3},{value:"request.url",id:"requesturl",level:3},{value:"request.path",id:"requestpath",level:3},{value:"request.method",id:"requestmethod",level:3},{value:"request.body",id:"requestbody",level:3},{value:"FaaSHTTPResponse",id:"faashttpresponse",level:2},{value:"response.setHeader",id:"responsesetheader",level:3},{value:"response.statusCode",id:"responsestatuscode",level:3},{value:"response.body",id:"responsebody",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function-context"},"Function Context"),(0,a.kt)("h2",{id:"event-conversion"},"Event conversion"),(0,a.kt)("p",null,"Midway Serverless has carried out input parameter wrapping according to the situation of different platforms. At the same time, when the function uses apigw(API gateway) and http (Aliyun) triggers, it has made special treatment on the input parameter (event). In order to simplify and unify the writing method, the event is unified and regularized into code similar to koa writing method."),(0,a.kt)("p",null,"Normal trigger scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/faas';\nimport { Provide } from '@midwayjs/decorator';\n\n@Provide()\nexport class Index {\n\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(...)\n    async handler(event) {\n        return 'hello world'\n    }\n}\n")),(0,a.kt)("p",null,"HTTP and API gateway trigger scenarios:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/faas';\nimport { Provide } from '@midwayjs/decorator';\n\n@Provide()\nexport class Index {\n\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(...)\n    async handler() {\n    // The following two writing methods are the same\n        // this.ctx.body = 'hello world';\n    return 'hello world';\n    }\n}\n")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Every time a function is called, a new ctx (function context) is created. For attributes or methods on ctx, we provide ts definitions."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In Serverless v1 era, our definition is called FaaSContext. In v2, we have unified the definition and application, which is more consistent.")),(0,a.kt)("h3",{id:"ctxlogger"},"ctx.logger"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"ILogger"))),(0,a.kt)("p",null,"The log object of each request passed by the runtime. The default value is console."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.logger.info('hello');\nctx.logger.warn('hello');\nctx.logger.error('hello');\n")),(0,a.kt)("h3",{id:"ctxenv"},"ctx.env"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The current startup environment, that is, the value of the NODE_ENV or MIDWAY_SERVER_ENV. The default value is prod."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.env; //default prod\n")),(0,a.kt)("h3",{id:"ctxrequestcontext"},"ctx.requestContext"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"MidwayRequestContainer"))),(0,a.kt)("p",null,"The IoC request scope container of midway faas is used to obtain object instances in other IoC containers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const userService = await ctx.requestContext.getAsync(UserService);\n")),(0,a.kt)("h2",{id:"faashttpcontext"},"FaaSHTTPContext"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Context")," definitions are inherited from ",(0,a.kt)("inlineCode",{parentName:"p"},"FaaSHTTPContext"),". The former retains the latter. In most scenarios, the former can be used directly. The latter is only available under apigw(API Gateway) and http (Aliyun) triggers."),(0,a.kt)("p",null,"For ordinary users, just use ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," definition directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/faas';\n\n@Inject()\nctx: Context;\n")),(0,a.kt)("p",null,"In the ctx object, we provide some API similar to writing traditional Koa Web applications. The advantage of this is to reduce the cognitive cost of users, and, to a certain extent, compatibility with the original traditional code and community middleware becomes possible."),(0,a.kt)("p",null,"We have provided some APIs similar to traditional APIs that support common capabilities. ",(0,a.kt)("strong",{parentName:"p"},"Different platforms may not be exactly the same"),". We will point out specific APIs."),(0,a.kt)("h3",{id:"ctxrequest"},"ctx.request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"FaaSHTTPRequest"))),(0,a.kt)("p",null,"HTTP Request object simulated by FaaS."),(0,a.kt)("h3",{id:"ctxresponse"},"ctx.response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"FaaSHTTPResponse"))),(0,a.kt)("p",null,"HTTP Response object simulated by FaaS."),(0,a.kt)("h3",{id:"ctxparams"},(0,a.kt)("strong",{parentName:"h3"},"ctx.params")),(0,a.kt)("p",null,"The proxy is ",(0,a.kt)("inlineCode",{parentName:"p"},"request.pathParameters")," and is available under http triggers (Aliyun) and API gateway triggers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// /api/user/[id] /api/user/faas\nctx.params.id; // faas\n")),(0,a.kt)("h3",{id:"ctxset"},"ctx.set"),(0,a.kt)("p",null,"Set the response header, which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"response.setHeader")," agent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.set('X-FaaS-Duration', 2100);\n")),(0,a.kt)("h3",{id:"ctxstatus"},"ctx.status"),(0,a.kt)("p",null,"Sets the return status code, which represents the ",(0,a.kt)("inlineCode",{parentName:"p"},"response.statusCode")," from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.status = 404;\n")),(0,a.kt)("h3",{id:"request-aliases"},"Request aliases"),(0,a.kt)("p",null,"The attributes listed below are from the ","[Request]","(# k6AZp) object proxy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.url")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.ip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.query")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.get()"))),(0,a.kt)("h3",{id:"response-aliases"},"Response aliases"),(0,a.kt)("p",null,"The attributes listed below are from the ",(0,a.kt)("a",{parentName:"p",href:"#kfTOD"},"Response")," object proxy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.body=")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.status=")," alias to ",(0,a.kt)("inlineCode",{parentName:"li"},"response.statusCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.type=")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.set()")," alias to ",(0,a.kt)("inlineCode",{parentName:"li"},"response.setHeader"))),(0,a.kt)("h2",{id:"faashttprequest"},"FaaSHTTPRequest"),(0,a.kt)("p",null,"This object is obtained by converting the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," input parameters of the function."),(0,a.kt)("h3",{id:"requestheaders"},"request.headers"),(0,a.kt)("p",null,"Object containing all request headers, key-value pair storage."),(0,a.kt)("h3",{id:"requestip"},"request.ip"),(0,a.kt)("p",null,"obtain the client request ip address."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"On Alibaba Cloud FC, only the HTTP trigger can obtain the value, and the api gateway cannot obtain the value for the time being.")),(0,a.kt)("h3",{id:"requesturl"},"request.url"),(0,a.kt)("p",null,"the client requests the complete url."),(0,a.kt)("h3",{id:"requestpath"},"request.path"),(0,a.kt)("p",null,"the client request path."),(0,a.kt)("h3",{id:"requestmethod"},"request.method"),(0,a.kt)("p",null,"The requested method."),(0,a.kt)("h3",{id:"requestbody"},"request.body"),(0,a.kt)("p",null,"The body of the POST request has been parsed to JSON."),(0,a.kt)("h2",{id:"faashttpresponse"},"FaaSHTTPResponse"),(0,a.kt)("p",null,"This object is obtained by converting the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," input parameters of the function."),(0,a.kt)("h3",{id:"responsesetheader"},"response.setHeader"),(0,a.kt)("p",null,"Set the response header."),(0,a.kt)("h3",{id:"responsestatuscode"},"response.statusCode"),(0,a.kt)("p",null,"Set the return status code."),(0,a.kt)("h3",{id:"responsebody"},"response.body"),(0,a.kt)("p",null,"Set the content of the response body, ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer"),"."))}d.isMDXComponent=!0}}]);