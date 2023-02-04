"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const l={title:"Sequelize"},a=void 0,i={unversionedId:"extensions/sequelize",id:"version-2.0.0/extensions/sequelize",title:"Sequelize",description:"\u4f7f\u7528\u65b9\u6cd5\uff1a",source:"@site/versioned_docs/version-2.0.0/extensions/sequelize.md",sourceDirName:"extensions",slug:"/extensions/sequelize",permalink:"/en/docs/2.0.0/extensions/sequelize",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/extensions/sequelize.md",tags:[],version:"2.0.0",frontMatter:{title:"Sequelize"},sidebar:"component",previous:{title:"Database\uff08TypeORM)",permalink:"/en/docs/2.0.0/extensions/orm"},next:{title:"MongoDB",permalink:"/en/docs/2.0.0/extensions/mongo"}},s={},p=[{value:"\u4f7f\u7528\u65b9\u6cd5\uff1a",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5b89\u88c5\u6570\u636e\u5e93 Driver",id:"\u5b89\u88c5\u6570\u636e\u5e93-driver",level:2},{value:"\u5f15\u5165\u6a21\u5757",id:"\u5f15\u5165\u6a21\u5757",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u4e1a\u52a1\u5c42",id:"\u4e1a\u52a1\u5c42",level:2}],m={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"$ npm install @midwayjs/sequelize@2 -S\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u6570\u636e\u5e93-driver"},"\u5b89\u88c5\u6570\u636e\u5e93 Driver"),(0,o.kt)("p",null,"\u5e38\u7528\u6570\u636e\u5e93\u9a71\u52a8\u5982\u4e0b\uff0c\u9009\u62e9\u4f60\u5bf9\u5e94\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7c7b\u578b\u5b89\u88c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# for MySQL or MariaDB\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 mysql2 \u66ff\u4ee3\nnpm install mysql --save\nnpm install mysql2 --save\n\n# for PostgreSQL or CockroachDB\nnpm install pg --save\n\n# for SQLite\nnpm install sqlite3 --save\n\n# for Microsoft SQL Server\nnpm install mssql --save\n\n# for sql.js\nnpm install sql.js --save\n\n# for Oracle\nnpm install oracledb --save\n\n# for MongoDB(experimental)\nnpm install mongodb --save\n")),(0,o.kt)("h2",{id:"\u5f15\u5165\u6a21\u5757"},"\u5f15\u5165\u6a21\u5757"),(0,o.kt)("p",null,"\u5728 configuration.ts \u6587\u4ef6\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { Application } from 'egg';\nimport { join } from 'path';\nimport * as sequlize from '@midwayjs/sequelize';\n\n@Configuration({\n  imports: [sequlize],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class ContainerLifeCycle implements ILifeCycle {\n  @App()\n  app: Application;\n\n  async onReady() {}\n}\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728 config.default.ts \u4e2d\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const sequelize = {\n  options: {\n    database: 'test4',\n    username: 'root',\n    password: '123456',\n    host: '127.0.0.1', // \u6b64\u5904\u652f\u6301idb\u4e0a\u9762vipserver key\u7684\u90a3\u79cd\u65b9\u5f0f\uff0c\u4e5f\u652f\u6301aliyun\u7684\u5730\u5740\u3002\n    port: 3306,\n    encrypt: false,\n    dialect: 'mysql',\n    define: { charset: 'utf8' },\n    timezone: '+08:00',\n    logging: console.log,\n  },\n  sync: false, // \u672c\u5730\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7sync: true\u76f4\u63a5createTable\n};\n")),(0,o.kt)("h2",{id:"\u4e1a\u52a1\u5c42"},"\u4e1a\u52a1\u5c42"),(0,o.kt)("p",null,"\u5b9a\u4e49 Entity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Model } from 'sequelize-typescript';\nimport { BaseTable } from '@midwayjs/sequelize';\n\n@BaseTable\nexport class Photo extends Model {\n  @Column({\n    comment: '\u540d\u5b57',\n  })\n  name: string;\n}\n")),(0,o.kt)("p",null,"\u4f7f\u7528 Entity:"),(0,o.kt)("p",null,"\u67e5\u8be2\u5217\u8868"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Get('/')\n  async home() {\n    let result = await Photo.findAll();\n    console.log(result);\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("p",null,"\u589e\u52a0\u6570\u636e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Post('/add')\n  async home() {\n    let result = await Photo.create({\n      name: '123',\n    });\n    console.log(result);\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("p",null,"\u5220\u9664\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Post('/delete')\n  async home() {\n    await UserModel.destroy({\n      where: {\n        name: '123',\n      },\n    });\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("p",null,"\u67e5\u627e\u5355\u4e2a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Post('/delete')\n  async home() {\n    let result = await UserModel.findOne({\n      where: {\n        name: '123',\n      },\n    });\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("p",null,"\u8054\u5408\u67e5\u8be2\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config, Controller, Get, Provide } from '@midwayjs/decorator';\nimport { Photo } from '../entity/Photo';\nimport { Op } from 'sequelize';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Get('/')\n  async home() {\n    let result = await Photo.findAll({\n      where: {\n        [Op.or]: [{ name: '23' }, { name: '34' }], // SELECT * FROM photo WHERE name = \"23\" OR name = \"34\";\n      },\n    });\n    console.log(result);\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("p",null,"\u5173\u4e8e OP \u7684\u66f4\u591a\u7528\u6cd5\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/querying.html"},"https://sequelize.org/v5/manual/querying.html")),(0,o.kt)("p",null,"\u5982\u679c\u9047\u5230\u6bd4\u8f83\u590d\u6742\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528 raw query \u65b9\u6cd5\uff1a\n",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/raw-queries.html"},"https://sequelize.org/v5/manual/raw-queries.html")))}u.isMDXComponent=!0}}]);