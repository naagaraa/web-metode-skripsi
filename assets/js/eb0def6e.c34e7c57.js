"use strict";(self.webpackChunkmetode_skripsi=self.webpackChunkmetode_skripsi||[]).push([[2073],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||g[u]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4261:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return g}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={sidebar_position:1,title:"image processing"},l=void 0,p={unversionedId:"image-processing/image-processing",id:"image-processing/image-processing",title:"image processing",description:"IMG PROCESSING Class",source:"@site/docs/image-processing/image-processing.md",sourceDirName:"image-processing",slug:"/image-processing/",permalink:"/docs/image-processing/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/image-processing/image-processing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"image processing"},sidebar:"tutorialSidebar",previous:{title:"Image Processing",permalink:"/docs/category/image-processing"},next:{title:"image magic",permalink:"/docs/image-processing/image-magic"}},c={},g=[{value:"IMG PROCESSING Class",id:"img-processing-class",level:2},{value:"IMAGE OCR - Tesseract",id:"image-ocr---tesseract",level:5},{value:"Note",id:"note",level:5},{value:"Image Processing",id:"image-processing",level:3},{value:"usage",id:"usage",level:4},{value:"basic usage",id:"basic-usage",level:5},{value:"get info",id:"get-info",level:5},{value:"MIX with Tesseract OCR",id:"mix-with-tesseract-ocr",level:5}],m={toc:g};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"img-processing-class"},"IMG PROCESSING Class"),(0,i.kt)("p",null,"\u26a0\ufe0f only support for format image jpg or png"),(0,i.kt)("h5",{id:"image-ocr---tesseract"},"IMAGE OCR - Tesseract"),(0,i.kt)("p",null,"IMG class adalah class khusus untuk optical character recognition, dibangun menggunakan teserract ocr php, tesseract OCR Enggine sendiri merupakan software Open source yang dikembangkan oleh google team dengan bahasa c++ .\nreference :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.google/projects/tesseract"},"https://opensource.google/projects/tesseract")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tesseract-ocr/tesseract"},"https://github.com/tesseract-ocr/tesseract")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/thiagoalessio/tesseract-ocr-for-php"},"https://github.com/thiagoalessio/tesseract-ocr-for-php"))),(0,i.kt)("h5",{id:"note"},"Note"),(0,i.kt)("p",null,"disini saya menggunakan windows sebagai OS, jadi saya termasuk windows users, untuk temen temen lain yang ingin menggunakan OCR wajib menginstall capture2text version 3.9 recommend menggunakan chocolately packages for windows. selengkapnya bisa read di sini"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"full doc about tesseract ocr for php")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/thiagoalessio/tesseract-ocr-for-php#-note-for-windows-users"},"https://github.com/thiagoalessio/tesseract-ocr-for-php#-note-for-windows-users"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"for install choco")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chocolatey.org/install"},"https://chocolatey.org/install"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"install used administrative powershell")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install capture2text --version 3.9\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"file test"),"\nuntuk file test bisa di check di halaman ini"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/naagaraa/metode-skriphit/tree/main/src/example/image"},"image test"))),(0,i.kt)("h3",{id:"image-processing"},"Image Processing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Rescaling | done"),(0,i.kt)("li",{parentName:"ol"},"binarisation | done"),(0,i.kt)("li",{parentName:"ol"},"noise removal | done"),(0,i.kt)("li",{parentName:"ol"},"dilation / erotion | beta"),(0,i.kt)("li",{parentName:"ol"},"rotation / deskewing | not ready"),(0,i.kt)("li",{parentName:"ol"},"borders | not ready"),(0,i.kt)("li",{parentName:"ol"},"transparancy / alpha channel | not ready")),(0,i.kt)("h4",{id:"usage"},"usage"),(0,i.kt)("p",null,"basic usage image processing my librar and you need install imagick php and gdimage2"),(0,i.kt)("h5",{id:"basic-usage"},"basic usage"),(0,i.kt)("p",null,"paramter optional for image processing :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rescaling default"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1200 DPI"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Binarisation default :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"threshold = 0.44"),(0,i.kt)("li",{parentName:"ul"},"channel = 1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"NoiseRemoval"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"quality = 5")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'include "vendor/autoload.php";\n\nuse Nagara\\Src\\Img\\ImgMagic;\nuse Nagara\\Src\\Img\\ImageProcessing;\n\n// convert image to black and white step 1\n$image = new ImgMagic;\n$path =  "kk2.png";\n$image->filter($path, "grayscale");\n\n// image processing step 2 # example 1\n$imgProcess = new ImageProcessing($path);\n$imgProcess->Rescaling(1500)->Binarisation()->NoiseRemoval();\n$imgProcess->showImage(); # return image\n\n\n// image processing step 2 # example 2\n$imgProcess = new ImageProcessing($path);\n$imgProcess->Rescaling(1500); # only rescaling\n$imgProcess->ShowImage(); # return image\n\n')),(0,i.kt)("h5",{id:"get-info"},"get info"),(0,i.kt)("p",null,"basic get information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$path =  "kk2.png";\n$imgProcess = new ImageProcessing($path);\n$imgProcess->GetDimension(); # return only string with and height\n\n')),(0,i.kt)("h5",{id:"mix-with-tesseract-ocr"},"MIX with Tesseract OCR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'\ninclude "vendor/autoload.php";\nuse Nagara\\Src\\Img\\ImgParser;\nuse Nagara\\Src\\Img\\ImgMagic;\nuse Nagara\\Src\\Img\\ImageProcessing;\n\n// convert image to black and white\n$image = new ImgMagic;\n$path =  "indonesia.png";\n$image->filter($path, "grayscale");\n\n// image processing\n$imgProcess = new ImageProcessing($path);\n$imgProcess->Rescaling(1500)->Binarisation()->NoiseRemoval();\n// $imgProcess->showImage();\n\n// ocr\n$img = new ImgParser(\'C:\\Program Files\\Tesseract-OCR\\tesseract.exe\'); # example path exe\'C:\\Program Files\\Tesseract-OCR\\tesseract.exe\'\n$img->parseFile($path, "recognition");\n\n\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mlocati.github.io/articles/php-windows-imagick.html"},"https://mlocati.github.io/articles/php-windows-imagick.html"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://windows.php.net/downloads/pecl/releases/imagick/"},"https://windows.php.net/downloads/pecl/releases/imagick/"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/imagick.requirements.php"},"https://www.php.net/manual/en/imagick.requirements.php"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://windows.php.net/downloads/pecl/"},"https://windows.php.net/downloads/pecl/")),(0,i.kt)("h1",{id:"tesseract-setup"},"tesseract setup"),(0,i.kt)("p",null,"install capture2text for windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"choco install capture2text --version 3.9\n")),(0,i.kt)("p",null,"install tesseract lang"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"choco install tesseract --force `tesseract-lang\n")),(0,i.kt)("h1",{id:"maintenner"},"Maintenner"),(0,i.kt)("p",null,"this code maintenace by me miyuki nagara"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/naagaraa/"},"miyuki nagara"))))}u.isMDXComponent=!0}}]);