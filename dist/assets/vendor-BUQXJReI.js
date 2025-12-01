var pd=Object.defineProperty,md=Object.defineProperties;var gd=Object.getOwnPropertyDescriptors;var Or=Object.getOwnPropertySymbols;var Na=Object.prototype.hasOwnProperty,Oa=Object.prototype.propertyIsEnumerable;var Da=(n,e,t)=>e in n?pd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,G=(n,e)=>{for(var t in e||(e={}))Na.call(e,t)&&Da(n,t,e[t]);if(Or)for(var t of Or(e))Oa.call(e,t)&&Da(n,t,e[t]);return n},Ce=(n,e)=>md(n,gd(e));var Vr=(n,e)=>{var t={};for(var r in n)Na.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&Or)for(var r of Or(n))e.indexOf(r)<0&&Oa.call(n,r)&&(t[r]=n[r]);return t};function KI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dl={exports:{}},fl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,x){var B=N.length;N.push(x);e:for(;0<B;){var ee=B-1>>>1,oe=N[ee];if(0<i(oe,x))N[ee]=x,N[B]=oe,B=ee;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var x=N[0],B=N.pop();if(B!==x){N[0]=B;e:for(var ee=0,oe=N.length,Ct=oe>>>1;ee<Ct;){var Ve=2*(ee+1)-1,kt=N[Ve],Fe=Ve+1,ct=N[Fe];if(0>i(kt,B))Fe<oe&&0>i(ct,kt)?(N[ee]=ct,N[Fe]=B,ee=Fe):(N[ee]=kt,N[Ve]=B,ee=Ve);else if(Fe<oe&&0>i(ct,B))N[ee]=ct,N[Fe]=B,ee=Fe;else break e}}return x}function i(N,x){var B=N.sortIndex-x.sortIndex;return B!==0?B:N.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();n.unstable_now=function(){return a.now()-l}}var h=[],d=[],_=1,y=null,A=3,b=!1,D=!1,O=!1,k=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(N){for(var x=t(d);x!==null;){if(x.callback===null)r(d);else if(x.startTime<=N)r(d),x.sortIndex=x.expirationTime,e(h,x);else break;x=t(d)}}function Q(N){if(O=!1,z(N),!D)if(t(h)!==null)D=!0,Sn(re);else{var x=t(d);x!==null&&Pn(Q,x.startTime-N)}}function re(N,x){D=!1,O&&(O=!1,U(p),p=-1),b=!0;var B=A;try{for(z(x),y=t(h);y!==null&&(!(y.expirationTime>x)||N&&!E());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,A=y.priorityLevel;var oe=ee(y.expirationTime<=x);x=n.unstable_now(),typeof oe=="function"?y.callback=oe:y===t(h)&&r(h),z(x)}else r(h);y=t(h)}if(y!==null)var Ct=!0;else{var Ve=t(d);Ve!==null&&Pn(Q,Ve.startTime-x),Ct=!1}return Ct}finally{y=null,A=B,b=!1}}var Z=!1,I=null,p=-1,g=5,T=-1;function E(){return!(n.unstable_now()-T<g)}function v(){if(I!==null){var N=n.unstable_now();T=N;var x=!0;try{x=I(!0,N)}finally{x?m():(Z=!1,I=null)}}else Z=!1}var m;if(typeof F=="function")m=function(){F(v)};else if(typeof MessageChannel!="undefined"){var pe=new MessageChannel,et=pe.port2;pe.port1.onmessage=v,m=function(){et.postMessage(null)}}else m=function(){k(v,0)};function Sn(N){I=N,Z||(Z=!0,m())}function Pn(N,x){p=k(function(){N(n.unstable_now())},x)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){D||b||(D=!0,Sn(re))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(N){switch(A){case 1:case 2:case 3:var x=3;break;default:x=A}var B=A;A=x;try{return N()}finally{A=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,x){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=A;A=N;try{return x()}finally{A=B}},n.unstable_scheduleCallback=function(N,x,B){var ee=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ee+B:ee):B=ee,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=B+oe,N={id:_++,callback:x,priorityLevel:N,startTime:B,expirationTime:oe,sortIndex:-1},B>ee?(N.sortIndex=B,e(d,N),t(h)===null&&N===t(d)&&(O?(U(p),p=-1):O=!0,Pn(Q,B-ee))):(N.sortIndex=oe,e(h,N),D||b||(D=!0,Sn(re))),N},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(N){var x=A;return function(){var B=A;A=x;try{return N.apply(this,arguments)}finally{A=B}}}})(fl);dl.exports=fl;var QI=dl.exports;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(){return tr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},tr.apply(this,arguments)}var an;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(an||(an={}));const Va="popstate";function JI(n){n===void 0&&(n={});function e(r,i){let{pathname:o,search:a,hash:l}=r.location;return ys("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:pl(i)}return yd(e,t,null,n)}function cn(n,e){if(n===!1||n===null||typeof n=="undefined")throw new Error(e)}function js(n,e){if(!n){typeof console!="undefined"&&console.warn(e);try{throw new Error(e)}catch(t){}}}function _d(){return Math.random().toString(36).substr(2,8)}function Ma(n,e){return{usr:n.state,key:n.key,idx:e}}function ys(n,e,t,r){return t===void 0&&(t=null),tr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ei(e):e,{state:t,key:e&&e.key||r||_d()})}function pl(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ei(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function yd(n,e,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=an.Pop,h=null,d=_();d==null&&(d=0,a.replaceState(tr({},a.state,{idx:d}),""));function _(){return(a.state||{idx:null}).idx}function y(){l=an.Pop;let k=_(),U=k==null?null:k-d;d=k,h&&h({action:l,location:O.location,delta:U})}function A(k,U){l=an.Push;let F=ys(O.location,k,U);d=_()+1;let z=Ma(F,d),Q=O.createHref(F);try{a.pushState(z,"",Q)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;i.location.assign(Q)}o&&h&&h({action:l,location:O.location,delta:1})}function b(k,U){l=an.Replace;let F=ys(O.location,k,U);d=_();let z=Ma(F,d),Q=O.createHref(F);a.replaceState(z,"",Q),o&&h&&h({action:l,location:O.location,delta:0})}function D(k){let U=i.location.origin!=="null"?i.location.origin:i.location.href,F=typeof k=="string"?k:pl(k);return F=F.replace(/ $/,"%20"),cn(U,"No window.location.(origin|href) available to create URL for href: "+F),new URL(F,U)}let O={get action(){return l},get location(){return n(i,a)},listen(k){if(h)throw new Error("A history only accepts one active listener");return i.addEventListener(Va,y),h=k,()=>{i.removeEventListener(Va,y),h=null}},createHref(k){return e(i,k)},createURL:D,encodeLocation(k){let U=D(k);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:A,replace:b,go(k){return a.go(k)}};return O}var La;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(La||(La={}));function XI(n,e,t){return t===void 0&&(t="/"),Ed(n,e,t)}function Ed(n,e,t,r){let i=typeof e=="string"?Ei(e):e,o=Od(i.pathname||"/",t);if(o==null)return null;let a=ml(n);Id(a);let l=null;for(let h=0;l==null&&h<a.length;++h){let d=Nd(o);l=Cd(a[h],d)}return l}function ml(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,a,l)=>{let h={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};h.relativePath.startsWith("/")&&(cn(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let d=$r([r,h.relativePath]),_=t.concat(h);o.children&&o.children.length>0&&(cn(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ml(o.children,e,_,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:Pd(d,o.index),routesMeta:_})};return n.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let h of gl(o.path))i(o,a,h)}),e}function gl(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=gl(r.join("/")),l=[];return l.push(...a.map(h=>h===""?o:[o,h].join("/"))),i&&l.push(...a),l.map(h=>n.startsWith("/")&&h===""?"/":h)}function Id(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:bd(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Td=/^:[\w-]+$/,wd=3,vd=2,Ad=1,Rd=10,Sd=-2,xa=n=>n==="*";function Pd(n,e){let t=n.split("/"),r=t.length;return t.some(xa)&&(r+=Sd),e&&(r+=vd),t.filter(i=>!xa(i)).reduce((i,o)=>i+(Td.test(o)?wd:o===""?Ad:Rd),r)}function bd(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function Cd(n,e,t){let{routesMeta:r}=n,i={},o="/",a=[];for(let l=0;l<r.length;++l){let h=r[l],d=l===r.length-1,_=o==="/"?e:e.slice(o.length)||"/",y=kd({path:h.relativePath,caseSensitive:h.caseSensitive,end:d},_),A=h.route;if(!y)return null;Object.assign(i,y.params),a.push({params:i,pathname:$r([o,y.pathname]),pathnameBase:Fd($r([o,y.pathnameBase])),route:A}),y.pathnameBase!=="/"&&(o=$r([o,y.pathnameBase]))}return a}function kd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Dd(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,_,y)=>{let{paramName:A,isOptional:b}=_;if(A==="*"){let O=l[y]||"";a=o.slice(0,o.length-O.length).replace(/(.)\/+$/,"$1")}const D=l[y];return b&&!D?d[A]=void 0:d[A]=(D||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:n}}function Dd(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),js(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,h)=>(r.push({paramName:l,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Nd(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return js(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Od(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}const Vd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Md=n=>Vd.test(n);function Ld(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?Ei(n):n,o;if(t)if(Md(t))o=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),js(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?o=Fa(t.substring(1),"/"):o=Fa(t,e)}else o=e;return{pathname:o,search:Ud(r),hash:Bd(i)}}function Fa(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function rs(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xd(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function YI(n,e){let t=xd(n);return e?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ZI(n,e,t,r){r===void 0&&(r=!1);let i;typeof n=="string"?i=Ei(n):(i=tr({},n),cn(!i.pathname||!i.pathname.includes("?"),rs("?","pathname","search",i)),cn(!i.pathname||!i.pathname.includes("#"),rs("#","pathname","hash",i)),cn(!i.search||!i.search.includes("#"),rs("#","search","hash",i)));let o=n===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=t;else{let y=e.length-1;if(!r&&a.startsWith("..")){let A=a.split("/");for(;A[0]==="..";)A.shift(),y-=1;i.pathname=A.join("/")}l=y>=0?e[y]:"/"}let h=Ld(i,l),d=a&&a!=="/"&&a.endsWith("/"),_=(o||a===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(d||_)&&(h.pathname+="/"),h}const $r=n=>n.join("/").replace(/\/\/+/g,"/"),Fd=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Ud=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Bd=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function eT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const _l=["post","put","patch","delete"];new Set(_l);const jd=["get",..._l];new Set(jd);const $d=()=>{};var Ua={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,_=o>>2,y=(o&3)<<4|l>>4;let A=(l&15)<<2|d>>6,b=d&63;h||(b=64,a||(A=64)),r.push(t[_],t[y],t[A],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||y==null)throw new Hd;const A=o<<2|l>>4;if(r.push(A),d!==64){const b=l<<4&240|d>>2;if(r.push(b),y!==64){const D=d<<6&192|y;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zd=function(n){const e=yl(n);return El.encodeByteArray(e,!0)},Yr=function(n){return zd(n).replace(/\./g,"")},Il=function(n){try{return El.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=()=>Wd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process=="undefined"||typeof Ua=="undefined")return;const n=Ua.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qd=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&Il(n[1]);return e&&JSON.parse(e)},Ii=()=>{try{return $d()||Gd()||Kd()||Qd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tl=n=>{var e,t;return(t=(e=Ii())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Jd=n=>{const e=Tl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wl=()=>{var n;return(n=Ii())==null?void 0:n.config},vl=n=>{var e;return(e=Ii())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}async function Al(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=G({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yr(JSON.stringify(t)),Yr(JSON.stringify(a)),""].join(".")}const Kn={};function Zd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Kn))Kn[e]?n.emulator.push(e):n.prod.push(e);return n}function ef(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ba=!1;function Rl(n,e){if(typeof window=="undefined"||typeof document=="undefined"||!Tn(window.location.host)||Kn[n]===e||Kn[n]||Ba)return;Kn[n]=e;function t(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=Zd().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function l(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,b){A.setAttribute("width","24"),A.setAttribute("id",b),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Ba=!0,a()},A}function _(A,b){A.setAttribute("id",b),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function y(){const A=ef(r),b=t("text"),D=document.getElementById(b)||document.createElement("span"),O=t("learnmore"),k=document.getElementById(O)||document.createElement("a"),U=t("preprendIcon"),F=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const z=A.element;l(z),_(k,O);const Q=d();h(F,U),z.append(F,D,k,Q),document.body.appendChild(z)}o?(D.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function nf(){var e;const n=(e=Ii())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function rf(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Sl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function of(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function af(){return!nf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pl(){try{return typeof indexedDB=="object"}catch(n){return!1}}function bl(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}function cf(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="FirebaseError";class We extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lf,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}}class Qt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?uf(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new We(i,l,r)}}function uf(n,e){return n.replace(hf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hf=/\{\$([^}]+)}/g;function df(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(ja(o)&&ja(a)){if(!vt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ja(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Wn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ff(n,e){const t=new pf(n,e);return t.subscribe.bind(t)}class pf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");mf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=is),i.error===void 0&&(i.error=is),i.complete===void 0&&(i.complete=is);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(a){}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function is(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=1e3,_f=2,yf=4*60*60*1e3,Ef=.5;function $a(n,e=gf,t=_f){const r=e*Math.pow(t,n),i=Math.round(Ef*r*(Math.random()-.5)*2);return Math.min(yf,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n){return n&&n._delegate?n._delegate:n}class ze{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Xd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var i;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wf(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch(o){}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var a;const r=this.normalizeInstanceIdentifier(t),i=(a=this.onInitCallbacks.get(r))!=null?a:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(o){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tf(n){return n===Lt?void 0:n}function wf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new If(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Af={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Rf=H.INFO,Sf={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Pf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Sf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ti{constructor(e){this.name=e,this._logLevel=Rf,this._logHandler=Pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Af[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const bf=(n,e)=>e.some(t=>n instanceof t);let qa,Ha;function Cf(){return qa||(qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kf(){return Ha||(Ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cl=new WeakMap,Es=new WeakMap,kl=new WeakMap,ss=new WeakMap,$s=new WeakMap;function Df(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(It(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Cl.set(t,n)}).catch(()=>{}),$s.set(e,n),e}function Nf(n){if(Es.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Es.set(n,e)}let Is={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Es.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return It(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Of(n){Is=n(Is)}function Vf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(os(this),e,...t);return kl.set(r,e.sort?e.sort():[e]),It(r)}:kf().includes(n)?function(...e){return n.apply(os(this),e),It(Cl.get(this))}:function(...e){return It(n.apply(os(this),e))}}function Mf(n){return typeof n=="function"?Vf(n):(n instanceof IDBTransaction&&Nf(n),bf(n,Cf())?new Proxy(n,Is):n)}function It(n){if(n instanceof IDBRequest)return Df(n);if(ss.has(n))return ss.get(n);const e=Mf(n);return e!==n&&(ss.set(n,e),$s.set(e,n)),e}const os=n=>$s.get(n);function Dl(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=It(a);return r&&a.addEventListener("upgradeneeded",h=>{r(It(a.result),h.oldVersion,h.newVersion,It(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Lf=["get","getKey","getAll","getAllKeys","count"],xf=["put","add","delete","clear"],as=new Map;function za(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(as.get(e))return as.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=xf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lf.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&h.done]))[0]};return as.set(e,o),o}Of(n=>Ce(G({},n),{get:(e,t,r)=>za(e,t)||n.get(e,t,r),has:(e,t)=>!!za(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Uf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Uf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ts="@firebase/app",Wa="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Ti("@firebase/app"),Bf="@firebase/app-compat",jf="@firebase/analytics-compat",$f="@firebase/analytics",qf="@firebase/app-check-compat",Hf="@firebase/app-check",zf="@firebase/auth",Wf="@firebase/auth-compat",Gf="@firebase/database",Kf="@firebase/data-connect",Qf="@firebase/database-compat",Jf="@firebase/functions",Xf="@firebase/functions-compat",Yf="@firebase/installations",Zf="@firebase/installations-compat",ep="@firebase/messaging",tp="@firebase/messaging-compat",np="@firebase/performance",rp="@firebase/performance-compat",ip="@firebase/remote-config",sp="@firebase/remote-config-compat",op="@firebase/storage",ap="@firebase/storage-compat",cp="@firebase/firestore",lp="@firebase/ai",up="@firebase/firestore-compat",hp="firebase",dp="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]",fp={[Ts]:"fire-core",[Bf]:"fire-core-compat",[$f]:"fire-analytics",[jf]:"fire-analytics-compat",[Hf]:"fire-app-check",[qf]:"fire-app-check-compat",[zf]:"fire-auth",[Wf]:"fire-auth-compat",[Gf]:"fire-rtdb",[Kf]:"fire-data-connect",[Qf]:"fire-rtdb-compat",[Jf]:"fire-fn",[Xf]:"fire-fn-compat",[Yf]:"fire-iid",[Zf]:"fire-iid-compat",[ep]:"fire-fcm",[tp]:"fire-fcm-compat",[np]:"fire-perf",[rp]:"fire-perf-compat",[ip]:"fire-rc",[sp]:"fire-rc-compat",[op]:"fire-gcs",[ap]:"fire-gcs-compat",[cp]:"fire-fst",[up]:"fire-fst-compat",[lp]:"fire-vertex","fire-js":"fire-js",[hp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Map,pp=new Map,vs=new Map;function Ga(n,e){try{n.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xe(n){const e=n.name;if(vs.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;vs.set(e,n);for(const t of Zr.values())Ga(t,n);for(const t of pp.values())Ga(t,n);return!0}function Jt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Me(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new Qt("app","Firebase",mp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t,r){this._isDeleted=!1,this._options=G({},e),this._config=G({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=dp;function _p(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=G({name:ws,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Tt.create("bad-app-name",{appName:String(i)});if(t||(t=wl()),!t)throw Tt.create("no-options");const o=Zr.get(i);if(o){if(vt(t,o.options)&&vt(r,o.config))return o;throw Tt.create("duplicate-app",{appName:i})}const a=new vf(i);for(const h of vs.values())a.addComponent(h);const l=new gp(t,r,a);return Zr.set(i,l),l}function qs(n=ws){const e=Zr.get(n);if(!e&&n===ws&&wl())return _p();if(!e)throw Tt.create("no-app",{appName:n});return e}function Le(n,e,t){var a;let r=(a=fp[n])!=null?a:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(l.join(" "));return}Xe(new ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firebase-heartbeat-database",Ep=1,nr="firebase-heartbeat-store";let cs=null;function Nl(){return cs||(cs=Dl(yp,Ep,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tt.create("idb-open",{originalErrorMessage:n.message})})),cs}async function Ip(n){try{const t=(await Nl()).transaction(nr),r=await t.objectStore(nr).get(Ol(n));return await t.done,r}catch(e){if(e instanceof We)ot.warn(e.message);else{const t=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(t.message)}}}async function Ka(n,e){try{const r=(await Nl()).transaction(nr,"readwrite");await r.objectStore(nr).put(e,Ol(n)),await r.done}catch(t){if(t instanceof We)ot.warn(t.message);else{const r=Tt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ot.warn(r.message)}}}function Ol(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=1024,wp=30;class vp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qa();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>wp){const a=Sp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qa(),{heartbeatsToSend:r,unsentEntries:i}=Ap(this._heartbeatsCache.heartbeats),o=Yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ot.warn(t),""}}}function Qa(){return new Date().toISOString().substring(0,10)}function Ap(n,e=Tp){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ja(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ja(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pl()?bl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ip(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ja(n){return Yr(JSON.stringify({version:2,heartbeats:n})).length}function Sp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n){Xe(new ze("platform-logger",e=>new Ff(e),"PRIVATE")),Xe(new ze("heartbeat",e=>new vp(e),"PRIVATE")),Le(Ts,Wa,n),Le(Ts,Wa,"esm2020"),Le("fire-js","")}Pp("");function Vl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bp=Vl,Ml=new Qt("auth","Firebase",Vl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Ti("@firebase/auth");function Cp(n,...e){ei.logLevel<=H.WARN&&ei.warn(`Auth (${wn}): ${n}`,...e)}function qr(n,...e){ei.logLevel<=H.ERROR&&ei.error(`Auth (${wn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n,...e){throw zs(n,...e)}function He(n,...e){return zs(n,...e)}function Hs(n,e,t){const r=Ce(G({},bp()),{[e]:t});return new Qt("auth","Firebase",r).create(e,{appName:n.name})}function wt(n){return Hs(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&xe(n,"argument-error"),Hs(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ml.create(n,...e)}function L(n,e,...t){if(!n)throw zs(e,...t)}function tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qr(e),new Error(e)}function at(n,e){n||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function Dp(){return Xa()==="http:"||Xa()==="https:"}function Xa(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dp()||Sl()||"connection"in navigator)?navigator.onLine:!0}function Op(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,at(t>e,"Short delay should be less than long delay!"),this.isMobile=tf()||sf()}get(){return Np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){at(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Lp=new dr(3e4,6e4);function Xt(n,e){return n.tenantId&&!e.tenantId?Ce(G({},e),{tenantId:n.tenantId}):e}async function bt(n,e,t,r,i={}){return xl(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=hr(G({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=G({method:e,headers:h},o);return rf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Tn(n.emulatorConfig.host)&&(d.credentials="include"),Ll.fetch()(await Fl(n,n.config.apiHost,t,l),d)})}async function xl(n,e,t){n._canInitEmulator=!1;const r=G(G({},Vp),e);try{const i=new Fp(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Mr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Mr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Mr(n,"user-disabled",a);const _=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hs(n,_,d);xe(n,_)}}catch(i){if(i instanceof We)throw i;xe(n,"network-request-failed",{message:String(i)})}}async function wi(n,e,t,r,i={}){const o=await bt(n,e,t,r,i);return"mfaPendingCredential"in o&&xe(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Fl(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?Ws(n.config,i):`${n.config.apiScheme}://${i}`;return Mp.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function xp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),Lp.get())})}}function Mr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=He(n,e,r);return i.customData._tokenResponse=t,i}function Ya(n){return n!==void 0&&n.enterprise!==void 0}class Up{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Bp(n,e){return bt(n,"GET","/v2/recaptchaConfig",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(n,e){return bt(n,"POST","/v1/accounts:delete",e)}async function ti(n,e){return bt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function $p(n,e=!1){const t=Re(n),r=await t.getIdToken(e),i=Gs(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Qn(ls(i.auth_time)),issuedAtTime:Qn(ls(i.iat)),expirationTime:Qn(ls(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ls(n){return Number(n)*1e3}function Gs(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Il(t);return i?JSON.parse(i):(qr("Failed to decode base64 JWT payload"),null)}catch(i){return qr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Za(n){const e=Gs(n);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof We&&qp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(n){var y;const e=n.auth,t=await n.getIdToken(),r=await rr(n,ti(e,{idToken:t}));L(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=(y=i.providerUserInfo)!=null&&y.length?Ul(i.providerUserInfo):[],a=Wp(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?h:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rs(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,_)}async function zp(n){const e=Re(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ul(n){return n.map(r=>{var i=r,{providerId:e}=i,t=Vr(i,["providerId"]);return{providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n,e){const t=await xl(n,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await Fl(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&Tn(n.emulatorConfig.host)&&(h.credentials="include"),Ll.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Kp(n,e){return bt(n,"POST","/v2/accounts:revokeToken",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Za(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=Za(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Gp(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new ln;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,e){L(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class $e{constructor(o){var a=o,{uid:e,auth:t,stsTokenManager:r}=a,i=Vr(a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $p(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>G({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $e(Ce(G({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(wt(this.auth));const e=await this.getIdToken();return await rr(this,jp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Ce(G({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>G({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var F,z,Q,re,Z,I,p,g;const r=(F=t.displayName)!=null?F:void 0,i=(z=t.email)!=null?z:void 0,o=(Q=t.phoneNumber)!=null?Q:void 0,a=(re=t.photoURL)!=null?re:void 0,l=(Z=t.tenantId)!=null?Z:void 0,h=(I=t._redirectEventId)!=null?I:void 0,d=(p=t.createdAt)!=null?p:void 0,_=(g=t.lastLoginAt)!=null?g:void 0,{uid:y,emailVerified:A,isAnonymous:b,providerData:D,stsTokenManager:O}=t;L(y&&O,e,"internal-error");const k=ln.fromJSON(this.name,O);L(typeof y=="string",e,"internal-error"),mt(r,e.name),mt(i,e.name),L(typeof A=="boolean",e,"internal-error"),L(typeof b=="boolean",e,"internal-error"),mt(o,e.name),mt(a,e.name),mt(l,e.name),mt(h,e.name),mt(d,e.name),mt(_,e.name);const U=new $e({uid:y,auth:e,email:i,emailVerified:A,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:k,createdAt:d,lastLoginAt:_});return D&&Array.isArray(D)&&(U.providerData=D.map(T=>G({},T))),h&&(U._redirectEventId=h),U}static async _fromIdTokenResponse(e,t,r=!1){const i=new ln;i.updateFromServerResponse(t);const o=new $e({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ni(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ul(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new ln;l.updateFromIdToken(r);const h=new $e({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Rs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map;function nt(n){at(n instanceof Function,"Expected a class definition");let e=ec.get(n);return e?(at(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ec.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bl.type="NONE";const tc=Bl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,e,t){return`firebase:${n}:${e}:${t}`}class un{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ti(this.auth,{idToken:e}).catch(()=>{});return t?$e._fromGetAccountInfoResponse(this.auth,t,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new un(nt(tc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||nt(tc);const a=Hr(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const _=await d._get(a);if(_){let y;if(typeof _=="string"){const A=await ti(e,{idToken:_}).catch(()=>{});if(!A)break;y=await $e._fromGetAccountInfoResponse(e,A,_)}else y=$e._fromJSON(e,_);d!==o&&(l=y),o=d;break}}catch(_){}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new un(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch(_){}})),new un(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wl(e))return"Blackberry";if(Gl(e))return"Webos";if($l(e))return"Safari";if((e.includes("chrome/")||ql(e))&&!e.includes("edge/"))return"Chrome";if(zl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jl(n=Ae()){return/firefox\//i.test(n)}function $l(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ql(n=Ae()){return/crios\//i.test(n)}function Hl(n=Ae()){return/iemobile/i.test(n)}function zl(n=Ae()){return/android/i.test(n)}function Wl(n=Ae()){return/blackberry/i.test(n)}function Gl(n=Ae()){return/webos/i.test(n)}function Ks(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qp(n=Ae()){var e;return Ks(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Jp(){return of()&&document.documentMode===10}function Kl(n=Ae()){return Ks(n)||zl(n)||Gl(n)||Wl(n)||/windows phone/i.test(n)||Hl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n,e=[]){let t;switch(n){case"Browser":t=nc(Ae());break;case"Worker":t=`${nc(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(o){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(n,e={}){return bt(n,"GET","/v2/passwordPolicy",Xt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=6;class em{constructor(e){var r,i,o,a;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=t.minPasswordLength)!=null?r:Zp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))!=null?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!=null?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,i,o,a,l,h;const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=(r=t.meetsMinPasswordLength)!=null?r:!0),t.isValid&&(t.isValid=(i=t.meetsMaxPasswordLength)!=null?i:!0),t.isValid&&(t.isValid=(o=t.containsLowercaseLetter)!=null?o:!0),t.isValid&&(t.isValid=(a=t.containsUppercaseLetter)!=null?a:!0),t.isValid&&(t.isValid=(l=t.containsNumericCharacter)!=null?l:!0),t.isValid&&(t.isValid=(h=t.containsNonAlphanumericCharacter)!=null?h:!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rc(this),this.idTokenSubscription=new rc(this),this.beforeStateQueue=new Xp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ml,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nt(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(a){}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ti(this,{idToken:e}),r=await $e._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Me(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,l=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(r=h.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Op()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(wt(this));const t=e?Re(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yp(this),t=new em(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Kp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nt(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(r=(t=this.currentUser)==null?void 0:t.uid)!=null?r:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ql(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Cp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yt(n){return Re(n)}class rc{constructor(e){this.auth=e,this.observer=null,this.addObserver=ff(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nm(n){vi=n}function Jl(n){return vi.loadJS(n)}function rm(){return vi.recaptchaEnterpriseScript}function im(){return vi.gapiScript}function sm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class om{constructor(){this.enterprise=new am}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class am{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const cm="recaptcha-enterprise",Xl="NO_RECAPTCHA";class lm{constructor(e){this.type=cm,this.auth=Yt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Bp(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Up(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{l(h)})})}function i(o,a,l){const h=window.grecaptcha;Ya(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Xl)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new om().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(l=>{if(!t&&Ya(window.grecaptcha))i(l,o,a);else{if(typeof window=="undefined"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=rm();h.length!==0&&(h+=l),Jl(h).then(()=>{i(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function ic(n,e,t,r=!1,i=!1){const o=new lm(n);let a;if(i)a=Xl;else try{a=await o.verify(t)}catch(h){a=await o.verify(t,!0)}const l=G({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sc(n,e,t,r,i){var o;if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ic(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ic(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n,e){const t=Jt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(vt(o,e!=null?e:{}))return i;xe(i,"already-initialized")}return t.initialize({options:e})}function hm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dm(n,e,t){const r=Yt(n);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Yl(e),{host:a,port:l}=fm(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},_=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(vt(d,r.config.emulator)&&vt(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Tn(a)?(Al(`${o}//${a}${h}`),Rl("Auth",!0)):pm()}function Yl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fm(n){const e=Yl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:oc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:oc(a)}}}function oc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function pm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,t){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function mm(n,e){return bt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(n,e){return wi(n,"POST","/v1/accounts:signInWithPassword",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(n,e){return wi(n,"POST","/v1/accounts:signInWithEmailLink",Xt(n,e))}async function ym(n,e){return wi(n,"POST","/v1/accounts:signInWithEmailLink",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Qs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ir(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ir(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sc(e,t,"signInWithPassword",gm);case"emailLink":return _m(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sc(e,r,"signUpPassword",mm);case"emailLink":return ym(e,{idToken:t,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(n,e){return wi(n,"POST","/v1/accounts:signInWithIdp",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="http://localhost";class $t extends Qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const l=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=l,o=Vr(l,["providerId","signInMethod"]);if(!r||!i)return null;const a=new $t(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return hn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,hn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hn(e,t)}buildRequest(){const e={requestUri:Em,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tm(n){const e=zn(Wn(n)).link,t=e?zn(Wn(e)).deep_link_id:null,r=zn(Wn(n)).deep_link_id;return(r?zn(Wn(r)).link:null)||r||t||e||n}class Js{constructor(e){var a,l,h,d,_,y;const t=zn(Wn(e)),r=(a=t.apiKey)!=null?a:null,i=(l=t.oobCode)!=null?l:null,o=Im((h=t.mode)!=null?h:null);L(r&&i&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=i,this.continueUrl=(d=t.continueUrl)!=null?d:null,this.languageCode=(_=t.lang)!=null?_:null,this.tenantId=(y=t.tenantId)!=null?y:null}static parseLink(e){const t=Tm(e);try{return new Js(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,t){return ir._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Js.parseLink(t);return L(r,"argument-error"),ir._fromEmailAndCode(e,r.code,r.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Xs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends fr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _t.credential(t,r)}catch(i){return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends fr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch(t){return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends fr{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Et.credential(t,r)}catch(i){return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await $e._fromIdTokenResponse(e,r,i),a=ac(r);return new mn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ac(r);return new mn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ac(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends We{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!=null?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ri(e,t,r,i)}}function Zl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,o,e,r):o})}async function wm(n,e,t=!1){const r=await rr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(n,e,t=!1){const{auth:r}=n;if(Me(r.app))return Promise.reject(wt(r));const i="reauthenticate";try{const o=await rr(n,Zl(r,i,e,n),t);L(o.idToken,r,"internal-error");const a=Gs(o.idToken);L(a,r,"internal-error");const{sub:l}=a;return L(n.uid===l,r,"user-mismatch"),mn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(n,e,t=!1){if(Me(n.app))return Promise.reject(wt(n));const r="signIn",i=await Zl(n,r,e),o=await mn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function Am(n,e){return eu(Yt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(n){const e=Yt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function tT(n,e,t){return Me(n.app)?Promise.reject(wt(n)):Am(Re(n),vn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Rm(n),r})}function Sm(n,e,t,r){return Re(n).onIdTokenChanged(e,t,r)}function Pm(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function nT(n,e,t,r){return Re(n).onAuthStateChanged(e,t,r)}function rT(n){return Re(n).signOut()}const ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=1e3,Cm=10;class nu extends tu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Jp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nu.type="LOCAL";const km=nu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends tu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ru.type="SESSION";const iu=ru;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ai(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await Dm(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ai.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Ys("",20);i.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const A=y;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(A.data.response);break;default:clearTimeout(_),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Om(n){Je().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){return typeof Je().WorkerGlobalScope!="undefined"&&typeof Je().importScripts=="function"}async function Vm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(n){return null}}function Mm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Lm(){return su()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="firebaseLocalStorageDb",xm=1,si="firebaseLocalStorage",au="fbase_key";class pr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ri(n,e){return n.transaction([si],e?"readwrite":"readonly").objectStore(si)}function Fm(){const n=indexedDB.deleteDatabase(ou);return new pr(n).toPromise()}function Ss(){const n=indexedDB.open(ou,xm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(si,{keyPath:au})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(si)?e(r):(r.close(),await Fm(),e(await Ss()))})})}async function cc(n,e,t){const r=Ri(n,!0).put({[au]:e,value:t});return new pr(r).toPromise()}async function Um(n,e){const t=Ri(n,!1).get(e),r=await new pr(t).toPromise();return r===void 0?null:r.value}function lc(n,e){const t=Ri(n,!0).delete(e);return new pr(t).toPromise()}const Bm=800,jm=3;class cu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ss(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return su()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ai._getInstance(Lm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Vm(),!this.activeServiceWorker)return;this.sender=new Nm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ss();return await cc(e,ii,"1"),await lc(e,ii),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Um(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ri(i,!1).getAll();return new pr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cu.type="LOCAL";const $m=cu;new dr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n,e){return e?nt(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends Qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qm(n){return eu(n.auth,new Zs(n),n.bypassAuthState)}function Hm(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),vm(t,new Zs(n),n.bypassAuthState)}async function zm(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),wm(t,new Zs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qm;case"linkViaPopup":case"linkViaRedirect":return zm;case"reauthViaPopup":case"reauthViaRedirect":return Hm;default:xe(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new dr(2e3,1e4);async function iT(n,e,t){if(Me(n.app))return Promise.reject(He(n,"operation-not-supported-in-this-environment"));const r=Yt(n);kp(n,e,Xs);const i=lu(r,t);return new xt(r,"signInViaPopup",e,i).executeNotNull()}class xt extends uu{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,xt.currentPopupAction&&xt.currentPopupAction.cancel(),xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=Ys();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wm.get())};e()}}xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="pendingRedirect",zr=new Map;class Km extends uu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zr.get(this.auth._key());if(!e){try{const r=await Qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zr.set(this.auth._key(),e)}return this.bypassAuthState||zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qm(n,e){const t=Ym(e),r=Xm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Jm(n,e){zr.set(n._key(),e)}function Xm(n){return nt(n._redirectPersistence)}function Ym(n){return Hr(Gm,n.config.apiKey,n.name)}async function Zm(n,e,t=!1){if(Me(n.app))return Promise.reject(wt(n));const r=Yt(n),i=lu(r,e),a=await new Km(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=10*60*1e3;class tg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ng(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!hu(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(He(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eg&&this.cachedEventUids.clear(),this.cachedEventUids.has(uc(e))}saveEventToCache(e){this.cachedEventUids.add(uc(e)),this.lastProcessedEventTime=Date.now()}}function uc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ng(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n,e={}){return bt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sg=/^https?/;async function og(n){if(n.config.emulator)return;const{authorizedDomains:e}=await rg(n);for(const t of e)try{if(ag(t))return}catch(r){}xe(n,"unauthorized-domain")}function ag(n){const e=As(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!sg.test(t))return!1;if(ig.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new dr(3e4,6e4);function hc(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lg(n){return new Promise((e,t)=>{var i,o,a;function r(){hc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hc(),t(He(n,"network-request-failed"))},timeout:cg.get()})}if((o=(i=Je().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=Je().gapi)!=null&&a.load)r();else{const l=sm("iframefcb");return Je()[l]=()=>{gapi.load?r():t(He(n,"network-request-failed"))},Jl(`${im()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function ug(n){return Wr=Wr||lg(n),Wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new dr(5e3,15e3),dg="__/auth/iframe",fg="emulator/auth/iframe",pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gg(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ws(e,fg):`https://${n.config.authDomain}/${dg}`,r={apiKey:e.apiKey,appName:n.name,v:wn},i=mg.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${hr(r).slice(1)}`}async function _g(n){const e=await ug(n),t=Je().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:gg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pg,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=He(n,"network-request-failed"),l=Je().setTimeout(()=>{o(a)},hg.get());function h(){Je().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Eg=500,Ig=600,Tg="_blank",wg="http://localhost";class dc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function vg(n,e,t,r=Eg,i=Ig){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h=Ce(G({},yg),{width:r.toString(),height:i.toString(),top:o,left:a}),d=Ae().toLowerCase();t&&(l=ql(d)?Tg:t),jl(d)&&(e=e||wg,h.scrollbars="yes");const _=Object.entries(h).reduce((A,[b,D])=>`${A}${b}=${D},`,"");if(Qp(d)&&l!=="_self")return Ag(e||"",l),new dc(null);const y=window.open(e||"",l,_);L(y,n,"popup-blocked");try{y.focus()}catch(A){}return new dc(y)}function Ag(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="__/auth/handler",Sg="emulator/auth/handler",Pg=encodeURIComponent("fac");async function fc(n,e,t,r,i,o){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:wn,eventId:i};if(e instanceof Xs){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",df(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,y]of Object.entries({}))a[_]=y}if(e instanceof fr){const _=e.getScopes().filter(y=>y!=="");_.length>0&&(a.scopes=_.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const _ of Object.keys(l))l[_]===void 0&&delete l[_];const h=await n._getAppCheckToken(),d=h?`#${Pg}=${encodeURIComponent(h)}`:"";return`${bg(n)}?${hr(l).slice(1)}${d}`}function bg({config:n}){return n.emulator?Ws(n,Sg):`https://${n.authDomain}/${Rg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="webStorageSupport";class Cg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iu,this._completeRedirectFn=Zm,this._overrideRedirectResult=Jm}async _openPopup(e,t,r,i){var a;at((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await fc(e,t,r,As(),i);return vg(e,o,Ys())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await fc(e,t,r,As(),i);return Om(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(at(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await _g(e),r=new tg(e);return t.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(us,{type:us},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[us];o!==void 0&&t(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=og(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kl()||$l()||Ks()}}const kg=Cg;var pc="@firebase/auth",mc="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Og(n){Xe(new ze("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ql(n)},d=new tm(r,i,o,h);return hm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xe(new ze("auth-internal",e=>{const t=Yt(e.getProvider("auth").getImmediate());return(r=>new Dg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(pc,mc,Ng(n)),Le(pc,mc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=5*60,Mg=vl("authIdTokenMaxAge")||Vg;let gc=null;const Lg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Mg)return;const i=t==null?void 0:t.token;gc!==i&&(gc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sT(n=qs()){const e=Jt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=um(n,{popupRedirectResolver:kg,persistence:[$m,km,iu]}),r=vl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Lg(o.toString());Pm(t,a,()=>a(t.currentUser)),Sm(t,l=>a(l))}}const i=Tl("auth");return i&&dm(t,`http://${i}`),t}function xg(){var n,e;return(e=(n=document.getElementsByTagName("head"))==null?void 0:n[0])!=null?e:document}nm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=He("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",xg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Og("Browser");var Fg="firebase",Ug="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(Fg,Ug,"app");const du="@firebase/installations",eo="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=1e4,pu=`w:${eo}`,mu="FIS_v2",Bg="https://firebaseinstallations.googleapis.com/v1",jg=60*60*1e3,$g="installations",qg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qt=new Qt($g,qg,Hg);function gu(n){return n instanceof We&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u({projectId:n}){return`${Bg}/projects/${n}/installations`}function yu(n){return{token:n.token,requestStatus:2,expiresIn:Wg(n.expiresIn),creationTime:Date.now()}}async function Eu(n,e){const r=(await e.json()).error;return qt.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Iu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function zg(n,{refreshToken:e}){const t=Iu(n);return t.append("Authorization",Gg(e)),t}async function Tu(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Wg(n){return Number(n.replace("s","000"))}function Gg(n){return`${mu} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=_u(n),i=Iu(n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:t,authVersion:mu,appId:n.appId,sdkVersion:pu},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await Tu(()=>fetch(r,l));if(h.ok){const d=await h.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:yu(d.authToken)}}else throw await Eu("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=/^[cdef][\w-]{21}$/,Ps="";function Xg(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Yg(n);return Jg.test(t)?t:Ps}catch(n){return Ps}}function Yg(n){return Qg(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Map;function Au(n,e){const t=Si(n);Ru(t,e),Zg(t,e)}function Ru(n,e){const t=vu.get(n);if(t)for(const r of t)r(e)}function Zg(n,e){const t=e_();t&&t.postMessage({key:n,fid:e}),t_()}let Ft=null;function e_(){return!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=n=>{Ru(n.data.key,n.data.fid)}),Ft}function t_(){vu.size===0&&Ft&&(Ft.close(),Ft=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebase-installations-database",r_=1,Ht="firebase-installations-store";let hs=null;function to(){return hs||(hs=Dl(n_,r_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ht)}}})),hs}async function oi(n,e){const t=Si(n),i=(await to()).transaction(Ht,"readwrite"),o=i.objectStore(Ht),a=await o.get(t);return await o.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Au(n,e.fid),e}async function Su(n){const e=Si(n),r=(await to()).transaction(Ht,"readwrite");await r.objectStore(Ht).delete(e),await r.done}async function Pi(n,e){const t=Si(n),i=(await to()).transaction(Ht,"readwrite"),o=i.objectStore(Ht),a=await o.get(t),l=e(a);return l===void 0?await o.delete(t):await o.put(l,t),await i.done,l&&(!a||a.fid!==l.fid)&&Au(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(n){let e;const t=await Pi(n.appConfig,r=>{const i=i_(r),o=s_(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===Ps?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function i_(n){const e=n||{fid:Xg(),registrationStatus:0};return Pu(e)}function s_(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=o_(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:a_(n)}:{installationEntry:e}}async function o_(n,e){try{const t=await Kg(n,e);return oi(n.appConfig,t)}catch(t){throw gu(t)&&t.customData.serverCode===409?await Su(n.appConfig):await oi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function a_(n){let e=await _c(n.appConfig);for(;e.registrationStatus===1;)await wu(100),e=await _c(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await no(n);return r||t}return e}function _c(n){return Pi(n,e=>{if(!e)throw qt.create("installation-not-found");return Pu(e)})}function Pu(n){return c_(n)?{fid:n.fid,registrationStatus:0}:n}function c_(n){return n.registrationStatus===1&&n.registrationTime+fu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_({appConfig:n,heartbeatServiceProvider:e},t){const r=u_(n,t),i=zg(n,t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:pu,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await Tu(()=>fetch(r,l));if(h.ok){const d=await h.json();return yu(d)}else throw await Eu("Generate Auth Token",h)}function u_(n,{fid:e}){return`${_u(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(n,e=!1){let t;const r=await Pi(n.appConfig,o=>{if(!bu(o))throw qt.create("not-registered");const a=o.authToken;if(!e&&f_(a))return o;if(a.requestStatus===1)return t=h_(n,e),o;{if(!navigator.onLine)throw qt.create("app-offline");const l=m_(o);return t=d_(n,l),l}});return t?await t:r.authToken}async function h_(n,e){let t=await yc(n.appConfig);for(;t.authToken.requestStatus===1;)await wu(100),t=await yc(n.appConfig);const r=t.authToken;return r.requestStatus===0?ro(n,e):r}function yc(n){return Pi(n,e=>{if(!bu(e))throw qt.create("not-registered");const t=e.authToken;return g_(t)?Ce(G({},e),{authToken:{requestStatus:0}}):e})}async function d_(n,e){try{const t=await l_(n,e),r=Ce(G({},e),{authToken:t});return await oi(n.appConfig,r),t}catch(t){if(gu(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Su(n.appConfig);else{const r=Ce(G({},e),{authToken:{requestStatus:0}});await oi(n.appConfig,r)}throw t}}function bu(n){return n!==void 0&&n.registrationStatus===2}function f_(n){return n.requestStatus===2&&!p_(n)}function p_(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+jg}function m_(n){const e={requestStatus:1,requestTime:Date.now()};return Ce(G({},n),{authToken:e})}function g_(n){return n.requestStatus===1&&n.requestTime+fu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(n){const e=n,{installationEntry:t,registrationPromise:r}=await no(e);return r?r.catch(console.error):ro(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(n,e=!1){const t=n;return await E_(t),(await ro(t,e)).token}async function E_(n){const{registrationPromise:e}=await no(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){if(!n||!n.options)throw ds("App Configuration");if(!n.name)throw ds("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ds(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ds(n){return qt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="installations",T_="installations-internal",w_=n=>{const e=n.getProvider("app").getImmediate(),t=I_(e),r=Jt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},v_=n=>{const e=n.getProvider("app").getImmediate(),t=Jt(e,Cu).getImmediate();return{getId:()=>__(t),getToken:i=>y_(t,i)}};function A_(){Xe(new ze(Cu,w_,"PUBLIC")),Xe(new ze(T_,v_,"PRIVATE"))}A_();Le(du,eo);Le(du,eo,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="analytics",R_="firebase_id",S_="origin",P_=60*1e3,b_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",io="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new Ti("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Oe=new Qt("analytics","Analytics",C_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n){if(!n.startsWith(io)){const e=Oe.create("invalid-gtag-resource",{gtagURL:n});return be.warn(e.message),""}return n}function ku(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function D_(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function N_(n,e){const t=D_("firebase-js-sdk-policy",{createScriptURL:k_}),r=document.createElement("script"),i=`${io}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function O_(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function V_(n,e,t,r,i,o){const a=r[i];try{if(a)await e[a];else{const h=(await ku(t)).find(d=>d.measurementId===i);h&&await e[h.appId]}}catch(l){be.error(l)}n("config",i,o)}async function M_(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await ku(t);for(const h of a){const d=l.find(y=>y.measurementId===h),_=d&&e[d.appId];if(_)o.push(_);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){be.error(o)}}function L_(n,e,t,r){async function i(o,...a){try{if(o==="event"){const[l,h]=a;await M_(n,e,t,l,h)}else if(o==="config"){const[l,h]=a;await V_(n,e,t,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,d]=a;n("get",l,h,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){be.error(l)}}return i}function x_(n,e,t,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=L_(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function F_(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(io)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=30,B_=1e3;class j_{constructor(e={},t=B_){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Du=new j_;function $_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function q_(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:$_(t)},i=b_.replace("{app-id}",e),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let l="";try{const h=await o.json();(a=h.error)!=null&&a.message&&(l=h.error.message)}catch(h){}throw Oe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function H_(n,e=Du,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Oe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Oe.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new G_;return setTimeout(async()=>{l.abort()},P_),Nu({appId:r,apiKey:i,measurementId:o},a,l,e)}async function Nu(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Du){var l;const{appId:o,measurementId:a}=n;try{await z_(r,e)}catch(h){if(a)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await q_(n);return i.deleteThrottleMetadata(o),h}catch(h){const d=h;if(!W_(d)){if(i.deleteThrottleMetadata(o),a)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw h}const _=Number((l=d==null?void 0:d.customData)==null?void 0:l.httpStatus)===503?$a(t,i.intervalMillis,U_):$a(t,i.intervalMillis),y={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return i.setThrottleMetadata(o,y),be.debug(`Calling attemptFetch again in ${_} millis`),Nu(n,y,r,i)}}function z_(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(Oe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function W_(n){if(!(n instanceof We)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class G_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function K_(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,a=Ce(G({},r),{send_to:o});n("event",t,a)}}async function Q_(n,e,t,r){if(r&&r.global){const i={};for(const o of Object.keys(t))i[`user_properties.${o}`]=t[o];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(){if(Pl())try{await bl()}catch(n){return be.warn(Oe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return be.warn(Oe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function X_(n,e,t,r,i,o,a){var A;const l=H_(n);l.then(b=>{t[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>be.error(b)),e.push(l);const h=J_().then(b=>{if(b)return r.getId()}),[d,_]=await Promise.all([l,h]);F_(o)||N_(o,d.measurementId),i("js",new Date);const y=(A=a==null?void 0:a.config)!=null?A:{};return y[S_]="firebase",y.update=!0,_!=null&&(y[R_]=_),i("config",d.measurementId,y),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.app=e}_delete(){return delete dn[this.app.options.appId],Promise.resolve()}}let dn={},Ec=[];const Ic={};let fs="dataLayer",Z_="gtag",Tc,so,wc=!1;function ey(){const n=[];if(Sl()&&n.push("This is a browser extension environment."),cf()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Oe.create("invalid-analytics-context",{errorInfo:e});be.warn(t.message)}}function ty(n,e,t){ey();const r=n.options.appId;if(!r)throw Oe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Oe.create("no-api-key");if(dn[r]!=null)throw Oe.create("already-exists",{id:r});if(!wc){O_(fs);const{wrappedGtag:o,gtagCore:a}=x_(dn,Ec,Ic,fs,Z_);so=o,Tc=a,wc=!0}return dn[r]=X_(n,Ec,Ic,e,Tc,fs,t),new Y_(n)}function oT(n=qs()){n=Re(n);const e=Jt(n,ai);return e.isInitialized()?e.getImmediate():ny(n)}function ny(n,e={}){const t=Jt(n,ai);if(t.isInitialized()){const i=t.getImmediate();if(vt(e,t.getOptions()))return i;throw Oe.create("already-initialized")}return t.initialize({options:e})}function ry(n,e,t){n=Re(n),Q_(so,dn[n.app.options.appId],e,t).catch(r=>be.error(r))}function iy(n,e,t,r){n=Re(n),K_(so,dn[n.app.options.appId],e,t,r).catch(i=>be.error(i))}const vc="@firebase/analytics",Ac="0.10.19";function sy(){Xe(new ze(ai,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ty(r,i,t)},"PUBLIC")),Xe(new ze("analytics-internal",n,"PRIVATE")),Le(vc,Ac),Le(vc,Ac,"esm2020");function n(e){try{const t=e.getProvider(ai).getImmediate();return{logEvent:(r,i,o)=>iy(t,r,i,o),setUserProperties:(r,i)=>ry(t,r,i)}}catch(t){throw Oe.create("interop-component-reg-failed",{reason:t})}}}sy();var Rc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,p){function g(){}g.prototype=p.prototype,I.F=p.prototype,I.prototype=new g,I.prototype.constructor=I,I.D=function(T,E,v){for(var m=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)m[pe-2]=arguments[pe];return p.prototype[E].apply(T,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,p,g){g||(g=0);const T=Array(16);if(typeof p=="string")for(var E=0;E<16;++E)T[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;E<16;++E)T[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=I.g[0],g=I.g[1],E=I.g[2];let v=I.g[3],m;m=p+(v^g&(E^v))+T[0]+3614090360&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(E^p&(g^E))+T[1]+3905402710&4294967295,v=p+(m<<12&4294967295|m>>>20),m=E+(g^v&(p^g))+T[2]+606105819&4294967295,E=v+(m<<17&4294967295|m>>>15),m=g+(p^E&(v^p))+T[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(v^g&(E^v))+T[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(E^p&(g^E))+T[5]+1200080426&4294967295,v=p+(m<<12&4294967295|m>>>20),m=E+(g^v&(p^g))+T[6]+2821735955&4294967295,E=v+(m<<17&4294967295|m>>>15),m=g+(p^E&(v^p))+T[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(v^g&(E^v))+T[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(E^p&(g^E))+T[9]+2336552879&4294967295,v=p+(m<<12&4294967295|m>>>20),m=E+(g^v&(p^g))+T[10]+4294925233&4294967295,E=v+(m<<17&4294967295|m>>>15),m=g+(p^E&(v^p))+T[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(v^g&(E^v))+T[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(E^p&(g^E))+T[13]+4254626195&4294967295,v=p+(m<<12&4294967295|m>>>20),m=E+(g^v&(p^g))+T[14]+2792965006&4294967295,E=v+(m<<17&4294967295|m>>>15),m=g+(p^E&(v^p))+T[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^v&(g^E))+T[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^E&(p^g))+T[6]+3225465664&4294967295,v=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(v^p))+T[11]+643717713&4294967295,E=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(E^v))+T[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^v&(g^E))+T[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^E&(p^g))+T[10]+38016083&4294967295,v=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(v^p))+T[15]+3634488961&4294967295,E=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(E^v))+T[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^v&(g^E))+T[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^E&(p^g))+T[14]+3275163606&4294967295,v=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(v^p))+T[3]+4107603335&4294967295,E=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(E^v))+T[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^v&(g^E))+T[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^E&(p^g))+T[2]+4243563512&4294967295,v=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(v^p))+T[7]+1735328473&4294967295,E=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(E^v))+T[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^v)+T[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^E)+T[8]+2272392833&4294967295,v=p+(m<<11&4294967295|m>>>21),m=E+(v^p^g)+T[11]+1839030562&4294967295,E=v+(m<<16&4294967295|m>>>16),m=g+(E^v^p)+T[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^v)+T[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^E)+T[4]+1272893353&4294967295,v=p+(m<<11&4294967295|m>>>21),m=E+(v^p^g)+T[7]+4139469664&4294967295,E=v+(m<<16&4294967295|m>>>16),m=g+(E^v^p)+T[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^v)+T[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^E)+T[0]+3936430074&4294967295,v=p+(m<<11&4294967295|m>>>21),m=E+(v^p^g)+T[3]+3572445317&4294967295,E=v+(m<<16&4294967295|m>>>16),m=g+(E^v^p)+T[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^v)+T[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^E)+T[12]+3873151461&4294967295,v=p+(m<<11&4294967295|m>>>21),m=E+(v^p^g)+T[15]+530742520&4294967295,E=v+(m<<16&4294967295|m>>>16),m=g+(E^v^p)+T[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~v))+T[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~E))+T[7]+1126891415&4294967295,v=p+(m<<10&4294967295|m>>>22),m=E+(p^(v|~g))+T[14]+2878612391&4294967295,E=v+(m<<15&4294967295|m>>>17),m=g+(v^(E|~p))+T[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~v))+T[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~E))+T[3]+2399980690&4294967295,v=p+(m<<10&4294967295|m>>>22),m=E+(p^(v|~g))+T[10]+4293915773&4294967295,E=v+(m<<15&4294967295|m>>>17),m=g+(v^(E|~p))+T[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~v))+T[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~E))+T[15]+4264355552&4294967295,v=p+(m<<10&4294967295|m>>>22),m=E+(p^(v|~g))+T[6]+2734768916&4294967295,E=v+(m<<15&4294967295|m>>>17),m=g+(v^(E|~p))+T[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~v))+T[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~E))+T[11]+3174756917&4294967295,v=p+(m<<10&4294967295|m>>>22),m=E+(p^(v|~g))+T[2]+718787259&4294967295,E=v+(m<<15&4294967295|m>>>17),m=g+(v^(E|~p))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+v&4294967295}r.prototype.v=function(I,p){p===void 0&&(p=I.length);const g=p-this.blockSize,T=this.C;let E=this.h,v=0;for(;v<p;){if(E==0)for(;v<=g;)i(this,I,v),v+=this.blockSize;if(typeof I=="string"){for(;v<p;)if(T[E++]=I.charCodeAt(v++),E==this.blockSize){i(this,T),E=0;break}}else for(;v<p;)if(T[E++]=I[v++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=p},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;p=this.o*8;for(var g=I.length-8;g<I.length;++g)I[g]=p&255,p/=256;for(this.v(I),I=Array(16),p=0,g=0;g<4;++g)for(let T=0;T<32;T+=8)I[p++]=this.g[g]>>>T&255;return I};function o(I,p){var g=l;return Object.prototype.hasOwnProperty.call(g,I)?g[I]:g[I]=p(I)}function a(I,p){this.h=p;const g=[];let T=!0;for(let E=I.length-1;E>=0;E--){const v=I[E]|0;T&&v==p||(g[E]=v,T=!1)}this.g=g}var l={};function h(I){return-128<=I&&I<128?o(I,function(p){return new a([p|0],p<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return y;if(I<0)return k(d(-I));const p=[];let g=1;for(let T=0;I>=g;T++)p[T]=I/g|0,g*=4294967296;return new a(p,0)}function _(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return k(_(I.substring(1),p));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(p,8));let T=y;for(let v=0;v<I.length;v+=8){var E=Math.min(8,I.length-v);const m=parseInt(I.substring(v,v+E),p);E<8?(E=d(Math.pow(p,E)),T=T.j(E).add(d(m))):(T=T.j(g),T=T.add(d(m)))}return T}var y=h(0),A=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-k(this).m();let I=0,p=1;for(let g=0;g<this.g.length;g++){const T=this.i(g);I+=(T>=0?T:4294967296+T)*p,p*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(O(this))return"-"+k(this).toString(I);const p=d(Math.pow(I,6));var g=this;let T="";for(;;){const E=Q(g,p).g;g=U(g,E.j(p));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(I);if(g=E,D(g))return v+T;for(;v.length<6;)v="0"+v;T=v+T}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(let p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=U(this,I),O(I)?-1:D(I)?0:1};function k(I){const p=I.g.length,g=[];for(let T=0;T<p;T++)g[T]=~I.g[T];return new a(g,~I.h).add(A)}n.abs=function(){return O(this)?k(this):this},n.add=function(I){const p=Math.max(this.g.length,I.g.length),g=[];let T=0;for(let E=0;E<=p;E++){let v=T+(this.i(E)&65535)+(I.i(E)&65535),m=(v>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);T=m>>>16,v&=65535,m&=65535,g[E]=m<<16|v}return new a(g,g[g.length-1]&-2147483648?-1:0)};function U(I,p){return I.add(k(p))}n.j=function(I){if(D(this)||D(I))return y;if(O(this))return O(I)?k(this).j(k(I)):k(k(this).j(I));if(O(I))return k(this.j(k(I)));if(this.l(b)<0&&I.l(b)<0)return d(this.m()*I.m());const p=this.g.length+I.g.length,g=[];for(var T=0;T<2*p;T++)g[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<I.g.length;E++){const v=this.i(T)>>>16,m=this.i(T)&65535,pe=I.i(E)>>>16,et=I.i(E)&65535;g[2*T+2*E]+=m*et,F(g,2*T+2*E),g[2*T+2*E+1]+=v*et,F(g,2*T+2*E+1),g[2*T+2*E+1]+=m*pe,F(g,2*T+2*E+1),g[2*T+2*E+2]+=v*pe,F(g,2*T+2*E+2)}for(I=0;I<p;I++)g[I]=g[2*I+1]<<16|g[2*I];for(I=p;I<2*p;I++)g[I]=0;return new a(g,0)};function F(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function z(I,p){this.g=I,this.h=p}function Q(I,p){if(D(p))throw Error("division by zero");if(D(I))return new z(y,y);if(O(I))return p=Q(k(I),p),new z(k(p.g),k(p.h));if(O(p))return p=Q(I,k(p)),new z(k(p.g),p.h);if(I.g.length>30){if(O(I)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=A,T=p;T.l(I)<=0;)g=re(g),T=re(T);var E=Z(g,1),v=Z(T,1);for(T=Z(T,2),g=Z(g,2);!D(T);){var m=v.add(T);m.l(I)<=0&&(E=E.add(g),v=m),T=Z(T,1),g=Z(g,1)}return p=U(I,E.j(p)),new z(E,p)}for(E=y;I.l(p)>=0;){for(g=Math.max(1,Math.floor(I.m()/p.m())),T=Math.ceil(Math.log(g)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),v=d(g),m=v.j(p);O(m)||m.l(I)>0;)g-=T,v=d(g),m=v.j(p);D(v)&&(v=A),E=E.add(v),I=U(I,m)}return new z(E,I)}n.B=function(I){return Q(this,I).h},n.and=function(I){const p=Math.max(this.g.length,I.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)&I.i(T);return new a(g,this.h&I.h)},n.or=function(I){const p=Math.max(this.g.length,I.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)|I.i(T);return new a(g,this.h|I.h)},n.xor=function(I){const p=Math.max(this.g.length,I.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)^I.i(T);return new a(g,this.h^I.h)};function re(I){const p=I.g.length+1,g=[];for(let T=0;T<p;T++)g[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(g,I.h)}function Z(I,p){const g=p>>5;p%=32;const T=I.g.length-g,E=[];for(let v=0;v<T;v++)E[v]=p>0?I.i(v+g)>>>p|I.i(v+g+1)<<32-p:I.i(v+g);return new a(E,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=_,oo=a}).apply(typeof Rc!="undefined"?Rc:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Lr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ou,Gn,Vu,Gr,bs,Mu,Lu,xu;(function(){var n,e=Object.defineProperty;function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lr=="object"&&Lr];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var w=s[f];if(!(w in u))break e;u=u[w]}s=s[s.length-1],f=u[s],c=c(f),c!=f&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function h(s,c,u){return s.call.apply(s.bind,arguments)}function d(s,c,u){return d=h,d.apply(null,arguments)}function _(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function y(s,c){function u(){}u.prototype=c.prototype,s.Z=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(f,w,R){for(var C=Array(arguments.length-2),j=2;j<arguments.length;j++)C[j-2]=arguments[j];return c.prototype[w].apply(f,C)}}var A=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function b(s){const c=s.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=s[f];return u}return[]}function D(s,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=s.length||0;const R=w.length||0;s.length=u+R;for(let C=0;C<R;C++)s[u+C]=w[C]}else s.push(w)}}class O{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(s){a.setTimeout(()=>{throw s},0)}function U(){var s=I;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class F{constructor(){this.h=this.g=null}add(c,u){const f=z.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var z=new O(()=>new Q,s=>s.reset());class Q{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let re,Z=!1,I=new F,p=()=>{const s=Promise.resolve(void 0);re=()=>{s.then(g)}};function g(){for(var s;s=U();){try{s.h.call(s.g)}catch(u){k(u)}var c=z;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}Z=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch(u){}return s}();function m(s){return/^[\s\xa0]*$/.test(s)}function pe(s,c){E.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}y(pe,E),pe.prototype.init=function(s,c){const u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&pe.Z.h.call(this)},pe.prototype.h=function(){pe.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var et="closure_listenable_"+(Math.random()*1e6|0),Sn=0;function Pn(s,c,u,f,w){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=w,this.key=++Sn,this.da=this.fa=!1}function N(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function x(s,c,u){for(const f in s)c.call(u,s[f],f,s)}function B(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function ee(s){const c={};for(const u in s)c[u]=s[u];return c}const oe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ct(s,c){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)s[u]=f[u];for(let R=0;R<oe.length;R++)u=oe[R],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function Ve(s){this.src=s,this.g={},this.h=0}Ve.prototype.add=function(s,c,u,f,w){const R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);const C=Fe(s,c,f,w);return C>-1?(c=s[C],u||(c.fa=!1)):(c=new Pn(c,this.src,R,!!f,w),c.fa=u,s.push(c)),c};function kt(s,c){const u=c.type;if(u in s.g){var f=s.g[u],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=w>=0)&&Array.prototype.splice.call(f,w,1),R&&(N(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Fe(s,c,u,f){for(let w=0;w<s.length;++w){const R=s[w];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return w}return-1}var ct="closure_lm_"+(Math.random()*1e6|0),Li={};function Oo(s,c,u,f,w){if(Array.isArray(c)){for(let R=0;R<c.length;R++)Oo(s,c[R],u,f,w);return null}return u=Lo(u),s&&s[et]?s.J(c,u,l(f)?!!f.capture:!1,w):Uh(s,c,u,!1,f,w)}function Uh(s,c,u,f,w,R){if(!c)throw Error("Invalid event type");const C=l(w)?!!w.capture:!!w;let j=Fi(s);if(j||(s[ct]=j=new Ve(s)),u=j.add(c,u,f,C,R),u.proxy)return u;if(f=Bh(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)v||(w=C),w===void 0&&(w=!1),s.addEventListener(c.toString(),f,w);else if(s.attachEvent)s.attachEvent(Mo(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Bh(){function s(u){return c.call(s.src,s.listener,u)}const c=jh;return s}function Vo(s,c,u,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)Vo(s,c[R],u,f,w);else f=l(f)?!!f.capture:!!f,u=Lo(u),s&&s[et]?(s=s.i,R=String(c).toString(),R in s.g&&(c=s.g[R],u=Fe(c,u,f,w),u>-1&&(N(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete s.g[R],s.h--)))):s&&(s=Fi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Fe(c,u,f,w)),(u=s>-1?c[s]:null)&&xi(u))}function xi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[et])kt(c.i,s);else{var u=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(u,f,s.capture):c.detachEvent?c.detachEvent(Mo(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Fi(c))?(kt(u,s),u.h==0&&(u.src=null,c[ct]=null)):N(s)}}}function Mo(s){return s in Li?Li[s]:Li[s]="on"+s}function jh(s,c){if(s.da)s=!0;else{c=new pe(c,this);const u=s.listener,f=s.ha||s.src;s.fa&&xi(s),s=u.call(f,c)}return s}function Fi(s){return s=s[ct],s instanceof Ve?s:null}var Ui="__closure_events_fn_"+(Math.random()*1e9>>>0);function Lo(s){return typeof s=="function"?s:(s[Ui]||(s[Ui]=function(c){return s.handleEvent(c)}),s[Ui])}function Ee(){T.call(this),this.i=new Ve(this),this.M=this,this.G=null}y(Ee,T),Ee.prototype[et]=!0,Ee.prototype.removeEventListener=function(s,c,u,f){Vo(this,s,c,u,f)};function Se(s,c){var u,f=s.G;if(f)for(u=[];f;f=f.G)u.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new E(c,s);else if(c instanceof E)c.target=c.target||s;else{var w=c;c=new E(f,s),Ct(c,w)}w=!0;let R,C;if(u)for(C=u.length-1;C>=0;C--)R=c.g=u[C],w=Tr(R,f,!0,c)&&w;if(R=c.g=s,w=Tr(R,f,!0,c)&&w,w=Tr(R,f,!1,c)&&w,u)for(C=0;C<u.length;C++)R=c.g=u[C],w=Tr(R,f,!1,c)&&w}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const u=s.g[c];for(let f=0;f<u.length;f++)N(u[f]);delete s.g[c],s.h--}}this.G=null},Ee.prototype.J=function(s,c,u,f){return this.i.add(String(s),c,!1,u,f)},Ee.prototype.K=function(s,c,u,f){return this.i.add(String(s),c,!0,u,f)};function Tr(s,c,u,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let R=0;R<c.length;++R){const C=c[R];if(C&&!C.da&&C.capture==u){const j=C.listener,ue=C.ha||C.src;C.fa&&kt(s.i,C),w=j.call(ue,f)!==!1&&w}}return w&&!f.defaultPrevented}function $h(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function xo(s){s.g=$h(()=>{s.g=null,s.i&&(s.i=!1,xo(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class qh extends T{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:xo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(s){T.call(this),this.h=s,this.g={}}y(bn,T);var Fo=[];function Uo(s){x(s.g,function(c,u){this.g.hasOwnProperty(u)&&xi(c)},s),s.g={}}bn.prototype.N=function(){bn.Z.N.call(this),Uo(this)},bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bi=a.JSON.stringify,Hh=a.JSON.parse,zh=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function Bo(){}function jo(){}var Cn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ji(){E.call(this,"d")}y(ji,E);function $i(){E.call(this,"c")}y($i,E);var Dt={},$o=null;function wr(){return $o=$o||new Ee}Dt.Ia="serverreachability";function qo(s){E.call(this,Dt.Ia,s)}y(qo,E);function kn(s){const c=wr();Se(c,new qo(c))}Dt.STAT_EVENT="statevent";function Ho(s,c){E.call(this,Dt.STAT_EVENT,s),this.stat=c}y(Ho,E);function Pe(s){const c=wr();Se(c,new Ho(c,s))}Dt.Ja="timingevent";function zo(s,c){E.call(this,Dt.Ja,s),this.size=c}y(zo,E);function Dn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function Nn(){this.g=!0}Nn.prototype.ua=function(){this.g=!1};function Wh(s,c,u,f,w,R){s.info(function(){if(s.g)if(R){var C="",j=R.split("&");for(let J=0;J<j.length;J++){var ue=j[J].split("=");if(ue.length>1){const he=ue[0];ue=ue[1];const Ke=he.split("_");C=Ke.length>=2&&Ke[1]=="type"?C+(he+"="+ue+"&"):C+(he+"=redacted&")}}}else C=null;else C=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+u+`
`+C})}function Gh(s,c,u,f,w,R,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+u+`
`+R+" "+C})}function tn(s,c,u,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Qh(s,u)+(f?" "+f:"")})}function Kh(s,c){s.info(function(){return"TIMEOUT: "+c})}Nn.prototype.info=function(){};function Qh(s,c){if(!s.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(s=0;s<R.length;s++)if(Array.isArray(R[s])){var u=R[s];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let C=1;C<f.length;C++)f[C]=""}}}}return Bi(R)}catch(R){return c}}var vr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Go;function qi(){}y(qi,Bo),qi.prototype.g=function(){return new XMLHttpRequest},Go=new qi;function On(s){return encodeURIComponent(String(s))}function Jh(s){var c=1;s=s.split(":");const u=[];for(;c>0&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function lt(s,c,u,f){this.j=s,this.i=c,this.l=u,this.S=f||1,this.V=new bn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ko}function Ko(){this.i=null,this.g="",this.h=!1}var Qo={},Hi={};function zi(s,c,u){s.M=1,s.A=Rr(Ge(c)),s.u=u,s.R=!0,Jo(s,null)}function Jo(s,c){s.F=Date.now(),Ar(s),s.B=Ge(s.A);var u=s.B,f=s.S;Array.isArray(f)||(f=[String(f)]),la(u.i,"t",f),s.C=0,u=s.j.L,s.h=new Ko,s.g=Pa(s.j,u?c:null,!s.u),s.P>0&&(s.O=new qh(d(s.Y,s,s.g),s.P)),c=s.V,u=s.g,f=s.ba;var w="readystatechange";Array.isArray(w)||(w&&(Fo[0]=w.toString()),w=Fo);for(let R=0;R<w.length;R++){const C=Oo(u,w[R],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=s.J?ee(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),kn(),Wh(s.i,s.v,s.B,s.l,s.S,s.u)}lt.prototype.ba=function(s){s=s.target;const c=this.O;c&&dt(s)==3?c.j():this.Y(s)},lt.prototype.Y=function(s){try{if(s==this.g)e:{const j=dt(this.g),ue=this.g.ya(),J=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||ga(this.g)))){this.K||j!=4||ue==7||(ue==8||J<=0?kn(3):kn(2)),Wi(this);var c=this.g.ca();this.X=c;var u=Xh(this);if(this.o=c==200,Gh(this.i,this.v,this.B,this.l,this.S,j,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(f)){var R=f;break t}}R=null}if(s=R)tn(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Gi(this,s);else{this.o=!1,this.m=3,Pe(12),Nt(this),Vn(this);break e}}if(this.R){s=!0;let he;for(;!this.K&&this.C<u.length;)if(he=Yh(this,u),he==Hi){j==4&&(this.m=4,Pe(14),s=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(he==Qo){this.m=4,Pe(15),tn(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else tn(this.i,this.l,he,null),Gi(this,he);if(Xo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||u.length!=0||this.h.h||(this.m=1,Pe(16),s=!1),this.o=this.o&&s,!s)tn(this.i,this.l,u,"[Invalid Chunked Response]"),Nt(this),Vn(this);else if(u.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),ts(C),C.P=!0,Pe(11))}}else tn(this.i,this.l,u,null),Gi(this,u);j==4&&Nt(this),this.o&&!this.K&&(j==4?va(this.j,this):(this.o=!1,Ar(this)))}else dd(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Pe(12)):(this.m=0,Pe(13)),Nt(this),Vn(this)}}}catch(j){}finally{}};function Xh(s){if(!Xo(s))return s.g.la();const c=ga(s.g);if(c==="")return"";let u="";const f=c.length,w=dt(s.g)==4;if(!s.h.i){if(typeof TextDecoder=="undefined")return Nt(s),Vn(s),"";s.h.i=new a.TextDecoder}for(let R=0;R<f;R++)s.h.h=!0,u+=s.h.i.decode(c[R],{stream:!(w&&R==f-1)});return c.length=0,s.h.g+=u,s.C=0,s.h.g}function Xo(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Yh(s,c){var u=s.C,f=c.indexOf(`
`,u);return f==-1?Hi:(u=Number(c.substring(u,f)),isNaN(u)?Qo:(f+=1,f+u>c.length?Hi:(c=c.slice(f,f+u),s.C=f+u,c)))}lt.prototype.cancel=function(){this.K=!0,Nt(this)};function Ar(s){s.T=Date.now()+s.H,Yo(s,s.H)}function Yo(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Dn(d(s.aa,s),c)}function Wi(s){s.D&&(a.clearTimeout(s.D),s.D=null)}lt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Kh(this.i,this.B),this.M!=2&&(kn(),Pe(17)),Nt(this),this.m=2,Vn(this)):Yo(this,this.T-s)};function Vn(s){s.j.I==0||s.K||va(s.j,s)}function Nt(s){Wi(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,Uo(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function Gi(s,c){try{var u=s.j;if(u.I!=0&&(u.g==s||Ki(u.h,s))){if(!s.L&&Ki(u.h,s)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch(J){f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)kr(u),br(u);else break e;es(u),Pe(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Dn(d(u.Va,u),6e3));ta(u.h)<=1&&u.ta&&(u.ta=void 0)}else Vt(u,11)}else if((s.L||u.g==s)&&kr(u),!m(c))for(w=u.Ba.g.parse(c),c=0;c<w.length;c++){let J=w[c];const he=J[0];if(!(he<=u.K))if(u.K=he,J=J[1],u.I==2)if(J[0]=="c"){u.M=J[1],u.ba=J[2];const Ke=J[3];Ke!=null&&(u.ka=Ke,u.j.info("VER="+u.ka));const Mt=J[4];Mt!=null&&(u.za=Mt,u.j.info("SVER="+u.za));const ft=J[5];ft!=null&&typeof ft=="number"&&ft>0&&(f=1.5*ft,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const pt=s.g;if(pt){const Nr=pt.g?pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nr){var R=f.h;R.g||Nr.indexOf("spdy")==-1&&Nr.indexOf("quic")==-1&&Nr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Qi(R,R.h),R.h=null))}if(f.G){const ns=pt.g?pt.g.getResponseHeader("X-HTTP-Session-Id"):null;ns&&(f.wa=ns,Y(f.J,f.G,ns))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var C=s;if(f.na=Sa(f,f.L?f.ba:null,f.W),C.L){na(f.h,C);var j=C,ue=f.O;ue&&(j.H=ue),j.D&&(Wi(j),Ar(j)),f.g=C}else Ta(f);u.i.length>0&&Cr(u)}else J[0]!="stop"&&J[0]!="close"||Vt(u,7);else u.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Vt(u,7):Zi(u):J[0]!="noop"&&u.l&&u.l.qa(J),u.A=0)}}kn(4)}catch(J){}}var Zh=class{constructor(s,c){this.g=s,this.map=c}};function Zo(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ea(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ta(s){return s.h?1:s.g?s.g.size:0}function Ki(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Qi(s,c){s.g?s.g.add(c):s.h=c}function na(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Zo.prototype.cancel=function(){if(this.i=ra(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ra(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.G);return c}return b(s.i)}var ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ed(s,c){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const f=s[u].indexOf("=");let w,R=null;f>=0?(w=s[u].substring(0,f),R=s[u].substring(f+1)):w=s[u],c(w,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ut(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof ut?(this.l=s.l,Mn(this,s.j),this.o=s.o,this.g=s.g,Ln(this,s.u),this.h=s.h,Ji(this,ua(s.i)),this.m=s.m):s&&(c=String(s).match(ia))?(this.l=!1,Mn(this,c[1]||"",!0),this.o=xn(c[2]||""),this.g=xn(c[3]||"",!0),Ln(this,c[4]),this.h=xn(c[5]||"",!0),Ji(this,c[6]||"",!0),this.m=xn(c[7]||"")):(this.l=!1,this.i=new Un(null,this.l))}ut.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(Fn(c,sa,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Fn(c,sa,!0),"@"),s.push(On(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Fn(u,u.charAt(0)=="/"?rd:nd,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Fn(u,sd)),s.join("")},ut.prototype.resolve=function(s){const c=Ge(this);let u=!!s.j;u?Mn(c,s.j):u=!!s.o,u?c.o=s.o:u=!!s.g,u?c.g=s.g:u=s.u!=null;var f=s.h;if(u)Ln(c,s.u);else if(u=!!s.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const R=[];for(let C=0;C<w.length;){const j=w[C++];j=="."?f&&C==w.length&&R.push(""):j==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&C==w.length&&R.push("")):(R.push(j),f=!0)}f=R.join("/")}else f=w}return u?c.h=f:u=s.i.toString()!=="",u?Ji(c,ua(s.i)):u=!!s.m,u&&(c.m=s.m),c};function Ge(s){return new ut(s)}function Mn(s,c,u){s.j=u?xn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Ln(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function Ji(s,c,u){c instanceof Un?(s.i=c,od(s.i,s.l)):(u||(c=Fn(c,id)),s.i=new Un(c,s.l))}function Y(s,c,u){s.i.set(c,u)}function Rr(s){return Y(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function xn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Fn(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,td),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function td(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var sa=/[#\/\?@]/g,nd=/[#\?:]/g,rd=/[#\?]/g,id=/[#\?@]/g,sd=/#/g;function Un(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Ot(s){s.g||(s.g=new Map,s.h=0,s.i&&ed(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Un.prototype,n.add=function(s,c){Ot(this),this.i=null,s=nn(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function oa(s,c){Ot(s),c=nn(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function aa(s,c){return Ot(s),c=nn(s,c),s.g.has(c)}n.forEach=function(s,c){Ot(this),this.g.forEach(function(u,f){u.forEach(function(w){s.call(c,w,f,this)},this)},this)};function ca(s,c){Ot(s);let u=[];if(typeof c=="string")aa(s,c)&&(u=u.concat(s.g.get(nn(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)u=u.concat(s[c]);return u}n.set=function(s,c){return Ot(this),this.i=null,s=nn(this,s),aa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=ca(this,s),s.length>0?String(s[0]):c):c};function la(s,c,u){oa(s,c),u.length>0&&(s.i=null,s.g.set(nn(s,c),b(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const w=On(u);u=ca(this,u);for(let R=0;R<u.length;R++){let C=w;u[R]!==""&&(C+="="+On(u[R])),s.push(C)}}return this.i=s.join("&")};function ua(s){const c=new Un;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function nn(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function od(s,c){c&&!s.j&&(Ot(s),s.i=null,s.g.forEach(function(u,f){const w=f.toLowerCase();f!=w&&(oa(this,f),la(this,w,u))},s)),s.j=c}function ad(s,c){const u=new Nn;if(a.Image){const f=new Image;f.onload=_(ht,u,"TestLoadImage: loaded",!0,c,f),f.onerror=_(ht,u,"TestLoadImage: error",!1,c,f),f.onabort=_(ht,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=_(ht,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function cd(s,c){const u=new Nn,f=new AbortController,w=setTimeout(()=>{f.abort(),ht(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ht(u,"TestPingServer: ok",!0,c):ht(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ht(u,"TestPingServer: error",!1,c)})}function ht(s,c,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch(R){}}function ld(){this.g=new zh}function Xi(s){this.i=s.Sb||null,this.h=s.ab||!1}y(Xi,Bo),Xi.prototype.g=function(){return new Sr(this.i,this.h)};function Sr(s,c){Ee.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Sr,Ee),n=Sr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,jn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ha(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function ha(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Bn(this):jn(this),this.readyState==3&&ha(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Bn(this))},n.Na=function(s){this.g&&(this.response=s,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,jn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function jn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function da(s){let c="";return x(s,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Yi(s,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=da(u),typeof s=="string"?u!=null&&On(u):Y(s,c,u))}function ie(s){Ee.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ie,Ee);var ud=/^https?$/i,hd=["POST","PUT"];n=ie.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Go.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){fa(this,R);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),w=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(hd,c,void 0)>=0)||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of u)this.g.setRequestHeader(R,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(R){fa(this,R)}};function fa(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,pa(s),Pr(s)}function pa(s){s.A||(s.A=!0,Se(s,"complete"),Se(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,Se(this,"complete"),Se(this,"abort"),Pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pr(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ma(this):this.Xa())},n.Xa=function(){ma(this)};function ma(s){if(s.h&&typeof o!="undefined"){if(s.v&&dt(s)==4)setTimeout(s.Ca.bind(s),0);else if(Se(s,"readystatechange"),dt(s)==4){s.h=!1;try{const R=s.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=R===0){let C=String(s.D).match(ia)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),f=!ud.test(C?C.toLowerCase():"")}u=f}if(u)Se(s,"complete"),Se(s,"success");else{s.o=6;try{var w=dt(s)>2?s.g.statusText:""}catch(C){w=""}s.l=w+" ["+s.ca()+"]",pa(s)}}finally{Pr(s)}}}}function Pr(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,c||Se(s,"ready");try{u.onreadystatechange=null}catch(f){}}}n.isActive=function(){return!!this.g};function dt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return dt(this)>2?this.g.status:-1}catch(s){return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch(s){return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Hh(c)}};function ga(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch(c){return null}}function dd(s){const c={};s=(s.g&&dt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(m(s[f]))continue;var u=Jh(s[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[w]||[];c[w]=R,R.push(u)}B(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function _a(s){this.za=0,this.i=[],this.j=new Nn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$n("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$n("baseRetryDelayMs",5e3,s),this.Za=$n("retryDelaySeedMs",1e4,s),this.Ta=$n("forwardChannelMaxRetries",2,s),this.va=$n("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Zo(s&&s.concurrentRequestLimit),this.Ba=new ld,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_a.prototype,n.ka=8,n.I=1,n.connect=function(s,c,u,f){Pe(0),this.W=s,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=Sa(this,null,this.W),Cr(this)};function Zi(s){if(ya(s),s.I==3){var c=s.V++,u=Ge(s.J);if(Y(u,"SID",s.M),Y(u,"RID",c),Y(u,"TYPE","terminate"),qn(s,u),c=new lt(s,s.j,c),c.M=2,c.A=Rr(Ge(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch(f){}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=Pa(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ar(c)}Ra(s)}function br(s){s.g&&(ts(s),s.g.cancel(),s.g=null)}function ya(s){br(s),s.v&&(a.clearTimeout(s.v),s.v=null),kr(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Cr(s){if(!ea(s.h)&&!s.m){s.m=!0;var c=s.Ea;re||p(),Z||(re(),Z=!0),I.add(c,s),s.D=0}}function fd(s,c){return ta(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Dn(d(s.Ea,s,c),Aa(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const w=new lt(this,this.j,s);let R=this.o;if(this.U&&(R?(R=ee(R),Ct(R,this.U)):R=this.U),this.u!==null||this.R||(w.J=R,R=null),this.S)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ia(this,w,c),u=Ge(this.J),Y(u,"RID",s),Y(u,"CVER",22),this.G&&Y(u,"X-HTTP-Session-Id",this.G),qn(this,u),R&&(this.R?c="headers="+On(da(R))+"&"+c:this.u&&Yi(u,this.u,R)),Qi(this.h,w),this.Ra&&Y(u,"TYPE","init"),this.S?(Y(u,"$req",c),Y(u,"SID","null"),w.U=!0,zi(w,u,null)):zi(w,u,c),this.I=2}}else this.I==3&&(s?Ea(this,s):this.i.length==0||ea(this.h)||Ea(this))};function Ea(s,c){var u;c?u=c.l:u=s.V++;const f=Ge(s.J);Y(f,"SID",s.M),Y(f,"RID",u),Y(f,"AID",s.K),qn(s,f),s.u&&s.o&&Yi(f,s.u,s.o),u=new lt(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),c&&(s.i=c.G.concat(s.i)),c=Ia(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Qi(s.h,u),zi(u,f,c)}function qn(s,c){s.H&&x(s.H,function(u,f){Y(c,f,u)}),s.l&&x({},function(u,f){Y(c,f,u)})}function Ia(s,c,u){u=Math.min(s.i.length,u);const f=s.l?d(s.l.Ka,s.l,s):null;e:{var w=s.i;let j=-1;for(;;){const ue=["count="+u];j==-1?u>0?(j=w[0].g,ue.push("ofs="+j)):j=0:ue.push("ofs="+j);let J=!0;for(let he=0;he<u;he++){var R=w[he].g;const Ke=w[he].map;if(R-=j,R<0)j=Math.max(0,w[he].g-100),J=!1;else try{R="req"+R+"_"||"";try{var C=Ke instanceof Map?Ke:Object.entries(Ke);for(const[Mt,ft]of C){let pt=ft;l(ft)&&(pt=Bi(ft)),ue.push(R+Mt+"="+encodeURIComponent(pt))}}catch(Mt){throw ue.push(R+"type="+encodeURIComponent("_badmap")),Mt}}catch(Mt){f&&f(Ke)}}if(J){C=ue.join("&");break e}}C=void 0}return s=s.i.splice(0,u),c.G=s,C}function Ta(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;re||p(),Z||(re(),Z=!0),I.add(c,s),s.A=0}}function es(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Dn(d(s.Da,s),Aa(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,wa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Dn(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pe(10),br(this),wa(this))};function ts(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function wa(s){s.g=new lt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=Ge(s.na);Y(c,"RID","rpc"),Y(c,"SID",s.M),Y(c,"AID",s.K),Y(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&Y(c,"TO",s.ia),Y(c,"TYPE","xmlhttp"),qn(s,c),s.u&&s.o&&Yi(c,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=Rr(Ge(c)),u.u=null,u.R=!0,Jo(u,s)}n.Va=function(){this.C!=null&&(this.C=null,br(this),es(this),Pe(19))};function kr(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function va(s,c){var u=null;if(s.g==c){kr(s),ts(s),s.g=null;var f=2}else if(Ki(s.h,c))u=c.G,na(s.h,c),f=1;else return;if(s.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var w=s.D;f=wr(),Se(f,new zo(f,u)),Cr(s)}else Ta(s);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&fd(s,c)||f==2&&es(s)))switch(u&&u.length>0&&(c=s.h,c.i=c.i.concat(u)),w){case 1:Vt(s,5);break;case 4:Vt(s,10);break;case 3:Vt(s,6);break;default:Vt(s,2)}}}function Aa(s,c){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*c}function Vt(s,c){if(s.j.info("Error code "+c),c==2){var u=d(s.bb,s),f=s.Ua;const w=!f;f=new ut(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Mn(f,"https"),Rr(f),w?ad(f.toString(),u):cd(f.toString(),u)}else Pe(2);s.I=0,s.l&&s.l.pa(c),Ra(s),ya(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function Ra(s){if(s.I=0,s.ja=[],s.l){const c=ra(s.h);(c.length!=0||s.i.length!=0)&&(D(s.ja,c),D(s.ja,s.i),s.h.i.length=0,b(s.i),s.i.length=0),s.l.oa()}}function Sa(s,c,u){var f=u instanceof ut?Ge(u):new ut(u);if(f.g!="")c&&(f.g=c+"."+f.g),Ln(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const R=new ut(null);f&&Mn(R,f),c&&(R.g=c),w&&Ln(R,w),u&&(R.h=u),f=R}return u=s.G,c=s.wa,u&&c&&Y(f,u,c),Y(f,"VER",s.ka),qn(s,f),f}function Pa(s,c,u){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new ie(new Xi({ab:u})):new ie(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ba(){}n=ba.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Dr(){}Dr.prototype.g=function(s,c){return new Ne(s,c)};function Ne(s,c){Ee.call(this),this.g=new _a(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!m(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new rn(this)}y(Ne,Ee),Ne.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Zi(this.g)},Ne.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=Bi(s),s=u);c.i.push(new Zh(c.Ya++,s)),c.I==3&&Cr(c)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Zi(this.g),delete this.g,Ne.Z.N.call(this)};function Ca(s){ji.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}y(Ca,ji);function ka(){$i.call(this),this.status=1}y(ka,$i);function rn(s){this.g=s}y(rn,ba),rn.prototype.ra=function(){Se(this.g,"a")},rn.prototype.qa=function(s){Se(this.g,new Ca(s))},rn.prototype.pa=function(s){Se(this.g,new ka)},rn.prototype.oa=function(){Se(this.g,"b")},Dr.prototype.createWebChannel=Dr.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,xu=function(){return new Dr},Lu=function(){return wr()},Mu=Dt,bs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,Gr=vr,Wo.COMPLETE="complete",Vu=Wo,jo.EventType=Cn,Cn.OPEN="a",Cn.CLOSE="b",Cn.ERROR="c",Cn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,Gn=jo,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,Ou=ie}).apply(typeof Lr!="undefined"?Lr:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const Sc="@firebase/firestore",Pc="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Ti("@firebase/firestore");function sn(){return zt.logLevel}function V(n,...e){if(zt.logLevel<=H.DEBUG){const t=e.map(ao);zt.debug(`Firestore (${An}): ${n}`,...t)}}function Wt(n,...e){if(zt.logLevel<=H.ERROR){const t=e.map(ao);zt.error(`Firestore (${An}): ${n}`,...t)}}function bi(n,...e){if(zt.logLevel<=H.WARN){const t=e.map(ao);zt.warn(`Firestore (${An}): ${n}`,...t)}}function ao(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Fu(n,r,t)}function Fu(n,e,t){let r=`FIRESTORE (${An}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(i){r+=" CONTEXT: "+t}throw Wt(r),new Error(r)}function se(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Fu(e,i,r)}function X(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends We{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class ay{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cy{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){se(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Bt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Bt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new Uu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Te(e)}}class ly{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ly(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){se(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new bc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=dy(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function Cs(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),o=e.charAt(r);if(i!==o)return ps(i)===ps(o)?K(i,o):ps(i)?1:-1}return K(n.length,e.length)}const fy=55296,py=57343;function ps(n){const e=n.charCodeAt(0);return e>=fy&&e<=py}function gn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="__name__";class Qe{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Qe.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return K(e.length,t.length)}static compareSegments(e,t){const r=Qe.isNumericId(e),i=Qe.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Qe.extractNumericId(e).compare(Qe.extractNumericId(t)):Cs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return oo.fromString(e.substring(4,e.length-2))}}class ae extends Qe{construct(e,t,r){return new ae(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const my=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Qe{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return my.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cc}static keyField(){return new _e([Cc])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ae.fromString(e))}static fromName(e){return new $(ae.fromString(e).popFirst(5))}static empty(){return new $(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n,e,t){if(!t)throw new M(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _y(n,e,t,r){if(e===!0&&r===!0)throw new M(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function kc(n){if(!$.isDocumentKey(n))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function lo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function ks(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=lo(n);throw new M(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function mr(n,e){if(!Bu(n))throw new M(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new M(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=-62135596800,Nc=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Nc);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Dc)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nc}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(mr(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:le("string",ne._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new ne(0,0))}static max(){return new te(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=-1;function yy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new At(i,$.empty(),e)}function Ey(n){return new At(n.readTime,n.key,sr)}class At{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new At(te.min(),$.empty(),sr)}static max(){return new At(te.max(),$.empty(),sr)}}function Iy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Ty)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,o=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(_=>{a[d]=_,++l,l===o&&r(a)},_=>i(_))}})}static doWhile(e,t){return new S((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function vy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ho.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=-1;function po(n){return n==null}function ci(n){return n===0&&1/n==-1/0}function Ay(n){return typeof n=="number"&&Number.isInteger(n)&&!ci(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="";function Ry(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Oc(e)),e=Sy(n.get(t),e);return Oc(e)}function Sy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case ju:t+="";break;default:t+=o}}return t}function Oc(n){return n+ju+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $u(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new De(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r!=null?r:me.RED,this.left=i!=null?i:me.EMPTY,this.right=o!=null?o:me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new me(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mc(this.data.getIterator())}getIteratorFrom(e){return new Mc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Mc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new qe([])}unionWith(e){let t=new ye(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException!="undefined"&&o instanceof DOMException?new Py("Invalid base64 string: "+o):o}}(e);return new Ye(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const by=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(se(!!n,39018),typeof n=="string"){let e=0;const t=by.exec(n);if(se(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _n(n){return typeof n=="string"?Ye.fromBase64String(n):Ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="server_timestamp",Hu="__type__",zu="__previous_value__",Wu="__local_write_time__";function mo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hu])==null?void 0:r.stringValue)===qu}function go(n){const e=n.mapValue.fields[zu];return mo(e)?go(e):e}function li(n){const e=Gt(n.mapValue.fields[Wu].timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t,r,i,o,a,l,h,d,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=_}}const ui="(default)";class hi{constructor(e,t){this.projectId=e,this.database=t||ui}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database===ui}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="__type__",ky="__max__",Fr={mapValue:{}},Ku="__vector__",Ds="value";function Kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mo(n)?4:Ny(n)?9007199254740991:Dy(n)?10:11:q(28295,{value:n})}function Ze(n,e){if(n===e)return!0;const t=Kt(n);if(t!==Kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return li(n).isEqual(li(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Gt(i.timestampValue),l=Gt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return _n(i.bytesValue).isEqual(_n(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ge(i.geoPointValue.latitude)===ge(o.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ge(i.integerValue)===ge(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ge(i.doubleValue),l=ge(o.doubleValue);return a===l?ci(a)===ci(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return gn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Vc(a)!==Vc(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ze(a[h],l[h])))return!1;return!0}(n,e);default:return q(52216,{left:n})}}function or(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function yn(n,e){if(n===e)return 0;const t=Kt(n),r=Kt(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=ge(o.integerValue||o.doubleValue),h=ge(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return Lc(n.timestampValue,e.timestampValue);case 4:return Lc(li(n),li(e));case 5:return Cs(n.stringValue,e.stringValue);case 6:return function(o,a){const l=_n(o),h=_n(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const _=K(l[d],h[d]);if(_!==0)return _}return K(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=K(ge(o.latitude),ge(a.latitude));return l!==0?l:K(ge(o.longitude),ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return xc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var A,b,D,O;const l=o.fields||{},h=a.fields||{},d=(A=l[Ds])==null?void 0:A.arrayValue,_=(b=h[Ds])==null?void 0:b.arrayValue,y=K(((D=d==null?void 0:d.values)==null?void 0:D.length)||0,((O=_==null?void 0:_.values)==null?void 0:O.length)||0);return y!==0?y:xc(d,_)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Fr.mapValue&&a===Fr.mapValue)return 0;if(o===Fr.mapValue)return 1;if(a===Fr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},_=Object.keys(d);h.sort(),_.sort();for(let y=0;y<h.length&&y<_.length;++y){const A=Cs(h[y],_[y]);if(A!==0)return A;const b=yn(l[h[y]],d[_[y]]);if(b!==0)return b}return K(h.length,_.length)}(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function Lc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Gt(n),r=Gt(e),i=K(t.seconds,r.seconds);return i!==0?i:K(t.nanos,r.nanos)}function xc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=yn(t[i],r[i]);if(o)return o}return K(t.length,r.length)}function En(n){return Ns(n)}function Ns(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Gt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _n(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ns(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ns(t.fields[a])}`;return i+"}"}(n.mapValue):q(61005,{value:n})}function Kr(n){switch(Kt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=go(n);return e?16+Kr(e):16;case 5:return 2*n.stringValue.length;case 6:return _n(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Kr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Rn(r.fields,(o,a)=>{i+=o.length+Kr(a)}),i}(n.mapValue);default:throw q(13486,{value:n})}}function Os(n){return!!n&&"integerValue"in n}function _o(n){return!!n&&"arrayValue"in n}function Qr(n){return!!n&&"mapValue"in n}function Dy(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Gu])==null?void 0:r.stringValue)===Ku}function Jn(n){if(n.geoPointValue)return{geoPointValue:G({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:G({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jn(n.arrayValue.values[t]);return e}return G({},n)}function Ny(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ky}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jn(t)}setAll(e){let t=_e.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Jn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Qr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Qr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Rn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Be(Jn(this.value))}}function Qu(n){const e=[];return Rn(n.fields,(t,r)=>{const i=new _e([t]);if(Qr(r)){const o=Qu(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ue(e,0,te.min(),te.min(),te.min(),Be.empty(),0)}static newFoundDocument(e,t,r,i){return new Ue(e,1,t,te.min(),r,i,0)}static newNoDocument(e,t){return new Ue(e,2,t,te.min(),te.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Ue(e,3,t,te.min(),te.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=yn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Oy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{}class fe extends Ju{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new My(e,t,r):t==="array-contains"?new Fy(e,r):t==="in"?new Uy(e,r):t==="not-in"?new By(e,r):t==="array-contains-any"?new jy(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ly(e,r):new xy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yn(t,this.value)):t!==null&&Kt(this.value)===Kt(t)&&this.matchesComparison(yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends Ju{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Rt(e,t)}matches(e){return Xu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xu(n){return n.op==="and"}function Yu(n){return Vy(n)&&Xu(n)}function Vy(n){for(const e of n.filters)if(e instanceof Rt)return!1;return!0}function Vs(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+En(n.value);if(Yu(n))return n.filters.map(e=>Vs(e)).join(",");{const e=n.filters.map(t=>Vs(t)).join(",");return`${n.op}(${e})`}}function Zu(n,e){return n instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&Ze(r.value,i.value)}(n,e):n instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&Zu(a,i.filters[l]),!0):!1}(n,e):void q(19439)}function eh(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${En(t.value)}`}(n):n instanceof Rt?function(t){return t.op.toString()+" {"+t.getFilters().map(eh).join(" ,")+"}"}(n):"Filter"}class My extends fe{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ly extends fe{constructor(e,t){super(e,"in",t),this.keys=th("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xy extends fe{constructor(e,t){super(e,"not-in",t),this.keys=th("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function th(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class Fy extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _o(t)&&or(t.arrayValue,this.value)}}class Uy extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&or(this.value.arrayValue,t)}}class By extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!or(this.value.arrayValue,t)}}class jy extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_o(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>or(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Bc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new $y(n,e,t,r,i,o,a)}function yo(n){const e=X(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Vs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),po(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>En(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>En(r)).join(",")),e.Te=t}return e.Te}function Eo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Oy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uc(n.startAt,e.startAt)&&Uc(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qy(n,e,t,r,i,o,a,l){return new Ci(n,e,t,r,i,o,a,l)}function Hy(n){return new Ci(n)}function jc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zy(n){return n.collectionGroup!==null}function Xn(n){const e=X(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ye(_e.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new fi(o,r))}),t.has(_e.keyField().canonicalString())||e.Ie.push(new fi(_e.keyField(),r))}return e.Ie}function jt(n){const e=X(n);return e.Ee||(e.Ee=Wy(e,Xn(n))),e.Ee}function Wy(n,e){if(n.limitType==="F")return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new fi(i.field,o)});const t=n.endAt?new di(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new di(n.startAt.position,n.startAt.inclusive):null;return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ms(n,e,t){return new Ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function nh(n,e){return Eo(jt(n),jt(e))&&n.limitType===e.limitType}function rh(n){return`${yo(jt(n))}|lt:${n.limitType}`}function Hn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>eh(i)).join(", ")}]`),po(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>En(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>En(i)).join(",")),`Target(${r})`}(jt(n))}; limitType=${n.limitType})`}function Io(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Xn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,h){const d=Fc(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,Xn(r),i)||r.endAt&&!function(a,l,h){const d=Fc(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,Xn(r),i))}(n,e)}function Gy(n){return(e,t)=>{let r=!1;for(const i of Xn(n)){const o=Ky(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ky(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?yn(h,d):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return $u(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new De($.comparator);function pi(){return Qy}const ih=new De($.comparator);function Ur(...n){let e=ih;for(const t of n)e=e.insert(t.key,t);return e}function sh(n){let e=ih;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ut(){return Yn()}function oh(){return Yn()}function Yn(){return new Zt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jy=new De($.comparator),Xy=new ye($.comparator);function we(...n){let e=Xy;for(const t of n)e=e.add(t);return e}const Yy=new ye(K);function Zy(){return Yy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ci(e)?"-0":e}}function ah(n){return{integerValue:""+n}}function eE(n,e){return Ay(e)?ah(e):To(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this._=void 0}}function tE(n,e,t){return n instanceof ar?function(i,o){const a={fields:{[Hu]:{stringValue:qu},[Wu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&mo(o)&&(o=go(o)),o&&(a.fields[zu]=o),{mapValue:a}}(t,e):n instanceof cr?lh(n,e):n instanceof lr?uh(n,e):function(i,o){const a=ch(i,o),l=$c(a)+$c(i.Ae);return Os(a)&&Os(i.Ae)?ah(l):To(i.serializer,l)}(n,e)}function nE(n,e,t){return n instanceof cr?lh(n,e):n instanceof lr?uh(n,e):t}function ch(n,e){return n instanceof mi?function(r){return Os(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ar extends ki{}class cr extends ki{constructor(e){super(),this.elements=e}}function lh(n,e){const t=hh(e);for(const r of n.elements)t.some(i=>Ze(i,r))||t.push(r);return{arrayValue:{values:t}}}class lr extends ki{constructor(e){super(),this.elements=e}}function uh(n,e){let t=hh(e);for(const r of n.elements)t=t.filter(i=>!Ze(i,r));return{arrayValue:{values:t}}}class mi extends ki{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $c(n){return ge(n.integerValue||n.doubleValue)}function hh(n){return _o(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t){this.field=e,this.transform=t}}function iE(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof cr&&i instanceof cr||r instanceof lr&&i instanceof lr?gn(r.elements,i.elements,Ze):r instanceof mi&&i instanceof mi?Ze(r.Ae,i.Ae):r instanceof ar&&i instanceof ar}(n.transform,e.transform)}class sE{constructor(e,t){this.version=e,this.transformResults=t}}class rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Di{}function dh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ph(n.key,rt.none()):new _r(n.key,n.data,rt.none());{const t=n.data,r=Be.empty();let i=new ye(_e.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new en(n.key,r,new qe(i.toArray()),rt.none())}}function oE(n,e,t){n instanceof _r?function(i,o,a){const l=i.value.clone(),h=Hc(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof en?function(i,o,a){if(!Jr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Hc(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(fh(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Zn(n,e,t,r){return n instanceof _r?function(o,a,l,h){if(!Jr(o.precondition,a))return l;const d=o.value.clone(),_=zc(o.fieldTransforms,h,a);return d.setAll(_),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof en?function(o,a,l,h){if(!Jr(o.precondition,a))return l;const d=zc(o.fieldTransforms,h,a),_=a.data;return _.setAll(fh(o)),_.setAll(d),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(o,a,l){return Jr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function aE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=ch(r.transform,i||null);o!=null&&(t===null&&(t=Be.empty()),t.set(r.field,o))}return t||null}function qc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gn(r,i,(o,a)=>iE(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _r extends Di{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class en extends Di{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function fh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Hc(n,e,t){const r=new Map;se(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,nE(a,l,t[i]))}return r}function zc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,tE(o,a,e))}return r}class ph extends Di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cE extends Di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&oE(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=oh();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=dh(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),we())}isEqual(e){return this.batchId===e.batchId&&gn(this.mutations,e.mutations,(t,r)=>qc(t,r))&&gn(this.baseMutations,e.baseMutations,(t,r)=>qc(t,r))}}class wo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Jy}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new wo(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,W;function hE(n){switch(n){case P.OK:return q(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function dE(n){if(n===void 0)return Wt("GRPC error has no .code"),P.UNKNOWN;switch(n){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return q(39323,{code:n})}}(W=ce||(ce={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new oo([4294967295,4294967295],0);class fE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ls(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mE(n,e){return Ls(n,e.toTimestamp())}function fn(n){return se(!!n,49232),te.fromTimestamp(function(t){const r=Gt(t);return new ne(r.seconds,r.nanos)}(n))}function mh(n,e){return xs(n,e).canonicalString()}function xs(n,e){const t=function(i){return new ae(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function gE(n){const e=ae.fromString(n);return se(AE(e),10190,{key:e.toString()}),e}function Fs(n,e){return mh(n.databaseId,e.path)}function _E(n){const e=gE(n);return e.length===4?ae.emptyPath():EE(e)}function yE(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function EE(n){return se(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Wc(n,e,t){return{name:Fs(n,e),fields:t.value.mapValue.fields}}function IE(n,e){let t;if(e instanceof _r)t={update:Wc(n,e.key,e.value)};else if(e instanceof ph)t={delete:Fs(n,e.key)};else if(e instanceof en)t={update:Wc(n,e.key,e.data),updateMask:vE(e.fieldMask)};else{if(!(e instanceof cE))return q(16599,{Vt:e.type});t={verify:Fs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mi)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw q(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:mE(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:q(27497)}(n,e.precondition)),t}function TE(n,e){return n&&n.length>0?(se(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?fn(i.updateTime):fn(o);return a.isEqual(te.min())&&(a=fn(o)),new sE(a,i.transformResults||[])}(t,e))):[]}function wE(n){let e=_E(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){se(r===1,65062);const _=t.from[0];_.allDescendants?i=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(y){const A=gh(y);return A instanceof Rt&&Yu(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(A=>function(D){return new fi(on(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(A))}(t.orderBy));let l=null;t.limit&&(l=function(y){let A;return A=typeof y=="object"?y.value:y,po(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(y){const A=!!y.before,b=y.values||[];return new di(b,A)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const A=!y.before,b=y.values||[];return new di(b,A)}(t.endAt)),qy(e,i,a,o,l,"F",h,d)}function gh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=on(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=on(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=on(t.unaryFilter.field);return fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return fe.create(on(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Rt.create(t.compositeFilter.filters.map(r=>gh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function on(n){return _e.fromServerFormat(n.fieldPath)}function vE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function AE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.yt=e}}function SE(n){const e=wE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ms(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.Cn=new bE}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(At.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(At.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class bE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ye(ae.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ye(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_h=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(_h,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new In(0)}static cr(){return new In(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="LruGarbageCollector",CE=1048576;function Qc([n,e],[t,r]){const i=K(n,t);return i===0?K(e,r):i}class kE{constructor(e){this.Ir=e,this.buffer=new ye(Qc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Qc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class DE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(Kc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gr(t)?V(Kc,"Ignoring IndexedDB error during garbage collection: ",t):await uo(t)}await this.Vr(3e5)})}}class NE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(ho.ce);const r=new kE(t);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Gc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,o,a,l,h,d;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,l=Date.now(),this.removeTargets(e,r,t))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),sn()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-_}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:y})))}}function OE(n,e){return new NE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.changes=new Zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Zn(r.mutation,i,qe.empty(),ne.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,t,r=we()){const i=Ut();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Ur();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ut();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,we()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let o=pi();const a=Yn(),l=function(){return Yn()}();return t.forEach((h,d)=>{const _=r.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof en)?o=o.insert(d.key,d):_!==void 0?(a.set(d.key,_.mutation.getFieldMask()),Zn(_.mutation,d,_.mutation.getFieldMask(),ne.now())):a.set(d.key,qe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,_)=>a.set(d,_)),t.forEach((d,_)=>{var y;return l.set(d,new ME(_,(y=a.get(d))!=null?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Yn();let i=new De((a,l)=>a-l),o=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let _=r.get(h)||qe.empty();_=l.applyToLocalView(d,_),r.set(h,_);const y=(i.get(l.batchId)||we()).add(h);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,_=h.value,y=oh();_.forEach(A=>{if(!o.has(A)){const b=dh(t.get(A),r.get(A));b!==null&&y.set(A,b),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):S.resolve(Ut());let l=sr,h=o;return a.next(d=>S.forEach(d,(_,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(e,_).next(A=>{h=h.insert(_,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,we())).next(_=>({batchId:l,changes:sh(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=Ur();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Ur();return this.indexManager.getCollectionParents(e,o).next(l=>S.forEach(l,h=>{const d=function(y,A){return new Ci(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(_=>{_.forEach((y,A)=>{a=a.insert(y,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const _=d.getKey();a.get(_)===null&&(a=a.insert(_,Ue.newInvalidDocument(_)))});let l=Ur();return a.forEach((h,d)=>{const _=o.get(h);_!==void 0&&Zn(_.mutation,d,qe.empty(),ne.now()),Io(t,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return S.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:fn(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(i){return{name:i.name,query:SE(i.bundledQuery),readTime:fn(i.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.overlays=new De($.comparator),this.qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ut();return S.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=Ut(),o=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new De((d,_)=>d-_);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let _=o.get(d.largestBatchId);_===null&&(_=Ut(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const l=Ut(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,_)=>l.set(d,_)),!(l.size()>=i)););return S.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new uE(t,r));let o=this.qr.get(t);o===void 0&&(o=we(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.Qr=new ye(de.$r),this.Ur=new ye(de.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new de(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new de(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new $(new ae([])),r=new de(t,e),i=new de(t,e+1),o=[];return this.Ur.forEachInRange([r,i],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new $(new ae([])),r=new de(t,e),i=new de(t,e+1);let o=we();return this.Ur.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new de(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return $.comparator(e.key,t.key)||K(e.Yr,t.Yr)}static Kr(e,t){return K(e.Yr,t.Yr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ye(de.$r)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lE(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new de(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?fo:this.tr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],a=>{const l=this.Xr(a.Yr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(K);return t.forEach(i=>{const o=new de(i,0),a=new de(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],l=>{r=r.add(l.Yr)})}),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new de(new $(o),0);let l=new ye(K);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.Yr)),!0)},a),S.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){se(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(t.mutations,i=>{const o=new de(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new de(t,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.ri=e,this.docs=function(){return new De($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(t))}getEntries(e,t){let r=pi();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ue.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=pi();const a=t.path,l=new $(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:_}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Iy(Ey(_),r)<=0||(i.has(_.key)||Io(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(e,t,r,i){q(9500)}ii(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new $E(this)}getSize(e){return S.resolve(this.size)}}class $E extends VE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.persistence=e,this.si=new Zt(t=>yo(t),Eo),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new vo,this.targetCount=0,this.ai=In.ur()}forEachTarget(e,t){return this.si.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),S.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new In(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Pr(t),S.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t){this.ui={},this.overlays={},this.ci=new ho(0),this.li=!1,this.li=!0,this.hi=new UE,this.referenceDelegate=e(this),this.Pi=new qE(this),this.indexManager=new PE,this.remoteDocumentCache=function(i){return new jE(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new RE(t),this.Ii=new xE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new FE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new BE(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const i=new HE(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(e,t){return S.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class HE extends wy{constructor(e){super(),this.currentSequenceNumber=e}}class Ao{constructor(e){this.persistence=e,this.Ri=new vo,this.Vi=null}static mi(e){return new Ao(e)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,r=>{const i=$.fromPath(r);return this.gi(e,i).next(o=>{o||t.removeEntry(i,te.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return S.or([()=>S.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class gi{constructor(e,t){this.persistence=e,this.pi=new Zt(r=>Ry(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=OE(this,t)}static mi(e,t){return new gi(e,t)}Ei(){}di(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return S.forEach(this.pi,(r,i)=>this.br(e,r,i).next(o=>o?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,o.removeEntry(a,te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Kr(e.data.value)),t}br(e,t,r){return S.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=we(),i=we();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ro(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return af()?8:vy(Ae())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ys(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new zE;return this.Ss(e,t,a).next(l=>{if(o.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>o.result)}bs(e,t,r,i){return r.documentReadCount<this.fs?(sn()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Hn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(sn()<=H.DEBUG&&V("QueryEngine","Query:",Hn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(sn()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Hn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jt(t))):S.resolve())}ys(e,t){if(jc(t))return S.resolve(null);let r=jt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ms(t,null,"F"),r=jt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=we(...o);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.Ds(t,l);return this.Cs(t,d,a,h.readTime)?this.ys(e,Ms(t,null,"F")):this.vs(e,d,t,h)}))})))}ws(e,t,r,i){return jc(t)||i.isEqual(te.min())?S.resolve(null):this.ps.getDocuments(e,r).next(o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,i)?S.resolve(null):(sn()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hn(t)),this.vs(e,a,t,yy(i,sr)).next(l=>l))})}Ds(e,t){let r=new ye(Gy(e));return t.forEach((i,o)=>{Io(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,r){return sn()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Hn(t)),this.ps.getDocumentsMatchingQuery(e,t,At.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="LocalStore";class KE{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new De(K),this.xs=new Zt(o=>yo(o),Eo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function QE(n,e,t,r){return new KE(n,e,t,r)}async function Eh(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=we();for(const d of i){a.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}for(const d of o){l.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function JE(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,h,d,_){const y=d.batch,A=y.keys();let b=S.resolve();return A.forEach(D=>{b=b.next(()=>_.getEntry(h,D)).next(O=>{const k=d.docVersions.get(D);se(k!==null,48541),O.version.compareTo(k)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),_.addEntry(O)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(h,y))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=we();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function XE(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function YE(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=fo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Jc{constructor(){this.activeTargetIds=Zy()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZE{constructor(){this.Mo=new Jc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Jc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="ConnectivityMonitor";class Yc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Xc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(Xc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br=null;function Us(){return Br===null?Br=function(){return 268435456+Math.round(2147483648*Math.random())}():Br++,"0x"+Br.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="RestConnection",tI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===ui?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,o){const a=Us(),l=this.zo(e,t.toUriEncodedString());V(ms,`Sending RPC '${e}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:d}=new URL(l),_=Tn(d);return this.Jo(e,l,h,r,_).then(y=>(V(ms,`Received RPC '${e}' ${a}: `,y),y),y=>{throw bi(ms,`RPC '${e}' ${a} failed with error: `,y,"url: ",l,"request:",r),y})}Ho(e,t,r,i,o,a){return this.Go(e,t,r,i,o)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+An}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}zo(e,t){const r=tI[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class iI extends nI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const a=Us();return new Promise((l,h)=>{const d=new Ou;d.setWithCredentials(!0),d.listenOnce(Vu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Gr.NO_ERROR:const y=d.getResponseJson();V(Ie,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case Gr.TIMEOUT:V(Ie,`RPC '${e}' ${a} timed out`),h(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case Gr.HTTP_ERROR:const A=d.getStatus();if(V(Ie,`RPC '${e}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b==null?void 0:b.error;if(D&&D.status&&D.message){const O=function(U){const F=U.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(F)>=0?F:P.UNKNOWN}(D.status);h(new M(O,D.message))}else h(new M(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new M(P.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(Ie,`RPC '${e}' ${a} completed.`)}});const _=JSON.stringify(i);V(Ie,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",_,r,15)})}T_(e,t,r){const i=Us(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xu(),l=Lu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const _=o.join("");V(Ie,`Creating RPC '${e}' stream ${i}: ${_}`,h);const y=a.createWebChannel(_,h);this.I_(y);let A=!1,b=!1;const D=new rI({Yo:k=>{b?V(Ie,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(A||(V(Ie,`Opening RPC '${e}' stream ${i} transport.`),y.open(),A=!0),V(Ie,`RPC '${e}' stream ${i} sending:`,k),y.send(k))},Zo:()=>y.close()}),O=(k,U,F)=>{k.listen(U,z=>{try{F(z)}catch(Q){setTimeout(()=>{throw Q},0)}})};return O(y,Gn.EventType.OPEN,()=>{b||(V(Ie,`RPC '${e}' stream ${i} transport opened.`),D.o_())}),O(y,Gn.EventType.CLOSE,()=>{b||(b=!0,V(Ie,`RPC '${e}' stream ${i} transport closed`),D.a_(),this.E_(y))}),O(y,Gn.EventType.ERROR,k=>{b||(b=!0,bi(Ie,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),D.a_(new M(P.UNAVAILABLE,"The operation could not be completed")))}),O(y,Gn.EventType.MESSAGE,k=>{var U;if(!b){const F=k.data[0];se(!!F,16349);const z=F,Q=(z==null?void 0:z.error)||((U=z[0])==null?void 0:U.error);if(Q){V(Ie,`RPC '${e}' stream ${i} received error:`,Q);const re=Q.status;let Z=function(g){const T=ce[g];if(T!==void 0)return dE(T)}(re),I=Q.message;Z===void 0&&(Z=P.INTERNAL,I="Unknown error status: "+re+" with message "+Q.message),b=!0,D.a_(new M(Z,I)),y.close()}else V(Ie,`RPC '${e}' stream ${i} received:`,F),D.u_(F)}}),O(l,Mu.STAT_EVENT,k=>{k.stat===bs.PROXY?V(Ie,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===bs.NOPROXY&&V(Ie,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function gs(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){return new fE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="PersistentStream";class sI{constructor(e,t,r,i,o,a,l,h){this.Mi=e,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ih(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Wt(t.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new M(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(Zc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(V(Zc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oI extends sI{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=TE(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=yE(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>IE(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{}class cI extends aI{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(e,xs(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(P.UNKNOWN,o.toString())})}Ho(e,t,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,xs(t,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class lI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Wt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="RemoteStore";class uI{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ir(this)&&(V(yr,"Restarting streams for network reachability change."),await async function(h){const d=X(h);d.Ea.add(4),await Er(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Oi(d)}(this))})}),this.Ra=new lI(r,i)}}async function Oi(n){if(Ir(n))for(const e of n.da)await e(!0)}async function Er(n){for(const e of n.da)await e(!1)}function Ir(n){return X(n).Ea.size===0}async function Th(n,e,t){if(!gr(e))throw e;n.Ea.add(1),await Er(n),n.Ra.set("Offline"),t||(t=()=>XE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(yr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Oi(n)})}function wh(n,e){return e().catch(t=>Th(n,t,e))}async function Vi(n){const e=X(n),t=St(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:fo;for(;hI(e);)try{const i=await YE(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,dI(e,i)}catch(i){await Th(e,i)}vh(e)&&Ah(e)}function hI(n){return Ir(n)&&n.Ta.length<10}function dI(n,e){n.Ta.push(e);const t=St(n);t.O_()&&t.X_&&t.ea(e.mutations)}function vh(n){return Ir(n)&&!St(n).x_()&&n.Ta.length>0}function Ah(n){St(n).start()}async function fI(n){St(n).ra()}async function pI(n){const e=St(n);for(const t of n.Ta)e.ea(t.mutations)}async function mI(n,e,t){const r=n.Ta.shift(),i=wo.from(r,e,t);await wh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Vi(n)}async function gI(n,e){e&&St(n).X_&&await async function(r,i){if(function(a){return hE(a)&&a!==P.ABORTED}(i.code)){const o=r.Ta.shift();St(r).B_(),await wh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Vi(r)}}(n,e),vh(n)&&Ah(n)}async function el(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),V(yr,"RemoteStore received new credentials");const r=Ir(t);t.Ea.add(3),await Er(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Oi(t)}async function _I(n,e){const t=X(n);e?(t.Ea.delete(2),await Oi(t)):e||(t.Ea.add(2),await Er(t),t.Ra.set("Unknown"))}function St(n){return n.fa||(n.fa=function(t,r,i){const o=X(t);return o.sa(),new oI(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:fI.bind(null,n),r_:gI.bind(null,n),ta:pI.bind(null,n),na:mI.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Vi(n)):(await n.fa.stop(),n.Ta.length>0&&(V(yr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new So(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rh(n,e){if(Wt("AsyncQueue",`${e}: ${n}`),gr(n))return new M(P.UNAVAILABLE,`${e}: ${n}`);throw n}class yI{constructor(){this.queries=tl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=X(t),o=i.queries;i.queries=tl(),o.forEach((a,l)=>{for(const h of l.Sa)h.onError(r)})})(this,new M(P.ABORTED,"Firestore shutting down"))}}function tl(){return new Zt(n=>rh(n),nh)}function EI(n){n.Ca.forEach(e=>{e.next()})}var nl,rl;(rl=nl||(nl={})).Ma="default",rl.Cache="cache";const II="SyncEngine";class TI{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Zt(l=>rh(l),nh),this.Iu=new Map,this.Eu=new Set,this.du=new De($.comparator),this.Au=new Map,this.Ru=new vo,this.Vu={},this.mu=new Map,this.fu=In.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wI(n,e,t){const r=SI(n);try{const i=await function(a,l){const h=X(a),d=ne.now(),_=l.reduce((b,D)=>b.add(D.key),we());let y,A;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=pi(),O=we();return h.Ns.getEntries(b,_).next(k=>{D=k,D.forEach((U,F)=>{F.isValidDocument()||(O=O.add(U))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,D)).next(k=>{y=k;const U=[];for(const F of l){const z=aE(F,y.get(F.key).overlayedDocument);z!=null&&U.push(new en(F.key,z,Qu(z.value.mapValue),rt.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,U,l)}).next(k=>{A=k;const U=k.applyToLocalDocumentSet(y,O);return h.documentOverlayCache.saveOverlays(b,k.batchId,U)})}).then(()=>({batchId:A.batchId,changes:sh(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new De(K)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d}(r,i.batchId,t),await Mi(r,i.changes),await Vi(r.remoteStore)}catch(i){const o=Rh(i,"Failed to persist write");t.reject(o)}}function il(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((o,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=X(a);h.onlineState=l;let d=!1;h.queries.forEach((_,y)=>{for(const A of y.Sa)A.va(l)&&(d=!0)}),d&&EI(h)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vI(n,e){const t=X(n),r=e.batch.batchId;try{const i=await JE(t.localStore,e);Ph(t,r,null),Sh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(t,i)}catch(i){await uo(i)}}async function AI(n,e,t){const r=X(n);try{const i=await function(a,l){const h=X(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let _;return h.mutationQueue.lookupMutationBatch(d,l).next(y=>(se(y!==null,37113),_=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,_,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_)).next(()=>h.localDocuments.getDocuments(d,_))})}(r.localStore,e);Ph(r,e,t),Sh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Mi(r,i)}catch(i){await uo(i)}}function Sh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Ph(n,e,t){const r=X(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}async function Mi(n,e,t){const r=X(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,h)=>{a.push(r.pu(h,e,t).then(d=>{var _;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(_=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){i.push(d);const y=Ro.As(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(h,d){const _=X(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>S.forEach(d,A=>S.forEach(A.Es,b=>_.persistence.referenceDelegate.addReference(y,A.targetId,b)).next(()=>S.forEach(A.ds,b=>_.persistence.referenceDelegate.removeReference(y,A.targetId,b)))))}catch(y){if(!gr(y))throw y;V(GE,"Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const b=_.Ms.get(A),D=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(D);_.Ms=_.Ms.insert(A,O)}}}(r.localStore,o))}async function RI(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){V(II,"User change. New user:",e.toKey());const r=await Eh(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(l=>{l.forEach(h=>{h.reject(new M(P.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(t,r.Ls)}}function SI(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AI.bind(null,e),e}class _i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ni(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return QE(this.persistence,new WE,e.initialUser,this.serializer)}Cu(e){return new yh(Ao.mi,this.serializer)}Du(e){return new ZE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_i.provider={build:()=>new _i};class PI extends _i{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){se(this.persistence.referenceDelegate instanceof gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DE(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new yh(r=>gi.mi(r,t),this.serializer)}}class Bs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>il(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RI.bind(null,this.syncEngine),await _I(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yI}()}createDatastore(e){const t=Ni(e.databaseInfo.databaseId),r=function(o){return new iI(o)}(e.databaseInfo);return function(o,a,l,h){return new cI(o,a,l,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,l){return new uI(r,i,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>il(this.syncEngine,t,0),function(){return Yc.v()?new Yc:new eI}())}createSyncEngine(e,t){return function(i,o,a,l,h,d,_){const y=new TI(i,o,a,l,h,d);return _&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=X(i);V(yr,"RemoteStore shutting down."),o.Ea.add(5),await Er(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Bs.provider={build:()=>new Bs};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="FirestoreClient";class bI{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=co.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{V(Pt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(Pt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Rh(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _s(n,e){n.asyncQueue.verifyOperationInProgress(),V(Pt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Eh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function sl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await CI(n);V(Pt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>el(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>el(e.remoteStore,i)),n._onlineComponents=e}async function CI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Pt,"Using user provided OfflineComponentProvider");try{await _s(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;bi("Error using user provided cache. Falling back to memory cache: "+t),await _s(n,new _i)}}else V(Pt,"Using default OfflineComponentProvider"),await _s(n,new PI(void 0));return n._offlineComponents}async function kI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Pt,"Using user provided OnlineComponentProvider"),await sl(n,n._uninitializedComponentsProvider._online)):(V(Pt,"Using default OnlineComponentProvider"),await sl(n,new Bs))),n._onlineComponents}function DI(n){return kI(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="firestore.googleapis.com",al=!0;class cl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ch,this.ssl=al}else this.host=e.host,this.ssl=(t=e.ssl)!=null?t:al;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_h;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CE)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_y("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bh((r=e.experimentalLongPollingOptions)!=null?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Po{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oy;switch(r.type){case"firstParty":return new uy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ol.get(t);r&&(V("ComponentProvider","Removing Datastore"),ol.delete(t),r.terminate())}(this),Promise.resolve()}}function NI(n,e,t,r={}){var d;n=ks(n,Po);const i=Tn(e),o=n._getSettings(),a=Ce(G({},o),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Al(`https://${l}`),Rl("Firestore",!0)),o.host!==Ch&&o.host!==l&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Ce(G({},o),{host:l,ssl:i,emulatorOptions:r});if(!vt(h,a)&&(n._setSettings(h),r.mockUserToken)){let _,y;if(typeof r.mockUserToken=="string")_=r.mockUserToken,y=Te.MOCK_USER;else{_=Yd(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Te(A)}n._authCredentials=new ay(new Uu(_,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bo(this.firestore,e,this._query)}}class ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(mr(t,ve._jsonSchema))return new ve(e,r||null,new $(ae.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:le("string",ve._jsonSchemaVersion),referencePath:le("string")};class ur extends bo{constructor(e,t,r){super(e,t,Hy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new $(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function cT(n,e,...t){if(n=Re(n),arguments.length===1&&(e=co.newId()),gy("doc","path",e),n instanceof Po){const r=ae.fromString(e,...t);return kc(r),new ve(n,null,new $(r))}{if(!(n instanceof ve||n instanceof ur))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return kc(r),new ve(n.firestore,n instanceof ur?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="AsyncQueue";class ul{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ih(this,"async_queue_retry"),this._c=()=>{const r=gs();r&&V(ll,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=gs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=gs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Bt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gr(e))throw e;V(ll,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Wt("INTERNAL UNHANDLED ERROR: ",hl(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=So.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:hl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function hl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class kh extends Po{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ul,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ul(e),this._firestoreClient=void 0,await e}}}function lT(n,e){const t=typeof n=="object"?n:qs(),r=typeof n=="string"?n:ui,i=Jt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Jd("firestore");o&&NI(i,...o)}return i}function OI(n){if(n._terminated)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||VI(n),n._firestoreClient}function VI(n){var r,i,o;const e=n._freezeSettings(),t=function(l,h,d,_){return new Cy(l,h,d,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,bh(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new bI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(Ye.fromBase64String(e))}catch(t){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(mr(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:le("string",je._jsonSchemaVersion),bytes:le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(mr(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:le("string",it._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:st._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(mr(e,st._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new st(e.vectorValues);throw new M(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}st._jsonSchemaVersion="firestore/vectorValue/1.0",st._jsonSchema={type:le("string",st._jsonSchemaVersion),vectorValues:le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=/^__.*__$/;class LI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new en(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}function Dh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class Do{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Do(G(G({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return yi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Dh(this.Ac)&&MI.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class xI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ni(e)}Cc(e,t,r,i=!1){return new Do({Ac:e,methodName:t,Dc:r,path:_e.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function FI(n){const e=n._freezeSettings(),t=Ni(n._databaseId);return new xI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function UI(n,e,t,r,i,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,i);Mh("Data must be an object, but it was:",a,r);const l=Oh(r,a);let h,d;if(o.merge)h=new qe(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const _=[];for(const y of o.mergeFields){const A=BI(e,y,t);if(!a.contains(A))throw new M(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);$I(_,A)||_.push(A)}h=new qe(_),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new LI(new Be(l),h,d)}class No extends ko{_toFieldTransform(e){return new rE(e.path,new ar)}isEqual(e){return e instanceof No}}function Nh(n,e){if(Vh(n=Re(n)))return Mh("Unsupported field value:",e,n),Oh(n,e);if(n instanceof ko)return function(r,i){if(!Dh(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let h=Nh(l,i.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ne.fromDate(r);return{timestampValue:Ls(i.serializer,o)}}if(r instanceof ne){const o=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ls(i.serializer,o)}}if(r instanceof it)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof je)return{bytesValue:pE(i.serializer,r._byteString)};if(r instanceof ve){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:mh(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof st)return function(a,l){return{mapValue:{fields:{[Gu]:{stringValue:Ku},[Ds]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return To(l.serializer,d)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${lo(r)}`)}(n,e)}function Oh(n,e){const t={};return $u(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rn(n,(r,i)=>{const o=Nh(i,e.mc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Vh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof it||n instanceof je||n instanceof ve||n instanceof ko||n instanceof st)}function Mh(n,e,t){if(!Vh(t)||!Bu(t)){const r=lo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function BI(n,e,t){if((e=Re(e))instanceof Co)return e._internalPath;if(typeof e=="string")return Lh(n,e);throw yi("Field path arguments must be of type string or ",n,!1,void 0,t)}const jI=new RegExp("[~\\*/\\[\\]]");function Lh(n,e,t){if(e.search(jI)>=0)throw yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Co(...e.split("."))._internalPath}catch(r){throw yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function yi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new M(P.INVALID_ARGUMENT,l+n+h)}function $I(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qI extends xh{data(){return super.data()}}function Fh(n,e){return typeof e=="string"?Lh(n,e):e instanceof Co?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class jr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pn extends xh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}pn._jsonSchemaVersion="firestore/documentSnapshot/1.0",pn._jsonSchema={type:le("string",pn._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class Xr extends pn{data(e={}){return super.data(e)}}class er{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new jr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Xr(this._firestore,this._userDataWriter,r.key,r,new jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new Xr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new jr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Xr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new jr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),_=a.indexOf(l.doc.key)),{type:zI(l.type),doc:h,oldIndex:d,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=co.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}er._jsonSchemaVersion="firestore/querySnapshot/1.0",er._jsonSchema={type:le("string",er._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};function uT(n,e,t){n=ks(n,ve);const r=ks(n.firestore,kh),i=HI(n.converter,e,t);return WI(r,[UI(FI(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,rt.none())])}function WI(n,e){return function(r,i){const o=new Bt;return r.asyncQueue.enqueueAndForget(async()=>wI(await DI(r),i,o)),o.promise}(OI(n),e)}function hT(){return new No("serverTimestamp")}(function(e,t=!0){(function(i){An=i})(wn),Xe(new ze("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new kh(new cy(r.getProvider("auth-internal")),new hy(a,r.getProvider("app-check-internal")),function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(d.options.projectId,_)}(a,i),a);return o=G({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Le(Sc,Pc,e),Le(Sc,Pc,"esm2020")})();export{an as A,_t as G,YI as a,Od as b,eT as c,pl as d,JI as e,_p as f,KI as g,oT as h,cn as i,$r as j,sT as k,lT as l,XI as m,uT as n,nT as o,Ei as p,cT as q,ZI as r,QI as s,hT as t,rT as u,iT as v,tT as w};
