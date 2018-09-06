!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["browser-database"]=e():t["browser-database"]=e()}(window,function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,r){"use strict";function o(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),o(r(4)),o(r(1)),o(r(8))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(5),n=function(){function t(t){void 0===t&&(t={}),this.data={},this.storageKey=t.storageKey||"browser-database",this.load()}return t.prototype.getAll=function(t){var e=this;this.ensureModel(t);var r=Object.keys(this.data[t]).map(function(r){return Object.assign({id:r},e.data[t][r])});return Promise.resolve(r)},t.prototype.getById=function(t,e){if(this.ensureModel(t),void 0===this.data[t][e])return Promise.reject(new Error("Item Not Found"));var r=Object.assign({id:e},this.data[t][e]);return Promise.resolve(r)},t.prototype.insert=function(t,e){var r=this;this.ensureModel(t);var n=o.v4();return this.data[t][n]=e,this.save().then(function(){return r.getById(t,n)})},t.prototype.update=function(t,e,r){var o=this;this.ensureModel(t);var n=this.data[t][e];return void 0===n?Promise.reject(new Error("Item Not Found")):(Object.assign(n,r),this.save().then(function(){return o.getById(t,n.id)}))},t.prototype.remove=function(t,e){this.ensureModel(t);var r=this.data[t][e];return void 0===r?Promise.reject(new Error("Item Not Found")):(delete this.data[t][e],this.save().then(function(){return Promise.resolve(r)}))},t.prototype.save=function(){return Promise.resolve(this.data)},t.prototype.load=function(){return Promise.resolve(this.data)},t.prototype.ensureModel=function(t){void 0===this.data[t]&&(this.data[t]={})},t}();e.Storage=n},function(t,e){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var o=new Uint8Array(16);t.exports=function(){return r(o),o}}else{var n=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),n[e]=t>>>((3&e)<<3)&255;return n}}},function(t,e){for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);t.exports=function(t,e){var o=e||0,n=r;return[n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]]].join("")}},function(t,e,r){"use strict";var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.save=function(){try{return window.localStorage.setItem(this.storageKey,JSON.stringify(this.data)),Promise.resolve(this.data)}catch(t){return Promise.reject(new Error("Error saving to localStorage"))}},e.prototype.load=function(){try{return this.data=JSON.parse(window.localStorage.getItem(this.storageKey)||"{}"),Promise.resolve(this.data)}catch(t){return Promise.reject("Error reading from localStorage")}},e}(r(1).Storage);e.LocalStorage=n},function(t,e,r){var o=r(6),n=r(7),i=n;i.v1=o,i.v4=n,t.exports=i},function(t,e,r){var o,n,i=r(2),a=r(3),s=0,u=0;t.exports=function(t,e,r){var c=e&&r||0,f=e||[],d=(t=t||{}).node||o,l=void 0!==t.clockseq?t.clockseq:n;if(null==d||null==l){var p=i();null==d&&(d=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==l&&(l=n=16383&(p[6]<<8|p[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),y=void 0!==t.nsecs?t.nsecs:u+1,h=v-s+(y-u)/1e4;if(h<0&&void 0===t.clockseq&&(l=l+1&16383),(h<0||v>s)&&void 0===t.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=v,u=y,n=l;var g=(1e4*(268435455&(v+=122192928e5))+y)%4294967296;f[c++]=g>>>24&255,f[c++]=g>>>16&255,f[c++]=g>>>8&255,f[c++]=255&g;var m=v/4294967296*1e4&268435455;f[c++]=m>>>8&255,f[c++]=255&m,f[c++]=m>>>24&15|16,f[c++]=m>>>16&255,f[c++]=l>>>8|128,f[c++]=255&l;for(var b=0;b<6;++b)f[c+b]=d[b];return e||a(f)}},function(t,e,r){var o=r(2),n=r(3);t.exports=function(t,e,r){var i=e&&r||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var a=(t=t||{}).random||(t.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e)for(var s=0;s<16;++s)e[i+s]=a[s];return e||n(a)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),n=function(){function t(t){void 0===t&&(t={}),this.storages={localStorage:o.LocalStorage},this.storage=new this.storages[t.storageType||"localStorage"]({storageKey:t.storageKey||"browser-database"})}return t.prototype.getAll=function(t){return this.storage.getAll(t)},t.prototype.getById=function(t,e){return this.storage.getById(t,e)},t.prototype.insert=function(t,e){return this.storage.insert(t,e)},t.prototype.update=function(t,e,r){return this.storage.update(t,e,r)},t.prototype.remove=function(t,e){return this.storage.remove(t,e)},t}();e.BrowserDatabase=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}(r(0))}])});