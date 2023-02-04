"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52728],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(g,s(s({ref:n},c),{},{components:t})):o.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={},s="MongoDB",i={unversionedId:"extensions/mongodb",id:"extensions/mongodb",title:"MongoDB",description:'In this chapter, we choose Typegoose as the base MongoDB ORM library. As he describes "Define Mongoose models using TypeScript classes", it works well with TypeScript.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/mongodb.md",sourceDirName:"extensions",slug:"/extensions/mongodb",permalink:"/en/docs/extensions/mongodb",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Redis",permalink:"/en/docs/extensions/redis"},next:{title:"Cache",permalink:"/en/docs/extensions/cache"}},l={},p=[{value:"The difference with the old writing",id:"the-difference-with-the-old-writing",level:2},{value:"Mongoose version dependency",id:"mongoose-version-dependency",level:2},{value:"Use Typegoose",id:"use-typegoose",level:2},{value:"1. Install components",id:"1-install-components",level:3},{value:"2. Simple directory structure",id:"2-simple-directory-structure",level:3},{value:"3. Create entity files",id:"3-create-entity-files",level:3},{value:"4. Configure connection information",id:"4-configure-connection-information",level:3},{value:"5, reference the entity, call the database.",id:"5-reference-the-entity-call-the-database",level:3},{value:"6, Multi-dataSource situation",id:"6-multi-datasource-situation",level:3},{value:"7. About schemaOptions",id:"7-about-schemaoptions",level:3},{value:"Direct use of mongoose",id:"direct-use-of-mongoose",level:2},{value:"1. Install components",id:"1-install-components-1",level:3},{value:"2. Open the components",id:"2-open-the-components",level:3},{value:"2. Configuration",id:"2-configuration",level:3},{value:"3. Use",id:"3-use",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"1. E002: You are using a NodeJS Version below 12.22.0",id:"1-e002-you-are-using-a-nodejs-version-below-12220",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDB"),(0,a.kt)("p",null,"In this chapter, we choose ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose"},"Typegoose"),' as the base MongoDB ORM library. As he describes "Define Mongoose models using TypeScript classes", it works well with TypeScript.'),(0,a.kt)("p",null,'Simply put, Typegoose using TypeScript "wrappers" to write Mongoose models, most of its capabilities are provided by ',(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongoose"},"mongoose")," libraries."),(0,a.kt)("p",null,"You can also directly select the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongoose"},"mongoose")," library to use, and we will describe it separately."),(0,a.kt)("p",null,"Related information:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The current module has been reconfigured since v3.4.0, and the historical writing method is compatible. For more information about how to query historical documents, see ",(0,a.kt)("a",{parentName:"li",href:"../legacy/mongodb"},"here"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"If there is a read configuration in the code, note that the ",(0,a.kt)("inlineCode",{parentName:"li"},"mongoose.clients")," may not be read, please use the ",(0,a.kt)("inlineCode",{parentName:"li"},"mongoose.dataSource"),"."))))),(0,a.kt)("h2",{id:"the-difference-with-the-old-writing"},"The difference with the old writing"),(0,a.kt)("p",null,"If you want to use the new version of the usage, please refer to the following process to modify the old code. Do not mix the new and old codes."),(0,a.kt)("p",null,"Upgrade method:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"No need to use ",(0,a.kt)("inlineCode",{parentName:"li"},"EntityModel")," decorator"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"configure the adjustment in the ",(0,a.kt)("inlineCode",{parentName:"li"},"mongoose")," section of ",(0,a.kt)("inlineCode",{parentName:"li"},"src/config.default"),". refer to the following data source configuration section")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The 3.1 is modified to the form of a data source to ",(0,a.kt)("inlineCode",{parentName:"li"},"mongoose.dataSource")),(0,a.kt)("li",{parentName:"ul"},"3.2 declare the entity model in the ",(0,a.kt)("inlineCode",{parentName:"li"},"entities")," field of the data source")))),(0,a.kt)("h2",{id:"mongoose-version-dependency"},"Mongoose version dependency"),(0,a.kt)("p",null,"The mongoose is also related to the version of MongoDB Server used by your server, as follows, please note."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 2.4.x: mongoose ^3.8 or 4.x"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 2.6.x: mongoose ^3.8.8 or 4.x"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 3.0.x: mongoose ^3.8.22, 4.x, or 5.x"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 3.2.x: mongoose ^4.3.0 or 5.x"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 3.4.x: mongoose ^4.7.3 or 5.x"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 3.6.x: mongoose 5.x"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 4.0.x: mongoose ^5.2.0"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 4.2.x: mongoose ^5.7.0"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 4.4.x: mongoose ^5.10.0"),(0,a.kt)("li",{parentName:"ul"},"MongoDB Server 5.x: mongoose ^6.0.0")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"mongoose related dependencies are complex and correspond to different versions. At this stage, we mainly use mongoose v5 and v6.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"From ",(0,a.kt)("a",{parentName:"p",href:"mailto:mongoose@v5.11.0"},"mongoose@v5.11.0")," on, mongoose the definition is officially supported, there is no need to install the @types/mongoose dependency package.")),(0,a.kt)("p",null,"The installation package depends on the following version:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Support MongoDB Server 5.x")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "mongoose": "^6.0.7 ",\n    "@typegoose/typegoose": "9.0.0", // This dependency needs to be installed using typegoose\n  },\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Support MongoDB Server 4.4.x")),(0,a.kt)("p",null,"The following versions do not require additional definition packages to be installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "mongoose": "^5.13.3 ",\n    "@typegoose/typegoose": "8.0.0", // This dependency needs to be installed using typegoose\n  },\n')),(0,a.kt)("p",null,"The following versions require additional definition packages to be installed (not recommended)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' "dependencies": {\n    "mongodb": "3.6.3", // The version is written inside the mongoose\n    "mongoose": "~5.10.18 ",\n    "@typegoose/typegoose": "7.0.0", // This dependency needs to be installed using typegoose\n },\n "devDependencies": {\n    "@types/mongodb": "3.6.3", // this version can only be used\n    "@types/mongoose": "~5.10.3 ",\n }\n')),(0,a.kt)("p",null,"The rest of the MongoDB installation modules are similar and not tested."),(0,a.kt)("h2",{id:"use-typegoose"},"Use Typegoose"),(0,a.kt)("h3",{id:"1-install-components"},"1. Install components"),(0,a.kt)("p",null,"Install Typegoose components to provide access to MongoDB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please note that please check the first section to write/install mongoose and other related dependency packages in advance.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/typegoose@3 --save\n")),(0,a.kt)("p",null,"Or reinstall the following dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    // Components\n    "@midwayjs/typegoose": "^3.0.0",\n    // mongoose dependency in the previous section\n  },\n  "devDependencies": {\n    // mongoose dependency in the previous section\n    // ...\n  }\n}\n')),(0,a.kt)("p",null,"After installation, you need to manually configure it in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),", the code is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as typegoose from '@midwayjs/typegoose';\n\n@Configuration({\n  imports: [\n    typegoose // Load typegoose Components\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration {\n\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In this component, midway just makes a simple configuration regularization and injects it into the initialization process.")),(0,a.kt)("h3",{id:"2-simple-directory-structure"},"2. Simple directory structure"),(0,a.kt)("p",null,"We take a simple project as an example, please refer to other structures."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"MyProject\n\u251c\u2500\u2500 src                                         // TS root directory\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u2514\u2500\u2500 config.default.ts       // Application Profile\n\u2502   \u251c\u2500\u2500 entity                                  // entity (database Model) directory\n\u2502   \u2502   \u2514\u2500\u2500 user.ts                         // entity file\n\u2502   \u251c\u2500\u2500 configuration.ts                // Midway configuration file\n\u2502   \u2514\u2500\u2500 service                                 // Other service directory\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"Here, our database entities are mainly located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"entity")," directory (non-mandatory). This is a simple convention."),(0,a.kt)("h3",{id:"3-create-entity-files"},"3. Create entity files"),(0,a.kt)("p",null,"For example, in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/entity/user.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { prop } from '@typegoose/typegoose';\n\nexport class User {\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n")),(0,a.kt)("p",null,"Equivalent to the following code that uses the mongoose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const userSchema = new mongoose.Schema({\n  name: String\n  jobs: [{ type: String }]\n});\n\nconst User = mongoose.model('User', userSchema);\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Therefore, typegoose just simplify the process of creating model.")),(0,a.kt)("h3",{id:"4-configure-connection-information"},"4. Configure connection information"),(0,a.kt)("p",null,"Add the configuration of the connection to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { User } from '../entity/user';\n\nexport default {\n  // ...\n  mongoose: {\n    dataSource: {\n      default: {\n        uri: 'mongodb://localhost:27017/test',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        },\n        // Associated Entities\n        entities: [ User]\n      }\n    }\n  },\n}\n")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"../data_source"},"Data source management"),"."),(0,a.kt)("h3",{id:"5-reference-the-entity-call-the-database"},"5, reference the entity, call the database."),(0,a.kt)("p",null,"The sample code is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { InjectEntityModel } from '@midwayjs/typegoose';\nimport { ReturnModelType } from '@typegoose/typegoose';\nimport { User } from '../entity/user';\n\n@Provide()\nexport class TestService {\n\n  @InjectEntityModel(User)\n  userModel: ReturnModelType<typeof User>;\n\n  async getTest() {\n    // create data\n    const { _id: id } = await this.userModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an \"as\" assertion, to have types for all properties\n\n    // find data\n    const user = await this.userModel.findById(id).exec();\n    console.log(user)\n  }\n}\n")),(0,a.kt)("h3",{id:"6-multi-datasource-situation"},"6, Multi-dataSource situation"),(0,a.kt)("p",null,"First define multiple entities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class User {\n\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n\nclass User2 {\n\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n")),(0,a.kt)("p",null,"Configure entities to multiple data sources."),(0,a.kt)("p",null,"Add the configuration of the data source to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { User, User2 } from '../entity/user';\n\nexport default {\n  // ...\n  mongoose: {\n    dataSource: {\n      default: {\n        uri: 'mongodb://localhost:27017/test',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        },\n        entities: [ User]\n      },\n      db1: {\n        uri: 'mongodb://localhost:27017/test1',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        },\n        entities: [ User2]\n      }\n    }\n  },\n}\n")),(0,a.kt)("p",null,"Use a fixed connection when defining an instance, and configure the Model to automatically associate the mongoose connection when scanning the dataSource (",(0,a.kt)("inlineCode",{parentName:"p"},"getModelForClass(Model, { existingConnection: conn })"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class TestService {\n\n  @InjectEntityModel(User)\n  userModel: ReturnModelType<typeof User>;\n\n  @InjectEntityModel(User2)\n  user2Model: ReturnModelType<typeof User2>;\n\n  async getTest() {\n    const { _id: id } = await this.userModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an \"as\" assertion, to have types for all properties\n    const user = await this.userModel.findById(id).exec();\n    console.log(user)\n\n    const { _id: id2 } = await this.user2Model.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User2); // an \"as\" assertion, to have types for all properties\n    const user2 = await this.user2Model.findById(id2).exec();\n    console.log(user2)\n  }\n}\n\n")),(0,a.kt)("h3",{id:"7-about-schemaoptions"},"7. About schemaOptions"),(0,a.kt)("p",null,"Typegoose reserved a ",(0,a.kt)("inlineCode",{parentName:"p"},"setGlobalOptions")," method to set up ",(0,a.kt)("a",{parentName:"p",href:"https://typegoose.github.io/typegoose/docs/api/decorators/model-options#schemaoptions"},"schemaOptions")," and some other global ",(0,a.kt)("a",{parentName:"p",href:"https://typegoose.github.io/typegoose/docs/api/decorators/model-options#options-1"},"configurations"),"."),(0,a.kt)("p",null,"We can set it up when the project starts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// srcconfiguration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as typegoose from '@midwayjs/typegoose';\nimport * as Typegoose from '@typegoose/typegoose';\n\n@Configuration({\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n\n    Typegoose.setGlobalOptions({\n      schemaOptions: {\n        // ...\n      },\n      options: { allowMixed: Severity.ERROR}\n    });\n    // ...\n  }\n}\n")),(0,a.kt)("h2",{id:"direct-use-of-mongoose"},"Direct use of mongoose"),(0,a.kt)("p",null,"mongoose component is the basic component of typegoose, sometimes we can use it directly."),(0,a.kt)("h3",{id:"1-install-components-1"},"1. Install components"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please note that please check the first section to write/install mongoose and other related dependency packages in advance.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/mongoose@3 --save\n")),(0,a.kt)("p",null,"Or reinstall the following dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    // Components\n    "@midwayjs/mongoose": "^3.0.0",\n    // mongoose dependency in the previous section\n  },\n  "devDependencies": {\n    // mongoose dependency in the previous section\n    // ...\n  }\n}\n')),(0,a.kt)("h3",{id:"2-open-the-components"},"2. Open the components"),(0,a.kt)("p",null,"After installation, you need to manually configure ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),". The code is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as mongoose from '@midwayjs/mongoose';\n\n@Configuration({\n  imports: [\n    mongoose                                            // enable mongoose component\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration {\n\n}\n")),(0,a.kt)("h3",{id:"2-configuration"},"2. Configuration"),(0,a.kt)("p",null,"Same as typegoose, or typegoose use mongoose configuration."),(0,a.kt)("p",null,"Whether it is a single database or a multi-database, the data source configuration is similar."),(0,a.kt)("p",null,"Single library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    dataSource: {\n      default: {\n        uri: 'mongodb://localhost:27017/test',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '**********'\n        }\n      }\n    }\n  },\n}\n")),(0,a.kt)("p",null,"Multi-library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    dataSource: {\n      default: {\n        uri: 'mongodb://localhost:27017/test',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        }\n      },\n      db1: {\n        uri: 'mongodb://localhost:27017/test1',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        }\n      }\n    }\n  },\n}\n")),(0,a.kt)("h3",{id:"3-use"},"3. Use"),(0,a.kt)("p",null,"When there is only one default connection or the default connection is directly used, we can directly use the encapsulated ",(0,a.kt)("inlineCode",{parentName:"p"},"MongooseConnectionService")," object to create the model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, Init } from '@midwayjs/decorator';\nimport { MongooseDataSourceManager } from '@midwayjs/mongoose';\nimport { Schema, Document } from 'mongoose';\n\ninterface User extends Document {\n  name: string;\n  email: string;\n  avatar: string;\n}\n\n@Provide()\nexport class TestService {\n\n  @Inject()\n  dataSourceManager: MongooseDataSourceManager;\n\n  @Init()\n  async init() {\n    // get default connection\n    this.conn = this.dataSourceManager.getDataSource('default');\n  }\n\n  async invoke() {\n    const schema = new Schema<User>({\n      name: { type: String, required: true}\n      email: { type: String, required: true}\n      avatar: String\n    });\n    const UserModel = this.conn.model<User>('User', schema);\n    const doc = new UserModel({\n      name: 'Bill',\n      email: 'bill@initech.com',\n      avatar: 'https:// I .imgur.com/dM7Thhn.png'\n    });\n    await doc.save();\n  }\n}\n\n")),(0,a.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h3",{id:"1-e002-you-are-using-a-nodejs-version-below-12220"},"1. E002: You are using a NodeJS Version below 12.22.0"),(0,a.kt)("p",null,"Node version verification has been added to the new version @typegoose/typegoose (v8, v9). if your Node.js version is lower than v12.22.0, this prompt will appear."),(0,a.kt)("p",null,"Under normal circumstances, please upgrade Node.js to this version or above to solve the problem."),(0,a.kt)("p",null,"In special scenarios, such as when the Serverless cannot modify the Node.js version and the version is lower than v12.22, the V12 version can actually be subversions, which can be bypassed by temporarily modifying the process.version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nObject.defineProperty(process, 'version', {\n  value: 'v12.22.0',\n  }\n});\n\n// other code\n\nexport class AutoConfiguration {}\n")))}u.isMDXComponent=!0}}]);