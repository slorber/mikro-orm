(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),m=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),p=m(r),l=n,O=p["".concat(o,".").concat(l)]||p[l]||s[l]||c;return r?a.a.createElement(O,i(i({ref:t},b),{},{components:r})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},974:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),c=(r(0),r(1084)),o={id:"queryflag",title:"Enumeration: QueryFlag",sidebar_label:"QueryFlag"},i={unversionedId:"api/enums/queryflag",id:"api/enums/queryflag",isDocsHomePage:!1,title:"Enumeration: QueryFlag",description:"Enumeration members",source:"@site/docs/api/enums/queryflag.md",slug:"/api/enums/queryflag",permalink:"/docs/next/api/enums/queryflag",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/enums/queryflag.md",version:"current",sidebar_label:"QueryFlag",sidebar:"API",previous:{title:"Enumeration: NodeState",permalink:"/docs/next/api/enums/nodestate"},next:{title:"Enumeration: QueryOperator",permalink:"/docs/next/api/enums/queryoperator"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"CONVERT_CUSTOM_TYPES",id:"convert_custom_types",children:[]},{value:"DELETE_SUB_QUERY",id:"delete_sub_query",children:[]},{value:"DISTINCT",id:"distinct",children:[]},{value:"PAGINATE",id:"paginate",children:[]},{value:"UPDATE_SUB_QUERY",id:"update_sub_query",children:[]}]}],b={rightToc:u};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"convert_custom_types"},"CONVERT","_","CUSTOM","_","TYPES"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"CONVERT","_","CUSTOM","_","TYPES"),':  = "CONVERT',"_","CUSTOM","_",'TYPES"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/core/src/enums.ts#L62"}),"packages/core/src/enums.ts:62"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete_sub_query"},"DELETE","_","SUB","_","QUERY"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"DELETE","_","SUB","_","QUERY"),':  = "DELETE',"_","SUB","_",'QUERY"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/core/src/enums.ts#L61"}),"packages/core/src/enums.ts:61"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"distinct"},"DISTINCT"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"DISTINCT"),':  = "DISTINCT"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/core/src/enums.ts#L58"}),"packages/core/src/enums.ts:58"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"paginate"},"PAGINATE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"PAGINATE"),':  = "PAGINATE"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/core/src/enums.ts#L59"}),"packages/core/src/enums.ts:59"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update_sub_query"},"UPDATE","_","SUB","_","QUERY"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"UPDATE","_","SUB","_","QUERY"),':  = "UPDATE',"_","SUB","_",'QUERY"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/26f62ca/packages/core/src/enums.ts#L60"}),"packages/core/src/enums.ts:60"))))}m.isMDXComponent=!0}}]);