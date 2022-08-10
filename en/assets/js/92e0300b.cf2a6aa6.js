"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9954],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=o,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},p="MikroORM",s={unversionedId:"extensions/mikro",id:"extensions/mikro",title:"MikroORM",description:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u5728 midway \u4e2d\u4f7f\u7528 MikroORM\u3002 MikroORM \u662f\u57fa\u4e8e\u6570\u636e\u6620\u5c04\u5668\u3001\u5de5\u4f5c\u5355\u5143\u548c\u8eab\u4efd\u6620\u5c04\u6a21\u5f0f\u7684 Node.js \u7684 TypeScript ORM\u3002\u5b83\u662f TypeORM \u7684\u7edd\u4f73\u66ff\u4ee3\u54c1\uff0c\u4ece TypeORM \u8fc1\u79fb\u5e94\u8be5\u76f8\u5f53\u5bb9\u6613\u3002",source:"@site/docs/extensions/mikro.md",sourceDirName:"extensions",slug:"/extensions/mikro",permalink:"/en/docs/extensions/mikro",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/mikro.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"TableStore",permalink:"/en/docs/extensions/tablestore"},next:{title:"gRPC",permalink:"/en/docs/extensions/grpc"}},m={},u=[{value:"\u5b89\u88c5\u7ec4\u4ef6",id:"\u5b89\u88c5\u7ec4\u4ef6",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:2},{value:"\u5b9a\u4e49 Entity",id:"\u5b9a\u4e49-entity",level:3},{value:"\u914d\u7f6e\u6570\u636e\u6e90",id:"\u914d\u7f6e\u6570\u636e\u6e90",level:3},{value:"\u8c03\u7528 Repository",id:"\u8c03\u7528-repository",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"1\u3001Node \u7248\u672c",id:"1node-\u7248\u672c",level:3},{value:"2\u3001Identity Map",id:"2identity-map",level:3},{value:"3\u3001\u591a\u5e93\u7684\u652f\u6301",id:"3\u591a\u5e93\u7684\u652f\u6301",level:3}],c={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mikroorm"},"MikroORM"),(0,i.kt)("p",null,"\u672c\u7ae0\u8282\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u5728 midway \u4e2d\u4f7f\u7528 MikroORM\u3002 MikroORM \u662f\u57fa\u4e8e\u6570\u636e\u6620\u5c04\u5668\u3001\u5de5\u4f5c\u5355\u5143\u548c\u8eab\u4efd\u6620\u5c04\u6a21\u5f0f\u7684 Node.js \u7684 TypeScript ORM\u3002\u5b83\u662f TypeORM \u7684\u7edd\u4f73\u66ff\u4ee3\u54c1\uff0c\u4ece TypeORM \u8fc1\u79fb\u5e94\u8be5\u76f8\u5f53\u5bb9\u6613\u3002"),(0,i.kt)("p",null,"MikroORM \u7684\u5b98\u7f51\u6587\u6863\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs"},"\u8fd9\u91cc"),"\u3002"),(0,i.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6"},"\u5b89\u88c5\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u5b89\u88c5 mikro \u7ec4\u4ef6\uff0c\u63d0\u4f9b\u63a5\u5165 mikro-orm \u7684\u80fd\u529b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/mikro@3 @mikro-orm/core --save\n")),(0,i.kt)("p",null,"\u6216\u8005\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/mikro": "^3.0.0",\n    "@mikro-orm/core": "^5.3.1",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u8fd8\u9700\u8981\u5f15\u5165\u5bf9\u5e94\u6570\u636e\u5e93\u7684\u9002\u914d\u5305\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "dependencies": {\n    // sqlite\n    "@mikro-orm/sqlite": "^5.3.1",\n    \n    // mysql\n    "@mikro-orm/mysql": "^5.3.1",\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,i.kt)("p",null,"\u66f4\u591a\u9a71\u52a8\u7a0b\u5e8f\u8bf7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/usage-with-sql/"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,i.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u5f15\u5165 mikro \u7ec4\u4ef6\uff0c\u793a\u4f8b\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as mikro from '@midwayjs/mikro';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    // ...\n    mikro                                                       // \u52a0\u8f7d mikro \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration {\n\n}\n")),(0,i.kt)("h2",{id:""}),(0,i.kt)("h2",{id:"\u57fa\u7840\u4f7f\u7528"},"\u57fa\u7840\u4f7f\u7528"),(0,i.kt)("p",null,"\u548c\u5176\u4ed6 orm \u6846\u67b6\u7c7b\u4f3c\uff0c\u90fd\u662f\u5206\u4e3a\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1\u3001\u5b9a\u4e49 Entity"),(0,i.kt)("li",{parentName:"ul"},"2\u3001\u914d\u7f6e\u6570\u636e\u6e90"),(0,i.kt)("li",{parentName:"ul"},"3\u3001\u83b7\u53d6 EntityModel \u8fdb\u884c\u8c03\u7528")),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u66f4\u591a Entity \u4ee3\u7801\u8bf7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/tree/main/packages/mikro/test/fixtures/base-fn-origin"},"\u793a\u4f8b"),"\u3002"),(0,i.kt)("h3",{id:"\u5b9a\u4e49-entity"},"\u5b9a\u4e49 Entity"),(0,i.kt)("p",null,"\u5b9a\u4e49\u57fa\u7840\u7684 Entity\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/entity/BaseEntity.ts\nimport { PrimaryKey, Property } from '@mikro-orm/core';\n\nexport abstract class BaseEntity {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  createdAt: Date = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt: Date = new Date();\n\n}\n")),(0,i.kt)("p",null,"\u5b9a\u4e49\u5b9e\u9645\u7684 Entity\uff0c\u5305\u542b\u4e00\u5bf9\u591a\uff0c\u591a\u5bf9\u591a\u7b49\u5173\u7cfb\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Cascade, Collection, Entity, ManyToMany, ManyToOne, Property } from '@mikro-orm/core';\nimport { Author, BookTag, Publisher } from './index';\nimport { BaseEntity } from './BaseEntity';\n\n@Entity()\nexport class Book extends BaseEntity {\n\n  @Property()\n  title: string;\n\n  @ManyToOne(() => Author)\n  author: Author;\n\n  @ManyToOne(() => Publisher, { cascade: [Cascade.PERSIST, Cascade.REMOVE], nullable: true })\n  publisher?: Publisher;\n\n  @ManyToMany(() => BookTag)\n  tags = new Collection<BookTag>(this);\n\n  @Property({ nullable: true })\n  metaObject?: object;\n\n  @Property({ nullable: true })\n  metaArray?: any[];\n\n  @Property({ nullable: true })\n  metaArrayOfStrings?: string[];\n\n  constructor(title: string, author: Author) {\n    super();\n    this.title = title;\n    this.author = author;\n  }\n\n}\n")),(0,i.kt)("h3",{id:"\u914d\u7f6e\u6570\u636e\u6e90"},"\u914d\u7f6e\u6570\u636e\u6e90"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// src/config/config.default\nimport { Author, BaseEntity, Book, BookTag, Publisher } from '../entity';\nimport { SqlHighlighter } from '@mikro-orm/sql-highlighter';\nimport { join } from 'path';\n\nexport default (appInfo) => {\n  return {\n    mikro: {\n      dataSource: {\n        default: {\n          entities: [Author, Book, BookTag, Publisher, BaseEntity],\n          dbName: join(__dirname, '../../test.sqlite'),\n          type: 'sqlite',           // \u8fd9\u91cc\u4f7f\u7528\u4e86 sqlite \u505a\u793a\u4f8b\n          highlighter: new SqlHighlighter(),\n          debug: true,\n          allowGlobalContext: true,\n        }\n      }\n    }\n  }\n}\n\n")),(0,i.kt)("h3",{id:"\u8c03\u7528-repository"},"\u8c03\u7528 Repository"),(0,i.kt)("p",null,"\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"InjectRepository")," \u6ce8\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"repository")," \u5bf9\u8c61\uff0c\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Book } from './entity';\nimport { Provide } from '@midwayjs/decorator';\nimport { InjectRepository } from '@midwayjs/mikro';\nimport { EntityRepository, QueryOrder, wrap } from '@mikro-orm/core';\n\n@Provide()\nexport class BookController {\n  \n  @InjectRepository(Book)\n  bookRepository: EntityRepository<Book>;\n\n  async findBookAndQuery() {\n    const book = this.bookRepository.create({ title: 'b1', author: { name: 'a1', email: 'e1' } });\n    wrap(book.author, true).__initialized = true;\n    await this.bookRepository.persist(book).flush();\n    \n    const findResult = await this.bookRepository.findAll({\n      populate: ['author'],\n      orderBy: { title: QueryOrder.DESC },\n      limit: 20,\n    });\n\n  }\n}\n")),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("h3",{id:"1node-\u7248\u672c"},"1\u3001Node \u7248\u672c"),(0,i.kt)("p",null,"Mikro-orm \u5bf9 Node \u7248\u672c\u6709\u4e00\u4e9b\u9650\u5236\uff0c\u5fc5\u987b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},">=15.14.0")," \uff0c\u6240\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/mikro")," \u7ec4\u4ef6\u7684\u4f7f\u7528\u89c4\u5219\u4e5f\u5982\u6b64\u3002"),(0,i.kt)("h3",{id:"2identity-map"},"2\u3001Identity Map"),(0,i.kt)("p",null,"Mikro-orm \u5185\u90e8\u67e5\u8be2\u6709\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/identity-map"},"Identity Map")," \u7684\u6982\u5ff5\uff0cMidway \u5df2\u7ecf\u5728\u6240\u6709\u7684\u5185\u7f6e Framework \u7684\u4e2d\u95f4\u4ef6\u5185\u7f6e\u52a0\u5165\u4e86\u8be5\u529f\u80fd\uff0c\u5982\u679c\u5728\u975e\u8bf7\u6c42\u94fe\u8def\u8c03\u7528\u573a\u666f\u4e0b\u4f7f\u7528\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/configuration")," \u4e2d\uff0c\u53ef\u4ee5\u5f00\u542f ",(0,i.kt)("inlineCode",{parentName:"p"},"allowGlobalContext")," \u9009\u9879\u3002"),(0,i.kt)("h3",{id:"3\u591a\u5e93\u7684\u652f\u6301"},"3\u3001\u591a\u5e93\u7684\u652f\u6301"),(0,i.kt)("p",null,"\u548c\u5176\u4ed6\u6570\u636e\u5e93\u4e00\u6837\uff0cMidway \u652f\u6301\u591a\u6570\u636e\u6e90\u7684\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// src/config/config.default\nimport { Author, BaseEntity, Book, BookTag, Publisher } from '../entity';\nimport { SqlHighlighter } from '@mikro-orm/sql-highlighter';\nimport { join } from 'path';\n\nexport default (appInfo) => {\n  return {\n    mikro: {\n      dataSource: {\n        custom1: {\n          // ...\n        },\n        custom2: {\n          // ...\n        }\n      }\n    }\n  }\n}\n")),(0,i.kt)("p",null,"\u6ce8\u610f\u5728\u4f7f\u7528\u65f6\uff0c\u9700\u8981\u4f20\u9012\u6765\u81ea\u54ea\u4e2a\u6570\u636e\u6e90\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\n\n@Provide()\nexport class BookController {\n  \n  @InjectRepository(Book, 'custom1')\n  bookRepository: EntityRepository<Book>;\n\n  async findBookAndQuery() {\n    // ...\n  }\n}\n")))}k.isMDXComponent=!0}}]);