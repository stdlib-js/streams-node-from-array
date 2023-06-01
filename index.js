// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).arrayStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,a=Object.prototype,u=a.toString,c=a.__defineGetter__,f=a.__defineSetter__,l=a.__lookupGetter__,s=a.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,o,i,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(l.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,p="set"in t,o&&(i||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&c&&c.call(r,e,t.get),p&&f&&f.call(r,e,t.set),r};var p=o;function y(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function d(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var h=Math.floor;function g(r){return h(r)===r}function v(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&g(r.length)&&r.length>=0&&r.length<=9007199254740991}var b=/./;function w(r){return"boolean"==typeof r}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return m&&"symbol"==typeof Symbol.toStringTag}var A=Object.prototype.toString;var O=Object.prototype.hasOwnProperty;function E(r,e){return null!=r&&O.call(r,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var S=j()?function(r){var e,t,n;if(null==r)return A.call(r);t=r[_],e=E(r,_);try{r[_]=void 0}catch(e){return A.call(r)}return n=A.call(r),e?r[_]=t:delete r[_],n}:function(r){return A.call(r)},I=Boolean.prototype.toString;var T=j();function x(r){return"object"==typeof r&&(r instanceof Boolean||(T?function(r){try{return I.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===S(r)))}function k(r){return w(r)||x(r)}function F(){return new Function("return this;")()}y(k,"isPrimitive",w),y(k,"isObject",x);var U="object"==typeof self?self:null,P="object"==typeof window?window:null,M="object"==typeof global?global:null;var V=function(r){if(arguments.length){if(!w(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return F()}if(U)return U;if(P)return P;if(M)return M;throw new Error("unexpected error. Unable to resolve global object.")}(),$=V.document&&V.document.childNodes,C=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var z=/^\s*function\s*([^(]*)/i;y(N,"REGEXP",z);var B=Array.isArray?Array.isArray:function(r){return"[object Array]"===S(r)};function W(r){return null!==r&&"object"==typeof r}function R(r){return W(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function L(r){var e,t,n;if(("Object"===(t=S(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=z.exec(n.toString()))return e[1]}return R(r)?"Buffer":t}y(W,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!B(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(W));var G="function"==typeof b||"object"==typeof C||"function"==typeof $?function(r){return L(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?L(r).toLowerCase():e};function q(r){return"function"===G(r)}var X,D=Object.getPrototypeOf;X=q(Object.getPrototypeOf)?D:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===S(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Z=X;function J(r){return null==r?null:(r=Object(r),Z(r))}function Y(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===S(r))return!0;r=J(r)}return!1}function H(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function K(r){return"number"==typeof r}var Q=Number,rr=Q.prototype.toString;var er=j();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===S(r)))}function nr(r){return K(r)||tr(r)}y(nr,"isPrimitive",K),y(nr,"isObject",tr);var or=Number.POSITIVE_INFINITY,ir=Q.NEGATIVE_INFINITY;function ar(r){return r<or&&r>ir&&g(r)}function ur(r){return K(r)&&ar(r)}function cr(r){return tr(r)&&ar(r.valueOf())}function fr(r){return ur(r)||cr(r)}function lr(r){return ur(r)&&r>=0}function sr(r){return cr(r)&&r.valueOf()>=0}function pr(r){return lr(r)||sr(r)}function yr(r){return"string"==typeof r}y(fr,"isPrimitive",ur),y(fr,"isObject",cr),y(pr,"isPrimitive",lr),y(pr,"isObject",sr);var dr=String.prototype.valueOf;var hr=j();function gr(r){return"object"==typeof r&&(r instanceof String||(hr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===S(r)))}function vr(r){return yr(r)||gr(r)}function br(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function wr(r){return"number"==typeof r}function mr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function jr(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+mr(o):mr(o)+r,n&&(r="-"+r)),r}y(vr,"isPrimitive",yr),y(vr,"isObject",gr),y(br,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var Ar=String.prototype.toLowerCase,Or=String.prototype.toUpperCase;function Er(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!wr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=jr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=jr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Or.call(r.specifier)?Or.call(t):Ar.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _r(r){return"string"==typeof r}var Sr=Math.abs,Ir=String.prototype.toLowerCase,Tr=String.prototype.toUpperCase,xr=String.prototype.replace,kr=/e\+(\d)$/,Fr=/e-(\d)$/,Ur=/^(\d+)$/,Pr=/^(\d+)e/,Mr=/\.0$/,Vr=/\.0*e/,$r=/(\..*[^0])0*e/;function Cr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!wr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Sr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=xr.call(t,$r,"$1e"),t=xr.call(t,Vr,"e"),t=xr.call(t,Mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=xr.call(t,kr,"e+0$1"),t=xr.call(t,Fr,"e-0$1"),r.alternate&&(t=xr.call(t,Ur,"$1."),t=xr.call(t,Pr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Tr.call(r.specifier)?Tr.call(t):Ir.call(t)}function Nr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function zr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Nr(n):Nr(n)+r}var Br=String.fromCharCode,Wr=isNaN,Rr=Array.isArray;function Lr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gr(r){var e,t,n,o,i,a,u,c,f;if(!Rr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(_r(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Lr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Wr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Wr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Er(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Wr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Wr(i)?String(n.arg):Br(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Cr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=jr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=zr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var qr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Dr(r){var e,t,n,o;for(t=[],o=0,n=qr.exec(r);n;)(e=r.slice(o,qr.lastIndex-n[0].length)).length&&t.push(e),t.push(Xr(n)),o=qr.lastIndex,n=qr.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function Zr(r){return"string"==typeof r}function Jr(r){var e,t,n;if(!Zr(r))throw new TypeError(Jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Dr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Gr.apply(null,t)}function Yr(r){return r!=r}function Hr(r){return K(r)&&Yr(r)}function Kr(r){return tr(r)&&Yr(r.valueOf())}function Qr(r){return Hr(r)||Kr(r)}function re(r,e,t){var n,o;if(!v(r)&&!yr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!ur(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Qr(e)){for(;o<n;o++)if(Qr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function ee(r){return Object.keys(Object(r))}y(Qr,"isPrimitive",Hr),y(Qr,"isObject",Kr);var te,ne=void 0!==Object.keys;function oe(r){return"[object Arguments]"===S(r)}te=function(){return oe(arguments)}();var ie=te,ae=Object.prototype.propertyIsEnumerable;var ue=!ae.call("beep","0");function ce(r,e){var t;return null!=r&&(!(t=ae.call(r,e))&&ue&&vr(r)?!Hr(e=+e)&&ur(e)&&e>=0&&e<r.length:t)}var fe=4294967295;var le=ie?oe:function(r){return null!==r&&"object"==typeof r&&!B(r)&&"number"==typeof r.length&&g(r.length)&&r.length>=0&&r.length<=fe&&E(r,"callee")&&!ce(r,"callee")},se=Array.prototype.slice;var pe=ce((function(){}),"prototype"),ye=!ce({toString:null},"toString");function de(r){return r.constructor&&r.constructor.prototype===r}var he=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ge="undefined"==typeof window?void 0:window;var ve=function(){var r;if("undefined"===G(ge))return!1;for(r in ge)try{-1===re(he,r)&&E(ge,r)&&null!==ge[r]&&"object"===G(ge[r])&&de(ge[r])}catch(r){return!0}return!1}(),be="undefined"!=typeof window;var we,me=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];we=ne?function(){return 2!==(ee(arguments)||"").length}(1,2)?function(r){return le(r)?ee(se.call(r)):ee(r)}:ee:function(r){var e,t,n,o,i,a,u;if(o=[],le(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!E(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!W(r))return o;t=pe&&n}for(i in r)t&&"prototype"===i||!E(r,i)||o.push(String(i));if(ye)for(e=function(r){if(!1===be&&!ve)return de(r);try{return de(r)}catch(r){return!1}}(r),u=0;u<me.length;u++)a=me[u],e&&"constructor"===a||!E(r,a)||o.push(String(a));return o};var je=we,Ae=void 0!==Object.getOwnPropertyNames,Oe=Object.getOwnPropertyNames;var Ee=Ae?function(r){return Oe(Object(r))}:function(r){return je(Object(r))},_e=void 0!==Object.getOwnPropertyDescriptor,Se=Object.getOwnPropertyDescriptor;var Ie=_e?function(r,e){var t;return null==r||void 0===(t=Se(r,e))?null:t}:function(r,e){return E(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},Te="function"==typeof Buffer?Buffer:null;var xe,ke=e.Buffer;xe=function(){var r,e;if("function"!=typeof Te)return!1;try{r=R(e="function"==typeof Te.from?Te.from([1,2,3,4]):new Te([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?ke:function(){throw new Error("not implemented")};var Fe=xe;var Ue=q(Fe.from)?function(r){if(!R(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return Fe.from(r)}:function(r){if(!R(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new Fe(r)},Pe="function"==typeof Int8Array;var Me="function"==typeof Int8Array?Int8Array:null;var Ve,$e="function"==typeof Int8Array?Int8Array:void 0;Ve=function(){var r,e,t;if("function"!=typeof Me)return!1;try{e=new Me([1,3.14,-3.14,128]),t=e,r=(Pe&&t instanceof Int8Array||"[object Int8Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?$e:function(){throw new Error("not implemented")};var Ce=Ve,Ne="function"==typeof Uint8Array;var ze="function"==typeof Uint8Array?Uint8Array:null;var Be,We="function"==typeof Uint8Array?Uint8Array:void 0;Be=function(){var r,e,t;if("function"!=typeof ze)return!1;try{e=new ze(e=[1,3.14,-3.14,256,257]),t=e,r=(Ne&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?We:function(){throw new Error("not implemented")};var Re=Be,Le="function"==typeof Uint8ClampedArray;var Ge="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var qe,Xe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;qe=function(){var r,e,t;if("function"!=typeof Ge)return!1;try{e=new Ge([-1,0,1,3.14,4.99,255,256]),t=e,r=(Le&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===S(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Xe:function(){throw new Error("not implemented")};var De=qe,Ze="function"==typeof Int16Array;var Je="function"==typeof Int16Array?Int16Array:null;var Ye,He="function"==typeof Int16Array?Int16Array:void 0;Ye=function(){var r,e,t;if("function"!=typeof Je)return!1;try{e=new Je([1,3.14,-3.14,32768]),t=e,r=(Ze&&t instanceof Int16Array||"[object Int16Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?He:function(){throw new Error("not implemented")};var Ke=Ye,Qe="function"==typeof Uint16Array;var rt="function"==typeof Uint16Array?Uint16Array:null;var et,tt="function"==typeof Uint16Array?Uint16Array:void 0;et=function(){var r,e,t;if("function"!=typeof rt)return!1;try{e=new rt(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Qe&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tt:function(){throw new Error("not implemented")};var nt=et,ot="function"==typeof Int32Array;var it="function"==typeof Int32Array?Int32Array:null;var at,ut="function"==typeof Int32Array?Int32Array:void 0;at=function(){var r,e,t;if("function"!=typeof it)return!1;try{e=new it([1,3.14,-3.14,2147483648]),t=e,r=(ot&&t instanceof Int32Array||"[object Int32Array]"===S(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?ut:function(){throw new Error("not implemented")};var ct=at,ft="function"==typeof Uint32Array;var lt="function"==typeof Uint32Array?Uint32Array:null;var st,pt="function"==typeof Uint32Array?Uint32Array:void 0;st=function(){var r,e,t;if("function"!=typeof lt)return!1;try{e=new lt(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ft&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pt:function(){throw new Error("not implemented")};var yt=st,dt="function"==typeof Float32Array;var ht="function"==typeof Float32Array?Float32Array:null;var gt,vt="function"==typeof Float32Array?Float32Array:void 0;gt=function(){var r,e,t;if("function"!=typeof ht)return!1;try{e=new ht([1,3.14,-3.14,5e40]),t=e,r=(dt&&t instanceof Float32Array||"[object Float32Array]"===S(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===or}catch(e){r=!1}return r}()?vt:function(){throw new Error("not implemented")};var bt=gt,wt="function"==typeof Float64Array;var mt="function"==typeof Float64Array?Float64Array:null;var jt,At="function"==typeof Float64Array?Float64Array:void 0;jt=function(){var r,e,t;if("function"!=typeof mt)return!1;try{e=new mt([1,3.14,-3.14,NaN]),t=e,r=(wt&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?At:function(){throw new Error("not implemented")};var Ot=jt;function Et(r){return new Ce(r)}function _t(r){return new Re(r)}function St(r){return new De(r)}function It(r){return new Ke(r)}function Tt(r){return new nt(r)}function xt(r){return new ct(r)}function kt(r){return new yt(r)}function Ft(r){return new bt(r)}function Ut(r){return new Ot(r)}var Pt={int8array:Et,uint8array:_t,uint8clampedarray:St,int16array:It,uint16array:Tt,int32array:xt,uint32array:kt,float32array:Ft,float64array:Ut};function Mt(r,e,t,n,o){var i,a,u,c,f,l,s,y,d,h;if(o-=1,"object"!=typeof r||null===r)return r;if(R(r))return Ue(r);if(Y(r))return function(r){var e,t,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),e=je(r),a=0;a<e.length;a++)o=e[a],E(t=Ie(r,o),"value")&&(n=B(r[o])?[]:{},t.value=Mt(r[o],n,u,c,-1)),p(i,o,t);return i}(r);if("date"===(u=G(r)))return new Date(+r);if("regexp"===u)return function(r){if(!yr(r))throw new TypeError(Jr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=Pt[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,t,n,o,i,a,u,c;for(e=[],o=[],u=Object.create(J(r)),e.push(r),o.push(u),t=Ee(r),c=0;c<t.length;c++)n=t[c],E(i=Ie(r,n),"value")&&(a=B(r[n])?[]:{},i.value=Mt(r[n],a,e,o,-1)),p(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=je(r),o>0)for(i=u,h=0;h<a.length;h++)y=r[l=a[h]],u=G(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||R(y)?"object"===i?(E(c=Ie(r,l),"value")&&(c.value=Mt(y)),p(e,l,c)):e[l]=Mt(y):-1===(d=re(t,y))?(s=B(y)?new Array(y.length):{},t.push(y),n.push(s),"array"===i?e[l]=Mt(y,s,t,n,o):(E(c=Ie(r,l),"value")&&(c.value=Mt(y,s,t,n,o)),p(e,l,c))):e[l]=n[d];else if("array"===u)for(h=0;h<a.length;h++)e[l=a[h]]=r[l];else for(h=0;h<a.length;h++)l=a[h],c=Ie(r,l),p(e,l,c);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function Vt(r,e){var t;if(arguments.length>1){if(!lr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(0===e)return r}else e=or;return Mt(r,t=B(r)?new Array(r.length):{},[r],[t],e)}function $t(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+r+"`."):null}var Ct=Object.create;function Nt(){}var zt,Bt="function"==typeof Ct?Ct:function(r){return Nt.prototype=r,new Nt};function Wt(r,e,t){p(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}zt=q(Fe.from)?function(r,e){if(!yr(r))throw new TypeError(Jr("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!yr(e))throw new TypeError(Jr("invalid argument. Second argument must be a string. Value: `%s`.",e));return Fe.from(r,e)}return Fe.from(r,"utf8")}:function(r,e){if(!yr(r))throw new TypeError(Jr("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!yr(e))throw new TypeError(Jr("invalid argument. Second argument must be a string. Value: `%s`.",e));return new Fe(r,e)}return new Fe(r,"utf8")};var Rt=zt,Lt=t;var Gt={objectMode:!1,encoding:null,sep:"\n",dir:1};var qt=Object.prototype;function Xt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!B(r)}(r)&&(!(e=J(r))||!E(r,"constructor")&&E(e,"constructor")&&q(e.constructor)&&"[object Function]"===S(e.constructor)&&E(e,"isPrototypeOf")&&q(e.isPrototypeOf)&&(e===qt||function(r){var e;for(e in r)if(!E(r,e))return!1;return!0}(r)))}function Dt(r){return K(r)&&r>=0}function Zt(r){return tr(r)&&r.valueOf()>=0}function Jt(r){return Dt(r)||Zt(r)}function Yt(r,e){return Xt(e)?E(e,"sep")&&(r.sep=e.sep,!yr(r.sep))?new TypeError(H("0fy2i","sep",r.sep)):E(e,"objectMode")&&(r.objectMode=e.objectMode,!w(r.objectMode))?new TypeError(H("0fy30","objectMode",r.objectMode)):E(e,"encoding")&&(r.encoding=e.encoding,!yr(r.encoding)&&null!==r.encoding)?new TypeError(H("0fy84","encoding",r.encoding)):E(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!Dt(r.highWaterMark))?new TypeError(H("0fy4x","highWaterMark",r.highWaterMark)):E(e,"serialize")&&(r.serialize=e.serialize,!q(r.serialize))?new TypeError(H("0fy78","serialize",r.serialize)):E(e,"dir")&&(r.dir=e.dir,1!==r.dir&&-1!==r.dir)?new TypeError(H("0fy37","dir",r.dir)):null:new TypeError(H("0fy2h",e))}y(Jt,"isPrimitive",Dt),y(Jt,"isObject",Zt);var Ht=d(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-array-stream"),Kt=r.Readable;function Qt(r,e){var t,n;if(!(this instanceof Qt))return arguments.length>1?new Qt(r,e):new Qt(r);if(!v(r))throw new TypeError(H("0fy2a",r));if(t=Vt(Gt),arguments.length>1&&(n=Yt(t,e)))throw n;return Ht("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),Kt.call(this,t),Wt(this,"_destroyed",!1),y(this,"_objectMode",t.objectMode),y(this,"_sep",t.sep),y(this,"_serialize",t.serialize||JSON.stringify),y(this,"_src",r),y(this,"_stride",t.dir),Wt(this,"_i",0),Wt(this,"_idx",1===t.dir?0:r.length-1),this}return function(r,e){var t=$t(r);if(t)throw t;if(t=$t(e))throw t;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");r.prototype=Bt(e.prototype),p(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r})}(Qt,Kt),y(Qt.prototype,"_read",(function(){var r,e,t;if(!this._destroyed)for(r=!0;r;){if(e=null,this._i+=1,this._i>this._src.length)return Ht("Finished iteration."),this.push(null);t=this._src[this._idx],Ht("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),this._idx+=this._stride,!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?Rt(t):Rt(this._sep+t):R(t)?this._i>1&&(t=Fe.concat([Rt(this._sep),t])):e=new Error(H("0fyAu",t))),e?this.emit("error",e):r=this.push(t)}})),y(Qt.prototype,"destroy",(function(r){var e;return this._destroyed?(Ht("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);function n(){r.apply(null,e)}Lt.nextTick(n)}((function(){r&&(Ht("Stream was destroyed due to an error. Error: %s.",Y(r)?r.message:JSON.stringify(r)),e.emit("error",r));Ht("Closing the stream..."),e.emit("close")})),this)})),y(Qt,"objectMode",(function(r,e){var t;if(arguments.length>1){if(!Xt(t=e))throw new TypeError(H("0fy2h",t));t=Vt(e,1)}else t={};return t.objectMode=!0,new Qt(r,t)})),y(Qt,"factory",(function(r){var e;return e=arguments.length?Vt(r,1):{},t;function t(r){return new Qt(r,e)}})),Qt}));
//# sourceMappingURL=index.js.map