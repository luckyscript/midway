"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},l="label components",o={unversionedId:"extensions/tags",id:"extensions/tags",title:"label components",description:"Generic label components for @midwayjs/faas, @midwayjs/web, @midwayjs/koa and @midwayjs/express multiple frameworks.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/tags.md",sourceDirName:"extensions",slug:"/extensions/tags",permalink:"/en/docs/extensions/tags",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/tags.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"scenes to be used",id:"scenes-to-be-used",level:3},{value:"how to use?",id:"how-to-use",level:3},{value:"method",id:"method",level:3},{value:"Add tag new",id:"add-tag-new",level:4},{value:"Remove tags remove",id:"remove-tags-remove",level:4},{value:"Update tag update",id:"update-tag-update",level:4},{value:"Enumerate tags list",id:"enumerate-tags-list",level:4},{value:"Binding entity bind",id:"binding-entity-bind",level:4},{value:"Unbind entity unbind",id:"unbind-entity-unbind",level:4},{value:"List entities by label listObjects",id:"list-entities-by-label-listobjects",level:4},{value:"Obtain tags based on entities listObjectTags",id:"obtain-tags-based-on-entities-listobjecttags",level:4},{value:"configuration",id:"configuration",level:3},{value:"Memory storage configuration",id:"memory-storage-configuration",level:4},{value:"Mysql storage configuration",id:"mysql-storage-configuration",level:4},{value:"Data table information",id:"data-table-information",level:5}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"label-components"},"label components"),(0,r.kt)("p",null,"Generic label components for ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/web"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," multiple frameworks."),(0,r.kt)("h3",{id:"scenes-to-be-used"},"scenes to be used"),(0,r.kt)("p",null,"Tags are an abstract server-side common systematization capability that can be used for various purposes, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Organize and manage resources",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implement a taxonomy system (for content, crowd, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Resource management system",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add various color tags, object and scene tags to pictures, and filter pictures by tags"),(0,r.kt)("li",{parentName:"ul"},"Video and other material tags"))))),(0,r.kt)("li",{parentName:"ul"},"access control",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Permissions system (admin, editor, guest)"))),(0,r.kt)("li",{parentName:"ul"},"status system (editing, published, etc.)")),(0,r.kt)("p",null,"Based on the addition, deletion, modification and query provided by the tag system, as well as the addition, deletion, modification and query of ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," bound to tags through tags, more advanced business logic can be easily implemented."),(0,r.kt)("p",null,"The labeling system is for this kind of business scenario, allowing the server to achieve more efficient and convenient business development based on labeling capabilities."),(0,r.kt)("p",null,"Related Information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"web support"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h3",{id:"how-to-use"},"how to use?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install dependencies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/tags --save\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Introduce components in configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as tags from '@midwayjs/tags';\n@Configuration({\n   imports: [\n     //...\n     tags\n   ],\n})\nexport class MainConfiguration {}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.local.ts\nexport default {\n   tags: {\n     clients: {\n       'tagGroup1': {\n         // Use local memory as data storage\n         dialectType: 'memory',\n       },\n     },\n   }\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Call in the code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/testTags.ts\nimport { Provide, Inject, InjectClient } from '@midwayjs/core';\nimport { TagServiceFactory, TagClient } from '@midwayjs/tags';\n@Provide()\nexport class TestTagsService {\n   @Inject()\n   tags: TagServiceFactory;\n\n   // Equivalent to this.tags.get('tagGroup1')\n   @InjectClient(TagServiceFactory, 'tagGroup1')\n   tagClient: TagClient;\n\n   @ServerlessTrigger(ServerlessTriggerType. HTTP, { path: '/tags/list', method: 'get'})\n   async listTags() {\n     // You can also use this.tagClient directly\n     const tagClient: TagClient = this. tags. get('tagGroup1');\n     // add new tag\n     const tagInfo = await tagClient. new({\n       name: 'test-tag-name',\n       desc: 'tag desc',\n     });\n     /*\n     tagInfo = {\n       success: true,\n       id: 1,\n     }\n     */\n     // list top 20 tags\n     const tags = await tagClient. list({ count: true });\n     /*\n     tags: {\n       list: [\n         {\n           id: 1,\n           name: 'test-tag-name',\n           desc: 'tag desc'\n         }\n       ],\n       total: 1\n     }\n     */\n     return tags;\n   }\n}\n\n")),(0,r.kt)("h3",{id:"method"},"method"),(0,r.kt)("h4",{id:"add-tag-new"},"Add tag new"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"new(tagDefine: {\n   // Tag name, cannot be repeated in the same group\n   name: string;\n   // label description\n   desc?: string;\n}): Promise<{\n   success: boolean;\n   message: string;\n   // label id\n   id?: number;\n}>;\n")),(0,r.kt)("h4",{id:"remove-tags-remove"},"Remove tags remove"),(0,r.kt)("p",null,"Deleting a label will also delete the entity relationship bound to this label"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"remove(tagIdOrName: number | string): Promise<{\n   success: boolean;\n   message: string;\n   // label id\n   id?: number;\n}>;\n")),(0,r.kt)("h4",{id:"update-tag-update"},"Update tag update"),(0,r.kt)("p",null,"Fine-tune the basic information of a label"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"update(tagIdOrName: number | string, params: Partial< {\n   name: string;\n   desc?: string;\n}>): Promise<{\n   success: boolean;\n   message: string;\n   // label id\n   id?: number;\n}>;\n")),(0,r.kt)("h4",{id:"enumerate-tags-list"},"Enumerate tags list"),(0,r.kt)("p",null,"Search tags, support pagination"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"list(listOptions?: {\n   // Search tags, support passing in tag id and tag name\n   tags?: Array<number | string>;\n   // When searching, whether to use the intersection or union of the tags, the values are and and or\n   type?: MATCH_TYPE;\n   count?: boolean;\n   pageSize?: number;\n   page?: number;\n}): Promise<{\n   // label list\n   list: {\n     id: number;\n     name: string;\n     desc: string;\n     createAt: number;\n     updateAt: number;\n   }[];\n   // total number of tags\n   total?: number;\n}>;\n")),(0,r.kt)("h4",{id:"binding-entity-bind"},"Binding entity bind"),(0,r.kt)("p",null,"Binding an entity means binding anything else to a label. The entity here can be a picture or a file. The id of the entity is controlled by the user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"bind(bindOptions: {\n   // label list\n   tags: Array<number | string>;\n   // If there is no label, automatically create a label and bind it, the default is false\n   autoCreateTag?: boolean;\n   // entity id\n   objectId: number,\n}): Promise<{\n   success: boolean;\n   message: string;\n}>\n")),(0,r.kt)("h4",{id:"unbind-entity-unbind"},"Unbind entity unbind"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"unbind(unbindOptions: {\n   // Unbound multiple tags, tag id or tag name\n   tags: Array<number | string>,\n   // entity id\n   objectId: number,\n}): Promise<{\n   success: boolean;\n   message: string;\n}>\n")),(0,r.kt)("h4",{id:"list-entities-by-label-listobjects"},"List entities by label listObjects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"listObjects(listOptions?: {\n   // tag id or tag name\n   tags?: Array<string|number>;\n   count?: boolean;\n   // When searching, whether to use the intersection or union of the tags, the values are and and or\n   type?: MATCH_TYPE;\n   pageSize?: number;\n   page?: number;\n}): Promise<{\n   // list of entity ids\n   list: number[];\n   // total number of entities\n   total?: number;\n}>;\n")),(0,r.kt)("h4",{id:"obtain-tags-based-on-entities-listobjecttags"},"Obtain tags based on entities listObjectTags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"listObjectTags(listOptions?: {\n   // entity id\n   objectId: number;\n   count?: boolean;\n   pageSize?: number;\n   page?: number;\n\n}): Promise<{\n   list: { // label list\n     name: string;\n     desc?: string;\n     id: number;\n     createAt: number;\n     updateAt: number;\n   }[];\n   // total number of tags\n   total?: number;\n}>;\n")),(0,r.kt)("h3",{id:"configuration"},"configuration"),(0,r.kt)("p",null,"Tags supports memory storage (default) and mysql database storage. The following is a configuration example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.local.ts\nexport default {\n   tags: {\n     clients: {\n       'tagGroup1': {\n         // Use local memory as data storage\n         dialectType: 'memory',\n       },\n       'tagGroup2': {\n         // use mysql as data store\n         dialectType: 'mysql',\n         // Automatically synchronize the table structure\n         sync: true,\n         // mysql connection instance\n         instance: mysqlConnection. promise(),\n       },\n     },\n   }\n}\n")),(0,r.kt)("h4",{id:"memory-storage-configuration"},"Memory storage configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Configuration Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dialectType"),(0,r.kt)("td",{parentName:"tr",align:null},"string ",(0,r.kt)("inlineCode",{parentName:"td"},"memory")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configured as ",(0,r.kt)("inlineCode",{parentName:"td"},"memory"),", enable memory storage")))),(0,r.kt)("h4",{id:"mysql-storage-configuration"},"Mysql storage configuration"),(0,r.kt)("p",null,"If you want to use Mysql database as data storage, you need to pass Mysql's ",(0,r.kt)("inlineCode",{parentName:"p"},"database connection object")," into the configuration of tags."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Configuration Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dialectType"),(0,r.kt)("td",{parentName:"tr",align:null},"string ",(0,r.kt)("inlineCode",{parentName:"td"},"mysql")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure to ",(0,r.kt)("inlineCode",{parentName:"td"},"mysql"),", then enable Mysql storage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically synchronize the table structure of Tags, the Tags component will create two data tables, see the data table information below for details")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ query: (sql: string, placeholder?: any[])}: Promise<[]>")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Mysql connection example, need to provide a query method, you can check the example below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tablePrefix"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"data table prefix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableSeparator"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_")),(0,r.kt)("td",{parentName:"tr",align:null},"splicing separator of data table")))),(0,r.kt)("p",null,"The following is an example of database connection using ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql2")," npm package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.local.ts\nconst mysql = require('mysql2');\nexport default () => {\n   const connection = mysql.createConnection({\n       host: 'db4free.net',\n       user: 'tag***',\n       password: 'tag***',\n       database: 'tag***',\n       charset: 'utf8',\n   });\n   return {\n     tags: {\n       clients: {\n         'tagGroup': {\n           dialectType: 'mysql',\n           sync: true,\n           instance: { // mysql connection instance containing query\n             query: (...args) => {\n               return connection.promise().query(...args);\n             }\n           },\n         },\n       },\n     }\n   }\n}\n")),(0,r.kt)("p",null,"You can also consider making the database connection in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onConfigLoad")," life cycle in ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts"),", the advantage of this is that the database connection can be closed when it is closed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Config, Configuration } from '@midwayjs/core';\nimport { join } from 'path';\nimport * as tags from '@midwayjs/tags';\nimport { ITagMysqlDialectOption } from '@midwayjs/tags';\nconst mysql = require('mysql2');\n\n@Configuration({\n   imports: [\n     tags\n   ],\n})\nexport class MainConfiguration {\n   connection;\n\n   @Config()\n   tags;\n\n   async onConfigLoad(container) {\n     // create mysql connection\n     this.connection = mysql.createConnection({\n       host: 'db4free.net',\n       user: 'tag***',\n       password: 'tag***',\n       database: 'tag***',\n       charset: 'utf8',\n     });\n     let dialect: ITagMysqlDialectOption = {\n       dialectType: 'mysql',\n       sync: true,\n       instance: {\n         query: (...args) => {\n           return this.connection.promise().query(...args);\n         }\n       }\n     };\n\n     return {\n       tags: dialect\n     }\n   }\n\n   async onStop() {\n     // close mysql connection\n     this.connection.close();\n   }\n}\n\n")),(0,r.kt)("h5",{id:"data-table-information"},"Data table information"),(0,r.kt)("p",null,"The Tags component needs two data tables to store data, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"relationship"),". The real table names of these two tables in the database are through the ",(0,r.kt)("inlineCode",{parentName:"p"},"table name prefix")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"table name separator")," in the configuration. Spliced with ",(0,r.kt)("inlineCode",{parentName:"p"},"client name/group name"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const clientName = 'local-test';\nconst { tablePrefix = 'a', tableSeparator = '_' } = tagOptions;\nconst tagTableName = `${tablePrefix}${tableSeparator}${clientName}${tableSeparator}tag`;\n// tagTableName: a_local-test_tag\nconst relationshipTableName = `${tablePrefix}${tableSeparator}${clientName}${tableSeparator}relationship`\n// relationshipTableName: a_local-test-relationship\n")),(0,r.kt)("p",null,"When you enable the automatic table structure synchronization of ",(0,r.kt)("inlineCode",{parentName:"p"},"sync")," in the configuration, if there are no these two tables, the corresponding data table will be created according to the following table structure:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tag")," table structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `tag` (\n     `id` BIGINT unsigned NOT NULL AUTO_INCREMENT,\n     `group` varchar(32) NULL,\n     `name` varchar(32) NULL,\n     `descri` varchar(128) NULL,\n     `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,\n     `update_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,\n     PRIMARY KEY (id)\n)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"relationship")," table structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `relationship` (\n    `id` BIGINT unsigned NOT NULL AUTO_INCREMENT,\n    `tid` BIGINT unsigned NOT NULL,\n    `oid` BIGINT unsigned NOT NULL,\n    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,\n    `update_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP  ON UPDATE CURRENT_TIMESTAMP NOT NULL,\n    PRIMARY KEY (id)\n)\n")))}d.isMDXComponent=!0}}]);