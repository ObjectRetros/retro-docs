"use strict";(self.webpackChunkretro_docs=self.webpackChunkretro_docs||[]).push([[501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:13,title:"Staff applications"},r=void 0,p={unversionedId:"atom-cms/staff-applications",id:"atom-cms/staff-applications",title:"Staff applications",description:"Atom CMS has a built-in staff application system, which makes it a breeze to open for a new position and receive applications for it.",source:"@site/docs/atom-cms/staff-applications.md",sourceDirName:"atom-cms",slug:"/atom-cms/staff-applications",permalink:"/docs/atom-cms/staff-applications",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Staff applications"},sidebar:"tutorialSidebar",previous:{title:"Maximum accounts",permalink:"/docs/atom-cms/maximum-accounts"},next:{title:"Paypal Setup",permalink:"/docs/atom-cms/paypal-setup"}},s={},l=[],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Atom CMS has a built-in staff application system, which makes it a breeze to open for a new position and receive applications for it."),(0,a.kt)("p",null,'Currently, the staff application system is still in "early stages" meaning, it\'s fully functional but to open a position you must manually do so through the database - The process of applying and manage the applications sent by applicants is fully coded and implemented, the management of applicants is done through the Atom HK under the menu "Staff applications".'),(0,a.kt)("p",null,"Now to the process of opening a position. To open a position start by opening your database management tool, and find the ",(0,a.kt)("inlineCode",{parentName:"p"},"website_open_positions")," table. In this table you'll find yourself with the following columns: ",(0,a.kt)("inlineCode",{parentName:"p"},"permission_id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"apply_from")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"apply_to")," - There's a few other columns too but those you don't have to worry about."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"permission_id")," is the id of the rank you want to open the position for, to find the right ",(0,a.kt)("inlineCode",{parentName:"p"},"permission_id")," head into the ",(0,a.kt)("inlineCode",{parentName:"p"},"permissions")," table and grab the id of the rank you want your users to be able to apply for and then place it as the ",(0,a.kt)("inlineCode",{parentName:"p"},"permission_id")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"website_open_positions")," table. Next the ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," column is just the description you want to show the users when they look at the open position, you can freely choose what to write in here, next is the ",(0,a.kt)("inlineCode",{parentName:"p"},"apply_from")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"apply_to")," those are the timestamps used to determine when and for how long the application is applicable."),(0,a.kt)("p",null,"Here's an example of two usable timestamps: ",(0,a.kt)("inlineCode",{parentName:"p"},"apply_from")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"2022-12-30 23:59:00.000")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"apply_to")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"2023-01-30 23:59:00.000"),"."))}m.isMDXComponent=!0}}]);