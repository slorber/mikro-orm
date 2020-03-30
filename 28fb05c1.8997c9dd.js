(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(9),o=(n(0),n(402)),a={title:"Lifecycle Hooks"},c={id:"version-3.5/lifecycle-hooks",title:"Lifecycle Hooks",description:"You can use lifecycle hooks to run some code when entity gets persisted. You can mark any of",source:"@site/versioned_docs/version-3.5/lifecycle-hooks.md",permalink:"/docs/3.5/lifecycle-hooks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.5/lifecycle-hooks.md",version:"3.5",sidebar:"version-3.5/docs",previous:{title:"Property Validation",permalink:"/docs/3.5/property-validation"},next:{title:"Naming Strategy",permalink:"/docs/3.5/naming-strategy"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use lifecycle hooks to run some code when entity gets persisted. You can mark any of\nentity methods with them, you can also mark multiple methods with same hook."),Object(o.b)("p",null,"All hooks support async methods with one exception - ",Object(o.b)("inlineCode",{parentName:"p"},"@OnInit"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"@OnInit")," is fired when new instance of entity is created, either manually ",Object(o.b)("inlineCode",{parentName:"p"},"em.create()"),", or\nautomatically when new entities are loaded from database")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"@BeforeCreate()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@BeforeUpdate()")," is fired right before we persist the entity in database")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"@AfterCreate()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@AfterUpdate()")," is fired right after the entity is updated in database and\nmerged to identity map. Since this event entity will have reference to ",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager")," and will be\nenabled to call ",Object(o.b)("inlineCode",{parentName:"p"},"entity.init()")," method (including all entity references and collections).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"@BeforeDelete()")," is fired right before we delete the record from database. It is fired only when\nremoving entity or entity reference, not when deleting records by query. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"@AfterDelete()")," is fired right after the record gets deleted from database and it is unset from\nthe identity map."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"@OnInit")," is not fired when you create the entity manually via its constructor (",Object(o.b)("inlineCode",{parentName:"p"},"new MyEntity()"),")")))}s.isMDXComponent=!0},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,m=b["".concat(a,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(m,c({ref:t},p,{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);