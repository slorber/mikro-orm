(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),b=p(r),l=n,d=b["".concat(c,".").concat(l)]||b[l]||u[l]||a;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=l;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return m})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(1084)),c={id:"lockmode",title:"Enumeration: LockMode",sidebar_label:"LockMode"},i={unversionedId:"api/enums/lockmode",id:"version-4.2/api/enums/lockmode",isDocsHomePage:!1,title:"Enumeration: LockMode",description:"Enumeration members",source:"@site/versioned_docs/version-4.2/api/enums/lockmode.md",slug:"/api/enums/lockmode",permalink:"/docs/4.2/api/enums/lockmode",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/enums/lockmode.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1608131182,sidebar_label:"LockMode",sidebar:"version-4.2/API",previous:{title:"Enumeration: LoadStrategy",permalink:"/docs/4.2/api/enums/loadstrategy"},next:{title:"Enumeration: NodeState",permalink:"/docs/4.2/api/enums/nodestate"}},m=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"NONE",id:"none",children:[]},{value:"OPTIMISTIC",id:"optimistic",children:[]},{value:"PESSIMISTIC_READ",id:"pessimistic_read",children:[]},{value:"PESSIMISTIC_WRITE",id:"pessimistic_write",children:[]}]}],s={rightToc:m};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(a.b)("h3",{id:"none"},"NONE"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"NONE"),":  = 0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L89"}),"packages/core/src/enums.ts:89"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"optimistic"},"OPTIMISTIC"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"OPTIMISTIC"),":  = 1"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L90"}),"packages/core/src/enums.ts:90"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"pessimistic_read"},"PESSIMISTIC","_","READ"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"PESSIMISTIC","_","READ"),":  = 2"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L91"}),"packages/core/src/enums.ts:91"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"pessimistic_write"},"PESSIMISTIC","_","WRITE"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"PESSIMISTIC","_","WRITE"),":  = 3"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/enums.ts#L92"}),"packages/core/src/enums.ts:92"))))}p.isMDXComponent=!0}}]);