"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58883],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86898:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},i="MQTT",p={unversionedId:"extensions/mqtt",id:"extensions/mqtt",title:"MQTT",description:"MQTT\u662f\u7528\u4e8e\u7269\u8054\u7f51 (IoT) \u7684OASIS\u6807\u51c6\u6d88\u606f\u4f20\u9012\u534f\u8bae\u3002\u5b83\u88ab\u8bbe\u8ba1\u4e3a\u975e\u5e38\u8f7b\u91cf\u7ea7\u7684\u53d1\u5e03/\u8ba2\u9605\u6d88\u606f\u4f20\u8f93\uff0c\u975e\u5e38\u9002\u5408\u4ee5\u8f83\u5c0f\u7684\u4ee3\u7801\u5360\u7528\u7a7a\u95f4\u548c\u6700\u5c0f\u7684\u7f51\u7edc\u5e26\u5bbd\u8fde\u63a5\u8fdc\u7a0b\u8bbe\u5907\u3002MQTT\u76ee\u524d\u5e7f\u6cdb\u5e94\u7528\u4e8e\u6c7d\u8f66\u3001\u5236\u9020\u3001\u7535\u4fe1\u3001\u77f3\u6cb9\u548c\u5929\u7136\u6c14\u7b49\u884c\u4e1a\u3002",source:"@site/docs/extensions/mqtt.md",sourceDirName:"extensions",slug:"/extensions/mqtt",permalink:"/docs/extensions/mqtt",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/mqtt.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Kafka",permalink:"/docs/extensions/kafka"},next:{title:"\u94fe\u8def\u8ffd\u8e2a",permalink:"/docs/extensions/otel"}},o={},s=[{value:"\u7248\u672c\u8981\u6c42",id:"\u7248\u672c\u8981\u6c42",level:2},{value:"\u524d\u7f6e\u4f9d\u8d56",id:"\u524d\u7f6e\u4f9d\u8d56",level:2},{value:"\u5b89\u88c5\u7ec4\u4ef6",id:"\u5b89\u88c5\u7ec4\u4ef6",level:2},{value:"\u542f\u7528\u7ec4\u4ef6",id:"\u542f\u7528\u7ec4\u4ef6",level:2},{value:"\u8ba2\u9605\u670d\u52a1",id:"\u8ba2\u9605\u670d\u52a1",level:2},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",level:3},{value:"\u8ba2\u9605\u5b9e\u73b0",id:"\u8ba2\u9605\u5b9e\u73b0",level:3},{value:"\u6d88\u606f\u53d1\u5e03",id:"\u6d88\u606f\u53d1\u5e03",level:2},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e-1",level:3},{value:"\u4f7f\u7528\u53d1\u5e03\u8005",id:"\u4f7f\u7528\u53d1\u5e03\u8005",level:3},{value:"\u7ec4\u4ef6\u65e5\u5fd7",id:"\u7ec4\u4ef6\u65e5\u5fd7",level:2}],u={toc:s},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mqtt"},"MQTT"),(0,a.kt)("p",null,"MQTT\u662f\u7528\u4e8e\u7269\u8054\u7f51 (IoT) \u7684OASIS\u6807\u51c6\u6d88\u606f\u4f20\u9012\u534f\u8bae\u3002\u5b83\u88ab\u8bbe\u8ba1\u4e3a\u975e\u5e38\u8f7b\u91cf\u7ea7\u7684\u53d1\u5e03/\u8ba2\u9605\u6d88\u606f\u4f20\u8f93\uff0c\u975e\u5e38\u9002\u5408\u4ee5\u8f83\u5c0f\u7684\u4ee3\u7801\u5360\u7528\u7a7a\u95f4\u548c\u6700\u5c0f\u7684\u7f51\u7edc\u5e26\u5bbd\u8fde\u63a5\u8fdc\u7a0b\u8bbe\u5907\u3002MQTT\u76ee\u524d\u5e7f\u6cdb\u5e94\u7528\u4e8e\u6c7d\u8f66\u3001\u5236\u9020\u3001\u7535\u4fe1\u3001\u77f3\u6cb9\u548c\u5929\u7136\u6c14\u7b49\u884c\u4e1a\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u53d1\u5e03\u6d88\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u4e3b\u6846\u67b6"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u65e5\u5fd7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("h2",{id:"\u7248\u672c\u8981\u6c42"},"\u7248\u672c\u8981\u6c42"),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mqttjs/MQTT.js"},"mqtt")," \u5e93\u672c\u8eab\u7684\u8981\u6c42\uff0c\u6240\u9700\u8981\u7684\u7248\u672c\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"Node.js >= 16")),(0,a.kt)("h2",{id:"\u524d\u7f6e\u4f9d\u8d56"},"\u524d\u7f6e\u4f9d\u8d56"),(0,a.kt)("p",null,"\u7531\u4e8e MQTT \u9700\u8981 Broker \u4f5c\u4e3a\u4e2d\u8f6c\u4f20\u8f93\uff0c\u4f60\u9700\u8981\u81ea\u884c\u90e8\u7f72 MQTT Broker \u670d\u52a1\uff0c\u672c\u6587\u6863\u4e0d\u63d0\u4f9b MQTT \u670d\u52a1\u672c\u8eab\u7684\u90e8\u7f72\u6307\u5bfc\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6"},"\u5b89\u88c5\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5b89\u88c5 mikro \u7ec4\u4ef6\uff0c\u63d0\u4f9b\u63a5\u5165 mikro-orm \u7684\u80fd\u529b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/mqtt@3 --save\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/mqtt": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,a.kt)("h2",{id:"\u542f\u7528\u7ec4\u4ef6"},"\u542f\u7528\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u4e2d\u5f15\u5165\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nimport * as mqtt from '@midwayjs/mqtt';\n\n@Configuration({\n  imports: [\n    // ...other components\n    mqtt,\n  ],\n})\nexport class MainConfiguration {}\n")),(0,a.kt)("p",null,"\u7531\u4e8e MQTT \u5206\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u8ba2\u9605\u8005\uff08subscriber\uff09")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u53d1\u5e03\u8005\uff08publisher\uff09"),"\u4e24\u90e8\u5206\uff0c\u4e24\u4e2a\u53ef\u4ee5\u72ec\u7acb\u4f7f\u7528\uff0c\u6211\u4eec\u5c06\u5206\u522b\u4ecb\u7ecd\u3002"),(0,a.kt)("h2",{id:"\u8ba2\u9605\u670d\u52a1"},"\u8ba2\u9605\u670d\u52a1"),(0,a.kt)("h3",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"sub")," \u5b57\u6bb5\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"@MqttSubscriber")," \u88c5\u9970\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u8ba2\u9605\u8005\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u4e0b\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"sub1")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"sub2")," \u5c31\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u8ba2\u9605\u8005\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\n\nexport default {\n  mqtt: {\n    sub: {\n      sub1: {\n        // ...\n      },\n      sub2: {\n        // ...\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u8ba2\u9605\u8005\u914d\u7f6e\u9700\u8981\u51e0\u4e2a\u5b57\u6bb5\uff0c\u8ba2\u9605\u7684\u5730\u5740\u548c\u8ba2\u9605\u7684 Topic\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\n\nexport default {\n  mqtt: {\n    sub: {\n      sub1: {\n        connectOptions: {\n          host: 'test.mosquitto.org',\n          port: 1883,\n        },\n        subscribeOptions: {\n          topicObject: 'test',\n        },\n      },\n      sub2: {\n        // ...\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"sub1")," \u8ba2\u9605\u8005\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"connectOptions")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribeOptions")," \uff0c\u5206\u522b\u4ee3\u8868\u8fde\u63a5\u914d\u7f6e\u548c\u8ba2\u9605\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u8ba2\u9605\u5b9e\u73b0"},"\u8ba2\u9605\u5b9e\u73b0"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u76ee\u5f55\u4e2d\u63d0\u4f9b\u4e00\u4e2a\u6807\u51c6\u7684\u8ba2\u9605\u5668\u5b9e\u73b0\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/consumer/sub1.subscriber.ts"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/consumer/sub1.subscriber.ts\n\nimport { ILogger, Inject } from '@midwayjs/core';\nimport { Context, IMqttSubscriber, MqttSubscriber } from '@midwayjs/mqtt';\n\n@MqttSubscriber('test')\nexport class Sub1Subscriber implements IMqttSubscriber {\n\n  @Inject()\n  ctx: Context;\n\n  async subscribe() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@MqttSubscriber")," \u88c5\u9970\u5668\u58f0\u660e\u4e86\u4e00\u4e2a\u8ba2\u9605\u7c7b\u5b9e\u73b0\uff0c\u5b83\u7684\u53c2\u6570\u4e3a\u8ba2\u9605\u8005\u7684\u540d\u5b57\uff0c\u6bd4\u5982\u6211\u4eec\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"sub1"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IMqttSubscriber")," \u63a5\u53e3\u7ea6\u5b9a\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," \u65b9\u6cd5\uff0c\u6bcf\u5f53\u63a5\u6536\u5230\u65b0\u7684\u6d88\u606f\u65f6\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5c31\u4f1a\u88ab\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u548c\u5176\u4ed6\u6d88\u606f\u8ba2\u9605\u673a\u5236\u4e00\u6837\uff0c\u6d88\u606f\u672c\u8eab\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," \u5b57\u6bb5\u6765\u4f20\u9012\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nexport class Sub1Subscriber implements IMqttSubscriber {\n  @Inject()\n  ctx: Context;\n\n  async subscribe() {\n    const payload = this.ctx.message.toString();\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Context")," \u5b57\u6bb5\u5305\u62ec\u51e0\u4e2a mqtt \u5c5e\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ctx.topic"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605 Topic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ctx.message"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ctx.packet"),(0,a.kt)("td",{parentName:"tr",align:null},"IPublishPacket\uff08\u6765\u81ea mqtt \u5e93\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"publish \u7684\u5305\u4fe1\u606f")))),(0,a.kt)("h2",{id:"\u6d88\u606f\u53d1\u5e03"},"\u6d88\u606f\u53d1\u5e03"),(0,a.kt)("h3",{id:"\u57fa\u7840\u914d\u7f6e-1"},"\u57fa\u7840\u914d\u7f6e"),(0,a.kt)("p",null,"\u6d88\u606f\u53d1\u5e03\u4e5f\u9700\u8981\u521b\u5efa\u5b9e\u4f8b\uff0c\u914d\u7f6e\u672c\u8eab\u4f7f\u7528\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"/docs/service_factory"},"\u670d\u52a1\u5de5\u5382")," \u7684\u8bbe\u8ba1\u6a21\u5f0f\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u591a\u5b9e\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\n\nexport default {\n  mqtt: {\n    pub: {\n      clients: {\n        default: {\n          host: 'test.mosquitto.org',\n          port: 1883,\n        },\n        pub2: {\n          // ...\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u914d\u7f6e\u521b\u5efa\u4e86\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"pub2")," \u7684\u4e24\u4e2a\u5b9e\u4f8b\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u53d1\u5e03\u8005"},"\u4f7f\u7528\u53d1\u5e03\u8005"),(0,a.kt)("p",null,"\u5982\u679c\u5b9e\u4f8b\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u6d88\u606f\u53d1\u5e03\u7c7b\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/service/user.service.ts\nimport { Provide, Inject } from '@midwayjs/core';\nimport { DefaultMqttProducer } from '@midwayjs/mqtt';\n\n@Provide()\nexport class UserService {\n  \n  @Inject()\n  producer: DefaultMqttProducer;\n  \n  async invoke() {\n    // \u540c\u6b65\u53d1\u5e03\u6d88\u606f\n    this.producer.publish('test', 'hello world');\n    \n    // \u5f02\u6b65\u53d1\u5e03\n    await this.producer.publishAsync('test', 'hello world');\n    \n    // \u589e\u52a0\u914d\u7f6e\n    await this.producer.publishAsync('test', 'hello world', {\n      qos: 2\n    });\n  }\n}\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684\u5de5\u5382\u7c7b ",(0,a.kt)("inlineCode",{parentName:"p"},"MqttProducerFactory")," \u6ce8\u5165\u4e0d\u540c\u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/service/user.service.ts\nimport { Provide, Inject } from '@midwayjs/core';\nimport { MqttProducerFactory, DefaultMqttProducer } from '@midwayjs/mqtt';\n\n@Provide()\nexport class UserService {\n  \n  @InjectClient(MqttProducerFactory, 'pub2')\n  producer: DefaultMqttProducer;\n  \n  async invoke() {\n    // ...\n  }\n}\n")),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u65e5\u5fd7"},"\u7ec4\u4ef6\u65e5\u5fd7"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u6709\u7740\u81ea\u5df1\u7684\u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4f1a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.logger")," \u8bb0\u5f55\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"midway-mqtt.log")," \u4e2d\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5355\u72ec\u914d\u7f6e\u8fd9\u4e2a logger \u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  midwayLogger: {\n    // ...\n    mqttLogger: {\n      fileLogName: 'midway-mqtt.log',\n    },\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65e5\u5fd7\u7684\u8f93\u51fa\u683c\u5f0f\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5355\u72ec\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  mqtt: {\n    // ...\n    contextLoggerFormat: info => {\n      const { jobId, from } = info.ctx;\n      return `${info.timestamp} ${info.LEVEL} ${info.pid} ${info.message}`;\n    },\n  }\n}\n")))}m.isMDXComponent=!0}}]);