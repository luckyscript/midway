"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,y=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(y,r(r({ref:t},d),{},{components:n})):a.createElement(y,r({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={},r="Midway application migration",l={unversionedId:"serverless/migrate_midway",id:"serverless/migrate_midway",title:"Midway application migration",description:"Midway Serverless provides a general application migration scheme, which can publish the original application to the function platform without modifying the code as much as possible. with this solution, you can migrate the original midway application to the function platform for hosting as quickly and simply as possible, and enjoy the elastic bonus of the cloud native era.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/migrate_midway.md",sourceDirName:"serverless",slug:"/serverless/migrate_midway",permalink:"/en/docs/serverless/migrate_midway",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/migrate_midway.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",previous:{title:"Standard Application Migration Scheme",permalink:"/en/docs/serverless/app_deploy_serverless"},next:{title:"Static website hosting",permalink:"/en/docs/serverless/migrate_static"}},p={},s=[{value:"Restrictions",id:"restrictions",level:2},{value:"@midway/koa",id:"midwaykoa",level:2},{value:"@midway/express",id:"midwayexpress",level:2},{value:"@midwayjs/web",id:"midwayjsweb",level:2},{value:"Egg default configuration of migration scheme",id:"egg-default-configuration-of-migration-scheme",level:3},{value:"Deployment",id:"deployment",level:2},{value:"Default",id:"default",level:2},{value:"Modify the function name of the default deployment.",id:"modify-the-function-name-of-the-default-deployment",level:3},{value:"Aliyun",id:"aliyun",level:3},{value:"Tencent cloud",id:"tencent-cloud",level:3},{value:"Some restrictions",id:"some-restrictions",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"midway-application-migration"},"Midway application migration"),(0,o.kt)("p",null,"Midway Serverless provides a general application migration scheme, which can publish the original application to the function platform without modifying the code as much as possible. with this solution, you can migrate the original midway application to the function platform for hosting as quickly and simply as possible, and enjoy the elastic bonus of the cloud native era."),(0,o.kt)("h2",{id:"restrictions"},"Restrictions"),(0,o.kt)("p",null,"Only pure ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/express"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," projects (pure Http) can be migrated."),(0,o.kt)("h2",{id:"midwaykoa"},"@midway/koa"),(0,o.kt)("p",null,"The Serverless environment refers to the function environment such as Aliyun FC and Tencent Cloud. Midway can deploy existing Web projects as Serverless applications. Here, deploy to Alibaba Cloud Function Compute as an example."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"f.yml")," file to the root directory of your project.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c hello_koa tree\n.\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 f.yml                               # Midway Serverless deployment profile\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-midway-app ## the name of the application published to the cloud platform, generally refers to the application name\n\nprovider:\n    name: aliyun\n\ndeployType:\n  type: koa ## application type to be deployed\n  version: 3.0.0\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Code modification")),(0,o.kt)("p",null,"Rename ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," and return an app."),(0,o.kt)("p",null,"The modified code is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Get the framework\nconst WebFramework = require('@midwayjs/koa'). Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\nmodule.exports = async () => {\n  // Load the framework and execute\n  await Bootstrap.run();\n  // Get the dependency injection container\n  const container = Bootstrap.getApplicationContext();\n  // Get koa framework\n  const framework = container.get(WebFramework);\n  // Return app object\n  return framework.getApplication();\n};\n")),(0,o.kt)("p",null,"3, add the build hook at the time of release."),(0,o.kt)("p",null,"Add the following paragraph to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to automatically execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," when publishing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "midway-integration": {\n    "lifecycle": {\n      "before:package:cleanup": "npm run build"\n    }\n  },\n    "scripts": {\n    "deploy": "midway-bin deploy"\n  }\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"NPM run deploy"),". After Publishing, Alibaba Cloud outputs a temporarily available domain name and opens a browser to access it.")),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1600835297676-1753de7a-fb0d-46ca-98f0-944eba5b2f2b.png#height=193&id=XpZAN&margin=%5Bobject%20Object%5D&name=image.png&originHeight=193&originWidth=1219&originalType=binary&ratio=1&size=35152&status=done&style=none&width=1219",width:"1219"}),(0,o.kt)("p",null,"For more detailed release documents, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./serverless/deploy_aliyun_faq"},(0,o.kt)("strong",{parentName:"a"},"Serverless release FAQ")),"."),(0,o.kt)("h2",{id:"midwayexpress"},"@midway/express"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"f.yml")," file to the root directory of your project.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u279c hello_express tree\n.\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 f.yml                               # Midway Serverless deployment profile\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-midway-app ## the name of the application published to the cloud platform, generally refers to the application name\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: express ## the type of application deployed\n  version: 3.0.0\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Code modification")),(0,o.kt)("p",null,"Rename ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," and return an app."),(0,o.kt)("p",null,"The modified code is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Get the framework\nconst WebFramework = require('@midwayjs/express'). Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\nmodule.exports = async () => {\n  // Load the framework and execute\n  await Bootstrap.run();\n  // Get the dependency injection container\n  const container = Bootstrap.getApplicationContext();\n  // Get express framework\n  const framework = container.get(WebFramework);\n  // Return app object\n  return framework.getApplication();\n};\n")),(0,o.kt)("p",null,"3, add the build hook at the time of release."),(0,o.kt)("p",null,"Add the following paragraph to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to automatically execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," when publishing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "midway-integration": {\n    "lifecycle": {\n      "before:package:cleanup": "npm run build"\n    }\n  },\n    "scripts": {\n    "deploy": "midway-bin deploy"\n  }\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run deploy"),". After publishing, Alibaba Cloud outputs a temporarily available domain name and opens a browser to access it.")),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1600835297676-1753de7a-fb0d-46ca-98f0-944eba5b2f2b.png"}),(0,o.kt)("p",null,"For more detailed release documents, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./serverless/deploy_aliyun_faq"},(0,o.kt)("strong",{parentName:"a"},"Serverless release FAQ")),"."),(0,o.kt)("h2",{id:"midwayjsweb"},"@midwayjs/web"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"f.yml")," file to the root directory of the code. The simplest content is as follows.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-egg-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: the type of the application deployed by the egg ##\n  version: 3.0.0\n\npackage:\n  include:\n    -public ## If there is a static file directory, it will be automatically copied here.\n  exclude:\n    -package-lock.json ## Ignore package-lock.json files\n\ncustom:\n  customDomain:\n    domainName: auto ## automatically generates domain name\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Sometimes package-lock.json files will cause the deployment package to be too large (enter dev dependencies).")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"li"},"bootstrap.js")," of the code root directory to the following code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { Bootstrap } = require('@midwayjs/bootstrap');\nconst { MidwayFrameworkService } = require('@midwayjs/core');\nconst { join } = require('path');\n\nmodule.exports = async (options) => {\n  // Load the framework and execute\n  await Bootstrap\n    .configure({\n      appDir: __dirname\n      baseDir: join(__dirname, './dist')\n      ...options\n    })\n    .run();\n  const applicationContext = Bootstrap.getApplicationContext();\n  const frameworkService = applicationContext.get(MidwayFrameworkService);\n  // Return app object\n  return frameworkService.getMainApp();\n};\n\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In order to automatically perform compilation at the time of release, the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," is configured as follows.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "xxxxxx ",\n  "version": "xxxx ",\n  .....\n  "scripts": {\n        "deploy": "midway-bin deploy ",\n    ....\n    },\n  "midway-integration": {\n    "lifecycle": {\n      "before:package:cleanup": "npm run build"\n    }\n  },\n    "egg": {\n    "framework": "@midwayjs/web"\n  }\n}\n')),(0,o.kt)("p",null,"There are two main points here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"egg")," field is specified here to specify the upper-layer frame of a specific egg."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"midway-integration")," field is configured here to support the original compilation under the midway application system."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"add deploy script")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you use your own egg upper frame, the egg.framework here can be changed to your own package name.")),(0,o.kt)("h3",{id:"egg-default-configuration-of-migration-scheme"},"Egg default configuration of migration scheme"),(0,o.kt)("p",null,"In the current migration scheme, some default configurations are added for better operation in the function system. ",(0,o.kt)("strong",{parentName:"p"},"In general, you do not need to modify"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default\nconst os = require('os');\nexports.logger = {\n  dir: os.tmpdir()\n};\n\nexports.rundir = os.tmpdir();\n\nexports.static = {\n  buffer: true\n};\n")),(0,o.kt)("p",null,"Since the function environment disk is not writable, we adjusted the default log directories to temporary directories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// plugin\n\n'use strict';\n\nexports.i18n = false;\nexports.watcher = false;\nexports.development = false;\nexports.logrotator = false;\nexports.schedule = false;\nexports.static = false;\n")),(0,o.kt)("p",null,"Different from the default egg, the static plug-in is disabled by default. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/public")," directory is not available by default, the plug-in is created when it is started. An error is reported because the server disk is not writable."),(0,o.kt)("p",null,"If you need a static plug-in, ",(0,o.kt)("strong",{parentName:"p"},"open it manually")," and ",(0,o.kt)("strong",{parentName:"p"},"make sure that the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"app/public")," or the corresponding directory exists."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," directory is in the root directory, configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.include")," field in ",(0,o.kt)("inlineCode",{parentName:"p"},"f.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-egg-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType: the type of application deployed by egg ##\n\npackage:\n  include:\n    -public ## If there is a static file directory, it will be automatically copied here.\n  exclude:\n    -package-lock.json ## Ignore package-lock.json files\n")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," configuration Scripts script and dev dependency ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli"),", execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run deploy"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.36"\n    ...\n  },\n  "scripts": {\n    "deploy": "midway-bin deploy ",\n    ...\n  }\n}\n')),(0,o.kt)("p",null,"Or use a different npm package to accelerate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "scripts": {\n    "deploy": "midway-bin deploy --npm=cnpm ",\n    ...\n  }\n}\n')),(0,o.kt)("p",null,"You can also execute commands separately."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$npx midway-bin deploy ## deploy by npm\n$npx midway-bin deploy --npm=cnpm ## deploy by cnpm\n")),(0,o.kt)("h2",{id:"default"},"Default"),(0,o.kt)("h3",{id:"modify-the-function-name-of-the-default-deployment"},"Modify the function name of the default deployment."),(0,o.kt)("p",null,"You can use the name field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-egg-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: egg\n  Name: app_idx ## function name\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"aggregation fields do not take effect when using deployType.")),(0,o.kt)("h3",{id:"aliyun"},"Aliyun"),(0,o.kt)("p",null,"By default, it is published as an http trigger. If you need an API gateway, you can modify and configure the functions structure in the format of f.yml. At the same time, configure the route ",(0,o.kt)("inlineCode",{parentName:"p"},"/*")," at the API gateway to transfer to this function."),(0,o.kt)("h3",{id:"tencent-cloud"},"Tencent cloud"),(0,o.kt)("p",null,"By default, it is published as an API gateway trigger and the gateway route is automatically configured."),(0,o.kt)("h2",{id:"some-restrictions"},"Some restrictions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"egg-socketio, etc. Not supported"),(0,o.kt)("li",{parentName:"ul"},"It does not support the ability that the gateway cannot support such as file upload.")))}m.isMDXComponent=!0}}]);