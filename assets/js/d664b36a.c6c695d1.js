"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[2091],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,b=p["".concat(i,".").concat(f)]||p[f]||m[f]||u;return t?n.createElement(b,o(o({ref:r},l),{},{components:t})):n.createElement(b,o({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=p;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<u;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2522:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var n=t(7462),a=t(3366),u=(t(7294),t(3905)),o=["components"],c={title:"number currency"},i="NumberCurrency",s={unversionedId:"tools-math/number-currency",id:"tools-math/number-currency",title:"number currency",description:"Number Currency class adalah object class yang dibuat khusus untuk melakkukan format string number menjadi format mata uang.",source:"@site/docs/tools-math/number-currency.md",sourceDirName:"tools-math",slug:"/tools-math/number-currency",permalink:"/docs/tools-math/number-currency",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools-math/number-currency.md",tags:[],version:"current",frontMatter:{title:"number currency"},sidebar:"tutorialSidebar",previous:{title:"matrix",permalink:"/docs/tools-math/matrix"},next:{title:"database",permalink:"/docs/tools-database/database"}},l={},m=[{value:"basi usage",id:"basi-usage",level:4}],p={toc:m};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"numbercurrency"},"NumberCurrency"),(0,u.kt)("p",null,"Number Currency class adalah object class yang dibuat khusus untuk melakkukan format string number menjadi format mata uang."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"note")," : saat ini yang masih tersedia hanya rupiah saja"),(0,u.kt)("h4",{id:"basi-usage"},"basi usage"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},'use Nagara\\Src\\Math\\NumberCurrency;\n\n$money = new NumberCurrency();\necho $money->rupiah(2500000); # untuk rupiah\necho "<br>";\necho $duit->dollar(123.46); # untuk dollar\n')))}f.isMDXComponent=!0}}]);