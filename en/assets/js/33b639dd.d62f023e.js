"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74155],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={},i="Use components",c={unversionedId:"midway_component",id:"midway_component",title:"Use components",description:"Components are Midway's extension mechanism. We will develop reusable business code, or logical and abstract common capabilities into components, so that these codes can be reused in all Midway scenarios.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/midway_component.md",sourceDirName:".",slug:"/midway_component",permalink:"/en/docs/midway_component",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/midway_component.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Guards",permalink:"/en/docs/guard"},next:{title:"Start-up and deployment",permalink:"/en/docs/deployment"}},l={},p=[{value:"Enable components",id:"enable-components",level:2},{value:"Enable components for different environments",id:"enable-components-for-different-environments",level:2},{value:"Development component",id:"development-component",level:2}],s={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-components"},"Use components"),(0,r.kt)("p",null,"Components are Midway's extension mechanism. We will develop reusable business code, or logical and abstract common capabilities into components, so that these codes can be reused in all Midway scenarios."),(0,r.kt)("h2",{id:"enable-components"},"Enable components"),(0,r.kt)("p",null,"Components are generally reused in the form of npm packages. Each component is a package of code that can be ",(0,r.kt)("inlineCode",{parentName:"p"},"required")," directly. Let's take the ",(0,r.kt)("inlineCode",{parentName:"p"},"@midawyjs/validate")," component as an example."),(0,r.kt)("p",null,"First, add dependencies to the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  "dependencies": {\n    "@midwayjs/validate": "^3.0.0"\n  }\n}\n')),(0,r.kt)("p",null,"We need to enable this component in the code. Midway's component loading capability is designed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts of application or function\nimport { Configuration } from '@midwayjs/decorator';\nimport * as validate from '@midwayjs/validate';\n\n@Configuration({\n  imports: [validate]\n})\nexport class ContainerLifeCycle {}\n")),(0,r.kt)("h2",{id:"enable-components-for-different-environments"},"Enable components for different environments"),(0,r.kt)("p",null,"Sometimes, we need to use components in special environments, such as when developing locally.  ",(0,r.kt)("inlineCode",{parentName:"p"},"imports")," attributes can be passed into an array of objects, and we can configure the environment enabled by the component in the object."),(0,r.kt)("p",null,"For example, the commonly used ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," component can be enabled only in the local environment for security purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts of application or function\nimport { Configuration } from '@midwayjs/decorator';\nimport * as info from '@midwayjs/info';\n\n@Configuration({\n  imports: [\n    {\n      component: info\n      enabledEnvironment: ['local']\n    },\n  ],\n})\nexport class ContainerLifeCycle {}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"component")," is used to specify a component object, which must contain a ",(0,r.kt)("inlineCode",{parentName:"li"},"Configuration")," exported attribute"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabledEnvironment")," the array of environments enabled by the component")),(0,r.kt)("h2",{id:"development-component"},"Development component"),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"component_development"},"Component development"),"."))}d.isMDXComponent=!0}}]);