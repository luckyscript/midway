"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="HTTP proxy",p={unversionedId:"extensions/http-proxy",id:"extensions/http-proxy",title:"HTTP proxy",description:"The HTTP request proxy component is applicable to multiple frameworks such as @midwayjs/faas, @midwayjs/web, @midwayjs/koa, and @midwayjs/express. It supports multiple request methods such as GET and POST.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/http-proxy.md",sourceDirName:"extensions",slug:"/extensions/http-proxy",permalink:"/en/docs/extensions/http-proxy",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/http-proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Cross-domain",permalink:"/en/docs/extensions/cross_domain"},next:{title:"Captcha",permalink:"/en/docs/extensions/captcha"}},s={},l=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Enable components",id:"enable-components",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example: Configuring Agents Using host",id:"example-configuring-agents-using-host",level:2},{value:"Example: Configuring Agents Using target",id:"example-configuring-agents-using-target",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-proxy"},"HTTP proxy"),(0,a.kt)("p",null,"The HTTP request proxy component is applicable to multiple frameworks such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/web"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/express"),". It supports multiple request methods such as GET and POST."),(0,a.kt)("p",null,"Related information:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Web support"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udcac")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udcac Some function computing platforms do not support streaming request responses. Please refer to the corresponding platform capabilities.")),(0,a.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/http-proxy@3 --save\n")),(0,a.kt)("p",null,"Or reinstall the following dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/http-proxy": "^3.0.0"\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,a.kt)("h2",{id:"enable-components"},"Enable components"),(0,a.kt)("p",null,"Introduce components in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nimport * as proxy from '@midwayjs/http-proxy';\n\n@Configuration({\n  imports: [\n    // ...other components\n    proxy,\n  ],\n})\nexport class MainConfiguration {}\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The proxy configuration is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// proxy configuration type\nexport interface HttpProxyConfig {\n  // Match the URL regular expression to be represented\n  match: RegExp;\n  // Replace the host of the matching link and proxy the request to this address.\n  host?: string;\n  // Capture group processing proxy addresses through regular expressions\n  target?: string;\n  // The timeout time of the forwarding request. The default time is 0. No timeout time is set.\n  proxyTimeout?: number;\n  // Ignore the fields in the header forwarded by the proxy request\n  ignoreHeaders ?: {\n    [key: string]: boolean;\n  };\n}\n")),(0,a.kt)("p",null,"Agents support a single agent and multiple agents."),(0,a.kt)("p",null,"Single proxy configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\nexport default {\n  httpProxy: {\n    match: /\\/tfs \\//,\n    host: 'https://gw.alicdn.com',\n  },\n};\n")),(0,a.kt)("p",null,"Multiple agent configurations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\n// Proxy configuration type\nexport default {\n  default: {\n    // Some multiplexed values for each policy will be merged with the following policies.\n  },\n  strategy: {\n    gw: {\n      // https://gw.alicdn.com/tfs/TB1.1EzoBBh1e4jSZFhXXcC9VXa-48-48.png\n      match: /\\/tfs \\//,\n      host: 'https://gw.alicdn.com',\n    },\n    g: {\n      // https://g.alicdn.com/mtb/lib-mtop/2.6.1/mtop.js\n      match: /\\/bdimg\\/(.*)$ /,\n      target: 'https://sm.bdimg.com/$1',\n    },\n    httpBin: {\n      // https://httpbin.org/\n      match: /\\/httpbin\\/(.*)$ /,\n      target: 'https://httpbin.org/$1',\n    },\n  },\n};\n")),(0,a.kt)("h2",{id:"example-configuring-agents-using-host"},"Example: Configuring Agents Using host"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  httpProxy: {\n    match: /\\/tfs \\//,\n    host: 'https://gw.alicdn.com',\n  },\n};\n")),(0,a.kt)("p",null,"If the request is ",(0,a.kt)("inlineCode",{parentName:"p"},"https:// yourdomain.com/tfs/test.png"),", the regular expression configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," field is successfully matched, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"https:// yourdomain.com")," part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," in the original request path is replaced with the configured ",(0,a.kt)("inlineCode",{parentName:"p"},"https:// gw.alicdn.com"),", thus initiating a proxy request to ",(0,a.kt)("inlineCode",{parentName:"p"},"https:// gw.alicdn.com/tfs/test.png")," and return the response to the user requesting your site."),(0,a.kt)("h2",{id:"example-configuring-agents-using-target"},"Example: Configuring Agents Using target"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  httpProxy: {\n    match: /\\/httpbin\\/(.*)$ /,\n    target: 'https://httpbin.org/$1',\n  },\n};\n")),(0,a.kt)("p",null,"When requesting that your site path is: ",(0,a.kt)("inlineCode",{parentName:"p"},"https:// yourdomain.com/httpbin/get? When name is set to midway"),", the regular expression configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," field is matched, and the regular capture group has the result ",(0,a.kt)("inlineCode",{parentName:"p"},"['get?name = midway']"),", replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"$1")," part of the original request path with the ",(0,a.kt)("inlineCode",{parentName:"p"},"get? of the first data (index: 0) in the capture group? name = midway")," to initiate a proxy request to ",(0,a.kt)("inlineCode",{parentName:"p"},"https:// httpbin.org/get? Name = midway")," and return the response to the user requesting your site."))}m.isMDXComponent=!0}}]);