(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1084:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(n),O=r,j=s["".concat(b,".").concat(O)]||s[O]||m[O]||i;return n?a.a.createElement(j,c(c({ref:t},p),{},{components:n})):a.a.createElement(j,c({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var p=2;p<i;p++)b[p]=n[p];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},621:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(1084)),b={id:"migrationrunner",title:"Class: MigrationRunner",sidebar_label:"MigrationRunner"},c={unversionedId:"api/classes/migrationrunner",id:"version-4.2/api/classes/migrationrunner",isDocsHomePage:!1,title:"Class: MigrationRunner",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/migrationrunner.md",slug:"/api/classes/migrationrunner",permalink:"/docs/4.2/api/classes/migrationrunner",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/migrationrunner.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1608131182,sidebar_label:"MigrationRunner",sidebar:"version-4.2/API",previous:{title:"Class: MigrationGenerator",permalink:"/docs/4.2/api/classes/migrationgenerator"},next:{title:"Class: MigrationStorage",permalink:"/docs/4.2/api/classes/migrationstorage"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"connection",id:"connection",children:[]},{value:"driver",id:"driver",children:[]},{value:"helper",id:"helper",children:[]},{value:"masterTransaction",id:"mastertransaction",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getQueries",id:"getqueries",children:[]},{value:"run",id:"run",children:[]},{value:"setMasterMigration",id:"setmastermigration",children:[]},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[]}]}],p={rightToc:o};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MigrationRunner"))),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new MigrationRunner"),"(",Object(i.b)("inlineCode",{parentName:"p"},"driver"),": AbstractSqlDriver, ",Object(i.b)("inlineCode",{parentName:"p"},"options"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#migrationsoptions"}),"MigrationsOptions"),", ",Object(i.b)("inlineCode",{parentName:"p"},"config"),": Configuration): ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/migrationrunner"}),"MigrationRunner")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L9"}),"packages/migrations/src/MigrationRunner.ts:9"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"driver")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AbstractSqlDriver")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#migrationsoptions"}),"MigrationsOptions"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"config")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Configuration")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/migrationrunner"}),"MigrationRunner")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"config"},"config"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"config"),": Configuration"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L13"}),"packages/migrations/src/MigrationRunner.ts:13"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"connection"},"connection"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"connection"),": AbstractSqlConnection = this.driver.getConnection()"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L7"}),"packages/migrations/src/MigrationRunner.ts:7"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"driver"},"driver"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"driver"),": AbstractSqlDriver"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L11"}),"packages/migrations/src/MigrationRunner.ts:11"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"helper"},"helper"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"helper"),": SchemaHelper = this.driver.getPlatform().getSchemaHelper()!"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L8"}),"packages/migrations/src/MigrationRunner.ts:8"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"mastertransaction"},"masterTransaction"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"masterTransaction"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#transaction"}),"Transaction")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L9"}),"packages/migrations/src/MigrationRunner.ts:9"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"options"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#migrationsoptions"}),"MigrationsOptions")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L12"}),"packages/migrations/src/MigrationRunner.ts:12"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"getqueries"},"getQueries"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("inlineCode",{parentName:"p"},"Private"),Object(i.b)("strong",{parentName:"p"},"getQueries"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": Migration, ",Object(i.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"up",'"'," ","|"," ",'"',"down",'"',"): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#query"}),"Query"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L38"}),"packages/migrations/src/MigrationRunner.ts:38"))),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"method")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"up",'"'," ","|"," ",'"',"down",'"')))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#query"}),"Query"),"[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"run"},"run"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"run"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": Migration, ",Object(i.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"up",'"'," ","|"," ",'"',"down",'"',"): Promise","<","void>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L15"}),"packages/migrations/src/MigrationRunner.ts:15"))),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Migration")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"method")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"up",'"'," ","|"," ",'"',"down",'"')))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setmastermigration"},"setMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"setMasterMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api#transaction"}),"Transaction"),"): void"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L30"}),"packages/migrations/src/MigrationRunner.ts:30"))),Object(i.b)("h4",{id:"parameters-3"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"trx")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api#transaction"}),"Transaction"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," void"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"unsetMasterMigration"),"(): void"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationRunner.ts#L34"}),"packages/migrations/src/MigrationRunner.ts:34"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," void"))}l.isMDXComponent=!0}}]);