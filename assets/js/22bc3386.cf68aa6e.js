(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),l=m(a),d=n,j=l["".concat(i,".").concat(d)]||l[d]||O[d]||b;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),b=(a(0),a(1110)),i={id:"knex.knex-1.migrator",title:"Interface: Migrator",sidebar_label:"Migrator",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.migrator",id:"version-4.5/api/interfaces/knex.knex-1.migrator",isDocsHomePage:!1,title:"Interface: Migrator",description:"Interface: Migrator",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.migrator.md",slug:"/api/interfaces/knex.knex-1.migrator",permalink:"/docs/api/interfaces/knex.knex-1.migrator",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1617180539,formattedLastUpdatedAt:"3/31/2021",sidebar_label:"Migrator",sidebar:"version-4.5/API",previous:{title:"Interface: MigrationSource<TMigrationSpec>",permalink:"/docs/api/interfaces/knex.knex-1.migrationsource"},next:{title:"Interface: MigratorConfig",permalink:"/docs/api/interfaces/knex.knex-1.migratorconfig"}},p=[{value:"Methods",id:"methods",children:[{value:"currentVersion",id:"currentversion",children:[]},{value:"down",id:"down",children:[]},{value:"forceFreeMigrationsLock",id:"forcefreemigrationslock",children:[]},{value:"latest",id:"latest",children:[]},{value:"list",id:"list",children:[]},{value:"make",id:"make",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"status",id:"status",children:[]},{value:"up",id:"up",children:[]}]}],o={toc:p};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-migrator"},"Interface: Migrator"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Migrator"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"currentversion"},"currentVersion"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"currentVersion"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<string",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<string",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2139"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"down"},"down"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"down"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2142"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"forcefreemigrationslock"},"forceFreeMigrationsLock"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"forceFreeMigrationsLock"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2143"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"latest"},"latest"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"latest"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2136"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"list"},"list"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"list"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2140"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"make"},"make"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"make"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<string",">"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<string",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2135"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"rollback"},"rollback"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"rollback"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),", ",Object(b.b)("inlineCode",{parentName:"p"},"all?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"all?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2137"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"status"},"status"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"status"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<number",">"),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<number",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2138"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"up"},"up"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"up"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2141"))}m.isMDXComponent=!0}}]);