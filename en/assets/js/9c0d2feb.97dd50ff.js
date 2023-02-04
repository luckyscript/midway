"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91550],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={},o="Pipeline",s={unversionedId:"pipeline",id:"pipeline",title:"Pipeline",description:"In some scenarios, we want to split a complete task into different stages, each stage of the execution of the logic is relatively independent, and at the same time can improve the overall execution efficiency through parallel or serial ways. In Midway, we have implemented an optimized Pipeline mode.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pipeline.md",sourceDirName:".",slug:"/pipeline",permalink:"/en/docs/pipeline",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/pipeline.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Self-executing code",permalink:"/en/docs/auto_run"},next:{title:"Service factory",permalink:"/en/docs/service_factory"}},l={},c=[{value:"Pipeline",id:"pipeline-1",level:2},{value:"Type definition",id:"type-definition",level:2},{value:"IPipelineHandler",id:"ipipelinehandler",level:3},{value:"Return result",id:"return-result",level:3},{value:"Use examples",id:"use-examples",level:2},{value:"parallel",id:"parallel",level:3},{value:"concat",id:"concat",level:3},{value:"series",id:"series",level:3},{value:"concatSeries",id:"concatseries",level:3},{value:"waterfall",id:"waterfall",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipeline"},"Pipeline"),(0,i.kt)("p",null,"In some scenarios, we want to split a complete task into different stages, each stage of the execution of the logic is relatively independent, and at the same time can improve the overall execution efficiency through parallel or serial ways. In Midway, we have implemented an optimized Pipeline mode."),(0,i.kt)("h2",{id:"pipeline-1"},"Pipeline"),(0,i.kt)("p",null,"In the Node.js Stream implementation, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"a.pipe(b).pipe(c).pipe(d)")," to concatenate multiple Streams. however, the implementation of pipe, which can only be executed sequentially, may not meet different business scenarios."),(0,i.kt)("p",null,"In Midway, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Pipeline")," decorator to create an instance that inherits and ",(0,i.kt)("inlineCode",{parentName:"p"},"IPipelineHandler")," interfaces and can concatenate multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"IValveHandler")," instances for execution."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IValveHandler")," is the specific task phase execution unit. The whole IPipelineHandler can be executed in parallel, series, concat, Waterfall (familiar, right? We refer to the method capabilities provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/caolan/async"},"async")," Library."),(0,i.kt)("p",null,"The context IPipelineContext of the Pipeline execution period can be used to store Pipeline input parameters, the execution results of the previous IValveHandler instance, the previous intermediate products, etc., providing great flexibility."),(0,i.kt)("h2",{id:"type-definition"},"Type definition"),(0,i.kt)("h3",{id:"ipipelinehandler"},"IPipelineHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IPipelineHandler {\n  /**\n   * Parallel execution, using Promise.all\n   * @param opts execution parameters\n   */\n  parallel<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n  /**\n   * Execute in parallel, and the final result is an array.\n   * @param opts execution parameters\n   */\n  concat<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n  /**\n   * serial execution, using foreach await\n   * @param opts execution parameters\n   */\n  series<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n  /**\n   * serial execution, using foreach await, the final result is an array\n     * @param opts execution parameters\n   */\n  concatSeries<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n  /**\n   * Serially executed, but the former execution result will be taken as an input parameter and passed into the next execution. The valve result of the last execution will be returned\n   * @param opts execution parameters\n   */\n  waterfall<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whitelist mechanism\nWhen using the Pipeline decorator, if the array parameters are filled in, the values input parameters in the method execution function can only be items in the decorator array parameters. Of course, valves is optional. If you do not fill in the default, the decorator array parameters shall prevail. For example, if ",(0,i.kt)("inlineCode",{parentName:"li"},"@Pipeline(['a', 'B', 'c'])"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"opts. values")," array of the optional parameters in the execution function such as series must be ",(0,i.kt)("inlineCode",{parentName:"li"},"['a', 'B', 'c']")," or a subset thereof. If this parameter is not specified, it must be executed in the logical order ",(0,i.kt)("inlineCode",{parentName:"li"},"['a', 'B', 'c']"),".")),(0,i.kt)("h3",{id:"return-result"},"Return result"),(0,i.kt)("p",null,"The types of IPipelineResult are as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * pipeline execution returns results\n */\nexport interface IPipelineResult<T> {\n  /**\n   * Success\n   */\n  success: boolean;\n  /**\n   * Exception information (return if any)\n   */\n  error ?: {\n    /**\n     * The anomaly is on that valve.\n     */\n    valveName?: string;\n    /**\n     * Abnormal information\n     */\n    message?: string;\n    /**\n     * Original Error\n     */\n    error?: Error;\n  };\n  /**\n   * Return results\n   */\n  result: T;\n}\n")),(0,i.kt)("h2",{id:"use-examples"},"Use examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Suppose there is such a scenario that we need to obtain the data information on the page, the current user information, and several Tab at one time. Then let's first declare the data type returned")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class VideoDto {\n  videoId: string;\n  videoUrl: string;\n  videoTitle: string;\n}\nclass AccountDto {\n  id: string;\n  nick: string;\n  isFollow: boolean;\n}\nclass TabDto {\n  tabId: string;\n  title: string;\n  index: number;\n}\ninterface HomepageDto {\n  videos: VideoDto[];\n  account: AccountDto;\n  tab: TabDto;\n}\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Implement a TestService to encapsulate the returned data")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"\n@Provide()\nclass TestService {\n  // Returns the current login user information\n  async getAccount(args: any): Promise<AccountDto> {\n    return {\n      id: 'test_account_id',\n      nick: 'test hello',\n      isFollow: true\n    };\n  }\n  // Return to the video list\n  async getVideos(args: any): Promise<VideoDto[]> {\n    return [{\n      videoId: '123',\n      videoUrl: 'https://www.taobao.com/xxx.mp4',\n      videoTitle: 'test 1 video'\n    }, {\n      videoId: '234',\n      videoUrl: 'https://www.taobao.com/xxx234.mp4',\n      videoTitle: 'test 2 video'\n    }, {\n      videoId: '456',\n      videoUrl: 'https://www.taobao.com/xxx456.mp4',\n      videoTitle: 'test 3 video'\n    }];\n  }\n// return to the tab page\n  async getTab(args: any): Promise<TabDto> {\n    return {\n      title: 'test tab',\n      tabId: 'firstTab',\n      index: 0\n    };\n  }\n}\n\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Split several task packages into different IValveHandler implementations")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Returns the video information\n@Provide()\nclass VideoFeeds implements IValveHandler {\n  alias = 'videos';\n\n  @Inject()\n  service: TestService;\n\n  async invoke(ctx: IPipelineContext): Promise<VideoDto[]> {\n    return this.service.getVideos(ctx.args);\n  }\n}\n// Return account information\n@Provide()\nclass AccountMap implements IValveHandler {\n  alias = 'account';\n\n  @Inject()\n  service: TestService;\n\n  async invoke(ctx: IPipelineContext): Promise<AccountDto> {\n\n    // Get data execution logic\n    return this.service.getAccount(ctx.args);\n  }\n}\n// Returns tab information\n@Provide()\nclass CrowFeeds implements IValveHandler {\n  alias = 'tab';\n  @Inject()\n  service: TestService;\n\n  async invoke(ctx: IPipelineContext): Promise<TabDto> {\n    // Get data execution logic\n    return this.service.getTab(ctx.args);\n  }\n}\n// Catch the entire error exception\n@Provide()\nclass ErrorFeeds implements IValveHandler {\n  alias = 'tab';\n  @Inject()\n  service: TestService;\n\n  async invoke(ctx: IPipelineContext): Promise<TabDto> {\n    // Get data execution logic\n    throw new Error('this is error feeds');\n  }\n}\n")),(0,i.kt)("h3",{id:"parallel"},"parallel"),(0,i.kt)("p",null,"The result of this method is an object object, and each IValveHandler implements alias as the key of the object return value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class StageTest {\n  // Declare a pipeline here\n  @Pipeline([VideoFeeds, AccountMap, CrowFeeds])\n  stages: IPipelineHandler;\n\n  async runParallel(): Promise<any> {\n    // The videoFeeds, accountMap and crowFeeds are executed concurrently here.\n    return this.stages.parallel<any>({\n      args: {aa: 123}\n    });\n\n    // The returned result structure\n    /*\n    {\n      // The key with the accountMap alias account as the return object\n      account: {\n        id: 'test_account_id',\n        nick: 'test hello',\n        isFollow: true\n      },\n      // The videoFeeds alias video is used as the key of the return object.\n      video: [\n        {\n          videoId: '123',\n          videoUrl: 'https://www.taobao.com/xxx.mp4',\n          videoTitle: 'test 1 video'\n        }, {\n          videoId: '234',\n          videoUrl: 'https://www.taobao.com/xxx234.mp4',\n          videoTitle: 'test 2 video'\n        }, {\n          videoId: '456',\n          videoUrl: 'https://www.taobao.com/xxx456.mp4',\n          videoTitle: 'test 3 video'\n        }\n      ],\n      // The crowFeeds alias tab is used as the key of the return object.\n      tab: {\n        title: 'test tab',\n        tabId: 'firstTab',\n        index: 0\n      }\n    }\n    */\n  }\n}\n")),(0,i.kt)("h3",{id:"concat"},"concat"),(0,i.kt)("p",null,"The execution method is the same as the parallel, except that the final result is an array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class StageTest {\n  // Declare a pipeline here\n  @Pipeline([VideoFeeds, AccountMap, CrowFeeds])\n  stages: IPipelineHandler;\n\n  async runConcat(): Promise<any> {\n    // The videoFeeds, accountMap and crowFeeds are executed concurrently here.\n    return this.stages.concat<any>({\n      args: {aa: 123}\n    });\n\n    // The result returned here is an array\n    /*\n    [\n        // Take videoFeeds as the first return object\n      [\n        {\n          videoId: '123',\n          videoUrl: 'https://www.taobao.com/xxx.mp4',\n          videoTitle: 'test 1 video'\n        }, {\n          videoId: '234',\n          videoUrl: 'https://www.taobao.com/xxx234.mp4',\n          videoTitle: 'test 2 video'\n        }, {\n          videoId: '456',\n          videoUrl: 'https://www.taobao.com/xxx456.mp4',\n          videoTitle: 'test 3 video'\n        }\n      ],\n      // Take accountMap as the second return object\n      {\n        id: 'test_account_id',\n        nick: 'test hello',\n        isFollow: true\n      },\n      // Take crowFeeds as the third return object\n      {\n        title: 'test tab',\n        tabId: 'firstTab',\n        index: 0\n      }\n    ]\n    */\n  }\n}\n")),(0,i.kt)("h3",{id:"series"},"series"),(0,i.kt)("p",null,"Here, series is executed in serial, one by one according to the sequence of Pipeline decorator parameters, and the prev in the IPipelienContext is the previous valve, the current is the current, and next is the next valve to be executed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class StageTest {\n  // Declare a pipeline here\n  @Pipeline([VideoFeeds, AccountMap, CrowFeeds])\n  stages: IPipelineHandler;\n\n  async runSeries(): Promise<any> {\n    // Here the serial execution videoFeeds, accountMap, crowFeeds\n    return this.stages.series<any>({\n      args: {aa: 123}\n    });\n\n    // The result returned here is an object, and the result is the same as the object assembly rule returned by the parallel.\n  }\n}\n")),(0,i.kt)("h3",{id:"concatseries"},"concatSeries"),(0,i.kt)("p",null,"The principle is the same as series, except that the returned result is an array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class StageTest {\n  // Declare a pipeline here\n  @Pipeline([VideoFeeds, AccountMap, CrowFeeds])\n  stages: IPipelineHandler;\n\n  async runConcatSeries(): Promise<any> {\n        // here serially execute videoFeeds, accountMap, crowdFeeds\n    return this.stages.concatSeries<any>({\n      args: {aa: 123}\n    });\n\n    // The result returned here is an array that is assembled with the object returned by concat.\n  }\n}\n")),(0,i.kt)("h3",{id:"waterfall"},"waterfall"),(0,i.kt)("p",null,"Serial execution, only the last valve execution result is returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nclass StageOne implements IValveHandler {\n  async invoke(ctx: IPipelineContext): Promise<any> {\n    if (ctx.args.aa! = = 123) {\n      throw new Error('args aa is undefined');\n    }\n    ctx.set('stageone', 'this is stage one');\n    ctx.set('stageone_date', Date.now());\n    if (ctx.info.current! = = 'stageOne') {\n      throw new Error('current stage is not stageOne');\n    }\n    if (ctx.info.next! = = 'stageTwo') {\n      throw new Error('next stage is not stageTwo');\n    }\n    if (ctx.info.prev) {\n      throw new Error('stageOne prev stage is not undefined');\n    }\n\n    return 'stageone';\n  }\n}\n\n@Provide()\nclass StageTwo implements IValveHandler {\n  async invoke(ctx: IPipelineContext): Promise<any> {\n    const keys = ctx.keys();\n    if (keys.length! = = 2) {\n      throw new Error('keys is not equal');\n    }\n    ctx.set('stagetwo', ctx.get('stageone') + 1);\n    ctx.set('stagetwo_date', Date.now());\n    // Verify whether it is the result returned by the execution stageOne\n    if (ctx.info.prevValue! = = 'stageone') {\n      throw new Error('stageone result empty');\n    }\n    if (ctx.info.current! = = 'stageTwo') {\n      throw new Error('current stage is not stageTwo');\n    }\n    if (ctx.info.next) {\n      throw new Error('stageTwo next stage is not undefined');\n    }\n    if (ctx.info.prev! = = 'stageOne') {\n      throw new Error('prev stage is not stageOne');\n    }\n\n    return 'stagetwo';\n  }\n}\n\nclass StageTest {\n  // Declare a pipeline here\n  @Pipeline([StageOne, StageTwo])\n  stages: IPipelineHandler;\n\n  async runStagesWaterfall(): Promise<any> {\n    // This is executed in serial mode. You can see that the verification is performed in the stageTwo, and the prevValue is the result of stageOne execution.\n    return this.stages.waterfall<any>({\n      args: {aa: 123}\n    });\n  }\n}\n")))}d.isMDXComponent=!0}}]);