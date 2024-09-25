"use strict";(self.webpackChunkretro_docs=self.webpackChunkretro_docs||[]).push([[9376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},i="Theme system",c={unversionedId:"atom-cms/themes",id:"atom-cms/themes",title:"Theme system",description:"In Atom CMS we have included a built-in theme creation / switching system, which not only makes it a breeze to change theme, if you want to quickly brew up a new base for your theme, you can do that with a simple command!",source:"@site/docs/atom-cms/themes.md",sourceDirName:"atom-cms",slug:"/atom-cms/themes",permalink:"/docs/atom-cms/themes",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Google ReCaptcha",permalink:"/docs/atom-cms/recaptcha"},next:{title:"Nitro setup",permalink:"/docs/atom-cms/nitro-setup"}},s={},m=[{value:"\ud83d\udd25 Change theme",id:"-change-theme",level:3},{value:"\ud83d\ude80 Creating a new theme",id:"-creating-a-new-theme",level:3}],l={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"theme-system"},"Theme system"),(0,a.kt)("p",null,"In Atom CMS we have included a built-in theme creation / switching system, which not only makes it a breeze to change theme, if you want to quickly brew up a new base for your theme, you can do that with a simple command!"),(0,a.kt)("h3",{id:"-change-theme"},"\ud83d\udd25 Change theme"),(0,a.kt)("p",null,"To change the CMS theme, simply head to ",(0,a.kt)("inlineCode",{parentName:"p"},"website_settings")," and change the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," to the name you gave your new theme upon initialising it."),(0,a.kt)("h3",{id:"-creating-a-new-theme"},"\ud83d\ude80 Creating a new theme"),(0,a.kt)("p",null,"It's super easy to create a new theme within Atom CMS, all you have to do is to enter the command below, in your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"php artisan make:theme\n")),(0,a.kt)("p",null,"Once the command has been executed, you'll be prompted with easy to follow scaffolding steps."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It's recommended to not replacing the existing controllers during the theme scaffolding process, unless you are confident that's really what you want")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/87041394/182718267-f409f5f6-d69c-4226-b6d6-9b7f8d0b2aac.png",alt:"image"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"All credits for the theme system goes to ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/qirolab/laravel-themer"},"qirolab"))))}p.isMDXComponent=!0}}]);