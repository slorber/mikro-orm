(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=o(n),s=a,O=d["".concat(i,".").concat(s)]||d[s]||m[s]||b;return n?r.a.createElement(O,c(c({ref:t},l),{},{components:n})):r.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<b;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),b=(n(0),n(1110)),i={id:"knex.knex-1.config",title:"Interface: Config<SV>",sidebar_label:"Config",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.config",id:"version-4.5/api/interfaces/knex.knex-1.config",isDocsHomePage:!1,title:"Interface: Config<SV>",description:"Interface: Config",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.config.md",slug:"/api/interfaces/knex.knex-1.config",permalink:"/docs/api/interfaces/knex.knex-1.config",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1617180539,formattedLastUpdatedAt:"3/31/2021",sidebar_label:"Config",sidebar:"version-4.5/API",previous:{title:"Interface: ColumnNameQueryBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.columnnamequerybuilder"},next:{title:"Interface: ConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.connectionconfig"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"acquireConnectionTimeout",id:"acquireconnectiontimeout",children:[]},{value:"asyncStackTraces",id:"asyncstacktraces",children:[]},{value:"client",id:"client",children:[]},{value:"connection",id:"connection",children:[]},{value:"debug",id:"debug",children:[]},{value:"dialect",id:"dialect",children:[]},{value:"log",id:"log",children:[]},{value:"migrations",id:"migrations",children:[]},{value:"pool",id:"pool",children:[]},{value:"postProcessResponse",id:"postprocessresponse",children:[]},{value:"searchPath",id:"searchpath",children:[]},{value:"seeds",id:"seeds",children:[]},{value:"useNullAsDefault",id:"usenullasdefault",children:[]},{value:"version",id:"version",children:[]},{value:"wrapIdentifier",id:"wrapidentifier",children:[]}]}],l={toc:p};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-configsv"},"Interface: Config<SV",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Config"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"SV")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"acquireconnectiontimeout"},"acquireConnectionTimeout"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"acquireConnectionTimeout"),": ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1870"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"asyncstacktraces"},"asyncStackTraces"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"asyncStackTraces"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1873"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"client"},"client"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"client"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"typeof")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.client"},Object(b.b)("em",{parentName:"a"},"Client"))),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1857"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"connection"},"connection"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"connection"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#staticconnectionconfig"},Object(b.b)("em",{parentName:"a"},"StaticConnectionConfig"))," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#connectionconfigprovider"},Object(b.b)("em",{parentName:"a"},"ConnectionConfigProvider"))),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1860"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"debug"},"debug"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"debug"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1856"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"dialect"},"dialect"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"dialect"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1858"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"log"},"log"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"log"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.logger"},Object(b.b)("em",{parentName:"a"},"Logger"))),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1874"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"migrations"},"migrations"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"migrations"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig"))),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1862"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"pool"},"pool"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"pool"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.poolconfig"},Object(b.b)("em",{parentName:"a"},"PoolConfig"))),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1861"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"postprocessresponse"},"postProcessResponse"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"postProcessResponse"),": (",Object(b.b)("inlineCode",{parentName:"p"},"result"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"queryContext"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"result"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"queryContext"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"result")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"queryContext")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1863"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1863"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"searchpath"},"searchPath"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"searchPath"),": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," readonly ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1872"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"seeds"},"seeds"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"seeds"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.seederconfig"},Object(b.b)("em",{parentName:"a"},"SeederConfig")),"<SV",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1869"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"usenullasdefault"},"useNullAsDefault"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"useNullAsDefault"),": ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1871"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"version"},"version"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"version"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1859"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wrapidentifier"},"wrapIdentifier"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"wrapIdentifier"),": (",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"origImpl"),": (",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"string"),") => ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"queryContext"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"origImpl"),": (",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"string"),") => ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"queryContext"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"origImpl")),Object(b.b)("td",{parentName:"tr",align:"left"},"(",Object(b.b)("inlineCode",{parentName:"td"},"value"),": ",Object(b.b)("em",{parentName:"td"},"string"),") => ",Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"queryContext")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1864"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1864"))}o.isMDXComponent=!0}}]);