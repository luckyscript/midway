"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83061],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?o.createElement(h,l(l({ref:n},u),{},{components:t})):o.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73327:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={},l="How to install Node.js environment",i={unversionedId:"how_to_install_nodejs",id:"how_to_install_nodejs",title:"How to install Node.js environment",description:"Use scenario",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/how_to_install_nodejs.md",sourceDirName:".",slug:"/how_to_install_nodejs",permalink:"/en/docs/how_to_install_nodejs",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/how_to_install_nodejs.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"About Alias Path",permalink:"/en/docs/faq/alias_path"},next:{title:"About the slow start of Midway",permalink:"/en/docs/midway_slow_problem"}},s={},p=[{value:"Use scenario",id:"use-scenario",level:2},{value:"How to install",id:"how-to-install",level:2},{value:"Linux / macOS environment",id:"linux--macos-environment",level:3},{value:"Windows environment",id:"windows-environment",level:3},{value:"Configure mirror address",id:"configure-mirror-address",level:2},{value:"Guidelines for Use",id:"guidelines-for-use",level:2},{value:"Common npm global module",id:"common-npm-global-module",level:2},{value:"Related reading",id:"related-reading",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-install-nodejs-environment"},"How to install Node.js environment"),(0,r.kt)("h2",{id:"use-scenario"},"Use scenario"),(0,r.kt)("p",null,"Generally, you can download the corresponding installation package from the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js official website")," to complete the environment configuration."),(0,r.kt)("p",null,"However, when you ",(0,r.kt)("strong",{parentName:"p"},"develop on-premises"),", you often need to quickly update or switch the version."),(0,r.kt)("p",null,"The community has solutions such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/creationix/nvm"},"nvm"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tj/n"},"n"),", etc. We recommend cross-platform ","[nvs]","(https:/ /github.com/jasongin/nvs)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nvs is cross-platform."),(0,r.kt)("li",{parentName:"ul"},"Nvs is written based on Node, and we can participate in maintenance.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Friendly reminder: both Node 6.x and 8.x will end LTS support this year. please upgrade to 10.x as soon as possible.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release"},"https://github.com/nodejs/Release"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PS:nvs is generally only used for local development. For more information, see")," ",(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/39226941"},"Popular text: What should I do if O & M does not upgrade the Node version?")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-install"},"How to install"),(0,r.kt)("h3",{id:"linux--macos-environment"},"Linux / macOS environment"),(0,r.kt)("p",null,"The project corresponding to Git Clone can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ export NVS_HOME="$HOME/.nvs"\n$ git clone https://github.com/jasongin/nvs --depth=1 "$NVS_HOME"\n$ . "$NVS_HOME/nvs.sh" install\n')),(0,r.kt)("h3",{id:"windows-environment"},"Windows environment"),(0,r.kt)("p",null,"Due to the complexity of Windows environment configuration, it is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"msi")," file to complete initialization.\nVisit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jasongin/nvs/releases"},"nvs/releases")," to download the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"nvs.msi"),", and then double-click to install."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"configure-mirror-address"},"Configure mirror address"),(0,r.kt)("p",null,"In China, due to reasons that everyone knows, it is necessary to modify the corresponding mirror address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ nvs remote node https://npmmirror.com/mirrors/node/\n$ nvs remote\ndefault             node\nchakracore          https://github.com/nodejs/node-chakracore/releases/\nchakracore-nightly  https://nodejs.org/download/chakracore-nightly/\nnightly             https://nodejs.org/download/nightly/\nnode                https://nodejs.org/dist/\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"guidelines-for-use"},"Guidelines for Use"),(0,r.kt)("p",null,"With the following command, you can easily install the latest LTS version of Node.js."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the latest LTS version\n$ nvs add lts\n# Configure as default version\n$ nvs link lts\n")),(0,r.kt)("p",null,"Install other versions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install other versions and try them\n$ nvs add 12\n# View installed versions\n$ nvs ls\n# Switch version at current Shell\n$ nvs use 12\n")),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("inlineCode",{parentName:"p"},"nvs --help"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"common-npm-global-module"},"Common npm global module"),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"nvs"),", the default ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," is the installation path of the currently activated Node.js version.\nOne problem is that after switching versions, the previous installation of the global command module needs to be reinstalled, which is very inconvenient.\nThe solution is to configure a unified global module installation path to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.npm-global"),", as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir -p ~/.npm-global\n$ npm config set prefix ~/.npm-global\n")),(0,r.kt)("p",null,"You must also configure environment variables in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.zshrc\n$ source ~/.zshrc\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"related-reading"},"Related reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/62265144"},"Popular text: Node.js security attack and defense-how to forge and obtain a user's real IP address?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/39226941"},"Popular text: What if O & M does not upgrade the Node version?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/39209596"},"Popular Science: Why can't you use npm install on the server?"))))}c.isMDXComponent=!0}}]);