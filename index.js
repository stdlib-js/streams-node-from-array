// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).arrayStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i,o=Object.defineProperty,a=Object.prototype,u=a.toString,c=a.__defineGetter__,f=a.__defineSetter__,s=a.__lookupGetter__,l=a.__lookupSetter__;i=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,i,o,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(s.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,p="set"in t,i&&(o||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&c&&c.call(r,e,t.get),p&&f&&f.call(r,e,t.set),r};var p=i;function g(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function h(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var d=Math.floor;function y(r){return d(r)===r}function b(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&y(r.length)&&r.length>=0&&r.length<=9007199254740991}var v=/./;function w(r){return"boolean"==typeof r}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return m&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var O=Object.prototype.hasOwnProperty;function E(r,e){return null!=r&&O.call(r,e)}var S="function"==typeof Symbol?Symbol.toStringTag:"";var T=j()?function(r){var e,t,n;if(null==r)return _.call(r);t=r[S],e=E(r,S);try{r[S]=void 0}catch(e){return _.call(r)}return n=_.call(r),e?r[S]=t:delete r[S],n}:function(r){return _.call(r)},k=Boolean.prototype.toString;var x=j();function I(r){return"object"==typeof r&&(r instanceof Boolean||(x?function(r){try{return k.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===T(r)))}function P(r){return w(r)||I(r)}function V(){return new Function("return this;")()}g(P,"isPrimitive",w),g(P,"isObject",I);var M="object"==typeof self?self:null,A="object"==typeof window?window:null,F="object"==typeof global?global:null;var $=function(r){if(arguments.length){if(!w(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return V()}if(M)return M;if(A)return A;if(F)return F;throw new Error("unexpected error. Unable to resolve global object.")}(),N=$.document&&$.document.childNodes,C=Int8Array;function W(){return/^\s*function\s*([^(]*)/i}var z=/^\s*function\s*([^(]*)/i;g(W,"REGEXP",z);var B=Array.isArray?Array.isArray:function(r){return"[object Array]"===T(r)};function R(r){return null!==r&&"object"==typeof r}function L(r){return R(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function q(r){var e,t,n;if(("Object"===(t=T(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=z.exec(n.toString()))return e[1]}return L(r)?"Buffer":t}g(R,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!B(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(R));var G="function"==typeof v||"object"==typeof C||"function"==typeof N?function(r){return q(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?q(r).toLowerCase():e};function X(r){return"function"===G(r)}var Z,J=Object.getPrototypeOf;Z=X(Object.getPrototypeOf)?J:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===T(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var U=Z;function Y(r){return null==r?null:(r=Object(r),U(r))}function D(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var H=X(Object.assign),K=Object.assign;function Q(r){return Object.keys(Object(r))}var rr,er=void 0!==Object.keys;function tr(r){return"[object Arguments]"===T(r)}rr=function(){return tr(arguments)}();var nr=rr;function ir(r){return"string"==typeof r}var or=String.prototype.valueOf;var ar=j();function ur(r){return"object"==typeof r&&(r instanceof String||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object String]"===T(r)))}function cr(r){return ir(r)||ur(r)}function fr(r){return"number"==typeof r}g(cr,"isPrimitive",ir),g(cr,"isObject",ur);var sr=Number,lr=sr.prototype.toString;var pr=j();function gr(r){return"object"==typeof r&&(r instanceof sr||(pr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===T(r)))}function hr(r){return fr(r)||gr(r)}function dr(r){return r!=r}function yr(r){return fr(r)&&dr(r)}function br(r){return gr(r)&&dr(r.valueOf())}function vr(r){return yr(r)||br(r)}g(hr,"isPrimitive",fr),g(hr,"isObject",gr),g(vr,"isPrimitive",yr),g(vr,"isObject",br);var wr=Number.POSITIVE_INFINITY,mr=sr.NEGATIVE_INFINITY;function jr(r){return r<wr&&r>mr&&y(r)}function _r(r){return fr(r)&&jr(r)}function Or(r){return gr(r)&&jr(r.valueOf())}function Er(r){return _r(r)||Or(r)}g(Er,"isPrimitive",_r),g(Er,"isObject",Or);var Sr=Object.prototype.propertyIsEnumerable;var Tr=!Sr.call("beep","0");function kr(r,e){var t;return null!=r&&(!(t=Sr.call(r,e))&&Tr&&cr(r)?!yr(e=+e)&&_r(e)&&e>=0&&e<r.length:t)}var xr=nr?tr:function(r){return null!==r&&"object"==typeof r&&!B(r)&&"number"==typeof r.length&&y(r.length)&&r.length>=0&&r.length<=4294967295&&E(r,"callee")&&!kr(r,"callee")},Ir=Array.prototype.slice;var Pr=kr((function(){}),"prototype"),Vr=!kr({toString:null},"toString");function Mr(r,e,t){var n,i;if(!b(r)&&!ir(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!_r(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(vr(e)){for(;i<n;i++)if(vr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function Ar(r){return r.constructor&&r.constructor.prototype===r}var Fr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],$r="undefined"==typeof window?void 0:window;var Nr=function(){var r;if("undefined"===G($r))return!1;for(r in $r)try{-1===Mr(Fr,r)&&E($r,r)&&null!==$r[r]&&"object"===G($r[r])&&Ar($r[r])}catch(r){return!0}return!1}(),Cr="undefined"!=typeof window;var Wr,zr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Wr=er?function(){return 2!==(Q(arguments)||"").length}(1,2)?function(r){return xr(r)?Q(Ir.call(r)):Q(r)}:Q:function(r){var e,t,n,i,o,a,u;if(i=[],xr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!E(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!R(r))return i;t=Pr&&n}for(o in r)t&&"prototype"===o||!E(r,o)||i.push(String(o));if(Vr)for(e=function(r){if(!1===Cr&&!Nr)return Ar(r);try{return Ar(r)}catch(r){return!1}}(r),u=0;u<zr.length;u++)a=zr[u],e&&"constructor"===a||!E(r,a)||i.push(String(a));return i};var Br=Wr,Rr=void 0!==Object.getOwnPropertySymbols,Lr=Object.getOwnPropertySymbols;var qr=Rr?function(r){return Lr(Object(r))}:function(){return[]};function Gr(r){var e,t,n;for(e=Br(r),t=qr(r),n=0;n<t.length;n++)kr(r,t[n])&&e.push(t[n]);return e}var Xr=Object;function Zr(r){return"number"==typeof r}function Jr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Ur(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Jr(i):Jr(i)+r,n&&(r="-"+r)),r}var Yr=String.prototype.toLowerCase,Dr=String.prototype.toUpperCase;function Hr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Zr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ur(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ur(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Dr.call(r.specifier)?Dr.call(t):Yr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Kr(r){return"string"==typeof r}var Qr=Math.abs,re=String.prototype.toLowerCase,ee=String.prototype.toUpperCase,te=String.prototype.replace,ne=/e\+(\d)$/,ie=/e-(\d)$/,oe=/^(\d+)$/,ae=/^(\d+)e/,ue=/\.0$/,ce=/\.0*e/,fe=/(\..*[^0])0*e/;function se(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Zr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Qr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=te.call(t,fe,"$1e"),t=te.call(t,ce,"e"),t=te.call(t,ue,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=te.call(t,ne,"e+0$1"),t=te.call(t,ie,"e-0$1"),r.alternate&&(t=te.call(t,oe,"$1."),t=te.call(t,ae,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ee.call(r.specifier)?ee.call(t):re.call(t)}function le(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function pe(r,e,t){var n=e-r.length;return n<0?r:r=t?r+le(n):le(n)+r}var ge=String.fromCharCode,he=isNaN,de=Array.isArray;function ye(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function be(r){var e,t,n,i,o,a,u,c,f;if(!de(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Kr(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=ye(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,he(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,he(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Hr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!he(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=he(o)?String(n.arg):ge(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=se(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ur(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=pe(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var ve,we=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function me(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function je(r){var e,t,n,i;for(t=[],i=0,n=we.exec(r);n;)(e=r.slice(i,we.lastIndex-n[0].length)).length&&t.push(e),t.push(me(n)),i=we.lastIndex,n=we.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function _e(r){return"string"==typeof r}function Oe(r){var e,t,n;if(!_e(r))throw new TypeError(Oe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=je(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return be.apply(null,t)}ve=H?K:function(r){var e,t,n,i,o,a,u;if(null==r)throw new TypeError(Oe("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=Xr(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(t=Gr(Xr(e))).length,u=0;u<i;u++)o[n=t[u]]=e[n];return o};var Ee=ve;function Se(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+r+"`."):null}var Te=Object.create;function ke(){}var xe="function"==typeof Te?Te:function(r){return ke.prototype=r,new ke};function Ie(r,e,t){p(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Pe="function"==typeof Buffer?Buffer:null;var Ve,Me=e.Buffer;Ve=function(){var r,e;if("function"!=typeof Pe)return!1;try{r=L(e="function"==typeof Pe.from?Pe.from([1,2,3,4]):new Pe([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Me:function(){throw new Error("not implemented")};var Ae,Fe=Ve;Ae=X(Fe.from)?function(r,e){if(!ir(r))throw new TypeError(Oe("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!ir(e))throw new TypeError(Oe("invalid argument. Second argument must be a string. Value: `%s`.",e));return Fe.from(r,e)}return Fe.from(r,"utf8")}:function(r,e){if(!ir(r))throw new TypeError(Oe("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!ir(e))throw new TypeError(Oe("invalid argument. Second argument must be a string. Value: `%s`.",e));return new Fe(r,e)}return new Fe(r,"utf8")};var $e=Ae,Ne=t;var Ce={objectMode:!1,encoding:null,sep:"\n",dir:1};var We=Object.prototype;function ze(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!B(r)}(r)&&(!(e=Y(r))||!E(r,"constructor")&&E(e,"constructor")&&X(e.constructor)&&"[object Function]"===T(e.constructor)&&E(e,"isPrototypeOf")&&X(e.isPrototypeOf)&&(e===We||function(r){var e;for(e in r)if(!E(r,e))return!1;return!0}(r)))}function Be(r){return fr(r)&&r>=0}function Re(r){return gr(r)&&r.valueOf()>=0}function Le(r){return Be(r)||Re(r)}function qe(r,e){return ze(e)?E(e,"sep")&&(r.sep=e.sep,!ir(r.sep))?new TypeError(D("0fy2i","sep",r.sep)):E(e,"objectMode")&&(r.objectMode=e.objectMode,!w(r.objectMode))?new TypeError(D("0fy30","objectMode",r.objectMode)):E(e,"encoding")&&(r.encoding=e.encoding,!ir(r.encoding)&&null!==r.encoding)?new TypeError(D("0fy84","encoding",r.encoding)):E(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!Be(r.highWaterMark))?new TypeError(D("0fy4x","highWaterMark",r.highWaterMark)):E(e,"serialize")&&(r.serialize=e.serialize,!X(r.serialize))?new TypeError(D("0fy78","serialize",r.serialize)):E(e,"dir")&&(r.dir=e.dir,1!==r.dir&&-1!==r.dir)?new TypeError(D("0fy37","dir",r.dir)):null:new TypeError(D("0fy2h",e))}g(Le,"isPrimitive",Be),g(Le,"isObject",Re);var Ge=h(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-array-stream"),Xe=r.Readable;function Ze(r,e){var t,n;if(!(this instanceof Ze))return arguments.length>1?new Ze(r,e):new Ze(r);if(!b(r))throw new TypeError(D("0fy2a",r));if(t=Ee({},Ce),arguments.length>1&&(n=qe(t,e)))throw n;return Ge("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),Xe.call(this,t),Ie(this,"_destroyed",!1),g(this,"_objectMode",t.objectMode),g(this,"_sep",t.sep),g(this,"_serialize",t.serialize||JSON.stringify),g(this,"_src",r),g(this,"_stride",t.dir),Ie(this,"_i",0),Ie(this,"_idx",1===t.dir?0:r.length-1),this}return function(r,e){var t=Se(r);if(t)throw t;if(t=Se(e))throw t;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");r.prototype=xe(e.prototype),p(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r})}(Ze,Xe),g(Ze.prototype,"_read",(function(){var r,e,t;if(!this._destroyed)for(r=!0;r;){if(e=null,this._i+=1,this._i>this._src.length)return Ge("Finished iteration."),this.push(null);t=this._src[this._idx],Ge("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),this._idx+=this._stride,!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?$e(t):$e(this._sep+t):L(t)?this._i>1&&(t=Fe.concat([$e(this._sep),t])):e=new Error(D("0fyAu",t))),e?this.emit("error",e):r=this.push(t)}})),g(Ze.prototype,"destroy",(function(r){var e;return this._destroyed?(Ge("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);function n(){r.apply(null,e)}Ne.nextTick(n)}((function(){r&&(Ge("Stream was destroyed due to an error. Error: %s.",function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===T(r))return!0;r=Y(r)}return!1}(r)?r.message:JSON.stringify(r)),e.emit("error",r));Ge("Closing the stream..."),e.emit("close")})),this)})),g(Ze,"objectMode",(function(r,e){var t;if(arguments.length>1){if(!ze(t=e))throw new TypeError(D("0fy2h",t));t=Ee({},e)}else t={};return t.objectMode=!0,new Ze(r,t)})),g(Ze,"factory",(function(r){var e;return e=arguments.length?Ee({},r):{},t;function t(r){return new Ze(r,e)}})),Ze}));
//# sourceMappingURL=index.js.map
