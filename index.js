// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["stream","buffer","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).arrayStream=e(r.require$$0$3,r.require$$0$1,r.require$$0$2)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var c=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):c.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,h=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function _(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,j,"$1e"),t=h.call(t,m,"e"),t=h.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,d,"e+0$1"),t=h.call(t,y,"e-0$1"),r.alternate&&(t=h.call(t,b,"$1."),t=h.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function O(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,S=Array.isArray;function T(r){return r!=r}function M(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,o,a,c,f,l,p,g,h,d;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=M(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+O(d):O(d)+p)),a+=n.arg||"",c+=1}return a}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){var e,t;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var A,F=Object.prototype,$=F.toString,N=F.__defineGetter__,W=F.__defineSetter__,C=F.__lookupGetter__,z=F.__lookupSetter__;A=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&W&&W.call(r,e,t.set),r};var B=A;function R(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var q=Math.floor;function G(r){return q(r)===r}var X=9007199254740991;function Z(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&G(r.length)&&r.length>=0&&r.length<=X}var J=Object,U=/./;function Y(r){return"boolean"==typeof r}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function rr(r,e){return null!=r&&Q.call(r,e)}var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=H()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[tr],e=rr(r,tr);try{r[tr]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return K.call(r)},ir=Boolean,or=Boolean.prototype.toString;var ar=H();function ur(r){return"object"==typeof r&&(r instanceof ir||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function cr(r){return Y(r)||ur(r)}R(cr,"isPrimitive",Y),R(cr,"isObject",ur);var fr="object"==typeof self?self:null,sr="object"==typeof window?window:null,lr="object"==typeof global?global:null,pr="object"==typeof globalThis?globalThis:null;var gr=function(r){if(arguments.length){if(!Y(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(pr)return pr;if(fr)return fr;if(sr)return sr;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}(),hr=gr.document&&gr.document.childNodes,dr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var br=/^\s*function\s*([^(]*)/i;R(yr,"REGEXP",br);var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};function wr(r){return null!==r&&"object"==typeof r}function mr(r){return wr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function jr(r){var e,t,n;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t}R(wr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(wr));var _r="function"==typeof U||"object"==typeof dr||"function"==typeof hr?function(r){return jr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e};function Or(r){return"function"===_r(r)}var Er,Sr=Object.getPrototypeOf;Er=Or(Object.getPrototypeOf)?Sr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===nr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=Er;function Mr(r){return null==r?null:(r=J(r),Tr(r))}function kr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var xr=Or(Object.assign),Vr=Object.assign;function Ir(r){return Object.keys(Object(r))}var Pr,Ar=void 0!==Object.keys;function Fr(r){return"[object Arguments]"===nr(r)}Pr=function(){return Fr(arguments)}();var $r=Pr;function Nr(r){return"string"==typeof r}var Wr=String.prototype.valueOf;var Cr=H();function zr(r){return"object"==typeof r&&(r instanceof String||(Cr?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object String]"===nr(r)))}function Br(r){return Nr(r)||zr(r)}function Rr(r){return"number"==typeof r}R(Br,"isPrimitive",Nr),R(Br,"isObject",zr);var Lr=Number,qr=Lr.prototype.toString;var Gr=H();function Xr(r){return"object"==typeof r&&(r instanceof Lr||(Gr?function(r){try{return qr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function Zr(r){return Rr(r)||Xr(r)}function Jr(r){return r!=r}function Ur(r){return Rr(r)&&Jr(r)}function Yr(r){return Xr(r)&&Jr(r.valueOf())}function Dr(r){return Ur(r)||Yr(r)}R(Zr,"isPrimitive",Rr),R(Zr,"isObject",Xr),R(Dr,"isPrimitive",Ur),R(Dr,"isObject",Yr);var Hr=Number.POSITIVE_INFINITY,Kr=Lr.NEGATIVE_INFINITY;function Qr(r){return r<Hr&&r>Kr&&G(r)}function re(r){return Rr(r)&&Qr(r)}function ee(r){return Xr(r)&&Qr(r.valueOf())}function te(r){return re(r)||ee(r)}R(te,"isPrimitive",re),R(te,"isObject",ee);var ne=Object.prototype.propertyIsEnumerable;var ie=!ne.call("beep","0");function oe(r,e){var t;return null!=r&&(!(t=ne.call(r,e))&&ie&&Br(r)?!Ur(e=+e)&&re(e)&&e>=0&&e<r.length:t)}var ae=$r?Fr:function(r){return null!==r&&"object"==typeof r&&!vr(r)&&"number"==typeof r.length&&G(r.length)&&r.length>=0&&r.length<=4294967295&&rr(r,"callee")&&!oe(r,"callee")},ue=Array.prototype.slice;var ce=oe((function(){}),"prototype"),fe=!oe({toString:null},"toString");function se(r,e,t){var n,i;if(!Z(r)&&!Nr(r))throw new TypeError(P("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!re(t))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Dr(e)){for(;i<n;i++)if(Dr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function le(r){return r.constructor&&r.constructor.prototype===r}var pe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ge="undefined"==typeof window?void 0:window;var he=function(){var r;if("undefined"===_r(ge))return!1;for(r in ge)try{-1===se(pe,r)&&rr(ge,r)&&null!==ge[r]&&"object"===_r(ge[r])&&le(ge[r])}catch(r){return!0}return!1}(),de="undefined"!=typeof window;var ye,be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ye=Ar?function(){return 2!==(Ir(arguments)||"").length}(1,2)?function(r){return ae(r)?Ir(ue.call(r)):Ir(r)}:Ir:function(r){var e,t,n,i,o,a,u;if(i=[],ae(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!rr(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!wr(r))return i;t=ce&&n}for(o in r)t&&"prototype"===o||!rr(r,o)||i.push(String(o));if(fe)for(e=function(r){if(!1===de&&!he)return le(r);try{return le(r)}catch(r){return!1}}(r),u=0;u<be.length;u++)a=be[u],e&&"constructor"===a||!rr(r,a)||i.push(String(a));return i};var ve=ye,we=void 0!==Object.getOwnPropertySymbols,me=J.getOwnPropertySymbols;var je,_e=we?function(r){return me(J(r))}:function(){return[]};function Oe(r){var e,t,n;for(e=ve(r),t=_e(r),n=0;n<t.length;n++)oe(r,t[n])&&e.push(t[n]);return e}je=xr?Vr:function(r){var e,t,n,i,o,a,u;if(null==r)throw new TypeError(P("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=J(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(t=Oe(J(e))).length,u=0;u<i;u++)o[n=t[u]]=e[n];return o};var Ee=je;function Se(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError(P("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",r)):null}var Te=Object.create;function Me(){}var ke="function"==typeof Te?Te:function(r){return Me.prototype=r,new Me};function xe(r,e,t){B(r,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Ve="function"==typeof Buffer?Buffer:null;var Ie,Pe=e.Buffer;Ie=function(){var r,e;if("function"!=typeof Ve)return!1;try{r=mr(e="function"==typeof Ve.from?Ve.from([1,2,3,4]):new Ve([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Pe:function(){throw new Error("not implemented")};var Ae,Fe=Ie;Ae=Or(Fe.from)?function(r,e){if(!Nr(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!Nr(e))throw new TypeError(P("invalid argument. Second argument must be a string. Value: `%s`.",e));return Fe.from(r,e)}return Fe.from(r,"utf8")}:function(r,e){if(!Nr(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!Nr(e))throw new TypeError(P("invalid argument. Second argument must be a string. Value: `%s`.",e));return new Fe(r,e)}return new Fe(r,"utf8")};var $e=Ae,Ne=t;var We={objectMode:!1,encoding:null,sep:"\n",dir:1};var Ce=Object.prototype;function ze(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(!(e=Mr(r))||!rr(r,"constructor")&&rr(e,"constructor")&&Or(e.constructor)&&"[object Function]"===nr(e.constructor)&&rr(e,"isPrototypeOf")&&Or(e.isPrototypeOf)&&(e===Ce||function(r){var e;for(e in r)if(!rr(r,e))return!1;return!0}(r)))}function Be(r){return Rr(r)&&r>=0}function Re(r){return Xr(r)&&r.valueOf()>=0}function Le(r){return Be(r)||Re(r)}R(Le,"isPrimitive",Be),R(Le,"isObject",Re);var qe=L(Object.freeze({__proto__:null,default:()=>()=>{}}))("from-array-stream"),Ge=r.Readable;function Xe(r,e){var t,n;if(!(this instanceof Xe))return arguments.length>1?new Xe(r,e):new Xe(r);if(!Z(r))throw new TypeError(kr("1M92O",r));if(t=Ee({},We),arguments.length>1&&(n=function(r,e){return ze(e)?rr(e,"sep")&&(r.sep=e.sep,!Nr(r.sep))?new TypeError(kr("1M92W","sep",r.sep)):rr(e,"objectMode")&&(r.objectMode=e.objectMode,!Y(r.objectMode))?new TypeError(kr("1M92o","objectMode",r.objectMode)):rr(e,"encoding")&&(r.encoding=e.encoding,!Nr(r.encoding)&&null!==r.encoding)?new TypeError(kr("1M97n","encoding",r.encoding)):rr(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!Be(r.highWaterMark))?new TypeError(kr("1M94k","highWaterMark",r.highWaterMark)):rr(e,"serialize")&&(r.serialize=e.serialize,!Or(r.serialize))?new TypeError(kr("1M96p","serialize",r.serialize)):rr(e,"dir")&&(r.dir=e.dir,1!==r.dir&&-1!==r.dir)?new TypeError(kr("1M92v","dir",r.dir)):null:new TypeError(kr("1M92V",e))}(t,e),n))throw n;return qe("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),Ge.call(this,t),xe(this,"_destroyed",!1),R(this,"_objectMode",t.objectMode),R(this,"_sep",t.sep),R(this,"_serialize",t.serialize||JSON.stringify),R(this,"_src",r),R(this,"_stride",t.dir),xe(this,"_i",0),xe(this,"_idx",1===t.dir?0:r.length-1),this}return function(r,e){var t=Se(r);if(t)throw t;if(t=Se(e))throw t;if(void 0===e.prototype)throw new TypeError(P("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",e.prototype));r.prototype=ke(e.prototype),B(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r})}(Xe,Ge),R(Xe.prototype,"_read",(function(){var r,e,t;if(!this._destroyed)for(r=!0;r;){if(e=null,this._i+=1,this._i>this._src.length)return qe("Finished iteration."),this.push(null);t=this._src[this._idx],qe("Value: %s. Idx: %d. Iter: %d.",JSON.stringify(t),this._idx,this._i),this._idx+=this._stride,!1===this._objectMode&&("string"==typeof(t=this._serialize(t))?t=1===this._i?$e(t):$e(this._sep+t):mr(t)?this._i>1&&(t=Fe.concat([$e(this._sep),t])):e=new Error(kr("1M9A9",t))),e?this.emit("error",e):r=this.push(t)}})),R(Xe.prototype,"destroy",(function(r){var e;return this._destroyed?(qe("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);Ne.nextTick((function(){r.apply(null,e)}))}((function(){r&&(qe("Stream was destroyed due to an error. Error: %s.",function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===nr(r))return!0;r=Mr(r)}return!1}(r)?r.message:JSON.stringify(r)),e.emit("error",r));qe("Closing the stream..."),e.emit("close")})),this)})),R(Xe,"objectMode",(function(r,e){var t;if(arguments.length>1){if(!ze(t=e))throw new TypeError(kr("1M92V",t));t=Ee({},e)}else t={};return t.objectMode=!0,new Xe(r,t)})),R(Xe,"factory",(function(r){var e;if(arguments.length){if(!ze(r))throw new TypeError(kr("1M92V",r));e=Ee({},r)}else e={};return function(r){return new Xe(r,e)}})),Xe}));
//# sourceMappingURL=index.js.map