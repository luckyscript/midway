"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Alinode",l={unversionedId:"extensions/alinode",id:"extensions/alinode",title:"Alinode",description:"Preparation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/alinode.md",sourceDirName:"extensions",slug:"/extensions/alinode",permalink:"/en/docs/extensions/alinode",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/alinode.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"cfork",permalink:"/en/docs/extensions/cfork"},next:{title:"Prometheus",permalink:"/en/docs/extensions/prometheus"}},s={},p=[{value:"Preparation",id:"preparation",level:2},{value:"create service",id:"create-service",level:2},{value:"Install monitoring dependencies",id:"install-monitoring-dependencies",level:2},{value:"start node service",id:"start-node-service",level:2},{value:"Docker container approach",id:"docker-container-approach",level:2},{value:"other",id:"other",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alinode"},"Alinode"),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"The application that needs to be accessed is to be deployed in an independent service acquisition cloud environment and can access Internet services."),(0,a.kt)("h2",{id:"create-service"},"create service"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"first step")),(0,a.kt)("p",null,"Log in to Alibaba Cloud and click to activate the service of ",(0,a.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/nodejs"},"Alibaba Cloud's Node.js Performance Platform"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Second step")),(0,a.kt)("p",null,"Create a new app, get the App ID and App Secret."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617267785895-dd0fb702-91c7-4b25-9c64-8a9358f2d254.png#align=left&display=inline&height=351&margin=%5Bobject% 20Object%5D&name=image.png&originHeight=702&originWidth=1548&size=106487&status=done&style=none&width=774",width:"774"}),(0,a.kt)("h2",{id:"install-monitoring-dependencies"},"Install monitoring dependencies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"first step")),(0,a.kt)("p",null,"Install the components required by the Node.js Performance Platform"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the version management tool tnvm, please refer to the installation process error: https://github.com/aliyun-node/tnvm\n$ wget -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh | bash\n$ source ~/.bashrc\n\n# tnvm ls-remote alinode # View the required version\n$ tnvm install alinode-v6.5.0 # Install the required version\n$ tnvm use alinode-v6.5.0 # use the required version\n\n$ npm install @alicloud/agenthub -g # install agenthub\n")),(0,a.kt)("p",null,"There are three parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Install tnvm (alinode source)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Use tnvm to install alinode (replace the default node)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"Install the data collector required by alinode")))),(0,a.kt)("p",null,"After the installation is complete, you can check it, you need to make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},".tnvm")," is included in the path of ",(0,a.kt)("inlineCode",{parentName:"p"},"which node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"which agenthub"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ which node\n/root/.tnvm/versions/alinode/v3.11.4/bin/node\n\n$ which agenthub\n/root/.tnvm/versions/alinode/v3.11.4/bin/agenthub\n")),(0,a.kt)("p",null,"Save the ",(0,a.kt)("inlineCode",{parentName:"p"},"App ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"App Secret")," obtained in ",(0,a.kt)("inlineCode",{parentName:"p"},"Create a new application")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"yourconfig.json")," as shown below. For example, in the project root directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "appid": "****",\n  "secret": "****",\n}\n')),(0,a.kt)("p",null,"Start the plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"agenthub start yourconfig.json\n")),(0,a.kt)("h2",{id:"start-node-service"},"start node service"),(0,a.kt)("p",null,"In the installed server, when starting the Node service, you need to add the ENABLE_NODE_LOG=YES environment variable."),(0,a.kt)("p",null,"for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ NODE_ENV=production ENABLE_NODE_LOG=YES node bootstrap.js\n")),(0,a.kt)("h2",{id:"docker-container-approach"},"Docker container approach"),(0,a.kt)("p",null,"For the method of docker container, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/66027.html?spm=a2c4g.11186623.6.580.261ba70feI6mWt"},"document"),"."),(0,a.kt)("h2",{id:"other"},"other"),(0,a.kt)("p",null,"For more information, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/60338.html?spm=a2c4g.11186623.6.548.599312e6IkGO9v"},"documentation")," of the Alibaba Cloud Node.js Performance Platform."))}u.isMDXComponent=!0}}]);