(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[653],{"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./node_modules/debounce/index.js":module=>{function debounce(func,wait,immediate){var timeout,args,context,timestamp,result;function later(){var last=Date.now()-timestamp;last<wait&&last>=0?timeout=setTimeout(later,wait-last):(timeout=null,immediate||(result=func.apply(context,args),context=args=null))}null==wait&&(wait=100);var debounced=function(){context=this,args=arguments,timestamp=Date.now();var callNow=immediate&&!timeout;return timeout||(timeout=setTimeout(later,wait)),callNow&&(result=func.apply(context,args),context=args=null),result};return debounced.clear=function(){timeout&&(clearTimeout(timeout),timeout=null)},debounced.flush=function(){timeout&&(result=func.apply(context,args),context=args=null,clearTimeout(timeout),timeout=null)},debounced}debounce.debounce=debounce,module.exports=debounce},"./node_modules/immer/dist/immer.cjs.production.min.js":(__unused_webpack_module,exports)=>{function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[H]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Q}(n)||Array.isArray(n)||!!n[G]||!!(null===(r=n.constructor)||void 0===r?void 0:r[G])||c(n)||v(n))}function e(n,r,t){void 0===t&&(t=!1),0===i(n)?(t?Object.keys:T)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function i(n){var r=n[H];return r?r.t>3?r.t-4:r.t:Array.isArray(n)?1:c(n)?2:v(n)?3:0}function u(n,r){return 2===i(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function o(n,r){return 2===i(n)?n.get(r):n[r]}function f(n,r,t){var e=i(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function a(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function c(n){return W&&n instanceof Map}function v(n){return X&&n instanceof Set}function s(n){return n.i||n.u}function p(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=U(n);delete r[H];for(var t=T(r),e=0;e<t.length;e++){var i=t[e],u=r[i];!1===u.writable&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(r[i]={configurable:!0,writable:!0,enumerable:u.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function l(n,u){return void 0===u&&(u=!1),h(n)||r(n)||!t(n)||(i(n)>1&&(n.set=n.add=n.clear=n.delete=d),Object.freeze(n),u&&e(n,(function(n,r){return l(r,!0)}),!0)),n}function d(){n(2)}function h(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y(r){var t=V[r];return t||n(18,r),t}function _(n,r){V[n]||(V[n]=r)}function b(){return I}function m(n,r){r&&(y("Patches"),n.o=[],n.v=[],n.s=r)}function j(n){O(n),n.p.forEach(w),n.p=null}function O(n){n===I&&(I=n.l)}function x(n){return I={p:[],l:I,h:n,_:!0,m:0}}function w(n){var r=n[H];0===r.t||1===r.t?r.j():r.O=!0}function S(r,e){e.m=e.p.length;var i=e.p[0],u=void 0!==r&&r!==i;return e.h.S||y("ES5").P(e,r,u),u?(i[H].M&&(j(e),n(4)),t(r)&&(r=P(e,r),e.l||g(e,r)),e.o&&y("Patches").g(i[H].u,r,e.o,e.v)):r=P(e,i,[]),j(e),e.o&&e.s(e.o,e.v),r!==B?r:void 0}function P(n,r,t){if(h(r))return r;var i=r[H];if(!i)return e(r,(function(e,u){return M(n,i,r,e,u,t)}),!0),r;if(i.A!==n)return r;if(!i.M)return g(n,i.u,!0),i.u;if(!i.R){i.R=!0,i.A.m--;var u=4===i.t||5===i.t?i.i=p(i.k):i.i;e(3===i.t?new Set(u):u,(function(r,e){return M(n,i,u,r,e,t)})),g(n,u,!1),t&&n.o&&y("Patches").F(i,t,n.o,n.v)}return i.i}function M(n,e,i,o,a,c){if(r(a)){var v=P(n,a,c&&e&&3!==e.t&&!u(e.N,o)?c.concat(o):void 0);if(f(i,o,v),!r(v))return;n._=!1}if(t(a)&&!h(a)){if(!n.h.D&&n.m<1)return;P(n,a),e&&e.A.l||g(n,a)}}function g(n,r,t){void 0===t&&(t=!1),n.h.D&&n._&&l(r,t)}function A(n,r){var t=n[H];return(t?s(t):n)[r]}function z(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function E(n){n.M||(n.M=!0,n.l&&E(n.l))}function R(n){n.i||(n.i=p(n.u))}function k(n,r,t){var e=c(r)?y("MapSet").K(r,t):v(r)?y("MapSet").$(r,t):n.S?function(n,r){var t=Array.isArray(n),e={t:t?1:0,A:r?r.A:b(),M:!1,R:!1,N:{},l:r,u:n,k:null,i:null,j:null,C:!1},i=e,u=Y;t&&(i=[e],u=Z);var o=Proxy.revocable(i,u),f=o.revoke,a=o.proxy;return e.k=a,e.j=f,a}(r,t):y("ES5").I(r,t);return(t?t.A:b()).p.push(e),e}function F(u){return r(u)||n(22,u),function n(r){if(!t(r))return r;var u,a=r[H],c=i(r);if(a){if(!a.M&&(a.t<4||!y("ES5").J(a)))return a.u;a.R=!0,u=N(r,c),a.R=!1}else u=N(r,c);return e(u,(function(r,t){a&&o(a.u,r)===t||f(u,r,n(t))})),3===c?new Set(u):u}(u)}function N(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return p(n)}function D(){function n(n,r){var t=f[n];return t?t.enumerable=r:f[n]=t={configurable:!0,enumerable:r,get:function(){return Y.get(this[H],n)},set:function(r){Y.set(this[H],n,r)}},t}function t(n){for(var r=n.length-1;r>=0;r--){var t=n[r][H];if(!t.M)switch(t.t){case 5:o(t)&&E(t);break;case 4:i(t)&&E(t)}}}function i(n){for(var r=n.u,t=n.k,e=T(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==H){var f=r[o];if(void 0===f&&!u(r,o))return!0;var c=t[o],v=c&&c[H];if(v?v.u!==f:!a(c,f))return!0}}var s=!!r[H];return e.length!==T(r).length+(s?0:1)}function o(n){var r=n.k;if(r.length!==n.u.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}var f={};_("ES5",{I:function(r,t){var e=Array.isArray(r),i=function(r,t){if(r){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,n(i,!0));return e}var u=U(t);delete u[H];for(var o=T(u),f=0;f<o.length;f++){var a=o[f];u[a]=n(a,r||!!u[a].enumerable)}return Object.create(Object.getPrototypeOf(t),u)}(e,r),u={t:e?5:4,A:t?t.A:b(),M:!1,R:!1,N:{},l:t,u:r,k:i,i:null,O:!1,C:!1};return Object.defineProperty(i,H,{value:u,writable:!0}),i},P:function(n,i,f){f?r(i)&&i[H].A===n&&t(n.p):(n.o&&function n(r){if(r&&"object"==typeof r){var t=r[H];if(t){var i=t.u,f=t.k,a=t.N,c=t.t;if(4===c)e(f,(function(r){r!==H&&(void 0!==i[r]||u(i,r)?a[r]||n(f[r]):(a[r]=!0,E(t)))})),e(i,(function(n){void 0!==f[n]||u(f,n)||(a[n]=!1,E(t))}));else if(5===c){if(o(t)&&(E(t),a.length=!0),f.length<i.length)for(var v=f.length;v<i.length;v++)a[v]=!1;else for(var s=i.length;s<f.length;s++)a[s]=!0;for(var p=Math.min(f.length,i.length),l=0;l<p;l++)f.hasOwnProperty(l)||(a[l]=!0),void 0===a[l]&&n(f[l])}}}}(n.p[0]),t(n.p))},J:function(n){return 4===n.t?i(n):o(n)}})}function K(){function f(n){if(!t(n))return n;if(Array.isArray(n))return n.map(f);if(c(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],f(n[1])]})));if(v(n))return new Set(Array.from(n).map(f));var r=Object.create(Object.getPrototypeOf(n));for(var e in n)r[e]=f(n[e]);return u(n,G)&&(r[G]=n[G]),r}function a(n){return r(n)?f(n):n}var s="add";_("Patches",{W:function(r,t){return t.forEach((function(t){for(var e=t.path,u=t.op,a=r,c=0;c<e.length-1;c++){var v=i(a),p=""+e[c];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof a&&"prototype"===p&&n(24),"object"!=typeof(a=o(a,p))&&n(15,e.join("/"))}var l=i(a),d=f(t.value),h=e[e.length-1];switch(u){case"replace":switch(l){case 2:return a.set(h,d);case 3:n(16);default:return a[h]=d}case s:switch(l){case 1:return"-"===h?a.push(d):a.splice(h,0,d);case 2:return a.set(h,d);case 3:return a.add(d);default:return a[h]=d}case"remove":switch(l){case 1:return a.splice(h,1);case 2:return a.delete(h);case 3:return a.delete(t.value);default:return delete a[h]}default:n(17,u)}})),r},F:function(n,r,t,i){switch(n.t){case 0:case 4:case 2:return function(n,r,t,i){var f=n.u,c=n.i;e(n.N,(function(n,e){var v=o(f,n),p=o(c,n),l=e?u(f,n)?"replace":s:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),i.push(l===s?{op:"remove",path:d}:"remove"===l?{op:s,path:d,value:a(v)}:{op:"replace",path:d,value:a(v)})}}))}(n,r,t,i);case 5:case 1:return function(n,r,t,e){var i=n.u,u=n.N,o=n.i;if(o.length<i.length){var f=[o,i];i=f[0],o=f[1];var c=[e,t];t=c[0],e=c[1]}for(var v=0;v<i.length;v++)if(u[v]&&o[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:a(o[v])}),e.push({op:"replace",path:p,value:a(i[v])})}for(var l=i.length;l<o.length;l++){var d=r.concat([l]);t.push({op:s,path:d,value:a(o[l])})}i.length<o.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,i);case 3:return function(n,r,t,e){var i=n.u,u=n.i,o=0;i.forEach((function(n){if(!u.has(n)){var i=r.concat([o]);t.push({op:"remove",path:i,value:n}),e.unshift({op:s,path:i,value:n})}o++})),o=0,u.forEach((function(n){if(!i.has(n)){var u=r.concat([o]);t.push({op:s,path:u,value:n}),e.unshift({op:"remove",path:u,value:n})}o++}))}(n,r,t,i)}},g:function(n,r,t,e){t.push({op:"replace",path:[],value:r===B?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function $(){function r(n,r){function t(){this.constructor=n}f(n,r),n.prototype=(t.prototype=r.prototype,new t)}function i(n){n.i||(n.N=new Map,n.i=new Map(n.u))}function u(n){n.i||(n.i=new Set,n.u.forEach((function(r){if(t(r)){var e=k(n.A.h,r,n);n.p.set(r,e),n.i.add(e)}else n.i.add(r)})))}function o(r){r.O&&n(3,JSON.stringify(s(r)))}var f=function(n,r){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},a=function(){function n(n,r){return this[H]={t:2,l:r,A:r?r.A:b(),M:!1,R:!1,i:void 0,N:void 0,u:n,k:this,C:!1,O:!1},this}r(n,Map);var u=n.prototype;return Object.defineProperty(u,"size",{get:function(){return s(this[H]).size}}),u.has=function(n){return s(this[H]).has(n)},u.set=function(n,r){var t=this[H];return o(t),s(t).has(n)&&s(t).get(n)===r||(i(t),E(t),t.N.set(n,!0),t.i.set(n,r),t.N.set(n,!0)),this},u.delete=function(n){if(!this.has(n))return!1;var r=this[H];return o(r),i(r),E(r),r.u.has(n)?r.N.set(n,!1):r.N.delete(n),r.i.delete(n),!0},u.clear=function(){var n=this[H];o(n),s(n).size&&(i(n),E(n),n.N=new Map,e(n.u,(function(r){n.N.set(r,!1)})),n.i.clear())},u.forEach=function(n,r){var t=this;s(this[H]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},u.get=function(n){var r=this[H];o(r);var e=s(r).get(n);if(r.R||!t(e))return e;if(e!==r.u.get(n))return e;var u=k(r.A.h,e,r);return i(r),r.i.set(n,u),u},u.keys=function(){return s(this[H]).keys()},u.values=function(){var n,r=this,t=this.keys();return(n={})[L]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},u.entries=function(){var n,r=this,t=this.keys();return(n={})[L]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},u[L]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[H]={t:3,l:r,A:r?r.A:b(),M:!1,R:!1,i:void 0,u:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return s(this[H]).size}}),t.has=function(n){var r=this[H];return o(r),r.i?!!r.i.has(n)||!(!r.p.has(n)||!r.i.has(r.p.get(n))):r.u.has(n)},t.add=function(n){var r=this[H];return o(r),this.has(n)||(u(r),E(r),r.i.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[H];return o(r),u(r),E(r),r.i.delete(n)||!!r.p.has(n)&&r.i.delete(r.p.get(n))},t.clear=function(){var n=this[H];o(n),s(n).size&&(u(n),E(n),n.i.clear())},t.values=function(){var n=this[H];return o(n),u(n),n.i.values()},t.entries=function(){var n=this[H];return o(n),u(n),n.i.entries()},t.keys=function(){return this.values()},t[L]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();_("MapSet",{K:function(n,r){return new a(n,r)},$:function(n,r){return new c(n,r)}})}var C;Object.defineProperty(exports,"__esModule",{value:!0});var I,J="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,X="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=J?Symbol.for("immer-nothing"):((C={})["immer-nothing"]=!0,C),G=J?Symbol.for("immer-draftable"):"__$immer_draftable",H=J?Symbol.for("immer-state"):"__$immer_state",L="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Q=""+Object.prototype.constructor,T="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,U=Object.getOwnPropertyDescriptors||function(n){var r={};return T(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},V={},Y={get:function(n,r){if(r===H)return n;var e=s(n);if(!u(e,r))return function(n,r,t){var e,i=z(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.R||!t(i)?i:i===A(n.u,r)?(R(n),n.i[r]=k(n.A.h,i,n)):i},has:function(n,r){return r in s(n)},ownKeys:function(n){return Reflect.ownKeys(s(n))},set:function(n,r,t){var e=z(s(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.M){var i=A(s(n),r),o=null==i?void 0:i[H];if(o&&o.u===t)return n.i[r]=t,n.N[r]=!1,!0;if(a(t,i)&&(void 0!==t||u(n.u,r)))return!0;R(n),E(n)}return n.i[r]===t&&(void 0!==t||r in n.i)||Number.isNaN(t)&&Number.isNaN(n.i[r])||(n.i[r]=t,n.N[r]=!0),!0},deleteProperty:function(n,r){return void 0!==A(n.u,r)||r in n.u?(n.N[r]=!1,R(n),E(n)):delete n.N[r],n.i&&delete n.i[r],!0},getOwnPropertyDescriptor:function(n,r){var t=s(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.t||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.u)},setPrototypeOf:function(){n(12)}},Z={};e(Y,(function(n,r){Z[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),Z.deleteProperty=function(n,r){return Z.set.call(this,n,r,void 0)},Z.set=function(n,r,t){return Y.set.call(this,n[0],r,t,n[0])};var nn=function(){function e(r){var e=this;this.S=q,this.D=!0,this.produce=function(r,i,u){if("function"==typeof r&&"function"!=typeof i){var o=i;i=r;var f=e;return function(n){var r=this;void 0===n&&(n=o);for(var t=arguments.length,e=Array(t>1?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return f.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var a;if("function"!=typeof i&&n(6),void 0!==u&&"function"!=typeof u&&n(7),t(r)){var c=x(e),v=k(e,r,void 0),s=!0;try{a=i(v),s=!1}finally{s?j(c):O(c)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return m(c,u),S(n,c)}),(function(n){throw j(c),n})):(m(c,u),S(a,c))}if(!r||"object"!=typeof r){if(void 0===(a=i(r))&&(a=r),a===B&&(a=void 0),e.D&&l(a,!0),u){var p=[],d=[];y("Patches").g(r,a,p,d),u(p,d)}return a}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),u=1;u<t;u++)i[u-1]=arguments[u];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,u=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(n){return[n,t,i]})):[u,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=F(e));var i=x(this),u=k(this,e,void 0);return u[H].C=!0,O(i),u},i.finishDraft=function(n,r){var t=(n&&n[H]).A;return m(t,r),S(void 0,t)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!q&&n(20),this.S=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var u=y("Patches").W;return r(n)?u(n,t):this.produce(n,(function(n){return u(n,t)}))},e}(),rn=new nn,tn=rn.produce,en=rn.produceWithPatches.bind(rn),un=rn.setAutoFreeze.bind(rn),on=rn.setUseProxies.bind(rn),fn=rn.applyPatches.bind(rn),an=rn.createDraft.bind(rn),cn=rn.finishDraft.bind(rn);exports.Immer=nn,exports.applyPatches=fn,exports.castDraft=function(n){return n},exports.castImmutable=function(n){return n},exports.createDraft=an,exports.current=F,exports.default=tn,exports.enableAllPlugins=function(){D(),$(),K()},exports.enableES5=D,exports.enableMapSet=$,exports.enablePatches=K,exports.finishDraft=cn,exports.freeze=l,exports.immerable=G,exports.isDraft=r,exports.isDraftable=t,exports.nothing=B,exports.original=function(t){return r(t)||n(23,t),t[H].u},exports.produce=tn,exports.produceWithPatches=en,exports.setAutoFreeze=un,exports.setUseProxies=on},"./node_modules/immer/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/immer/dist/immer.cjs.production.min.js")},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>useUID,H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-"+index:"val-"+item:map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},createSource=(generateUID(),function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:generateUID()}}),counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){return react.useState(function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(react.useContext(source)))},useUID=function(){return useUIDState()[0].uid},useUIDSeed=function(){return useUIDState()[0].gen}},"./node_modules/use-local-slice/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e,r=__webpack_require__("./node_modules/react/index.js"),t=(e=__webpack_require__("./node_modules/immer/dist/index.js"))&&"object"==typeof e&&"default"in e?e.default:e;exports.p=function(e){var u=e.initialState,n=e.reducers,i=e.slice;void 0===i&&(i="unnamed"),r.useDebugValue(i);var a=r.useReducer((function(e,r){return t(e,(function(e){return n[r.type](e,r)}))}),u),c=a[0],o=a[1],f=Object.keys(n);return[c,r.useMemo((function(){for(var e={},r=function(){var r=u[t];e[r]=function(e){return o({type:r,payload:e})}},t=0,u=f;t<u.length;t+=1)r();return e}),[o,JSON.stringify(f)])]}}}]);