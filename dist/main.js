(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),c=n(645),a=n.n(c),i=n(667),l=n.n(i),s=new URL(n(131),n.b),d=a()(r()),u=l()(s);d.push([e.id,`html {\n    font-size: 24px;\n}\n\nbody {\n    background-image: url(${u});\n}\n\nh1 {\n    color:darkorange;\n}\n\n.welcomeDiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5rem;\n}\n\n.tabDiv {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n}\n\n.tabButton {\n    color:yellow;\n    background-color: blueviolet;\n    border: none;\n    border-radius: 5px;\n    font-size: 1.2rem;\n}\n\n.tabButton:hover {\n    background-color: black;\n    color: yellow;\n}\n\n.tabcontent {\n    \n}\n\n#content {\n    display: flex; \n    flex-direction: column; \n    gap: 10vh;\n}`,""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var l=e[i],s=o.base?l[0]+o.base:l[0],d=c[s]||0,u="".concat(s," ").concat(d);c[s]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var l=o(e,r),s=0;s<c.length;s++){var d=n(c[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},131:(e,t,n)=>{e.exports=n.p+"658fe64c0c3f43d6fa47.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),c=n(569),a=n.n(c),i=n(565),l=n.n(i),s=n(216),d=n.n(s),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y=n.p+"d567de44ecb292dc90d7.png",h=n.p+"822d1c65efc982b289bc.png",v=n.p+"e434490e75ebe1e0b69b.png";!function(){const e=document.getElementById("fixedDiv"),t=document.createElement("div");t.className="welcomeDiv";const n=document.createElement("h1");n.textContent="WELCOME TO ŞEN'S VEGAN HEAVEN!",t.appendChild(n),e.appendChild(t)}();const g=document.getElementById("content"),C=document.getElementById("fixedDiv"),b=document.createElement("button");b.textContent="CONTACT",b.className="tabButton";const x=document.createElement("button");x.textContent="HOME",x.className="tabButton";const E=document.createElement("button");E.textContent="MENU",E.className="tabButton";const w=document.createElement("div");w.className="tabDiv",w.appendChild(x),w.appendChild(E),w.appendChild(b),C.appendChild(w);const N=document.createElement("div");N.className="tabContent",g.appendChild(N);const I={once:!0};function k(){for(;N.firstChild;)N.removeChild(N.firstChild);!function(){const e=document.getElementById("content").getElementsByClassName("tabContent")[0];e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.gap="1.0rem",e.style.fontSize="1.2rem",e.style.color="yellowgreen",e.style.fontWeight="bold";const t=document.createElement("div");t.textContent="Address: Restaurants District, Soup Street, 18/7 Lovelycountry.",e.appendChild(t);const n=document.createElement("div");n.textContent="E-mail: vegan.heaven@mailserver.com",e.appendChild(n);const o=document.createElement("div");o.textContent="Gsm: 34290342",e.appendChild(o)}(),x.addEventListener("click",D,I),E.addEventListener("click",S,I)}function D(){for(;N.firstChild;)N.removeChild(N.firstChild);!function(){const e=document.getElementById("content").getElementsByClassName("tabContent")[0];e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.gap="1.0rem",e.style.fontSize="1.2rem",e.style.color="yellowgreen",e.style.fontWeight="bold";const t=document.createElement("div");t.style.width="33vw",t.style.display="flex",t.style.flexDirection="column",t.style.gap="7px";const n=document.createElement("div");n.textContent="ORGANIC INTRO";const o=document.createElement("div");o.textContent="Şen's Vegan Heaven offers the best vegan menu. Fresh, \n    healthy and delicious food look forward to you. Of course, there are tasty \n    drinks, as well. Do not hesitate to come to the address in the contact tab \n    whenever you request a really great vegan menu.",o.style.textAlign="justify",t.appendChild(n),t.appendChild(o),e.appendChild(t);const r=document.createElement("div");r.style.width="33vw",r.style.display="flex",r.style.flexDirection="column",r.style.gap="7px";const c=document.createElement("div");c.textContent="WORKING HOURS",r.appendChild(c);const a=document.createElement("div");a.textContent="From 9:00 am to 7:00 pm throughout the week.",a.style.textAlign="justify",r.appendChild(a),e.appendChild(r)}(),b.addEventListener("click",k,I),E.addEventListener("click",S,I)}function S(){for(;N.firstChild;)N.removeChild(N.firstChild);!function(){const e=document.getElementById("content").getElementsByClassName("tabContent")[0];e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.gap="1.0rem",e.style.fontSize="1.5rem",e.style.color="yellowgreen",e.style.fontWeight="bold";let t=[];for(let e=0;e<3;e++)t.push(document.createElement("div"));const n=["DishName1","DishName2","DishName3"];let o=[y,h,v];for(let r=0;r<3;r++){t[r].style.display="flex",t[r].style.flexDirection="column",t[r].style.justifyContent="center",t[r].style.alignItems="center";const c=document.createElement("div");c.textContent=n[r],t[r].appendChild(c);const a=new Image;a.src=o[r],t[r].appendChild(a),e.appendChild(t[r])}}(),b.addEventListener("click",k,I),x.addEventListener("click",D,I)}b.addEventListener("click",k,I),x.addEventListener("click",D,I),E.addEventListener("click",S,I)})()})();