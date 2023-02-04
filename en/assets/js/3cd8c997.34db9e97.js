"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09"},i=void 0,o={unversionedId:"serverless/tencent_trigger_timer",id:"version-2.0.0/serverless/tencent_trigger_timer",title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09",description:"\u5b9a\u65f6\u4efb\u52a1\u89e6\u53d1\u5668\u7528\u4e8e\u5b9a\u65f6\u6267\u884c\u4e00\u4e2a\u51fd\u6570\u3002\u817e\u8baf\u4e91 Timer \u89e6\u53d1\u5668\u76ee\u524d\u53ea\u652f\u6301 cron \u683c\u5f0f\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/tencent_trigger_timer.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_timer",permalink:"/en/docs/2.0.0/serverless/tencent_trigger_timer",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/tencent_trigger_timer.md",tags:[],version:"2.0.0",frontMatter:{title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09"},sidebar:"Serverless",previous:{title:"API \u7f51\u5173\uff08HTTP\uff09",permalink:"/en/docs/2.0.0/serverless/tencent_trigger_apigw"},next:{title:"COS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09",permalink:"/en/docs/2.0.0/serverless/tencent_trigger_cos"}},p={},s=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"Timer \u914d\u7f6e",id:"timer-\u914d\u7f6e",level:2},{value:"\u4e8b\u4ef6\u7ed3\u6784",id:"\u4e8b\u4ef6\u7ed3\u6784",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b9a\u65f6\u4efb\u52a1\u89e6\u53d1\u5668\u7528\u4e8e\u5b9a\u65f6\u6267\u884c\u4e00\u4e2a\u51fd\u6570\u3002\u817e\u8baf\u4e91 Timer \u89e6\u53d1\u5668\u76ee\u524d\u53ea\u652f\u6301 cron \u683c\u5f0f\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6e29\u99a8\u63d0\u9192\uff0c\u6d4b\u8bd5\u51fd\u6570\u540e\u8bf7\u53ca\u65f6\u5173\u95ed\u89e6\u53d1\u5668\u81ea\u52a8\u6267\u884c\uff0c\u907f\u514d\u8d85\u989d\u6263\u8d39\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context, SCF } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.TIMER, {\n    type: 'cron',\n    value: '*/60 * * * * * *', // \u6bcf 60s \u89e6\u53d1\n  })\n  async handleTimerEvent(event: SCF.TimerEvent) {\n    this.ctx.logger.info(event);\n    return 'hello world';\n  }\n}\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u817e\u8baf\u4e91\u7684\u5b9a\u65f6\u4e3a\u5168 Cron\uff0c\u5177\u4f53 Cron \u683c\u5f0f\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/583/9708"},"\u5f00\u53d1\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u5e38\u7528\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*/5 * * * * * * \u8868\u793a\u6bcf5\u79d2\u89e6\u53d1\u4e00\u6b21\n0 0 2 1 * * * \u8868\u793a\u5728\u6bcf\u6708\u76841\u65e5\u7684\u51cc\u66682\u70b9\u89e6\u53d1\n0 15 10 * * MON-FRI * \u8868\u793a\u5728\u5468\u4e00\u5230\u5468\u4e94\u6bcf\u5929\u4e0a\u534810\uff1a15\u89e6\u53d1\n0 0 10,14,16 * * * * \u8868\u793a\u5728\u6bcf\u5929\u4e0a\u534810\u70b9\uff0c\u4e0b\u53482\u70b9\uff0c4\u70b9\u89e6\u53d1\n0 */30 9-17 * * * * \u8868\u793a\u5728\u6bcf\u5929\u4e0a\u53489\u70b9\u5230\u4e0b\u53485\u70b9\u6bcf\u534a\u5c0f\u65f6\u89e6\u53d1\n0 0 12 * * WED * \u8868\u793a\u5728\u6bcf\u4e2a\u661f\u671f\u4e09\u4e2d\u534812\u70b9\u89e6\u53d1\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u90e8\u7f72\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"timer-\u914d\u7f6e"},"Timer \u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"cron"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff0c\u89e6\u53d1\u7c7b\u578b\uff0c\u4ee3\u8868 cron \u8868\u8fbe\u5f0f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff0ccron \u8868\u8fbe\u5f0f\u6216\u8005 every \u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payload"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u4e00\u4e2a\u56fa\u5b9a\u4f20\u9012\u7684\u503c\uff0c\u5f88\u5c11\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"cron \u8868\u8fbe\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessTrigger(ServerlessTriggerType.TIMER, {\n  type: 'cron',\n  value: '0 0 4 * * *', // \u6bcf\u59294:00\u89e6\u53d1\n})\n")),(0,a.kt)("h2",{id:"\u4e8b\u4ef6\u7ed3\u6784"},"\u4e8b\u4ef6\u7ed3\u6784"),(0,a.kt)("p",null,"Timer \u6d88\u606f\u8fd4\u56de\u7684\u7ed3\u6784\u5982\u4e0b\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"SCF.TimerEvent")," \u7c7b\u578b\u4e2d\u6709\u63cf\u8ff0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  Message: '',\n  Time: new Date().toJSON(),\n  TriggerName: 'test',\n  Type: 'Timer',\n}\n")),(0,a.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u7c7b\u578b\u7684\u51fd\u6570\u672c\u5730\u65e0\u6cd5\u4f7f\u7528 dev \u5f00\u53d1\uff0c\u53ea\u80fd\u901a\u8fc7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," \u8fdb\u884c\u6d4b\u8bd5\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u548c HTTP \u6d4b\u8bd5\u4e0d\u540c\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance")," \u83b7\u53d6\u6574\u4e2a\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4ece\u800c\u8c03\u7528\u5230\u7279\u5b9a\u65b9\u6cd5\u6765\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createTimerEvent")," \u65b9\u6cd5\u5feb\u901f\u521b\u5efa\u5e73\u53f0\u4f20\u5165\u7684\u7ed3\u6784\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloTencentService } from '../src/function/hello_tencent';\nimport { createTimerEvent } from '@midwayjs/serverless-scf-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n    instance = await app.getServerlessInstance<HelloTencentService>(HelloTencentService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from timer trigger', async () => {\n    expect(await instance.handleTimerEvent(createTimerEvent())).toEqual('hello world');\n  });\n});\n")),(0,a.kt)("h2",{id:""}))}u.isMDXComponent=!0}}]);