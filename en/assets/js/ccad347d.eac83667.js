"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14030],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?o.createElement(f,r(r({ref:n},c),{},{components:t})):o.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const i={},r="Custom component",p={unversionedId:"component_development",id:"component_development",title:"Custom component",description:"A component (Component) is a reusable and multi-frame module package, which is generally used in several scenarios:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component_development.md",sourceDirName:".",slug:"/component_development",permalink:"/en/docs/component_development",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/component_development.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Extended context definition",permalink:"/en/docs/context_definition"},next:{title:"Custom decorator",permalink:"/en/docs/custom_decorator"}},s={},l=[{value:"Development component",id:"development-component",level:2},{value:"Boilerplate",id:"boilerplate",level:3},{value:"Component directory",id:"component-directory",level:3},{value:"Component Lifecycle",id:"component-lifecycle",level:3},{value:"Component logic code",id:"component-logic-code",level:3},{value:"Component configuration",id:"component-configuration",level:3},{value:"Component convention",id:"component-convention",level:3},{value:"Test components",id:"test-components",level:3},{value:"Depends on other components",id:"depends-on-other-components",level:3},{value:"Development components in applications",id:"development-components-in-applications",level:3},{value:"Use lerna",id:"use-lerna",level:4},{value:"Non-lerna",id:"non-lerna",level:4},{value:"Use components",id:"use-components",level:3},{value:"Component publishing",id:"component-publishing",level:3},{value:"Component example",id:"component-example",level:3},{value:"Development Framework (Framework)",id:"development-framework-framework",level:2},{value:"Expand existing Framework",id:"expand-existing-framework",level:3},{value:"Write Framework",id:"write-framework",level:3},{value:"Custom example",id:"custom-example",level:3}],c={toc:l},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-component"},"Custom component"),(0,a.kt)("p",null,"A component (Component) is a reusable and multi-frame module package, which is generally used in several scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Package the code called downstream, and package the three-party module to simplify the use, such as orm (database call),swagger (simplified use), etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Reusable business logic, such as abstract public Controller,Service, etc.")))),(0,a.kt)("p",null,"Components can be loaded locally or packaged together and published into an npm package. Components can be used in midway v3/Serverless. You can put reusable business codes or functional modules into components for maintenance. Almost all Midway general capabilities can be used in components, including but not limited to configuration, life cycle, controller, interceptor, etc."),(0,a.kt)("p",null,"When designing components, we should face all upper-level frame scenarios as much as possible, so we only rely on ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")," as much as possible."),(0,a.kt)("p",null,"Starting from v3, the framework (Framework) has also become part of the component, and the usage and component are unified."),(0,a.kt)("h2",{id:"development-component"},"Development component"),(0,a.kt)("h3",{id:"boilerplate"},"Boilerplate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# npm v6\n$ npm init midway --type=component-v3 my_custom_component\n\n# npm v7\n$ npm init midway -- --type=component-v3 my_custom_component\n")),(0,a.kt)("p",null,"or ",(0,a.kt)("inlineCode",{parentName:"p"},"npm init midway"),", select the ",(0,a.kt)("inlineCode",{parentName:"p"},"component-v3")," template."),(0,a.kt)("h3",{id:"component-directory"},"Component directory"),(0,a.kt)("p",null,'The structure of the component is the same as the recommended directory structure of midway. The directory structure of the component is not specifically specified and can be consistent with the application or function. Simply understood, a component is a "mini application".'),(0,a.kt)("p",null,"A recommended component directory structure is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.ts                                // Entry export file\n\u2502   \u251c\u2500\u2500 configuration.ts                // Component behavior configuration\n\u2502   \u2514\u2500\u2500 service                 // Logical Code\n\u2502       \u2514\u2500\u2500 bookService.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 index.d.ts                  //  component extension definition\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"For components, the only specification is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration")," attribute exported by the entry, which must be a Class with a ",(0,a.kt)("inlineCode",{parentName:"p"},"@Configuration")," decorator."),(0,a.kt)("p",null,"Generally speaking, our code is TypeScript standard directory structure, which is the same as Midway system."),(0,a.kt)("p",null,"At the same time, it is an ordinary Node.js package, which needs to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file as the entry to export the content"),(0,a.kt)("p",null,"Let's take a very simple example to demonstrate how to write a component."),(0,a.kt)("h3",{id:"component-lifecycle"},"Component Lifecycle"),(0,a.kt)("p",null,"Like the application, the component also uses ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," as the entry startup file (or the application is a large component)."),(0,a.kt)("p",null,"The code and application are exactly the same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\n\n@Configuration({\n  namespace: 'book'\n})\nexport class BookConfiguration {\n  async onReady() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"The only difference is that you need to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," as the namespace for the component."),(0,a.kt)("p",null,"The code for each component is a separate scope so that even if a class with the same name is exported, it will not conflict with other components."),(0,a.kt)("p",null,"It is the same as the ",(0,a.kt)("a",{parentName:"p",href:"lifecycle"},"lifecycle extension")," capability that is common to the entire Midway."),(0,a.kt)("h3",{id:"component-logic-code"},"Component logic code"),(0,a.kt)("p",null,"Same as the application, write the class export, and the dependent injection container is responsible for management and loading."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/service/book.service.ts\nimport { Provide } from '@midwayjs/decorator';\n\n@Provide()\nexport class BookService {\n  async getBookById() {\n    return {\n      data: 'hello world',\n    }\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A component does not rely on a clear upper-level framework. In order to reuse in different scenarios, it only depends on the common ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator"))),(0,a.kt)("h3",{id:"component-configuration"},"Component configuration"),(0,a.kt)("p",null,"The configuration is the same as that of the application. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"env_config"},"Configure multiple environments"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as DefaultConfig from './config/config.default';\nimport * as LocalConfig from './config/config.local';\n\n@Configuration({\n  namespace: 'book',\n  importConfigs: [\n    {\n      default: DefaultConfig,\n      local: LocalConfig\n    }\n  ]\n})\nexport class BookConfiguration {\n  async onReady() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"There is an important feature in v3. After the component is loaded, the ",(0,a.kt)("inlineCode",{parentName:"p"},"MidwayConfig")," definition will include the definition of the component configuration."),(0,a.kt)("p",null,"To do this, we need to write the definition of the configuration independently."),(0,a.kt)("p",null,"Add the configuration definition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.d.ts")," file in the root directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Because the default type export position is modified, additional types under dist need to be exported\nexport * from './dist/index';\n\n// Standard extension statement\ndeclare module '@midwayjs/core/dist/interface '{\n\n  // Merge the configuration into the MidwayConfig\n  interface MidwayConfig {\n    book ?: {\n      // ...\n    };\n  }\n}\n\n")),(0,a.kt)("p",null,"At the same time, the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," of the component is also modified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "****",\n  "main": "dist/index.js",\n  "typings": "index.d.ts",          // The type export file here uses the project root directory\'s\n  // ...\n  "files": [\n    "dist/**/*.js",\n    "dist/**/*.d.ts",\n    "index.d.ts"                                // This file needs to be brought with you when you publish it.\n  ],\n}\n')),(0,a.kt)("h3",{id:"component-convention"},"Component convention"),(0,a.kt)("p",null,"The components and the application itself are slightly different, mainly in the following aspects."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The code of the component needs to export a ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration")," attribute, which must be a Class with a ",(0,a.kt)("inlineCode",{parentName:"li"},"@Configuration")," decorator to configure the component's own capabilities"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"All  ",(0,a.kt)("strong",{parentName:"li"},"explicitly exported codes")," will be loaded by the dependent injection container. Simply put, all classes ",(0,a.kt)("strong",{parentName:"li"},"decorated by decorators")," need to be exported, including controllers, services, middleware, etc.")))),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\nexport { BookConfiguration as Configuration } from './configuration';\nexport * from './service/book.service';\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In this way, only the ",(0,a.kt)("inlineCode",{parentName:"p"},"service/book.service.ts")," file in the project will be scanned and loaded by the dependent injection container.")),(0,a.kt)("p",null,"And specify the main path in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'"main": "dist/index"\n')),(0,a.kt)("p",null,"In this way, the component can be loaded by the upper scene dependency."),(0,a.kt)("h3",{id:"test-components"},"Test components"),(0,a.kt)("p",null,"Testing a single service can be executed by starting an empty business and specifying the current component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createLightApp } from '@midwayjs/mock';\nimport * as custom from '../src';\n\ndescribe('/test/index.test.ts', () => {\n  it('test component', async () => {\n    const app = await createLightApp ('', {\n      imports: [\n        custom\n      ]\n    });\n    const bookService = await app.getApplicationContext().getAsync(custom.BookService);\n    expect(await bookService.getBookById()).toEqual('hello world');\n  });\n});\n\n")),(0,a.kt)("p",null,"If the component is part of the Http protocol process and strongly relies on context and must rely on an Http framework, then use a complete project example and use ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," to test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, createHttpRequest } from '@midwayjs/mock';\nimport * as custom from '../src';\n\ndescribe('/test/index.test.ts', () => {\n  it('test component', async () => {\n    // In the sample project, you need to rely on @midwayjs/koa or other peer-to-peer frameworks.\n    const app = await createApp(join(__dirname, 'fixtures/base-app'), {\n      imports: [\n        custom\n      ]\n    });\n\n    const result = await createHttpRequest(app).get('/');\n    // ...\n\n  });\n});\n\n\n")),(0,a.kt)("h3",{id:"depends-on-other-components"},"Depends on other components"),(0,a.kt)("p",null,"If a component depends on a class in another component and is the same as the application, it needs to be declared at the entrance, and the framework will load and handle the duplication in the order of the module."),(0,a.kt)("p",null,"If you explicitly rely on a class in a component, it must be a strong dependency of that component."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as axios from '@midwayjs/axios';\n\n@Configuration({\n  namespace: 'book',\n  imports: [axios]\n})\nexport class BookConfiguration {\n  async onReady() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"There is also a case of weak dependencies, which do not need to be explicitly declared, but require additional judgment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { IMidwayContainer } from '@midwayjs/core';\n\n@Configuration({\n  namespace: 'book',\n})\nexport class BookConfiguration {\n  async onReady(container: IMidwayContainer) {\n    // ...\n    if (container.hasNamespace('axios')) {\n      // Execute only when axios component is loaded\n    }\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"Increase dependency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  "dependencies": {\n    "@midwayjs/axios": "xxxx"\n  }\n}\n')),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.d.ts")," directory of the root directory, add the component definitions that are dependent on the explicit import."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Explicitly import dependent components\nimport '@midwayjs/axios';\nexport * from './dist/index';\n\n// ...\n\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the main application does not explicitly rely on axios, the code execution is normal, but the typescript axios definition will not be scanned, resulting in no axios definition when writing the configuration. the above code can solve this problem.")),(0,a.kt)("h3",{id:"development-components-in-applications"},"Development components in applications"),(0,a.kt)("p",null,"It is recommended to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"lerna")," and enable lerna's hoist mode to write components. If you want to develop a component in a non-lerna scenario, make sure that the component is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory. Otherwise, the component may fail to be loaded."),(0,a.kt)("h4",{id:"use-lerna"},"Use lerna"),(0,a.kt)("p",null,"Development using lerna is relatively simple, and the specific directory structure is similar to the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 packages/\n\u2502    \u251c\u2500\u2500 component-A\n\u2502    \u2502   \u2514\u2500\u2500 package.json\n\u2502    \u251c\u2500\u2500 component-B\n\u2502    \u2502   \u2514\u2500\u2500 package.json\n\u2502    \u251c\u2500\u2500 component-C\n\u2502    \u2502   \u2514\u2500\u2500 package.json\n\u2502    \u2514\u2500\u2500 web\n\u2502        \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 lerna.json\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("h4",{id:"non-lerna"},"Non-lerna"),(0,a.kt)("p",null,"The following is a common component development method. The sample structure is to develop two components at the same time during application code development. Of course, you can also customize the directory structure you like."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src                                                                                 // source directory\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 book                                                // book component code\n\u2502   \u2502   \u2502    \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502    \u2502   \u251c\u2500\u2500 service\n\u2502   \u2502   \u2502    \u2502   \u2502   \u2514\u2500\u2500 bookService.ts\n\u2502   \u2502   \u2502    \u2502   \u251c\u2500\u2500 configuration.ts\n\u2502   \u2502   \u2502    \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u2502   \u2502    \u2514\u2500\u2500 package.json\n\u2502   \u2502   \u2502\n\u2502   \u2502   \u2514\u2500\u2500 school\n\u2502   \u2502        \u251c\u2500\u2500 src\n\u2502   \u2502        \u2502   \u251c\u2500\u2500 service                        // school component code\n\u2502   \u2502        \u2502   \u2502    \u2514\u2500\u2500 schoolService.ts\n\u2502   \u2502        \u2502   \u2514\u2500\u2500 configuration.ts\n\u2502   \u2502        \u2514\u2500\u2500 package.json\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500 configuration.ts             // Application Behavior Profile\n\u2502   \u2514\u2500\u2500 controller             // Application Routing Directory\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"Component behavior configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/components/book/src/bookConfiguration.ts\nimport { Configuration } from '@midwayjs/decorator';\n\n@Configuration()\nexport class BookConfiguration {}\n")),(0,a.kt)("p",null,"In order for components to export, we need to export ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration")," attributes at the entry of the component ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/book/src/index.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/components/book/src/index.ts\nexport { BookConfiguration as Configuration } from './bookConfiguration/src';\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Note that the place quoted here is "./xxxx/src", because generally the main field in our package.json points to dist/index. If you want the code not to be modified, then the main field should point to src/index, and it will be published in Remember to modify it back to dist.'),(0,a.kt)("p",{parentName:"admonition"},"The directory introduced by the component is pointed to src so that the save takes effect automatically (restart).")),(0,a.kt)("p",null,"In addition, scanning conflicts may occur in the new version. The dependency injection conflict checking function in ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," can be turned off."),(0,a.kt)("h3",{id:"use-components"},"Use components"),(0,a.kt)("p",null,"In any midway series application, this component can be introduced in the same way."),(0,a.kt)("p",null,"First, add dependencies to the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  "dependencies": {\n    "midway-component-book": "*"\n  }\n}\n')),(0,a.kt)("p",null,"This component is then introduced in the application (function)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts of application or function\nimport { Configuration } from '@midwayjs/decorator';\nimport * as book from 'midway-component-book';\n\n@Configuration({\n  imports: [book]\n})\nexport class ContainerLifeCycle {}\n")),(0,a.kt)("p",null,"At this point, our preparations have been completed and we will start to use them."),(0,a.kt)("p",null,"Class injection that directly introduces components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject } from '@midwayjs/decorator';\nimport { BookService } from 'midway-component-book';\n\n@Provide()\nexport class Library {\n\n  @Inject();\n  bookService: BookService;\n\n}\n")),(0,a.kt)("p",null,"For the rest, if the component has specific capabilities, please refer to the documentation of the component itself."),(0,a.kt)("h3",{id:"component-publishing"},"Component publishing"),(0,a.kt)("p",null,"A component is an ordinary Node.js package that can be compiled and published to npm for distribution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"## Compile and publish the corresponding component\n$ npm run build && npm publish\n")),(0,a.kt)("h3",{id:"component-example"},"Component example"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/czy88840616/midway-test-component"},"Here")," is an example of a component. It has been published to npm and can be tried to directly introduce it into the project to start execution."),(0,a.kt)("h2",{id:"development-framework-framework"},"Development Framework (Framework)"),(0,a.kt)("p",null,"In v3, components can contain a Framework to provide different services. Using the life cycle, we can extend the provision of gRPC,Http and other protocols."),(0,a.kt)("p",null,"The Framework here is just a special business logic file in the component."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.ts                                // Entry export file\n\u2502   \u251c\u2500\u2500 configuration.ts                // Component behavior configuration\n\u2502   \u2514\u2500\u2500 framework.ts            // Framework code\n\u2502\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 index.d.ts                  // Component extension definition\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("h3",{id:"expand-existing-framework"},"Expand existing Framework"),(0,a.kt)("p",null,"As mentioned above, the Framework is part of the component and also follows the component specification, which can be injected and extended."),(0,a.kt)("p",null,"Let's take the extension ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," as an example."),(0,a.kt)("p",null,"First, create a custom component, which is the same as a common application. Because ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," needs to be extended, we need to rely on ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," in the component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\n\n@Configuration({\n  namespace: 'myKoa'\n  imports: [koa]\n})\nexport class MyKoaConfiguration {\n  async onReady() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"Then, we can inject the framework exported by ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," for extension."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\n\n@Configuration({\n  namespace: 'myKoa'\n  imports: [koa]\n})\nexport class MyKoaConfiguration {\n  @Inject()\n  framework: koa.Framework;\n\n  async onReady() {\n    // Add middleware, app.useMiddleware in koa actually proxy the framework method\n    this.framework.useMiddleware(/* ... */);\n\n    // Add filter, app.useFilter in koa actually proxy the framework method\n    this.framework.useFilter(/* ... */);\n\n    // koa's own expansion capabilities, such as expansion context\n    const app = this.framework.getApplication();\n    Object.defineProperty(app.context, 'user', {\n      get() {\n        // ...\n        return 'xxx';\n      },\n      enumerable: true\n    });\n    // ...\n  }\n\n  async onServerReady() {\n    const server = this.framework.getServer();\n    // server.xxxx\n  }\n}\n")),(0,a.kt)("p",null,"This is a method of scaling based on existing Framework."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the context is extended in the component, refer to the ",(0,a.kt)("a",{parentName:"li",href:"./context_definition"},"extended context definition"),"."),(0,a.kt)("li",{parentName:"ul"},"For more information about how to configure a widget, see ","[Configure a widget]","(# Component Configuration).")),(0,a.kt)("p",null,"After the component is released, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/my-koa"),", the business can directly use your component without introducing ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\n// Your own components\nimport * as myKoa from '@midwayjs/my-koa';\n\n@Configuration({\n  imports: [myKoa],\n})\nexport class MyConfiguration {\n  async onReady() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"If you want to fully define your own components, such as different protocols, you need to fully customize the Framework."),(0,a.kt)("h3",{id:"write-framework"},"Write Framework"),(0,a.kt)("p",null,"The frameworks all follow the ",(0,a.kt)("inlineCode",{parentName:"p"},"IMidwayFramewok")," interface definitions and the following conventions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each framework has a separate start-stop process to be customized."),(0,a.kt)("li",{parentName:"ul"},"Each framework needs to define its own independent ",(0,a.kt)("inlineCode",{parentName:"li"},"Application"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Context")),(0,a.kt)("li",{parentName:"ul"},"Each framework can have its own independent middleware capabilities")),(0,a.kt)("p",null,"In order to simplify development, Midway provides a basic ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseFramework")," class for inheritance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/decorator';\nimport { BaseFramework, IConfigurationOptions, IMidwayApplication, IMidwayContext } from '@midwayjs/core';\n\n// Define Context\nexport interface Context extends IMidwayContext {\n  // ...\n}\n\n// Define Application\nexport interface Application extends IMidwayApplication<Context> {\n  // ...\n}\n\n// Frame configuration\nexport interface IMidwayCustomConfigurationOptions extends IConfigurationOptions {\n    // ...\n}\n\n// Implement a custom framework and inherit the basic framework\n@Framework()\nexport class MidwayCustomFramework extends BaseFramework<Application, Context, IMidwayCustomConfigurationOptions> {\n\n  // Process initialization configuration\n  configure() {\n    // ...\n  }\n\n  // app initialization\n  async applicationInitialize() {\n    // ...\n  }\n\n  // Framework startup, such as listen\n  async run() {\n    // ...\n  }\n}\n")),(0,a.kt)("h3",{id:"custom-example"},"Custom example"),(0,a.kt)("p",null,"Next, we will take the implementation of a basic HTTP service framework as an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseFramework, IConfigurationOptions, IMidwayApplication, IMidwayContext } from '@midwayjs/core';\nimport * as http from 'http';\n\n// Define the definitions to be used by some upper-level businesses.\nexport interface Context extends IMidwayContext {}\n\nexport interface Application extends IMidwayApplication<Context> {}\n\nexport interface IMidwayCustomConfigurationOptions extends IConfigurationOptions {\n  port: number;\n}\n\n// Implement a custom framework that inherits the base framework\nexport class MidwayCustomHTTPFramework extends BaseFramework<Application, Context, IMidwayCustomConfigurationOptions> {\n\n  configure(): IMidwayCustomConfigurationOptions {\n    return this.configService.getConfiguration('customKey');\n  }\n\n  async applicationInitialize(options: Partial<IMidwayBootstrapOptions>) {\n    // Create an app instance\n    this.app = http.createServer((req, res) => {\n      // Create a request context with logger, request scope, etc.\n      const ctx = this.app.createAnonymousContext();\n      // Get the injected service from the request context\n      ctx.requestContext\n        .getAsync('xxxx')\n        .then((ins) => {\n          // Call service\n          return ins.xxx();\n        })\n        .then(() => {\n          // End of request\n          res.end();\n        });\n    });\n\n    // Some methods needed to bind midway framework to app, such as getConfig, getLogger, etc.\n    this.defineApplicationProperties();\n  }\n\n  async run() {\n    // Startup parameters, only the HTTP port that is started is defined here.\n    if (this.configurationOptions.port) {\n      new Promise<void>((resolve) => {\n        this.app.listen(this.configurationOptions.port, () => {\n          resolve();\n        });\n      });\n    }\n  }\n}\n")),(0,a.kt)("p",null,"We define a ",(0,a.kt)("inlineCode",{parentName:"p"},"MidwayCustomHTTPFramework")," class, inherit the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseFramework"),", and implement both ",(0,a.kt)("inlineCode",{parentName:"p"},"applicationInitialize")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("p",null,"In this way, the most basic framework is completed."),(0,a.kt)("p",null,"Finally, we just need to export the Framework as agreed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export {\n  Application\n  Context\n  MidwayCustomHTTPFramework as Framework\n  IMidwayCustomConfigurationOptions\n} from './custom';\n")),(0,a.kt)("p",null,"The above is an example of the simplest framework. In fact, all Midway frameworks are written in this way."))}d.isMDXComponent=!0}}]);