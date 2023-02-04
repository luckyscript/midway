"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},o="JWT",l={unversionedId:"extensions/jwt",id:"extensions/jwt",title:"JWT",description:"JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact, self-contained method for securely transferring information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/jwt.md",sourceDirName:"extensions",slug:"/extensions/jwt",permalink:"/en/docs/extensions/jwt",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/jwt.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Task Queues",permalink:"/en/docs/extensions/bull"},next:{title:"Koa",permalink:"/en/docs/extensions/koa"}},s={},c=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Use components",id:"use-components",level:2},{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Common API",id:"common-api",level:2},{value:"Middleware example",id:"middleware-example",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jwt"},"JWT"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JSON Web Token")," (JWT) is an open standard (RFC 7519) that defines a compact, self-contained method for securely transferring information between parties as a ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," object. This information can be verified and trusted because it is digitally signed."),(0,a.kt)("p",null,"Midway provides jwt components and simply provides some jwt-related API, which can be used for independent authentication and verification."),(0,a.kt)("p",null,"Related information:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/jwt@3 --save\n$ npm i @types/jsonwebtoken --save-dev\n")),(0,a.kt)("p",null,"Or reinstall the following dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/jwt": "^3.0.0"\n    // ...\n  },\n  "devDependencies": {\n    null\n  }\n}\n')),(0,a.kt)("h2",{id:"use-components"},"Use components"),(0,a.kt)("p",null,"Configure jwt components into the code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport { IMidwayContainer } from '@midwayjs/core';\nimport * as jwt from '@midwayjs/jwt';\n\n@Configuration({\n  null\n    // ...\n    jwt\n  ],\n})\nexport class MainConfiguration {\n  // ...\n}\n")),(0,a.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,a.kt)("p",null,"Then set in the configuration, the default is not encrypted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  null\n    secret: 'xxxxxxxxxxxxxx', // fs.readFileSync('xxxxx.key')\n    expiresIn: '2d', // https://github.com/vercel/ms\n  },\n};\n")),(0,a.kt)("p",null,"for more configurations, see the ts definition."),(0,a.kt)("h2",{id:"common-api"},"Common API"),(0,a.kt)("p",null,"Midway provides jwt common API as synchronous and asynchronous."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject } from '@midwayjs/decorator';\nimport { JwtService } from '@midwayjs/jwt';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  jwtService: JwtService;\n\n  async invoke() {\n    // Synchronization API\n    null\n    this.jwtService.verifySync(token, secretOrPublicKey, options);\n    this.jwtService.decodeSync(token, options);\n\n    // Asynchronous API\n    await this.jwtService.sign(payload, secretOrPrivateKey, options);\n    await this.jwtService.verify(token, secretOrPublicKey, options);\n    await this.jwtService.decode(token, options);\n  }\n}\n")),(0,a.kt)("p",null,"These APIs are all from the basic ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/auth0/node-jsonwebtoken"},"node-jsonwebtoken")," library. If you don't know, please read the original document."),(0,a.kt)("h2",{id:"middleware-example"},"Middleware example"),(0,a.kt)("p",null,"In general, jwt will also cooperate with middleware to complete authentication. The following is an example of custom jwt authentication middleware."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/jwt.middleware\n\nimport { Inject, Middleware } from '@midwayjs/decorator';\nimport { Context, NextFunction } from '@midwayjs/koa';\nimport { httpError } from '@midwayjs/core';\nimport { JwtService } from '@midwayjs/jwt';\n\n@Middleware()\nexport class JwtMiddleware {\n  @Inject()\n  jwtService: JwtService;\n\n  public static getName(): string {\n    return 'jwt';\n  }\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // Judge whether there is verification information\n      if (! ctx.headers['authorization']) {\n        throw new httpError.UnauthorizedError();\n      null\n      // Get verification information from header\n      const parts = ctx.get('authorization').trim().split(' ');\n\n      if (parts.length! = = 2) {\n        throw new httpError.UnauthorizedError();\n      }\n\n      const [scheme, token] = parts;\n\n      if (/^Bearer$/ I .test(scheme)) {\n        try {\n          // jwt.verify that token is valid.\n          await jwtService.verify(token, {\n            complete: true\n          });\n        } catch (error) {\n          // The token expires and generates a new token.\n          const newToken = getToken(user);\n          // Put the new token into the Authorization and return it to the front end.\n          ctx.set('Authorization', newToken);\n        }\n        await next();\n      null\n    };\n  }\n\n  // Configure route addresses that ignore authentication\n  public match(ctx: Context): boolean {\n    const ignore = ctx.path.indexOf('/api/admin/login')! = = -1;\n    return! ignore;\n  }\n}\n")),(0,a.kt)("p",null,"Then enable middleware at the portal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"null\n\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { IMidwayContainer, IMidwayApplication} from '@midwayjs/core';\nnull\n\n@Configuration({\n  imports: [\n    // ...\n    jwt\n  ],\n})\nexport class MainConfiguration {\n\n  null\n  app: IMidwayApplication;\n\n  async onReady(applicationContext: IMidwayContainer): Promise<void> {\n    // Add middleware\n    this.app.useMiddleware ([\n      // ...\n      JwtMiddleware\n    ]);\n  }\n}\n")))}m.isMDXComponent=!0}}]);