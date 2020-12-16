(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{1084:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),O=a,d=m["".concat(c,".").concat(O)]||m[O]||l[O]||o;return n?r.a.createElement(d,b(b({ref:t},p),{},{components:n})):r.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},811:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(1084)),c={id:"mongoentityrepository",title:"Class: MongoEntityRepository<T>",sidebar_label:"MongoEntityRepository"},b={unversionedId:"api/classes/mongoentityrepository",id:"api/classes/mongoentityrepository",isDocsHomePage:!1,title:"Class: MongoEntityRepository<T>",description:"Type parameters",source:"@site/docs/api/classes/mongoentityrepository.md",slug:"/api/classes/mongoentityrepository",permalink:"/docs/next/api/classes/mongoentityrepository",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/mongoentityrepository.md",version:"current",sidebar_label:"MongoEntityRepository",sidebar:"API",previous:{title:"Class: MongoEntityManager<D>",permalink:"/docs/next/api/classes/mongoentitymanager"},next:{title:"Class: MongoExceptionConverter",permalink:"/docs/next/api/classes/mongoexceptionconverter"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_em",id:"_em",children:[]},{value:"entityName",id:"entityname",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"em",id:"em",children:[]}]},{value:"Methods",id:"methods",children:[{value:"aggregate",id:"aggregate",children:[]}]}],p={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"T"))))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"any"),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"MongoEntityRepository")))),Object(o.b)("h2",{id:"constructors"},"Constructors"),Object(o.b)("h3",{id:"constructor"},"constructor"),Object(o.b)("p",null,"+"," ",Object(o.b)("strong",{parentName:"p"},"new MongoEntityRepository"),"(",Object(o.b)("inlineCode",{parentName:"p"},"_em"),": ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/mongoentitymanager"}),"MongoEntityManager"),", ",Object(o.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api#entityname"}),"EntityName"),"<T",">","): ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/mongoentityrepository"}),"MongoEntityRepository")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/mongodb/src/MongoEntityRepository.ts#L4"}),"packages/mongodb/src/MongoEntityRepository.ts:4"))),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"_em")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/classes/mongoentitymanager"}),"MongoEntityManager"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"entityName")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api#entityname"}),"EntityName"),"<T",">")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/mongoentityrepository"}),"MongoEntityRepository")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"_em"},"_","em"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(o.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(o.b)("strong",{parentName:"p"},"_","em"),": ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/mongoentitymanager"}),"MongoEntityManager")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/mongodb/src/MongoEntityRepository.ts#L6"}),"packages/mongodb/src/MongoEntityRepository.ts:6"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"entityname"},"entityName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(o.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(o.b)("strong",{parentName:"p"},"entityName"),": ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api#entityname"}),"EntityName"),"<T",">"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/mongodb/src/MongoEntityRepository.ts#L7"}),"packages/mongodb/src/MongoEntityRepository.ts:7"))),Object(o.b)("h2",{id:"accessors"},"Accessors"),Object(o.b)("h3",{id:"em"},"em"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Protected"),"get ",Object(o.b)("strong",{parentName:"p"},"em"),"(): ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/mongoentitymanager"}),"MongoEntityManager")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/mongodb/src/MongoEntityRepository.ts#L18"}),"packages/mongodb/src/MongoEntityRepository.ts:18"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/mongoentitymanager"}),"MongoEntityManager")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"aggregate"},"aggregate"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"aggregate"),"(",Object(o.b)("inlineCode",{parentName:"p"},"pipeline"),": any[]): Promise<any[]",">"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/mongodb/src/MongoEntityRepository.ts#L14"}),"packages/mongodb/src/MongoEntityRepository.ts:14"))),Object(o.b)("p",null,"Shortcut to driver's aggregate method. Available in MongoDriver only."),Object(o.b)("h4",{id:"parameters-1"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"pipeline")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any[]")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," Promise<any[]",">"))}s.isMDXComponent=!0}}]);