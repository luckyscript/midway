"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(n),d=o,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(k,p(p({ref:t},m),{},{components:n})):r.createElement(k,p({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},p="\u94fe\u8def\u8ffd\u8e2a",l={unversionedId:"extensions/otel",id:"extensions/otel",title:"\u94fe\u8def\u8ffd\u8e2a",description:"Midway \u91c7\u7528\u793e\u533a\u6700\u65b0\u7684 open-telemetry \u65b9\u6848\uff0c\u5176\u524d\u8eab\u662f\u77e5\u540d\u7684 OpenTracing \u548c OpenCensus \u89c4\u8303\uff0c\u73b0\u9636\u6bb5\u4e5f\u662f CNCF \u7684\u5b75\u5316\u9879\u76ee\uff0c\u793e\u533a\u8bb8\u591a\u77e5\u540d\u7684\u5927\u516c\u53f8\u5982 Amazon\uff0cDynatrace\uff0cMicrosoft\uff0cGoogle\uff0cDatadog\uff0cSplunk \u7b49\u90fd\u6709\u4f7f\u7528\u3002",source:"@site/docs/extensions/otel.md",sourceDirName:"extensions",slug:"/extensions/otel",permalink:"/docs/extensions/otel",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/otel.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Kafka",permalink:"/docs/extensions/kafka"},next:{title:"pm2",permalink:"/docs/extensions/pm2"}},s={},i=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u5b89\u88c5\u57fa\u7840\u4f9d\u8d56",id:"\u5b89\u88c5\u57fa\u7840\u4f9d\u8d56",level:2},{value:"\u542f\u7528 open-telemetry",id:"\u542f\u7528-open-telemetry",level:2},{value:"\u4f7f\u7528 bootstrap \u90e8\u7f72",id:"\u4f7f\u7528-bootstrap-\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 egg-scripts \u90e8\u7f72",id:"\u4f7f\u7528-egg-scripts-\u90e8\u7f72",level:3},{value:"\u5f00\u53d1\u8c03\u8bd5\u5165\u53e3",id:"\u5f00\u53d1\u8c03\u8bd5\u5165\u53e3",level:3},{value:"\u5e38\u7528\u6982\u5ff5",id:"\u5e38\u7528\u6982\u5ff5",level:2},{value:"API",id:"api",level:3},{value:"SDK",id:"sdk",level:3},{value:"Instrumentations",id:"instrumentations",level:3},{value:"Exporter",id:"exporter",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6dfb\u52a0\u4e09\u65b9 instrumentation",id:"\u6dfb\u52a0\u4e09\u65b9-instrumentation",level:3},{value:"\u6dfb\u52a0 Jaeger Exporter",id:"\u6dfb\u52a0-jaeger-exporter",level:3},{value:"\u963f\u91cc\u4e91 ARMS",id:"\u963f\u91cc\u4e91-arms",level:3},{value:"\u88c5\u9970\u5668\u652f\u6301",id:"\u88c5\u9970\u5668\u652f\u6301",level:2}],m={toc:i},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u94fe\u8def\u8ffd\u8e2a"},"\u94fe\u8def\u8ffd\u8e2a"),(0,o.kt)("p",null,"Midway \u91c7\u7528\u793e\u533a\u6700\u65b0\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u65b9\u6848\uff0c\u5176\u524d\u8eab\u662f\u77e5\u540d\u7684 OpenTracing \u548c OpenCensus \u89c4\u8303\uff0c\u73b0\u9636\u6bb5\u4e5f\u662f CNCF \u7684\u5b75\u5316\u9879\u76ee\uff0c\u793e\u533a\u8bb8\u591a\u77e5\u540d\u7684\u5927\u516c\u53f8\u5982 Amazon\uff0cDynatrace\uff0cMicrosoft\uff0cGoogle\uff0cDatadog\uff0cSplunk \u7b49\u90fd\u6709\u4f7f\u7528\u3002"),(0,o.kt)("p",null," ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u63d0\u4f9b\u4e86\u901a\u7528\u7684 Node.js \u63a5\u5165\u65b9\u6848\uff0c\u4ee5\u4f9b\u5e94\u5546\u65e0\u5173\u7684\u65b9\u5f0f\u5c06\u6570\u636e\u63a5\u6536\uff0c\u5904\u7406\uff0c\u5bfc\u51fa\uff0c\u652f\u6301\u5411\u4e00\u4e2a\u6216\u591a\u4e2a\u5f00\u6e90\u6216\u8005\u5546\u4e1a\u5316\u7684\u91c7\u96c6\u7aef\u53d1\u9001\u53ef\u89c2\u6d4b\u7684\u6570\u636e\uff08\u6bd4\u5982\u963f\u91cc\u4e91 SLS\uff0cJaeger\uff0cPrometheus\uff0cFluent Bit \u7b49\uff09\u3002"),(0,o.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u63a5\u5165 ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u7684 Node.js \u65b9\u6848\uff0c\u5e76\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u4f7f\u7528 API\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u7684 Tracing \u90e8\u5206\u5f53\u524d Node.js SDK \u5df2\u7ecf Release 1.0.0\uff0c\u53ef\u4ee5\u5728\u751f\u4ea7\u4f7f\u7528\uff0cMetrics \u90e8\u5206\u672a\u6b63\u5f0f\u53d1\u5e03\uff0c\u6211\u4eec\u4f9d\u65e7\u5728\u8ddf\u8fdb\uff08\u7f16\u7801\uff09\u4e2d\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u57fa\u4e8e Node.js \u7684 Async_Hooks \u7684\u7a33\u5b9a API \u5b9e\u73b0\uff0c\u7ecf\u8fc7\u6211\u4eec\u7684\u6d4b\u8bd5\uff0c\u5728\u6700\u65b0\u7684 Node.js v14/v16 \u6027\u80fd\u5f71\u54cd\u5df2\u7ecf\u5f88\u5c0f\uff0c\u53ef\u4ee5\u5728\u751f\u4ea7\u4f7f\u7528\uff0c\u5728 v12 \u60c5\u51b5\u4e0b\u867d\u7136\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f46\u662f\u6027\u80fd\u4f9d\u65e7\u6709\u4e0d\u5c0f\u7684\u635f\u5931\uff0c\u8bf7\u5c3d\u53ef\u80fd\u5728 Node.js >= v14 \u7684\u7248\u672c\u4e0b\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5\u57fa\u7840\u4f9d\u8d56"},"\u5b89\u88c5\u57fa\u7840\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Node.js \u7684 api \u62bd\u8c61\n$ npm install --save @opentelemetry/api\n\n# Node.js \u7684 api \u5b9e\u73b0\n$ npm install --save @opentelemetry/sdk-node\n\n# \u5e38\u7528 Node.js \u6a21\u5757\u7684\u57cb\u70b9\u5b9e\u73b0\n$ npm install --save @opentelemetry/auto-instrumentations-node\n\n# jaeger \u8f93\u51fa\u5668\n$ npm install --save @opentelemetry/exporter-jaeger\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u7684\u5305\u5747\u4e3a  ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u7684\u5b98\u65b9\u5305\u3002"),(0,o.kt)("h2",{id:"\u542f\u7528-open-telemetry"},"\u542f\u7528 open-telemetry"),(0,o.kt)("p",null," ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u7684\u6a21\u5757\u8bf7\u5c3d\u53ef\u80fd\u52a0\u5728\u4ee3\u7801\u7684\u6700\u5f00\u59cb\uff08\u6bd4\u6846\u67b6\u8fd8\u8981\u65e9\uff09\uff0c\u6240\u4ee5\u5728\u4e0d\u540c\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u6709\u4e0d\u540c\u7684\u6dfb\u52a0\u65b9\u5f0f\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528-bootstrap-\u90e8\u7f72"},"\u4f7f\u7528 bootstrap \u90e8\u7f72"),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," \u90e8\u7f72\uff0c\u4f60\u53ef\u4ee5\u52a0\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," \u7684\u6700\u9876\u90e8\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const process = require('process');\nconst opentelemetry = require('@opentelemetry/sdk-node');\nconst { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-base');\nconst { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');\nconst { Resource } = require('@opentelemetry/resources');\nconst { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions')\nconst { JaegerExporter } = require('@opentelemetry/exporter-jaeger')\n\n// Midway \u542f\u52a8\u6587\u4ef6\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\n// https://www.npmjs.com/package/@opentelemetry/exporter-jaeger\nconst tracerAgentHost = process.env['TRACER_AGENT_HOST'] || '127.0.0.1'\nconst jaegerExporter = new JaegerExporter({\n  host: tracerAgentHost,\n});\n\n// \u521d\u59cb\u5316\u4e00\u4e2a open-telemetry \u7684 SDK\nconst sdk = new opentelemetry.NodeSDK({\n  // \u8bbe\u7f6e\u8ffd\u8e2a\u670d\u52a1\u540d\n  resource: new Resource({\n    [SemanticResourceAttributes.SERVICE_NAME]: 'my-app',\n  }),\n  // \u914d\u7f6e\u5f53\u524d\u7684\u5bfc\u51fa\u65b9\u5f0f\uff0c\u6bd4\u5982\u8fd9\u91cc\u914d\u7f6e\u4e86\u4e00\u4e2a\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u7684\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u5176\u4ed6\u7684 Exporter\uff0c\u6bd4\u5982 Jaeger\n  traceExporter: new ConsoleSpanExporter(),\n  // \u914d\u7f6e\u5f53\u524d\u5bfc\u51fa\u4e3a jaeger\n  // traceExporter: jaegerExporter,\n\n  // \u8fd9\u91cc\u914d\u7f6e\u4e86\u9ed8\u8ba4\u81ea\u5e26\u7684\u4e00\u4e9b\u76d1\u63a7\u6a21\u5757\uff0c\u6bd4\u5982 http \u6a21\u5757\u7b49\n  // \u82e5\u521d\u59cb\u5316\u65f6\u95f4\u5f88\u957f\uff0c\u53ef\u6ce8\u9500\u6b64\u884c\uff0c\u5355\u72ec\u914d\u7f6e\u9700\u8981\u7684 instrumentation \u6761\u76ee\n  instrumentations: [getNodeAutoInstrumentations()]\n});\n\n// \u521d\u59cb\u5316 SDK\uff0c\u6210\u529f\u542f\u52a8\u4e4b\u540e\uff0c\u518d\u542f\u52a8 Midway \u6846\u67b6\nsdk.start()\n  .then(() => {\n    return Bootstrap\n      .configure(/**/)\n      .run();\n  });\n\n// \u5728\u8fdb\u7a0b\u5173\u95ed\u65f6\uff0c\u540c\u65f6\u5173\u95ed\u6570\u636e\u91c7\u96c6\nprocess.on('SIGTERM', () => {\n  sdk.shutdown()\n    .then(() => console.log('Tracing terminated'))\n    .catch((error) => console.log('Error terminating tracing', error))\n    .finally(() => process.exit(0));\n});\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528-egg-scripts-\u90e8\u7f72"},"\u4f7f\u7528 egg-scripts \u90e8\u7f72"),(0,o.kt)("p",null,"egg-scripts \u7531\u4e8e\u672a\u63d0\u4f9b\u5165\u53e3\u90e8\u7f72\uff0c\u5fc5\u987b\u91c7\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--require")," \u7684\u5f62\u5f0f\u52a0\u8f7d\u989d\u5916\u7684\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u6839\u76ee\u5f55\u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"otel.js")," \uff08\u6ce8\u610f\u662f js \u6587\u4ef6\uff09\uff0c\u5185\u5bb9\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const process = require('process');\nconst opentelemetry = require('@opentelemetry/sdk-node');\nconst { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-base');\nconst { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');\n\n// \u521d\u59cb\u5316\u4e00\u4e2a open-telemetry \u7684 SDK\nconst sdk = new opentelemetry.NodeSDK({\n  // \u914d\u7f6e\u5f53\u524d\u7684\u5bfc\u51fa\u65b9\u5f0f\uff0c\u6bd4\u5982\u8fd9\u91cc\u914d\u7f6e\u4e86\u4e00\u4e2a\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u7684\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u5176\u4ed6\u7684 Exporter\uff0c\u6bd4\u5982 Jaeger\n  traceExporter: new ConsoleSpanExporter(),\n  // \u8fd9\u91cc\u914d\u7f6e\u4e86\u9ed8\u8ba4\u81ea\u5e26\u7684\u4e00\u4e9b\u76d1\u63a7\u6a21\u5757\uff0c\u6bd4\u5982 http \u6a21\u5757\u7b49\n  instrumentations: [getNodeAutoInstrumentations()]\n});\n\n// \u521d\u59cb\u5316 SDK\nsdk.start()\n  .then(() => console.log('Tracing initialized'))\n  .catch((error) => console.log('Error initializing tracing', error));\n\n// \u5728\u8fdb\u7a0b\u5173\u95ed\u65f6\uff0c\u540c\u65f6\u5173\u95ed\u6570\u636e\u91c7\u96c6\nprocess.on('SIGTERM', () => {\n  sdk.shutdown()\n    .then(() => console.log('Tracing terminated'))\n    .catch((error) => console.log('Error terminating tracing', error))\n    .finally(() => process.exit(0));\n});\n")),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u542f\u52a8\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "scripts": {\n    "start": "egg-scripts start --daemon --title=**** --framework=@midwayjs/web --require=./otel.js",\n  },\n}\n')),(0,o.kt)("h3",{id:"\u5f00\u53d1\u8c03\u8bd5\u5165\u53e3"},"\u5f00\u53d1\u8c03\u8bd5\u5165\u53e3"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"midway-bin")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--entryFile")," \u53c2\u6570\u6307\u5b9a\u5165\u53e3\u6587\u4ef6"),(0,o.kt)("p",null,"\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "cross-env NODE_ENV=local midway-bin dev --ts --entryFile=bootstrap.js"\n  }\n}\n')),(0,o.kt)("h2",{id:"\u5e38\u7528\u6982\u5ff5"},"\u5e38\u7528\u6982\u5ff5"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u62bd\u8c61\u5c01\u88c5\uff0c\u5c06\u76d1\u63a7\u7684\u6574\u4e2a\u8fc7\u7a0b\u5305\u88c5\u4e3a\u51e0\u4e2a\u6b65\u9aa4\uff0c\u6bcf\u4e2a\u6b65\u9aa4\u90fd\u53ef\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u5176\u4e5f\u6709\u4e00\u4e9b\u7528\u6237\u4e0d\u592a\u7406\u89e3\u7684\u672f\u8bed\uff0c\u5728\u4e0b\u9762\u505a\u4e00\u4e9b\u89e3\u91ca\u3002"),(0,o.kt)("p",null,"\u5b8c\u6574\u7684\u82f1\u6587\u6982\u5ff5\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/concepts/"},"Concepts"),"\u3002"),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("p",null,"\u7528\u4e8e\u751f\u6210\u548c\u5173\u8054 Tracing\u3001Metrics \u548c Logs \u8bb0\u5f55\u6570\u636e\u7684\u6570\u636e\u7c7b\u578b\u548c\u64cd\u4f5c\u7684\u4e00\u7ec4 API \u62bd\u8c61\uff0c\u5177\u4f53\u8868\u73b0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"@opentelemetry/api")," \u8fd9\u4e2a\u5305\uff0c\u91cc\u9762\u662f\u4e00\u4e9b\u63a5\u53e3\u548c\u7a7a\u5b9e\u73b0\u3002"),(0,o.kt)("h3",{id:"sdk"},"SDK"),(0,o.kt)("p",null,"API \u7684\u7279\u5b9a\u8bed\u8a00\u5b9e\u73b0\uff0c\u6bd4\u5982 Node.js \u7684\u5b9e\u73b0\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"@opentelemetry/sdk-node"),"\uff09\uff0c\u5176\u4ed6\u76d1\u63a7\u5e73\u53f0\u7684\u91c7\u96c6  SDK \u5b9e\u73b0\u7b49\u7b49\u3002"),(0,o.kt)("h3",{id:"instrumentations"},"Instrumentations"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"open-telemetry")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u89c1\u5e93\u7684 shim \u4ee3\u7801\uff0c\u4f7f\u7528 hooks \u6216\u8005 monkey-patching \u7684\u65b9\u6cd5\u6765\u62e6\u622a\u65b9\u6cd5\uff0c\u81ea\u52a8\u5728\u7279\u5b9a\u65b9\u6cd5\u8c03\u7528\u65f6\u4fdd\u5b58\u94fe\u8def\u6570\u636e\uff0c\u652f\u6301 http\uff0cgRPC \uff0c redis\uff0cmysql \u7b49\u6a21\u5757\uff0c\u7528\u6237\u76f4\u63a5\u914d\u7f6e\u5373\u53ef\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u4e0a\u9762\u793a\u4f8b\u5f15\u5165\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"@opentelemetry/auto-instrumentations-node")," \u5c31\u662f\u4e00\u4e2a\u5df2\u7ecf\u9ed8\u8ba4\u5c01\u88c5\u597d\u5e38\u7528\u5e93\u7684 instrumentations \u96c6\u5408\u5305\uff0c\u91cc\u9762\u5305\u62ec\u4e86\u5927\u90e8\u5206\u4f1a\u7528\u5230\u7684\u5e93\uff0c\u5177\u4f53\u7684\u4f9d\u8d56\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-js-contrib/blob/main/metapackages/auto-instrumentations-node/package.json"},"Github"),"\u3002"),(0,o.kt)("h3",{id:"exporter"},"Exporter"),(0,o.kt)("p",null,"\u5c06\u63a5\u6536\u5230\u7684\u94fe\u8def\u6570\u636e\u53d1\u9001\u5230\u7279\u5b9a\u7aef\u7684\u5b9e\u73b0\uff0c\u6bd4\u5982  Jaeger\uff0czipkin \u7b49\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u4e09\u65b9-instrumentation"},"\u6dfb\u52a0\u4e09\u65b9 instrumentation"),(0,o.kt)("p",null,"\u5728 SDK \u521d\u59cb\u5316\u65f6\uff0c\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"instrumentations ")," \u6570\u7ec4\u4e2d\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { RedisInstrumentation } = require('@opentelemetry/instrumentation-redis');\n// ...\n\n// \u521d\u59cb\u5316\u4e00\u4e2a open-telemetry \u7684 SDK\nconst sdk = new opentelemetry.NodeSDK({\n  // ...\n\n  // \u8fd9\u91cc\u4ec5\u662f\u6dfb\u52a0\u7684\u793a\u4f8b\uff0c\u5982\u679c\u4f7f\u7528\u4e86 auto-instrumentations-node\uff0c\u5df2\u7ecf\u5305\u542b\u4e86\u4e0b\u9762\u7684 instrumentation\n  instrumentations: [\n    new RedisInstrumentation(),\n  ]\n});\n")),(0,o.kt)("h3",{id:"\u6dfb\u52a0-jaeger-exporter"},"\u6dfb\u52a0 Jaeger Exporter"),(0,o.kt)("p",null,"\u8fd9\u91cc\u4ee5 Jaeger Exporter \u4f5c\u4e3a\u793a\u4f8b\uff0c\u5176\u4ed6 Exporter \u7c7b\u4f3c\u3002"),(0,o.kt)("p",null,"\u5148\u6dfb\u52a0\u4f9d\u8d56\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save @opentelemetry/exporter-jaeger @opentelemetry/propagator-jaeger\n")),(0,o.kt)("p",null,"\u5728 SDK \u4e2d\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');\nconst { JaegerPropagator } = require('@opentelemetry/propagator-jaeger');\n// ...\n\nconst exporter = new JaegerExporter({\n  tags: [], // optional\n  // You can use the default UDPSender\n  host: 'localhost', // optional\n  port: 6832, // optional\n  // OR you can use the HTTPSender as follows\n  // endpoint: 'http://localhost:14268/api/traces',\n  maxPacketSize: 65000 // optional\n});\n\n// \u521d\u59cb\u5316\u4e00\u4e2a open-telemetry \u7684 SDK\nconst sdk = new opentelemetry.NodeSDK({\n  traceExporter: exporter,\n  textMapPropagator: new JaegerPropagator()\n  // ...\n});\n")),(0,o.kt)("p",null,"\u5177\u4f53\u53c2\u6570\u8bf7\u53c2\u8003\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-js/blob/main/packages/opentelemetry-exporter-jaeger/README.md"},"opentelemetry-exporter-jaeger")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-js/blob/main/packages/opentelemetry-propagator-jaeger/README.md"},"opentelemetry-propagator-jaeger"))),(0,o.kt)("h3",{id:"\u963f\u91cc\u4e91-arms"},"\u963f\u91cc\u4e91 ARMS"),(0,o.kt)("p",null,"\u963f\u91cc\u4e91\u5e94\u7528\u5b9e\u65f6\u76d1\u63a7\u670d\u52a1\uff08",(0,o.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/arms/"},"ARMS"),"\uff09\u5df2\u7ecf\u652f\u6301\u4e86 open-telemetry \u683c\u5f0f\u7684\u6307\u6807\uff0c\u540c\u65f6\u63d0\u4f9b\u4e00\u4e2a sdk \u8fdb\u884c\u63a5\u5165\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"opentelemetry-arms"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# arms sdk\n$ npm install --save opentelemetry-arms\n")),(0,o.kt)("p",null,"\u7136\u540e\u5728\u542f\u52a8\u65f6\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u53c2\u6570\u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," \u53c2\u6570\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ SERVICE_NAME=nodejs-opentelemetry-express AUTHENTICATION=****  ENDPOINT=grpc://**** node  -r opentelemetry-arms bootstrap.js\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"1\u3001\u8fd9\u79cd\u65b9\u5f0f\u63a5\u5165\uff0c\u65e0\u9700\u5728",(0,o.kt)("inlineCode",{parentName:"li"}," bootstrap.js")," \u4e2d\u6dfb\u52a0\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},"2\u3001\u9ed8\u8ba4 sdk \u4ec5\u63d0\u4f9b\u4e86 http/express/koa \u6a21\u5757\u7684\u94fe\u8def\u652f\u6301\uff0c\u672a\u5305\u542b\u5176\u4ed6 instrumentations\uff0c\u5982\u6709\u9700\u6c42\uff0c\u53ef\u4ee5\u62f7\u8d1d\u6e90\u7801\u81f3 ",(0,o.kt)("inlineCode",{parentName:"li"},"bootstrap.js")," \u4e2d\u81ea\u5b9a\u4e49\u3002"))),(0,o.kt)("h2",{id:"\u88c5\u9970\u5668\u652f\u6301"},"\u88c5\u9970\u5668\u652f\u6301"),(0,o.kt)("p",null,"Midway \u9488\u5bf9\u7528\u6237\u4fa7\u7684\u9700\u6c42\uff0c\u6dfb\u52a0\u4e00\u4e2a\u88c5\u9970\u5668\u7528\u4e8e\u589e\u52a0\u94fe\u8def\u8282\u70b9\u3002"),(0,o.kt)("p",null,"\u5148\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/otel@3 --save\n")),(0,o.kt)("p",null,"\u542f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"otel")," \u7ec4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as otel from '@midwayjs/otel';\n\n@Configuration({\n  imports: [\n    // ...\n    otel\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,o.kt)("p",null,"Otel \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e2a @Trace \u88c5\u9970\u5668\uff0c\u53ef\u4ee5\u6dfb\u52a0\u5728\u65b9\u6cd5\u4e0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserService {\n\n  @Trace('user.get')\n  async getUser() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"\u8be5\u88c5\u9970\u5668\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u8282\u70b9\u540d\u5b57\uff0c\u8fd9\u6837\u94fe\u8def\u4f1a\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e2a\u8be5\u65b9\u6cd5\u7684\u94fe\u8def\u8282\u70b9\uff0c\u5e76\u8bb0\u5f55\u6267\u884c\u7684\u65f6\u95f4\uff0c\u65b9\u6cd5\u6267\u884c\u6210\u529f\u6216\u8005\u5931\u8d25\u3002"))}u.isMDXComponent=!0}}]);