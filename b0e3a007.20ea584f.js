(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1084:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),o=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=o(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=o(a),j=n,s=O["".concat(c,".").concat(j)]||O[j]||m[j]||r;return a?b.a.createElement(s,l(l({ref:t},p),{},{components:a})):b.a.createElement(s,l({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},756:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),b=a(7),r=(a(0),a(1084)),c={id:"abstractsqlconnection",title:"Class: AbstractSqlConnection",sidebar_label:"AbstractSqlConnection"},l={unversionedId:"api/classes/abstractsqlconnection",id:"api/classes/abstractsqlconnection",isDocsHomePage:!1,title:"Class: AbstractSqlConnection",description:"Hierarchy",source:"@site/docs/api/classes/abstractsqlconnection.md",slug:"/api/classes/abstractsqlconnection",permalink:"/docs/next/api/classes/abstractsqlconnection",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/abstractsqlconnection.md",version:"current",sidebar_label:"AbstractSqlConnection",sidebar:"API",previous:{title:"Class: AbstractNamingStrategy",permalink:"/docs/next/api/classes/abstractnamingstrategy"},next:{title:"Class: AbstractSqlDriver<C>",permalink:"/docs/next/api/classes/abstractsqldriver"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"client",id:"client",children:[]},{value:"platform",id:"platform",children:[]}]},{value:"Methods",id:"methods",children:[{value:"begin",id:"begin",children:[]},{value:"close",id:"close",children:[]},{value:"commit",id:"commit",children:[]},{value:"createKnexClient",id:"createknexclient",children:[]},{value:"execute",id:"execute",children:[]},{value:"getKnex",id:"getknex",children:[]},{value:"getKnexOptions",id:"getknexoptions",children:[]},{value:"getSql",id:"getsql",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"loadFile",id:"loadfile",children:[]},{value:"logQuery",id:"logquery",children:[]},{value:"patchKnexClient",id:"patchknexclient",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"transactional",id:"transactional",children:[]},{value:"transformRawResult",id:"transformrawresult",children:[]}]}],p={rightToc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"any"),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"AbstractSqlConnection")))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new AbstractSqlConnection"),"(",Object(r.b)("inlineCode",{parentName:"p"},"config"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/configuration"}),"Configuration"),", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/connectionoptions"}),"ConnectionOptions"),", ",Object(r.b)("inlineCode",{parentName:"p"},"type?"),": ",'"',"read",'"'," ","|"," ",'"',"write",'"',"): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/abstractsqlconnection"}),"AbstractSqlConnection")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L9"}),"packages/knex/src/AbstractSqlConnection.ts:9"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"config")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/configuration"}),"Configuration"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/connectionoptions"}),"ConnectionOptions"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"read",'"'," ","|"," ",'"',"write",'"')))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/abstractsqlconnection"}),"AbstractSqlConnection")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"client"},"client"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("strong",{parentName:"p"},"client"),": Knex"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L9"}),"packages/knex/src/AbstractSqlConnection.ts:9"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"platform"},"platform"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("strong",{parentName:"p"},"platform"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/abstractsqlplatform"}),"AbstractSqlPlatform")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L8"}),"packages/knex/src/AbstractSqlConnection.ts:8"))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"begin"},"begin"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"begin"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ctx?"),": KnexTransaction): Promise<KnexTransaction",">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L37"}),"packages/knex/src/AbstractSqlConnection.ts:37"))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ctx?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"KnexTransaction")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise<KnexTransaction",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"close"},"close"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"close"),"(",Object(r.b)("inlineCode",{parentName:"p"},"force?"),": boolean): Promise<void",">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L20"}),"packages/knex/src/AbstractSqlConnection.ts:20"))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"force?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"commit"},"commit"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"commit"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ctx"),": KnexTransaction): Promise<void",">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L41"}),"packages/knex/src/AbstractSqlConnection.ts:41"))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ctx")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"KnexTransaction")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createknexclient"},"createKnexClient"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected"),Object(r.b)("strong",{parentName:"p"},"createKnexClient"),"(",Object(r.b)("inlineCode",{parentName:"p"},"type"),": string): Knex"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L85"}),"packages/knex/src/AbstractSqlConnection.ts:85"))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Knex"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"execute"},"execute"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"execute"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"queryOrKnex"),": string ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/querybuilder"}),"QueryBuilder")," ","|"," Raw, ",Object(r.b)("inlineCode",{parentName:"p"},"params?"),": any[], ",Object(r.b)("inlineCode",{parentName:"p"},"method?"),": ",'"',"all",'"'," ","|"," ",'"',"get",'"'," ","|"," ",'"',"run",'"',", ",Object(r.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#transaction"}),"Transaction"),"): Promise<T",">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L50"}),"packages/knex/src/AbstractSqlConnection.ts:50"))),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/queryresult"}),"QueryResult")," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#entitydata"}),"EntityData"),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),">"," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#entitydata"}),"EntityData"),"<",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),">","[]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EntityData<AnyEntity","\\",">[]")))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"queryOrKnex")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/classes/querybuilder"}),"QueryBuilder")," ","|"," Raw"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"params")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any[]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"method")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"all",'"'," ","|"," ",'"',"get",'"'," ","|"," ",'"',"run",'"'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"all"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ctx?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#transaction"}),"Transaction")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise<T",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getknex"},"getKnex"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getKnex"),"(): Knex"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L16"}),"packages/knex/src/AbstractSqlConnection.ts:16"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Knex"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getknexoptions"},"getKnexOptions"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected"),Object(r.b)("strong",{parentName:"p"},"getKnexOptions"),"(",Object(r.b)("inlineCode",{parentName:"p"},"type"),": string): Config"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L94"}),"packages/knex/src/AbstractSqlConnection.ts:94"))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Config"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getsql"},"getSql"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"getSql"),"(",Object(r.b)("inlineCode",{parentName:"p"},"query"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"formatted"),": string): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L102"}),"packages/knex/src/AbstractSqlConnection.ts:102"))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"query")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"formatted")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isconnected"},"isConnected"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isConnected"),"(): Promise<boolean",">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L24"}),"packages/knex/src/AbstractSqlConnection.ts:24"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise<boolean",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"loadfile"},"loadFile"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"loadFile"),"(",Object(r.b)("inlineCode",{parentName:"p"},"path"),": string): Promise<void",">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L76"}),"packages/knex/src/AbstractSqlConnection.ts:76"))),Object(r.b)("p",null,"Execute raw SQL queries from file"),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"path")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"logquery"},"logQuery"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected"),Object(r.b)("strong",{parentName:"p"},"logQuery"),"(",Object(r.b)("inlineCode",{parentName:"p"},"query"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"took?"),": number): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L81"}),"packages/knex/src/AbstractSqlConnection.ts:81"))),Object(r.b)("h4",{id:"parameters-9"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"query")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"took?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"patchknexclient"},"patchKnexClient"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"patchKnexClient"),"(): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L121"}),"packages/knex/src/AbstractSqlConnection.ts:121"))),Object(r.b)("p",null,"do not call ",Object(r.b)("inlineCode",{parentName:"p"},"positionBindings")," when there are no bindings - it was messing up with\nalready interpolated strings containing ",Object(r.b)("inlineCode",{parentName:"p"},"?"),", and escaping that was not enough to\nsupport edge cases like ",Object(r.b)("inlineCode",{parentName:"p"},"\\\\?")," strings (as ",Object(r.b)("inlineCode",{parentName:"p"},"positionBindings")," was removing the ",Object(r.b)("inlineCode",{parentName:"p"},"\\\\"),")"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rollback"},"rollback"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"rollback"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ctx"),": KnexTransaction): Promise<void",">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L46"}),"packages/knex/src/AbstractSqlConnection.ts:46"))),Object(r.b)("h4",{id:"parameters-10"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ctx")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"KnexTransaction")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transactional"},"transactional"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"transactional"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"cb"),": (trx: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#transaction"}),"Transaction"),"<KnexTransaction",">",") => Promise<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#transaction"}),"Transaction"),"<KnexTransaction",">","): Promise<T",">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L33"}),"packages/knex/src/AbstractSqlConnection.ts:33"))),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-11"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"cb")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(trx: ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#transaction"}),"Transaction"),"<KnexTransaction",">",") => Promise<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ctx?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api#transaction"}),"Transaction"),"<KnexTransaction",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise<T",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transformrawresult"},"transformRawResult"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("inlineCode",{parentName:"p"},"Abstract"),Object(r.b)("strong",{parentName:"p"},"transformRawResult"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"res"),": any, ",Object(r.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"all",'"'," ","|"," ",'"',"get",'"'," ","|"," ",'"',"run",'"',"): T"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/knex/src/AbstractSqlConnection.ts#L146"}),"packages/knex/src/AbstractSqlConnection.ts:146"))),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-12"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"res")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"method")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"',"all",'"'," ","|"," ",'"',"get",'"'," ","|"," ",'"',"run",'"')))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"))}o.isMDXComponent=!0}}]);