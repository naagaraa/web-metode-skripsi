"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[2601],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,d=m["".concat(i,".").concat(p)]||m[p]||f[p]||o;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4893:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],c={title:"excel dan csv"},i="DOCUMENT EXCEL CLASS",u={unversionedId:"tools-office/ms-excel",id:"tools-office/ms-excel",title:"excel dan csv",description:"format file excel atau CSV",source:"@site/docs/tools-office/ms-excel.md",sourceDirName:"tools-office",slug:"/tools-office/ms-excel",permalink:"/documentation-metode-skripsi/docs/tools-office/ms-excel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools-office/ms-excel.md",tags:[],version:"current",frontMatter:{title:"excel dan csv"},sidebar:"tutorialSidebar",previous:{title:"listing file",permalink:"/documentation-metode-skripsi/docs/tools-office/file-listing"},next:{title:"pdf parser",permalink:"/documentation-metode-skripsi/docs/tools-office/pdf-parser"}},s={},f=[{value:"format file excel atau CSV",id:"format-file-excel-atau-csv",level:3},{value:"method available",id:"method-available",level:3},{value:"basic usage",id:"basic-usage",level:3}],m={toc:f};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"document-excel-class"},"DOCUMENT EXCEL CLASS"),(0,o.kt)("h3",{id:"format-file-excel-atau-csv"},"format file excel atau CSV"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nama column berada pada ROW 1 ","[A1,B1,C1,D1 ... E - n]"),(0,o.kt)("li",{parentName:"ul"},"data yang berupa value atau dimulai dari ROW 2")),(0,o.kt)("p",null,"atau untuk contoh nyata bentuk file csv example bisa check ini adalah file example yang diambil dari kaggle untuk public data penelitian data science atau research of data science jakarta.csv untuk file example pada libraries saya"),(0,o.kt)("h3",{id:"method-available"},"method available"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$excel = new DocumentExcel;\n$excel->read("filename.csv");\n$excel->execute();\n\n// show\n$excel->showColumn();\n$excel->showRow();\n$excel->showByColumn("column-name");\n\n')),(0,o.kt)("h3",{id:"basic-usage"},"basic usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'\nuse Nagara\\Src\\Doc\\DocumentExcel; //load libraries\n\n// init or read file\n$excel = new DocumentExcel;\n$jakarta = $excel->read("jakarta.csv"); // read file excel\n$excel->execute();\n\n\n// show by column\n$column = $excel->showColumn();\n$row = $excel->showRow();\n$bycolumn = $excel->showByColumn("hospitalized"); //insert column name\n\n\n// debug field array\ndump($column);\ndump($row);\ndump($bycolumn);\n\n')))}p.isMDXComponent=!0}}]);