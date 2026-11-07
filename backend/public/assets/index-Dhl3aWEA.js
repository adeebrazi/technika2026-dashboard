var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function N(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ee(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ee(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),ee(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=ee(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=ee(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ee(N(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function te(e,t,n){if(e==null)return e;var r=[],i=0;return ee(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var re=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ie(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,re)}catch(e){re(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ae(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ie(ae.bind(null,e))}var oe={map:te,forEach:function(e,t,n){te(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return te(e,function(){t++}),t},toArray:function(e){return te(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=oe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ae,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ie,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function m(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),M=Symbol.for(`react.strict_mode`),N=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),ne=Symbol.for(`react.forward_ref`),re=Symbol.for(`react.suspense`),ie=Symbol.for(`react.suspense_list`),ae=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),ce=Symbol.for(`react.legacy_hidden`),le=Symbol.for(`react.memo_cache_sentinel`),ue=Symbol.for(`react.view_transition`),P=Symbol.for(`react.recoverable`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var pe=Symbol.for(`react.client.reference`);function me(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case N:return`Profiler`;case M:return`StrictMode`;case re:return`Suspense`;case ie:return`SuspenseList`;case se:return`Activity`;case ue:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case ne:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ae:return t=e.displayName||null,t===null?me(e.type)||`Memo`:t;case oe:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var he=Array.isArray,F=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},_e=[],ve=-1;function ye(e){return{current:e}}function be(e){0>ve||(e.current=_e[ve],_e[ve]=null,ve--)}function xe(e,t){ve++,_e[ve]=e.current,e.current=t}var Se=ye(null),Ce=ye(null),we=ye(null),Te=ye(null);function Ee(e,t){switch(xe(we,t),xe(Ce,e),xe(Se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pp(t),e=mp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}be(Se),xe(Se,e)}function De(){be(Se),be(Ce),be(we)}function Oe(e){var t=e.memoizedState;t!==null&&(uh._currentValue=t.memoizedState,xe(Te,e)),t=Se.current;var n=mp(t,e.type);t!==n&&(xe(Ce,e),xe(Se,n))}function ke(e){Ce.current===e&&(be(Se),be(Ce)),Te.current===e&&(be(Te),uh._currentValue=ge)}var Ae,je;function Me(e){if(Ae===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ae=t&&t[1]||``,je=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ae+e+je}var Ne=!1;function Pe(e,t){if(!e||Ne)return``;Ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ne=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Me(n):``}function Fe(e,t){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me(`Lazy`);case 13:return e.child!==t&&t!==null?Me(`Suspense Fallback`):Me(`Suspense`);case 19:return Me(`SuspenseList`);case 0:case 15:return Pe(e.type,!1);case 11:return Pe(e.type.render,!1);case 1:return Pe(e.type,!0);case 31:return Me(`Activity`);case 30:return Me(`ViewTransition`);default:return``}}function Ie(e){try{var t=``,n=null;do t+=Fe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Le=Object.prototype.hasOwnProperty,Re=t.unstable_scheduleCallback,ze=t.unstable_cancelCallback,Be=t.unstable_shouldYield,Ve=t.unstable_requestPaint,He=t.unstable_now,Ue=t.unstable_getCurrentPriorityLevel,We=t.unstable_ImmediatePriority,Ge=t.unstable_UserBlockingPriority,Ke=t.unstable_NormalPriority,qe=t.unstable_LowPriority,Je=t.unstable_IdlePriority,Ye=t.log,Xe=t.unstable_setDisableYieldValue,Ze=null,Qe=null;function $e(e){if(typeof Ye==`function`&&Xe(e),Qe&&typeof Qe.setStrictMode==`function`)try{Qe.setStrictMode(Ze,e)}catch{}}var et=Math.clz32?Math.clz32:rt,tt=Math.log,nt=Math.LN2;function rt(e){return e>>>=0,e===0?32:31-(tt(e)/nt|0)|0}var it=256,at=262144,ot=4194304;function st(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=st(n))):i=st(o):i=st(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=st(n))):i=st(o)):i=st(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function lt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-et(n),i=1<<r;t|=e[r],n&=~i}return t}function dt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(){var e=ot;return ot<<=1,!(ot&62914560)&&(ot=4194304),e}function pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ht(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-et(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&gt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function gt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-et(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function _t(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function vt(e,t){var n=t&-t;return n=n&42?1:yt(n),(n&(e.suspendedLanes|t))===0?n:0}function yt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function xt(){var e=I.p;return e===0?(e=window.event,e===void 0?32:Eh(e.type)):e}function St(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var Ct=Math.random().toString(36).slice(2),wt=`__reactFiber$`+Ct,Tt=`__reactProps$`+Ct,Et=`__reactContainer$`+Ct,Dt=`__reactEvents$`+Ct,Ot=`__reactListeners$`+Ct,kt=`__reactHandles$`+Ct,At=`__reactResources$`+Ct,jt=`__reactMarker$`+Ct,Mt=`__reactLoad$`+Ct;function Nt(e){delete e[wt],delete e[Tt],delete e[Ot],delete e[kt]}function Pt(e){var t;if(t=e[wt])return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hm(e);e!==null;){if(n=e[wt])return n;e=hm(e)}return t}e=n,n=e.parentNode}return null}function Ft(e){if(e=e[wt]||e[Et]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function It(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Lt(e){var t=e[At];return t||=e[At]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Rt(e){e[jt]=!0}function zt(e){e[Mt]=void 0}var Bt=new Set,Vt={};function Ht(e,t){Ut(e,t),Ut(e+`Capture`,t)}function Ut(e,t){for(Vt[e]=t,e=0;e<t.length;e++)Bt.add(t[e])}var Wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Gt={},Kt={};function qt(e){return Le.call(Kt,e)?!0:Le.call(Gt,e)?!1:Wt.test(e)?Kt[e]=!0:(Gt[e]=!0,!1)}var L=!1;function Jt(){var e=L;return L=!1,e}function Yt(e,t,n){if(qt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Xt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Qt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function $t(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function en(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tn(e){if(!e._valueTracker){var t=$t(e)?`checked`:`value`;e._valueTracker=en(e,t,``+e[t])}}function nn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=$t(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var rn=/[\n"\\]/g;function an(e){return e.replace(rn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function on(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Qt(t)):e.value!==``+Qt(t)&&(e.value=``+Qt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):cn(e,Qt(n)):o===`number`&&e.value==t?cn(e,Qt(e.value)):cn(e,Qt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Qt(s):e.removeAttribute(`name`)}function sn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){tn(e);return}n=n==null?``:``+Qt(n),t=t==null?n:``+Qt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),tn(e)}function cn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function un(e,t,n){if(t!=null&&(t=``+Qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Qt(n)}function dn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(he(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Qt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),tn(e)}function fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function mn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||pn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function hn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,L=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(mn(e,a,r),L=!0)}else for(var o in t)t.hasOwnProperty(o)&&mn(e,o,t[o])}function gn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var _n=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),vn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yn(e){return vn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function bn(){}var xn=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,wn=null;function Tn(e){var t=Ft(e);if(t&&(e=t.stateNode)){var n=e[Tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(on(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+an(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Tt]||null;if(!a)throw Error(i(90));on(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&nn(r)}break a;case`textarea`:un(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}}}var En=!1;function Dn(e,t,n){if(En)return e(t,n);En=!0;try{return e(t)}finally{if(En=!1,(Cn!==null||wn!==null)&&(Vd(),Cn&&(t=Cn,e=wn,wn=Cn=null,Tn(t),e)))for(t=0;t<e.length;t++)Tn(e[t])}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,An=!1;if(kn)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){An=!0}}),window.addEventListener(`test`,jn,jn),window.removeEventListener(`test`,jn,jn)}catch{An=!1}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function In(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Rn(){return!1}function zn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Ln:Rn,this.isPropagationStopped=Rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vn=zn(Bn),Hn=D({},Bn,{view:0,detail:0}),Un=zn(Hn),Wn,Gn,Kn,qn=D({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Kn&&(Kn&&e.type===`mousemove`?(Wn=e.screenX-Kn.screenX,Gn=e.screenY-Kn.screenY):Gn=Wn=0,Kn=e),Wn)},movementY:function(e){return`movementY`in e?e.movementY:Gn}}),Jn=zn(qn),Yn=zn(D({},qn,{dataTransfer:0})),Xn=zn(D({},Hn,{relatedTarget:0})),Zn=zn(D({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Qn=zn(D({},Bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),$n=zn(D({},Bn,{data:0})),er={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},tr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},nr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function rr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nr[e])?!!t[e]:!1}function ir(){return rr}var ar=zn(D({},Hn,{key:function(e){if(e.key){var t=er[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=In(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?tr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type===`keypress`?In(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?In(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),or=zn(D({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),sr=zn(D({},Bn,{submitter:0})),cr=zn(D({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir})),lr=zn(D({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),ur=zn(D({},qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),dr=zn(D({},Bn,{newState:0,oldState:0,source:0})),fr=[9,13,27,32],pr=kn&&`CompositionEvent`in window,mr=null;kn&&`documentMode`in document&&(mr=document.documentMode);var hr=kn&&`TextEvent`in window&&!mr,gr=kn&&(!pr||mr&&8<mr&&11>=mr),_r=` `,vr=!1;function yr(e,t){switch(e){case`keyup`:return fr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function br(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var xr=!1;function Sr(e,t){switch(e){case`compositionend`:return br(t);case`keypress`:return t.which===32?(vr=!0,_r):null;case`textInput`:return e=t.data,e===_r&&vr?null:e;default:return null}}function Cr(e,t){if(xr)return e===`compositionend`||!pr&&yr(e,t)?(e=Fn(),Pn=Nn=Mn=null,xr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return gr&&t.locale!==`ko`?null:t.data;default:return null}}var wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!wr[e.type]:t===`textarea`}function Tr(e,t,n,r){Cn?wn?wn.push(r):wn=[r]:Cn=r,t=Zf(t,`onChange`),0<t.length&&(n=new Vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Er=null,Dr=null;function Or(e){Wf(e,0)}function kr(e){if(nn(It(e)))return e}function Ar(e,t){if(e===`change`)return t}var jr=!1;if(kn){var Mr;if(kn){var Nr=`oninput`in document;if(!Nr){var Pr=document.createElement(`div`);Pr.setAttribute(`oninput`,`return;`),Nr=typeof Pr.oninput==`function`}Mr=Nr}else Mr=!1;jr=Mr&&(!document.documentMode||9<document.documentMode)}function Fr(){Er&&(Er.detachEvent(`onpropertychange`,Ir),Dr=Er=null)}function Ir(e){if(e.propertyName===`value`&&kr(Dr)){var t=[];Tr(t,Dr,e,Sn(e)),Dn(Or,t)}}function Lr(e,t,n){e===`focusin`?(Fr(),Er=t,Dr=n,Er.attachEvent(`onpropertychange`,Ir)):e===`focusout`&&Fr()}function Rr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return kr(Dr)}function zr(e,t){if(e===`click`)return kr(t)}function Br(e,t){if(e===`input`||e===`change`)return kr(t)}function Vr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Hr=typeof Object.is==`function`?Object.is:Vr;function Ur(e,t){if(Hr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Le.call(t,i)||!Hr(e[i],t[i]))return!1}return!0}function Wr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kr(e,t){var n=Gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Gr(n)}}function qr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Xr=kn&&`documentMode`in document&&11>=document.documentMode,Zr=null,Qr=null,$r=null,ei=!1;function ti(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ei||Zr==null||Zr!==Wr(r)||(r=Zr,`selectionStart`in r&&Yr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Ur($r,r)||($r=r,r=Zf(Qr,`onSelect`),0<r.length&&(t=new Vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ri={animationend:ni(`Animation`,`AnimationEnd`),animationiteration:ni(`Animation`,`AnimationIteration`),animationstart:ni(`Animation`,`AnimationStart`),transitionrun:ni(`Transition`,`TransitionRun`),transitionstart:ni(`Transition`,`TransitionStart`),transitioncancel:ni(`Transition`,`TransitionCancel`),transitionend:ni(`Transition`,`TransitionEnd`)},ii={},ai={};kn&&(ai=document.createElement(`div`).style,`AnimationEvent`in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),`TransitionEvent`in window||delete ri.transitionend.transition);function oi(e){if(ii[e])return ii[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ai)return ii[e]=t[n];return e}var si=oi(`animationend`),ci=oi(`animationiteration`),li=oi(`animationstart`),ui=oi(`transitionrun`),di=oi(`transitionstart`),fi=oi(`transitioncancel`),pi=oi(`transitionend`),mi=new Map,hi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);hi.push(`scrollEnd`);function gi(e,t){mi.set(e,t),Ht(t,[e])}var _i=0;function vi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=Sd.identifierPrefix;var n=_i++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function yi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ad;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function bi(e,t){return e=yi(e),t=yi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var xi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Si=[],Ci=0,wi=0;function Ti(){for(var e=Ci,t=wi=Ci=0;t<e;){var n=Si[t];Si[t++]=null;var r=Si[t];Si[t++]=null;var i=Si[t];Si[t++]=null;var a=Si[t];if(Si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ki(n,i,a)}}function Ei(e,t,n,r){Si[Ci++]=e,Si[Ci++]=t,Si[Ci++]=n,Si[Ci++]=r,wi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Di(e,t,n,r){return Ei(e,t,n,r),Ai(e)}function Oi(e,t){return Ei(e,null,null,t),Ai(e)}function ki(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-et(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ai(e){if(50<jd)throw jd=0,Md=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ji={};function Mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(e,t,n,r){return new Mi(e,t,n,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,t){var n=e.alternate;return n===null?(n=Ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ii(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Li(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Pi(r)&&(s=1);else if(typeof r==`string`)s=Xm(e,n,Se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case se:return e=Ni(31,n,t,a),e.elementType=se,e.lanes=o,e;case j:return Ri(n.children,a,o,t);case M:s=8,a|=24;break;case N:return e=Ni(12,n,t,a|2),e.elementType=N,e.lanes=o,e;case re:return e=Ni(13,n,t,a),e.elementType=re,e.lanes=o,e;case ie:return e=Ni(19,n,t,a),e.elementType=ie,e.lanes=o,e;case ce:case ue:return e=a|32,e=Ni(30,n,t,e),e.elementType=ue,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case te:s=10;break a;case ee:s=9;break a;case ne:s=11;break a;case ae:s=14;break a;case oe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ri(e,t,n,r){return e=Ni(7,e,r,t),e.lanes=n,e}function zi(e,t,n){return e=Ni(6,e,null,t),e.lanes=n,e}function Bi(e){var t=Ni(18,null,null,0);return t.stateNode=e,t}function Vi(e,t,n){return t=Ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hi=new WeakMap;function Ui(e,t){if(typeof e==`object`&&e){var n=Hi.get(e);return n===void 0?(t={value:e,source:t,stack:Ie(t)},Hi.set(e,t),t):n}return{value:e,source:t,stack:Ie(t)}}var Wi=[],Gi=0,Ki=null,qi=0,Ji=[],Yi=0,Xi=null,Zi=1,Qi=``;function $i(e,t){Wi[Gi++]=qi,Wi[Gi++]=Ki,Ki=e,qi=t}function ea(e,t,n){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Xi=e;var r=Zi;e=Qi;var i=32-et(r)-1;r&=~(1<<i),n+=1;var a=32-et(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zi=1<<32-et(t)+i|n<<i|r,Qi=a+e}else Zi=1<<a|n<<i|r,Qi=e}function ta(e){e.return!==null&&($i(e,1),ea(e,1,0))}function na(e){for(;e===Ki;)Ki=Wi[--Gi],Wi[Gi]=null,qi=Wi[--Gi],Wi[Gi]=null;for(;e===Xi;)Xi=Ji[--Yi],Ji[Yi]=null,Qi=Ji[--Yi],Ji[Yi]=null,Zi=Ji[--Yi],Ji[Yi]=null}function ra(e,t){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Zi=t.id,Qi=t.overflow,Xi=e}var ia=null,aa=null,z=!1,oa=null,sa=!1,ca=Error(i(519));function la(e){throw ha(Ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ca}function ua(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[wt]=e,t[Tt]=r,n){case`dialog`:Y(`cancel`,t),Y(`close`,t);break;case`iframe`:case`object`:case`embed`:Y(`load`,t);break;case`video`:case`audio`:for(n=0;n<Hf.length;n++)Y(Hf[n],t);break;case`source`:Y(`error`,t);break;case`img`:case`image`:case`link`:Y(`error`,t),Y(`load`,t);break;case`details`:Y(`toggle`,t);break;case`input`:Y(`invalid`,t),sn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Y(`invalid`,t);break;case`textarea`:Y(`invalid`,t),dn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||rp(t.textContent,n)?(r.popover!=null&&(Y(`beforetoggle`,t),Y(`toggle`,t)),r.onScroll!=null&&Y(`scroll`,t),r.onScrollEnd!=null&&Y(`scrollend`,t),r.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||la(e,!0)}function da(e){for(ia=e.return;ia;)switch(ia.tag){case 5:case 31:case 13:sa=!1;return;case 27:case 3:sa=!0;return;default:ia=ia.return}}function fa(e){if(e!==ia)return!1;if(!z)return da(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||gp(e.type,e.memoizedProps)),n=!n),n&&aa&&la(e),da(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));aa=mm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));aa=mm(e)}else t===27?(t=aa,Tp(e.type)?(e=pm,pm=null,aa=e):aa=t):aa=ia?fm(e.stateNode.nextSibling):null;return!0}function pa(){aa=ia=null,z=!1}function ma(){var e=oa;return e!==null&&(md===null?md=e:md.push.apply(md,e),oa=null),e}function ha(e){oa===null?oa=[e]:oa.push(e)}var ga=ye(null),_a=null,va=null;function ya(e,t,n){xe(ga,t._currentValue),t._currentValue=n}function ba(e){e._currentValue=ga.current,be(ga)}function xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Sa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),xa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),xa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),xa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ca(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Hr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Te.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[uh]:e.push(uh))}a=a.return}return e!==null&&Sa(t,e,n,r),t.flags|=262144,e!==null}function wa(e){for(e=e.firstContext;e!==null;){if(!Hr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ta(e){_a=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ea(e){return Oa(_a,e)}function Da(e,t){return _a===null&&Ta(e),Oa(e,t)}function Oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},va===null){if(e===null)throw Error(i(308));va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else va=va.next=t;return n}var ka=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Aa=t.unstable_scheduleCallback,ja=t.unstable_NormalPriority,Ma={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Na(){return{controller:new ka,data:new Map,refCount:0}}function Pa(e){e.refCount--,e.refCount===0&&Aa(ja,function(){e.controller.abort()})}function Fa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ia=null;function La(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ra=null,za=0,Ba=0,Va=null;function Ha(e,t){if(Ra===null){var n=Ra=[];za=0,Ba=Lf(),Va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return za++,t.then(Ua,Ua),t}function Ua(){if(--za===0&&(Ia=null,Ra!==null)){Va!==null&&(Va.status=`fulfilled`);var e=Ra;Ra=null,Ba=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ga=F.S;F.S=function(e,t){if(_d=He(),typeof t==`object`&&t&&typeof t.then==`function`&&Ha(e,t),Ia!==null)for(var n=Cf;n!==null;)Fa(n,Ia),n=n.next;if(n=e.types,n!==null){for(var r=Cf;r!==null;)Fa(r,n),r=r.next;if(Ba!==0){r=Ia,r===null&&(r=Ia=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ga!==null&&Ga(e,t)};var Ka=ye(null);function qa(){var e=Ka.current;return e===null?ed.pooledCache:e}function Ja(e,t){t===null?xe(Ka,Ka.current):xe(Ka,t.pool)}function Ya(){var e=qa();return e===null?null:{parent:Ma._currentValue,pool:e}}var Xa=Error(i(460)),Za=Error(i(474)),Qa=Error(i(542)),$a={then:function(){}};function eo(e){return e=e.status,e===`fulfilled`||e===`rejected`}function to(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ao(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(bn,bn);else{if(e=ed,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ao(e),e}throw ro=t,Xa}}function no(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ro=e,Xa):e}}var ro=null;function io(){if(ro===null)throw Error(i(459));var e=ro;return ro=null,e}function ao(e){if(e===Xa||e===Qa)throw Error(i(483))}var oo=null,so=0;function co(e){var t=so;return so+=1,oo===null&&(oo=[]),to(oo,e,t)}function lo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function uo(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function fo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=zi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),lo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===oe&&no(i)===t.type)?(t=a(t,n.props),lo(t,n),t.return=e,t):(t=Li(n.type,n.key,n.props,null,e.mode,r),lo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ri(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=zi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Li(t.type,t.key,t.props,null,e.mode,n),lo(n,t),n.return=e,n;case A:return t=Vi(t,e.mode,n),t.return=e,t;case oe:return t=no(t),f(e,t,n)}if(he(t)||fe(t))return t=Ri(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,co(t),n);if(t.$$typeof===te)return f(e,Da(e,t),n);uo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case oe:return n=no(n),p(e,t,n,r)}if(he(n)||fe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,co(n),r);if(n.$$typeof===te)return p(e,t,Da(e,n),r);uo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case oe:return r=no(r),m(e,t,n,r,i)}if(he(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,co(r),i);if(r.$$typeof===te)return m(e,t,n,Da(t,r),i);uo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&$i(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&$i(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&$i(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&$i(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&$i(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&$i(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),lo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===oe&&no(l)===r.type){n(e,r.sibling),c=a(r,o.props),lo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=Ri(o.props.children,e.mode,c,o.key),lo(c,o),c.return=e,e=c):(c=Li(o.type,o.key,o.props,null,e.mode,c),lo(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Vi(o,e.mode,c),c.return=e,e=c}return s(e);case oe:return o=no(o),_(e,r,o,c)}if(he(o))return h(e,r,o,c);if(fe(o)){if(l=fe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,co(o),c);if(o.$$typeof===te)return _(e,r,Da(e,o),c);uo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=zi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{so=0;var i=_(e,t,n,r);return oo=null,i}catch(t){if(t===Xa||t===Qa)throw t;var a=Ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var po=fo(!0),mo=fo(!1),ho=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _o(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$u&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ai(e),ki(e,null,n),t}return Ei(e,r,t,n),Ai(e)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}function xo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var B=!1;function So(){if(B){var e=Va;if(e!==null)throw e}}function Co(e,t,n,r){B=!1;var i=e.updateQueue;ho=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===Ba&&(B=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:ho=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),cd|=o,e.lanes=o,e.memoizedState=d}}function wo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function To(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)wo(n[e],t)}var Eo=ye(null),Do=ye(0);function Oo(e,t){e=od,xe(Do,e),xe(Eo,t),od=e|t.baseLanes}function ko(){xe(Do,od),xe(Eo,Eo.current)}function Ao(){od=Do.current,be(Eo),be(Do)}var jo=ye(null),Mo=null;function No(e){var t=e.alternate;xe(Lo,Lo.current&1),xe(jo,e),Mo===null&&(t===null||Eo.current!==null||t.memoizedState!==null)&&(Mo=e)}function Po(e){xe(Lo,Lo.current),xe(jo,e),Mo===null&&(Mo=e)}function V(e){e.tag===22?(xe(Lo,Lo.current),xe(jo,e),Mo===null&&(Mo=e)):Fo()}function Fo(){xe(Lo,Lo.current),xe(jo,jo.current)}function Io(e){be(jo),Mo===e&&(Mo=null),be(Lo)}var Lo=ye(0);function Ro(e,t){xe(jo,jo.current),xe(Lo,t)}function zo(e){be(Lo),be(jo),Mo===e&&(Mo=null)}function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lm(n)||um(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=0,H=null,U=null,Ho=null,Uo=!1,Wo=!1,Go=!1,Ko=0,qo=0,Jo=null,Yo=0;function Xo(){throw Error(i(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Hr(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,i,a){return Vo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?hc:gc,Go=!1,a=n(r,i),Go=!1,Wo&&(a=es(t,n,r,i)),$o(e),a}function $o(e){F.H=mc;var t=U!==null&&U.next!==null;if(Vo=0,Ho=U=H=null,Uo=!1,qo=0,Jo=null,t)throw Error(i(300));e===null||W||(e=e.dependencies,e!==null&&wa(e)&&(W=!0))}function es(e,t,n,r){H=e;var a=0;do{if(Wo&&(Jo=null),qo=0,Wo=!1,25<=a)throw Error(i(301));if(a+=1,Ho=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}F.H=_c,o=t(n,r)}while(Wo);return o}function ts(){var e=F.H,t=e.useState()[0];return t=typeof t.then==`function`?cs(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function ns(){var e=Ko!==0;return Ko=0,e}function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function is(e){if(Uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uo=!1}Vo=0,Ho=U=H=null,Wo=!1,qo=Ko=0,Jo=null}function as(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ho===null?H.memoizedState=Ho=e:Ho=Ho.next=e,Ho}function os(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=Ho===null?H.memoizedState:Ho.next;if(t!==null)Ho=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},Ho===null?H.memoizedState=Ho=e:Ho=Ho.next=e}return Ho}function ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cs(e){var t=qo;return qo+=1,Jo===null&&(Jo=[]),e=to(Jo,e,t),t=H,(Ho===null?t.memoizedState:Ho.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?hc:gc),e}function ls(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return cs(e);if(e.$$typeof===P)return;if(e.$$typeof===te)return Ea(e)}throw Error(i(438,String(e)))}function us(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ss(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=le;return t.index++,n}function ds(e,t){return typeof t==`function`?t(e):t}function fs(e){return ps(os(),U,e)}function ps(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Vo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ba&&(d=!0);else if((Vo&p)===p){u=u.next,p===Ba&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,cd|=p;f=u.action,Go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,cd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Hr(o,e.memoizedState)&&(W=!0,d&&(n=Va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ms(e){var t=os(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Hr(o,t.memoizedState)||(W=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hs(e,t,n){var r=H,a=os(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Hr((U||a).memoizedState,n);if(s&&(a.memoizedState=n,W=!0),a=a.queue,Bs(vs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Ho!==null&&!!(Ho.memoizedState.tag&1),Fs(e?9:8,{destroy:void 0},_s.bind(null,r,a,n,t),null),e){if(r.flags|=2048,ed===null)throw Error(i(349));o||Vo&127||gs(r,t,n)}return n}function gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=ss(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _s(e,t,n,r){t.value=n,t.getSnapshot=r,ys(t)&&bs(e)}function vs(e,t,n){return n(function(){ys(t)&&bs(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hr(e,n)}catch{return!0}}function bs(e){var t=Oi(e,2);t!==null&&Id(t,e,2)}function xs(e){var t=as();if(typeof e==`function`){var n=e;if(e=n(),Go){$e(!0);try{n()}finally{$e(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t}function Ss(e,t,n,r){return e.baseState=n,ps(e,U,typeof r==`function`?r:ds)}function Cs(e,t,n,r,a){if(dc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};F.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ws(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ws(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=F.T,o={};o.types=a===null?null:a.types,F.T=o;try{var s=n(i,r),c=F.S;c!==null&&c(o,s),Ts(e,t,s)}catch(n){Ds(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),F.T=a}}else try{a=n(i,r),Ts(e,t,a)}catch(n){Ds(e,t,n)}}function Ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Es(e,t,n)},function(n){return Ds(e,t,n)}):Es(e,t,n)}function Es(e,t,n){t.status=`fulfilled`,t.value=n,Os(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ws(e,n)))}function Ds(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Os(t),t=t.next;while(t!==r)}e.action=null}function Os(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ks(e,t){return t}function As(e,t){if(z){var n=ed.formState;if(n!==null){a:{var r=H;if(z){if(aa){b:{for(var i=aa,a=sa;i.nodeType!==8;){if(!a){i=null;break b}if(i=fm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){aa=fm(i.nextSibling),r=i.data===`F!`;break a}}la(r)}r=!1}r&&(t=n[0])}}return n=as(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},n.queue=r,n=cc.bind(null,H,r),r.dispatch=n,r=xs(!1),a=uc.bind(null,H,!1,r.queue),r=as(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Cs.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function js(e){return Ms(os(),U,e)}function Ms(e,t,n){if(t=ps(e,t,ks)[0],e=fs(ds)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=cs(t)}catch(e){throw e===Xa?Qa:e}else r=t;t=os();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,Fs(9,{destroy:void 0},Ns.bind(null,i,n),null)),[r,a,e]}function Ns(e,t){e.action=t}function Ps(e){var t=os(),n=U;if(n!==null)return Ms(t,n,e);os(),t=t.memoizedState,n=os();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=ss(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Is(){return os().memoizedState}function Ls(e,t,n,r){var i=as();H.flags|=e,i.memoizedState=Fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Rs(e,t,n,r){var i=os();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&Zo(r,U.memoizedState.deps)?i.memoizedState=Fs(t,a,n,r):(H.flags|=e,i.memoizedState=Fs(1|t,a,n,r))}function zs(e,t){Ls(8390656,8,e,t)}function Bs(e,t){Rs(2048,8,e,t)}function Vs(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=ss(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hs(e){var t=os().memoizedState;return Vs({ref:t,nextImpl:e}),function(){if($u&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Rs(4,2,e,t)}function Ws(e,t){return Rs(4,4,e,t)}function Gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,n){n=n==null?null:n.concat([e]),Rs(4,4,Gs.bind(null,t,e),n)}function qs(){}function Js(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ys(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Zo(t,r[1]))return r[0];if(r=e(),Go){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r}function Xs(e,t,n){return n===void 0||Vo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=Pd(),H.lanes|=e,cd|=e,n)}function Zs(e,t,n,r){return Hr(n,t)?n:Eo.current===null?!(Vo&106)||Vo&1073741824&&!(J&261930)?(W=!0,e.memoizedState=n):(e=Pd(),H.lanes|=e,cd|=e,t):(e=Xs(e,n,r),Hr(e,t)||(W=!0),e)}function Qs(e,t,n,r,i){var a=I.p;I.p=a!==0&&8>a?a:8;var o=F.T,s={};s.types=o===null?null:o.types,F.T=s,uc(e,!1,t,n);try{var c=i(),l=F.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?lc(e,t,Wa(c,r),Nd(e)):lc(e,t,r,Nd(e))}catch(n){lc(e,t,{then:function(){},status:`rejected`,reason:n},Nd())}finally{I.p=a,o!==null&&s.types!==null&&(o.types=s.types),F.T=o}}function $s(){}function ec(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=tc(e).queue;Qs(e,a,t,ge,n===null?$s:function(){return nc(e),n(r)})}function tc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:ge},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nc(e){var t=tc(e);t.next===null&&(t=e.alternate.memoizedState),lc(e,t.next.queue,{},Nd())}function rc(){return Ea(uh)}function ic(){return os().memoizedState}function ac(){return os().memoizedState}function oc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nd();e=vo(n);var r=yo(t,e,n);r!==null&&(Id(r,t,n),bo(r,t,n)),t={cache:Na()},e.payload=t;return}t=t.return}}function sc(e,t,n){var r=Nd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e)?fc(t,n):(n=Di(e,t,n,r),n!==null&&(Id(n,e,r),pc(n,t,r)))}function cc(e,t,n){lc(e,t,n,Nd())}function lc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Hr(s,o))return Ei(e,t,i,0),ed===null&&Ti(),!1}catch{}if(n=Di(e,t,i,r),n!==null)return Id(n,e,r),pc(n,t,r),!0}return!1}function uc(e,t,n,r){if(r={lane:2,revertLane:Lf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},dc(e)){if(t)throw Error(i(479))}else t=Di(e,n,r,2),t!==null&&Id(t,e,2)}function dc(e){var t=e.alternate;return e===H||t!==null&&t===H}function fc(e,t){Wo=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}var mc={readContext:Ea,use:ls,useCallback:Xo,useContext:Xo,useEffect:Xo,useImperativeHandle:Xo,useLayoutEffect:Xo,useInsertionEffect:Xo,useMemo:Xo,useReducer:Xo,useRef:Xo,useState:Xo,useDebugValue:Xo,useDeferredValue:Xo,useTransition:Xo,useSyncExternalStore:Xo,useId:Xo,useHostTransitionStatus:Xo,useFormState:Xo,useActionState:Xo,useOptimistic:Xo,useMemoCache:Xo,useCacheRefresh:Xo,useEffectEvent:Xo},hc={readContext:Ea,use:ls,useCallback:function(e,t){return as().memoizedState=[e,t===void 0?null:t],e},useContext:Ea,useEffect:zs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ls(4194308,4,Gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){Ls(4,2,e,t)},useMemo:function(e,t){var n=as();t=t===void 0?null:t;var r=e();if(Go){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=as();if(n!==void 0){var i=n(t);if(Go){$e(!0);try{n(t)}finally{$e(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=sc.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=as();return e={current:e},t.memoizedState=e},useState:function(e){e=xs(e);var t=e.queue,n=cc.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){return Xs(as(),e,t)},useTransition:function(){var e=xs(!1);return e=Qs.bind(null,H,e.queue,!0,!1),as().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=as();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),ed===null)throw Error(i(349));J&127||gs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,zs(vs.bind(null,r,o,e),[e]),r.flags|=2048,Fs(9,{destroy:void 0},_s.bind(null,r,o,n,t),null),n},useId:function(){var e=as(),t=ed.identifierPrefix;if(z){var n=Qi,r=Zi;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ko++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:rc,useFormState:As,useActionState:As,useOptimistic:function(e){var t=as();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=uc.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:us,useCacheRefresh:function(){return as().memoizedState=oc.bind(null,H)},useEffectEvent:function(e){var t=as(),n={impl:e};return t.memoizedState=n,function(){if($u&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},gc={readContext:Ea,use:ls,useCallback:Js,useContext:Ea,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:fs,useRef:Is,useState:function(){return fs(ds)},useDebugValue:qs,useDeferredValue:function(e,t){return Zs(os(),U.memoizedState,e,t)},useTransition:function(){var e=fs(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:js,useActionState:js,useOptimistic:function(e,t){return Ss(os(),U,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs},_c={readContext:Ea,use:ls,useCallback:Js,useContext:Ea,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:ms,useRef:Is,useState:function(){return ms(ds)},useDebugValue:qs,useDeferredValue:function(e,t){var n=os();return U===null?Xs(n,e,t):Zs(n,U.memoizedState,e,t)},useTransition:function(){var e=ms(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var n=os();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ss(n,U,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs};function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nd(),i=vo(r);i.payload=t,n!=null&&(i.callback=n),t=yo(e,i,r),t!==null&&(Id(t,e,r),bo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nd(),i=vo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yo(e,i,r),t!==null&&(Id(t,e,r),bo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nd(),r=vo(n);r.tag=2,t!=null&&(r.callback=t),t=yo(e,r,n),t!==null&&(Id(t,e,n),bo(t,e,n))}};function bc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,a):!0}function xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function Sc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Cc(e){xi(e)}function wc(e){console.error(e)}function Tc(e){xi(e)}function Ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Dc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){return n=vo(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(e,t)},n}function kc(e){return e=vo(e),e.tag=3,e}function Ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Dc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Dc(t,n,r),typeof i!=`function`&&(bd===null?bd=new Set([this]):bd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function jc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ca(t,n,a,!0),n=jo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Mo===null?Jd():n.alternate===null&&sd===0&&(sd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===$a?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),_f(e,r,a)),!1;case 22:return n.flags|=65536,r===$a?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),_f(e,r,a)),!1}throw Error(i(435,n.tag))}return _f(e,r,a),Jd(),!1}if(z)return t=jo.current,t===null?(r!==ca&&(t=Error(i(423),{cause:r}),ha(Ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ui(r,n),a=Oc(e.stateNode,r,a),xo(e,a),sd!==4&&(sd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ca&&(e=Error(i(422),{cause:r}),ha(Ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ui(o,n),pd===null?pd=[o]:pd.push(o),sd!==4&&(sd=2),t===null)return!0;r=Ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Oc(n.stateNode,r,e),xo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(bd===null||!bd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=kc(a),Ac(a,e,n,r),xo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Mc=Error(i(461)),W=!1;function Nc(e,t,n,r){t.child=e===null?mo(t,null,n,r):po(t,e.child,n,r)}function Pc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ta(t),r=Qo(e,t,n,o,a,i),s=ns(),e!==null&&!W?(rs(e,t,i),cl(e,t,i)):(z&&s&&ta(t),t.flags|=1,Nc(e,t,r,i),t.child)}function Fc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ic(e,t,a,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ll(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ur:n,n(o,r)&&e.ref===t.ref)return cl(e,t,i)}return t.flags|=1,e=Fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ur(a,r)&&e.ref===t.ref){if(W=!1,t.pendingProps=r=a,ll(e,i))e.flags&131072&&(W=!0);else return t.lanes=e.lanes,cl(e,t,i)}}return Wc(e,t,n,r,i)}function Lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return zc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ja(t,a===null?null:a.cachePool),a===null?ko():Oo(t,a),V(t);else return r=t.lanes=536870912,zc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ja(t,null),ko(),Fo()):(Ja(t,a.cachePool),Oo(t,a),Fo(),t.memoizedState=null);return Nc(e,t,i,n),t.child}function Rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zc(e,t,n,r,i){var a=qa();return a=a===null?null:{parent:Ma._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ja(t,null),ko(),V(t),e!==null&&Ca(e,t,r,!0),t.childLanes=i,null}function Bc(e,t){return t=$c({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Vc(e,t,n){return po(t,e.child,null,n),e=Bc(t,t.pendingProps),e.flags|=2,Io(t),t.memoizedState=null,e}function Hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=Bc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Rc(null,e);if(Po(t),(e=aa)?(e=cm(e,sa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,aa=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return Bc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Po(t),a){if(t.flags&256)t.flags&=-257,t=Vc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(W||Ca(e,t,n,!1),a=(n&e.childLanes)!==0,W||a){if(Eo.current===null){if(r=ed,r!==null&&(s=vt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Oi(e,s),Id(r,e,s),Mc;Jd()}t=Vc(e,t,n)}else e=o.treeContext,aa=fm(s.nextSibling),ia=t,z=!0,oa=null,sa=!1,e!==null&&ra(t,e),t=Bc(t,r),t.flags|=134221824;return t}return e=Fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Uc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wc(e,t,n,r,i){return Ta(t),n=Qo(e,t,n,r,void 0,i),r=ns(),e!==null&&!W?(rs(e,t,i),cl(e,t,i)):(z&&r&&ta(t),t.flags|=1,Nc(e,t,n,i),t.child)}function Gc(e,t,n,r,i,a){return Ta(t),t.updateQueue=null,n=es(t,r,n,i),$o(e),r=ns(),e!==null&&!W?(rs(e,t,a),cl(e,t,a)):(z&&r&&ta(t),t.flags|=1,Nc(e,t,n,a),t.child)}function Kc(e,t,n,r,i){if(Ta(t),t.stateNode===null){var a=ji,o=n.contextType;typeof o==`object`&&o&&(a=Ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=yc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},go(t),o=n.contextType,a.context=typeof o==`object`&&o?Ea(o):ji,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(vc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&yc.enqueueReplaceState(a,a.state,null),Co(t,r,a,i),So(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Sc(n,s);a.props=c;var l=a.context,u=n.contextType;o=ji,typeof u==`object`&&u&&(o=Ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&xc(t,a,r,o),ho=!1;var f=t.memoizedState;a.state=f,Co(t,r,a,i),So(),l=t.memoizedState,s||f!==l||ho?(typeof d==`function`&&(vc(t,n,d,r),l=t.memoizedState),(c=ho||bc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,_o(e,t),o=t.memoizedProps,u=Sc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ji,typeof l==`object`&&l&&(c=Ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&xc(t,a,r,c),ho=!1,f=t.memoizedState,a.state=f,Co(t,r,a,i),So();var p=t.memoizedState;o!==d||f!==p||ho||e!==null&&e.dependencies!==null&&wa(e.dependencies)?(typeof s==`function`&&(vc(t,n,s,r),p=t.memoizedState),(u=ho||bc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&wa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Uc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=po(t,e.child,null,i),t.child=po(t,null,n,i)):Nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=cl(e,t,i),e}function qc(e,t,n,r){return pa(),t.flags|=256,Nc(e,t,n,r),t.child}var Jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yc(e){return{baseLanes:e,cachePool:Ya()}}function Xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=dd),e}function Zc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Lo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(z){if(i?No(t):Fo(),(e=aa)?(e=cm(e,sa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,aa=null)):e=null,e===null)throw la(t);return t.lanes=um(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Fo(),i=t.mode,a=$c({mode:`hidden`,children:a},i),r=Ri(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Yc(n),r.childLanes=Xc(e,o,n),t.memoizedState=Jc,Rc(null,r)):(No(t),Qc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return tl(e,t,a,o,r,c,s,n)}return i?(Fo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Fi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ri(i,a,n,null),i.flags|=2):i=Fi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Rc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Yc(n):(a=i.cachePool,a===null?a=Ya():(s=Ma._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Xc(e,o,n),t.memoizedState=Jc,Rc(e.child,r)):(No(t),n=e.child,e=n.sibling,n=Fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Qc(e,t){return t=$c({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function $c(e,t){return e=Ni(22,e,null,t),e.lanes=0,e}function el(e,t,n){return po(t,e.child,null,n),e=Qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(No(t),t.flags&=-257,el(e,t,c)):t.memoizedState===null?(Fo(),o=a.fallback,s=t.mode,a=$c({mode:`visible`,children:a.children},s),o=Ri(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,po(t,e.child,null,c),a=t.child,a.memoizedState=Yc(c),a.childLanes=Xc(e,r,c),t.memoizedState=Jc,Rc(null,a)):(Fo(),t.child=e.child,t.flags|=128,null);if(No(t),um(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ha({value:a,source:null,stack:null})),el(e,t,c)}if(W||Ca(e,t,c,!1),r=(c&e.childLanes)!==0,W||r){if(Eo.current!==null)return el(e,t,c);if(r=ed,r!==null&&(a=vt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Oi(e,a),Id(r,e,a),Mc;return lm(o)||Jd(),el(e,t,c)}return lm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,aa=fm(o.nextSibling),ia=t,z=!0,oa=null,sa=!1,e!==null&&ra(t,e),t=Qc(t,a.children),t.flags|=134221824,t)}function nl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xa(e.return,t,n)}function rl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Bo(n)===null&&(t=e),e=e.sibling}return t}function il(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function al(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ol(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Lo.current;if(t.flags&128)return Ro(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ro(t,o),i===`backwards`&&e!==null?(al(e),Nc(e,t,r,n),al(e)):Nc(e,t,r,n),r=z?qi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nl(e,n,t);else if(e.tag===19)nl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=rl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,al(t)),il(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}il(t,!0,n,null,a,r);break;case`together`:il(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=rl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),il(t,!1,i,n,a,r)}return t.child}function sl(e,t,n){var r=t.pendingProps;return ya(t,t.type,r.value),Nc(e,t,r.children,n),t.child}function cl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ca(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ll(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&wa(e)))}function ul(e,t,n){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),ya(t,Ma,e.memoizedState.cache),pa();break;case 27:case 5:Oe(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Po(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return No(t),t.flags|=128,null;r=Ca(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Zc(e,t,n):(No(t),e=cl(e,t,n),e===null?null:e.sibling)}No(t);break;case 19:if(t.flags&128)return ol(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ca(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ol(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ro(t,Lo.current),r)break;return null;case 22:return t.lanes=0,Lc(e,t,n,t.pendingProps);case 24:ya(t,Ma,e.memoizedState.cache)}return cl(e,t,n)}function dl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)W=!0;else{if(!ll(e,n)&&!(t.flags&128))return W=!1,ul(e,t,n);W=!!(e.flags&131072)}}else W=!1,z&&t.flags&1048576&&ea(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=no(t.elementType),t.type=e,typeof e==`function`)Pi(e)?(r=Sc(e,r),t.tag=1,t=Kc(null,t,e,r,n)):(t.tag=0,t=Wc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ne){t.tag=11,t=Pc(null,t,e,r,n);break a}if(a===ae){t.tag=14,t=Fc(null,t,e,r,n);break a}if(a===te){t.tag=10,t.type=e,t=sl(null,t,n);break a}}throw t=me(e)||e,Error(i(306,t,``))}}return t;case 0:return Wc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Sc(r,t.pendingProps),Kc(e,t,r,a,n);case 3:a:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,_o(e,t),Co(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ya(t,Ma,r),r!==o.cache&&Sa(t,[Ma],n,!0),So(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=qc(e,t,r,n);break a}if(r!==a){a=Ui(Error(i(424)),t),ha(a),t=qc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(aa=fm(e.firstChild),ia=t,z=!0,oa=null,sa=!0,n=mo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(pa(),r===a){t=cl(e,t,n);break a}Nc(e,t,r,n)}t=t.child}return t;case 26:return Uc(e,t),e===null?(n=Im(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(t.stateNode=hp(t.type,t.pendingProps,we.current,t)):t.memoizedState=Im(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oe(t),e===null&&z&&(r=t.stateNode=vm(t.type,t.pendingProps,we.current),ia=t,sa=!0,a=aa,Tp(t.type)?(pm=a,aa=fm(r.firstChild)):aa=a),Nc(e,t,t.pendingProps.children,n),Uc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=aa)&&(r=om(r,t.type,t.pendingProps,sa),r===null?a=!1:(t.stateNode=r,ia=t,aa=fm(r.firstChild),sa=!1,a=!0)),a||la(t)),Oe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,gp(a,o)?r=null:s!==null&&gp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Qo(e,t,ts,null,null,n),uh._currentValue=a),Uc(e,t),Nc(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=aa)&&(n=sm(n,t.pendingProps,sa),n===null?e=!1:(t.stateNode=n,ia=t,aa=null,e=!0)),e||la(t)),null;case 13:return Zc(e,t,n);case 4:return Ee(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=po(t,null,r,n):Nc(e,t,r,n),t.child;case 11:return Pc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Uc(e,t),Nc(e,t,r,n),t.child;case 8:return Nc(e,t,t.pendingProps.children,n),t.child;case 12:return Nc(e,t,t.pendingProps.children,n),t.child;case 10:return sl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ta(t),a=Ea(a),r=r(a),t.flags|=1,Nc(e,t,r,n),t.child;case 14:return Fc(e,t,t.type,t.pendingProps,n);case 15:return Ic(e,t,t.type,t.pendingProps,n);case 19:return ol(e,t,n);case 31:return Hc(e,t,n);case 22:return Lc(e,t,n,t.pendingProps);case 24:return Ta(t),r=Ea(Ma),e===null?(a=qa(),a===null&&(a=ed,o=Na(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},go(t),ya(t,Ma,a)):((e.lanes&n)!==0&&(_o(e,t),Co(t,null,null,n),So()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ya(t,Ma,r),r!==a.cache&&Sa(t,[Ma],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ya(t,Ma,r))),Nc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:z&&ta(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Uc(e,t),Nc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function fl(e){e.flags|=4}function pl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Zm(t,r):Zm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Gd())e.flags|=8192;else throw ro=$a,Za}}else e.flags&=-16777217}function ml(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Qm(t)){if(Gd())e.flags|=8192;else throw ro=$a,Za}}function hl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ft(),e.lanes|=t,fd|=t)}function gl(e,t){if(!z)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function _l(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _l(t),null;case 1:return _l(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ba(Ma),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fa(t)?fl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ma())),_l(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(fl(t),o===null?(_l(t),pl(t,a,null,r,n)):(_l(t),ml(t,o))):o?o===e.memoizedState?(_l(t),t.flags&=-16777217):(fl(t),_l(t),ml(t,o)):(e=e.memoizedProps,e!==r&&fl(t),_l(t),pl(t,a,e,r,n)),null;case 27:if(ke(t),n=we.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&fl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return _l(t),t.subtreeFlags&=-33554433,null}e=Se.current,fa(t)?ua(t,e):(e=vm(a,r,n),t.stateNode=e,fl(t))}return _l(t),t.subtreeFlags&=-33554433,null;case 5:if(ke(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&fl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return _l(t),t.subtreeFlags&=-33554433,null}if(o=Se.current,fa(t))ua(t,o);else{var s=fp(we.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[wt]=t,o[Tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ap(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&fl(t)}}return _l(t),t.subtreeFlags&=-33554433,pl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&fl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=we.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ia,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[wt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||rp(e.nodeValue,n)),e||la(t,!0)}else e=fp(e).createTextNode(r),e[wt]=t,t.stateNode=e}return _l(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=fa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[wt]=t}else pa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_l(t),e=!1}else n=ma(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Io(t),t):(Io(t),null);if(t.flags&128)throw Error(i(558))}return _l(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=fa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[wt]=t}else pa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_l(t),a=!1}else a=ma(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Io(t),t):(Io(t),null)}return Io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),hl(t,t.updateQueue),_l(t),null);case 4:return De(),e===null&&qf(t.stateNode.containerInfo),t.flags|=67108864,_l(t),null;case 10:return ba(t.type),_l(t),null;case 19:if(zo(t),r=t.memoizedState,r===null)return _l(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)gl(r,!1);else{if(sd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Bo(e),o!==null){for(t.flags|=128,gl(r,!1),e=o.updateQueue,t.updateQueue=e,hl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ii(n,e),n=n.sibling;return Ro(t,Lo.current&1|2),z&&$i(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&He()>vd&&(t.flags|=128,a=!0,gl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Bo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,hl(t,e),gl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!z)return _l(t),null}else 2*He()-r.renderingStartTime>vd&&n!==536870912&&(t.flags|=128,a=!0,gl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=He(),e.sibling=null,o=Lo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||z?Ro(t,o):(n=o,xe(jo,t),xe(Lo,n),Mo===null&&(Mo=t)),z&&$i(t,r.treeForkCount),e}return _l(t),null;case 22:case 23:return Io(t),Ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(_l(t),t.subtreeFlags&6&&(t.flags|=8192)):_l(t),n=t.updateQueue,n!==null&&hl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&be(Ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ba(Ma),_l(t),null;case 25:return null;case 30:return t.flags|=33554432,_l(t),null}throw Error(i(156,t.tag))}function yl(e,t){switch(na(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ba(Ma),De(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ke(t),null;case 31:if(t.memoizedState!==null){if(Io(t),t.alternate===null)throw Error(i(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return zo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return De(),null;case 10:return ba(t.type),null;case 22:case 23:return Io(t),Ao(),e!==null&&be(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ba(Ma),null;case 25:return null;default:return null}}function bl(e,t){switch(na(t),t.tag){case 3:ba(Ma),De();break;case 26:case 27:case 5:ke(t);break;case 4:De();break;case 31:t.memoizedState!==null&&Io(t);break;case 13:Io(t);break;case 19:zo(t);break;case 10:ba(t.type);break;case 22:case 23:Io(t),Ao(),e!==null&&be(Ka);break;case 24:ba(Ma)}}function xl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){gf(t,t.return,e)}}function Sl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){gf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){gf(t,t.return,e)}}function Cl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{To(t,n)}catch(t){gf(e,e.return,t)}}}function wl(e,t,n){n.props=Sc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){gf(e,t,n)}}function Tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=vi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Lp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Rp(e);m(e.child,!1,tm,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){gf(e,t,n)}}function El(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){gf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){gf(e,t,n)}else n.current=null}}function Dl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)rm(e.stateNode,t[n])}function Ol(e){for(var t=e.return;t!==null&&(jl(t)&&rm(e.stateNode,t.stateNode),!Al(t));)t=t.return}function kl(e){for(var t=e.return;t!==null&&(jl(t)&&im(e.stateNode,t.stateNode),!Al(t));)t=t.return}function Al(e){return e.tag===5||e.tag===3||e.tag===27}function jl(e){return e&&e.tag===7&&e.stateNode!==null}function Ml(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){gf(e,e.return,t)}}function Nl(e,t,n){try{var r=e.stateNode;sp(r,e.type,n,t),r[Tt]=t}catch(t){gf(e,e.return,t)}}function Pl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tp(e.type)||e.tag===4}function Fl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn)),Dl(e,r),L=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Tp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Il(e,t,n,r),e=e.sibling;e!==null;)Il(e,t,n,r),e=e.sibling}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Dl(e,r),L=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Tp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ap(t,r,n),t[wt]=e,t[Tt]=n}catch(t){gf(e,e.return,t)}}var zl=!1,Bl=null;function Vl(e){(e.tag===30||e.subtreeFlags&33554432)&&(zl=!0)}var Hl=null;function Ul(){var e=Hl;return Hl=null,e}var Wl=0;function Gl(e,t,n,r,i){return Wl=0,Kl(e.child,t,n,r,i)}function Kl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=jp(o);r.push(s),s.view&&(a=!0)}else a||jp(o).view&&(a=!0);zl=!0,Op(o,Wl===0?t:t+`_`+Wl,n),Wl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Kl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function ql(e,t){for(;e!==null;)e.tag===5?kp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ql(e.child,t)),e=e.sibling}function Jl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=bi(t.default,t.share),t!==`none`&&(Gl(e,n,t,null,!1)||ql(e.child,!1))}e=e.sibling}}function Yl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=vi(r,n),a=bi(r.default,n.paired?r.share:r.enter);a===`none`?Jl(e):Gl(e,i,a,null,!1)?(Jl(e),n.paired||t||Fd(e,r.onEnter)):ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e,t),e=e.sibling;else Jl(e)}function Xl(e){if(Bl!==null&&Bl.size!==0){var t=Bl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=bi(n.default,n.share);if(a!==`none`&&(Gl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Fd(e,n.onShare)):ql(e.child,!1)),t.delete(r),t.size===0)break}}}Xl(e)}e=e.sibling}}}function Zl(e){if(e.tag===30){var t=e.memoizedProps,n=vi(t,e.stateNode),r=Bl===null?void 0:Bl.get(n),i=bi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Gl(e,n,i,null,!1)?r===void 0?Fd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Bl.delete(n),Fd(e,t.onShare)):ql(e.child,!1)),Bl!==null&&Xl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Bl!==null&&Xl(e)}function Ql(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=vi(t,e.stateNode);t=bi(t.default,t.update),e.flags&=-5,t!==`none`&&Gl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Ql(e);e=e.sibling}}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,ql(e.child,!1))}$l(e)}e=e.sibling}}function eu(e){if(e.tag===30)e.stateNode.paired=null,ql(e.child,!1),$l(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else $l(e)}function G(e){for(e=e.child;e!==null;)e.tag===30?ql(e.child,!1):e.subtreeFlags&33554432&&G(e),e=e.sibling}function tu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Wl<a.length){var l=a[Wl],u=jp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Op(c,Wl===0?n:n+`_`+Wl,i),s&&e.flags&4||(Hl===null&&(Hl=[]),Hl.push(c,Wl===0?r:r+`_`+Wl,t.memoizedProps)),Wl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:tu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function nu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=vi(n,r),a=bi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Mp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Wl=0,i=tu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Fd(e,n.onUpdate))}else e.subtreeFlags&33554432&&nu(e,t);e=e.sibling}}var K=!1,ru=!1,iu=!1,au=!1,ou=typeof WeakSet==`function`?WeakSet:Set,su=null,cu=!1,lu=!1,uu=!1,du=!1;function fu(e,t,n){if(e=e.containerInfo,up=yh,e=Jr(e),Yr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(dp={focusedElem:e,selectionRange:r},yh=!1,n=(n&335544064)===n,su=t,t=n?9270:1024;su!==null;){if(e=su,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Zl(r[a]);if(e.alternate===null&&e.flags&2)n&&Vl(e),pu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Zl(r),pu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Vl(e),pu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,su=r):(n&&Ql(e),pu(n))}}Bl=null}function pu(e){for(;su!==null;){var t=su,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Sc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){gf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)am(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:am(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=vi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=bi(a.default,a.update),a!==`none`&&Gl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,su=r;break}su=t.return}}function mu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Pu(e,n),r&4&&xl(5,n);break;case 1:if(Pu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){gf(n,n.return,e)}else{var i=Sc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){gf(n,n.return,e)}}}r&64&&Cl(n),r&512&&Tl(n,n.return);break;case 3:if(Pu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{To(e,t)}catch(e){gf(n,n.return,e)}}break;case 27:t===null&&r&4&&Rl(n);case 26:case 5:Pu(e,n),t===null&&r&4&&Ml(n),r&512&&Tl(n,n.return);break;case 12:Pu(e,n);break;case 31:Pu(e,n),r&4&&Cu(e,n);break;case 13:Pu(e,n),r&4&&wu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=bf.bind(null,n),dm(e,n))));break;case 22:if(r=n.memoizedState!==null||K,!r){var a=t!==null&&t.memoizedState!==null||ru;t=K,i=ru,K=r,(ru=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Iu(e,n,r)):Pu(e,n),K=t,ru=i}break;case 30:Pu(e,n),r&512&&Tl(n,n.return);break;case 7:r&512&&Tl(n,n.return);default:Pu(e,n)}}function hu(e,t){for(e=e.child;e!==null;)gu(e,t),e=e.sibling}function gu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){gf(e,e.return,t)}_u(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,L=!0}catch(t){gf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Dp(s,!0):Dp(e.stateNode,!1)}catch(t){gf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&hu(e,t);break;default:hu(e,t)}}function _u(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:gu(n,r);break a;case 22:n.memoizedState===null&&_u(n,r);break a;default:_u(n,r)}}e=e.sibling}}function vu(e){var t=e.alternate;t!==null&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yu=null,bu=!1;function xu(e,t,n){for(n=n.child;n!==null;)Su(e,t,n),n=n.sibling}function Su(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount==`function`)try{Qe.onCommitFiberUnmount(Ze,n)}catch{}switch(n.tag){case 26:ru||El(n,t),xu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ru&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ru||El(n,t),kl(n);var r=yu,i=bu;Tp(n.type)&&(yu=n.stateNode,bu=!1),xu(e,t,n),ym(n.stateNode,n.type,n.memoizedProps),yu=r,bu=i;break;case 5:ru||El(n,t),kl(n);case 6:if(n.tag===6&&kl(n),r=yu,i=bu,yu=null,xu(e,t,n),yu=r,bu=i,yu!==null){if(bu)try{(yu.nodeType===9?yu.body:yu.nodeName===`HTML`?yu.ownerDocument.body:yu).removeChild(n.stateNode),L=!0}catch(e){gf(n,t,e)}else try{yu.removeChild(n.stateNode),L=!0}catch(e){gf(n,t,e)}}break;case 18:yu!==null&&(bu?(e=yu,Ep(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Wh(e)):Ep(yu,n.stateNode));break;case 4:r=yu,i=bu,yu=n.stateNode.containerInfo,bu=!0,xu(e,t,n),yu=r,bu=i;break;case 0:case 11:case 14:case 15:Sl(2,n,t),ru||Sl(4,n,t),xu(e,t,n);break;case 1:ru||(El(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&wl(n,t,r)),xu(e,t,n);break;case 21:xu(e,t,n);break;case 22:ru=(r=ru)||n.memoizedState!==null,xu(e,t,n),ru=r;break;case 30:El(n,t),xu(e,t,n);break;case 7:ru||El(n,t),xu(e,t,n);break;default:xu(e,t,n)}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wh(e)}catch(e){gf(t,t.return,e)}}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wh(e)}catch(e){gf(t,t.return,e)}}function Tu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ou),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ou),t;default:throw Error(i(435,e.tag))}}function Eu(e,t){var n=Tu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=xf.bind(null,e,t);t.then(r,r)}})}function Du(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Tp(l.type)){yu=l.stateNode,bu=!1;break a}break;case 5:yu=l.stateNode,bu=!1;break a;case 3:case 4:yu=l.stateNode.containerInfo,bu=!0;break a}l=l.return}if(yu===null)throw Error(i(160));Su(s,c,o),yu=null,bu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ku(t,e,n),t=t.sibling}var Ou=null;function ku(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Du(t,e,n),Au(e),a&4&&(Sl(3,e,e.return),xl(3,e),Sl(5,e,e.return));break;case 1:Du(t,e,n),Au(e),a&512&&(ru||r===null||El(r,r.return)),a&64&&K&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Ou,Du(t,e,n),Au(e),a&512&&(ru||r===null||El(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(K)e.stateNode=hp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[jt]||r[wt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ap(r,t,n),r[wt]=e,Rt(r),t=r;break a;case`link`:if(o=Jm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ap(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Jm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ap(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[wt]=e,Rt(r),t=r}e.stateNode=t}}else K||Ym(o,e.type,e.stateNode)}else e.stateNode=Um(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Nl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||ru||t.parentNode.removeChild(t)):a.count--,n===null?K||Ym(o,e.type,e.stateNode):Um(o,n,e.memoizedProps))}break;case 27:Du(t,e,n),Au(e),a&512&&(ru||r===null||El(r,r.return)),r!==null&&a&4&&Nl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=iu,iu=!1,Du(t,e,n),iu=o,Au(e),a&512&&(ru||r===null||El(r,r.return)),e.flags&32){t=e.stateNode;try{fn(t,``),L=!0}catch(t){gf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Nl(e,t,r===null?t:r.memoizedProps)),a&1024&&(au=!0);break;case 6:if(Du(t,e,n),Au(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,L=!0}catch(t){gf(e,e.return,t)}}break;case 3:if(L=!1,qm=null,o=Ou,Ou=Cm(t.containerInfo),Du(t,e,n),Ou=o,Au(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Wh(t.containerInfo)}catch(t){gf(e,e.return,t)}au&&(au=!1,ju(e)),L=!1;break;case 4:a=iu,iu=K,r=Jt(),o=Ou,Ou=Cm(e.stateNode.containerInfo),Du(t,e,n),Au(e),Ou=o,L&&lu&&(uu=!0),L=r,iu=a;break;case 12:Du(t,e,n),Au(e);break;case 31:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 13:Du(t,e,n),Au(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(gd=He()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=K,l=ru,u=iu;K=c||o,iu=u||o,ru=l||s,Du(t,e,n),ru=l,iu=u,K=c,Au(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||K||ru||(t=s||ru,n=K,r=ru,K=o||K,ru=t,Fu(e,2),K=n,ru=r),!o&&iu||hu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Eu(e,n))));break;case 19:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 30:a&512&&(ru||r===null||El(r,r.return)),a=Jt(),o=lu,s=(n&335544064)===n,c=e.memoizedProps,lu=s&&bi(c.default,c.update)!==`none`,Du(t,e,n),Au(e),s&&r!==null&&L&&(e.flags|=4),lu=o,L=a;break;case 21:break;case 7:a&512&&(ru||r===null||El(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Du(t,e,n),Au(e)}}function Au(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Pl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(jl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Al(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Ll(e,Fl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(fn(l,``),n.flags&=-33),Ll(e,Fl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Il(e,Fl(e),u,s);break;default:throw Error(i(161))}}catch(t){gf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ju(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ju(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,yh=!0,t.reset(),yh=!1),e=e.sibling}}function Mu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Nu(t,e),t=t.sibling;else nu(t,!1)}function Nu(e,t){var n=e.alternate;if(n===null)Yl(e,!1);else switch(e.tag){case 3:if(du=cu=!1,Ul(),Mu(t,e),!cu&&!uu){if(e=Hl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];kp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),du=!0}Hl=null;break;case 5:Mu(t,e);break;case 4:r=cu,cu=!1,Mu(t,e),cu&&(uu=!0),cu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Mu(t,e):Yl(e,!1));break;case 30:r=cu,i=Ul(),cu=!1,Mu(t,e),cu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=vi(a,o),o=vi(n.memoizedProps,o);var s=bi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Wl=0,t=tu(e,n,t,o,s,a,!0),Wl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Fd(e,e.memoizedProps.onUpdate),Hl=i):i!==null&&(i.push.apply(i,Hl),Hl=i),cu=e.flags&32?!0:r;break;default:Mu(t,e)}}function Pu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mu(e,t.alternate,t),t=t.sibling}function Fu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Sl(4,n,n.return),Fu(n,r);break;case 1:El(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&wl(n,n.return,i),Fu(n,r);break;case 27:r&2&&ym(n.stateNode,n.type,n.memoizedProps);case 5:El(n,n.return),n.tag!==5&&n.tag!==27||kl(n),Fu(n,r);break;case 6:kl(n);break;case 26:El(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||ru||i.parentNode.removeChild(i),Fu(n,r);break;case 22:n.memoizedState===null&&Fu(n,r);break;case 30:El(n,n.return),Fu(n,r);break;case 7:El(n,n.return);default:Fu(n,r)}e=e.sibling}}function Iu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Iu(i,a,n),xl(4,a);break;case 1:if(Iu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){gf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)wo(l[i],c)}catch(e){gf(r,r.return,e)}}s&&o&64&&Cl(a),Tl(a,a.return);break;case 27:n&2&&Rl(a);case 5:a.tag!==5&&a.tag!==27||Ol(a),Iu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 6:Ol(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||K||Ym(Cm(c.ownerDocument),a.type,c),Iu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 12:Iu(i,a,n);break;case 31:Iu(i,a,n),s&&o&4&&Cu(i,a);break;case 13:Iu(i,a,n),s&&o&4&&wu(i,a);break;case 22:a.memoizedState===null&&Iu(i,a,n),Tl(a,a.return);break;case 30:Iu(i,a,n),Tl(a,a.return);break;case 7:Tl(a,a.return);default:Iu(i,a,n)}t=t.sibling}}function Lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Pa(n))}function Ru(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pa(e))}function zu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Bu(e,t,n,r),t=t.sibling;else i&&G(t)}function Bu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&eu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:zu(e,t,n,r),a&2048&&xl(9,t);break;case 1:zu(e,t,n,r);break;case 3:zu(e,t,n,r),i&&du&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Pa(a)));break;case 12:if(a&2048){zu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){gf(t,t.return,e)}}else zu(e,t,n,r);break;case 31:zu(e,t,n,r);break;case 13:zu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&eu(t),o._visibility&2?zu(e,t,n,r):(o._visibility|=2,Vu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&eu(s),o._visibility&2?zu(e,t,n,r):Hu(e,t)),a&2048&&Lu(s,t);break;case 24:zu(e,t,n,r),a&2048&&Ru(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(ql(a.child,!0),ql(t.child,!0))),zu(e,t,n,r);break;default:zu(e,t,n,r)}}function Vu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Vu(a,o,s,c,i),xl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Vu(a,o,s,c,i)):u._visibility&2?Vu(a,o,s,c,i):Hu(a,o),i&&l&2048&&Lu(o.alternate,o);break;case 24:Vu(a,o,s,c,i),i&&l&2048&&Ru(o.alternate,o);break;default:Vu(a,o,s,c,i)}t=t.sibling}}function Hu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Hu(n,r),i&2048&&Lu(r.alternate,r);break;case 24:Hu(n,r),i&2048&&Ru(r.alternate,r);break;default:Hu(n,r)}t=t.sibling}}var Uu=8192;function Wu(e,t,n){if(e.subtreeFlags&Uu)for(e=e.child;e!==null;)Gu(e,t,n),e=e.sibling}function Gu(e,t,n){switch(e.tag){case 26:Wu(e,t,n),e.flags&Uu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&eh(n,e)):th(n,Ou,e.memoizedState,e.memoizedProps));break;case 5:Wu(e,t,n),e.flags&Uu&&(e=e.stateNode,(t&335544128)===t&&eh(n,e));break;case 3:case 4:var r=Ou;Ou=Cm(e.stateNode.containerInfo),Wu(e,t,n),Ou=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Uu,Uu=16777216,Wu(e,t,n),Uu=r):Wu(e,t,n));break;case 30:if((e.flags&Uu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Bl===null&&(Bl=new Map),Bl.set(r,i)}Wu(e,t,n);break;default:Wu(e,t,n)}}function Ku(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Xu(r,e)}Ku(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ju(e),e=e.sibling}function Ju(e){switch(e.tag){case 0:case 11:case 15:qu(e),e.flags&2048&&Sl(9,e,e.return);break;case 3:qu(e);break;case 12:qu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yu(e)):qu(e);break;default:qu(e)}}function Yu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Xu(r,e)}Ku(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sl(8,t,t.return),Yu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yu(t));break;default:Yu(t)}e=e.sibling}}function Xu(e,t){for(;su!==null;){var n=su;switch(n.tag){case 0:case 11:case 15:Sl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,su=r;else a:for(n=e;su!==null;){r=su;var i=r.sibling,a=r.return;if(vu(r),r===n){su=null;break a}if(i!==null){i.return=a,su=i;break a}su=a}}}var Zu={getCacheForType:function(e){var t=Ea(Ma),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ea(Ma).controller.signal}},Qu=typeof WeakMap==`function`?WeakMap:Map,$u=0,ed=null,q=null,J=0,td=0,nd=null,rd=!1,id=!1,ad=!1,od=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=0,pd=null,md=null,hd=!1,gd=0,_d=0,vd=1/0,yd=null,bd=null,xd=0,Sd=null,Cd=null,wd=0,Td=0,Ed=null,Dd=null,Od=null,kd=null,Ad=null,jd=0,Md=null;function Nd(){return $u&2&&J!==0?J&-J:F.T===null?xt():Lf()}function Pd(){if(dd===0){if(!(J&536870912)||z){var e=at;at<<=1,!(at&3932160)&&(at=262144),dd=e}else dd=536870912}return e=jo.current,e!==null&&(e.flags|=32),dd}function Fd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Lp(vi(e.memoizedProps,n))),kd===null&&(kd=[]),kd.push(t.bind(null,r))}}function Id(e,t,n){(e===ed&&(td===2||td===9)||e.cancelPendingCommit!==null)&&(Ud(e,0),Bd(e,J,dd,!1)),mt(e,n),(!($u&2)||e!==ed)&&(e===ed&&(!($u&2)&&(ld|=n),sd===4&&Bd(e,J,dd,!1)),kf(e))}function Ld(e,t,n){if($u&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||lt(e,t),a=r?Zd(e,t):Yd(e,t,!0),o=r;do{if(a===0){id&&!r&&Bd(e,t,0,!1);break}if(n=e.current.alternate,o&&!zd(n)){a=Yd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=pd;var l=c.current.memoizedState.isDehydrated;if(l&&(Ud(c,s).flags|=256),s=Yd(c,s,!1),s!==2&&s!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=o,ld|=o,a=4;break a}o=md,md=a,o!==null&&(md===null?md=o:md.push.apply(md,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Ud(e,0),Bd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Bd(r,t,dd,!rd);break a;case 2:md=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=gd+300-He(),10<a)){if(Bd(r,t,dd,!rd),ct(r,0,!0)!==0)break a;wd=t,r.timeoutHandle=yp(Rd.bind(null,r,n,md,yd,hd,t,dd,ld,fd,rd,o,`Throttled`,-0,0),a);break a}Rd(r,n,md,yd,hd,t,dd,ld,fd,rd,o,null,-0,0)}break}while(1);kf(e)}function Rd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Bl=null,Gu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=ah.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?gd-He():(a&4194048)===a?_d-He():0,m=rh(d,m),m!==null)){wd=a,e.cancelPendingCommit=m(af.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Bd(e,a,o,!l);return}af(e,t,a,n,r,i,o,s,c,l,u,d)}function zd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Hr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bd(e,t,n,r){t=ut(e,t),t&=~ud,t&=~ld,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-et(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&gt(e,n,t)}function Vd(){return $u&6?!0:(Af(0,!1),!1)}function Hd(){if(q!==null){if(td===0)var e=q.return;else e=q,va=_a=null,is(e),oo=null,so=0,e=q;for(;e!==null;)bl(e.alternate,e),e=e.return;q=null}}function Ud(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,bp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),wd=0,Hd(),ed=e,q=n=Fi(e.current,null),J=t,td=0,nd=null,rd=!1,id=lt(e,t),ad=!1,fd=dd=ud=ld=cd=sd=0,md=pd=null,hd=!1,od=ut(e,t),Ti(),n}function Wd(e,t){H=null,F.H=mc,t===Xa||t===Qa?(t=io(),td=3):t===Za?(t=io(),td=4):td=t===Mc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,q===null&&(sd=1,Ec(e,Ui(t,e.current)))}function Gd(){var e=jo.current;return e===null?!0:(J&4194048)===J?Mo===null:(J&62914560)===J||J&536870912?e===Mo:!1}function Kd(){var e=F.H;return F.H=mc,e===null?mc:e}function qd(){var e=F.A;return F.A=Zu,e}function Jd(){sd=4,rd||(J&4194048)!==J&&jo.current!==null||(id=!0),!(cd&134217727)&&!(ld&134217727)||ed===null||Bd(ed,J,dd,!1)}function Yd(e,t,n){var r=$u;$u|=2;var i=Kd(),a=qd();(ed!==e||J!==t)&&(yd=null,Ud(e,t)),t=!1;var o=sd;a:do try{if(td!==0&&q!==null){var s=q,c=nd;switch(td){case 8:Hd(),o=6;break a;case 3:case 2:case 9:case 6:jo.current===null&&(t=!0);var l=td;if(td=0,nd=null,tf(e,s,c,l),n&&id){o=0;break a}break;default:l=td,td=0,nd=null,tf(e,s,c,l)}}Xd(),o=sd;break}catch(t){Wd(e,t)}while(1);return t&&e.shellSuspendCounter++,va=_a=null,$u=r,F.H=i,F.A=a,q===null&&(ed=null,J=0,Ti()),o}function Xd(){for(;q!==null;)$d(q)}function Zd(e,t){var n=$u;$u|=2;var r=Kd(),a=qd();ed!==e||J!==t?(yd=null,vd=He()+500,Ud(e,t)):id=lt(e,t);a:do try{if(td!==0&&q!==null){t=q;var o=nd;b:switch(td){case 1:td=0,nd=null,tf(e,t,o,1);break;case 2:case 9:if(eo(o)){td=0,nd=null,ef(t);break}t=function(){td!==2&&td!==9||ed!==e||(td=7),kf(e)},o.then(t,t);break a;case 3:td=7;break a;case 4:td=5;break a;case 7:eo(o)?(td=0,nd=null,ef(t)):(td=0,nd=null,tf(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Qm(s):c.stateNode.complete){td=0,nd=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,nf(u))}break b}}td=0,nd=null,tf(e,t,o,5);break;case 6:td=0,nd=null,tf(e,t,o,6);break;case 8:Hd(),sd=6;break a;default:throw Error(i(462))}}Qd();break}catch(t){Wd(e,t)}while(1);return va=_a=null,F.H=r,F.A=a,$u=n,q===null?(ed=null,J=0,Ti(),sd):0}function Qd(){for(;q!==null&&!Be();)$d(q)}function $d(e){var t=dl(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?nf(e):q=t}function ef(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Gc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Gc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:is(t);var r=t;r===ia&&(z?(da(r),r.tag===5&&r.stateNode!=null&&(aa=r.stateNode)):(da(r),z=!0));default:bl(n,t),t=q=Ii(t,od),t=dl(n,t,od)}e.memoizedProps=e.pendingProps,t===null?nf(e):q=t}function tf(e,t,n,r){va=_a=null,is(t),oo=null,so=0;var i=t.return;try{if(jc(e,i,t,n,J)){sd=1,Ec(e,Ui(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;sd=1,Ec(e,Ui(n,e.current)),q=null;return}t.flags&32768?(z||r===1?e=!0:id||J&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=jo.current,r!==null&&r.tag===13&&(r.flags|=16384))),rf(t,e)):nf(t)}function nf(e){var t=e;do{if(t.flags&32768){rf(t,rd);return}e=t.return;var n=vl(t.alternate,t,od);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);sd===0&&(sd=5)}function rf(e,t){do{var n=yl(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);sd=6,q=null}function af(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do pf();while(xd!==0);if($u&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===ed&&(q=ed=null,J=0),Cd=t,Sd=e,wd=n,Ed=a,Dd=r,of(e,t,n,s,c,l,f)}}function of(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Td=s,s|=wi,ht(e,n,s,r,i,a),kd=null,(n&335544064)===n?(Ad=La(e),r=10262):(Ad=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Sf(Ke,function(){return mf(),null})):(e.callbackNode=null,e.callbackPriority=0),zl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=F.T,F.T=null,i=I.p,I.p=2,a=$u,$u|=4;try{fu(e,t,n)}finally{$u=a,I.p=i,F.T=r}}xd=1,zl?Od=Fp(o,e.containerInfo,Ad,lf,uf,cf,df,mf,sf,null,null):(lf(),uf(),df())}function sf(e){if(xd!==0){var t=Sd.onRecoverableError;t(e,{componentStack:null})}}function cf(){xd===3&&(xd=0,Nu(Cd,Sd),xd=4)}function lf(){if(xd===1){xd=0;var e=Sd,t=Cd,n=wd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=F.T,F.T=null;var i=I.p;I.p=2;var a=$u;$u|=4;try{lu=uu=!1,ku(t,e,n),n=dp;var o=Jr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&qr(s.ownerDocument.documentElement,s)){if(c!==null&&Yr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Kr(s,h),v=Kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}yh=!!up,dp=up=null}finally{$u=a,I.p=i,F.T=r}}e.current=t,xd=2}}function uf(){if(xd===2){xd=0;var e=Sd,t=Cd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=F.T,F.T=null;var r=I.p;I.p=2;var i=$u;$u|=4;try{mu(e,t.alternate,t)}finally{$u=i,I.p=r,F.T=n}}xd=3}}function df(){if(xd===4||xd===3){xd=0;var e=Od;Od=null,Ve();var t=Sd,n=Cd,r=wd,i=Dd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?xd=5:(xd=0,Cd=Sd=null,ff(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(bd=null),bt(r),n=n.stateNode,Qe&&typeof Qe.onCommitFiberRoot==`function`)try{Qe.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=F.T,a=I.p,I.p=2,F.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{F.T=n,I.p=a}}if(i=kd,o=Ad,Ad=null,i!==null&&(kd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);wd&3&&pf(),kf(t),a=t.pendingLanes,r&261930&&a&42?t===Md?jd++:(jd=0,Md=t):(jd=0,Md=null),Af(0,!1)}}function ff(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pa(t)))}function pf(){return Od!==null&&(Od.skipTransition(),Od=null),lf(),uf(),df(),mf()}function mf(){if(xd!==5)return!1;var e=Sd,t=Td;Td=0;var n=bt(wd),r=F.T,a=I.p;try{I.p=32>n?32:n,F.T=null,n=Ed,Ed=null;var o=Sd,s=wd;if(xd=0,Cd=Sd=null,wd=0,$u&6)throw Error(i(331));var c=$u;if($u|=4,Ju(o.current),Bu(o,o.current,s,n),$u=c,Af(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot==`function`)try{Qe.onPostCommitFiberRoot(Ze,o)}catch{}return!0}finally{I.p=a,F.T=r,ff(e,t)}}function hf(e,t,n){t=Ui(n,t),t=Oc(e.stateNode,t,2),e=yo(e,t,2),e!==null&&(mt(e,2),kf(e))}function gf(e,t,n){if(e.tag===3)hf(e,e,n);else for(;t!==null;){if(t.tag===3){hf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(bd===null||!bd.has(r))){e=Ui(n,e),n=kc(2),r=yo(t,n,2),r!==null&&(Ac(n,r,t,e),mt(r,2),kf(r));break}}t=t.return}}function _f(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=vf.bind(null,e,t,n),t.then(e,e))}function vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ed===e&&(J&n)===n&&(sd===4||sd===3&&(J&62914560)===J&&300>He()-gd?$u&2?ud|=n:Ud(e,0):ud|=n,fd===J&&(fd=0)),kf(e)}function yf(e,t){t===0&&(t=ft()),e=Oi(e,t),e!==null&&(mt(e,t),kf(e))}function bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yf(e,n)}function xf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),yf(e,n)}function Sf(e,t){return Re(e,t)}var Cf=null,wf=null,Tf=!1,Ef=!1,Df=!1,Of=0;function kf(e){e!==wf&&e.next===null&&(wf===null?Cf=wf=e:wf=wf.next=e),Ef=!0,Tf||(Tf=!0,If())}function Af(e,t){if(!Df&&Ef){Df=!0;do for(var n=!1,r=Cf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-et(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ff(r,a))}else a=J,a=ct(r,r===ed?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||lt(r,a)||(n=!0,Ff(r,a))}r=r.next}while(n);Df=!1}}function jf(){Mf()}function Mf(){Ef=Tf=!1;var e=0;Of!==0&&vp()&&(e=Of);for(var t=He(),n=null,r=Cf;r!==null;){var i=r.next,a=Nf(r,t);a===0?(r.next=null,n===null?Cf=i:n.next=i,i===null&&(wf=n)):(n=r,(e!==0||a&3)&&(Ef=!0)),r=i}xd!==0&&xd!==5||Af(e,!1),Of!==0&&(Of=0)}function Nf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-et(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=dt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=ed,n=J,n=ct(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(td===2||td===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ze(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||lt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ze(r),bt(n)){case 2:case 8:n=Ge;break;case 32:n=Ke;break;case 268435456:n=Je;break;default:n=Ke}return r=Pf.bind(null,e),n=Re(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ze(r),e.callbackPriority=2,e.callbackNode=null,2}function Pf(e,t){if(xd!==0&&xd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(pf()&&e.callbackNode!==n)return null;var r=J;return r=ct(e,e===ed?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Ld(e,r,t),Nf(e,He()),e.callbackNode!=null&&e.callbackNode===n?Pf.bind(null,e):null)}function Ff(e,t){if(pf())return null;Ld(e,t,!0)}function If(){Cp(function(){$u&6?Re(We,jf):Mf()})}function Lf(){if(Of===0){var e=Ba;e===0&&(e=it,it<<=1,!(it&261888)&&(it=256)),Of=e}return Of}function Rf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:yn(e)}function zf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Rf((i[Tt]||null).action),o=r.submitter;o&&(t=(t=o[Tt]||null)?Rf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Vn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Of!==0){var e=new FormData(i,o);ec(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ec(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Bf=0;Bf<hi.length;Bf++){var Vf=hi[Bf];gi(Vf.toLowerCase(),`on`+(Vf[0].toUpperCase()+Vf.slice(1)))}gi(si,`onAnimationEnd`),gi(ci,`onAnimationIteration`),gi(li,`onAnimationStart`),gi(`dblclick`,`onDoubleClick`),gi(`focusin`,`onFocus`),gi(`focusout`,`onBlur`),gi(ui,`onTransitionRun`),gi(di,`onTransitionStart`),gi(fi,`onTransitionCancel`),gi(pi,`onTransitionEnd`),Ut(`onMouseEnter`,[`mouseout`,`mouseover`]),Ut(`onMouseLeave`,[`mouseout`,`mouseover`]),Ut(`onPointerEnter`,[`pointerout`,`pointerover`]),Ut(`onPointerLeave`,[`pointerout`,`pointerover`]),Ht(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ht(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ht(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ht(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ht(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ht(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Hf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Uf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Hf));function Wf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){xi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){xi(e)}i.currentTarget=null,a=c}}}}function Y(e,t){var n=t[Dt];n===void 0&&(n=t[Dt]=new Set);var r=e+`__bubble`;n.has(r)||(Jf(t,e,2,!1),n.add(r))}function Gf(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var Kf=`_reactListening`+Math.random().toString(36).slice(2);function qf(e){if(!e[Kf]){e[Kf]=!0,Bt.forEach(function(t){t!==`selectionchange`&&(Uf.has(t)||Gf(t,!1,e),Gf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kf]||(t[Kf]=!0,Gf(`selectionchange`,!1,t))}}function Jf(e,t,n,r){switch(Eh(t)){case 2:var i=bh;break;case 8:i=xh;break;default:i=Sh}n=i.bind(null,t,n,e),i=void 0,!An||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Yf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Dn(function(){var r=a,i=Sn(n),s=[];a:{var c=mi.get(e);if(c!==void 0){var l=Vn,u=e;switch(e){case`keypress`:if(In(n)===0)break a;case`keydown`:case`keyup`:l=ar;break;case`focusin`:u=`focus`,l=Xn;break;case`focusout`:u=`blur`,l=Xn;break;case`beforeblur`:case`afterblur`:l=Xn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Yn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=cr;break;case si:case ci:case li:l=Zn;break;case pi:l=lr;break;case`scroll`:case`scrollend`:l=Un;break;case`wheel`:l=ur;break;case`copy`:case`cut`:case`paste`:l=Qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=or;break;case`submit`:l=sr;break;case`toggle`:case`beforetoggle`:l=dr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=On(m,p),g!=null&&d.push(Xf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==xn&&(u=n.relatedTarget||n.fromElement)&&(Pt(u)||u[Et]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Pt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=or,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:It(c),h=l==null?u:It(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Pt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Qf):null,c!==null&&$f(s,u,c,d,!1),l!==null&&f!==null&&$f(s,f,l,d,!0)))}a:{if(c=r?It(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Ar;else if(R(c)){if(jr)_=Br;else{_=Rr;var v=Lr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&gn(r.elementType)&&(_=Ar):_=zr;if(_&&=_(e,r)){Tr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?It(r):window,e){case`focusin`:(R(v)||v.contentEditable===`true`)&&(Zr=v,Qr=r,$r=null);break;case`focusout`:$r=Qr=Zr=null;break;case`mousedown`:ei=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ei=!1,ti(s,n,i);break;case`selectionchange`:if(Xr)break;case`keydown`:case`keyup`:ti(s,n,i)}var y;if(pr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else xr?yr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(gr&&n.locale!==`ko`&&(xr||b!==`onCompositionStart`?b===`onCompositionEnd`&&xr&&(y=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,xr=!0)),v=Zf(r,b),0<v.length&&(b=new $n(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=br(n),y!==null&&(b.data=y)))),(y=hr?Sr(e,n):Cr(e,n))&&(b=Zf(r,`onBeforeInput`),0<b.length&&(v=new $n(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),zf(s,e,r,n,i)}Wf(s,t)})}function Xf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=On(e,n),i!=null&&r.unshift(Xf(e,i,a)),i=On(e,t),i!=null&&r.push(Xf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Qf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $f(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=On(n,a),l!=null&&o.unshift(Xf(n,l,c))):i||(l=On(n,a),l!=null&&o.push(Xf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ep=/\r\n?/g,tp=/\u0000|\uFFFD/g;function np(e){return(typeof e==`string`?e:``+e).replace(ep,`
`).replace(tp,``)}function rp(e,t){return t=np(t),np(e)===t}function X(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&fn(e,``+r);else return;break;case`className`:Xt(e,`class`,r);break;case`tabIndex`:Xt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Xt(e,n,r);break;case`style`:hn(e,r,o);return;case`data`:if(t!==`object`){Xt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&X(e,t,`name`,a.name,a,null),X(e,t,`formEncType`,a.formEncType,a,null),X(e,t,`formMethod`,a.formMethod,a,null),X(e,t,`formTarget`,a.formTarget,a,null)):(X(e,t,`encType`,a.encType,a,null),X(e,t,`method`,a.method,a,null),X(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=bn);return;case`onScroll`:r!=null&&Y(`scroll`,e);return;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=yn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Y(`beforetoggle`,e),Y(`toggle`,e),Yt(e,`popover`,r);break;case`xlinkActuate`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Yt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=_n.get(n)||n,Yt(e,n,r);else return}L=!0}function ip(e,t,n,r,a,o){switch(n){case`style`:hn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)fn(e,``+r);else return;break;case`onScroll`:r!=null&&Y(`scroll`,e);return;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=bn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Vt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Tt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}L=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Yt(e,n,r)}return}L=!0}function ap(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Y(`error`,e),Y(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,o,s,n,null)}}a&&X(e,t,`srcSet`,n.srcSet,n,null),r&&X(e,t,`src`,n.src,n,null);return;case`input`:Y(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:X(e,t,r,d,n,null)}}sn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Y(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:X(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&ln(e,!!r,n,!0):ln(e,!!r,t,!1);return;case`textarea`:for(s in Y(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:X(e,t,s,c,n,null)}dn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:X(e,t,l,r,n,null)}return;case`dialog`:Y(`beforetoggle`,e),Y(`toggle`,e),Y(`cancel`,e),Y(`close`,e);break;case`iframe`:case`object`:Y(`load`,e);break;case`video`:case`audio`:for(r=0;r<Hf.length;r++)Y(Hf[r],e);break;case`image`:Y(`error`,e),Y(`load`,e);break;case`details`:Y(`toggle`,e);break;case`embed`:case`source`:case`link`:Y(`error`,e),Y(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,u,r,n,null)}return;default:if(gn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&ip(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&X(e,t,c,r,n,null))}var op={};function sp(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||X(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(L=!0),o=m;break;case`name`:m!==f&&(L=!0),a=m;break;case`checked`:m!==f&&(L=!0),u=m;break;case`defaultChecked`:m!==f&&(L=!0),d=m;break;case`value`:m!==f&&(L=!0),s=m;break;case`defaultValue`:m!==f&&(L=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&X(e,t,p,m,r,f)}}on(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||X(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(L=!0),p=o;break;case`defaultValue`:o!==l&&(L=!0),c=o;break;case`multiple`:o!==l&&(L=!0),s=o;default:o!==l&&X(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?ln(e,!!n,n?[]:``,!1):ln(e,!!n,t,!0)):ln(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:X(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(L=!0),p=a;break;case`defaultValue`:a!==o&&(L=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&X(e,t,s,a,r,o)}un(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:X(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(L=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:X(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&X(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:X(e,t,u,p,r,m)}return;default:if(gn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&ip(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||ip(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&X(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||X(e,t,f,p,r,m)}function cp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function lp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&cp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&cp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var up=null,dp=null;function fp(e){return e.nodeType===9?e:e.ownerDocument}function pp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function mp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function hp(e,t,n,r){return n=fp(n).createElement(e),n[wt]=r,n[Tt]=t,ap(n,e,t),Rt(n),n}function gp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _p=null;function vp(){var e=window.event;return e&&e.type===`popstate`?e!==_p&&(_p=e,!0):(_p=null,!1)}var yp=typeof setTimeout==`function`?setTimeout:void 0,bp=typeof clearTimeout==`function`?clearTimeout:void 0,xp=typeof Promise==`function`?Promise:void 0,Sp=typeof requestAnimationFrame==`function`?requestAnimationFrame:yp,Cp=typeof queueMicrotask==`function`?queueMicrotask:xp===void 0?yp:function(e){return xp.resolve(null).then(e).catch(wp)};function wp(e){setTimeout(function(){throw e})}function Tp(e){return e===`head`}function Ep(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Wh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)bm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,bm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[jt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&bm(e.ownerDocument.body)}n=i}while(n);Wh(t)}function Dp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Op(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function kp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Ap(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function jp(e){return Ap(e.getBoundingClientRect(),getComputedStyle(e),e)}function Mp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Ap(t,n,e)}function Np(e){return e.documentElement.clientHeight}function Pp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Fp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Np(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=$m(f),u>nh){s.length=o;break}f=new Promise(Pp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Ip(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Ip.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ip.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Ip.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lp(e){return{name:e,group:new Ip(`group`,e),imagePair:new Ip(`image-pair`,e),old:new Ip(`old`,e),new:new Ip(`new`,e)}}function Rp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Rp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Up(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Vp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),m(this._fragmentFiber.child,!1,zp,e,s,r)}this._eventListeners=a}};function zp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Rp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Up(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Vp(i.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Bp,e,n,i),r.splice(t,1),a!==null&&a()}};function Bp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Vp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Hp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Up(e,t,n,r){if(e.length===0)return-1;r=Hp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Hp(a.optionsOrUseCapture)===r)return i}return-1}Rp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Rp.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),gm(e,t))}Rp.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Gp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Wp(t[n],e);n--);};function Gp(e,t){return t.push(e),!1}Rp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=fp(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Kp,e,void 0,void 0))};function Kp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Rp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,qp,e,void 0,void 0)};function qp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Rp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,Jp,e,void 0,void 0);for(var n=t=0;n<Yp.length;n++){var r=Yp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Yp[t++]=r}Yp.length=t}};function Jp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Yp=[],Xp=!1;function Zp(e,t,n){Yp.push({fragmentInstance:e,observer:t,instance:n}),Xp||(Xp=!0,_m(function(){Xp=!1;var e=Yp;Yp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Rp.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,Qp,e,void 0,void 0),e};function Qp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Rp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Rp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,Gp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||$p(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function $p(e,t,n,r,i){var a=Pt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(m(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(m(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function em(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Rp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];m(this._fragmentFiber.child,!1,Gp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),em(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),em(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function tm(e,t){return e=b(e),nm(e,t),!1}function nm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Yp.length;i++){var a=Yp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Yp[r++]=a)}Yp.length=r,n.observe(e)}),nm(e,t))}function im(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Zp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function am(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:am(n),Nt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function om(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[jt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=fm(e.nextSibling),e===null)break}return null}function sm(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=fm(e.nextSibling),e===null))return null;return e}function cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=fm(e.nextSibling),e===null))return null;return e}function lm(e){return e.data===`$?`||e.data===`$~`}function um(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function dm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function fm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var pm=null;function mm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return fm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function gm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function _m(e){Sp(function(){Sp(function(t){return e(t)})})}function vm(e,t,n){switch(t=fp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function ym(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&X(e,t,r,null,op,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===bn&&(e.onclick=null),Nt(e)}function bm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nt(e)}var xm=new Map,Sm=new Set;function Cm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var wm=I.d;I.d={f:Tm,r:Em,D:km,C:Am,L:jm,m:Mm,X:Pm,S:Nm,M:Fm};function Tm(){var e=wm.f(),t=Vd();return e||t}function Em(e){var t=Ft(e);t!==null&&t.tag===5&&t.type===`form`?nc(t):wm.r(e)}var Dm=typeof document>`u`?null:document;function Om(e,t,n){var r=Dm;if(r&&typeof t==`string`&&t){var i=an(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Sm.has(i)||(Sm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ap(t,`link`,e),Rt(t),r.head.appendChild(t)))}}function km(e){wm.D(e),Om(`dns-prefetch`,e,null)}function Am(e,t){wm.C(e,t),Om(`preconnect`,e,t)}function jm(e,t,n){wm.L(e,t,n);var r=Dm;if(r&&e&&t){var i=`link[rel="preload"][as="`+an(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+an(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+an(n.imageSizes)+`"]`)):i+=`[href="`+an(e)+`"]`;var a=i;switch(t){case`style`:a=Lm(e);break;case`script`:a=Vm(e)}if(!(xm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),xm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Rm(a))||t===`script`&&r.querySelector(Hm(a))))){var o=r.createElement(`link`);ap(o,`link`,e),t===`style`&&(o[Mt]=!0,o.onload=o.onerror=function(){zt(o)}),Rt(o),r.head.appendChild(o)}}}function Mm(e,t){wm.m(e,t);var n=Dm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+an(r)+`"][href="`+an(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Vm(e)}if(!xm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),xm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Hm(a)))return}r=n.createElement(`link`),ap(r,`link`,e),Rt(r),n.head.appendChild(r)}}}function Nm(e,t,n){wm.S(e,t,n);var r=Dm;if(r&&e){var i=Lt(r).hoistableStyles,a=Lm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Rm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=xm.get(a))&&Gm(e,n);var c=o=r.createElement(`link`);Rt(c),ap(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Wm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Pm(e,t){wm.X(e,t);var n=Dm;if(n&&e){var r=Lt(n).hoistableScripts,i=Vm(e),a=r.get(i);a||(a=n.querySelector(Hm(i)),a||(e=D({src:e,async:!0},t),(t=xm.get(i))&&Km(e,t),a=n.createElement(`script`),Rt(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Fm(e,t){wm.M(e,t);var n=Dm;if(n&&e){var r=Lt(n).hoistableScripts,i=Vm(e),a=r.get(i);a||(a=n.querySelector(Hm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=xm.get(i))&&Km(e,t),a=n.createElement(`script`),Rt(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Im(e,t,n,r){var a=(a=we.current)?Cm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Lm(n.href),t=Lt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Lm(n.href);var o=Lt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Rm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=xm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xm.set(e,o)),Bm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Vm(n),t=Lt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Lm(e){return`href="`+an(e)+`"`}function Rm(e){return`link[rel="stylesheet"][`+e+`]`}function zm(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Bm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Mt]){r.loading=1;return}}else t=e.createElement(`link`),t[Mt]=!0,t.onload=t.onerror=zt.bind(null,t),ap(t,`link`,n),Rt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Vm(e){return`[src="`+an(e)+`"]`}function Hm(e){return`script[async]`+e}function Um(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+an(n.href)+`"]`);if(r)return t.instance=r,Rt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Rt(r),ap(r,`style`,a),Wm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Lm(n.href);var o=e.querySelector(Rm(a));if(o)return t.state.loading|=4,t.instance=o,Rt(o),o;r=zm(n),(a=xm.get(a))&&Gm(r,a),o=(e.ownerDocument||e).createElement(`link`),Rt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ap(o,`link`,r),t.state.loading|=4,Wm(o,n.precedence,e),t.instance=o;case`script`:return o=Vm(n.src),(a=e.querySelector(Hm(o)))?(t.instance=a,Rt(a),a):(r=n,(a=xm.get(o))&&(r=D({},n),Km(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Rt(a),ap(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Wm(r,n.precedence,e));return t.instance}function Wm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Km(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var qm=null;function Jm(e,t,n){if(qm===null){var r=new Map,i=qm=new Map;i.set(n,r)}else i=qm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[jt]||a[wt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Ym(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Xm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Zm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Qm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function $m(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function eh(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=$m(t),e.suspenseyImages.push(t)),e=oh.bind(e),t.decode().then(e,e))}function th(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Lm(r.href),a=t.querySelector(Rm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ah.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Rt(a);return}a=t.ownerDocument||t,r=zm(r),(i=xm.get(i))&&Gm(r,i),a=a.createElement(`link`),Rt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ap(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ah.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var nh=0;function rh(e,t){return e.stylesheets&&e.count===0&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&nh===0&&(nh=62500*lp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>nh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function ih(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ch(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ah(){this.count--,ih(this)}function oh(){this.imgCount--,ih(this)}var sh=null;function ch(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sh=new Map,t.forEach(lh,e),sh=null,ah.call(e))}function lh(e,t){if(!(t.state.loading&4)){var n=sh.get(e);if(n)var r=n.get(null);else{n=new Map,sh.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ah.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var uh={$$typeof:te,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function dh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function fh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new dh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ni(3,null,null,t),e.current=a,a.stateNode=e,t=Na(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},go(a),e}function ph(e){return e?(e=ji,e):ji}function mh(e,t,n,r,i,a){i=ph(i),r.context===null?r.context=i:r.pendingContext=i,r=vo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=yo(e,r,t),n!==null&&(Id(n,e,t),bo(n,e,t))}function hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gh(e,t){hh(e,t),(e=e.alternate)&&hh(e,t)}function _h(e){if(e.tag===13||e.tag===31){var t=Oi(e,67108864);t!==null&&Id(t,e,67108864),gh(e,67108864)}}function vh(e){if(e.tag===13||e.tag===31){var t=Nd();t=yt(t);var n=Oi(e,t);n!==null&&Id(n,e,t),gh(e,t)}}var yh=!0;function bh(e,t,n,r){var i=F.T;F.T=null;var a=I.p;try{I.p=2,Sh(e,t,n,r)}finally{I.p=a,F.T=i}}function xh(e,t,n,r){var i=F.T;F.T=null;var a=I.p;try{I.p=8,Sh(e,t,n,r)}finally{I.p=a,F.T=i}}function Sh(e,t,n,r){if(yh){var i=Ch(r);if(i===null)Yf(e,t,r,wh,n),Ph(e,r);else if(Ih(i,e,t,n,r))r.stopPropagation();else if(Ph(e,r),t&4&&-1<Nh.indexOf(e)){for(;i!==null;){var a=Ft(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=st(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-et(o);s.entanglements[1]|=c,o&=~c}kf(a),!($u&6)&&(vd=He()+500,Af(0,!1))}}break;case 31:case 13:s=Oi(a,2),s!==null&&Id(s,a,2),Vd(),gh(a,2)}if(a=Ch(r),a===null&&Yf(e,t,r,wh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Yf(e,t,r,null,n)}}function Ch(e){return e=Sn(e),Th(e)}var wh=null;function Th(e){if(wh=null,e=Pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wh=e,null}function Eh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ue()){case We:return 2;case Ge:return 8;case Ke:case qe:return 32;case Je:return 268435456;default:return 32}default:return 32}}var Dh=!1,Oh=null,kh=null,Ah=null,Z=new Map,jh=new Map,Mh=[],Nh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ph(e,t){switch(e){case`focusin`:case`focusout`:Oh=null;break;case`dragenter`:case`dragleave`:kh=null;break;case`mouseover`:case`mouseout`:Ah=null;break;case`pointerover`:case`pointerout`:Z.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:jh.delete(t.pointerId)}}function Fh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ft(t),t!==null&&_h(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ih(e,t,n,r,i){switch(t){case`focusin`:return Oh=Fh(Oh,e,t,n,r,i),!0;case`dragenter`:return kh=Fh(kh,e,t,n,r,i),!0;case`mouseover`:return Ah=Fh(Ah,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Z.set(a,Fh(Z.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,jh.set(a,Fh(jh.get(a)||null,e,t,n,r,i)),!0}return!1}function Lh(e){var t=Pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,St(e.priority,function(){vh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,St(e.priority,function(){vh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ch(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xn=r,n.target.dispatchEvent(r),xn=null}else return t=Ft(n),t!==null&&_h(t),e.blockedOn=n,!1;t.shift()}return!0}function zh(e,t,n){Rh(e)&&n.delete(t)}function Bh(){Dh=!1,Oh!==null&&Rh(Oh)&&(Oh=null),kh!==null&&Rh(kh)&&(kh=null),Ah!==null&&Rh(Ah)&&(Ah=null),Z.forEach(zh),jh.forEach(zh)}function Vh(e,n){e.blockedOn===n&&(e.blockedOn=null,Dh||(Dh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Bh)))}var Hh=null;function Uh(e){Hh!==e&&(Hh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Hh===e&&(Hh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Th(r||n)===null)continue;break}var a=Ft(n);a!==null&&(e.splice(t,3),t-=3,ec(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Wh(e){function t(t){return Vh(t,e)}Oh!==null&&Vh(Oh,e),kh!==null&&Vh(kh,e),Ah!==null&&Vh(Ah,e),Z.forEach(t),jh.forEach(t);for(var n=0;n<Mh.length;n++){var r=Mh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Mh.length&&(n=Mh[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Mh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Tt]||null;if(typeof a==`function`)o||Uh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Tt]||null)s=o.formAction;else if(Th(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Uh(n)}}}function Gh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Kh(e){this._internalRoot=e}qh.prototype.render=Kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;mh(n,Nd(),e,t,null,null)},qh.prototype.unmount=Kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mh(e.current,2,null,e,null,null),Vd(),t[Et]=null}};function qh(e){this._internalRoot=e}qh.prototype.unstable_scheduleHydration=function(e){if(e){var t=xt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mh.length&&t!==0&&t<Mh[n].priority;n++);Mh.splice(n,0,e),n===0&&Lh(e)}};var Jh=n.version;if(Jh!==`19.3.0`)throw Error(i(527,Jh,`19.3.0`));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Yh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:F,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Xh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xh.isDisabled&&Xh.supportsFiber)try{Ze=Xh.inject(Yh),Qe=Xh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Cc,s=wc,c=Tc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=fh(e,1,!1,null,null,n,r,null,o,s,c,Gh),e[Et]=t.current,qf(e),new Kh(t)}})),_=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/`+e},S={},C=function(e){return e.pathname.endsWith(`.css`)},w=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=x(t,n);let r=s(t);if(r.href in S)return;S[r.href]=!0;let i=C(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:b,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},T=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,E=/^[\\/]{2}/;function D(e,t){return t+e.replace(/\\/g,`/`)}var O=`popstate`;function k(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function A(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return te(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ne(t)}return ie(t,n,null,e)}function j(e,t){if(e===!1||e==null)throw Error(t)}function M(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function N(){return Math.random().toString(36).substring(2,10)}function ee(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function te(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?re(t):t,state:n,key:t&&t.key||r||N(),mask:i}}function ne({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function re(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=k(e)?e:te(h.location,e,t);n&&n(r,e),l=u()+1;let d=ee(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=k(e)?e:te(h.location,e,t);n&&n(r,e),l=u();let i=ee(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(O,d),c=e,()=>{i.removeEventListener(O,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),j(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ne(t);return i=i.replace(/ $/,`%20`),!n&&E.test(i)&&(i=r+i),new URL(i,r)}function oe(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=Ce((typeof t==`string`?re(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ce(e),s=null,c=Se(a);for(let e=0;s==null&&e<o.length;++e)s=ve(o[e],c,r);return s}function ce(e){let t=le(e);return P(t),t}function le(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;j(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=je([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(j(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),le(e.children,t,u,l,o)),(e.path!=null||e.index)&&t.push({path:l,score:ge(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=xe(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ue(e.path))a(e,t,!0,n)}),t}function ue(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ue(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function P(e){e.sort((e,t)=>e.score===t.score?_e(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var de=/^:[\w-]+$/,fe=3,pe=2,me=1,he=10,F=-2,I=e=>e===`*`;function ge(e,t){let n=e.split(`/`),r=n.length;return n.some(I)&&(r+=F),t&&(r+=pe),n.filter(e=>!I(e)).reduce((e,t)=>e+(de.test(t)?fe:t===``?me:he),r)}function _e(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ve(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?be(u,l,s.matcher,s.compiledParams):ye(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=ye({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:je([a,d.pathname]),pathnameBase:Ne(je([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=je([a,d.pathnameBase]))}return o}function ye(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xe(e.path,e.caseSensitive,e.end);return be(e,t,n,r)}function be(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=Me(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=Me(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function xe(e,t=!1,n=!0){M(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Se(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return M(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ce(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function we(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?re(e):e,a;return n?(n=Ae(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?Te(n.substring(1),`/`):Te(n,t)):a=t,{pathname:a,search:Pe(r),hash:Fe(i)}}function Te(e,t){let n=Me(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ee(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function De(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Oe(e){let t=De(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function ke(e,t,n,r=!1){let i;typeof e==`string`?i=re(e):(i={...e},j(!i.pathname||!i.pathname.includes(`?`),Ee(`?`,`pathname`,`search`,i)),j(!i.pathname||!i.pathname.includes(`#`),Ee(`#`,`pathname`,`hash`,i)),j(!i.search||!i.search.includes(`#`),Ee(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=we(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ae=e=>e.replace(/[\\/]{2,}/g,`/`),je=e=>Ae(e.join(`/`));function Me(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Ne=e=>Me(e).replace(/^\/*/,`/`),Pe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Fe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ie=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Le(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Re(e){return je(e.map(e=>e.route.path).filter(Boolean))||`/`}var ze=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Be(e,t){let n=e;if(typeof n!=`string`||!T.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ze)try{let e=new URL(window.location.href),r=E.test(n)?new URL(D(n,e.protocol)):new URL(n),a=Ce(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{M(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ve=new URL(`http://localhost`);function He(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),Ve)}catch{return Ve}}function Ue(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function We(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function Ge(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!Ue(i,n),s=!Ue(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!We(e,i)||!Ue(i,a)))throw Error(`External navigation is not allowed`)}var Ke=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ke);var qe=[`GET`,...Ke];new Set(qe);var Je=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ye(e){try{return Je.includes(new URL(e).protocol)}catch{return!1}}var Xe=v.createContext(null);Xe.displayName=`DataRouter`;var Ze=v.createContext(null);Ze.displayName=`DataRouterState`;var Qe=v.createContext(!1);function $e(){return v.useContext(Qe)}var et=v.createContext({isTransitioning:!1});et.displayName=`ViewTransition`;var tt=v.createContext(new Map);tt.displayName=`Fetchers`;var nt=v.createContext(null);nt.displayName=`Await`;var rt=v.createContext(null);rt.displayName=`Navigation`;var it=v.createContext(null);it.displayName=`Location`;var at=v.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName=`Route`;var ot=v.createContext(null);ot.displayName=`RouteError`;var st=`REACT_ROUTER_ERROR`,ct=`REDIRECT`,lt=`ROUTE_ERROR_RESPONSE`;function ut(e){if(e.startsWith(`${st}:${ct}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function dt(e){if(e.startsWith(`${st}:${lt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ie(t.status,t.statusText,t.data)}catch{}}function ft(e,{relative:t}={}){j(pt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(rt),{hash:i,pathname:a,search:o}=xt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:je([n,a])),r.createHref({pathname:s,search:o,hash:i})}function pt(){return v.useContext(it)!=null}function mt(){return j(pt(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(it).location}var ht=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function gt(e){v.useContext(rt).static||v.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=v.useContext(at);return e?Rt():vt()}function vt(){j(pt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(Xe),{basename:t,navigator:n}=v.useContext(rt),{matches:r}=v.useContext(at),{pathname:i}=mt(),a=JSON.stringify(Oe(r)),o=v.useRef(!1);return gt(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(M(o.current,ht),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=ke(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:je([t,c.pathname])),Ge(typeof r==`string`?r:ne(r),n.createHref(c),He(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var yt=v.createContext(null);function bt(e){let t=v.useContext(at).outlet;return v.useMemo(()=>t&&v.createElement(yt.Provider,{value:e},t),[t,e])}function xt(e,{relative:t}={}){let{matches:n}=v.useContext(at),{pathname:r}=mt(),i=JSON.stringify(Oe(n));return v.useMemo(()=>ke(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function St(e,t){return Ct(e,t)}function Ct(e,t,n){j(pt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(rt),{matches:i}=v.useContext(at),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Bt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=mt(),d;if(t){let e=typeof t==`string`?re(t):t;j(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):oe(e,{pathname:p});M(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),M(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=At(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:je([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:je([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(it.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function wt(){let e=Lt(),t=Le(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var Tt=v.createElement(wt,null),Et=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=dt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(at.Provider,{value:this.props.routeContext},v.createElement(ot.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(Ot,{error:e},t):t}};Et.contextType=Qe;var Dt=new WeakMap;function Ot({children:e,error:t}){let{basename:n,navigator:r}=v.useContext(rt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ut(t.digest);if(e){let i=Dt.get(t);if(i)throw i;let a=Be(e.location,n),o=a.absoluteURL||a.to;if(Ge(e.location,o,He(r),`allow-explicit`),Ye(o))throw Error(`Invalid redirect location`);if(ze&&!Dt.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Dt.set(t,n),n}}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function kt({routeContext:e,match:t,children:n}){let r=v.useContext(Xe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(at.Provider,{value:e},n)}function At(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);j(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Re(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Tt,o&&(s<0&&c===0?(Bt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(kt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(Et,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function jt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mt(e){let t=v.useContext(Xe);return j(t,jt(e)),t}function Nt(e){let t=v.useContext(Ze);return j(t,jt(e)),t}function Pt(e){let t=v.useContext(at);return j(t,jt(e)),t}function Ft(e){let t=Pt(e),n=t.matches[t.matches.length-1];return j(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function It(){return Ft(`useRouteId`)}function Lt(){let e=v.useContext(ot),t=Nt(`useRouteError`),n=Ft(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Rt(){let{router:e}=Mt(`useNavigate`),t=Ft(`useNavigate`),n=v.useRef(!1);return gt(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{M(n.current,ht),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var zt={};function Bt(e,t,n){!t&&!zt[e]&&(zt[e]=!0,M(!1,n))}v.memo(Vt);function Vt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Ct(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ht({to:e,replace:t,state:n,relative:r}){j(pt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=v.useContext(rt);M(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=v.useContext(at),{pathname:s}=mt(),c=_t(),l=ke(e,Oe(o),s,r===`path`);Ge(typeof e==`string`?e:ne(e),a.createHref(l),He(a),`reject`);let u=JSON.stringify(l);return v.useEffect(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function Ut(e){return bt(e.context)}function Wt(e){j(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Gt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){j(!pt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=re(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=Ce(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return M(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(rt.Provider,{value:c},v.createElement(it.Provider,{children:t,value:h}))}function Kt({children:e,location:t}){return St(qt(e),t)}v.Component;function qt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,qt(e.props.children,i));return}j(e.type===Wt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),j(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=qt(e.props.children,i)),n.push(a)}),n}var L=`get`,Jt=`application/x-www-form-urlencoded`;function Yt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Xt(e){return Yt(e)&&e.tagName.toLowerCase()===`button`}function Zt(e){return Yt(e)&&e.tagName.toLowerCase()===`form`}function Qt(e){return Yt(e)&&e.tagName.toLowerCase()===`input`}function $t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function en(e,t){return e.button===0&&(!t||t===`_self`)&&!$t(e)}var tn=null;function nn(){if(tn===null)try{new FormData(document.createElement(`form`),0),tn=!1}catch{tn=!0}return tn}var rn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function an(e){return e!=null&&!rn.has(e)?(M(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jt}"`),null):e}function on(e,t){let n,r,i,a,o;if(Zt(e)){let o=e.getAttribute(`action`);r=o?Ce(o,t):null,n=e.getAttribute(`method`)||L,i=an(e.getAttribute(`enctype`))||Jt,a=new FormData(e)}else if(Xt(e)||Qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ce(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||L,i=an(e.getAttribute(`formenctype`))||an(o.getAttribute(`enctype`))||Jt,a=new FormData(o,e),!nn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Yt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=L,r=null,i=Jt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function sn(e,t){if(e===!1||e==null)throw Error(t)}function cn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Ce(i.pathname,t)===`/`?`${Me(t)}/_root.${r}`:`${Me(i.pathname)}.${r}`,i}async function ln(e,t){if(e.id in t)return t[e.id];try{let n=await w(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function un(e){return e!=null&&typeof e.page==`string`}function dn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function fn(e,t,n){return _n((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ln(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(dn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function pn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function mn(e,t,{includeHydrateFallback:n}={}){return hn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function hn(e){return[...new Set(e)]}function gn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function _n(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!un(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(gn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function vn(){let e=v.useContext(Xe);return sn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function yn(){let e=v.useContext(Ze);return sn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var bn=v.createContext(void 0);bn.displayName=`FrameworkContext`;function xn(){let e=v.useContext(bn);return sn(e,`You must render this element inside a <HydratedRouter> element`),e}function Sn(e,t){let n=v.useContext(bn),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Cn(s,p),onBlur:Cn(c,m),onMouseEnter:Cn(l,p),onMouseLeave:Cn(u,m),onTouchStart:Cn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Cn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function wn({page:e,...t}){let n=$e(),{nonce:r}=xn(),{router:i}=vn(),a=v.useMemo(()=>oe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(En,{page:e,matches:a,...t}):v.createElement(Dn,{page:e,matches:a,...t})):null}function Tn(e){let{manifest:t,routeModules:n}=xn(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return fn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function En({page:e,matches:t,...n}){let r=mt(),{future:i}=xn(),{basename:a}=vn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=cn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Dn({page:e,matches:t,...n}){let r=mt(),{future:i,manifest:a,routeModules:o}=xn(),{basename:s}=vn(),{loaderData:c,matches:l}=yn(),u=v.useMemo(()=>pn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>pn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];t&&t.hasLoader&&(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=cn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>mn(d,a),[d,a]),m=Tn(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function On(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{kn&&(window.__reactRouterVersion=`7.18.4`)}catch{}function An({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=A({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(Gt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var jn=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(rt),y=typeof l==`string`&&T.test(l),b=Be(l,h);l=b.to;let x=ft(l,{relative:r}),S=mt(),C=null;if(o){let e=ke(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:je([h,e.pathname])),C=g.createHref(e)}let[w,E,D]=Sn(n,p),O=In(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function k(t){e&&e(t),t.defaultPrevented||O(t)}let A=!(b.isExternal||i),j=v.createElement(`a`,{...p,...D,href:(A?C:void 0)||b.absoluteURL||x,onClick:A?k:e,ref:On(m,E),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?v.createElement(v.Fragment,null,j,v.createElement(wn,{page:x})):j});jn.displayName=`Link`;var Mn=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=xt(a,{relative:c.relative}),d=mt(),f=v.useContext(Ze),{navigator:p,basename:m}=v.useContext(rt),h=f!=null&&Vn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ce(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return v.createElement(jn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Mn.displayName=`NavLink`;var Nn=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=L,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(rt),g=zn(),_=Bn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&T.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Nn.displayName=`Form`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=v.useContext(Xe);return j(t,Pn(e)),t}function In(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=_t(),d=mt(),f=xt(e,{relative:o});return v.useCallback(p=>{if(en(p,t)){p.preventDefault();let t=n===void 0?ne(d)===ne(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Fn(`useSubmit`),{basename:t}=v.useContext(rt),n=It(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=on(e,t);if(a.navigate===!1){let e=a.fetcherKey||Rn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=v.useContext(rt),r=v.useContext(at);j(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...xt(e||`.`,{relative:t})},o=mt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:je([n,a.pathname])),ne(a)}function Vn(e,{relative:t}={}){let n=v.useContext(et);j(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=xt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ce(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ce(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ye(i.pathname,o)!=null||ye(i.pathname,a)!=null}function Hn(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Hn(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Un(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Hn(e))&&(r&&(r+=` `),r+=t);return r}var Wn=`dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(`.`);function Gn(e){return typeof e==`string`&&Wn.includes(e)}var Kn=new Set(`aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(`.`));function qn(e){return typeof e==`string`&&Kn.has(e)}function Jn(e){return typeof e==`string`&&e.startsWith(`data-`)}function Yn(e){if(typeof e!=`object`||!e)return{};var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(qn(n)||Jn(n))&&(t[n]=e[n]);return t}function Xn(e){if(e==null)return null;if((0,v.isValidElement)(e)&&typeof e.props==`object`&&e.props!==null){var t=e.props;return Yn(t)}return typeof e==`object`&&!Array.isArray(e)?Yn(e):null}function Zn(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(qn(n)||Jn(n)||Gn(n))&&(t[n]=e[n]);return t}function Qn(e){return e==null?null:(0,v.isValidElement)(e)?Zn(e.props):typeof e==`object`&&!Array.isArray(e)?Zn(e):null}var $n=[`children`,`width`,`height`,`viewBox`,`className`,`style`,`title`,`desc`];function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(null,arguments)}function tr(e,t){if(e==null)return{};var n,r,i=nr(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function nr(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var rr=(0,v.forwardRef)((e,t)=>{var n=e.children,r=e.width,i=e.height,a=e.viewBox,o=e.className,s=e.style,c=e.title,l=e.desc,u=tr(e,$n),d=a||{width:r,height:i,x:0,y:0},f=Un(`recharts-surface`,o);return v.createElement(`svg`,er({},Zn(u),{className:f,width:r,height:i,style:s,viewBox:`${d.x} ${d.y} ${d.width} ${d.height}`,ref:t}),v.createElement(`title`,null,c),v.createElement(`desc`,null,l),n)}),ir=[`children`,`className`];function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(null,arguments)}function or(e,t){if(e==null)return{};var n,r,i=sr(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function sr(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var cr=v.forwardRef((e,t)=>{var n=e.children,r=e.className,i=or(e,ir),a=Un(`recharts-layer`,r);return v.createElement(`g`,ar({className:a},Zn(i),{ref:t}),n)});function lr(e){return e===`__proto__`}var ur=/\.|(\[(?:[^[\]]*|(["'])(?:(?!\2)[^\\]|\\.)*?\2)\])/;function dr(e){switch(typeof e){case`number`:case`symbol`:return!1;case`string`:return e===``||e.startsWith(`.`)||e.endsWith(`.`)?!1:ur.test(e);default:return!1}}function fr(e){return typeof e==`string`||typeof e==`symbol`?e:Object.is(e?.valueOf?.(),-0)?`-0`:String(e)}function pr(e){return typeof e==`symbol`||e instanceof Symbol}function mr(e){return e==null?``:hr(e)}function hr(e){if(typeof e==`string`)return e;if(Array.isArray(e))return e.map(hr).join(`,`);if(pr(e))return e.toString();let t=e+``;return t===`0`&&Object.is(Number(e),-0)?`-0`:t}function gr(e){if(Array.isArray(e))return e.map(fr);if(typeof e==`symbol`)return[e];e=mr(e);let t=[],n=e.length;if(n===0)return t;let r=0,i=``,a=``,o=!1,s=!1,c=/^-?\d+(?:\.\d+)?$/;for(e.charCodeAt(0)===46&&t.push(``);r<n;){let l=e[r];if(a)l===`\\`&&r+1<n?(r++,i+=e[r]):l===a?a=``:i+=l;else if(o){if(l===`"`||l===`'`)a=l,s=!0;else if(l===`]`){if(o=!1,!s&&i.includes(`.`)&&!c.test(i)){let e=i.split(`.`);for(let n=0;n<e.length;n++)e[n]!==``&&t.push(e[n])}else t.push(i);i=``}else i+=l}else if(l===`[`)o=!0,s=!1,i&&=(t.push(i),``);else if(l===`.`){i&&=(t.push(i),``);let n=e[r+1];(n===void 0||n===`.`)&&t.push(``)}else i+=l;r++}return i&&t.push(i),t}function _r(e,t,n){if(e==null)return n;switch(typeof t){case`string`:{if(lr(t))return n;let r=e[t];return r===void 0?dr(t)&&!Object.hasOwn(e,t)?_r(e,gr(t),n):n:r}case`number`:case`symbol`:{typeof t==`number`&&(t=fr(t));let r=e[t];return r===void 0?n:r}default:{if(Array.isArray(t))return vr(e,t,n);if(t=Object.is(t?.valueOf(),-0)?`-0`:String(t),lr(t))return n;let r=e[t];return r===void 0?n:r}}}function vr(e,t,n){if(t.length===0)return n;let r=e;for(let e=0;e<t.length;e++){if(r==null||lr(t[e]))return n;r=r[t[e]]}return r===void 0?n:r}var yr=4;function br(e){var t=10**(arguments.length>1&&arguments[1]!==void 0?arguments[1]:yr),n=Math.round(e*t)/t;return Object.is(n,-0)?0:n}function xr(e){var t=[...arguments].slice(1);return e.reduce((e,n,r)=>{var i=t[r-1];return typeof i==`string`?e+i+n:i===void 0?e+n:e+br(i)+n},``)}var Sr=e=>e===0?0:e>0?1:-1,Cr=e=>typeof e==`number`&&e!=+e,wr=e=>typeof e==`string`&&e.length>1&&e.indexOf(`%`)===e.length-1,R=e=>(typeof e==`number`||e instanceof Number)&&!Cr(e),Tr=e=>R(e)||typeof e==`string`,Er=0,Dr=e=>{var t=++Er;return`${e||``}${t}`},Or=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(!R(e)&&typeof e!=`string`)return n;var i;if(wr(e)){if(t==null)return n;var a=e.indexOf(`%`);i=t*parseFloat(e.slice(0,a))/100}else i=+e;return Cr(i)&&(i=n),r&&t!=null&&i>t&&(i=t),i},kr=e=>{if(!Array.isArray(e))return!1;for(var t=e.length,n={},r=0;r<t;r++)if(!n[String(e[r])])n[String(e[r])]=!0;else return!0;return!1};function Ar(e,t,n){return R(e)&&R(t)?br(e+n*(t-e)):t}function jr(e,t,n){if(e&&e.length)return e.find(e=>e&&(typeof t==`function`?t(e):_r(e,t))===n)}var Mr=e=>e==null,Nr=e=>Mr(e)?e:`${e.charAt(0).toUpperCase()}${e.slice(1)}`;function Pr(e){return e!=null}function Fr(){}function Ir(e){if(e)return{x:e.x,y:e.y,upperWidth:`upperWidth`in e?e.upperWidth:e.width,lowerWidth:`lowerWidth`in e?e.lowerWidth:e.width,width:e.width,height:e.height}}function Lr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Lr(Object(n),!0).forEach(function(t){zr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function zr(e,t,n){return(t=Br(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Br(e){var t=Vr(e,`string`);return typeof t==`symbol`?t:t+``}function Vr(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Hr=e=>{var t=e.viewBox,n=e.position,r=e.offset,i=r===void 0?0:r,a=e.parentViewBox,o=e.clamp,s=Ir(t),c=s.x,l=s.y,u=s.height,d=s.upperWidth,f=s.lowerWidth,p=c,m=c+(d-f)/2,h=(p+m)/2,g=(d+f)/2,_=p+d/2,v=u>=0?1:-1,y=v*i,b=v>0?`end`:`start`,x=v>0?`start`:`end`,S=d>=0?1:-1,C=S*i,w=S>0?`end`:`start`,T=S>0?`start`:`end`,E=a;if(n===`top`){var D={x:p+d/2,y:l-y,horizontalAnchor:`middle`,verticalAnchor:b};return o&&E&&(D.height=Math.max(l-E.y,0),D.width=d),D}if(n===`bottom`){var O={x:m+f/2,y:l+u+y,horizontalAnchor:`middle`,verticalAnchor:x};return o&&E&&(O.height=Math.max(E.y+E.height-(l+u),0),O.width=f),O}if(n===`left`){var k={x:h-C,y:l+u/2,horizontalAnchor:w,verticalAnchor:`middle`};return o&&E&&(k.width=Math.max(k.x-E.x,0),k.height=u),k}if(n===`right`){var A={x:h+g+C,y:l+u/2,horizontalAnchor:T,verticalAnchor:`middle`};return o&&E&&(A.width=Math.max(E.x+E.width-A.x,0),A.height=u),A}var j=o&&E?{width:g,height:u}:{};return n===`insideLeft`?Rr({x:h+C,y:l+u/2,horizontalAnchor:T,verticalAnchor:`middle`},j):n===`insideRight`?Rr({x:h+g-C,y:l+u/2,horizontalAnchor:w,verticalAnchor:`middle`},j):n===`insideTop`?Rr({x:p+d/2,y:l+y,horizontalAnchor:`middle`,verticalAnchor:x},j):n===`insideBottom`?Rr({x:m+f/2,y:l+u-y,horizontalAnchor:`middle`,verticalAnchor:b},j):n===`insideTopLeft`?Rr({x:p+C,y:l+y,horizontalAnchor:T,verticalAnchor:x},j):n===`insideTopRight`?Rr({x:p+d-C,y:l+y,horizontalAnchor:w,verticalAnchor:x},j):n===`insideBottomLeft`?Rr({x:m+C,y:l+u-y,horizontalAnchor:T,verticalAnchor:b},j):n===`insideBottomRight`?Rr({x:m+f-C,y:l+u-y,horizontalAnchor:w,verticalAnchor:b},j):n&&typeof n==`object`&&(R(n.x)||wr(n.x))&&(R(n.y)||wr(n.y))?Rr({x:c+Or(n.x,g),y:l+Or(n.y,u),horizontalAnchor:`end`,verticalAnchor:`end`},j):Rr({x:_,y:l+u/2,horizontalAnchor:`middle`,verticalAnchor:`middle`},j)},Ur=[`top`,`left`,`right`,`bottom`];function Wr(e){return e==null?!1:typeof e==`object`||Ur.includes(e)}var Gr=(0,v.createContext)(null);function Kr(e){return function(){return e}}var qr=Math.PI,Jr=2*qr,Yr=1e-6,Xr=Jr-Yr;function Zr(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Qr(e){let t=Math.floor(e);if(!(t>=0))throw Error(`invalid digits: ${e}`);if(t>15)return Zr;let n=10**t;return function(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}var $r=class{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._=``,this._append=e==null?Zr:Qr(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(e,t,n,r,i,a){this._append`C${+e},${+t},${+n},${+r},${this._x1=+i},${this._y1=+a}`}arcTo(e,t,n,r,i){if(e=+e,t=+t,n=+n,r=+r,i=+i,i<0)throw Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,s=n-e,c=r-t,l=a-e,u=o-t,d=l*l+u*u;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(d>Yr){if(!(Math.abs(u*s-c*l)>Yr)||!i)this._append`L${this._x1=e},${this._y1=t}`;else{let f=n-a,p=r-o,m=s*s+c*c,h=f*f+p*p,g=Math.sqrt(m),_=Math.sqrt(d),v=i*Math.tan((qr-Math.acos((m+d-h)/(2*g*_)))/2),y=v/_,b=v/g;Math.abs(y-1)>Yr&&this._append`L${e+y*l},${t+y*u}`,this._append`A${i},${i},0,0,${+(u*f>l*p)},${this._x1=e+b*s},${this._y1=t+b*c}`}}}arc(e,t,n,r,i,a){if(e=+e,t=+t,n=+n,a=!!a,n<0)throw Error(`negative radius: ${n}`);let o=n*Math.cos(r),s=n*Math.sin(r),c=e+o,l=t+s,u=1^a,d=a?r-i:i-r;this._x1===null?this._append`M${c},${l}`:(Math.abs(this._x1-c)>Yr||Math.abs(this._y1-l)>Yr)&&this._append`L${c},${l}`,n&&(d<0&&(d=d%Jr+Jr),d>Xr?this._append`A${n},${n},0,1,${u},${e-o},${t-s}A${n},${n},0,1,${u},${this._x1=c},${this._y1=l}`:d>Yr&&this._append`A${n},${n},0,${+(d>=qr)},${u},${this._x1=e+n*Math.cos(i)},${this._y1=t+n*Math.sin(i)}`)}rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}};$r.prototype;function ei(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{let e=Math.floor(n);if(!(e>=0))throw RangeError(`invalid digits: ${n}`);t=e}return e},()=>new $r(t)}Array.prototype.slice;function ti(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function ni(e){this._context=e}ni.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t)}}};function ri(e){return new ni(e)}function ii(e){return e[0]}function ai(e){return e[1]}function oi(e,t){var n=Kr(!0),r=null,i=ri,a=null,o=ei(s);e=typeof e==`function`?e:e===void 0?ii:Kr(e),t=typeof t==`function`?t:t===void 0?ai:Kr(t);function s(s){var c,l=(s=ti(s)).length,u,d=!1,f;for(r??(a=i(f=o())),c=0;c<=l;++c)!(c<l&&n(u=s[c],c,s))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+e(u,c,s),+t(u,c,s));if(f)return a=null,f+``||null}return s.x=function(t){return arguments.length?(e=typeof t==`function`?t:Kr(+t),s):e},s.y=function(e){return arguments.length?(t=typeof e==`function`?e:Kr(+e),s):t},s.defined=function(e){return arguments.length?(n=typeof e==`function`?e:Kr(!!e),s):n},s.curve=function(e){return arguments.length?(i=e,r!=null&&(a=i(r)),s):i},s.context=function(e){return arguments.length?(e==null?r=a=null:a=i(r=e),s):r},s}function si(e,t,n){var r=null,i=Kr(!0),a=null,o=ri,s=null,c=ei(l);e=typeof e==`function`?e:e===void 0?ii:Kr(+e),t=typeof t==`function`?t:Kr(t===void 0?0:+t),n=typeof n==`function`?n:n===void 0?ai:Kr(+n);function l(l){var u,d,f,p=(l=ti(l)).length,m,h=!1,g,_=Array(p),v=Array(p);for(a??(s=o(g=c())),u=0;u<=p;++u){if(!(u<p&&i(m=l[u],u,l))===h){if(h=!h)d=u,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),f=u-1;f>=d;--f)s.point(_[f],v[f]);s.lineEnd(),s.areaEnd()}}h&&(_[u]=+e(m,u,l),v[u]=+t(m,u,l),s.point(r?+r(m,u,l):_[u],n?+n(m,u,l):v[u]))}if(g)return s=null,g+``||null}function u(){return oi().defined(i).curve(o).context(a)}return l.x=function(t){return arguments.length?(e=typeof t==`function`?t:Kr(+t),r=null,l):e},l.x0=function(t){return arguments.length?(e=typeof t==`function`?t:Kr(+t),l):e},l.x1=function(e){return arguments.length?(r=e==null?null:typeof e==`function`?e:Kr(+e),l):r},l.y=function(e){return arguments.length?(t=typeof e==`function`?e:Kr(+e),n=null,l):t},l.y0=function(e){return arguments.length?(t=typeof e==`function`?e:Kr(+e),l):t},l.y1=function(e){return arguments.length?(n=e==null?null:typeof e==`function`?e:Kr(+e),l):n},l.lineX0=l.lineY0=function(){return u().x(e).y(t)},l.lineY1=function(){return u().x(e).y(n)},l.lineX1=function(){return u().x(r).y(t)},l.defined=function(e){return arguments.length?(i=typeof e==`function`?e:Kr(!!e),l):i},l.curve=function(e){return arguments.length?(o=e,a!=null&&(s=o(a)),l):o},l.context=function(e){return arguments.length?(e==null?a=s=null:s=o(a=e),l):a},l}var ci=class{constructor(e,t){this._context=e,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._x?this._context.bezierCurveTo(this._x0=(this._x0+e)/2,this._y0,this._x0,t,e,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,e,this._y0,e,t)}this._x0=e,this._y0=t}};function li(e){return new ci(e,!0)}function ui(e){return new ci(e,!1)}function di(){}function fi(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function pi(e){this._context=e}pi.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:fi(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:fi(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function mi(e){return new pi(e)}function hi(e){this._context=e}hi.prototype={areaStart:di,areaEnd:di,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:fi(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function gi(e){return new hi(e)}function _i(e){this._context=e}_i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:fi(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function vi(e){return new _i(e)}function yi(e){this._context=e}yi.prototype={areaStart:di,areaEnd:di,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function bi(e){return new yi(e)}function xi(e){return e<0?-1:1}function Si(e,t,n){var r=e._x1-e._x0,i=t-e._x1,a=(e._y1-e._y0)/(r||i<0&&-0),o=(n-e._y1)/(i||r<0&&-0),s=(a*i+o*r)/(r+i);return(xi(a)+xi(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(s))||0}function Ci(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function wi(e,t,n){var r=e._x0,i=e._y0,a=e._x1,o=e._y1,s=(a-r)/3;e._context.bezierCurveTo(r+s,i+s*t,a-s,o-s*n,a,o)}function Ti(e){this._context=e}Ti.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:wi(this,this._t0,Ci(this,this._t0))}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,e!==this._x1||t!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,wi(this,Ci(this,n=Si(this,e,t)),n);break;default:wi(this,this._t0,n=Si(this,e,t))}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function Ei(e){this._context=new Di(e)}(Ei.prototype=Object.create(Ti.prototype)).point=function(e,t){Ti.prototype.point.call(this,t,e)};function Di(e){this._context=e}Di.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,i,a){this._context.bezierCurveTo(t,e,r,n,a,i)}};function Oi(e){return new Ti(e)}function ki(e){return new Ei(e)}function Ai(e){this._context=e}Ai.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n){if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=ji(e),i=ji(t),a=0,o=1;o<n;++a,++o)this._context.bezierCurveTo(r[0][a],i[0][a],r[1][a],i[1][a],e[o],t[o])}(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function ji(e){var t,n=e.length-1,r,i=Array(n),a=Array(n),o=Array(n);for(i[0]=0,a[0]=2,o[0]=e[0]+2*e[1],t=1;t<n-1;++t)i[t]=1,a[t]=4,o[t]=4*e[t]+2*e[t+1];for(i[n-1]=2,a[n-1]=7,o[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=i[t]/a[t-1],a[t]-=r,o[t]-=r*o[t-1];for(i[n-1]=o[n-1]/a[n-1],t=n-2;t>=0;--t)i[t]=(o[t]-i[t+1])/a[t];for(a[n-1]=(e[n]+i[n-1])/2,t=0;t<n-1;++t)a[t]=2*e[t+1]-i[t+1];return[i,a]}function Mi(e){return new Ai(e)}function Ni(e,t){this._context=e,this._t=t}Ni.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}}this._x=e,this._y=t}};function Pi(e){return new Ni(e,.5)}function Fi(e){return new Ni(e,0)}function Ii(e){return new Ni(e,1)}function Li(e,t){if((o=e.length)>1)for(var n=1,r,i,a=e[t[0]],o,s=a.length;n<o;++n)for(i=a,a=e[t[n]],r=0;r<s;++r)a[r][1]+=a[r][0]=isNaN(i[r][1])?i[r][0]:i[r][1]}function Ri(e){for(var t=e.length,n=Array(t);--t>=0;)n[t]=t;return n}function zi(e,t){return e[t]}function Bi(e){let t=[];return t.key=e,t}function Vi(){var e=Kr([]),t=Ri,n=Li,r=zi;function i(i){var a=Array.from(e.apply(this,arguments),Bi),o,s=a.length,c=-1,l;for(let e of i)for(o=0,++c;o<s;++o)(a[o][c]=[0,+r(e,a[o].key,c,i)]).data=e;for(o=0,l=ti(t(a));o<s;++o)a[l[o]].index=o;return n(a,l),a}return i.keys=function(t){return arguments.length?(e=typeof t==`function`?t:Kr(Array.from(t)),i):e},i.value=function(e){return arguments.length?(r=typeof e==`function`?e:Kr(+e),i):r},i.order=function(e){return arguments.length?(t=e==null?Ri:typeof e==`function`?e:Kr(Array.from(e)),i):t},i.offset=function(e){return arguments.length?(n=e??Li,i):n},i}function Hi(e,t){if((r=e.length)>0){for(var n,r,i=0,a=e[0].length,o;i<a;++i){for(o=n=0;n<r;++n)o+=e[n][i][1]||0;if(o)for(n=0;n<r;++n)e[n][i][1]/=o}Li(e,t)}}function Ui(e,t){if((i=e.length)>0){for(var n=0,r=e[t[0]],i,a=r.length;n<a;++n){for(var o=0,s=0;o<i;++o)s+=e[o][n][1]||0;r[n][1]+=r[n][0]=-s/2}Li(e,t)}}function Wi(e,t){if((o=e.length)>0&&(a=(i=e[t[0]]).length)>0){for(var n=0,r=1,i,a,o;r<a;++r){for(var s=0,c=0,l=0;s<o;++s){for(var u=e[t[s]],d=u[r][1]||0,f=(d-(u[r-1][1]||0))/2,p=0;p<s;++p){var m=e[t[p]],h=m[r][1]||0,g=m[r-1][1]||0;f+=h-g}c+=d,l+=f*d}i[r-1][1]+=i[r-1][0]=n,c&&(n-=l/c)}i[r-1][1]+=i[r-1][0]=n,Li(e,t)}}var Gi=e=>`radius`in e&&`startAngle`in e&&`endAngle`in e,Ki=(e,t)=>{if(!e||typeof e==`function`||typeof e==`boolean`)return null;var n=e;if((0,v.isValidElement)(e)&&(n=e.props),typeof n!=`object`&&typeof n!=`function`)return null;var r={};return Object.keys(n).forEach(e=>{Gn(e)&&typeof n[e]==`function`&&(r[e]=t||(t=>n[e](n,t)))}),r},qi=(e,t,n)=>r=>(e(t,n,r),null),Ji=(e,t,n)=>{if(e===null||typeof e!=`object`&&typeof e!=`function`)return null;var r=null;return Object.keys(e).forEach(i=>{var a=e[i];Gn(i)&&typeof a==`function`&&(r||={},r[i]=qi(a,t,n))}),r};function Yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Xi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Yi(Object(n),!0).forEach(function(t){Zi(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yi(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Zi(e,t,n){return(t=Qi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qi(e){var t=$i(e,`string`);return typeof t==`symbol`?t:t+``}function $i(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ea(e,t){var n=Xi({},e),r=t;return Object.keys(t).reduce((e,t)=>(e[t]===void 0&&r[t]!==void 0&&(e[t]=r[t]),e),n)}function ta(e,t){let n=new Map;for(let r=0;r<e.length;r++){let i=e[r],a=t(i,r,e);n.has(a)||n.set(a,i)}return Array.from(n.values())}function na(e,t){return function(...n){return e.apply(this,n.slice(0,t))}}function ra(e){return e}function ia(e){return Number.isSafeInteger(e)&&e>=0}function aa(e){return e!=null&&typeof e!=`function`&&ia(e.length)}function z(e){return function(t){return _r(t,e)}}function oa(e){return e==null||typeof e!=`object`&&typeof e!=`function`}function sa(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ca(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function la(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:Object.prototype.toString.call(e)}var ua=`[object RegExp]`,da=`[object String]`,fa=`[object Number]`,pa=`[object Boolean]`,ma=`[object Arguments]`,ha=`[object Symbol]`,ga=`[object Date]`,_a=`[object Map]`,va=`[object Set]`,ya=`[object Array]`,ba=`[object Function]`,xa=`[object ArrayBuffer]`,Sa=`[object Object]`,Ca=`[object Error]`,wa=`[object DataView]`,Ta=`[object Uint8Array]`,Ea=`[object Uint8ClampedArray]`,Da=`[object Uint16Array]`,Oa=`[object Uint32Array]`,ka=`[object BigUint64Array]`,Aa=`[object Int8Array]`,ja=`[object Int16Array]`,Ma=`[object Int32Array]`,Na=`[object BigInt64Array]`,Pa=`[object Float32Array]`,Fa=`[object Float64Array]`,Ia=typeof globalThis==`object`&&globalThis||typeof window==`object`&&window||typeof self==`object`&&self||typeof global==`object`&&global||(function(){return this})();function La(e){return Ia.Buffer!==void 0&&Ia.Buffer.isBuffer(e)}function Ra(e,t){return za(e,void 0,e,new Map,t)}function za(e,t,n,r=new Map,i=void 0){let a=i?.(e,t,n,r);if(a!==void 0)return a;if(oa(e))return e;if(r.has(e))return r.get(e);if(Array.isArray(e)){let t=Array(e.length);r.set(e,t);for(let a=0;a<e.length;a++)t[a]=za(e[a],a,n,r,i);return Object.hasOwn(e,`index`)&&(t.index=e.index),Object.hasOwn(e,`input`)&&(t.input=e.input),t}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp){let t=new RegExp(e.source,e.flags);return t.lastIndex=e.lastIndex,t}if(e instanceof Map){let t=new Map;r.set(e,t);for(let[a,o]of e)t.set(a,za(o,a,n,r,i));return t}if(e instanceof Set){let t=new Set;r.set(e,t);for(let a of e)t.add(za(a,void 0,n,r,i));return t}if(La(e))return e.subarray();if(sa(e)){let t=new(Object.getPrototypeOf(e)).constructor(e.length);r.set(e,t);for(let a=0;a<e.length;a++)t[a]=za(e[a],a,n,r,i);return t}if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&e instanceof SharedArrayBuffer)return e.slice(0);if(e instanceof DataView){let t=new DataView(e.buffer.slice(0),e.byteOffset,e.byteLength);return r.set(e,t),Ba(t,e,n,r,i),t}if(typeof File<`u`&&e instanceof File){let t=new File([e],e.name,{type:e.type});return r.set(e,t),Ba(t,e,n,r,i),t}if(typeof Blob<`u`&&e instanceof Blob){let t=new Blob([e],{type:e.type});return r.set(e,t),Ba(t,e,n,r,i),t}if(e instanceof Error){let t=structuredClone(e);return r.set(e,t),t.message=e.message,t.name=e.name,t.stack=e.stack,t.cause=e.cause,t.constructor=e.constructor,Ba(t,e,n,r,i),t}if(e instanceof Boolean){let t=new Boolean(e.valueOf());return r.set(e,t),Ba(t,e,n,r,i),t}if(e instanceof Number){let t=new Number(e.valueOf());return r.set(e,t),Ba(t,e,n,r,i),t}if(e instanceof String){let t=new String(e.valueOf());return r.set(e,t),Ba(t,e,n,r,i),t}if(typeof e==`object`&&Va(e)){let t=Object.create(Object.getPrototypeOf(e));return r.set(e,t),Ba(t,e,n,r,i),t}return e}function Ba(e,t,n=e,r,i){let a=[...Object.keys(t),...ca(t)];for(let o=0;o<a.length;o++){let s=a[o],c=Object.getOwnPropertyDescriptor(e,s);(c==null||c.writable)&&(e[s]=za(t[s],s,n,r,i))}}function Va(e){switch(la(e)){case ma:case ya:case xa:case wa:case pa:case ga:case Pa:case Fa:case Aa:case ja:case Ma:case _a:case fa:case Sa:case ua:case va:case da:case ha:case Ta:case Ea:case Da:case Oa:return!0;default:return!1}}function Ha(e){return za(e,void 0,e,new Map,void 0)}function Ua(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function Wa(e){return e!==null&&(typeof e==`object`||typeof e==`function`)}function Ga(e,t,n){return typeof n==`function`?Ka(e,t,function e(t,r,i,a,o,s){let c=n(t,r,i,a,o,s);return c===void 0?Ka(t,r,e,s,!1):!!c},new Map,!0):Ga(e,t,()=>void 0)}function Ka(e,t,n,r,i=!1){if(t===e)return!0;switch(typeof t){case`object`:return qa(e,t,n,r,i);case`function`:return Object.keys(t).length>0?Ka(e,{...t},n,r,i):Ua(e,t);default:return Wa(e)&&i?typeof t!=`string`||t===``:Ua(e,t)}}function qa(e,t,n,r,i=!1){if(t==null)return!0;if(Array.isArray(t))return Ya(e,t,n,r);if(t instanceof Map)return Ja(e,t,n,r);if(t instanceof Set)return Xa(e,t,n,r);let a=Object.keys(t);if(e==null)return i&&a.length===0;if(i)oa(e)&&(e=Object(e));else{let t=la(e);if(t!==`[object Object]`&&t!==`[object Arguments]`)return!1}if(a.length===0)return!0;if(r?.has(t))return r.get(t)===e;r?.set(t,e);try{for(let i=0;i<a.length;i++){let o=a[i];if(!(o in e)||t[o]===void 0&&e[o]!==void 0||t[o]===null&&e[o]!==null||!n(e[o],t[o],o,e,t,r))return!1}return!0}finally{r?.delete(t)}}function Ja(e,t,n,r){if(t.size===0)return!0;if(!(e instanceof Map))return!1;for(let[i,a]of t.entries())if(n(e.get(i),a,i,e,t,r)===!1)return!1;return!0}function Ya(e,t,n,r){if(t.length===0)return!0;if(!Array.isArray(e))return!1;let i=new Set;for(let a=0;a<t.length;a++){let o=t[a],s=!1;for(let c=0;c<e.length;c++){if(i.has(c))continue;let l=e[c],u=!1;if(n(l,o,a,e,t,r)&&(u=!0),u){i.add(c),s=!0;break}}if(!s)return!1}return!0}function Xa(e,t,n,r){return t.size===0||e instanceof Set&&Ya([...e],[...t],n,r)}function Za(e,t){return Ga(e,t,()=>void 0)}function Qa(e){return e=Ha(e),t=>Za(t,e)}function $a(e,t){return Ra(e,(n,r,i,a)=>{let o=t?.(n,r,i,a);if(o!==void 0)return o;if(typeof e==`object`){if(la(e)===`[object Object]`&&typeof e.constructor!=`function`){let t={};return a.set(e,t),Ba(t,e,i,a),t}switch(Object.prototype.toString.call(e)){case fa:case da:case pa:{let t=new e.constructor(e?.valueOf());return Ba(t,e),t}case ma:{let t={};return Ba(t,e),t.length=e.length,t[Symbol.iterator]=e[Symbol.iterator],t}default:return}}})}function eo(e){return $a(e)}var to=/^(?:0|[1-9]\d*)$/;function no(e,t=2**53-1){switch(typeof e){case`number`:return Number.isInteger(e)&&e>=0&&e<t;case`symbol`:return!1;case`string`:return to.test(e)}}function ro(e){return typeof e==`object`&&!!e&&la(e)===`[object Arguments]`}function io(e,t){let n;if(n=Array.isArray(t)?t:typeof t==`string`&&dr(t)&&!(t in Object(e))?gr(t):[t],n.length===0)return!1;let r=e;for(let e=0;e<n.length;e++){let t=fr(n[e]);if((r==null||!Object.hasOwn(r,t))&&!((Array.isArray(r)||ro(r))&&no(t)&&Number(t)<r.length))return!1;r=r[t]}return!0}function ao(e,t){switch(typeof e){case`object`:Object.is(e?.valueOf(),-0)&&(e=`-0`);break;case`number`:e=fr(e)}return t=eo(t),function(n){let r=_r(n,e);return r===void 0?io(n,e):t===void 0?r===void 0:Za(r,t)}}function oo(e){if(e==null)return ra;switch(typeof e){case`function`:return e;case`object`:return Array.isArray(e)&&e.length===2?ao(e[0],e[1]):Qa(e);default:return z(e)}}function so(e){return e===0?0:e}function co(e,t=ra){return aa(e)?ta(Array.from(e),na(oo(t),1)).map(so):[]}function lo(e,t,n){return t===!0?co(e,n):typeof t==`function`?co(e,t):e}var uo=o((e=>{var t=d();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return o(function(){c.value=n,c.getSnapshot=t,l(c)&&u({inst:c})},[e,n,t]),a(function(){return l(c)&&u({inst:c}),e(function(){l(c)&&u({inst:c})})},[e]),s(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function u(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?u:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),fo=o(((e,t)=>{t.exports=uo()})),po=o((e=>{var t=d(),n=fo();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useSyncExternalStore,o=t.useRef,s=t.useEffect,c=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var d=o(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return s=t}return s=e}if(t=s,i(o,e))return t;var n=r(e);return u!==void 0&&u(t,n)?(o=e,t):(o=e,s=n)}var a=!1,o,s,c=n===void 0?null:n;return[function(){return e(t())},c===null?void 0:function(){return e(c())}]},[t,n,r,u]);var p=a(e,d[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}})),mo=o(((e,t)=>{t.exports=po()})),ho=(0,v.createContext)(null),go=mo(),_o=e=>e,vo=()=>{var e=(0,v.useContext)(ho);return e?e.store.dispatch:_o},yo=()=>{},bo=()=>yo,xo=(e,t)=>e===t;function B(e){var t=(0,v.useContext)(ho),n=(0,v.useMemo)(()=>t?t=>{if(t!=null)return e(t)}:yo,[t,e]);return(0,go.useSyncExternalStoreWithSelector)(t?t.subscription.addNestedSub:bo,t?t.store.getState:yo,t?t.store.getState:yo,n,xo)}function So(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!=`function`)throw TypeError(t)}function Co(e,t=`expected all items to be functions, instead received the following types: `){if(!e.every(e=>typeof e==`function`)){let n=e.map(e=>typeof e==`function`?`function ${e.name||`unnamed`}()`:typeof e).join(`, `);throw TypeError(`${t}[${n}]`)}}var wo=e=>Array.isArray(e)?e:[e];function To(e){let t=Array.isArray(e[0])?e[0]:e;return Co(t,`createSelector expects all input-selectors to be functions, but received the following types: `),t}function Eo(e,t){let n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var Do=class{constructor(e){this.value=e}deref(){return this.value}},Oo=typeof WeakRef>`u`?Do:WeakRef,ko=0,Ao=1;function jo(){return{s:ko,v:void 0,o:null,p:null}}function Mo(e){return e instanceof Oo?e.deref():e}function No(e,t={}){let n=jo(),{resultEqualityCheck:r}=t,i,a=0;function o(){let t=n,{length:o}=arguments;for(let e=0,n=o;e<n;e++){let n=arguments[e];if(typeof n==`function`||typeof n==`object`&&n){let e=t.o;e===null&&(t.o=e=new WeakMap);let r=e.get(n);r===void 0?(t=jo(),e.set(n,t)):t=r}else{let e=t.p;e===null&&(t.p=e=new Map);let r=e.get(n);r===void 0?(t=jo(),e.set(n,t)):t=r}}let s=t,c;if(t.s===Ao)c=t.v;else if(c=e.apply(null,arguments),a++,r){let e=Mo(i);e!=null&&r(e,c)&&(c=e,a!==0&&a--),i=typeof c==`object`&&c||typeof c==`function`?new Oo(c):c}return s.s=Ao,s.v=c,c}return o.clearCache=()=>{n=jo(),o.resetResultsCount()},o.resultsCount=()=>a,o.resetResultsCount=()=>{a=0},o}function Po(e,...t){let n=typeof e==`function`?{memoize:e,memoizeOptions:t}:e,r=(...e)=>{let t=0,r=0,i,a={},o=e.pop();typeof o==`object`&&(a=o,o=e.pop()),So(o,`createSelector expects an output function after the inputs, but received: [${typeof o}]`);let{memoize:s,memoizeOptions:c=[],argsMemoize:l=No,argsMemoizeOptions:u=[]}={...n,...a},d=wo(c),f=wo(u),p=To(e),m=s(function(){return t++,o.apply(null,arguments)},...d),h=l(function(){r++;let e=Eo(p,arguments);return i=m.apply(null,e),i},...f);return Object.assign(h,{resultFunc:o,memoizedResultFunc:m,dependencies:p,dependencyRecomputations:()=>r,resetDependencyRecomputations:()=>{r=0},lastResult:()=>i,recomputations:()=>t,resetRecomputations:()=>{t=0},memoize:s,argsMemoize:l})};return Object.assign(r,{withTypes:()=>r}),r}var V=Po(No);function Fo(e,t=1){let n=[],r=Math.floor(t),i=(e,t)=>{for(let a=0;a<e.length;a++){let o=e[a];Array.isArray(o)&&t<r?i(o,t+1):n.push(o)}};return i(e,0),n}function Io(e,t,n){return Wa(n)&&(typeof t==`number`&&aa(n)&&no(t)&&t<n.length||typeof t==`string`&&t in n)?Ua(n[t],e):!1}function Lo(e){return typeof e==`symbol`?1:e===null?2:e===void 0?3:e===e?0:4}var Ro=(e,t,n)=>{if(e!==t){let r=Lo(e),i=Lo(t);if(r===i&&r===0){if(e<t)return n===`desc`?1:-1;if(e>t)return n===`desc`?-1:1}return n===`desc`?i-r:r-i}return 0},zo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bo=/^\w*$/;function Vo(e,t){return Array.isArray(e)?!1:typeof e==`number`||typeof e==`boolean`||e==null||pr(e)?!0:typeof e==`string`&&(Bo.test(e)||!zo.test(e))||t!=null&&Object.hasOwn(t,e)}function H(e,t,n,r){if(e==null)return[];n=r?void 0:n,Array.isArray(e)||(e=aa(e)?Array.from(e):Object.values(e)),Array.isArray(t)||(t=t==null?[null]:[t]),t.length===0&&(t=[null]),Array.isArray(n)||(n=n==null?[]:[n]),n=n.map(e=>String(e));let i=(e,t)=>{let n=e,r=0;for(;r<t.length&&n!=null;++r)n=n[t[r]];return r>0&&r===t.length?n:void 0},a=(e,t)=>{if(e==null)return t;if(t!=null)return typeof e==`object`&&`key`in e?Object.hasOwn(t,e.key)?t[e.key]:i(t,e.path):typeof e==`function`?e(t):Array.isArray(e)?i(t,e):t[e]},o=t.map(e=>(Array.isArray(e)&&e.length===1&&(e=e[0]),e==null||typeof e==`function`||Array.isArray(e)||Vo(e)?e:{key:e,path:gr(e)}));return e.map(e=>({original:e,criteria:o.map(t=>a(t,e))})).slice().sort((e,t)=>{for(let r=0;r<o.length;r++){let i=Ro(e.criteria[r],t.criteria[r],n[r]);if(i!==0)return i}return 0}).map(e=>e.original)}function U(e,...t){let n=t.length;return n>1&&Io(e,t[0],t[1])?t=[]:n>2&&Io(t[0],t[1],t[2])&&(t=[t[0]]),H(e,Fo(t),[`asc`])}var Ho=e=>e.legend.settings,Uo=e=>e.legend.size;V([e=>e.legend.payload,Ho],(e,t)=>{var n=t.itemSorter,r=e.flat(1);return n?U(r,n):r});function Wo(e,t){return Yo(e)||Jo(e,t)||Ko(e,t)||Go()}function Go(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ko(e,t){if(e){if(typeof e==`string`)return qo(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qo(e,t):void 0}}function qo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Jo(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Yo(e){if(Array.isArray(e))return e}var Xo=1;function Zo(e,t){return Math.abs(e.height-t.height)>Xo||Math.abs(e.left-t.left)>Xo||Math.abs(e.top-t.top)>Xo||Math.abs(e.width-t.width)>Xo}function Qo(e){var t=e.getBoundingClientRect();return{height:t.height,left:t.left,top:t.top,width:t.width}}function $o(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=Wo((0,v.useState)({height:0,left:0,top:0,width:0}),2),n=t[0],r=t[1],i=(0,v.useRef)(null),a=(0,v.useRef)(n);a.current=n;var o=(0,v.useCallback)(e=>{if(i.current!=null&&(i.current.disconnect(),i.current=null),e!=null){var t=Qo(e);if(Zo(t,a.current)&&r(t),typeof ResizeObserver<`u`){var n=new ResizeObserver(()=>{var t=Qo(e);Zo(t,a.current)&&r(t)});n.observe(e),i.current=n}}},[...e]);return(0,v.useEffect)(()=>()=>{var e;(e=i.current)==null||e.disconnect()},[]),[n,o]}function es(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ts=typeof Symbol==`function`&&Symbol.observable||`@@observable`,ns=()=>Math.random().toString(36).substring(7).split(``).join(`.`),rs={INIT:`@@redux/INIT${ns()}`,REPLACE:`@@redux/REPLACE${ns()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ns()}`};function is(e){if(typeof e!=`object`||!e)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function as(e,t,n){if(typeof e!=`function`)throw Error(es(2));if(typeof t==`function`&&typeof n==`function`||typeof n==`function`&&typeof arguments[3]==`function`)throw Error(es(0));if(typeof t==`function`&&n===void 0&&(n=t,t=void 0),n!==void 0){if(typeof n!=`function`)throw Error(es(1));return n(as)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,c=!1;function l(){o===a&&(o=new Map,a.forEach((e,t)=>{o.set(t,e)}))}function u(){if(c)throw Error(es(3));return i}function d(e){if(typeof e!=`function`)throw Error(es(4));if(c)throw Error(es(5));let t=!0;l();let n=s++;return o.set(n,e),function(){if(t){if(c)throw Error(es(6));t=!1,l(),o.delete(n),a=null}}}function f(e){if(!is(e))throw Error(es(7));if(e.type===void 0)throw Error(es(8));if(typeof e.type!=`string`)throw Error(es(17));if(c)throw Error(es(9));try{c=!0,i=r(i,e)}finally{c=!1}return(a=o).forEach(e=>{e()}),e}function p(e){if(typeof e!=`function`)throw Error(es(10));r=e,f({type:rs.REPLACE})}function m(){let e=d;return{subscribe(t){if(typeof t!=`object`||!t)throw Error(es(11));function n(){let e=t;e.next&&e.next(u())}return n(),{unsubscribe:e(n)}},[ts](){return this}}}return f({type:rs.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[ts]:m}}function os(e){Object.keys(e).forEach(t=>{let n=e[t];if(n(void 0,{type:rs.INIT})===void 0)throw Error(es(12));if(n(void 0,{type:rs.PROBE_UNKNOWN_ACTION()})===void 0)throw Error(es(13))})}function ss(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof e[i]==`function`&&(n[i]=e[i])}let r=Object.keys(n),i;try{os(n)}catch(e){i=e}return function(e={},t){if(i)throw i;let a=!1,o={};for(let i=0;i<r.length;i++){let s=r[i],c=n[s],l=e[s],u=c(l,t);if(u===void 0)throw t&&t.type,Error(es(14));o[s]=u,a||=u!==l}return a||=r.length!==Object.keys(e).length,a?o:e}}function cs(...e){return e.length===0?e=>e:e.length===1?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function ls(...e){return t=>(n,r)=>{let i=t(n,r),a=()=>{throw Error(es(15))},o={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=cs(...e.map(e=>e(o)))(i.dispatch),{...i,dispatch:a}}}function us(e){return is(e)&&`type`in e&&typeof e.type==`string`}var ds=Symbol.for(`immer-nothing`),fs=Symbol.for(`immer-draftable`),ps=Symbol.for(`immer-state`);function ms(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var hs=Object,gs=hs.getPrototypeOf,_s=`constructor`,vs=`prototype`,ys=`configurable`,bs=`enumerable`,xs=`writable`,Ss=`value`,Cs=e=>!!e&&!!e[ps];function ws(e){return e?Ds(e)||Ps(e)||!!e[fs]||!!e[_s]?.[fs]||Fs(e)||Is(e):!1}var Ts=hs[vs][_s].toString(),Es=new WeakMap;function Ds(e){if(!e||!Ls(e))return!1;let t=gs(e);if(t===null||t===hs[vs])return!0;let n=hs.hasOwnProperty.call(t,_s)&&t[_s];if(n===Object)return!0;if(!Rs(n))return!1;let r=Es.get(n);return r===void 0&&(r=Function.toString.call(n),Es.set(n,r)),r===Ts}function Os(e,t,n=!0){ks(e)===0?(n?Reflect.ownKeys(e):hs.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function ks(e){let t=e[ps];return t?t.type_:Ps(e)?1:Fs(e)?2:Is(e)?3:0}var As=(e,t,n=ks(e))=>n===2?e.has(t):hs[vs].hasOwnProperty.call(e,t),js=(e,t,n=ks(e))=>n===2?e.get(t):e[t],Ms=(e,t,n,r=ks(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Ns(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var Ps=Array.isArray,Fs=e=>e instanceof Map,Is=e=>e instanceof Set,Ls=e=>typeof e==`object`,Rs=e=>typeof e==`function`,zs=e=>typeof e==`boolean`;function Bs(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var Vs=e=>e.copy_||e.base_,Hs=e=>e.modified_?e.copy_:e.base_;function Us(e,t){if(Fs(e))return new Map(e);if(Is(e))return new Set(e);if(Ps(e))return Array[vs].slice.call(e);let n=Ds(e);if(t===!0||t===`class_only`&&!n){let t=hs.getOwnPropertyDescriptors(e);delete t[ps];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[xs]===!1&&(a[xs]=!0,a[ys]=!0),(a.get||a.set)&&(t[i]={[ys]:!0,[xs]:!0,[bs]:a[bs],[Ss]:e[i]})}return hs.create(gs(e),t)}{let t=gs(e);if(t!==null&&n)return{...e};let r=hs.create(t);return hs.assign(r,e)}}function Ws(e,t=!1){return qs(e)||Cs(e)||!ws(e)?e:(ks(e)>1&&hs.defineProperties(e,{set:Ks,add:Ks,clear:Ks,delete:Ks}),hs.freeze(e),t&&Os(e,(e,t)=>{Ws(t,!0)},!1),e)}function Gs(){ms(2)}var Ks={[Ss]:Gs};function qs(e){return e===null||!Ls(e)||hs.isFrozen(e)}var Js=`MapSet`,Ys=`Patches`,Xs=`ArrayMethods`,Zs={};function Qs(e){let t=Zs[e];return t||ms(0,e),t}var $s=e=>!!Zs[e],ec,tc=()=>ec,nc=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:$s(Js)?Qs(Js):void 0,arrayMethodsPlugin_:$s(Xs)?Qs(Xs):void 0});function rc(e,t){t&&(e.patchPlugin_=Qs(Ys),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ic(e){ac(e),e.drafts_.forEach(sc),e.drafts_=null}function ac(e){e===ec&&(ec=e.parent_)}var oc=e=>ec=nc(ec,e);function sc(e){let t=e[ps];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function cc(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[ps].modified_&&(ic(t),ms(4)),ws(e)&&(e=lc(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[ps].base_,e,t)}else e=lc(t,n);return uc(t,e,!0),ic(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===ds?void 0:e}function lc(e,t){if(qs(t))return t;let n=t[ps];if(!n)return vc(t,e.handledSet_,e);if(!fc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);gc(n,e)}return n.copy_}function uc(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ws(t,n)}function dc(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var fc=(e,t)=>e.scope_===t,pc=[];function mc(e,t,n,r){let i=Vs(e),a=e.type_;if(r!==void 0&&js(i,r,a)===t){Ms(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;Os(i,(e,n)=>{if(Cs(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??pc;for(let e of o)Ms(i,e,n,a)}function hc(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!fc(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=Hs(i);mc(e,i.draft_??i,a,n),gc(i,r)})}function gc(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}dc(e)}}function _c(e,t,n){let{scope_:r}=e;if(Cs(n)){let i=n[ps];fc(i,r)&&i.callbacks_.push(function(){Dc(e),mc(e,n,Hs(i),t)})}else ws(n)&&e.callbacks_.push(function(){let i=Vs(e);e.type_===3?i.has(n)&&vc(n,r.handledSet_,r):js(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&vc(js(e.copy_,t,e.type_),r.handledSet_,r)})}function vc(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Cs(e)||t.has(e)||!ws(e)||qs(e)?e:(t.add(e),Os(e,(r,i)=>{if(Cs(i)){let t=i[ps];fc(t,n)&&(Ms(e,r,Hs(t),e.type_),dc(t))}else ws(i)&&vc(i,t,n)}),e)}function yc(e,t){let n=Ps(e),r={type_:+!!n,scope_:t?t.scope_:tc(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=bc;n&&(i=[r],a=xc);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var bc={get(e,t){if(t===ps)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=Vs(e);if(!As(i,t,e.type_))return wc(e,i,t);let a=i[t];if(e.finalized_||!ws(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&Bs(t))return a;if(a===Sc(e.base_,t)||Cc(e,t,a)){Dc(e);let n=e.type_===1?+t:t,r=kc(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in Vs(e)},ownKeys(e){return Reflect.ownKeys(Vs(e))},set(e,t,n){let r=Tc(Vs(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=Sc(Vs(e),t),i=r?.[ps];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.delete(t),!0;if(Ns(n,r)&&(n!==void 0||As(e.base_,t,e.type_)))return!0;Dc(e),Ec(e)}return e.copy_[t]===n&&(n!==void 0||As(e.copy_,t,e.type_))||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),_c(e,t,n),!0)},deleteProperty(e,t){return Dc(e),Sc(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Ec(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=Vs(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[xs]:!0,[ys]:e.type_!==1||t!==`length`,[bs]:r[bs],[Ss]:n[t]}},defineProperty(){ms(11)},getPrototypeOf(e){return gs(e.base_)},setPrototypeOf(){ms(12)}},xc={};for(let e in bc){let t=bc[e];xc[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}xc.deleteProperty=function(e,t){return xc.set.call(this,e,t,void 0)},xc.set=function(e,t,n){return bc.set.call(this,e[0],t,n,e[0])};function Sc(e,t){let n=e[ps];return(n?Vs(n):e)[t]}function Cc(e,t,n){return e.type_!==1||!e.allIndicesReassigned_||e.assigned_?.get(t)||!ws(n)||n[ps]?!1:e.baseRefs_.has(n)}function wc(e,t,n){let r=Tc(t,n);return r?Ss in r?r[Ss]:r.get?.call(e.draft_):void 0}function Tc(e,t){if(!(t in e))return;let n=gs(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=gs(n)}}function Ec(e){e.modified_||(e.modified_=!0,e.parent_&&Ec(e.parent_))}function Dc(e){e.copy_||=(e.assigned_=new Map,Us(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Oc=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(Rs(e)&&!Rs(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}Rs(t)||ms(6),n!==void 0&&!Rs(n)&&ms(7);let r;if(ws(e)){let i=oc(this),a=kc(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?ic(i):ac(i)}return rc(i,n),cc(r,i)}if(!e||!Ls(e)){if(r=t(e),r===void 0&&(r=e),r===ds&&(r=void 0),this.autoFreeze_&&Ws(r,!0),n){let t=[],i=[];Qs(Ys).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}ms(1,e)},this.produceWithPatches=(e,t)=>{if(Rs(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},zs(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),zs(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),zs(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){ws(e)||ms(8),Cs(e)&&(e=Ac(e));let t=oc(this),n=kc(t,e,void 0);return n[ps].isManual_=!0,ac(t),n}finishDraft(e,t){let n=e&&e[ps];(!n||!n.isManual_)&&ms(9);let{scope_:r}=n;return rc(r,t),cc(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=Qs(Ys).applyPatches_;return Cs(e)?r(e,t):this.produce(e,e=>r(e,t))}};function kc(e,t,n,r){let[i,a]=Fs(t)?Qs(Js).proxyMap_(t,n):Is(t)?Qs(Js).proxySet_(t,n):yc(t,n);return(n?.scope_??tc()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?hc(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function Ac(e){return Cs(e)||ms(10,e),jc(e)}function jc(e){if(!ws(e)||qs(e))return e;let t=e[ps],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Us(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Us(e,!0);return Os(n,(e,t)=>{Ms(n,e,jc(t))},r),t&&(t.finalized_=!1),n}globalThis.Iterator?.from;var Mc=new Oc().produce,W=e=>e;function Nc(e){return({dispatch:t,getState:n})=>r=>i=>typeof i==`function`?i(t,n,e):r(i)}var Pc=Nc(),Fc=Nc,Ic=typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]==`object`?cs:cs.apply(null,arguments)};typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function Lc(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw Error(Kl(0));return{type:e,payload:r.payload,...`meta`in r&&{meta:r.meta},...`error`in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>us(t)&&t.type===e,n}var Rc=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function zc(e){return ws(e)?Mc(e,()=>{}):e}function Bc(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function Vc(e){return typeof e==`boolean`}var Hc=()=>function(e){let{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{},a=new Rc;return t&&(Vc(t)?a.push(Pc):a.push(Fc(t.extraArgument))),a},Uc=`RTK_autoBatch`,Wc=()=>e=>({payload:e,meta:{[Uc]:!0}}),Gc=e=>t=>{setTimeout(t,e)},Kc=(e,t)=>n=>{let r=!1,i,a,o=()=>{r||(r=!0,cancelAnimationFrame(i),clearTimeout(a),n())};i=e(o),a=setTimeout(o,t)},qc=(e={type:`raf`})=>t=>(...n)=>{let r=t(...n),i=!0,a=!1,o=!1,s=new Set,c=e.type===`tick`?queueMicrotask:e.type===`raf`?typeof window<`u`&&window.requestAnimationFrame?Kc(window.requestAnimationFrame,100):Gc(10):e.type===`callback`?e.queueNotification:Gc(e.timeout),l=()=>{o=!1,a&&(a=!1,s.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){let t=r.subscribe(()=>i&&e());return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return i=!e?.meta?.[Uc],a=!i,a&&(o||(o=!0,c(l))),r.dispatch(e)}finally{i=!0}}})},Jc=e=>function(t){let{autoBatch:n=!0}=t??{},r=new Rc(e);return n&&r.push(qc(typeof n==`object`?n:void 0)),r};function Yc(e){let t=Hc(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{},c;if(typeof n==`function`)c=n;else if(is(n))c=ss(n);else throw Error(Kl(1));let l;l=typeof r==`function`?r(t):t();let u=cs;i&&(u=Ic({trace:!1,...typeof i==`object`&&i}));let d=Jc(ls(...l)),f=typeof s==`function`?s(d):d(),p=u(...f);return as(c,o,p)}function Xc(e){let t={},n=[],r,i={addCase(e,n){let r=typeof e==`string`?e:e.type;if(!r)throw Error(Kl(28));if(r in t)throw Error(Kl(29));return t[r]=n,i},addAsyncThunk(e,r){return r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),i},addMatcher(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase(e){return r=e,i}};return e(i),[t,n,r]}function Zc(e){return typeof e==`function`}function Qc(e,t){let[n,r,i]=Xc(t),a;if(Zc(e))a=()=>zc(e());else{let t=zc(e);a=()=>t}function o(e=a(),t){let o=[n[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return o.filter(e=>!!e).length===0&&(o=[i]),o.reduce((e,n)=>{if(n){if(Cs(e)){let r=n(e,t);return r===void 0?e:r}if(ws(e))return Mc(e,e=>n(e,t));{let r=n(e,t);if(r===void 0){if(e===null)return e;throw Error(Kl(9))}return r}}return e},e)}return o.getInitialState=a,o}var $c=`ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,el=(e=21)=>{let t=``,n=e;for(;n--;)t+=$c[Math.random()*64|0];return t},tl=Symbol.for(`rtk-slice-createasyncthunk`);function nl(e,t){return`${e}/${t}`}function rl({creators:e}={}){let t=e?.asyncThunk?.[tl];return function(e){let{name:n,reducerPath:r=n}=e;if(!n)throw Error(Kl(11));let i=(typeof e.reducers==`function`?e.reducers(ol()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){let n=typeof e==`string`?e:e.type;if(!n)throw Error(Kl(12));if(n in o.sliceCaseReducersByType)throw Error(Kl(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher(e,t){return o.sliceMatchers.push({matcher:e,reducer:t}),s},exposeAction(e,t){return o.actionCreators[e]=t,s},exposeCaseReducer(e,t){return o.sliceCaseReducersByName[e]=t,s}};a.forEach(r=>{let a=i[r],o={reducerName:r,type:nl(n,r),createNotation:typeof e.reducers==`function`};cl(a)?ul(o,a,s,t):sl(o,a,s)});function c(){let[t={},n=[],r=void 0]=typeof e.extraReducers==`function`?Xc(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return Qc(e.initialState,e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}let l=e=>e,u=new Map,d=new WeakMap,f;function p(e,t){return f||=c(),f(e,t)}function m(){return f||=c(),f.getInitialState()}function h(t,n=!1){function r(e){let i=e[t];return i===void 0&&n&&(i=Bc(d,r,m)),i}function i(t=l){return Bc(Bc(u,n,()=>new WeakMap),t,()=>{let r={};for(let[i,a]of Object.entries(e.selectors??{}))r[i]=il(a,t,()=>Bc(d,t,m),n);return r})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}let g={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){let i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...g,...h(i,!0)}}};return g}}function il(e,t,n,r){function i(i,...a){let o=t(i);return o===void 0&&r&&(o=n()),e(o,...a)}return i.unwrapped=e,i}var al=rl();function ol(){function e(e,t){return{_reducerDefinitionType:`asyncThunk`,payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:`reducer`})},preparedReducer(e,t){return{_reducerDefinitionType:`reducerWithPrepare`,prepare:e,reducer:t}},asyncThunk:e}}function sl({type:e,reducerName:t,createNotation:n},r,i){let a,o;if(`reducer`in r){if(n&&!ll(r))throw Error(Kl(17));a=r.reducer,o=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?Lc(e,o):Lc(e))}function cl(e){return e._reducerDefinitionType===`asyncThunk`}function ll(e){return e._reducerDefinitionType===`reducerWithPrepare`}function ul({type:e,reducerName:t},n,r,i){if(!i)throw Error(Kl(18));let{payloadCreator:a,fulfilled:o,pending:s,rejected:c,settled:l,options:u}=n,d=i(e,a,u);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),s&&r.addCase(d.pending,s),c&&r.addCase(d.rejected,c),l&&r.addMatcher(d.settled,l),r.exposeCaseReducer(t,{fulfilled:o||dl,pending:s||dl,rejected:c||dl,settled:l||dl})}function dl(){}var fl=`task`,pl=`listener`,ml=`completed`,hl=`cancelled`,gl=`task-${hl}`,_l=`task-${ml}`,vl=`${pl}-${hl}`,yl=`${pl}-${ml}`,bl=class{code;name=`TaskAbortError`;message;constructor(e){this.code=e,this.message=`${fl} ${hl} (reason: ${e})`}},xl=(e,t)=>{if(typeof e!=`function`)throw TypeError(Kl(32))},Sl=()=>{},Cl=(e,t=Sl)=>(e.catch(t),e),wl=(e,t)=>(e.addEventListener(`abort`,t,{once:!0}),()=>e.removeEventListener(`abort`,t)),Tl=e=>{if(e.aborted)throw new bl(e.reason)};function El(e,t){let n=Sl;return new Promise((r,i)=>{let a=()=>i(new bl(e.reason));if(e.aborted){a();return}n=wl(e,a),t.finally(()=>n()).then(r,i)}).finally(()=>{n=Sl})}var Dl=async(e,t)=>{try{return await Promise.resolve(),{status:`ok`,value:await e()}}catch(e){return{status:e instanceof bl?`cancelled`:`rejected`,error:e}}finally{t?.()}},Ol=e=>t=>Cl(El(e,t).then(t=>(Tl(e),t))),kl=e=>{let t=Ol(e);return e=>t(new Promise(t=>setTimeout(t,e)))},{assign:Al}=Object,jl={},Ml=`listenerMiddleware`,Nl=(e,t)=>{let n=t=>wl(e,()=>t.abort(e.reason));return(r,i)=>{xl(r,`taskExecutor`);let a=new AbortController;n(a);let o=Dl(async()=>{Tl(e),Tl(a.signal);let t=await r({pause:Ol(a.signal),delay:kl(a.signal),signal:a.signal});return Tl(a.signal),t},()=>a.abort(_l));return i?.autoJoin&&t.push(o.catch(Sl)),{result:Ol(e)(o),cancel(){a.abort(gl)}}}},Pl=(e,t)=>{let n=async(n,r)=>{Tl(t);let i=()=>{},a=[new Promise((t,r)=>{let a=e({predicate:n,effect:(e,n)=>{n.unsubscribe(),t([e,n.getState(),n.getOriginalState()])}});i=()=>{a(),r()}})];r!=null&&a.push(new Promise(e=>setTimeout(e,r,null)));try{let e=await El(t,Promise.race(a));return Tl(t),e}finally{i()}};return((e,t)=>Cl(n(e,t)))},Fl=e=>{let{type:t,actionCreator:n,matcher:r,predicate:i,effect:a}=e;if(t)i=Lc(t).match;else if(n)t=n.type,i=n.match;else if(r)i=r;else if(!i)throw Error(Kl(21));return xl(a,`options.listener`),{predicate:i,type:t,effect:a}},Il=Al(e=>{let{type:t,predicate:n,effect:r}=Fl(e);return{id:el(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw Error(Kl(22))}}},{withTypes:()=>Il}),Ll=(e,t)=>{let{type:n,effect:r,predicate:i}=Fl(t);return Array.from(e.values()).find(e=>(typeof n==`string`?e.type===n:e.predicate===i)&&e.effect===r)},Rl=e=>{e.pending.forEach(e=>{e.abort(vl)})},zl=(e,t)=>()=>{for(let e of t.keys())Rl(e);e.clear()},Bl=(e,t,n)=>{try{e(t,n)}catch(e){setTimeout(()=>{throw e},0)}},Vl=Al(Lc(`${Ml}/add`),{withTypes:()=>Vl}),Hl=Lc(`${Ml}/removeAll`),Ul=Al(Lc(`${Ml}/remove`),{withTypes:()=>Ul}),Wl=(...e)=>{console.error(`${Ml}/error`,...e)},Gl=(e={})=>{let t=new Map,n=new Map,r=e=>{let t=n.get(e)??0;n.set(e,t+1)},i=e=>{let t=n.get(e)??1;t===1?n.delete(e):n.set(e,t-1)},{extra:a,onError:o=Wl}=e;xl(o,`onError`);let s=e=>(e.unsubscribe=()=>t.delete(e.id),t.set(e.id,e),t=>{e.unsubscribe(),t?.cancelActive&&Rl(e)}),c=(e=>{let n=Ll(t,e)??Il(e);return s(n)});Al(c,{withTypes:()=>c});let l=e=>{let n=Ll(t,e);return n&&(n.unsubscribe(),e.cancelActive&&Rl(n)),!!n};Al(l,{withTypes:()=>l});let u=async(e,n,s,l)=>{let u=new AbortController,d=Pl(c,u.signal),f=[];try{e.pending.add(u),r(e),await Promise.resolve(e.effect(n,Al({},s,{getOriginalState:l,condition:(e,t)=>d(e,t).then(Boolean),take:d,delay:kl(u.signal),pause:Ol(u.signal),extra:a,signal:u.signal,fork:Nl(u.signal,f),unsubscribe:e.unsubscribe,subscribe:()=>{t.set(e.id,e)},cancelActiveListeners:()=>{e.pending.forEach((e,t,n)=>{e!==u&&(e.abort(vl),n.delete(e))})},cancel:()=>{u.abort(vl),e.pending.delete(u)},throwIfCancelled:()=>{Tl(u.signal)}})))}catch(e){e instanceof bl||Bl(o,e,{raisedBy:`effect`})}finally{await Promise.all(f),u.abort(yl),i(e),e.pending.delete(u)}},d=zl(t,n);return{middleware:e=>n=>r=>{if(!us(r))return n(r);if(Vl.match(r))return c(r.payload);if(Hl.match(r)){d();return}if(Ul.match(r))return l(r.payload);let i=e.getState(),a=()=>{if(i===jl)throw Error(Kl(23));return i},s;try{if(s=n(r),t.size>0){let n=e.getState(),s=Array.from(t.values());for(let t of s){let s=!1;try{s=t.predicate(r,n,i)}catch(e){s=!1,Bl(o,e,{raisedBy:`predicate`})}s&&u(t,r,e,a)}}}finally{i=jl}return s},startListening:c,stopListening:l,clearListeners:d}};function Kl(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ql=al({name:`chartLayout`,initialState:{layoutType:`horizontal`,width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},reducers:{setLayout(e,t){e.layoutType=t.payload},setChartSize(e,t){e.width=t.payload.width,e.height=t.payload.height},setMargin(e,t){e.margin.top=t.payload.top??0,e.margin.right=t.payload.right??0,e.margin.bottom=t.payload.bottom??0,e.margin.left=t.payload.left??0},setScale(e,t){e.scale=t.payload}}}),Jl=ql.actions,Yl=Jl.setMargin,Xl=Jl.setLayout,Zl=Jl.setChartSize,Ql=Jl.setScale,$l=ql.reducer;function eu(e,t,n){return Array.isArray(e)&&e&&t+n!==0?e.slice(t,n+1):e}function G(e){return Number.isFinite(e)}function tu(e){return typeof e==`number`&&e>0&&Number.isFinite(e)}function nu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?nu(Object(n),!0).forEach(function(t){ru(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nu(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ru(e,t,n){return(t=iu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iu(e){var t=au(e,`string`);return typeof t==`symbol`?t:t+``}function au(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ou(e,t,n){return Mr(e)||Mr(t)?n:Tr(t)?_r(e,t,n):typeof t==`function`?t(e):n}var su=(e,t,n)=>{if(t&&n){var r=n.width,i=n.height,a=t.align,o=t.verticalAlign,s=t.layout,c=t.position,l=t.offset,u=l===void 0?0:l;if(c!=null){if(Wr(c)){if(c===`top`&&R(e.top))return K(K({},e),{},{top:e.top+(i||0)+u});if(c===`bottom`&&R(e.bottom))return K(K({},e),{},{bottom:e.bottom+(i||0)+u});if(c===`left`&&R(e.left))return K(K({},e),{},{left:e.left+(r||0)+u});if(c===`right`&&R(e.right))return K(K({},e),{},{right:e.right+(r||0)+u})}return e}if((s===`vertical`||s===`horizontal`&&o===`middle`)&&a!==`center`&&R(e[a]))return K(K({},e),{},{[a]:e[a]+(r||0)});if((s===`horizontal`||s===`vertical`&&a===`center`)&&o!==`middle`&&R(e[o]))return K(K({},e),{},{[o]:e[o]+(i||0)})}return e},cu=(e,t)=>e===`horizontal`&&t===`xAxis`||e===`vertical`&&t===`yAxis`||e===`centric`&&t===`angleAxis`||e===`radial`&&t===`radiusAxis`,lu={sign:e=>{var t=e.length;if(!(t<=0)){var n=e[0]?.length;if(!(n==null||n<=0))for(var r=0;r<n;++r)for(var i=0,a=0,o=0;o<t;++o){var s=e[o]?.[r];if(s!=null){var c=s[1],l=s[0],u=Cr(c)?l:c;u>=0?(s[0]=i,i+=u,s[1]=i):(s[0]=a,a+=u,s[1]=a)}}}},expand:Hi,none:Li,silhouette:Ui,wiggle:Wi,positive:e=>{var t=e.length;if(!(t<=0)){var n=e[0]?.length;if(!(n==null||n<=0))for(var r=0;r<n;++r)for(var i=0,a=0;a<t;++a){var o=e[a]?.[r];if(o!=null){var s=Cr(o[1])?o[0]:o[1];s>=0?(o[0]=i,i+=s,o[1]=i):(o[0]=0,o[1]=0)}}}}},uu=(e,t,n)=>{var r=lu[n]??Li,i=Vi().keys(t).value((e,t)=>Number(ou(e,t,0))).order(Ri).offset(r)(e);return i.forEach((n,r)=>{n.forEach((n,i)=>{var a=ou(e[i],t[r],0);Array.isArray(a)&&a.length===2&&R(a[0])&&R(a[1])&&(n[0]=a[0],n[1]=a[1])})}),i};function du(e){return e==null?void 0:String(e)}function fu(e){var t=e.axis,n=e.ticks,r=e.bandSize,i=e.entry,a=e.index,o=e.dataKey;if(t.type===`category`){if(!t.allowDuplicatedCategory&&t.dataKey&&!Mr(i[t.dataKey])){var s=jr(n,`value`,i[t.dataKey]);if(s)return s.coordinate+r/2}return n!=null&&n[a]?n[a].coordinate+r/2:null}var c=ou(i,Mr(o)?t.dataKey:o),l=t.scale.map(c);return R(l)?l:null}var pu=e=>{var t=e.flat(2).filter(R);return[Math.min(...t),Math.max(...t)]},mu=e=>[e[0]===1/0?0:e[0],e[1]===-1/0?0:e[1]],hu=(e,t,n)=>{if(e!=null&&Object.keys(e).length!==0)return mu(Object.keys(e).reduce((r,i)=>{var a=e[i];if(!a)return r;var o=a.stackedData.reduce((e,r)=>{var i=pu(eu(r,t,n));return!G(i[0])||!G(i[1])?e:[Math.min(e[0],i[0]),Math.max(e[1],i[1])]},[1/0,-1/0]);return[Math.min(o[0],r[0]),Math.max(o[1],r[1])]},[1/0,-1/0]))},gu=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,_u=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,vu=(e,t,n)=>{if(e&&e.scale&&e.scale.bandwidth){var r=e.scale.bandwidth();if(!n||r>0)return r}if(e&&t&&t.length>=2){for(var i=U(t,e=>e.coordinate),a=[],o=0,s=1,c=i.length;s<c;s++){var l=(i[s]?.coordinate||0)-(i[s-1]?.coordinate||0);a.push(l),o=Math.max(l,o)}var u=o*1e-4,d=1/0;for(var f of a)f>u&&(d=Math.min(f,d));return d===1/0?0:d}return n?void 0:0};function yu(e){var t=e.tooltipEntrySettings,n=e.dataKey,r=e.payload,i=e.value,a=e.name;return K(K({},t),{},{dataKey:n,payload:r,value:i,name:a})}function bu(e,t){if(e!=null)return String(e);if(typeof t==`string`)return t}var xu=(e,t)=>{if(t===`horizontal`)return e.relativeX;if(t===`vertical`)return e.relativeY},Su=(e,t)=>t===`centric`?e.angle:e.radius,Cu=e=>e.layout.width,wu=e=>e.layout.height,Tu=e=>e.layout.scale,Eu=e=>e.layout.margin,Du=V(e=>e.cartesianAxis.xAxis,e=>Object.values(e)),Ou=V(e=>e.cartesianAxis.yAxis,e=>Object.values(e)),ku=`data-recharts-item-index`;function Au(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ju(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Au(Object(n),!0).forEach(function(t){Mu(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Au(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Mu(e,t,n){return(t=Nu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nu(e){var t=Pu(e,`string`);return typeof t==`symbol`?t:t+``}function Pu(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Fu=e=>e.brush.height;function Iu(e){return Ou(e).reduce((e,t)=>t.orientation===`left`&&!t.mirror&&!t.hide?e+(typeof t.width==`number`?t.width:60):e,0)}function Lu(e){return Ou(e).reduce((e,t)=>t.orientation===`right`&&!t.mirror&&!t.hide?e+(typeof t.width==`number`?t.width:60):e,0)}function Ru(e){return Du(e).reduce((e,t)=>t.orientation===`top`&&!t.mirror&&!t.hide?e+(typeof t.height==`number`?t.height:30):e,0)}function zu(e){return Du(e).reduce((e,t)=>t.orientation===`bottom`&&!t.mirror&&!t.hide?e+(typeof t.height==`number`?t.height:30):e,0)}var Bu=V([Cu,wu,Eu,Fu,Iu,Lu,Ru,zu,Ho,Uo],(e,t,n,r,i,a,o,s,c,l)=>{var u={left:(n.left||0)+i,right:(n.right||0)+a},d=ju(ju({},{top:(n.top||0)+o,bottom:(n.bottom||0)+s}),u),f=d.bottom;d.bottom+=r,d=su(d,c,l);var p=e-d.left-d.right,m=t-d.top-d.bottom;return ju(ju({brushBottom:f},d),{},{width:Math.max(p,0),height:Math.max(m,0)})}),Vu=V(Bu,e=>({x:e.left,y:e.top,width:e.width,height:e.height})),Hu=V(Cu,wu,(e,t)=>({x:0,y:0,width:e,height:t})),Uu=(0,v.createContext)(null),Wu=()=>(0,v.useContext)(Uu)!=null,Gu=e=>e.brush,Ku=V([Gu,Bu,Eu],(e,t,n)=>({height:e.height,x:R(e.x)?e.x:t.left,y:R(e.y)?e.y:t.top+t.height+t.brushBottom-(n?.bottom||0),width:R(e.width)?e.width:t.width}));function qu(e,t,{signal:n,edges:r}={}){let i,a=null,o=r!=null&&r.includes(`leading`),s=r==null||r.includes(`trailing`),c=()=>{a!==null&&(e.apply(i,a),i=void 0,a=null)},l=()=>{s&&c(),p()},u=null,d=()=>{u!=null&&clearTimeout(u),u=setTimeout(()=>{u=null,l()},t)},f=()=>{u!==null&&(clearTimeout(u),u=null)},p=()=>{f(),i=void 0,a=null},m=()=>{c()},h=function(...e){if(n?.aborted)return;i=this,a=e;let t=u==null;d(),o&&t&&c()};return h.schedule=d,h.cancel=p,h.flush=m,n?.addEventListener(`abort`,p,{once:!0}),h}function Ju(e,t=0,n={}){typeof n!=`object`&&(n={});let{leading:r=!1,trailing:i=!0,maxWait:a}=n,o=[,,];r&&(o[0]=`leading`),i&&(o[1]=`trailing`);let s,c=null,l=qu(function(...t){s=e.apply(this,t),c=null},t,{edges:o}),u=function(...t){return a!=null&&(c===null&&(c=Date.now()),Date.now()-c>=a)?((r||i)&&(s=e.apply(this,t)),c=Date.now(),l.cancel(),l.schedule(),s):(l.apply(this,t),s)};return u.cancel=l.cancel,u.flush=()=>(l.flush(),s),u}function Yu(e,t=0,n={}){let{leading:r=!0,trailing:i=!0}=n;return Ju(e,t,{leading:r,maxWait:t,trailing:i})}var Xu=function(e,t){var n=[...arguments].slice(2);if(typeof console<`u`&&console.warn&&(t===void 0&&console.warn(`LogUtils requires an error message argument`),!e)){if(t===void 0)console.warn(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var r=0;console.warn(t.replace(/%s/g,()=>n[r++]))}}},Zu={width:`100%`,height:`100%`,debounce:0,minWidth:0,initialDimension:{width:-1,height:-1}},Qu=(e,t,n)=>{var r=n.width,i=r===void 0?Zu.width:r,a=n.height,o=a===void 0?Zu.height:a,s=n.aspect,c=n.maxHeight,l=wr(i)?e:Number(i),u=wr(o)?t:Number(o);return s&&s>0&&(l?u=l/s:u&&(l=u*s),c&&u!=null&&u>c&&(u=c)),{calculatedWidth:l,calculatedHeight:u}},$u={width:0,height:0,overflow:`visible`},ed={width:0,overflowX:`visible`},q={height:0,overflowY:`visible`},J={},td=e=>{var t=e.width,n=e.height,r=wr(t),i=wr(n);return r&&i?$u:r?ed:i?q:J};function nd(e){var t=e.width,n=e.height,r=e.aspect,i=t,a=n;return i===void 0&&a===void 0?(i=Zu.width,a=Zu.height):i===void 0?i=r&&r>0?void 0:Zu.width:a===void 0&&(a=r&&r>0?void 0:Zu.height),{width:i,height:a}}var rd=[`aspect`,`initialDimension`,`width`,`height`,`minWidth`,`minHeight`,`maxHeight`,`children`,`debounce`,`id`,`className`,`onResize`,`style`];function id(){return id=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},id.apply(null,arguments)}function ad(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function od(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ad(Object(n),!0).forEach(function(t){sd(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ad(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function sd(e,t,n){return(t=cd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cd(e){var t=ld(e,`string`);return typeof t==`symbol`?t:t+``}function ld(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ud(e,t){return hd(e)||md(e,t)||fd(e,t)||dd()}function dd(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fd(e,t){if(e){if(typeof e==`string`)return pd(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pd(e,t):void 0}}function pd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function md(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function hd(e){if(Array.isArray(e))return e}function gd(e,t){if(e==null)return{};var n,r,i=_d(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function _d(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var vd=(0,v.createContext)(Zu.initialDimension);function yd(e){return tu(e.width)&&tu(e.height)}function bd(e){var t=e.children,n=e.width,r=e.height,i=(0,v.useMemo)(()=>({width:n,height:r}),[n,r]);return yd(i)?v.createElement(vd.Provider,{value:i},t):null}var xd=()=>(0,v.useContext)(vd),Sd=(0,v.forwardRef)((e,t)=>{var n=e.aspect,r=e.initialDimension,i=r===void 0?Zu.initialDimension:r,a=e.width,o=e.height,s=e.minWidth,c=s===void 0?Zu.minWidth:s,l=e.minHeight,u=e.maxHeight,d=e.children,f=e.debounce,p=f===void 0?Zu.debounce:f,m=e.id,h=e.className,g=e.onResize,_=e.style,y=_===void 0?{}:_,b=gd(e,rd),x=(0,v.useRef)(null),S=(0,v.useRef)();S.current=g,(0,v.useImperativeHandle)(t,()=>x.current);var C=ud((0,v.useState)({containerWidth:i.width,containerHeight:i.height}),2),w=C[0],T=C[1],E=(0,v.useCallback)((e,t)=>{T(n=>{var r=Math.round(e),i=Math.round(t);return n.containerWidth===r&&n.containerHeight===i?n:{containerWidth:r,containerHeight:i}})},[]);(0,v.useEffect)(()=>{if(x.current==null||typeof ResizeObserver>`u`)return Fr;var e=e=>{var t,n=e[0];if(n!=null){var r=n.contentRect,i=r.width,a=r.height;E(i,a),(t=S.current)==null||t.call(S,i,a)}};p>0&&(e=Yu(e,p,{trailing:!0,leading:!1}));var t=new ResizeObserver(e),n=x.current.getBoundingClientRect(),r=n.width,i=n.height;return E(r,i),t.observe(x.current),()=>{t.disconnect()}},[E,p]);var D=w.containerWidth,O=w.containerHeight;Xu(!n||n>0,`The aspect(%s) must be greater than zero.`,n);var k=Qu(D,O,{width:a,height:o,aspect:n,maxHeight:u}),A=k.calculatedWidth,j=k.calculatedHeight;return Xu(D<0||O<0||A!=null&&A>0||j!=null&&j>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,A,j,a,o,c,l,n),v.createElement(`div`,id({id:m?`${m}`:void 0,className:Un(`recharts-responsive-container`,h),style:od(od({},y),{},{width:a,height:o,minWidth:c,minHeight:l,maxHeight:u}),ref:x},b),v.createElement(`div`,{style:td({width:a,height:o})},v.createElement(bd,{width:A,height:j},d)))}),Cd=(0,v.forwardRef)((e,t)=>{var n=xd();if(tu(n.width)&&tu(n.height))return e.children;var r=nd({width:e.width,height:e.height,aspect:e.aspect}),i=r.width,a=r.height,o=Qu(void 0,void 0,{width:i,height:a,aspect:e.aspect,maxHeight:e.maxHeight}),s=o.calculatedWidth,c=o.calculatedHeight;return R(s)&&R(c)?v.createElement(bd,{width:s,height:c},e.children):v.createElement(Sd,id({},e,{width:i,height:a,ref:t}))}),wd=()=>{var e=Wu(),t=B(Vu),n=B(Ku),r=B(Gu)?.padding;return!e||!n||!r?t:{width:n.width-r.left-r.right,height:n.height-r.top-r.bottom,x:r.left,y:r.top}},Td={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},Ed=()=>B(Bu)??Td,Dd=()=>B(Cu),Od=()=>B(wu),kd=e=>e.layout.layoutType,Ad=()=>B(kd),jd=()=>{var e=Ad();if(e===`horizontal`||e===`vertical`)return e},Md=e=>{var t=e.layout.layoutType;if(t===`centric`||t===`radial`)return t},Nd=()=>Ad()!==void 0,Pd=e=>{var t=vo(),n=Wu(),r=e.width,i=e.height,a=xd(),o=r,s=i;return a&&(o=a.width>0?a.width:r,s=a.height>0?a.height:i),(0,v.useEffect)(()=>{!n&&tu(o)&&tu(s)&&t(Zl({width:o,height:s}))},[t,n,o,s]),null},Fd=al({name:`legend`,initialState:{settings:{layout:`horizontal`,align:`center`,verticalAlign:`bottom`,itemSorter:`value`,position:void 0,offset:0},size:{width:0,height:0},payload:[]},reducers:{setLegendSize(e,t){e.size.width=t.payload.width,e.size.height=t.payload.height},setLegendSettings(e,t){e.settings.align=t.payload.align,e.settings.layout=t.payload.layout,e.settings.verticalAlign=t.payload.verticalAlign,e.settings.itemSorter=t.payload.itemSorter,e.settings.position=t.payload.position,e.settings.offset=t.payload.offset},addLegendPayload:{reducer(e,t){e.payload.push(W(t.payload))},prepare:Wc()},replaceLegendPayload:{reducer(e,t){var n=t.payload,r=n.prev,i=n.next,a=Ac(e).payload.indexOf(W(r));a>-1&&(e.payload[a]=W(i))},prepare:Wc()},removeLegendPayload:{reducer(e,t){var n=Ac(e).payload.indexOf(W(t.payload));n>-1&&e.payload.splice(n,1)},prepare:Wc()}}}),Id=Fd.actions;Id.setLegendSize,Id.setLegendSettings;var Ld=Id.addLegendPayload,Rd=Id.replaceLegendPayload,zd=Id.removeLegendPayload,Bd=Fd.reducer,Vd=o((e=>{var t=d();t.useSyncExternalStore,t.useRef,t.useEffect,t.useMemo,t.useDebugValue}));o(((e,t)=>{t.exports=Vd()}))();function Hd(e){e()}function Ud(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Hd(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){r&&e!==null&&(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Wd={notify(){},get:()=>[]};function Gd(e,t){let n,r=Wd,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=Ud())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Wd)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var Kd=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,qd=typeof navigator<`u`&&navigator.product===`ReactNative`,Jd=Kd||qd?v.useLayoutEffect:v.useEffect;function Yd(e,t){return e===t?e!==0||t!==0||1/e==1/t:e!==e&&t!==t}function Xd(e,t){if(Yd(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Yd(e[n[r]],t[n[r]]))return!1;return!0}var Zd=Symbol.for(`react-redux-context`),Qd=typeof globalThis<`u`?globalThis:{};function $d(){if(!v.createContext)return{};let e=Qd[Zd]??=new Map,t=e.get(v.createContext);return t||(t=v.createContext(null),e.set(v.createContext,t)),t}var ef=$d();function tf(e){let{children:t,context:n,serverState:r,store:i}=e,a=v.useMemo(()=>{let e=Gd(i);return{store:i,subscription:e,getServerState:r?()=>r:void 0}},[i,r]),o=v.useMemo(()=>i.getState(),[i]);Jd(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||ef;return v.createElement(s.Provider,{value:a},t)}var nf=tf,rf=new Set([`axisLine`,`tickLine`,`activeBar`,`activeDot`,`activeLabel`,`activeShape`,`allowEscapeViewBox`,`background`,`cursor`,`dot`,`label`,`line`,`margin`,`padding`,`position`,`shape`,`style`,`tick`,`wrapperStyle`,`radius`,`throttledEvents`]);function af(e,t){return e==null&&t==null?!0:typeof e==`number`&&typeof t==`number`?e===t||e!==e&&t!==t:e===t}function of(e,t){for(var n of new Set([...Object.keys(e),...Object.keys(t)]))if(rf.has(n)){if(e[n]==null&&t[n]==null)continue;if(!Xd(e[n],t[n]))return!1}else if(!af(e[n],t[n]))return!1;return!0}function sf(){return sf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sf.apply(null,arguments)}function cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function lf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?cf(Object(n),!0).forEach(function(t){uf(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cf(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function uf(e,t,n){return(t=df(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function df(e){var t=ff(e,`string`);return typeof t==`symbol`?t:t+``}function ff(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function pf(e,t){return vf(e)||_f(e,t)||hf(e,t)||mf()}function mf(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hf(e,t){if(e){if(typeof e==`string`)return gf(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gf(e,t):void 0}}function gf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function _f(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function vf(e){if(Array.isArray(e))return e}function yf(e){return Array.isArray(e)&&Tr(e[0])&&Tr(e[1])?e.join(` ~ `):e}var bf={separator:` : `,contentStyle:{margin:0,padding:10,backgroundColor:`#fff`,border:`1px solid #ccc`,whiteSpace:`nowrap`},itemStyle:{display:`block`,paddingTop:4,paddingBottom:4,color:`#000`},labelStyle:{},accessibilityLayer:!1};function xf(e,t){return t==null?e:U(e,t)}var Sf=e=>{var t=e.separator,n=t===void 0?bf.separator:t,r=e.contentStyle,i=e.itemStyle,a=e.labelStyle,o=a===void 0?bf.labelStyle:a,s=e.payload,c=e.formatter,l=e.itemSorter,u=e.wrapperClassName,d=e.labelClassName,f=e.label,p=e.labelFormatter,m=e.accessibilityLayer,h=m===void 0?bf.accessibilityLayer:m,g=()=>{if(s&&s.length){var e={padding:0,margin:0},t=xf(s,l).map((e,t)=>{if(!e||e.type===`none`)return null;var r=e.formatter||c||yf,a=e.value,o=e.name,l=a,u=o;if(r){var d=r(a,o,e,t,s);if(Array.isArray(d)){var f=pf(d,2);l=f[0],u=f[1]}else if(d!=null)l=d;else return null}var p=lf(lf({},bf.itemStyle),{},{color:e.color||bf.itemStyle.color},i);return v.createElement(`li`,{className:`recharts-tooltip-item`,key:`tooltip-item-${t}`,style:p},Tr(u)?v.createElement(`span`,{className:`recharts-tooltip-item-name`},u):null,Tr(u)?v.createElement(`span`,{className:`recharts-tooltip-item-separator`},n):null,v.createElement(`span`,{className:`recharts-tooltip-item-value`},l),v.createElement(`span`,{className:`recharts-tooltip-item-unit`},e.unit||``))});return v.createElement(`ul`,{className:`recharts-tooltip-item-list`,style:e},t)}return null},_=lf(lf({},bf.contentStyle),r),y=lf({margin:0},o),b=!Mr(f),x=b?f:``,S=Un(`recharts-default-tooltip`,u),C=Un(`recharts-tooltip-label`,d);b&&p&&s!=null&&(x=p(f,s));var w=h?{role:`status`,"aria-live":`assertive`}:{};return v.createElement(`div`,sf({className:S,style:_},w),v.createElement(`p`,{className:C,style:y},v.isValidElement(x)?x:`${x}`),g())},Cf=`recharts-tooltip-wrapper`,wf={visibility:`hidden`};function Tf(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return Un(Cf,{[`${Cf}-right`]:R(n)&&t&&R(t.x)&&n>=t.x,[`${Cf}-left`]:R(n)&&t&&R(t.x)&&n<t.x,[`${Cf}-bottom`]:R(r)&&t&&R(t.y)&&r>=t.y,[`${Cf}-top`]:R(r)&&t&&R(t.y)&&r<t.y})}function Ef(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,i=e.offset,a=e.position,o=e.reverseDirection,s=e.tooltipDimension,c=e.viewBox,l=e.viewBoxDimension;if(a&&R(a[r]))return a[r];var u=n[r]-s-(i>0?i:0),d=n[r]+i;if(t[r])return o[r]?u:d;var f=c[r];return f==null?0:o[r]?Math.max(u<f?d:u,f):l==null?0:d+s>f+l?Math.max(u,f):Math.max(d,f)}function Df(e){var t=e.translateX,n=e.translateY;return{transform:e.useTranslate3d?`translate3d(${t}px, ${n}px, 0)`:`translate(${t}px, ${n}px)`}}function Of(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTop,i=e.offsetLeft,a=e.position,o=e.reverseDirection,s=e.tooltipBox,c=e.useTranslate3d,l=e.viewBox,u,d,f;return s&&s.height>0&&s.width>0&&n?(d=Ef({allowEscapeViewBox:t,coordinate:n,key:`x`,offset:i,position:a,reverseDirection:o,tooltipDimension:s.width,viewBox:l,viewBoxDimension:l.width}),f=Ef({allowEscapeViewBox:t,coordinate:n,key:`y`,offset:r,position:a,reverseDirection:o,tooltipDimension:s.height,viewBox:l,viewBoxDimension:l.height}),u=Df({translateX:d,translateY:f,useTranslate3d:c})):u=wf,{cssProperties:u,cssClasses:Tf({translateX:d,translateY:f,coordinate:n})}}var kf={devToolsEnabled:!0,isSsr:!(typeof window<`u`&&window.document&&window.document.createElement&&window.setTimeout)};function Af(e,t){return Ff(e)||Pf(e,t)||Mf(e,t)||jf()}function jf(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mf(e,t){if(e){if(typeof e==`string`)return Nf(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Nf(e,t):void 0}}function Nf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Pf(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Ff(e){if(Array.isArray(e))return e}function If(){var e=Af((0,v.useState)(()=>kf.isSsr||!window.matchMedia?!1:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),2),t=e[0],n=e[1];return(0,v.useEffect)(()=>{if(window.matchMedia){var e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>{n(e.matches)};return e.addEventListener(`change`,t),()=>{e.removeEventListener(`change`,t)}}},[]),t}function Lf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Rf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Lf(Object(n),!0).forEach(function(t){zf(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lf(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function zf(e,t,n){return(t=Bf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bf(e){var t=Vf(e,`string`);return typeof t==`symbol`?t:t+``}function Vf(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Hf(e,t){return Kf(e)||Gf(e,t)||Wf(e,t)||Uf()}function Uf(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wf(e,t){if(e){if(typeof e==`string`)return Y(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}function Y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Gf(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Kf(e){if(Array.isArray(e))return e}function qf(e){if(!(e.prefersReducedMotion&&e.isAnimationActive===`auto`)&&e.isAnimationActive&&e.active){var t=typeof e.animationEasing==`string`?e.animationEasing:`ease`;return`transform ${e.animationDuration}ms ${t}`}}function Jf(e){var t=If(),n=Hf(v.useState(()=>({dismissed:!1,dismissedAtCoordinate:{x:0,y:0}})),2),r=n[0],i=n[1];v.useEffect(()=>{var t=t=>{t.key===`Escape`&&i({dismissed:!0,dismissedAtCoordinate:{x:e.coordinate?.x??0,y:e.coordinate?.y??0}})};return document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`keydown`,t)}},[e.coordinate?.x,e.coordinate?.y]),r.dismissed&&((e.coordinate?.x??0)!==r.dismissedAtCoordinate.x||(e.coordinate?.y??0)!==r.dismissedAtCoordinate.y)&&i(Rf(Rf({},r),{},{dismissed:!1}));var a=Of({allowEscapeViewBox:e.allowEscapeViewBox,coordinate:e.coordinate,offsetLeft:typeof e.offset==`number`?e.offset:e.offset.x,offsetTop:typeof e.offset==`number`?e.offset:e.offset.y,position:e.position,reverseDirection:e.reverseDirection,tooltipBox:e.lastBoundingBox,useTranslate3d:e.useTranslate3d,viewBox:e.viewBox}),o=a.cssClasses,s=a.cssProperties,c=Rf(Rf({},e.hasPortalFromProps?{}:Rf(Rf({transition:qf({prefersReducedMotion:t,isAnimationActive:e.isAnimationActive,active:e.active,animationDuration:e.animationDuration,animationEasing:e.animationEasing})},s),{},{pointerEvents:`none`,position:`absolute`,top:0,left:0})),{},{visibility:!r.dismissed&&e.active&&e.hasPayload?`visible`:`hidden`},e.wrapperStyle);return v.createElement(`div`,{xmlns:`http://www.w3.org/1999/xhtml`,tabIndex:-1,className:o,style:c,ref:e.innerRef},e.children)}var Yf=v.memo(Jf),Xf=()=>B(e=>e.rootProps.accessibilityLayer)??!0;function Zf(){return Zf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zf.apply(null,arguments)}function Qf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Qf(Object(n),!0).forEach(function(t){ep(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qf(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ep(e,t,n){return(t=tp(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tp(e){var t=np(e,`string`);return typeof t==`symbol`?t:t+``}function np(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var rp={curveBasisClosed:gi,curveBasisOpen:vi,curveBasis:mi,curveBumpX:li,curveBumpY:ui,curveLinearClosed:bi,curveLinear:ri,curveMonotoneX:Oi,curveMonotoneY:ki,curveNatural:Mi,curveStep:Pi,curveStepAfter:Ii,curveStepBefore:Fi},X=e=>G(e.x)&&G(e.y),ip=e=>e.base!=null&&X(e.base)&&X(e),ap=e=>e.x,op=e=>e.y,sp=(e,t)=>{if(typeof e==`function`)return e;var n=`curve${Nr(e)}`;if((n===`curveMonotone`||n===`curveBump`)&&t){var r=rp[`${n}${t===`vertical`?`Y`:`X`}`];if(r)return r}return rp[n]||ri},cp={connectNulls:!1,type:`linear`},lp=e=>{var t=e.type,n=t===void 0?cp.type:t,r=e.points,i=r===void 0?[]:r,a=e.baseLine,o=e.layout,s=e.connectNulls,c=s===void 0?cp.connectNulls:s,l=sp(n,o),u=c?i.filter(X):i;if(Array.isArray(a)){var d,f=i.map((e,t)=>$f($f({},e),{},{base:a[t]}));return d=o===`vertical`?si().y(op).x1(ap).x0(e=>e.base.x):si().x(ap).y1(op).y0(e=>e.base.y),d.defined(ip).curve(l)(c?f.filter(ip):f)}return(o===`vertical`&&R(a)?si().y(op).x1(ap).x0(a):R(a)?si().x(ap).y1(op).y0(a):oi().x(ap).y(op)).defined(X).curve(l)(u)},up=e=>{var t=e.className,n=e.points,r=e.path,i=e.pathRef,a=Ad();if((!n||!n.length)&&!r)return null;var o={type:e.type,points:e.points,baseLine:e.baseLine,layout:e.layout||a,connectNulls:e.connectNulls},s=n&&n.length?lp(o):r;return v.createElement(`path`,Zf({},Yn(e),Ki(e),{className:Un(`recharts-curve`,t),d:s===null?void 0:s,ref:i}))},dp=[`x`,`y`,`top`,`left`,`width`,`height`,`className`];function fp(){return fp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fp.apply(null,arguments)}function pp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function mp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?pp(Object(n),!0).forEach(function(t){hp(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pp(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function hp(e,t,n){return(t=gp(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gp(e){var t=_p(e,`string`);return typeof t==`symbol`?t:t+``}function _p(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function vp(e,t){if(e==null)return{};var n,r,i=yp(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function yp(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var bp=(e,t,n,r,i,a)=>`M${e},${i}v${r}M${a},${t}h${n}`,xp=e=>{var t=e.x,n=t===void 0?0:t,r=e.y,i=r===void 0?0:r,a=e.top,o=a===void 0?0:a,s=e.left,c=s===void 0?0:s,l=e.width,u=l===void 0?0:l,d=e.height,f=d===void 0?0:d,p=e.className,m=vp(e,dp),h=mp({x:n,y:i,top:o,left:c,width:u,height:f},m);return!R(n)||!R(i)||!R(u)||!R(f)||!R(o)||!R(c)?null:v.createElement(`path`,fp({},Zn(h),{className:Un(`recharts-cross`,p),d:bp(n,i,u,f,o,c)}))};function Sp(e,t,n,r){var i=r/2;return{stroke:`none`,fill:`#ccc`,x:e===`horizontal`?t.x-i:n.left+.5,y:e===`horizontal`?n.top+.5:t.y-i,width:e===`horizontal`?r:n.width-1,height:e===`horizontal`?n.height-1:r}}var Cp=(e,t)=>[0,3*e,3*t-6*e,3*e-3*t+1],wp=(e,t)=>e.map((e,n)=>e*t**n).reduce((e,t)=>e+t),Tp=(e,t)=>n=>wp(Cp(e,t),n),Ep=(e,t)=>n=>wp([...Cp(e,t).map((e,t)=>e*t).slice(1),0],n),Dp=e=>{var t,n=e.split(`(`);if(n.length!==2||n[0]!==`cubic-bezier`)return null;var r=(t=n[1])==null||(t=t.split(`)`)[0])==null?void 0:t.split(`,`);if(r==null||r.length!==4)return null;var i=r.map(e=>parseFloat(e));return[i[0],i[1],i[2],i[3]]},Op=function(){var e=[...arguments];if(e.length===1)switch(e[0]){case`linear`:return[0,0,1,1];case`ease`:return[.25,.1,.25,1];case`ease-in`:return[.42,0,1,1];case`ease-out`:return[.42,0,.58,1];case`ease-in-out`:return[0,0,.58,1];default:var t=Dp(e[0]);if(t)return t}return e.length===4?e:[0,0,1,1]},kp=(e,t,n,r)=>{var i=Tp(e,n),a=Tp(t,r),o=Ep(e,n),s=e=>e>1?1:e<0?0:e,c=e=>{for(var t=e>1?1:e,n=t,r=0;r<8;++r){var c=i(n)-t,l=o(n);if(Math.abs(c-t)<1e-4||l<1e-4)return a(n);n=s(n-c/l)}return a(n)};return c.isStepper=!1,c},Ap=function(){return kp(...Op(...arguments))},jp=function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.stiff,n=t===void 0?100:t,r=e.damping,i=r===void 0?8:r,a=e.dt,o=a===void 0?16.67:a,s=1,c=[0],l=0,u=0,d=1e4,f=0;f<d;){var p=-(l-s)*n,m=u*i;if(u+=(p-m)*o/1e3,l+=u*o/1e3,c.push(l),Math.abs(l-s)<1e-4&&Math.abs(u)<1e-4)break;f++}c[c.length-1]=s;var h=c.length-1;return e=>{if(e<=0)return 0;if(e>=1)return s;var t=e*h,n=Math.floor(t),r=t-n;return(c[n]??0)+((c[n+1]??0)-(c[n]??0))*r}},Mp=e=>{if(typeof e==`string`)switch(e){case`ease`:case`ease-in-out`:case`ease-out`:case`ease-in`:case`linear`:return Ap(e);case`spring`:return jp();default:if(e.split(`(`)[0]===`cubic-bezier`)return Ap(e)}return typeof e==`function`?e:null},Np=(0,v.createContext)((e,t,n)=>{var r,i=a=>{var o=t.tick(a);if(t.getState()===`active`){if(n(t.getInterpolated()),t.getProgress()===1){t.complete(),r=void 0;return}r=e.setTimeout(i,o);return}r=e.setTimeout(i,o)};return r=e.setTimeout(i,0),()=>r?.()});Np.Provider;function Pp(e){var t=(0,v.useContext)(Np);return(0,v.useMemo)(()=>e??t,[e,t])}function Fp(e,t,n){return(t=Ip(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ip(e){var t=Lp(e,`string`);return typeof t==`symbol`?t:t+``}function Lp(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Rp=`init`,zp=`pending`,Bp=`active`,Vp=`completed`;function Hp(e){return Math.max(0,e)}var Up=class{getAnimationStartedTime(){return this.animationStartedTime}getBeginStartedTime(){return this.beginStartedTime}constructor(e){var t;Fp(this,`state`,Rp),this.animationId=e.animationId,this.onAnimationEnd=e.onAnimationEnd,this.animationDuration=Hp(e.animationDuration),this.animationBegin=Hp(e.animationBegin),this.progress=0,this.from=e.from,this.to=e.to,this.easing=e.easing,(t=e.onAnimationStart)==null||t.call(e)}getState(){return this.state}getEasing(){return this.easing}getAnimationDuration(){return this.animationDuration}tick(e){if(this.getState()===Rp)return this.state=zp,this.beginStartedTime=e,this.animationBegin;if(this.getState()===zp){if(this.beginStartedTime==null)throw Error();var t=e-this.beginStartedTime;return t>=this.animationBegin?(this.state=Bp,this.animationStartedTime=e,this.nextAnimationUpdate(0)):Hp(this.animationBegin-t)}if(this.getState()===Bp){if(this.animationStartedTime==null)throw Error();var n=e-this.animationStartedTime;return this.setProgress(n/this.animationDuration),this.nextAnimationUpdate(n)}return 0}setProgress(e){this.progress=Math.min(1,Math.max(0,e))}getProgress(){return this.progress}complete(){if(this.progress=1,this.state===`active`){var e;(e=this.onAnimationEnd)==null||e.call(this)}this.state=Vp}getFrom(){return this.from}getTo(){return this.to}getAnimationId(){return this.animationId}getAnimationBegin(){return this.animationBegin}},Wp=class extends Up{nextAnimationUpdate(){return 0}getInterpolated(){return this.easing(Ar(this.getFrom(),this.getTo(),this.getProgress()))}},Gp=class{setTimeout(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=performance.now(),r=null,i=a=>{a-n>=t?e(a):r=requestAnimationFrame(i)};return r=requestAnimationFrame(i),()=>{r!=null&&cancelAnimationFrame(r)}}};function Kp(e,t){return Zp(e)||Xp(e,t)||Jp(e,t)||qp()}function qp(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jp(e,t){if(e){if(typeof e==`string`)return Yp(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yp(e,t):void 0}}function Yp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Xp(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Zp(e){if(Array.isArray(e))return e}var Qp={begin:0,duration:1e3,easing:`ease`,isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},$p=0,em=1;function tm(e){var t=ea(e,Qp),n=t.animationId,r=t.isActive,i=t.canBegin,a=t.duration,o=t.easing,s=t.begin,c=t.onAnimationEnd,l=t.onAnimationStart,u=t.children,d=If(),f=r===`auto`?!kf.isSsr&&!d:r,p=Pp(t.animationController),m=Kp((0,v.useState)(f?$p:em),2),h=m[0],g=m[1];return(0,v.useEffect)(()=>{f||g(em)},[f]),(0,v.useEffect)(()=>{var e=Mp(o);return!f||!i||e==null?Fr:p(new Gp,new Wp({animationId:n,easing:e,animationDuration:a,animationBegin:s,onAnimationStart:l,onAnimationEnd:c,from:$p,to:em}),g)},[p,n,f,i,a,o,s,l,c]),u(Number(h))}function nm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`animation-`,n=(0,v.useRef)(Dr(t)),r=(0,v.useRef)(e);return r.current!==e&&(n.current=Dr(t),r.current=e),n.current}var rm=e=>e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`),im=(e,t,n)=>e.map(e=>`${rm(e)} ${t}ms ${n}`).join(`,`),am=[`radius`],om=[`radius`],sm,cm,lm,um,dm,fm,pm,mm,hm,gm;function _m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function vm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?_m(Object(n),!0).forEach(function(t){ym(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ym(e,t,n){return(t=bm(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bm(e){var t=xm(e,`string`);return typeof t==`symbol`?t:t+``}function xm(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Sm(){return Sm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sm.apply(null,arguments)}function Cm(e,t){if(e==null)return{};var n,r,i=wm(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function wm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Tm(e,t){return Am(e)||km(e,t)||Dm(e,t)||Em()}function Em(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dm(e,t){if(e){if(typeof e==`string`)return Om(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Om(e,t):void 0}}function Om(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function km(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Am(e){if(Array.isArray(e))return e}function jm(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Mm=(e,t,n,r,i)=>{var a=br(n),o=br(r),s=Math.min(Math.abs(a)/2,Math.abs(o)/2),c=o>=0?1:-1,l=a>=0?1:-1,u=+(o>=0&&a>=0||o<0&&a<0),d;if(s>0&&Array.isArray(i)){for(var f=[0,0,0,0],p=0,m=4;p<m;p++){var h=i[p]??0;f[p]=h>s?s:h}d=xr(sm||=jm([`M`,`,`,``]),e,t+c*f[0]),f[0]>0&&(d+=xr(cm||=jm([`A `,`,`,`,0,0,`,`,`,`,`,``]),f[0],f[0],u,e+l*f[0],t)),d+=xr(lm||=jm([`L `,`,`,``]),e+n-l*f[1],t),f[1]>0&&(d+=xr(um||=jm([`A `,`,`,`,0,0,`,`,
        `,`,`,``]),f[1],f[1],u,e+n,t+c*f[1])),d+=xr(dm||=jm([`L `,`,`,``]),e+n,t+r-c*f[2]),f[2]>0&&(d+=xr(fm||=jm([`A `,`,`,`,0,0,`,`,
        `,`,`,``]),f[2],f[2],u,e+n-l*f[2],t+r)),d+=xr(pm||=jm([`L `,`,`,``]),e+l*f[3],t+r),f[3]>0&&(d+=xr(mm||=jm([`A `,`,`,`,0,0,`,`,
        `,`,`,``]),f[3],f[3],u,e,t+r-c*f[3])),d+=`Z`}else if(s>0&&i===+i&&i>0){var g=Math.min(s,i);d=xr(hm||=jm(`M .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,.
            L .,.
            A .,.,0,0,.,.,. Z`.split(`.`)),e,t+c*g,g,g,u,e+l*g,t,e+n-l*g,t,g,g,u,e+n,t+c*g,e+n,t+r-c*g,g,g,u,e+n-l*g,t+r,e+l*g,t+r,g,g,u,e,t+r-c*g)}else d=xr(gm||=jm([`M `,`,`,` h `,` v `,` h `,` Z`]),e,t,n,r,-n);return d},Nm={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:`ease`},Pm=e=>{var t=ea(e,Nm),n=(0,v.useRef)(null),r=Tm((0,v.useState)(-1),2),i=r[0],a=r[1];(0,v.useEffect)(()=>{if(n.current&&n.current.getTotalLength)try{var e=n.current.getTotalLength();e&&a(e)}catch{}},[]);var o=t.x,s=t.y,c=t.width,l=t.height,u=t.radius,d=t.className,f=t.animationEasing,p=t.animationDuration,m=t.animationBegin,h=t.isAnimationActive,g=t.isUpdateAnimationActive,_=(0,v.useRef)(c),y=(0,v.useRef)(l),b=(0,v.useRef)(o),x=(0,v.useRef)(s),S=nm((0,v.useMemo)(()=>({x:o,y:s,width:c,height:l,radius:u}),[o,s,c,l,u]),`rectangle-`);if(o!==+o||s!==+s||c!==+c||l!==+l||c===0||l===0)return null;var C=Un(`recharts-rectangle`,d);if(!g){var w=Zn(t);w.radius;var T=Cm(w,am);return v.createElement(`path`,Sm({},T,{x:br(o),y:br(s),width:br(c),height:br(l),radius:typeof u==`number`?u:void 0,className:C,d:Mm(o,s,c,l,u)}))}var E=_.current,D=y.current,O=b.current,k=x.current,A=`0px ${i===-1?1:i}px`,j=`${i}px ${i}px`,M=im([`strokeDasharray`],p,typeof f==`string`?f:Nm.animationEasing);return v.createElement(tm,{animationId:S,key:S,canBegin:i>0,duration:p,easing:f,isActive:g,begin:m},e=>{var r=Ar(E,c,e),i=Ar(D,l,e),a=Ar(O,o,e),d=Ar(k,s,e);n.current&&(_.current=r,y.current=i,b.current=a,x.current=d);var f=h?e>0?{transition:M,strokeDasharray:j}:{strokeDasharray:A}:{strokeDasharray:j},p=Zn(t);p.radius;var m=Cm(p,om);return v.createElement(`path`,Sm({},m,{radius:typeof u==`number`?u:void 0,className:C,d:Mm(a,d,r,i,u),ref:n,style:vm(vm({},f),t.style)}))})};function Fm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Im(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Fm(Object(n),!0).forEach(function(t){Lm(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fm(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Lm(e,t,n){return(t=Rm(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rm(e){var t=zm(e,`string`);return typeof t==`symbol`?t:t+``}function zm(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Bm=Math.PI/180,Vm=e=>e*180/Math.PI,Hm=(e,t,n,r)=>({x:e+Math.cos(-Bm*r)*n,y:t+Math.sin(-Bm*r)*n}),Um=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0,width:0,height:0,brushBottom:0};return Math.min(Math.abs(e-(n.left||0)-(n.right||0)),Math.abs(t-(n.top||0)-(n.bottom||0)))/2},Wm=(e,t)=>{var n=e.x,r=e.y,i=t.x,a=t.y;return Math.sqrt((n-i)**2+(r-a)**2)},Gm=(e,t)=>{var n=e.x,r=e.y,i=t.cx,a=t.cy,o=Wm({x:n,y:r},{x:i,y:a});if(o<=0)return{radius:o,angle:0};var s=(n-i)/o,c=Math.acos(s);return r>a&&(c=2*Math.PI-c),{radius:o,angle:Vm(c),angleInRadian:c}},Km=e=>{var t=e.startAngle,n=e.endAngle,r=Math.floor(t/360),i=Math.floor(n/360),a=Math.min(r,i);return{startAngle:t-a*360,endAngle:n-a*360}},qm=(e,t)=>{var n=t.startAngle,r=t.endAngle,i=Math.floor(n/360),a=Math.floor(r/360);return e+Math.min(i,a)*360},Jm=(e,t)=>{var n=e.relativeX,r=e.relativeY,i=Gm({x:n,y:r},t),a=i.radius,o=i.angle,s=t.innerRadius,c=t.outerRadius;if(a<s||a>c||a===0)return null;var l=Km(t),u=l.startAngle,d=l.endAngle,f=o,p;if(u<=d){for(;f>d;)f-=360;for(;f<u;)f+=360;p=f>=u&&f<=d}else{for(;f>u;)f-=360;for(;f<d;)f+=360;p=f>=d&&f<=u}return p?Im(Im({},t),{},{radius:a,angle:qm(f,t)}):null};function Ym(e){var t=e.cx,n=e.cy,r=e.radius,i=e.startAngle,a=e.endAngle;return{points:[Hm(t,n,r,i),Hm(t,n,r,a)],cx:t,cy:n,radius:r,startAngle:i,endAngle:a}}var Xm,Zm,Qm,$m,eh,th,nh;function rh(){return rh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rh.apply(null,arguments)}function ih(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ah=(e,t)=>Sr(t-e)*Math.min(Math.abs(t-e),359.999),oh=e=>{var t=e.cx,n=e.cy,r=e.radius,i=e.angle,a=e.sign,o=e.isExternal,s=e.cornerRadius,c=e.cornerIsExternal,l=s*(o?1:-1)+r,u=Math.asin(s/l)/Bm,d=c?i:i+a*u,f=Hm(t,n,l,d),p=Hm(t,n,r,d),m=c?i-a*u:i;return{center:f,circleTangency:p,lineTangency:Hm(t,n,l*Math.cos(u*Bm),m),theta:u}},sh=e=>{var t=e.cx,n=e.cy,r=e.innerRadius,i=e.outerRadius,a=e.startAngle,o=e.endAngle,s=ah(a,o),c=a+s,l=Hm(t,n,i,a),u=Hm(t,n,i,c),d=xr(Xm||=ih([`M `,`,`,`
    A `,`,`,`,0,
    `,`,`,`,
    `,`,`,`
  `]),l.x,l.y,i,i,+(Math.abs(s)>180),+(a>c),u.x,u.y);if(r>0){var f=Hm(t,n,r,a),p=Hm(t,n,r,c);d+=xr(Zm||=ih([`L `,`,`,`
            A `,`,`,`,0,
            `,`,`,`,
            `,`,`,` Z`]),p.x,p.y,r,r,+(Math.abs(s)>180),+(a<=c),f.x,f.y)}else d+=xr(Qm||=ih([`L `,`,`,` Z`]),t,n);return d},ch=e=>{var t=e.cx,n=e.cy,r=e.innerRadius,i=e.outerRadius,a=e.cornerRadius,o=e.forceCornerRadius,s=e.cornerIsExternal,c=e.startAngle,l=e.endAngle,u=Sr(l-c),d=oh({cx:t,cy:n,radius:i,angle:c,sign:u,cornerRadius:a,cornerIsExternal:s}),f=d.circleTangency,p=d.lineTangency,m=d.theta,h=oh({cx:t,cy:n,radius:i,angle:l,sign:-u,cornerRadius:a,cornerIsExternal:s}),g=h.circleTangency,_=h.lineTangency,v=h.theta,y=s?Math.abs(c-l):Math.abs(c-l)-m-v;if(y<0)return o?xr($m||=ih([`M `,`,`,`
        a`,`,`,`,0,0,1,`,`,0
        a`,`,`,`,0,0,1,`,`,0
      `]),p.x,p.y,a,a,a*2,a,a,-a*2):sh({cx:t,cy:n,innerRadius:r,outerRadius:i,startAngle:c,endAngle:l});var b=xr(eh||=ih([`M `,`,`,`
    A`,`,`,`,0,0,`,`,`,`,`,`
    A`,`,`,`,0,`,`,`,`,`,`,`,`
    A`,`,`,`,0,0,`,`,`,`,`,`
  `]),p.x,p.y,a,a,+(u<0),f.x,f.y,i,i,+(y>180),+(u<0),g.x,g.y,a,a,+(u<0),_.x,_.y);if(r>0){var x=oh({cx:t,cy:n,radius:r,angle:c,sign:u,isExternal:!0,cornerRadius:a,cornerIsExternal:s}),S=x.circleTangency,C=x.lineTangency,w=x.theta,T=oh({cx:t,cy:n,radius:r,angle:l,sign:-u,isExternal:!0,cornerRadius:a,cornerIsExternal:s}),E=T.circleTangency,D=T.lineTangency,O=T.theta,k=s?Math.abs(c-l):Math.abs(c-l)-w-O;if(k<0&&a===0)return`${b}L${t},${n}Z`;b+=xr(th||=ih([`L`,`,`,`
      A`,`,`,`,0,0,`,`,`,`,`,`
      A`,`,`,`,0,`,`,`,`,`,`,`,`
      A`,`,`,`,0,0,`,`,`,`,`,`Z`]),D.x,D.y,a,a,+(u<0),E.x,E.y,r,r,+(k>180),+(u>0),S.x,S.y,a,a,+(u<0),C.x,C.y)}else b+=xr(nh||=ih([`L`,`,`,`Z`]),t,n);return b},lh={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},uh=e=>{var t=ea(e,lh),n=t.cx,r=t.cy,i=t.innerRadius,a=t.outerRadius,o=t.cornerRadius,s=t.forceCornerRadius,c=t.cornerIsExternal,l=t.startAngle,u=t.endAngle,d=t.className;if(a<i||l===u)return null;var f=Un(`recharts-sector`,d),p=a-i,m=Or(o,p,0,!0),h=m>0&&Math.abs(l-u)<360?ch({cx:n,cy:r,innerRadius:i,outerRadius:a,cornerRadius:Math.min(m,p/2),forceCornerRadius:s,cornerIsExternal:c,startAngle:l,endAngle:u}):sh({cx:n,cy:r,innerRadius:i,outerRadius:a,startAngle:l,endAngle:u});return v.createElement(`path`,rh({},Zn(t),{className:f,d:h}))};function dh(e,t,n){if(e===`horizontal`)return[{x:t.x,y:n.top},{x:t.x,y:n.top+n.height}];if(e===`vertical`)return[{x:n.left,y:t.y},{x:n.left+n.width,y:t.y}];if(Gi(t)){if(e===`centric`){var r=t.cx,i=t.cy,a=t.innerRadius,o=t.outerRadius,s=t.angle,c=Hm(r,i,a,s),l=Hm(r,i,o,s);return[{x:c.x,y:c.y},{x:l.x,y:l.y}]}return Ym(t)}}function fh(e){return pr(e)?NaN:Number(e)}function ph(e){return e?(e=fh(e),e===1/0||e===-1/0?(e<0?-1:1)*Number.MAX_VALUE:e===e?e:0):e===0?e:0}function mh(e,t,n){n&&typeof n!=`number`&&Io(e,t,n)&&(t=n=void 0),e=ph(e),t===void 0?(t=e,e=0):t=ph(t),n=n===void 0?e<t?1:-1:ph(n);let r=Math.max(Math.ceil((t-e)/(n||1)),0),i=Array(r);for(let t=0;t<r;t++)i[t]=e,e+=n;return i}var hh=e=>e.chartData,gh=V([hh],e=>{var t=e.chartData==null?0:e.chartData.length-1;return{chartData:e.chartData,computedData:e.computedData,dataEndIndex:t,dataStartIndex:0}}),_h=(e,t,n,r)=>r?gh(e):hh(e),vh=(e,t,n)=>n?gh(e):hh(e),yh=V([_h],e=>{var t=e.chartData,n=e.dataStartIndex,r=e.dataEndIndex;return t==null?[]:t.slice(n,r+1)});V([gh],e=>{var t=e.chartData,n=e.dataStartIndex,r=e.dataEndIndex;return t==null?[]:t.slice(n,r+1)});var bh=V([hh],e=>{var t=e.chartData,n=e.dataStartIndex,r=e.dataEndIndex;return t==null?[]:t.slice(n,r+1)});function xh(e,t){return Eh(e)||Th(e,t)||Ch(e,t)||Sh()}function Sh(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ch(e,t){if(e){if(typeof e==`string`)return wh(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wh(e,t):void 0}}function wh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Th(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Eh(e){if(Array.isArray(e))return e}function Dh(e){if(Array.isArray(e)&&e.length===2){var t=xh(e,2),n=t[0],r=t[1];if(G(n)&&G(r))return!0}return!1}function Oh(e,t,n){return n?e:[Math.min(e[0],t[0]),Math.max(e[1],t[1])]}function kh(e,t){if(t&&typeof e!=`function`&&Array.isArray(e)&&e.length===2){var n=xh(e,2),r=n[0],i=n[1],a,o;if(G(r))a=r;else if(typeof r==`function`)return;if(G(i))o=i;else if(typeof i==`function`)return;var s=[a,o];if(Dh(s))return s}}function Ah(e,t,n){if(n||t!=null){if(typeof e==`function`&&t!=null)try{var r=e(t,n);if(Dh(r))return Oh(r,t,n)}catch{}if(Array.isArray(e)&&e.length===2){var i=xh(e,2),a=i[0],o=i[1],s,c;if(a===`auto`)t!=null&&(s=Math.min(...t));else if(R(a))s=a;else if(typeof a==`function`)try{t!=null&&(s=a(t?.[0]))}catch{}else if(typeof a==`string`&&gu.test(a)){var l=gu.exec(a);if(l==null||l[1]==null||t==null)s=void 0;else{var u=+l[1];s=t[0]-u}}else s=t?.[0];if(o===`auto`)t!=null&&(c=Math.max(...t));else if(R(o))c=o;else if(typeof o==`function`)try{t!=null&&(c=o(t?.[1]))}catch{}else if(typeof o==`string`&&_u.test(o)){var d=_u.exec(o);if(d==null||d[1]==null||t==null)c=void 0;else{var f=+d[1];c=t[1]+f}}else c=t?.[1];var p=[s,c];if(Dh(p))return t==null?p:Oh(p,t,n)}}}var Z=l(o(((e,t)=>{(function(e){var n=1e9,r={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:`2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286`},i=!0,a=`[DecimalError] `,o=a+`Invalid argument: `,s=a+`Exponent out of range: `,c=Math.floor,l=Math.pow,u=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,d,f=1e7,p=7,m=9007199254740991,h=c(m/p),g={};g.absoluteValue=g.abs=function(){var e=new this.constructor(this);return e.s&&=1,e},g.comparedTo=g.cmp=function(e){var t,n,r,i,a=this;if(e=new a.constructor(e),a.s!==e.s)return a.s||-e.s;if(a.e!==e.e)return a.e>e.e^a.s<0?1:-1;for(r=a.d.length,i=e.d.length,t=0,n=r<i?r:i;t<n;++t)if(a.d[t]!==e.d[t])return a.d[t]>e.d[t]^a.s<0?1:-1;return r===i?0:r>i^a.s<0?1:-1},g.decimalPlaces=g.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*p;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n},g.dividedBy=g.div=function(e){return b(this,new this.constructor(e))},g.dividedToIntegerBy=g.idiv=function(e){var t=this,n=t.constructor;return D(b(t,new n(e),0,1),n.precision)},g.equals=g.eq=function(e){return!this.cmp(e)},g.exponent=function(){return S(this)},g.greaterThan=g.gt=function(e){return this.cmp(e)>0},g.greaterThanOrEqualTo=g.gte=function(e){return this.cmp(e)>=0},g.isInteger=g.isint=function(){return this.e>this.d.length-2},g.isNegative=g.isneg=function(){return this.s<0},g.isPositive=g.ispos=function(){return this.s>0},g.isZero=function(){return this.s===0},g.lessThan=g.lt=function(e){return this.cmp(e)<0},g.lessThanOrEqualTo=g.lte=function(e){return this.cmp(e)<1},g.logarithm=g.log=function(e){var t,n=this,r=n.constructor,o=r.precision,s=o+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(d))throw Error(a+`NaN`);if(n.s<1)throw Error(a+(n.s?`NaN`:`-Infinity`));return n.eq(d)?new r(0):(i=!1,t=b(T(n,s),T(e,s),s),i=!0,D(t,o))},g.minus=g.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?O(t,e):_(t,(e.s=-e.s,e))},g.modulo=g.mod=function(e){var t,n=this,r=n.constructor,o=r.precision;if(e=new r(e),!e.s)throw Error(a+`NaN`);return n.s?(i=!1,t=b(n,e,0,1).times(e),i=!0,n.minus(t)):D(new r(n),o)},g.naturalExponential=g.exp=function(){return x(this)},g.naturalLogarithm=g.ln=function(){return T(this)},g.negated=g.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e},g.plus=g.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?_(t,e):O(t,(e.s=-e.s,e))},g.precision=g.sd=function(e){var t,n,r,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(o+e);if(t=S(i)+1,r=i.d.length-1,n=r*p+1,r=i.d[r],r){for(;r%10==0;r/=10)n--;for(r=i.d[0];r>=10;r/=10)n++}return e&&t>n?t:n},g.squareRoot=g.sqrt=function(){var e,t,n,r,o,s,l,u=this,d=u.constructor;if(u.s<1){if(!u.s)return new d(0);throw Error(a+`NaN`)}for(e=S(u),i=!1,o=Math.sqrt(+u),o==0||o==1/0?(t=y(u.d),(t.length+e)%2==0&&(t+=`0`),o=Math.sqrt(t),e=c((e+1)/2)-(e<0||e%2),o==1/0?t=`5e`+e:(t=o.toExponential(),t=t.slice(0,t.indexOf(`e`)+1)+e),r=new d(t)):r=new d(o.toString()),n=d.precision,o=l=n+3;;)if(s=r,r=s.plus(b(u,s,l+2)).times(.5),y(s.d).slice(0,l)===(t=y(r.d)).slice(0,l)){if(t=t.slice(l-3,l+1),o==l&&t==`4999`){if(D(s,n+1,0),s.times(s).eq(u)){r=s;break}}else if(t!=`9999`)break;l+=4}return i=!0,D(r,n)},g.times=g.mul=function(e){var t,n,r,a,o,s,c,l,u,d=this,p=d.constructor,m=d.d,h=(e=new p(e)).d;if(!d.s||!e.s)return new p(0);for(e.s*=d.s,n=d.e+e.e,l=m.length,u=h.length,l<u&&(o=m,m=h,h=o,s=l,l=u,u=s),o=[],s=l+u,r=s;r--;)o.push(0);for(r=u;--r>=0;){for(t=0,a=l+r;a>r;)c=o[a]+h[r]*m[a-r-1]+t,o[a--]=c%f|0,t=c/f|0;o[a]=(o[a]+t)%f|0}for(;!o[--s];)o.pop();return t?++n:o.shift(),e.d=o,e.e=n,i?D(e,p.precision):e},g.toDecimalPlaces=g.todp=function(e,t){var r=this,i=r.constructor;return r=new i(r),e===void 0?r:(v(e,0,n),t===void 0?t=i.rounding:v(t,0,8),D(r,e+S(r)+1,t))},g.toExponential=function(e,t){var r,i=this,a=i.constructor;return e===void 0?r=k(i,!0):(v(e,0,n),t===void 0?t=a.rounding:v(t,0,8),i=D(new a(i),e+1,t),r=k(i,!0,e+1)),r},g.toFixed=function(e,t){var r,i,a=this,o=a.constructor;return e===void 0?k(a):(v(e,0,n),t===void 0?t=o.rounding:v(t,0,8),i=D(new o(a),e+S(a)+1,t),r=k(i.abs(),!1,e+S(i)+1),a.isneg()&&!a.isZero()?`-`+r:r)},g.toInteger=g.toint=function(){var e=this,t=e.constructor;return D(new t(e),S(e)+1,t.rounding)},g.toNumber=function(){return+this},g.toPower=g.pow=function(e){var t,n,r,o,s,l,u=this,f=u.constructor,h=12,g=+(e=new f(e));if(!e.s)return new f(d);if(u=new f(u),!u.s){if(e.s<1)throw Error(a+`Infinity`);return u}if(u.eq(d))return u;if(r=f.precision,e.eq(d))return D(u,r);if(t=e.e,n=e.d.length-1,l=t>=n,s=u.s,!l){if(s<0)throw Error(a+`NaN`)}else if((n=g<0?-g:g)<=m){for(o=new f(d),t=Math.ceil(r/p+4),i=!1;n%2&&(o=o.times(u),A(o.d,t)),n=c(n/2),n!==0;)u=u.times(u),A(u.d,t);return i=!0,e.s<0?new f(d).div(o):D(o,r)}return s=s<0&&e.d[Math.max(t,n)]&1?-1:1,u.s=1,i=!1,o=e.times(T(u,r+h)),i=!0,o=x(o),o.s=s,o},g.toPrecision=function(e,t){var r,i,a=this,o=a.constructor;return e===void 0?(r=S(a),i=k(a,r<=o.toExpNeg||r>=o.toExpPos)):(v(e,1,n),t===void 0?t=o.rounding:v(t,0,8),a=D(new o(a),e,t),r=S(a),i=k(a,e<=r||r<=o.toExpNeg,e)),i},g.toSignificantDigits=g.tosd=function(e,t){var r=this,i=r.constructor;return e===void 0?(e=i.precision,t=i.rounding):(v(e,1,n),t===void 0?t=i.rounding:v(t,0,8)),D(new i(r),e,t)},g.toString=g.valueOf=g.val=g.toJSON=function(){var e=this,t=S(e),n=e.constructor;return k(e,t<=n.toExpNeg||t>=n.toExpPos)};function _(e,t){var n,r,a,o,s,c,l,u,d=e.constructor,m=d.precision;if(!e.s||!t.s)return t.s||(t=new d(e)),i?D(t,m):t;if(l=e.d,u=t.d,s=e.e,a=t.e,l=l.slice(),o=s-a,o){for(o<0?(r=l,o=-o,c=u.length):(r=u,a=s,c=l.length),s=Math.ceil(m/p),c=s>c?s+1:c+1,o>c&&(o=c,r.length=1),r.reverse();o--;)r.push(0);r.reverse()}for(c=l.length,o=u.length,c-o<0&&(o=c,r=u,u=l,l=r),n=0;o;)n=(l[--o]=l[o]+u[o]+n)/f|0,l[o]%=f;for(n&&(l.unshift(n),++a),c=l.length;l[--c]==0;)l.pop();return t.d=l,t.e=a,i?D(t,m):t}function v(e,t,n){if(e!==~~e||e<t||e>n)throw Error(o+e)}function y(e){var t,n,r,i=e.length-1,a=``,o=e[0];if(i>0){for(a+=o,t=1;t<i;t++)r=e[t]+``,n=p-r.length,n&&(a+=w(n)),a+=r;o=e[t],r=o+``,n=p-r.length,n&&(a+=w(n))}else if(o===0)return`0`;for(;o%10==0;)o/=10;return a+o}var b=(function(){function e(e,t){var n,r=0,i=e.length;for(e=e.slice();i--;)n=e[i]*t+r,e[i]=n%f|0,r=n/f|0;return r&&e.unshift(r),e}function t(e,t,n,r){var i,a;if(n!=r)a=n>r?1:-1;else for(i=a=0;i<n;i++)if(e[i]!=t[i]){a=e[i]>t[i]?1:-1;break}return a}function n(e,t,n){for(var r=0;n--;)e[n]-=r,r=+(e[n]<t[n]),e[n]=r*f+e[n]-t[n];for(;!e[0]&&e.length>1;)e.shift()}return function(r,i,o,s){var c,l,u,d,m,h,g,_,v,y,b,x,C,w,T,E,O,k,A=r.constructor,j=r.s==i.s?1:-1,M=r.d,N=i.d;if(!r.s)return new A(r);if(!i.s)throw Error(a+`Division by zero`);for(l=r.e-i.e,O=N.length,T=M.length,g=new A(j),_=g.d=[],u=0;N[u]==(M[u]||0);)++u;if(N[u]>(M[u]||0)&&--l,x=o==null?o=A.precision:s?o+(S(r)-S(i))+1:o,x<0)return new A(0);if(x=x/p+2|0,u=0,O==1)for(d=0,N=N[0],x++;(u<T||d)&&x--;u++)C=d*f+(M[u]||0),_[u]=C/N|0,d=C%N|0;else{for(d=f/(N[0]+1)|0,d>1&&(N=e(N,d),M=e(M,d),O=N.length,T=M.length),w=O,v=M.slice(0,O),y=v.length;y<O;)v[y++]=0;k=N.slice(),k.unshift(0),E=N[0],N[1]>=f/2&&++E;do d=0,c=t(N,v,O,y),c<0?(b=v[0],O!=y&&(b=b*f+(v[1]||0)),d=b/E|0,d>1?(d>=f&&(d=f-1),m=e(N,d),h=m.length,y=v.length,c=t(m,v,h,y),c==1&&(d--,n(m,O<h?k:N,h))):(d==0&&(c=d=1),m=N.slice()),h=m.length,h<y&&m.unshift(0),n(v,m,y),c==-1&&(y=v.length,c=t(N,v,O,y),c<1&&(d++,n(v,O<y?k:N,y))),y=v.length):c===0&&(d++,v=[0]),_[u++]=d,c&&v[0]?v[y++]=M[w]||0:(v=[M[w]],y=1);while((w++<T||v[0]!==void 0)&&x--)}return _[0]||_.shift(),g.e=l,D(g,s?o+S(g)+1:o)}})();function x(e,t){var n,r,a,o,c,u,f=0,p=0,m=e.constructor,h=m.precision;if(S(e)>16)throw Error(s+S(e));if(!e.s)return new m(d);for(t==null?(i=!1,u=h):u=t,c=new m(.03125);e.abs().gte(.1);)e=e.times(c),p+=5;for(r=Math.log(l(2,p))/Math.LN10*2+5|0,u+=r,n=a=o=new m(d),m.precision=u;;){if(a=D(a.times(e),u),n=n.times(++f),c=o.plus(b(a,n,u)),y(c.d).slice(0,u)===y(o.d).slice(0,u)){for(;p--;)o=D(o.times(o),u);return m.precision=h,t==null?(i=!0,D(o,h)):o}o=c}}function S(e){for(var t=e.e*p,n=e.d[0];n>=10;n/=10)t++;return t}function C(e,t,n){if(t>e.LN10.sd())throw i=!0,n&&(e.precision=n),Error(a+`LN10 precision limit exceeded`);return D(new e(e.LN10),t)}function w(e){for(var t=``;e--;)t+=`0`;return t}function T(e,t){var n,r,o,s,c,l,u,f,p,m=1,h=10,g=e,_=g.d,v=g.constructor,x=v.precision;if(g.s<1)throw Error(a+(g.s?`NaN`:`-Infinity`));if(g.eq(d))return new v(0);if(t==null?(i=!1,f=x):f=t,g.eq(10))return t??(i=!0),C(v,f);if(f+=h,v.precision=f,n=y(_),r=n.charAt(0),s=S(g),Math.abs(s)<0x5543df729c000){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)g=g.times(e),n=y(g.d),r=n.charAt(0),m++;s=S(g),r>1?(g=new v(`0.`+n),s++):g=new v(r+`.`+n.slice(1))}else return u=C(v,f+2,x).times(s+``),g=T(new v(r+`.`+n.slice(1)),f-h).plus(u),v.precision=x,t==null?(i=!0,D(g,x)):g;for(l=c=g=b(g.minus(d),g.plus(d),f),p=D(g.times(g),f),o=3;;){if(c=D(c.times(p),f),u=l.plus(b(c,new v(o),f)),y(u.d).slice(0,f)===y(l.d).slice(0,f))return l=l.times(2),s!==0&&(l=l.plus(C(v,f+2,x).times(s+``))),l=b(l,new v(m),f),v.precision=x,t==null?(i=!0,D(l,x)):l;l=u,o+=2}}function E(e,t){var n,r,a;for((n=t.indexOf(`.`))>-1&&(t=t.replace(`.`,``)),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=c(n/p),e.d=[],r=(n+1)%p,n<0&&(r+=p),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=p;r<a;)e.d.push(+t.slice(r,r+=p));t=t.slice(r),r=p-t.length}else r-=a;for(;r--;)t+=`0`;if(e.d.push(+t),i&&(e.e>h||e.e<-h))throw Error(s+n)}else e.s=0,e.e=0,e.d=[0];return e}function D(e,t,n){var r,a,o,u,d,m,g,_,v=e.d;for(u=1,o=v[0];o>=10;o/=10)u++;if(r=t-u,r<0)r+=p,a=t,g=v[_=0];else{if(_=Math.ceil((r+1)/p),o=v.length,_>=o)return e;for(g=o=v[_],u=1;o>=10;o/=10)u++;r%=p,a=r-p+u}if(n!==void 0&&(o=l(10,u-a-1),d=g/o%10|0,m=t<0||v[_+1]!==void 0||g%o,m=n<4?(d||m)&&(n==0||n==(e.s<0?3:2)):d>5||d==5&&(n==4||m||n==6&&(r>0?a>0?g/l(10,u-a):0:v[_-1])%10&1||n==(e.s<0?8:7))),t<1||!v[0])return m?(o=S(e),v.length=1,t=t-o-1,v[0]=l(10,(p-t%p)%p),e.e=c(-t/p)||0):(v.length=1,v[0]=e.e=e.s=0),e;if(r==0?(v.length=_,o=1,_--):(v.length=_+1,o=l(10,p-r),v[_]=a>0?(g/l(10,u-a)%l(10,a)|0)*o:0),m)for(;;)if(_==0){(v[0]+=o)==f&&(v[0]=1,++e.e);break}else{if(v[_]+=o,v[_]!=f)break;v[_--]=0,o=1}for(r=v.length;v[--r]===0;)v.pop();if(i&&(e.e>h||e.e<-h))throw Error(s+S(e));return e}function O(e,t){var n,r,a,o,s,c,l,u,d,m,h=e.constructor,g=h.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new h(e),i?D(t,g):t;if(l=e.d,m=t.d,r=t.e,u=e.e,l=l.slice(),s=u-r,s){for(d=s<0,d?(n=l,s=-s,c=m.length):(n=m,r=u,c=l.length),a=Math.max(Math.ceil(g/p),c)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=l.length,c=m.length,d=a<c,d&&(c=a),a=0;a<c;a++)if(l[a]!=m[a]){d=l[a]<m[a];break}s=0}for(d&&(n=l,l=m,m=n,t.s=-t.s),c=l.length,a=m.length-c;a>0;--a)l[c++]=0;for(a=m.length;a>s;){if(l[--a]<m[a]){for(o=a;o&&l[--o]===0;)l[o]=f-1;--l[o],l[a]+=f}l[a]-=m[a]}for(;l[--c]===0;)l.pop();for(;l[0]===0;l.shift())--r;return l[0]?(t.d=l,t.e=r,i?D(t,g):t):new h(0)}function k(e,t,n){var r,i=S(e),a=y(e.d),o=a.length;return t?(n&&(r=n-o)>0?a=a.charAt(0)+`.`+a.slice(1)+w(r):o>1&&(a=a.charAt(0)+`.`+a.slice(1)),a=a+(i<0?`e`:`e+`)+i):i<0?(a=`0.`+w(-i-1)+a,n&&(r=n-o)>0&&(a+=w(r))):i>=o?(a+=w(i+1-o),n&&(r=n-i-1)>0&&(a=a+`.`+w(r))):((r=i+1)<o&&(a=a.slice(0,r)+`.`+a.slice(r)),n&&(r=n-o)>0&&(i+1===o&&(a+=`.`),a+=w(r))),e.s<0?`-`+a:a}function A(e,t){if(e.length>t)return e.length=t,!0}function j(e){var t,n,r;function i(e){var t=this;if(!(t instanceof i))return new i(e);if(t.constructor=i,e instanceof i){t.s=e.s,t.e=e.e,t.d=(e=e.d)?e.slice():e;return}if(typeof e==`number`){if(e*0!=0)throw Error(o+e);if(e>0)t.s=1;else if(e<0)e=-e,t.s=-1;else{t.s=0,t.e=0,t.d=[0];return}if(e===~~e&&e<1e7){t.e=0,t.d=[e];return}return E(t,e.toString())}if(typeof e!=`string`)throw Error(o+e);if(e.charCodeAt(0)===45?(e=e.slice(1),t.s=-1):t.s=1,u.test(e))E(t,e);else throw Error(o+e)}if(i.prototype=g,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.clone=j,i.config=i.set=M,e===void 0&&(e={}),e)for(r=[`precision`,`rounding`,`toExpNeg`,`toExpPos`,`LN10`],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return i.config(e),i}function M(e){if(!e||typeof e!=`object`)throw Error(a+`Object expected`);var t,r,i,s=[`precision`,1,n,`rounding`,0,8,`toExpNeg`,-1/0,0,`toExpPos`,0,1/0];for(t=0;t<s.length;t+=3)if((i=e[r=s[t]])!==void 0){if(c(i)===i&&i>=s[t+1]&&i<=s[t+2])this[r]=i;else throw Error(o+r+`: `+i)}if((i=e[r=`LN10`])!==void 0){if(i==Math.LN10)this[r]=new this(i);else throw Error(o+r+`: `+i)}return this}r=j(r),r.default=r.Decimal=r,d=new r(1),typeof define==`function`&&define.amd?define(function(){return r}):t!==void 0&&t.exports?t.exports=r:(e||=typeof self<`u`&&self&&self.self==self?self:Function(`return this`)(),e.Decimal=r)})(e)}))());function jh(e){return e===0?1:Math.floor(new Z.default(e).abs().log(10).toNumber())+1}function Mh(e,t,n){for(var r=new Z.default(e),i=0,a=[];r.lt(t)&&i<1e5;)a.push(r.toNumber()),r=r.add(n),i++;return a}function Nh(e,t){return Rh(e)||Lh(e,t)||Fh(e,t)||Ph()}function Ph(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fh(e,t){if(e){if(typeof e==`string`)return Ih(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ih(e,t):void 0}}function Ih(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Lh(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Rh(e){if(Array.isArray(e))return e}var zh=e=>{var t=Nh(e,2),n=t[0],r=t[1],i=n,a=r;return n>r&&(i=r,a=n),[i,a]},Bh=(e,t,n)=>{if(e.lte(0))return new Z.default(0);var r=jh(e.toNumber()),i=new Z.default(10).pow(r),a=e.div(i),o=r===1?.1:.05,s=new Z.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);return t?new Z.default(s.toNumber()):new Z.default(Math.ceil(s.toNumber()))},Vh=(e,t,n)=>{if(e.lte(0))return new Z.default(0);var r=[1,2,2.5,5],i=e.toNumber(),a=Math.floor(new Z.default(i).abs().log(10).toNumber()),o=new Z.default(10).pow(a),s=e.div(o).toNumber(),c=r.findIndex(e=>e>=s-1e-10);if(c===-1&&(o=o.mul(10),c=0),c+=n,c>=r.length){var l=Math.floor(c/r.length);c%=r.length,o=o.mul(new Z.default(10).pow(l))}var u=r[c]??1,d=new Z.default(u).mul(o);return t?d:new Z.default(Math.ceil(d.toNumber()))},Hh=(e,t,n)=>{var r=new Z.default(1),i=new Z.default(e);if(!i.isint()&&n){var a=Math.abs(e);a<1?(r=new Z.default(10).pow(jh(e)-1),i=new Z.default(Math.floor(i.div(r).toNumber())).mul(r)):a>1&&(i=new Z.default(Math.floor(e)))}else e===0?i=new Z.default(Math.floor((t-1)/2)):n||(i=new Z.default(Math.floor(e)));for(var o=Math.floor((t-1)/2),s=[],c=0;c<t;c++)s.push(i.add(new Z.default(c-o).mul(r)).toNumber());return s},Uh=function(e,t,n,r){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:Bh;if(!Number.isFinite((t-e)/(n-1)))return{step:new Z.default(0),tickMin:new Z.default(0),tickMax:new Z.default(0)};var o=a(new Z.default(t).sub(e).div(n-1),r,i),s;e<=0&&t>=0?s=new Z.default(0):(s=new Z.default(e).add(t).div(2),s=s.sub(new Z.default(s).mod(o)));var c=Math.ceil(s.sub(e).div(o).toNumber()),l=Math.ceil(new Z.default(t).sub(s).div(o).toNumber()),u=c+l+1;return u>n?Uh(e,t,n,r,i+1,a):(u<n&&(l=t>0?l+(n-u):l,c=t>0?c:c+(n-u)),{step:o,tickMin:s.sub(new Z.default(c).mul(o)),tickMax:s.add(new Z.default(l).mul(o))})},Wh=function(e){var t=Nh(e,2),n=t[0],r=t[1],i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:`auto`,s=Math.max(i,2),c=Nh(zh([n,r]),2),l=c[0],u=c[1];if(l===-1/0||u===1/0){var d=u===1/0?[l,...Array(i-1).fill(1/0)]:[...Array(i-1).fill(-1/0),u];return n>r?d.reverse():d}if(l===u)return Hh(l,i,a);var f=Uh(l,u,s,a,0,o===`snap125`?Vh:Bh),p=f.step,m=f.tickMin,h=f.tickMax,g=Mh(m,h.add(new Z.default(.1).mul(p)),p);return n>r?g.reverse():g},Gh=function(e,t){var n=Nh(e,2),r=n[0],i=n[1],a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:`auto`,s=Nh(zh([r,i]),2),c=s[0],l=s[1];if(c===-1/0||l===1/0)return[r,i];if(c===l)return[c];var u=o===`snap125`?Vh:Bh,d=Math.max(t,2),f=u(new Z.default(l).sub(c).div(d-1),a,0),p=[...Mh(new Z.default(c),new Z.default(l),f),l];if(a===!1){p=p.map(e=>Math.round(e));var m=p.length-1;m>0&&p[m]===p[m-1]&&(p=p.slice(0,m))}return r>i?p.reverse():p},Kh=e=>e.rootProps.barCategoryGap,qh=e=>e.rootProps.stackOffset,Jh=e=>e.rootProps.reverseStackOrder,Yh=e=>e.options.chartName,Xh=e=>e.rootProps.syncId,Zh=e=>e.rootProps.syncMethod,Qh=e=>e.options.eventEmitter,$h=e=>e.rootProps.baseValue,eg={grid:-100,barBackground:-50,area:100,cursorRectangle:200,bar:300,line:400,axis:500,scatter:600,activeBar:1e3,cursorLine:1100,activeDot:1200,label:2e3},tg={allowDecimals:!1,allowDuplicatedCategory:!0,allowDataOverflow:!1,angle:0,angleAxisId:0,axisLine:!0,axisLineType:`polygon`,cx:0,cy:0,hide:!1,includeHidden:!1,label:!1,niceTicks:`auto`,orientation:`outer`,reversed:!1,scale:`auto`,tick:!0,tickLine:!0,tickSize:8,type:`auto`,zIndex:eg.axis},ng={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!0,angle:0,axisLine:!0,includeHidden:!1,hide:!1,niceTicks:`auto`,label:!1,orientation:`right`,radiusAxisId:0,reversed:!1,scale:`auto`,stroke:`#ccc`,tick:!0,tickCount:5,tickLine:!0,type:`auto`,zIndex:eg.axis},rg=(e,t)=>{if(e&&t)return e!=null&&e.reversed?[t[1],t[0]]:t};function ig(e,t,n){if(n!==`auto`)return n;if(e!=null)return cu(e,t)?`category`:`number`}function ag(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function og(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ag(Object(n),!0).forEach(function(t){sg(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ag(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function sg(e,t,n){return(t=cg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cg(e){var t=lg(e,`string`);return typeof t==`symbol`?t:t+``}function lg(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ug={allowDataOverflow:tg.allowDataOverflow,allowDecimals:tg.allowDecimals,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:tg.angleAxisId,includeHidden:!1,name:void 0,reversed:tg.reversed,scale:tg.scale,tick:tg.tick,tickCount:void 0,ticks:void 0,type:tg.type,unit:void 0,niceTicks:`auto`},dg={allowDataOverflow:ng.allowDataOverflow,allowDecimals:ng.allowDecimals,allowDuplicatedCategory:ng.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:ng.radiusAxisId,includeHidden:ng.includeHidden,name:void 0,reversed:ng.reversed,scale:ng.scale,tick:ng.tick,tickCount:ng.tickCount,ticks:void 0,type:ng.type,unit:void 0,niceTicks:`auto`},fg=V([(e,t)=>{if(t!=null)return e.polarAxis.angleAxis[t]},Md],(e,t)=>{if(e!=null)return e;var n=ig(t,`angleAxis`,ug.type)??`category`;return og(og({},ug),{},{type:n})}),pg=V([(e,t)=>e.polarAxis.radiusAxis[t],Md],(e,t)=>{if(e!=null)return e;var n=ig(t,`radiusAxis`,dg.type)??`category`;return og(og({},dg),{},{type:n})}),mg=e=>e.polarOptions,hg=V([Cu,wu,Bu],Um),gg=V([mg,hg],(e,t)=>{if(e!=null)return Or(e.innerRadius,t,0)}),_g=V([mg,hg],(e,t)=>{if(e!=null)return Or(e.outerRadius,t,t*.8)}),vg=V([mg],e=>e==null?[0,0]:[e.startAngle,e.endAngle]);V([fg,vg],rg);var yg=V([hg,gg,_g],(e,t,n)=>{if(e!=null&&t!=null&&n!=null)return[t,n]});V([pg,yg],rg);var bg=V([kd,mg,gg,_g,Cu,wu],(e,t,n,r,i,a)=>{if(!(e!==`centric`&&e!==`radial`||t==null||n==null||r==null)){var o=t.cx,s=t.cy,c=t.startAngle,l=t.endAngle;return{cx:Or(o,i,i/2),cy:Or(s,a,a/2),innerRadius:n,outerRadius:r,startAngle:c,endAngle:l,clockWise:!1}}}),xg=(e,t)=>t,Sg=(e,t,n)=>n;function Cg(e){return e?.id}function wg(e,t,n){var r=t.chartData,i=r===void 0?[]:r,a=n.allowDuplicatedCategory,o=n.dataKey,s=new Map;return e.forEach(e=>{var t=e.data??i;if(t!=null&&t.length!==0){var n=Cg(e);t.forEach((t,r)=>{var i=o==null||a?r:String(ou(t,o,null)),c=ou(t,e.dataKey,0),l=s.has(i)?s.get(i):{};Object.assign(l,{[n]:c}),s.set(i,l)})}}),Array.from(s.values())}function Tg(e){return`stackId`in e&&e.stackId!=null&&e.dataKey!=null}var Eg=(e,t)=>e===t?!0:e==null||t==null?!1:e[0]===t[0]&&e[1]===t[1];function Dg(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===0&&t.length===0?!0:e===t}function Og(e,t){if(e.length===t.length){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return!1}var kg=e=>{var t=kd(e);return t===`horizontal`?`xAxis`:t===`vertical`?`yAxis`:t===`centric`?`angleAxis`:`radiusAxis`},Ag=e=>e.tooltip.settings.axisId;function jg(e){if(e!=null){var t=e.ticks,n=e.bandwidth,r=e.range(),i=[Math.min(...r),Math.max(...r)];return{domain:()=>e.domain(),range:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(()=>i),rangeMin:()=>i[0],rangeMax:()=>i[1],isInRange(e){var t=i[0],n=i[1];return t<=n?e>=t&&e<=n:e>=n&&e<=t},bandwidth:n?()=>n.call(e):void 0,ticks:t?n=>t.call(e,n):void 0,map:(t,n)=>{var r=e(t);if(r!=null){if(e.bandwidth&&n!=null&&n.position){var i=e.bandwidth();switch(n.position){case`middle`:r+=i/2;break;case`end`:r+=i}}return r}}}}}var Mg=(e,t)=>{if(t!=null)switch(e){case`linear`:if(!Dh(t)){for(var n,r,i=0;i<t.length;i++){var a=t[i];G(a)&&((n===void 0||a<n)&&(n=a),(r===void 0||a>r)&&(r=a))}return n!==void 0&&r!==void 0?[n,r]:void 0}return t;default:return t}};function Ng(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Pg(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Fg(e){let t,n,r;e.length===2?(t=e===Ng||e===Pg?e:Ig,n=e,r=e):(t=Ng,n=(t,n)=>Ng(e(t),n),r=(t,n)=>e(t)-n);function i(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<0?i=t+1:a=t}while(i<a)}return i}function a(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<=0?i=t+1:a=t}while(i<a)}return i}function o(e,t,n=0,a=e.length){let o=i(e,t,n,a-1);return o>n&&r(e[o-1],t)>-r(e[o],t)?o-1:o}return{left:i,center:o,right:a}}function Ig(){return 0}function Lg(e){return e===null?NaN:+e}function*Rg(e,t){if(t===void 0)for(let t of e)t!=null&&(t=+t)>=t&&(yield t);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}var zg=Fg(Ng),Bg=zg.right;zg.left,Fg(Lg).center;var Vg=class extends Map{constructor(e,t=Gg){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(let[t,n]of e)this.set(t,n)}get(e){return super.get(Hg(this,e))}has(e){return super.has(Hg(this,e))}set(e,t){return super.set(Ug(this,e),t)}delete(e){return super.delete(Wg(this,e))}};function Hg({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):n}function Ug({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function Wg({_intern:e,_key:t},n){let r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function Gg(e){return typeof e==`object`&&e?e.valueOf():e}function Kg(e=Ng){if(e===Ng)return qg;if(typeof e!=`function`)throw TypeError(`compare is not a function`);return(t,n)=>{let r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function qg(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:+(e>t))}var Jg=Math.sqrt(50),Yg=Math.sqrt(10),Xg=Math.sqrt(2);function Zg(e,t,n){let r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/10**i,o=a>=Jg?10:a>=Yg?5:a>=Xg?2:1,s,c,l;return i<0?(l=10**-i/o,s=Math.round(e*l),c=Math.round(t*l),s/l<e&&++s,c/l>t&&--c,l=-l):(l=10**i*o,s=Math.round(e/l),c=Math.round(t/l),s*l<e&&++s,c*l>t&&--c),c<s&&.5<=n&&n<2?Zg(e,t,n*2):[s,c,l]}function Qg(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];let r=t<e,[i,a,o]=r?Zg(t,e,n):Zg(e,t,n);if(!(a>=i))return[];let s=a-i+1,c=Array(s);if(r){if(o<0)for(let e=0;e<s;++e)c[e]=(a-e)/-o;else for(let e=0;e<s;++e)c[e]=(a-e)*o}else if(o<0)for(let e=0;e<s;++e)c[e]=(i+e)/-o;else for(let e=0;e<s;++e)c[e]=(i+e)*o;return c}function $g(e,t,n){return t=+t,e=+e,n=+n,Zg(e,t,n)[2]}function e_(e,t,n){t=+t,e=+e,n=+n;let r=t<e,i=r?$g(t,e,n):$g(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function t_(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n<t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n<i||n===void 0&&i>=i)&&(n=i)}return n}function n_(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n>t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n>i||n===void 0&&i>=i)&&(n=i)}return n}function r_(e,t,n=0,r=1/0,i){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(i=i===void 0?qg:Kg(i);r>n;){if(r-n>600){let a=r-n+1,o=t-n+1,s=Math.log(a),c=.5*Math.exp(2*s/3),l=.5*Math.sqrt(s*c*(a-c)/a)*(o-a/2<0?-1:1),u=Math.max(n,Math.floor(t-o*c/a+l)),d=Math.min(r,Math.floor(t+(a-o)*c/a+l));r_(e,t,u,d,i)}let a=e[t],o=n,s=r;for(i_(e,n,t),i(e[r],a)>0&&i_(e,n,r);o<s;){for(i_(e,o,s),++o,--s;i(e[o],a)<0;)++o;for(;i(e[s],a)>0;)--s}i(e[n],a)===0?i_(e,n,s):(++s,i_(e,s,r)),s<=t&&(n=s+1),t<=s&&(r=s-1)}return e}function i_(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function a_(e,t,n){if(e=Float64Array.from(Rg(e,n)),(r=e.length)&&!isNaN(t=+t)){if(t<=0||r<2)return n_(e);if(t>=1)return t_(e);var r,i=(r-1)*t,a=Math.floor(i),o=t_(r_(e,a).subarray(0,a+1));return o+(n_(e.subarray(a+1))-o)*(i-a)}}function o_(e,t,n=Lg){if((r=e.length)&&!isNaN(t=+t)){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,i=(r-1)*t,a=Math.floor(i),o=+n(e[a],a,e);return o+(+n(e[a+1],a+1,e)-o)*(i-a)}}function s_(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,a=Array(i);++r<i;)a[r]=e+r*n;return a}function c_(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e)}return this}function l_(e,t){switch(arguments.length){case 0:break;case 1:typeof e==`function`?this.interpolator(e):this.range(e);break;default:this.domain(e),typeof t==`function`?this.interpolator(t):this.range(t)}return this}var u_=Symbol(`implicit`);function d_(){var e=new Vg,t=[],n=[],r=u_;function i(i){let a=e.get(i);if(a===void 0){if(r!==u_)return r;e.set(i,a=t.push(i)-1)}return n[a%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Vg;for(let r of n)e.has(r)||e.set(r,t.push(r)-1);return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return d_(t,n).unknown(r)},c_.apply(i,arguments),i}function f_(){var e=d_().unknown(void 0),t=e.domain,n=e.range,r=0,i=1,a,o,s=!1,c=0,l=0,u=.5;delete e.unknown;function d(){var e=t().length,d=i<r,f=d?i:r,p=d?r:i;a=(p-f)/Math.max(1,e-c+l*2),s&&(a=Math.floor(a)),f+=(p-f-a*(e-c))*u,o=a*(1-c),s&&(f=Math.round(f),o=Math.round(o));var m=s_(e).map(function(e){return f+a*e});return n(d?m.reverse():m)}return e.domain=function(e){return arguments.length?(t(e),d()):t()},e.range=function(e){return arguments.length?([r,i]=e,r=+r,i=+i,d()):[r,i]},e.rangeRound=function(e){return[r,i]=e,r=+r,i=+i,s=!0,d()},e.bandwidth=function(){return o},e.step=function(){return a},e.round=function(e){return arguments.length?(s=!!e,d()):s},e.padding=function(e){return arguments.length?(c=Math.min(1,l=+e),d()):c},e.paddingInner=function(e){return arguments.length?(c=Math.min(1,e),d()):c},e.paddingOuter=function(e){return arguments.length?(l=+e,d()):l},e.align=function(e){return arguments.length?(u=Math.max(0,Math.min(1,e)),d()):u},e.copy=function(){return f_(t(),[r,i]).round(s).paddingInner(c).paddingOuter(l).align(u)},c_.apply(d(),arguments)}function p_(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return p_(t())},e}function m_(){return p_(f_.apply(null,arguments).paddingInner(1))}function h_(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function g_(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function __(){}var v_=.7,y_=1/v_,b_=`\\s*([+-]?\\d+)\\s*`,x_=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,S_=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,C_=/^#([0-9a-f]{3,8})$/,w_=RegExp(`^rgb\\(${b_},${b_},${b_}\\)$`),T_=RegExp(`^rgb\\(${S_},${S_},${S_}\\)$`),E_=RegExp(`^rgba\\(${b_},${b_},${b_},${x_}\\)$`),D_=RegExp(`^rgba\\(${S_},${S_},${S_},${x_}\\)$`),O_=RegExp(`^hsl\\(${x_},${S_},${S_}\\)$`),k_=RegExp(`^hsla\\(${x_},${S_},${S_},${x_}\\)$`),A_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};h_(__,F_,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:j_,formatHex:j_,formatHex8:M_,formatHsl:N_,formatRgb:P_,toString:P_});function j_(){return this.rgb().formatHex()}function M_(){return this.rgb().formatHex8()}function N_(){return J_(this).formatHsl()}function P_(){return this.rgb().formatRgb()}function F_(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=C_.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?I_(t):n===3?new B_(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?L_(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?L_(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=w_.exec(e))?new B_(t[1],t[2],t[3],1):(t=T_.exec(e))?new B_(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=E_.exec(e))?L_(t[1],t[2],t[3],t[4]):(t=D_.exec(e))?L_(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=O_.exec(e))?q_(t[1],t[2]/100,t[3]/100,1):(t=k_.exec(e))?q_(t[1],t[2]/100,t[3]/100,t[4]):A_.hasOwnProperty(e)?I_(A_[e]):e===`transparent`?new B_(NaN,NaN,NaN,0):null}function I_(e){return new B_(e>>16&255,e>>8&255,e&255,1)}function L_(e,t,n,r){return r<=0&&(e=t=n=NaN),new B_(e,t,n,r)}function R_(e){return e instanceof __||(e=F_(e)),e?(e=e.rgb(),new B_(e.r,e.g,e.b,e.opacity)):new B_}function z_(e,t,n,r){return arguments.length===1?R_(e):new B_(e,t,n,r??1)}function B_(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}h_(B_,z_,g_(__,{brighter(e){return e=e==null?y_:y_**+e,new B_(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?v_:v_**+e,new B_(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new B_(G_(this.r),G_(this.g),G_(this.b),W_(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:V_,formatHex:V_,formatHex8:H_,formatRgb:U_,toString:U_}));function V_(){return`#${K_(this.r)}${K_(this.g)}${K_(this.b)}`}function H_(){return`#${K_(this.r)}${K_(this.g)}${K_(this.b)}${K_((isNaN(this.opacity)?1:this.opacity)*255)}`}function U_(){let e=W_(this.opacity);return`${e===1?`rgb(`:`rgba(`}${G_(this.r)}, ${G_(this.g)}, ${G_(this.b)}${e===1?`)`:`, ${e})`}`}function W_(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function G_(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function K_(e){return e=G_(e),(e<16?`0`:``)+e.toString(16)}function q_(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new X_(e,t,n,r)}function J_(e){if(e instanceof X_)return new X_(e.h,e.s,e.l,e.opacity);if(e instanceof __||(e=F_(e)),!e)return new X_;if(e instanceof X_)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new X_(o,s,c,e.opacity)}function Y_(e,t,n,r){return arguments.length===1?J_(e):new X_(e,t,n,r??1)}function X_(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}h_(X_,Y_,g_(__,{brighter(e){return e=e==null?y_:y_**+e,new X_(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?v_:v_**+e,new X_(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new B_($_(e>=240?e-240:e+120,i,r),$_(e,i,r),$_(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new X_(Z_(this.h),Q_(this.s),Q_(this.l),W_(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=W_(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Z_(this.h)}, ${Q_(this.s)*100}%, ${Q_(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Z_(e){return e=(e||0)%360,e<0?e+360:e}function Q_(e){return Math.max(0,Math.min(1,e||0))}function $_(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var ev=e=>()=>e;function tv(e,t){return function(n){return e+n*t}}function nv(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function rv(e){return(e=+e)==1?iv:function(t,n){return n-t?nv(t,n,e):ev(isNaN(t)?n:t)}}function iv(e,t){var n=t-e;return n?tv(e,n):ev(isNaN(e)?t:e)}var av=(function e(t){var n=rv(t);function r(e,t){var r=n((e=z_(e)).r,(t=z_(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=iv(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function ov(e,t){t||=[];var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function sv(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function cv(e,t){for(var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=Array(r),a=Array(n),o=0;o<r;++o)i[o]=_v(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(e){for(o=0;o<r;++o)a[o]=i[o](e);return a}}function lv(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function uv(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function dv(e,t){var n={},r={},i;for(i in(typeof e!=`object`||!e)&&(e={}),(typeof t!=`object`||!t)&&(t={}),t)i in e?n[i]=_v(e[i],t[i]):r[i]=t[i];return function(e){for(i in n)r[i]=n[i](e);return r}}var fv=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pv=new RegExp(fv.source,`g`);function mv(e){return function(){return e}}function hv(e){return function(t){return e(t)+``}}function gv(e,t){var n=fv.lastIndex=pv.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=fv.exec(e))&&(i=pv.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:uv(r,i)})),n=pv.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?hv(c[0].x):mv(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}function _v(e,t){var n=typeof t,r;return t==null||n===`boolean`?ev(t):(n===`number`?uv:n===`string`?(r=F_(t))?(t=r,av):gv:t instanceof F_?av:t instanceof Date?lv:sv(t)?ov:Array.isArray(t)?cv:typeof t.valueOf!=`function`&&typeof t.toString!=`function`||isNaN(t)?dv:uv)(e,t)}function vv(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function yv(e,t){t===void 0&&(t=e,e=_v);for(var n=0,r=t.length-1,i=t[0],a=Array(r<0?0:r);n<r;)a[n]=e(i,i=t[++n]);return function(e){var t=Math.max(0,Math.min(r-1,Math.floor(e*=r)));return a[t](e-t)}}function bv(e){return function(){return e}}function xv(e){return+e}var Sv=[0,1];function Cv(e){return e}function wv(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:bv(isNaN(t)?NaN:.5)}function Tv(e,t){var n;return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}function Ev(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=wv(i,r),a=n(o,a)):(r=wv(r,i),a=n(a,o)),function(e){return a(r(e))}}function Dv(e,t,n){var r=Math.min(e.length,t.length)-1,i=Array(r),a=Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=wv(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(t){var n=Bg(e,t,1,r)-1;return a[n](i[n](t))}}function Ov(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function kv(){var e=Sv,t=Sv,n=_v,r,i,a,o=Cv,s,c,l;function u(){var n=Math.min(e.length,t.length);return o!==Cv&&(o=Tv(e[0],e[n-1])),s=n>2?Dv:Ev,c=l=null,d}function d(i){return i==null||isNaN(i=+i)?a:(c||=s(e.map(r),t,n))(r(o(i)))}return d.invert=function(n){return o(i((l||=s(t,e.map(r),uv))(n)))},d.domain=function(t){return arguments.length?(e=Array.from(t,xv),u()):e.slice()},d.range=function(e){return arguments.length?(t=Array.from(e),u()):t.slice()},d.rangeRound=function(e){return t=Array.from(e),n=vv,u()},d.clamp=function(e){return arguments.length?(o=e?!0:Cv,u()):o!==Cv},d.interpolate=function(e){return arguments.length?(n=e,u()):n},d.unknown=function(e){return arguments.length?(a=e,d):a},function(e,t){return r=e,i=t,u()}}function Av(){return kv()(Cv,Cv)}function jv(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString(`en`).replace(/,/g,``):e.toString(10)}function Mv(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf(`e`),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Nv(e){return e=Mv(Math.abs(e)),e?e[1]:NaN}function Pv(e,t){return function(n,r){for(var i=n.length,a=[],o=0,s=e[0],c=0;i>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),a.push(n.substring(i-=s,i+s)),!((c+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(t)}}function Fv(e){return function(t){return t.replace(/[0-9]/g,function(t){return e[+t]})}}var Iv=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Lv(e){if(!(t=Iv.exec(e)))throw Error(`invalid format: `+e);var t;return new Rv({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Lv.prototype=Rv.prototype;function Rv(e){this.fill=e.fill===void 0?` `:e.fill+``,this.align=e.align===void 0?`>`:e.align+``,this.sign=e.sign===void 0?`-`:e.sign+``,this.symbol=e.symbol===void 0?``:e.symbol+``,this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?``:e.type+``}Rv.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?`0`:``)+(this.width===void 0?``:Math.max(1,this.width|0))+(this.comma?`,`:``)+(this.precision===void 0?``:`.`+Math.max(0,this.precision|0))+(this.trim?`~`:``)+this.type};function zv(e){out:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case`.`:r=i=n;break;case`0`:r===0&&(r=n),i=n;break;default:if(!+e[n])break out;r>0&&(r=0)}return r>0?e.slice(0,r)+e.slice(i+1):e}var Bv;function Vv(e,t){var n=Mv(e,t);if(!n)return Bv=void 0,e.toPrecision(t);var r=n[0],i=n[1],a=i-(Bv=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+Array(a-o+1).join(`0`):a>0?r.slice(0,a)+`.`+r.slice(a):`0.`+Array(1-a).join(`0`)+Mv(e,Math.max(0,t+a-1))[0]}function Hv(e,t){var n=Mv(e,t);if(!n)return e+``;var r=n[0],i=n[1];return i<0?`0.`+Array(-i).join(`0`)+r:r.length>i+1?r.slice(0,i+1)+`.`+r.slice(i+1):r+Array(i-r.length+2).join(`0`)}var Uv={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+``,d:jv,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Hv(e*100,t),r:Hv,s:Vv,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Wv(e){return e}var Gv=Array.prototype.map,Kv=[`y`,`z`,`a`,`f`,`p`,`n`,`µ`,`m`,``,`k`,`M`,`G`,`T`,`P`,`E`,`Z`,`Y`];function qv(e){var t=e.grouping===void 0||e.thousands===void 0?Wv:Pv(Gv.call(e.grouping,Number),e.thousands+``),n=e.currency===void 0?``:e.currency[0]+``,r=e.currency===void 0?``:e.currency[1]+``,i=e.decimal===void 0?`.`:e.decimal+``,a=e.numerals===void 0?Wv:Fv(Gv.call(e.numerals,String)),o=e.percent===void 0?`%`:e.percent+``,s=e.minus===void 0?`−`:e.minus+``,c=e.nan===void 0?`NaN`:e.nan+``;function l(e,l){e=Lv(e);var u=e.fill,d=e.align,f=e.sign,p=e.symbol,m=e.zero,h=e.width,g=e.comma,_=e.precision,v=e.trim,y=e.type;y===`n`?(g=!0,y=`g`):Uv[y]||(_===void 0&&(_=12),v=!0,y=`g`),(m||u===`0`&&d===`=`)&&(m=!0,u=`0`,d=`=`);var b=(l&&l.prefix!==void 0?l.prefix:``)+(p===`$`?n:p===`#`&&/[boxX]/.test(y)?`0`+y.toLowerCase():``),x=(p===`$`?r:/[%p]/.test(y)?o:``)+(l&&l.suffix!==void 0?l.suffix:``),S=Uv[y],C=/[defgprs%]/.test(y);_=_===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function w(e){var n=b,r=x,o,l,p;if(y===`c`)r=S(e)+r,e=``;else{e=+e;var w=e<0||1/e<0;if(e=isNaN(e)?c:S(Math.abs(e),_),v&&(e=zv(e)),w&&+e==0&&f!==`+`&&(w=!1),n=(w?f===`(`?f:s:f===`-`||f===`(`?``:f)+n,r=(y===`s`&&!isNaN(e)&&Bv!==void 0?Kv[8+Bv/3]:``)+r+(w&&f===`(`?`)`:``),C){for(o=-1,l=e.length;++o<l;)if(p=e.charCodeAt(o),48>p||p>57){r=(p===46?i+e.slice(o+1):e.slice(o))+r,e=e.slice(0,o);break}}}g&&!m&&(e=t(e,1/0));var T=n.length+e.length+r.length,E=T<h?Array(h-T+1).join(u):``;switch(g&&m&&(e=t(E+e,E.length?h-r.length:1/0),E=``),d){case`<`:e=n+e+r+E;break;case`=`:e=n+E+e+r;break;case`^`:e=E.slice(0,T=E.length>>1)+n+e+r+E.slice(T);break;default:e=E+n+e+r}return a(e)}return w.toString=function(){return e+``},w}function u(e,t){var n=Math.max(-8,Math.min(8,Math.floor(Nv(t)/3)))*3,r=10**-n,i=l((e=Lv(e),e.type=`f`,e),{suffix:Kv[8+n/3]});return function(e){return i(r*e)}}return{format:l,formatPrefix:u}}var Jv,Yv,Xv;Zv({thousands:`,`,grouping:[3],currency:[`$`,``]});function Zv(e){return Jv=qv(e),Yv=Jv.format,Xv=Jv.formatPrefix,Jv}function Qv(e){return Math.max(0,-Nv(Math.abs(e)))}function $v(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Nv(t)/3)))*3-Nv(Math.abs(e)))}function ey(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Nv(t)-Nv(e))+1}function ty(e,t,n,r){var i=e_(e,t,n),a;switch(r=Lv(r??`,f`),r.type){case`s`:var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=$v(i,o))&&(r.precision=a),Xv(r,o);case``:case`e`:case`g`:case`p`:case`r`:r.precision==null&&!isNaN(a=ey(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type===`e`));break;case`f`:case`%`:r.precision==null&&!isNaN(a=Qv(i))&&(r.precision=a-(r.type===`%`)*2)}return Yv(r)}function ny(e){var t=e.domain;return e.ticks=function(e){var n=t();return Qg(n[0],n[n.length-1],e??10)},e.tickFormat=function(e,n){var r=t();return ty(r[0],r[r.length-1],e??10,n)},e.nice=function(n){n??=10;var r=t(),i=0,a=r.length-1,o=r[i],s=r[a],c,l,u=10;for(s<o&&(l=o,o=s,s=l,l=i,i=a,a=l);u-->0;){if(l=$g(o,s,n),l===c)return r[i]=o,r[a]=s,t(r);if(l>0)o=Math.floor(o/l)*l,s=Math.ceil(s/l)*l;else if(l<0)o=Math.ceil(o*l)/l,s=Math.floor(s*l)/l;else break;c=l}return e},e}function ry(){var e=Av();return e.copy=function(){return Ov(e,ry())},c_.apply(e,arguments),ny(e)}function iy(e){var t;function n(e){return e==null||isNaN(e=+e)?t:e}return n.invert=n,n.domain=n.range=function(t){return arguments.length?(e=Array.from(t,xv),n):e.slice()},n.unknown=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return iy(e).unknown(t)},e=arguments.length?Array.from(e,xv):[0,1],ny(n)}function ay(e,t){e=e.slice();var n=0,r=e.length-1,i=e[n],a=e[r],o;return a<i&&(o=n,n=r,r=o,o=i,i=a,a=o),e[n]=t.floor(i),e[r]=t.ceil(a),e}function oy(e){return Math.log(e)}function sy(e){return Math.exp(e)}function cy(e){return-Math.log(-e)}function ly(e){return-Math.exp(-e)}function uy(e){return isFinite(e)?+(`1e`+e):e<0?0:e}function dy(e){return e===10?uy:e===Math.E?Math.exp:t=>e**+t}function fy(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function py(e){return(t,n)=>-e(-t,n)}function my(e){let t=e(oy,sy),n=t.domain,r=10,i,a;function o(){return i=fy(r),a=dy(r),n()[0]<0?(i=py(i),a=py(a),e(cy,ly)):e(oy,sy),t}return t.base=function(e){return arguments.length?(r=+e,o()):r},t.domain=function(e){return arguments.length?(n(e),o()):n()},t.ticks=e=>{let t=n(),o=t[0],s=t[t.length-1],c=s<o;c&&([o,s]=[s,o]);let l=i(o),u=i(s),d,f,p=e==null?10:+e,m=[];if(!(r%1)&&u-l<p){if(l=Math.floor(l),u=Math.ceil(u),o>0){for(;l<=u;++l)for(d=1;d<r;++d)if(f=l<0?d/a(-l):d*a(l),!(f<o)){if(f>s)break;m.push(f)}}else for(;l<=u;++l)for(d=r-1;d>=1;--d)if(f=l>0?d/a(-l):d*a(l),!(f<o)){if(f>s)break;m.push(f)}m.length*2<p&&(m=Qg(o,s,p))}else m=Qg(l,u,Math.min(u-l,p)).map(a);return c?m.reverse():m},t.tickFormat=(e,n)=>{if(e??=10,n??=r===10?`s`:`,`,typeof n!=`function`&&(!(r%1)&&(n=Lv(n)).precision==null&&(n.trim=!0),n=Yv(n)),e===1/0)return n;let o=Math.max(1,r*e/t.ticks().length);return e=>{let t=e/a(Math.round(i(e)));return t*r<r-.5&&(t*=r),t<=o?n(e):``}},t.nice=()=>n(ay(n(),{floor:e=>a(Math.floor(i(e))),ceil:e=>a(Math.ceil(i(e)))})),t}function hy(){let e=my(kv()).domain([1,10]);return e.copy=()=>Ov(e,hy()).base(e.base()),c_.apply(e,arguments),e}function gy(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function _y(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function vy(e){var t=1,n=e(gy(t),_y(t));return n.constant=function(n){return arguments.length?e(gy(t=+n),_y(t)):t},ny(n)}function yy(){var e=vy(kv());return e.copy=function(){return Ov(e,yy()).constant(e.constant())},c_.apply(e,arguments)}function by(e){return function(t){return t<0?-((-t)**+e):t**+e}}function xy(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Sy(e){return e<0?-e*e:e*e}function Cy(e){var t=e(Cv,Cv),n=1;function r(){return n===1?e(Cv,Cv):n===.5?e(xy,Sy):e(by(n),by(1/n))}return t.exponent=function(e){return arguments.length?(n=+e,r()):n},ny(t)}function wy(){var e=Cy(kv());return e.copy=function(){return Ov(e,wy()).exponent(e.exponent())},c_.apply(e,arguments),e}function Ty(){return wy.apply(null,arguments).exponent(.5)}function Ey(e){return Math.sign(e)*e*e}function Dy(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function Oy(){var e=Av(),t=[0,1],n=!1,r;function i(t){var i=Dy(e(t));return isNaN(i)?r:n?Math.round(i):i}return i.invert=function(t){return e.invert(Ey(t))},i.domain=function(t){return arguments.length?(e.domain(t),i):e.domain()},i.range=function(n){return arguments.length?(e.range((t=Array.from(n,xv)).map(Ey)),i):t.slice()},i.rangeRound=function(e){return i.range(e).round(!0)},i.round=function(e){return arguments.length?(n=!!e,i):n},i.clamp=function(t){return arguments.length?(e.clamp(t),i):e.clamp()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return Oy(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},c_.apply(i,arguments),ny(i)}function ky(){var e=[],t=[],n=[],r;function i(){var r=0,i=Math.max(1,t.length);for(n=Array(i-1);++r<i;)n[r-1]=o_(e,r/i);return a}function a(e){return e==null||isNaN(e=+e)?r:t[Bg(n,e)]}return a.invertExtent=function(r){var i=t.indexOf(r);return i<0?[NaN,NaN]:[i>0?n[i-1]:e[0],i<n.length?n[i]:e[e.length-1]]},a.domain=function(t){if(!arguments.length)return e.slice();e=[];for(let n of t)n!=null&&!isNaN(n=+n)&&e.push(n);return e.sort(Ng),i()},a.range=function(e){return arguments.length?(t=Array.from(e),i()):t.slice()},a.unknown=function(e){return arguments.length?(r=e,a):r},a.quantiles=function(){return n.slice()},a.copy=function(){return ky().domain(e).range(t).unknown(r)},c_.apply(a,arguments)}function Ay(){var e=0,t=1,n=1,r=[.5],i=[0,1],a;function o(e){return e!=null&&e<=e?i[Bg(r,e,0,n)]:a}function s(){var i=-1;for(r=Array(n);++i<n;)r[i]=((i+1)*t-(i-n)*e)/(n+1);return o}return o.domain=function(n){return arguments.length?([e,t]=n,e=+e,t=+t,s()):[e,t]},o.range=function(e){return arguments.length?(n=(i=Array.from(e)).length-1,s()):i.slice()},o.invertExtent=function(a){var o=i.indexOf(a);return o<0?[NaN,NaN]:o<1?[e,r[0]]:o>=n?[r[n-1],t]:[r[o-1],r[o]]},o.unknown=function(e){return arguments.length&&(a=e),o},o.thresholds=function(){return r.slice()},o.copy=function(){return Ay().domain([e,t]).range(i).unknown(a)},c_.apply(ny(o),arguments)}function jy(){var e=[.5],t=[0,1],n,r=1;function i(i){return i!=null&&i<=i?t[Bg(e,i,0,r)]:n}return i.domain=function(n){return arguments.length?(e=Array.from(n),r=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(n){return arguments.length?(t=Array.from(n),r=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(n){var r=t.indexOf(n);return[e[r-1],e[r]]},i.unknown=function(e){return arguments.length?(n=e,i):n},i.copy=function(){return jy().domain(e).range(t).unknown(n)},c_.apply(i,arguments)}var My=new Date,Ny=new Date;function Py(e,t,n,r){function i(t){return e(t=arguments.length===0?new Date:new Date(+t)),t}return i.floor=t=>(e(t=new Date(+t)),t),i.ceil=n=>(e(n=new Date(n-1)),t(n,1),e(n),n),i.round=e=>{let t=i(e),n=i.ceil(e);return e-t<n-e?t:n},i.offset=(e,n)=>(t(e=new Date(+e),n==null?1:Math.floor(n)),e),i.range=(n,r,a)=>{let o=[];if(n=i.ceil(n),a=a==null?1:Math.floor(a),!(n<r)||!(a>0))return o;let s;do o.push(s=new Date(+n)),t(n,a),e(n);while(s<n&&n<r);return o},i.filter=n=>Py(t=>{if(t>=t)for(;e(t),!n(t);)t.setTime(t-1)},(e,r)=>{if(e>=e){if(r<0)for(;++r<=0;)for(;t(e,-1),!n(e););else for(;--r>=0;)for(;t(e,1),!n(e););}}),n&&(i.count=(t,r)=>(My.setTime(+t),Ny.setTime(+r),e(My),e(Ny),Math.floor(n(My,Ny))),i.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?i.filter(r?t=>r(t)%e===0:t=>i.count(0,t)%e===0):i)),i}var Fy=Py(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Fy.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Py(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Fy),Fy.range;var Iy=1e3,Ly=Iy*60,Ry=Ly*60,zy=Ry*24,By=zy*7,Vy=zy*30,Hy=zy*365,Uy=Py(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Iy)},(e,t)=>(t-e)/Iy,e=>e.getUTCSeconds());Uy.range;var Wy=Py(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Iy)},(e,t)=>{e.setTime(+e+t*Ly)},(e,t)=>(t-e)/Ly,e=>e.getMinutes());Wy.range;var Gy=Py(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Ly)},(e,t)=>(t-e)/Ly,e=>e.getUTCMinutes());Gy.range;var Ky=Py(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Iy-e.getMinutes()*Ly)},(e,t)=>{e.setTime(+e+t*Ry)},(e,t)=>(t-e)/Ry,e=>e.getHours());Ky.range;var qy=Py(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Ry)},(e,t)=>(t-e)/Ry,e=>e.getUTCHours());qy.range;var Jy=Py(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Ly)/zy,e=>e.getDate()-1);Jy.range;var Yy=Py(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/zy,e=>e.getUTCDate()-1);Yy.range;var Xy=Py(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/zy,e=>Math.floor(e/zy));Xy.range;function Zy(e){return Py(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(e,t)=>{e.setDate(e.getDate()+t*7)},(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Ly)/By)}var Qy=Zy(0),$y=Zy(1),eb=Zy(2),tb=Zy(3),nb=Zy(4),rb=Zy(5),ib=Zy(6);Qy.range,$y.range,eb.range,tb.range,nb.range,rb.range,ib.range;function ab(e){return Py(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t*7)},(e,t)=>(t-e)/By)}var ob=ab(0),sb=ab(1),cb=ab(2),lb=ab(3),ub=ab(4),db=ab(5),fb=ab(6);ob.range,sb.range,cb.range,lb.range,ub.range,db.range,fb.range;var pb=Py(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());pb.range;var mb=Py(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());mb.range;var hb=Py(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());hb.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Py(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)}),hb.range;var gb=Py(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());gb.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Py(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)}),gb.range;function _b(e,t,n,r,i,a){let o=[[Uy,1,Iy],[Uy,5,5*Iy],[Uy,15,15*Iy],[Uy,30,30*Iy],[a,1,Ly],[a,5,5*Ly],[a,15,15*Ly],[a,30,30*Ly],[i,1,Ry],[i,3,3*Ry],[i,6,6*Ry],[i,12,12*Ry],[r,1,zy],[r,2,2*zy],[n,1,By],[t,1,Vy],[t,3,3*Vy],[e,1,Hy]];function s(e,t,n){let r=t<e;r&&([e,t]=[t,e]);let i=n&&typeof n.range==`function`?n:c(e,t,n),a=i?i.range(e,+t+1):[];return r?a.reverse():a}function c(t,n,r){let i=Math.abs(n-t)/r,a=Fg(([,,e])=>e).right(o,i);if(a===o.length)return e.every(e_(t/Hy,n/Hy,r));if(a===0)return Fy.every(Math.max(e_(t,n,r),1));let[s,c]=o[i/o[a-1][2]<o[a][2]/i?a-1:a];return s.every(c)}return[s,c]}var[vb,yb]=_b(gb,mb,ob,Xy,qy,Gy),[bb,xb]=_b(hb,pb,Qy,Jy,Ky,Wy);function Sb(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Cb(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function wb(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function Tb(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,a=e.days,o=e.shortDays,s=e.months,c=e.shortMonths,l=Mb(i),u=Nb(i),d=Mb(a),f=Nb(a),p=Mb(o),m=Nb(o),h=Mb(s),g=Nb(s),_=Mb(c),v=Nb(c),y={a:N,A:ee,b:te,B:ne,c:null,d:ex,e:ex,f:ax,g:gx,G:vx,H:tx,I:nx,j:rx,L:ix,m:ox,M:sx,p:re,q:ie,Q:Vx,s:Hx,S:cx,u:lx,U:ux,V:fx,w:px,W:mx,x:null,X:null,y:hx,Y:_x,Z:yx,"%":Bx},b={a:ae,A:oe,b:se,B:ce,c:null,d:bx,e:bx,f:Tx,g:Ix,G:Rx,H:xx,I:Sx,j:Cx,L:wx,m:Ex,M:Dx,p:le,q:ue,Q:Vx,s:Hx,S:Ox,u:kx,U:Ax,V:Mx,w:Nx,W:Px,x:null,X:null,y:Fx,Y:Lx,Z:zx,"%":Bx},x={a:E,A:D,b:O,B:k,c:A,d:Wb,e:Wb,f:Xb,g:Bb,G:zb,H:Kb,I:Kb,j:Gb,L:Yb,m:Ub,M:qb,p:T,q:Hb,Q:Qb,s:$b,S:Jb,u:Fb,U:Ib,V:Lb,w:Pb,W:Rb,x:j,X:M,y:Bb,Y:zb,Z:Vb,"%":Zb};y.x=S(n,y),y.X=S(r,y),y.c=S(t,y),b.x=S(n,b),b.X=S(r,b),b.c=S(t,b);function S(e,t){return function(n){var r=[],i=-1,a=0,o=e.length,s,c,l;for(n instanceof Date||(n=new Date(+n));++i<o;)e.charCodeAt(i)===37&&(r.push(e.slice(a,i)),(c=Eb[s=e.charAt(++i)])==null?c=s===`e`?` `:`0`:s=e.charAt(++i),(l=t[s])&&(s=l(n,c)),r.push(s),a=i+1);return r.push(e.slice(a,i)),r.join(``)}}function C(e,t){return function(n){var r=wb(1900,void 0,1),i=w(r,e,n+=``,0),a,o;if(i!=n.length)return null;if(`Q`in r)return new Date(r.Q);if(`s`in r)return new Date(r.s*1e3+(`L`in r?r.L:0));if(t&&!(`Z`in r)&&(r.Z=0),`p`in r&&(r.H=r.H%12+r.p*12),r.m===void 0&&(r.m=`q`in r?r.q:0),`V`in r){if(r.V<1||r.V>53)return null;`w`in r||(r.w=1),`Z`in r?(a=Cb(wb(r.y,0,1)),o=a.getUTCDay(),a=o>4||o===0?sb.ceil(a):sb(a),a=Yy.offset(a,(r.V-1)*7),r.y=a.getUTCFullYear(),r.m=a.getUTCMonth(),r.d=a.getUTCDate()+(r.w+6)%7):(a=Sb(wb(r.y,0,1)),o=a.getDay(),a=o>4||o===0?$y.ceil(a):$y(a),a=Jy.offset(a,(r.V-1)*7),r.y=a.getFullYear(),r.m=a.getMonth(),r.d=a.getDate()+(r.w+6)%7)}else(`W`in r||`U`in r)&&(`w`in r||(r.w=`u`in r?r.u%7:+(`W`in r)),o=`Z`in r?Cb(wb(r.y,0,1)).getUTCDay():Sb(wb(r.y,0,1)).getDay(),r.m=0,r.d=`W`in r?(r.w+6)%7+r.W*7-(o+5)%7:r.w+r.U*7-(o+6)%7);return`Z`in r?(r.H+=r.Z/100|0,r.M+=r.Z%100,Cb(r)):Sb(r)}}function w(e,t,n,r){for(var i=0,a=t.length,o=n.length,s,c;i<a;){if(r>=o)return-1;if(s=t.charCodeAt(i++),s===37){if(s=t.charAt(i++),c=x[s in Eb?t.charAt(i++):s],!c||(r=c(e,n,r))<0)return-1}else if(s!=n.charCodeAt(r++))return-1}return r}function T(e,t,n){var r=l.exec(t.slice(n));return r?(e.p=u.get(r[0].toLowerCase()),n+r[0].length):-1}function E(e,t,n){var r=p.exec(t.slice(n));return r?(e.w=m.get(r[0].toLowerCase()),n+r[0].length):-1}function D(e,t,n){var r=d.exec(t.slice(n));return r?(e.w=f.get(r[0].toLowerCase()),n+r[0].length):-1}function O(e,t,n){var r=_.exec(t.slice(n));return r?(e.m=v.get(r[0].toLowerCase()),n+r[0].length):-1}function k(e,t,n){var r=h.exec(t.slice(n));return r?(e.m=g.get(r[0].toLowerCase()),n+r[0].length):-1}function A(e,n,r){return w(e,t,n,r)}function j(e,t,r){return w(e,n,t,r)}function M(e,t,n){return w(e,r,t,n)}function N(e){return o[e.getDay()]}function ee(e){return a[e.getDay()]}function te(e){return c[e.getMonth()]}function ne(e){return s[e.getMonth()]}function re(e){return i[+(e.getHours()>=12)]}function ie(e){return 1+~~(e.getMonth()/3)}function ae(e){return o[e.getUTCDay()]}function oe(e){return a[e.getUTCDay()]}function se(e){return c[e.getUTCMonth()]}function ce(e){return s[e.getUTCMonth()]}function le(e){return i[+(e.getUTCHours()>=12)]}function ue(e){return 1+~~(e.getUTCMonth()/3)}return{format:function(e){var t=S(e+=``,y);return t.toString=function(){return e},t},parse:function(e){var t=C(e+=``,!1);return t.toString=function(){return e},t},utcFormat:function(e){var t=S(e+=``,b);return t.toString=function(){return e},t},utcParse:function(e){var t=C(e+=``,!0);return t.toString=function(){return e},t}}}var Eb={"-":``,_:` `,0:`0`},Db=/^\s*\d+/,Ob=/^%/,kb=/[\\^$*+?|[\]().{}]/g;function Ab(e,t,n){var r=e<0?`-`:``,i=(r?-e:e)+``,a=i.length;return r+(a<n?Array(n-a+1).join(t)+i:i)}function jb(e){return e.replace(kb,`\\$&`)}function Mb(e){return RegExp(`^(?:`+e.map(jb).join(`|`)+`)`,`i`)}function Nb(e){return new Map(e.map((e,t)=>[e.toLowerCase(),t]))}function Pb(e,t,n){var r=Db.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function Fb(e,t,n){var r=Db.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function Ib(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function Lb(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function Rb(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function zb(e,t,n){var r=Db.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function Bb(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function Vb(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||`00`)),n+r[0].length):-1}function Hb(e,t,n){var r=Db.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function Ub(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Wb(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function Gb(e,t,n){var r=Db.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Kb(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function qb(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function Jb(e,t,n){var r=Db.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function Yb(e,t,n){var r=Db.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function Xb(e,t,n){var r=Db.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function Zb(e,t,n){var r=Ob.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function Qb(e,t,n){var r=Db.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function $b(e,t,n){var r=Db.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function ex(e,t){return Ab(e.getDate(),t,2)}function tx(e,t){return Ab(e.getHours(),t,2)}function nx(e,t){return Ab(e.getHours()%12||12,t,2)}function rx(e,t){return Ab(1+Jy.count(hb(e),e),t,3)}function ix(e,t){return Ab(e.getMilliseconds(),t,3)}function ax(e,t){return ix(e,t)+`000`}function ox(e,t){return Ab(e.getMonth()+1,t,2)}function sx(e,t){return Ab(e.getMinutes(),t,2)}function cx(e,t){return Ab(e.getSeconds(),t,2)}function lx(e){var t=e.getDay();return t===0?7:t}function ux(e,t){return Ab(Qy.count(hb(e)-1,e),t,2)}function dx(e){var t=e.getDay();return t>=4||t===0?nb(e):nb.ceil(e)}function fx(e,t){return e=dx(e),Ab(nb.count(hb(e),e)+(hb(e).getDay()===4),t,2)}function px(e){return e.getDay()}function mx(e,t){return Ab($y.count(hb(e)-1,e),t,2)}function hx(e,t){return Ab(e.getFullYear()%100,t,2)}function gx(e,t){return e=dx(e),Ab(e.getFullYear()%100,t,2)}function _x(e,t){return Ab(e.getFullYear()%1e4,t,4)}function vx(e,t){var n=e.getDay();return e=n>=4||n===0?nb(e):nb.ceil(e),Ab(e.getFullYear()%1e4,t,4)}function yx(e){var t=e.getTimezoneOffset();return(t>0?`-`:(t*=-1,`+`))+Ab(t/60|0,`0`,2)+Ab(t%60,`0`,2)}function bx(e,t){return Ab(e.getUTCDate(),t,2)}function xx(e,t){return Ab(e.getUTCHours(),t,2)}function Sx(e,t){return Ab(e.getUTCHours()%12||12,t,2)}function Cx(e,t){return Ab(1+Yy.count(gb(e),e),t,3)}function wx(e,t){return Ab(e.getUTCMilliseconds(),t,3)}function Tx(e,t){return wx(e,t)+`000`}function Ex(e,t){return Ab(e.getUTCMonth()+1,t,2)}function Dx(e,t){return Ab(e.getUTCMinutes(),t,2)}function Ox(e,t){return Ab(e.getUTCSeconds(),t,2)}function kx(e){var t=e.getUTCDay();return t===0?7:t}function Ax(e,t){return Ab(ob.count(gb(e)-1,e),t,2)}function jx(e){var t=e.getUTCDay();return t>=4||t===0?ub(e):ub.ceil(e)}function Mx(e,t){return e=jx(e),Ab(ub.count(gb(e),e)+(gb(e).getUTCDay()===4),t,2)}function Nx(e){return e.getUTCDay()}function Px(e,t){return Ab(sb.count(gb(e)-1,e),t,2)}function Fx(e,t){return Ab(e.getUTCFullYear()%100,t,2)}function Ix(e,t){return e=jx(e),Ab(e.getUTCFullYear()%100,t,2)}function Lx(e,t){return Ab(e.getUTCFullYear()%1e4,t,4)}function Rx(e,t){var n=e.getUTCDay();return e=n>=4||n===0?ub(e):ub.ceil(e),Ab(e.getUTCFullYear()%1e4,t,4)}function zx(){return`+0000`}function Bx(){return`%`}function Vx(e){return+e}function Hx(e){return Math.floor(e/1e3)}var Ux,Wx,Gx;Kx({dateTime:`%x, %X`,date:`%-m/%-d/%Y`,time:`%-I:%M:%S %p`,periods:[`AM`,`PM`],days:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],shortDays:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],months:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],shortMonths:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`]});function Kx(e){return Ux=Tb(e),Wx=Ux.format,Ux.parse,Gx=Ux.utcFormat,Ux.utcParse,Ux}function qx(e){return new Date(e)}function Jx(e){return e instanceof Date?+e:+new Date(+e)}function Yx(e,t,n,r,i,a,o,s,c,l){var u=Av(),d=u.invert,f=u.domain,p=l(`.%L`),m=l(`:%S`),h=l(`%I:%M`),g=l(`%I %p`),_=l(`%a %d`),v=l(`%b %d`),y=l(`%B`),b=l(`%Y`);function x(e){return(c(e)<e?p:s(e)<e?m:o(e)<e?h:a(e)<e?g:r(e)<e?i(e)<e?_:v:n(e)<e?y:b)(e)}return u.invert=function(e){return new Date(d(e))},u.domain=function(e){return arguments.length?f(Array.from(e,Jx)):f().map(qx)},u.ticks=function(t){var n=f();return e(n[0],n[n.length-1],t??10)},u.tickFormat=function(e,t){return t==null?x:l(t)},u.nice=function(e){var n=f();return(!e||typeof e.range!=`function`)&&(e=t(n[0],n[n.length-1],e??10)),e?f(ay(n,e)):u},u.copy=function(){return Ov(u,Yx(e,t,n,r,i,a,o,s,c,l))},u}function Xx(){return c_.apply(Yx(bb,xb,hb,pb,Qy,Jy,Ky,Wy,Uy,Wx).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Zx(){return c_.apply(Yx(vb,yb,gb,mb,ob,Yy,qy,Gy,Uy,Gx).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Qx(){var e=0,t=1,n,r,i,a,o=Cv,s=!1,c;function l(e){return e==null||isNaN(e=+e)?c:o(i===0?.5:(e=(a(e)-n)*i,s?Math.max(0,Math.min(1,e)):e))}l.domain=function(o){return arguments.length?([e,t]=o,n=a(e=+e),r=a(t=+t),i=n===r?0:1/(r-n),l):[e,t]},l.clamp=function(e){return arguments.length?(s=!!e,l):s},l.interpolator=function(e){return arguments.length?(o=e,l):o};function u(e){return function(t){var n,r;return arguments.length?([n,r]=t,o=e(n,r),l):[o(0),o(1)]}}return l.range=u(_v),l.rangeRound=u(vv),l.unknown=function(e){return arguments.length?(c=e,l):c},function(o){return a=o,n=o(e),r=o(t),i=n===r?0:1/(r-n),l}}function $x(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function eS(){var e=ny(Qx()(Cv));return e.copy=function(){return $x(e,eS())},l_.apply(e,arguments)}function tS(){var e=my(Qx()).domain([1,10]);return e.copy=function(){return $x(e,tS()).base(e.base())},l_.apply(e,arguments)}function nS(){var e=vy(Qx());return e.copy=function(){return $x(e,nS()).constant(e.constant())},l_.apply(e,arguments)}function rS(){var e=Cy(Qx());return e.copy=function(){return $x(e,rS()).exponent(e.exponent())},l_.apply(e,arguments)}function iS(){return rS.apply(null,arguments).exponent(.5)}function aS(){var e=[],t=Cv;function n(n){if(n!=null&&!isNaN(n=+n))return t((Bg(e,n,1)-1)/(e.length-1))}return n.domain=function(t){if(!arguments.length)return e.slice();e=[];for(let n of t)n!=null&&!isNaN(n=+n)&&e.push(n);return e.sort(Ng),n},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.range=function(){return e.map((n,r)=>t(r/(e.length-1)))},n.quantiles=function(t){return Array.from({length:t+1},(n,r)=>a_(e,r/t))},n.copy=function(){return aS(t).domain(e)},l_.apply(n,arguments)}function oS(){var e=0,t=.5,n=1,r=1,i,a,o,s,c,l=Cv,u,d=!1,f;function p(e){return isNaN(e=+e)?f:(e=.5+((e=+u(e))-a)*(r*e<r*a?s:c),l(d?Math.max(0,Math.min(1,e)):e))}p.domain=function(l){return arguments.length?([e,t,n]=l,i=u(e=+e),a=u(t=+t),o=u(n=+n),s=i===a?0:.5/(a-i),c=a===o?0:.5/(o-a),r=a<i?-1:1,p):[e,t,n]},p.clamp=function(e){return arguments.length?(d=!!e,p):d},p.interpolator=function(e){return arguments.length?(l=e,p):l};function m(e){return function(t){var n,r,i;return arguments.length?([n,r,i]=t,l=yv(e,[n,r,i]),p):[l(0),l(.5),l(1)]}}return p.range=m(_v),p.rangeRound=m(vv),p.unknown=function(e){return arguments.length?(f=e,p):f},function(l){return u=l,i=l(e),a=l(t),o=l(n),s=i===a?0:.5/(a-i),c=a===o?0:.5/(o-a),r=a<i?-1:1,p}}function sS(){var e=ny(oS()(Cv));return e.copy=function(){return $x(e,sS())},l_.apply(e,arguments)}function cS(){var e=my(oS()).domain([.1,1,10]);return e.copy=function(){return $x(e,cS()).base(e.base())},l_.apply(e,arguments)}function lS(){var e=vy(oS());return e.copy=function(){return $x(e,lS()).constant(e.constant())},l_.apply(e,arguments)}function uS(){var e=Cy(oS());return e.copy=function(){return $x(e,uS()).exponent(e.exponent())},l_.apply(e,arguments)}function dS(){return uS.apply(null,arguments).exponent(.5)}var fS=s({scaleBand:()=>f_,scaleDiverging:()=>sS,scaleDivergingLog:()=>cS,scaleDivergingPow:()=>uS,scaleDivergingSqrt:()=>dS,scaleDivergingSymlog:()=>lS,scaleIdentity:()=>iy,scaleImplicit:()=>u_,scaleLinear:()=>ry,scaleLog:()=>hy,scaleOrdinal:()=>d_,scalePoint:()=>m_,scalePow:()=>wy,scaleQuantile:()=>ky,scaleQuantize:()=>Ay,scaleRadial:()=>Oy,scaleSequential:()=>eS,scaleSequentialLog:()=>tS,scaleSequentialPow:()=>rS,scaleSequentialQuantile:()=>aS,scaleSequentialSqrt:()=>iS,scaleSequentialSymlog:()=>nS,scaleSqrt:()=>Ty,scaleSymlog:()=>yy,scaleThreshold:()=>jy,scaleTime:()=>Xx,scaleUtc:()=>Zx,tickFormat:()=>ty});function pS(e){var t=fS;if(e in t&&typeof t[e]==`function`)return t[e]();var n=`scale${Nr(e)}`;if(n in t&&typeof t[n]==`function`)return t[n]()}function mS(e,t,n){if(typeof e==`function`)return e.copy().domain(t).range(n);if(e!=null){var r=pS(e);if(r!=null)return r.domain(t).range(n),r}}function hS(e,t,n,r){if(n!=null&&r!=null)return typeof e.scale==`function`?mS(e.scale,n,r):mS(t,n,r)}function gS(e){return`scale${Nr(e)}`}function _S(e){return gS(e)in fS}var vS=(e,t,n)=>{if(e!=null){var r=e.scale,i=e.type;if(r===`auto`)return i===`category`&&n&&(n.indexOf(`LineChart`)>=0||n.indexOf(`AreaChart`)>=0||n.indexOf(`ComposedChart`)>=0&&!t)?`point`:i===`category`?`band`:`linear`;if(typeof r==`string`)return _S(r)?r:`point`}};function yS(e,t){for(var n=0,r=e.length,i=e[0]<e[e.length-1];n<r;){var a=Math.floor((n+r)/2);(i?e[a]<t:e[a]>t)?n=a+1:r=a}return n}function bS(e,t){if(e){var n=t??e.domain(),r=n.map(t=>e(t)??0),i=e.range();if(!(n.length===0||i.length<2))return e=>{var t=yS(r,e);if(t<=0)return n[0];if(t>=n.length)return n[n.length-1];var i=r[t-1]??0,a=r[t]??0;return Math.abs(e-i)<=Math.abs(e-a)?n[t-1]:n[t]}}}function xS(e){if(e!=null)return`invert`in e&&typeof e.invert==`function`?e.invert.bind(e):bS(e,void 0)}function SS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function CS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?SS(Object(n),!0).forEach(function(t){wS(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SS(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function wS(e,t,n){return(t=TS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function TS(e){var t=ES(e,`string`);return typeof t==`symbol`?t:t+``}function ES(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function DS(e,t){return MS(e)||jS(e,t)||kS(e,t)||OS()}function OS(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kS(e,t){if(e){if(typeof e==`string`)return AS(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?AS(e,t):void 0}}function AS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function jS(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function MS(e){if(Array.isArray(e))return e}var NS=[0,`auto`],PS={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:`preserveEnd`,minTickGap:5,mirror:!1,name:void 0,orientation:`bottom`,padding:{left:0,right:0},reversed:!1,scale:`auto`,tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:`category`,unit:void 0,niceTicks:`auto`},FS=(e,t)=>e.cartesianAxis.xAxis[t],IS=(e,t)=>FS(e,t)??PS,LS={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:NS,hide:!0,id:0,includeHidden:!1,interval:`preserveEnd`,minTickGap:5,mirror:!1,name:void 0,orientation:`left`,padding:{top:0,bottom:0},reversed:!1,scale:`auto`,tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:`number`,unit:void 0,niceTicks:`auto`,width:60},RS=(e,t)=>e.cartesianAxis.yAxis[t],zS=(e,t)=>RS(e,t)??LS,BS={domain:[0,`auto`],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:``,range:[64,64],scale:`auto`,type:`number`,unit:``},VS=(e,t)=>e.cartesianAxis.zAxis[t]??BS,HS=(e,t,n)=>{switch(t){case`xAxis`:return IS(e,n);case`yAxis`:return zS(e,n);case`zAxis`:return VS(e,n);case`angleAxis`:return fg(e,n);case`radiusAxis`:return pg(e,n);default:throw Error(`Unexpected axis type: ${t}`)}},US=(e,t,n)=>{switch(t){case`xAxis`:return IS(e,n);case`yAxis`:return zS(e,n);default:throw Error(`Unexpected axis type: ${t}`)}},WS=(e,t,n)=>{switch(t){case`xAxis`:return IS(e,n);case`yAxis`:return zS(e,n);case`angleAxis`:return fg(e,n);case`radiusAxis`:return pg(e,n);default:throw Error(`Unexpected axis type: ${t}`)}},GS=e=>e.graphicalItems.cartesianItems.some(e=>e.type===`bar`)||e.graphicalItems.polarItems.some(e=>e.type===`radialBar`);function KS(e,t){return n=>{switch(e){case`xAxis`:return`xAxisId`in n&&n.xAxisId===t;case`yAxis`:return`yAxisId`in n&&n.yAxisId===t;case`zAxis`:return`zAxisId`in n&&n.zAxisId===t;case`angleAxis`:return`angleAxisId`in n&&n.angleAxisId===t;case`radiusAxis`:return`radiusAxisId`in n&&n.radiusAxisId===t;default:return!1}}}var qS=e=>e.graphicalItems.cartesianItems,JS=V([xg,Sg],KS),YS=(e,t,n)=>e.filter(n).filter(e=>t?.includeHidden===!0||!e.hide),XS=V([qS,HS,JS],YS,{memoizeOptions:{resultEqualityCheck:Dg}}),ZS=V([XS],e=>e.filter(e=>e.type===`area`||e.type===`bar`).filter(Tg)),QS=e=>e.filter(e=>!(`stackId`in e)||e.stackId===void 0),$S=V([XS],QS),eC=e=>e.map(e=>e.data).filter(Boolean).flat(1),tC=V([XS],e=>e.some(e=>!e.data)),nC=V([XS],eC,{memoizeOptions:{resultEqualityCheck:Dg}}),rC=(e,t)=>{var n=t.chartData,r=n===void 0?[]:n,i=t.dataStartIndex,a=t.dataEndIndex;return e.length>0?e:r.slice(i,a+1)},iC=V([nC,_h],rC),aC=(e,t,n)=>t?.dataKey==null?n.length>0?n.map(e=>e.dataKey).flatMap(t=>e.map(e=>({value:ou(e,t)}))):e.map(e=>({value:e})):e.map(e=>({value:ou(e,t.dataKey)})),oC=(e,t,n,r,i,a)=>{var o=r.chartData,s=o===void 0?[]:o,c=r.dataStartIndex,l=r.dataEndIndex,u=aC(e,t,n);return i&&t?.dataKey!=null&&a.length>0?[...s.slice(c,l+1).map(e=>({value:ou(e,t.dataKey)})).filter(e=>e.value!=null),...u]:u},sC=V([iC,HS,XS,_h,tC,nC],oC);function cC(e){if(Tr(e)||e instanceof Date){var t=Number(e);if(G(t))return t}}function lC(e){if(Array.isArray(e)){var t=[cC(e[0]),cC(e[1])];return Dh(t)?t:void 0}var n=cC(e);if(n!=null)return[n,n]}function uC(e){return e.map(cC).filter(Pr)}function dC(e,t){var n=cC(e),r=cC(t);return n==null&&r==null?0:n==null?-1:r==null?1:n-r}var fC=V([sC],e=>e?.map(e=>e.value).sort(dC));function pC(e,t){switch(e){case`xAxis`:return t.direction===`x`;case`yAxis`:return t.direction===`y`;default:return!1}}function mC(e,t,n){if(!n||!n.length)return[];var r;if(typeof t==`number`&&!Cr(t))r=t;else if(Array.isArray(t)){var i=uC(t);i.length>0&&(r=Math.max(...i))}return r==null?[]:uC(n.flatMap(t=>{var n=ou(e,t.dataKey),i,a;if(Array.isArray(n)){var o=DS(n,2);i=o[0],a=o[1]}else i=a=n;if(G(i)&&G(a))return[r-i,r+a]}))}var hC=e=>WS(e,kg(e),Ag(e)),gC=V([hC],e=>e?.dataKey),_C=V([ZS,_h,hC],wg),vC=(e,t,n,r)=>{var i=t.reduce((e,t)=>{if(t.stackId==null)return e;var n=e[t.stackId];return n??=[],n.push(t),e[t.stackId]=n,e},{});return Object.fromEntries(Object.entries(i).map(t=>{var i=DS(t,2),a=i[0],o=i[1],s=r?[...o].reverse():o;return[a,{stackedData:uu(e,s.map(Cg),n),graphicalItems:s}]}))},yC=V([_C,ZS,qh,Jh],vC),bC=(e,t,n,r)=>{var i=t.dataStartIndex,a=t.dataEndIndex;if(r==null&&n!==`zAxis`)return hu(e,i,a)},xC=V([HS],e=>e.allowDataOverflow),SC=e=>{if(e==null||!(`domain`in e))return NS;if(e.domain!=null)return e.domain;if(`ticks`in e&&e.ticks!=null){if(e.type===`number`){var t=uC(e.ticks);return[Math.min(...t),Math.max(...t)]}if(e.type===`category`)return e.ticks.map(String)}return e?.domain??NS},CC=V([HS],SC),wC=V([CC,xC],kh),TC=V([yC,hh,xg,wC],bC,{memoizeOptions:{resultEqualityCheck:Eg}}),EC=e=>e.errorBars,DC=(e,t,n)=>e.flatMap(e=>t[e.id]).filter(Boolean).filter(e=>pC(n,e)),OC=function(){var e=[...arguments].filter(Boolean);if(e.length!==0){var t=e.flat();return[Math.min(...t),Math.max(...t)]}},kC=function(e,t,n,r,i){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:[],o,s;if(n.length>0&&n.forEach(e=>{var n=e.data==null?a:[...e.data],c=r[e.id]?.filter(e=>pC(i,e));n.forEach(n=>{var r=ou(n,t.dataKey??e.dataKey),i=mC(n,r,c);if(i.length>=2){var a=Math.min(...i),l=Math.max(...i);(o==null||a<o)&&(o=a),(s==null||l>s)&&(s=l)}var u=lC(r);u!=null&&(o=o==null?u[0]:Math.min(o,u[0]),s=s==null?u[1]:Math.max(s,u[1]))})}),t?.dataKey!=null&&n.length===0&&e.forEach(e=>{var n=lC(ou(e,t.dataKey));n!=null&&(o=o==null?n[0]:Math.min(o,n[0]),s=s==null?n[1]:Math.max(s,n[1]))}),G(o)&&G(s))return[o,s]},AC=V([iC,HS,$S,EC,xg,yh],kC,{memoizeOptions:{resultEqualityCheck:Eg}});function jC(e){var t=e.value;if(Tr(t)||t instanceof Date)return t}var MC=(e,t,n)=>{var r=e.map(jC).filter(e=>e!=null);return n&&(t.dataKey==null||t.allowDuplicatedCategory&&kr(r))?mh(0,e.length):t.allowDuplicatedCategory?r:Array.from(new Set(r))},NC=e=>e.referenceElements.dots,PC=(e,t,n)=>e.filter(e=>e.ifOverflow===`extendDomain`).filter(e=>t===`xAxis`?e.xAxisId===n:e.yAxisId===n),FC=V([NC,xg,Sg],PC),IC=e=>e.referenceElements.areas,LC=V([IC,xg,Sg],PC),RC=e=>e.referenceElements.lines,zC=V([RC,xg,Sg],PC),BC=(e,t)=>{if(e!=null){var n=uC(e.map(e=>t===`xAxis`?e.x:e.y));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},VC=V(FC,xg,BC),HC=(e,t)=>{if(e!=null){var n=uC(e.flatMap(e=>[t===`xAxis`?e.x1:e.y1,t===`xAxis`?e.x2:e.y2]));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},UC=V([LC,xg],HC);function WC(e){if(e.x!=null)return uC([e.x]);var t=e.segment?.map(e=>e.x);return t==null||t.length===0?[]:uC(t)}function GC(e){if(e.y!=null)return uC([e.y]);var t=e.segment?.map(e=>e.y);return t==null||t.length===0?[]:uC(t)}var KC=(e,t)=>{if(e!=null){var n=e.flatMap(e=>t===`xAxis`?WC(e):GC(e));if(n.length!==0)return[Math.min(...n),Math.max(...n)]}},qC=V(VC,V([zC,xg],KC),UC,(e,t,n)=>OC(e,n,t)),JC=(e,t,n,r,i,a,o,s,c)=>{if(n!=null)return n;var l=o===`vertical`&&s===`xAxis`||o===`horizontal`&&s===`yAxis`?OC(r,a,i):OC(a,i),u=Ah(t,l,e.allowDataOverflow);return u==null&&e.allowDataOverflow&&l==null&&c!=null?c:u},YC=V([HS,CC,wC,TC,AC,qC,kd,xg,V([HS],e=>{if(e!=null&&e.type===`number`&&`ticks`in e&&e.ticks!=null){var t=uC(e.ticks);if(t.length!==0)return[Math.min(...t),Math.max(...t)]}},{memoizeOptions:{resultEqualityCheck:Eg}})],JC,{memoizeOptions:{resultEqualityCheck:Eg}}),XC=[0,1],ZC=(e,t,n,r,i,a,o)=>{if(e!=null&&n!=null&&n.length!==0||o!==void 0){var s=e.dataKey,c=e.type,l=cu(t,a);return l&&s==null?mh(0,n?.length??0):c===`category`?MC(r,e,l):i===`expand`&&!l?XC:o}},QC=V([HS,kd,iC,sC,qh,xg,YC],ZC),$C=V([HS,GS,Yh],vS),ew=(e,t,n)=>{var r=t.niceTicks;if(r!==`none`){var i=SC(t),a=Array.isArray(i)&&(i[0]===`auto`||i[1]===`auto`);if((r===`snap125`||r===`adaptive`)&&t!=null&&t.tickCount&&Dh(e)){if(a)return Wh(e,t.tickCount,t.allowDecimals,r);if(t.type===`number`)return Gh(e,t.tickCount,t.allowDecimals,r)}if(r===`auto`&&n===`linear`&&t!=null&&t.tickCount){if(a&&Dh(e))return Wh(e,t.tickCount,t.allowDecimals,`adaptive`);if(t.type===`number`&&Dh(e))return Gh(e,t.tickCount,t.allowDecimals,`adaptive`)}}},tw=V([QC,WS,$C],ew),nw=(e,t,n,r)=>{if(r!==`angleAxis`&&e?.type===`number`&&Dh(t)&&Array.isArray(n)&&n.length>0){var i=t[0],a=n[0]??0,o=t[1],s=n[n.length-1]??0;return[Math.min(i,a),Math.max(o,s)]}return t},rw=V([HS,QC,tw,xg],nw),iw=V(V(sC,HS,(e,t)=>{if(t&&t.type===`number`){var n=1/0,r=Array.from(uC(e.map(e=>e.value))).sort((e,t)=>e-t),i=r[0],a=r[r.length-1];if(i==null||a==null)return 1/0;var o=a-i;if(o===0)return 1/0;for(var s=0;s<r.length-1;s++){var c=r[s],l=r[s+1];if(c!=null&&l!=null){var u=l-c;n=Math.min(n,u)}}return n/o}}),kd,Kh,Bu,(e,t,n,r,i)=>i,(e,t,n,r,i)=>{if(!G(e))return 0;var a=t===`vertical`?r.height:r.width;if(i===`gap`)return e*a/2;if(i===`no-gap`){var o=Or(n,e*a),s=e*a/2;return s-o-(s-o)/a*o}return 0}),aw=(e,t,n)=>{var r=IS(e,t);return r==null||typeof r.padding!=`string`?0:iw(e,`xAxis`,t,n,r.padding)},ow=(e,t,n)=>{var r=zS(e,t);return r==null||typeof r.padding!=`string`?0:iw(e,`yAxis`,t,n,r.padding)},sw=V(IS,aw,(e,t)=>{if(e==null)return{left:0,right:0};var n=e.padding;return typeof n==`string`?{left:t,right:t}:{left:(n.left??0)+t,right:(n.right??0)+t}}),cw=V(zS,ow,(e,t)=>{if(e==null)return{top:0,bottom:0};var n=e.padding;return typeof n==`string`?{top:t,bottom:t}:{top:(n.top??0)+t,bottom:(n.bottom??0)+t}}),lw=V([Bu,sw,Ku,Gu,(e,t,n)=>n],(e,t,n,r,i)=>{var a=r.padding;return i?[a.left,n.width-a.right]:[e.left+t.left,e.left+e.width-t.right]}),uw=V([Bu,kd,cw,Ku,Gu,(e,t,n)=>n],(e,t,n,r,i,a)=>{var o=i.padding;return a?[r.height-o.bottom,o.top]:t===`horizontal`?[e.top+e.height-n.bottom,e.top+n.top]:[e.top+n.top,e.top+e.height-n.bottom]}),dw=(e,t,n,r)=>{switch(t){case`xAxis`:return lw(e,n,r);case`yAxis`:return uw(e,n,r);case`zAxis`:return VS(e,n)?.range;case`angleAxis`:return vg(e);case`radiusAxis`:return yg(e,n);default:return}},fw=V([HS,dw],rg),pw=V([HS,$C,V([$C,rw],Mg),fw],hS),mw=(e,t,n,r)=>{if(n!=null&&n.dataKey!=null){var i=n.type,a=n.scale;if(cu(e,r)&&(i===`number`||a!==`auto`))return t.map(e=>e.value)}},hw=V([kd,sC,WS,xg],mw),gw=V([pw],jg);V([pw],xS),V([pw,fC],bS),V([XS,EC,xg],DC);function _w(e,t){return e.id<t.id?-1:+(e.id>t.id)}var vw=(e,t)=>t,yw=(e,t,n)=>n,bw=V(Du,vw,yw,(e,t,n)=>e.filter(e=>e.orientation===t).filter(e=>e.mirror===n).sort(_w)),xw=V(Ou,vw,yw,(e,t,n)=>e.filter(e=>e.orientation===t).filter(e=>e.mirror===n).sort(_w)),Sw=(e,t)=>{var n=typeof t.height==`number`?t.height:30;return{width:e.width,height:n}},Cw=(e,t)=>({width:typeof t.width==`number`?t.width:60,height:e.height}),ww=V(Bu,IS,Sw),Tw=(e,t,n)=>{switch(t){case`top`:return e.top;case`bottom`:return n-e.bottom;default:return 0}},Ew=(e,t,n)=>{switch(t){case`left`:return e.left;case`right`:return n-e.right;default:return 0}},Dw=V(wu,Bu,bw,vw,yw,(e,t,n,r,i)=>{var a={},o;return n.forEach(n=>{var s=Sw(t,n);o??=Tw(t,r,e);var c=r===`top`&&!i||r===`bottom`&&i;a[n.id]=o-Number(c)*s.height,o+=(c?-1:1)*s.height}),a}),Ow=V(Cu,Bu,xw,vw,yw,(e,t,n,r,i)=>{var a={},o;return n.forEach(n=>{var s=Cw(t,n);o??=Ew(t,r,e);var c=r===`left`&&!i||r===`right`&&i;a[n.id]=o-Number(c)*s.width,o+=(c?-1:1)*s.width}),a}),kw=V([Bu,IS,(e,t)=>{var n=IS(e,t);if(n!=null)return Dw(e,n.orientation,n.mirror)},(e,t)=>t],(e,t,n,r)=>{if(t!=null){var i=n?.[r];return i==null?{x:e.left,y:0}:{x:e.left,y:i}}}),Aw=V([Bu,zS,(e,t)=>{var n=zS(e,t);if(n!=null)return Ow(e,n.orientation,n.mirror)},(e,t)=>t],(e,t,n,r)=>{if(t!=null){var i=n?.[r];return i==null?{x:0,y:e.top}:{x:i,y:e.top}}}),jw=V(Bu,zS,(e,t)=>({width:typeof t.width==`number`?t.width:60,height:e.height})),Mw=(e,t,n,r)=>{if(n!=null){var i=n.allowDuplicatedCategory,a=n.type,o=n.dataKey,s=cu(e,r),c=t.map(e=>e.value),l=c.filter(e=>e!=null);if(o&&s&&a===`category`&&i&&kr(l))return c}},Nw=V([kd,sC,HS,xg],Mw);V([kd,US,$C,gw,Nw,hw,dw,tw,xg],(e,t,n,r,i,a,o,s,c)=>{if(t!=null){var l=cu(e,c);return{angle:t.angle,interval:t.interval,minTickGap:t.minTickGap,orientation:t.orientation,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit,axisType:c,categoricalDomain:a,duplicateDomain:i,isCategorical:l,niceTicks:s,range:o,realScaleType:n,scale:r}}});var Pw=V([kd,WS,$C,gw,tw,dw,Nw,hw,xg],(e,t,n,r,i,a,o,s,c)=>{if(t!=null&&r!=null){var l=cu(e,c),u=t.type,d=t.ticks,f=t.tickCount,p=n===`scaleBand`&&typeof r.bandwidth==`function`?r.bandwidth()/2:2,m=u===`category`&&r.bandwidth?r.bandwidth()/p:0;m=c===`angleAxis`&&a!=null&&a.length>=2?Sr(a[0]-a[1])*2*m:m;var h=d||i;return h?h.map((e,t)=>{var n=o?o.indexOf(e):e,i=r.map(n);return G(i)?{index:t,coordinate:i+m,value:e,offset:m}:null}).filter(Pr):l&&s?s.map((e,t)=>{var n=r.map(e);return G(n)?{coordinate:n+m,value:e,index:t,offset:m}:null}).filter(Pr):r.ticks?r.ticks(f).map((e,t)=>{var n=r.map(e);return G(n)?{coordinate:n+m,value:e,index:t,offset:m}:null}).filter(Pr):r.domain().map((e,t)=>{var n=r.map(e);return G(n)?{coordinate:n+m,value:o?o[e]:e,index:t,offset:m}:null}).filter(Pr)}}),Fw=V([kd,WS,gw,dw,Nw,hw,xg],(e,t,n,r,i,a,o)=>{if(t!=null&&n!=null&&r!=null&&r[0]!==r[1]){var s=cu(e,o),c=t.tickCount,l=0;return l=o===`angleAxis`&&r?.length>=2?Sr(r[0]-r[1])*2*l:l,s&&a?a.map((e,t)=>{var r=n.map(e);return G(r)?{coordinate:r+l,value:e,index:t,offset:l}:null}).filter(Pr):n.ticks?n.ticks(c).map((e,t)=>{var r=n.map(e);return G(r)?{coordinate:r+l,value:e,index:t,offset:l}:null}).filter(Pr):n.domain().map((e,t)=>{var r=n.map(e);return G(r)?{coordinate:r+l,value:i?i[e]:e,index:t,offset:l}:null}).filter(Pr)}}),Iw=V(HS,gw,(e,t)=>{if(e!=null&&t!=null)return CS(CS({},e),{},{scale:t})});V((e,t,n)=>VS(e,n),V([V([HS,$C,QC,fw],hS)],jg),(e,t)=>{if(e!=null&&t!=null)return CS(CS({},e),{},{scale:t})});var Lw=V([kd,Du,Ou],(e,t,n)=>{switch(e){case`horizontal`:return t.some(e=>e.reversed)?`right-to-left`:`left-to-right`;case`vertical`:return n.some(e=>e.reversed)?`bottom-to-top`:`top-to-bottom`;case`centric`:case`radial`:return`left-to-right`;default:return}});V([(e,t,n)=>e.renderedTicks[t]?.[n]],e=>{if(e&&e.length!==0)return t=>{var n=1/0,r=e[0];for(var i of e){var a=Math.abs(i.coordinate-t);a<n&&(n=a,r=i)}return r?.value}});var Rw=e=>e.options.defaultTooltipEventType,zw=e=>e.options.validateTooltipEventTypes;function Bw(e,t,n){if(e==null)return t;var r=e?`axis`:`item`;return n==null?t:n.includes(r)?r:t}function Vw(e,t){return Bw(t,Rw(e),zw(e))}function Hw(e){return B(t=>Vw(t,e))}var Uw=(e,t)=>{var n,r=Number(t);if(!(Cr(r)||t==null))return r>=0?e==null||(n=e[r])==null?void 0:n.value:void 0},Ww=e=>e.tooltip.settings,Gw={active:!1,index:null,dataKey:void 0,graphicalItemId:void 0,coordinate:void 0},Kw=al({name:`tooltip`,initialState:{itemInteraction:{click:Gw,hover:Gw},axisInteraction:{click:Gw,hover:Gw},keyboardInteraction:Gw,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0,sourceViewBox:void 0,graphicalItemId:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:`hover`,axisId:0,active:!1,defaultIndex:void 0}},reducers:{addTooltipEntrySettings:{reducer(e,t){e.tooltipItemPayloads.push(W(t.payload))},prepare:Wc()},replaceTooltipEntrySettings:{reducer(e,t){var n=t.payload,r=n.prev,i=n.next,a=Ac(e).tooltipItemPayloads.indexOf(W(r));a>-1&&(e.tooltipItemPayloads[a]=W(i))},prepare:Wc()},removeTooltipEntrySettings:{reducer(e,t){var n=Ac(e).tooltipItemPayloads.indexOf(W(t.payload));n>-1&&e.tooltipItemPayloads.splice(n,1)},prepare:Wc()},setTooltipSettingsState(e,t){e.settings=t.payload},setActiveMouseOverItemIndex(e,t){e.syncInteraction.active=!1,e.syncInteraction.sourceViewBox=void 0,e.keyboardInteraction.active=!1,e.itemInteraction.hover.active=!0,e.itemInteraction.hover.index=t.payload.activeIndex,e.itemInteraction.hover.dataKey=t.payload.activeDataKey,e.itemInteraction.hover.graphicalItemId=t.payload.activeGraphicalItemId,e.itemInteraction.hover.coordinate=t.payload.activeCoordinate},mouseLeaveChart(e){e.itemInteraction.hover.active=!1,e.axisInteraction.hover.active=!1},mouseLeaveItem(e){e.itemInteraction.hover.active=!1},setActiveClickItemIndex(e,t){e.syncInteraction.active=!1,e.syncInteraction.sourceViewBox=void 0,e.itemInteraction.click.active=!0,e.keyboardInteraction.active=!1,e.itemInteraction.click.index=t.payload.activeIndex,e.itemInteraction.click.dataKey=t.payload.activeDataKey,e.itemInteraction.click.graphicalItemId=t.payload.activeGraphicalItemId,e.itemInteraction.click.coordinate=t.payload.activeCoordinate},setMouseOverAxisIndex(e,t){e.syncInteraction.active=!1,e.syncInteraction.sourceViewBox=void 0,e.axisInteraction.hover.active=!0,e.keyboardInteraction.active=!1,e.axisInteraction.hover.index=t.payload.activeIndex,e.axisInteraction.hover.dataKey=t.payload.activeDataKey,e.axisInteraction.hover.coordinate=t.payload.activeCoordinate},setMouseClickAxisIndex(e,t){e.syncInteraction.active=!1,e.syncInteraction.sourceViewBox=void 0,e.keyboardInteraction.active=!1,e.axisInteraction.click.active=!0,e.axisInteraction.click.index=t.payload.activeIndex,e.axisInteraction.click.dataKey=t.payload.activeDataKey,e.axisInteraction.click.coordinate=t.payload.activeCoordinate},setSyncInteraction(e,t){e.syncInteraction=t.payload},setKeyboardInteraction(e,t){e.keyboardInteraction.active=t.payload.active,e.keyboardInteraction.index=t.payload.activeIndex,e.keyboardInteraction.coordinate=t.payload.activeCoordinate}}}),qw=Kw.actions,Jw=qw.addTooltipEntrySettings,Yw=qw.replaceTooltipEntrySettings,Xw=qw.removeTooltipEntrySettings,Zw=qw.setTooltipSettingsState,Qw=qw.setActiveMouseOverItemIndex;qw.mouseLeaveItem;var $w=qw.mouseLeaveChart;qw.setActiveClickItemIndex;var eT=qw.setMouseOverAxisIndex,tT=qw.setMouseClickAxisIndex,nT=qw.setSyncInteraction,rT=qw.setKeyboardInteraction,iT=Kw.reducer;function aT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function oT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?aT(Object(n),!0).forEach(function(t){sT(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):aT(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function sT(e,t,n){return(t=cT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cT(e){var t=lT(e,`string`);return typeof t==`symbol`?t:t+``}function lT(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function uT(e,t,n){return t===`axis`?n===`click`?e.axisInteraction.click:e.axisInteraction.hover:n===`click`?e.itemInteraction.click:e.itemInteraction.hover}function dT(e){return e.index!=null}var fT=(e,t,n,r)=>{if(t==null)return Gw;var i=uT(e,t,n);if(i==null)return Gw;if(i.active)return i;if(e.keyboardInteraction.active)return e.keyboardInteraction;if(e.syncInteraction.active&&e.syncInteraction.index!=null)return e.syncInteraction;var a=e.settings.active===!0;if(dT(i)){if(a)return oT(oT({},i),{},{active:!0})}else if(r!=null)return{active:!0,coordinate:void 0,dataKey:void 0,index:r,graphicalItemId:void 0};return oT(oT({},Gw),{},{coordinate:i.coordinate})};function pT(e){if(typeof e==`number`)return Number.isFinite(e)?e:void 0;if(e instanceof Date){var t=e.valueOf();return Number.isFinite(t)?t:void 0}var n=Number(e);return Number.isFinite(n)?n:void 0}function mT(e,t){var n=pT(e),r=t[0],i=t[1];return n!==void 0&&n>=Math.min(r,i)&&n<=Math.max(r,i)}function hT(e,t,n){if(n==null||t==null)return!0;var r=ou(e,t);return r==null||!Dh(n)||mT(r,n)}var gT=(e,t,n,r)=>{var i=e?.index;if(i==null)return null;var a=Number(i);if(!G(a))return i;var o=0,s=1/0;t.length>0&&(s=t.length-1);var c=Math.max(o,Math.min(a,s)),l=t[c];return l==null||hT(l,n,r)?String(c):null},_T=(e,t,n,r,i,a,o)=>{if(a!=null){var s=o[0]?.getPosition(a);if(s!=null)return s;var c=i?.[Number(a)];if(c)switch(n){case`horizontal`:return{x:c.coordinate,y:(r.top+t)/2};default:return{x:(r.left+e)/2,y:c.coordinate}}}},vT=(e,t,n,r)=>{if(t===`axis`)return e.tooltipItemPayloads;if(e.tooltipItemPayloads.length===0)return[];var i=n===`hover`?e.itemInteraction.hover.graphicalItemId:e.itemInteraction.click.graphicalItemId;if(e.syncInteraction.active&&i==null)return e.tooltipItemPayloads;if(i==null&&(r!=null||e.keyboardInteraction.active)){var a=e.tooltipItemPayloads[0];return a==null?[]:[a]}return e.tooltipItemPayloads.filter(e=>e.settings?.graphicalItemId===i)},yT=e=>e.options.tooltipPayloadSearcher,bT=e=>e.tooltip;function xT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ST(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?xT(Object(n),!0).forEach(function(t){CT(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xT(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function CT(e,t,n){return(t=wT(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wT(e){var t=TT(e,`string`);return typeof t==`symbol`?t:t+``}function TT(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ET(e){if(typeof e==`string`||typeof e==`number`)return e}function DT(e){if(typeof e==`string`||typeof e==`number`||typeof e==`boolean`)return e}function OT(e){if(typeof e==`string`||typeof e==`number`)return e;if(typeof e==`function`)return t=>e(t)}function kT(e){if(typeof e==`string`)return e}function AT(e){if(typeof e==`object`&&e)return{name:`name`in e?ET(e.name):void 0,unit:`unit`in e?DT(e.unit):void 0,dataKey:`dataKey`in e?OT(e.dataKey):void 0,payload:`payload`in e?e.payload:void 0,color:`color`in e?kT(e.color):void 0,fill:`fill`in e?kT(e.fill):void 0}}function jT(e,t){return e??t}var MT=(e,t,n,r,i,a,o)=>{if(t!=null&&a!=null){var s=n.chartData,c=n.computedData,l=n.dataStartIndex,u=n.dataEndIndex;return e.reduce((e,n)=>{var d=n.dataDefinedOnItem,f=n.settings,p=jT(d,s),m=Array.isArray(p)?eu(p,l,u):p,h=f?.dataKey??r,g=f?.nameKey,_;return r&&Array.isArray(m)&&!Array.isArray(m[0])&&o===`axis`?(_=jr(m,r,i),_??=a(m,t,c,g)):_=a(m,t,c,g),Array.isArray(_)?_.forEach(t=>{var n=AT(t),r=n?.name,i=n?.dataKey,a=n?.payload,o=ST(ST({},f),{},{name:r,unit:n?.unit,color:n?.color??f?.color,fill:n?.fill??f?.fill});e.push(yu({tooltipEntrySettings:o,dataKey:i,payload:a,value:ou(a,i),name:r==null?void 0:String(r)}))}):e.push(yu({tooltipEntrySettings:f,dataKey:h,payload:_,value:ou(_,h),name:ou(_,g)??f?.name})),e},[])}},NT=V([hC,GS,Yh],vS),PT=V([V([e=>e.graphicalItems.cartesianItems,e=>e.graphicalItems.polarItems],(e,t)=>[...e,...t]),hC,V([kg,Ag],KS)],YS,{memoizeOptions:{resultEqualityCheck:Dg}}),FT=V([PT],e=>e.filter(Tg)),IT=V([PT],eC,{memoizeOptions:{resultEqualityCheck:Dg}}),LT=V([PT],e=>e.some(e=>!e.data)),RT=V([IT,hh],rC),zT=V([FT,hh,hC],wg),BT=V([RT,hC,PT,hh,LT,IT],oC),VT=V([hC],SC),HT=V([VT,V([hC],e=>e.allowDataOverflow)],kh),UT=V([V([zT,V([PT],e=>e.filter(Tg)),qh,Jh],vC),hh,kg,HT],bC),WT=V([RT,hC,V([PT],QS),EC,kg,bh],kC,{memoizeOptions:{resultEqualityCheck:Eg}}),GT=V([V([NC,kg,Ag],PC),kg],BC),KT=V([V([IC,kg,Ag],PC),kg],HC),qT=V([hC,kd,RT,BT,qh,kg,V([hC,VT,HT,UT,WT,V([GT,V([V([RC,kg,Ag],PC),kg],KC),KT],OC),kd,kg],JC)],ZC),JT=V([hC,qT,V([qT,hC,NT],ew),kg],nw),YT=e=>dw(e,kg(e),Ag(e),!1),XT=V([hC,YT],rg),ZT=V([V([hC,NT,JT,XT],hS)],jg),QT=V([kd,hC,NT,ZT,YT,V([kd,BT,hC,kg],Mw),V([kd,BT,hC,kg],mw),kg],(e,t,n,r,i,a,o,s)=>{if(t){var c=t.type,l=cu(e,s);if(r){var u=n===`scaleBand`&&r.bandwidth?r.bandwidth()/2:2,d=c===`category`&&r.bandwidth?r.bandwidth()/u:0;return d=s===`angleAxis`&&i!=null&&i?.length>=2?Sr(i[0]-i[1])*2*d:d,l&&o?o.map((e,t)=>{var n=r.map(e);return G(n)?{coordinate:n+d,value:e,index:t,offset:d}:null}).filter(Pr):r.domain().map((e,t)=>{var n=r.map(e);return G(n)?{coordinate:n+d,value:a?a[e]:e,index:t,offset:d}:null}).filter(Pr)}}}),$T=V([Rw,zw,Ww],(e,t,n)=>Bw(n.shared,e,t)),eE=e=>e.tooltip.settings.trigger,tE=e=>e.tooltip.settings.defaultIndex,nE=V([bT,$T,eE,tE],fT),rE=V([nE,RT,gC,qT],gT),iE=V([QT,rE],Uw),aE=V([nE],e=>{if(e)return e.dataKey}),oE=V([nE],e=>{if(e)return e.graphicalItemId}),sE=V([bT,$T,eE,tE],vT),cE=V([nE,V([Cu,wu,kd,Bu,QT,tE,sE],_T)],(e,t)=>e!=null&&e.coordinate?e.coordinate:t),lE=V([nE],e=>e?.active??!1),uE=V([V([sE,rE,hh,gC,iE,yT,$T],MT)],e=>{if(e!=null){var t=e.map(e=>e.payload).filter(e=>e!=null);return Array.from(new Set(t))}});function dE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function fE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?dE(Object(n),!0).forEach(function(t){pE(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dE(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function pE(e,t,n){return(t=mE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mE(e){var t=hE(e,`string`);return typeof t==`symbol`?t:t+``}function hE(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var gE=()=>B(hC),_E=()=>{var e=gE(),t=B(QT),n=B(ZT);return vu(!e||!n?void 0:fE(fE({},e),{},{scale:n}),t)};function vE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function yE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?vE(Object(n),!0).forEach(function(t){bE(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vE(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function bE(e,t,n){return(t=xE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xE(e){var t=SE(e,`string`);return typeof t==`symbol`?t:t+``}function SE(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var CE=(e,t,n,r)=>{var i=t.find(e=>e&&e.index===n);if(i){if(e===`horizontal`)return{x:i.coordinate,y:r.relativeY};if(e===`vertical`)return{x:r.relativeX,y:i.coordinate}}return{x:0,y:0}},wE=(e,t,n,r)=>{var i=t.find(e=>e&&e.index===n);if(i){if(e===`centric`){var a=i.coordinate,o=r.radius;return yE(yE(yE({},r),Hm(r.cx,r.cy,o,a)),{},{angle:a,radius:o})}var s=i.coordinate,c=r.angle;return yE(yE(yE({},r),Hm(r.cx,r.cy,s,c)),{},{angle:c,radius:s})}return{angle:0,clockWise:!1,cx:0,cy:0,endAngle:0,innerRadius:0,outerRadius:0,radius:0,startAngle:0,x:0,y:0}};function TE(e,t){var n=e.relativeX,r=e.relativeY;return n>=t.left&&n<=t.left+t.width&&r>=t.top&&r<=t.top+t.height}var EE=(e,t,n,r,i)=>{var a=t?.length??0;if(a<=1||e==null)return 0;if(r===`angleAxis`&&i!=null&&Math.abs(Math.abs(i[1]-i[0])-360)<=1e-6)for(var o=i[1]-i[0],s=(t,n,r)=>[e,e+o,e-o].some(e=>(r?e>=t:e>t)&&e<=n),c=0;c<a;c++){var l=c>0?n[c-1]?.coordinate:n[a-1]?.coordinate,u=n[c]?.coordinate,d=c>=a-1?n[0]?.coordinate:n[c+1]?.coordinate,f=void 0;if(l!=null&&u!=null&&d!=null){if(Sr(u-l)!==Sr(d-u)){var p=[];if(Sr(d-u)===Sr(i[1]-i[0])){f=d;var m=u+i[1]-i[0];p[0]=Math.min(m,(m+l)/2),p[1]=Math.max(m,(m+l)/2)}else{f=l;var h=d+i[1]-i[0];p[0]=Math.min(u,(h+u)/2),p[1]=Math.max(u,(h+u)/2)}var g=[Math.min(u,(f+u)/2),Math.max(u,(f+u)/2)];if(s(g[0],g[1],!1)||s(p[0],p[1],!0))return n[c]?.index}else{var _=Math.min(l,d),v=Math.max(l,d);if(s((_+u)/2,(v+u)/2,!1))return n[c]?.index}}}else if(t)for(var y=0;y<a;y++){var b=t[y];if(b!=null){var x=t[y+1],S=t[y-1];if(y===0&&x!=null&&e<=(b.coordinate+x.coordinate)/2||y===a-1&&S!=null&&e>(b.coordinate+S.coordinate)/2||y>0&&y<a-1&&S!=null&&x!=null&&e>(b.coordinate+S.coordinate)/2&&e<=(b.coordinate+x.coordinate)/2)return b.index}}return-1},DE=()=>B(Yh),OE=(e,t)=>t,kE=(e,t,n)=>n,AE=(e,t,n,r)=>r,jE=V(QT,e=>U(e,e=>e.coordinate)),ME=V([bT,OE,kE,AE],fT),NE=V([ME,RT,gC,qT],gT),PE=(e,t,n)=>{if(t!=null){var r=bT(e);return t===`axis`?n===`hover`?r.axisInteraction.hover.dataKey:r.axisInteraction.click.dataKey:n===`hover`?r.itemInteraction.hover.dataKey:r.itemInteraction.click.dataKey}},FE=V([bT,OE,kE,AE],vT),IE=V([Cu,wu,kd,Bu,QT,AE,FE],_T),LE=V([ME,IE],(e,t)=>e.coordinate??t),RE=V([QT,NE],Uw),zE=V([FE,NE,hh,gC,RE,yT,OE],MT),BE=V([ME,NE],(e,t)=>({isActive:e.active&&t!=null,activeIndex:t})),VE=(e,t,n,r,i,a,o)=>{if(e&&n&&r&&i&&TE(e,o)){var s=EE(xu(e,t),a,i,n,r),c=CE(t,i,s,e);return{activeIndex:String(s),activeCoordinate:c}}},HE=(e,t,n,r,i,a,o)=>{if(e&&r&&i&&a&&n){var s=Jm(e,n);if(s){var c=EE(Su(s,t),o,a,r,i),l=wE(t,a,c,s);return{activeIndex:String(c),activeCoordinate:l}}}},UE=(e,t,n,r,i,a,o,s)=>{if(e&&t&&r&&i&&a)return t===`horizontal`||t===`vertical`?VE(e,t,r,i,a,o,s):HE(e,t,n,r,i,a,o)},WE=V(e=>e.zIndex.zIndexMap,(e,t)=>t,(e,t,n)=>n,(e,t,n)=>{if(t!=null){var r=e[t];if(r!=null)return n?r.panoramaElement:r.element}}),GE=V(e=>e.zIndex.zIndexMap,e=>{var t=Object.keys(e).map(e=>parseInt(e,10)).concat(Object.values(eg));return Array.from(new Set(t)).sort((e,t)=>e-t)},{memoizeOptions:{resultEqualityCheck:Og}});function KE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function qE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?KE(Object(n),!0).forEach(function(t){JE(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):KE(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function JE(e,t,n){return(t=YE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YE(e){var t=XE(e,`string`);return typeof t==`symbol`?t:t+``}function XE(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ZE={zIndexMap:Object.values(eg).reduce((e,t)=>qE(qE({},e),{},{[t]:{element:void 0,panoramaElement:void 0,consumers:0}}),{})},QE=new Set(Object.values(eg));function $E(e){return QE.has(e)}var eD=al({name:`zIndex`,initialState:ZE,reducers:{registerZIndexPortal:{reducer:(e,t)=>{var n=t.payload.zIndex;e.zIndexMap[n]?e.zIndexMap[n].consumers+=1:e.zIndexMap[n]={consumers:1,element:void 0,panoramaElement:void 0}},prepare:Wc()},unregisterZIndexPortal:{reducer:(e,t)=>{var n=t.payload.zIndex;e.zIndexMap[n]&&(--e.zIndexMap[n].consumers,e.zIndexMap[n].consumers<=0&&!$E(n)&&delete e.zIndexMap[n])},prepare:Wc()},registerZIndexPortalElement:{reducer:(e,t)=>{var n=t.payload,r=n.zIndex,i=n.element,a=n.isPanorama;e.zIndexMap[r]?a?e.zIndexMap[r].panoramaElement=W(i):e.zIndexMap[r].element=W(i):e.zIndexMap[r]={consumers:0,element:a?void 0:W(i),panoramaElement:a?W(i):void 0}},prepare:Wc()},unregisterZIndexPortalElement:{reducer:(e,t)=>{var n=t.payload.zIndex;e.zIndexMap[n]&&(t.payload.isPanorama?e.zIndexMap[n].panoramaElement=void 0:e.zIndexMap[n].element=void 0)},prepare:Wc()}}}),tD=eD.actions,nD=tD.registerZIndexPortal,rD=tD.unregisterZIndexPortal,iD=tD.registerZIndexPortalElement,aD=tD.unregisterZIndexPortalElement,oD=eD.reducer,sD=l(h());function cD(e){var t=e.zIndex,n=e.children,r=Nd()&&t!==void 0&&t!==0,i=Wu(),a=(0,v.useRef)(void 0),o=(0,v.useRef)(new Set),s=vo(),c=B(e=>WE(e,t,i));if((0,v.useLayoutEffect)(()=>{if(!r){var e=o.current;e.forEach(e=>{s(rD({zIndex:e}))}),e.clear(),a.current=void 0;return}if(o.current.has(t)||(s(nD({zIndex:t})),o.current.add(t)),c){a.current=c;var n=o.current;n.forEach(e=>{e!==t&&(s(rD({zIndex:e})),n.delete(e))})}},[s,t,r,c]),(0,v.useLayoutEffect)(()=>{var e=o.current;return()=>{e.forEach(e=>{s(rD({zIndex:e}))}),e.clear()}},[s]),!r)return n;var l=c??a.current;return l?(0,sD.createPortal)(n,l):null}function lD(){return lD=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lD.apply(null,arguments)}function uD(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function dD(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?uD(Object(n),!0).forEach(function(t){fD(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uD(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function fD(e,t,n){return(t=pD(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pD(e){var t=mD(e,`string`);return typeof t==`symbol`?t:t+``}function mD(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function hD(e){var t=e.cursor,n=e.cursorComp,r=e.cursorProps;return(0,v.isValidElement)(t)?(0,v.cloneElement)(t,r):(0,v.createElement)(n,r)}function gD(e){var t=e.coordinate,n=e.payload,r=e.index,i=e.offset,a=e.tooltipAxisBandSize,o=e.layout,s=e.cursor,c=e.tooltipEventType,l=e.chartName,u=t,d=n,f=r;if(!s||!u||l!==`ScatterChart`&&c!==`axis`)return null;var p,m,h;if(l===`ScatterChart`)p=u,m=xp,h=eg.cursorLine;else if(l===`BarChart`)p=Sp(o,u,i,a),m=Pm,h=eg.cursorRectangle;else if(o===`radial`&&Gi(u)){var g=Ym(u),_=g.cx,y=g.cy,b=g.radius;p={cx:_,cy:y,startAngle:g.startAngle,endAngle:g.endAngle,innerRadius:b,outerRadius:b},m=uh,h=eg.cursorLine}else p={points:dh(o,u,i)},m=up,h=eg.cursorLine;var x=typeof s==`object`&&`className`in s?s.className:void 0,S=dD(dD(dD(dD({stroke:`#ccc`,pointerEvents:`none`},i),p),Xn(s)),{},{payload:d,payloadIndex:f,className:Un(`recharts-tooltip-cursor`,x)});return v.createElement(cD,{zIndex:e.zIndex??h},v.createElement(hD,{cursor:s,cursorComp:m,cursorProps:S}))}function _D(e){var t=_E(),n=Ed(),r=Ad(),i=DE();return t==null||n==null||r==null||i==null?null:v.createElement(gD,lD({},e,{offset:n,layout:r,tooltipAxisBandSize:t,chartName:i}))}var vD=(0,v.createContext)(null),yD=()=>(0,v.useContext)(vD),bD=l(o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=`~`;function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1));function a(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,n,i,o){if(typeof n!=`function`)throw TypeError(`The listener must be a function`);var s=new a(n,i||e,o),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function s(e,t){--e._eventsCount===0?e._events=new i:delete e._events[t]}function c(){this._events=new i,this._eventsCount=0}c.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)n.call(t,i)&&e.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e},c.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,a=n.length,o=Array(a);i<a;i++)o[i]=n[i].fn;return o},c.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},c.prototype.emit=function(e,t,n,i,a,o){var s=r?r+e:e;if(!this._events[s])return!1;var c=this._events[s],l=arguments.length,u,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,a),!0;case 6:return c.fn.call(c.context,t,n,i,a,o),!0}for(d=1,u=Array(l-1);d<l;d++)u[d-1]=arguments[d];c.fn.apply(c.context,u)}else{var f=c.length,p;for(d=0;d<f;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,i);break;default:if(!u)for(p=1,u=Array(l-1);p<l;p++)u[p-1]=arguments[p];c[d].fn.apply(c[d].context,u)}}return!0},c.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,n,i){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return s(this,a),this;var o=this._events[a];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&s(this,a);else{for(var c=0,l=[],u=o.length;c<u;c++)(o[c].fn!==t||i&&!o[c].once||n&&o[c].context!==n)&&l.push(o[c]);l.length?this._events[a]=l.length===1?l[0]:l:s(this,a)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&s(this,t)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,t!==void 0&&(t.exports=c)}))(),1).default,xD=new bD,SD=`recharts.syncEvent.tooltip`,CD=`recharts.syncEvent.brush`,wD=(e,t)=>{if(t&&Array.isArray(e)){var n=Number.parseInt(t,10);if(!Cr(n))return e[n]}},TD=al({name:`options`,initialState:{chartName:``,tooltipPayloadSearcher:()=>void 0,eventEmitter:void 0,defaultTooltipEventType:`axis`},reducers:{createEventEmitter:e=>{e.eventEmitter??=Symbol(`rechartsEventEmitter`)}}}),ED=TD.reducer,DD=TD.actions.createEventEmitter;function OD(e){return e.tooltip.syncInteraction}var kD=al({name:`chartData`,initialState:{chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},reducers:{setChartData(e,t){if(e.chartData=W(t.payload),t.payload==null){e.dataStartIndex=0,e.dataEndIndex=0;return}t.payload.length>0&&e.dataEndIndex!==t.payload.length-1&&(e.dataEndIndex=t.payload.length-1)},setComputedData(e,t){e.computedData=t.payload},setDataStartEndIndexes(e,t){var n=t.payload,r=n.startIndex,i=n.endIndex;r!=null&&(e.dataStartIndex=r),i!=null&&(e.dataEndIndex=i)}}}),AD=kD.actions,jD=AD.setChartData,MD=AD.setDataStartEndIndexes;AD.setComputedData;var ND=kD.reducer,PD=[`x`,`y`];function FD(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ID(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?FD(Object(n),!0).forEach(function(t){LD(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):FD(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function LD(e,t,n){return(t=RD(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RD(e){var t=zD(e,`string`);return typeof t==`symbol`?t:t+``}function zD(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function BD(e,t){if(e==null)return{};var n,r,i=VD(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function VD(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function HD(){var e=B(Xh),t=B(Qh),n=vo(),r=B(Zh),i=B(QT),a=Ad(),o=wd(),s=B(e=>e.rootProps.className);(0,v.useEffect)(()=>{if(e==null)return Fr;var s=(s,c,l)=>{if(t!==l&&e===s){if(c.payload.active===!1){n(nT({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:void 0,graphicalItemId:void 0}));return}if(r===`index`){var u;if(o&&c!=null&&(u=c.payload)!=null&&u.coordinate&&c.payload.sourceViewBox){var d=c.payload.coordinate,f=d.x,p=d.y,m=BD(d,PD),h=c.payload.sourceViewBox,g=h.x,_=h.y,v=h.width,y=h.height,b=ID(ID({},m),{},{x:o.x+(v?(f-g)/v:0)*o.width,y:o.y+(y?(p-_)/y:0)*o.height});n(ID(ID({},c),{},{payload:ID(ID({},c.payload),{},{coordinate:b})}))}else n(c);return}if(i!=null){var x;typeof r==`function`?x=i[r(i,{activeTooltipIndex:c.payload.index==null?void 0:Number(c.payload.index),isTooltipActive:c.payload.active,activeIndex:c.payload.index==null?void 0:Number(c.payload.index),activeLabel:c.payload.label,activeDataKey:c.payload.dataKey,activeCoordinate:c.payload.coordinate})]:r===`value`&&(x=i.find(e=>String(e.value)===c.payload.label));var S=c.payload.coordinate;if(S==null||o==null){n(nT({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:void 0,graphicalItemId:void 0}));return}if(x==null){n(nT({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:c.payload.sourceViewBox,graphicalItemId:void 0}));return}var C=S.x,w=S.y,T=Math.min(C,o.x+o.width),E=Math.min(w,o.y+o.height),D={x:a===`horizontal`?x.coordinate:T,y:a===`horizontal`?E:x.coordinate};n(nT({active:c.payload.active,coordinate:D,dataKey:c.payload.dataKey,index:String(x.index),label:c.payload.label,sourceViewBox:c.payload.sourceViewBox,graphicalItemId:c.payload.graphicalItemId}))}}};return xD.on(SD,s),()=>{xD.off(SD,s)}},[s,n,t,e,r,i,a,o])}function UD(){var e=B(Xh),t=B(Qh),n=vo();(0,v.useEffect)(()=>{if(e==null)return Fr;var r=(r,i,a)=>{t!==a&&e===r&&n(MD(i))};return xD.on(CD,r),()=>{xD.off(CD,r)}},[n,t,e])}function WD(){var e=vo();(0,v.useEffect)(()=>{e(DD())},[e]),HD(),UD()}function GD(e,t,n,r,i,a){var o=B(n=>PE(n,e,t)),s=B(oE),c=B(Qh),l=B(Xh),u=B(Zh),d=B(OD)?.sourceViewBox!=null,f=wd();(0,v.useEffect)(()=>{if(!d&&l!=null&&c!=null){var e=nT({active:a,coordinate:n,dataKey:o,index:i,label:typeof r==`number`?String(r):r,sourceViewBox:f,graphicalItemId:s});xD.emit(SD,l,e,c)}},[d,n,o,s,i,r,c,l,u,a,f])}function KD(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function qD(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?KD(Object(n),!0).forEach(function(t){JD(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):KD(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function JD(e,t,n){return(t=YD(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YD(e){var t=XD(e,`string`);return typeof t==`symbol`?t:t+``}function XD(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ZD(e,t){return nO(e)||tO(e,t)||$D(e,t)||QD()}function QD(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $D(e,t){if(e){if(typeof e==`string`)return eO(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?eO(e,t):void 0}}function eO(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function tO(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function nO(e){if(Array.isArray(e))return e}function rO(e){return e.dataKey}function iO(e,t){return v.isValidElement(e)?v.cloneElement(e,t):typeof e==`function`?v.createElement(e,t):v.createElement(Sf,t)}var aO=[],oO={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:`ease`,axisId:0,contentStyle:{},cursor:!0,filterNull:!0,includeHidden:!1,isAnimationActive:`auto`,itemSorter:`name`,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:` : `,trigger:`hover`,useTranslate3d:!1,wrapperStyle:{}};function sO(e){var t=ea(e,oO),n=t.active,r=t.allowEscapeViewBox,i=t.animationDuration,a=t.animationEasing,o=t.content,s=t.filterNull,c=t.isAnimationActive,l=t.offset,u=t.payloadUniqBy,d=t.position,f=t.reverseDirection,p=t.useTranslate3d,m=t.wrapperStyle,h=t.cursor,g=t.shared,_=t.trigger,y=t.defaultIndex,b=t.portal,x=t.axisId,S=vo(),C=typeof y==`number`?String(y):y;(0,v.useEffect)(()=>{S(Zw({shared:g,trigger:_,axisId:x,active:n,defaultIndex:C}))},[S,g,_,x,n,C]);var w=wd(),T=Xf(),E=Hw(g),D=B(e=>BE(e,E,_,C))??{},O=D.activeIndex,k=D.isActive,A=B(e=>zE(e,E,_,C)),j=B(e=>RE(e,E,_,C)),M=B(e=>LE(e,E,_,C)),N=A,ee=yD(),te=n??k??!1,ne=ZD($o([N,te]),2),re=ne[0],ie=ne[1],ae=E===`axis`?j:void 0;GD(E,_,M,ae,O,te);var oe=b??ee;if(oe==null||w==null||E==null)return null;var se=N??aO;te||(se=aO),s&&se.length&&(se=lo(se.filter(e=>e.value!=null&&(e.hide!==!0||t.includeHidden)),u,rO));var ce=se.length>0,le=qD(qD({},t),{},{payload:se,label:ae,active:te,activeIndex:O,coordinate:M,accessibilityLayer:T}),ue=v.createElement(Yf,{allowEscapeViewBox:r,animationDuration:i,animationEasing:a,isAnimationActive:c,active:te,coordinate:M,hasPayload:ce,offset:l,position:d,reverseDirection:f,useTranslate3d:p,viewBox:w,wrapperStyle:m,lastBoundingBox:re,innerRef:ie,hasPortalFromProps:!!b},iO(o,le));return v.createElement(v.Fragment,null,(0,sD.createPortal)(ue,oe),te&&v.createElement(_D,{cursor:h,tooltipEventType:E,coordinate:M,payload:se,index:O}))}function cO(e,t,n){return(t=lO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lO(e){var t=uO(e,`string`);return typeof t==`symbol`?t:t+``}function uO(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var dO=class{constructor(e){cO(this,`cache`,new Map),this.maxSize=e}get(e){var t=this.cache.get(e);return t!==void 0&&(this.cache.delete(e),this.cache.set(e,t)),t}set(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxSize){var n=this.cache.keys().next().value;n!=null&&this.cache.delete(n)}this.cache.set(e,t)}clear(){this.cache.clear()}size(){return this.cache.size}};function fO(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pO(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?fO(Object(n),!0).forEach(function(t){mO(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fO(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function mO(e,t,n){return(t=hO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hO(e){var t=gO(e,`string`);return typeof t==`symbol`?t:t+``}function gO(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var _O=pO({},{cacheSize:2e3,enableCache:!0}),vO=new dO(_O.cacheSize),yO={position:`absolute`,top:`-20000px`,left:0,padding:0,margin:0,border:`none`,whiteSpace:`pre`},bO=`recharts_measurement_span`;function xO(e,t){return`${e}|${t.fontSize||``}|${t.fontFamily||``}|${t.fontWeight||``}|${t.fontStyle||``}|${t.letterSpacing||``}|${t.textTransform||``}`}var SO=(e,t)=>{try{var n=document.getElementById(bO);n||(n=document.createElement(`span`),n.setAttribute(`id`,bO),n.setAttribute(`aria-hidden`,`true`),document.body.appendChild(n)),Object.assign(n.style,yO,t),n.textContent=`${e}`;var r=n.getBoundingClientRect();return{width:r.width,height:r.height}}catch{return{width:0,height:0}}},CO=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e==null||kf.isSsr)return{width:0,height:0};if(!_O.enableCache)return SO(e,t);var n=xO(e,t),r=vO.get(n);if(r)return r;var i=SO(e,t);return vO.set(n,i),i},wO;function TO(e,t){return AO(e)||kO(e,t)||DO(e,t)||EO()}function EO(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DO(e,t){if(e){if(typeof e==`string`)return OO(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?OO(e,t):void 0}}function OO(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function kO(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function AO(e){if(Array.isArray(e))return e}function jO(e,t,n){return(t=MO(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function MO(e){var t=NO(e,`string`);return typeof t==`symbol`?t:t+``}function NO(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var PO=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,FO=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,IO=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,LO=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,RO={cm:96/2.54,mm:96/25.4,pt:96/72,pc:16,in:96,Q:96/101.6,px:1},zO=[`cm`,`mm`,`pt`,`pc`,`in`,`Q`,`px`];function BO(e){return zO.includes(e)}var VO=`NaN`;function HO(e,t){return e*RO[t]}var UO=class e{static parse(t){var n=TO(LO.exec(t)??[],3),r=n[1],i=n[2];return r==null?e.NaN:new e(parseFloat(r),i??``)}constructor(e,t){this.num=e,this.unit=t,this.num=e,this.unit=t,Cr(e)&&(this.unit=``),t!==``&&!IO.test(t)&&(this.num=NaN,this.unit=``),BO(t)&&(this.num=HO(e,t),this.unit=`px`)}add(t){return this.unit===t.unit?new e(this.num+t.num,this.unit):new e(NaN,``)}subtract(t){return this.unit===t.unit?new e(this.num-t.num,this.unit):new e(NaN,``)}multiply(t){return this.unit!==``&&t.unit!==``&&this.unit!==t.unit?new e(NaN,``):new e(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==``&&t.unit!==``&&this.unit!==t.unit?new e(NaN,``):new e(this.num/t.num,this.unit||t.unit)}toString(){return`${this.num}${this.unit}`}isNaN(){return Cr(this.num)}};wO=UO,jO(UO,`NaN`,new wO(NaN,``));function WO(e){if(e==null||e.includes(VO))return VO;for(var t=e;t.includes(`*`)||t.includes(`/`);){var n=TO(PO.exec(t)??[],4),r=n[1],i=n[2],a=n[3],o=UO.parse(r??``),s=UO.parse(a??``),c=i===`*`?o.multiply(s):o.divide(s);if(c.isNaN())return VO;t=t.replace(PO,c.toString())}for(;t.includes(`+`)||/.-\d+(?:\.\d+)?/.test(t);){var l=TO(FO.exec(t)??[],4),u=l[1],d=l[2],f=l[3],p=UO.parse(u??``),m=UO.parse(f??``),h=d===`+`?p.add(m):p.subtract(m);if(h.isNaN())return VO;t=t.replace(FO,h.toString())}return t}var GO=/\(([^()]*)\)/;function KO(e){for(var t=e,n;(n=GO.exec(t))!=null;){var r=TO(n,2)[1];t=t.replace(GO,WO(r))}return t}function qO(e){var t=e.replace(/\s+/g,``);return t=KO(t),t=WO(t),t}function JO(e){try{return qO(e)}catch{return VO}}function YO(e){var t=JO(e.slice(5,-1));return t===VO?``:t}var XO=[`x`,`y`,`lineHeight`,`capHeight`,`fill`,`scaleToFit`,`textAnchor`,`verticalAnchor`],ZO=[`dx`,`dy`,`angle`,`className`,`breakAll`];function QO(){return QO=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},QO.apply(null,arguments)}function $O(e,t){if(e==null)return{};var n,r,i=ek(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ek(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function tk(e,t){return ok(e)||ak(e,t)||rk(e,t)||nk()}function nk(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rk(e,t){if(e){if(typeof e==`string`)return ik(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ik(e,t):void 0}}function ik(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ak(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ok(e){if(Array.isArray(e))return e}var sk=/[ \f\n\r\t\v\u2028\u2029]+/,ck=e=>{var t=e.children,n=e.breakAll,r=e.style;try{var i=[];return Mr(t)||(i=n?t.toString().split(``):t.toString().split(sk)),{wordsWithComputedWidth:i.map(e=>({word:e,width:CO(e,r).width})),spaceWidth:n?0:CO(`\xA0`,r).width}}catch{return null}};function lk(e){return e===`start`||e===`middle`||e===`end`||e===`inherit`}function uk(e){return Mr(e)||typeof e==`string`||typeof e==`number`||typeof e==`boolean`}var dk=(e,t,n,r)=>e.reduce((e,i)=>{var a=i.word,o=i.width,s=e[e.length-1];if(s&&o!=null&&(t==null||r||s.width+o+n<Number(t)))s.words.push(a),s.width+=o+n;else{var c={words:[a],width:o};e.push(c)}return e},[]),fk=e=>e.reduce((e,t)=>e.width>t.width?e:t),pk=`…`,mk=(e,t,n,r,i,a,o,s)=>{var c=ck({breakAll:n,style:r,children:e.slice(0,t)+pk});if(!c)return[!1,[]];var l=dk(c.wordsWithComputedWidth,a,o,s);return[l.length>i||fk(l).width>Number(a),l]},hk=(e,t,n,r,i)=>{var a=e.maxLines,o=e.children,s=e.style,c=e.breakAll,l=R(a),u=String(o),d=dk(t,r,n,i);if(!l||i||!(d.length>a||fk(d).width>Number(r)))return d;for(var f=0,p=u.length-1,m=0,h;f<=p&&m<=u.length-1;){var g=Math.floor((f+p)/2),_=tk(mk(u,g-1,c,s,a,r,n,i),2),v=_[0],y=_[1],b=tk(mk(u,g,c,s,a,r,n,i),1)[0];if(!v&&!b&&(f=g+1),v&&b&&(p=g-1),!v&&b){h=y;break}m++}return h||d},gk=e=>[{words:Mr(e)?[]:e.toString().split(sk),width:void 0}],_k=e=>{var t=e.width,n=e.scaleToFit,r=e.children,i=e.style,a=e.breakAll,o=e.maxLines;if((t||n)&&!kf.isSsr){var s,c,l=ck({breakAll:a,children:r,style:i});if(l){var u=l.wordsWithComputedWidth,d=l.spaceWidth;s=u,c=d}else return gk(r);return hk({breakAll:a,children:r,maxLines:o,style:i},s,c,t,!!n)}return gk(r)},vk=`#808080`,yk={angle:0,breakAll:!1,capHeight:`0.71em`,fill:vk,lineHeight:`1em`,scaleToFit:!1,textAnchor:`start`,verticalAnchor:`end`,x:0,y:0},bk=(0,v.forwardRef)((e,t)=>{var n=ea(e,yk),r=n.x,i=n.y,a=n.lineHeight,o=n.capHeight,s=n.fill,c=n.scaleToFit,l=n.textAnchor,u=n.verticalAnchor,d=$O(n,XO),f=(0,v.useMemo)(()=>_k({breakAll:d.breakAll,children:d.children,maxLines:d.maxLines,scaleToFit:c,style:d.style,width:d.width}),[d.breakAll,d.children,d.maxLines,c,d.style,d.width]),p=d.dx,m=d.dy,h=d.angle,g=d.className,_=d.breakAll,y=$O(d,ZO);if(!Tr(r)||!Tr(i)||f.length===0)return null;var b=Number(r)+(R(p)?p:0),x=Number(i)+(R(m)?m:0);if(!G(b)||!G(x))return null;var S;switch(u){case`start`:S=YO(`calc(${o})`);break;case`middle`:S=YO(`calc(${(f.length-1)/2} * -${a} + (${o} / 2))`);break;default:S=YO(`calc(${f.length-1} * -${a})`)}var C=[],w=f[0];if(c&&w!=null){var T=w.width,E=d.width;C.push(`scale(${R(E)&&R(T)?E/T:1})`)}return h&&C.push(`rotate(${h}, ${b}, ${x})`),C.length&&(y.transform=C.join(` `)),v.createElement(`text`,QO({},Zn(y),{ref:t,x:b,y:x,className:Un(`recharts-text`,g),textAnchor:l,fill:s.includes(`url`)?vk:s}),f.map((e,t)=>{var n=e.words.join(_?``:` `);return v.createElement(`tspan`,{x:b,dy:t===0?S:a,key:`${n}-${t}`},n)}))});bk.displayName=`Text`;var xk=[`labelRef`],Sk=[`content`];function Ck(e,t){if(e==null)return{};var n,r,i=wk(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function wk(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Tk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ek(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Tk(Object(n),!0).forEach(function(t){Dk(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tk(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Dk(e,t,n){return(t=Ok(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ok(e){var t=kk(e,`string`);return typeof t==`symbol`?t:t+``}function kk(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ak(){return Ak=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ak.apply(null,arguments)}var jk=(0,v.createContext)(null),Mk=e=>{var t=e.x,n=e.y,r=e.upperWidth,i=e.lowerWidth,a=e.width,o=e.height,s=e.children,c=(0,v.useMemo)(()=>({x:t,y:n,upperWidth:r,lowerWidth:i,width:a,height:o}),[t,n,r,i,a,o]);return v.createElement(jk.Provider,{value:c},s)},Nk=()=>{var e=(0,v.useContext)(jk),t=wd();return e||(t?Ir(t):void 0)},Pk=(0,v.createContext)(null),Fk=()=>{var e=(0,v.useContext)(Pk),t=B(bg);return e||t},Ik=e=>{var t=e.value,n=e.formatter,r=Mr(e.children)?t:e.children;return typeof n==`function`?n(r):r},Lk=e=>e!=null&&typeof e==`function`,Rk=(e,t)=>Sr(t-e)*Math.min(Math.abs(t-e),360),zk=(e,t,n,r,i)=>{var a=e.offset,o=e.className,s=i.cx,c=i.cy,l=i.innerRadius,u=i.outerRadius,d=i.startAngle,f=i.endAngle,p=i.clockWise,m=(l+u)/2,h=Rk(d,f),g=h>=0?1:-1,_,y;switch(t){case`insideStart`:_=d+g*a,y=p;break;case`insideEnd`:_=f-g*a,y=!p;break;case`end`:_=f+g*a,y=p;break;default:throw Error(`Unsupported position ${t}`)}y=h<=0?y:!y;var b=Hm(s,c,m,_),x=Hm(s,c,m,_+(y?1:-1)*359),S=`M${b.x},${b.y}
    A${m},${m},0,1,${+!y},
    ${x.x},${x.y}`,C=Mr(e.id)?Dr(`recharts-radial-line-`):e.id;return v.createElement(`text`,Ak({},r,{dominantBaseline:`central`,className:Un(`recharts-radial-bar-label`,o)}),v.createElement(`defs`,null,v.createElement(`path`,{id:C,d:S})),v.createElement(`textPath`,{xlinkHref:`#${C}`},n))},Bk=(e,t,n)=>{var r=e.cx,i=e.cy,a=e.innerRadius,o=e.outerRadius,s=(e.startAngle+e.endAngle)/2;if(n===`outside`){var c=Hm(r,i,o+t,s),l=c.x;return{x:l,y:c.y,textAnchor:l>=r?`start`:`end`,verticalAnchor:`middle`}}if(n===`center`)return{x:r,y:i,textAnchor:`middle`,verticalAnchor:`middle`};if(n===`centerTop`)return{x:r,y:i,textAnchor:`middle`,verticalAnchor:`start`};if(n===`centerBottom`)return{x:r,y:i,textAnchor:`middle`,verticalAnchor:`end`};var u=Hm(r,i,(a+o)/2,s);return{x:u.x,y:u.y,textAnchor:`middle`,verticalAnchor:`middle`}},Vk=e=>e!=null&&`cx`in e&&R(e.cx),Hk={angle:0,offset:5,zIndex:eg.label,position:`middle`,textBreakAll:!1};function Uk(e){if(!Vk(e))return e;var t=e.cx,n=e.cy,r=e.outerRadius,i=r*2;return{x:t-r,y:n-r,width:i,upperWidth:i,lowerWidth:i,height:i}}function Wk(e){var t=ea(e,Hk),n=t.viewBox,r=t.parentViewBox,i=t.position,a=t.value,o=t.children,s=t.content,c=t.className,l=c===void 0?``:c,u=t.textBreakAll,d=t.labelRef,f=Fk(),p=Nk(),m=n==null?i===`center`?p:f??p:Vk(n)?n:Ir(n),h,g,_=Uk(m);if(!m||Mr(a)&&Mr(o)&&!(0,v.isValidElement)(s)&&typeof s!=`function`)return null;var y=Vk(m)&&(i===`insideStart`||i===`insideEnd`||i===`end`);if(Vk(m))y||(g=Bk(m,t.offset,t.position));else if(_){var b=Hr({viewBox:_,position:i,offset:t.offset,parentViewBox:Vk(r)?void 0:r,clamp:!0});g=Ek(Ek({x:b.x,y:b.y,textAnchor:b.horizontalAnchor,verticalAnchor:b.verticalAnchor},b.width===void 0?{}:{width:b.width}),b.height===void 0?{}:{height:b.height})}var x=Ek(Ek(Ek(Ek({},g?.x===void 0?{}:{x:g.x}),g?.y===void 0?{}:{y:g.y}),t),{},{viewBox:m});if((0,v.isValidElement)(s)){x.labelRef;var S=Ck(x,xk);return(0,v.cloneElement)(s,S)}if(typeof s==`function`){x.content;var C=Ck(x,Sk);if(h=(0,v.createElement)(s,C),(0,v.isValidElement)(h))return h}else h=Ik(t);var w=Zn(t);return y&&Vk(m)?zk(t,i,h,w,m):g==null?null:v.createElement(cD,{zIndex:t.zIndex},v.createElement(bk,Ak({ref:d,className:Un(`recharts-label`,l)},w,g,{textAnchor:lk(w.textAnchor)?w.textAnchor:g.textAnchor,breakAll:u}),h))}Wk.displayName=`Label`;var Gk=(e,t,n)=>{if(!e)return null;var r={viewBox:t,labelRef:n};return e===!0?v.createElement(Wk,Ak({key:`label-implicit`},r)):Tr(e)?v.createElement(Wk,Ak({key:`label-implicit`,value:e},r)):(0,v.isValidElement)(e)?e.type===Wk?(0,v.cloneElement)(e,Ek({key:`label-implicit`},r)):v.createElement(Wk,Ak({key:`label-implicit`,content:e},r)):Lk(e)?v.createElement(Wk,Ak({key:`label-implicit`,content:e},r)):e&&typeof e==`object`?v.createElement(Wk,Ak({},e,{key:`label-implicit`},r)):null};function Kk(e){var t=e.label,n=e.labelRef;return Gk(t,Nk(),n)||null}var qk=[`valueAccessor`],Jk=[`dataKey`,`clockWise`,`id`,`textBreakAll`,`zIndex`];function Yk(){return Yk=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yk.apply(null,arguments)}function Xk(e,t){if(e==null)return{};var n,r,i=Zk(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Zk(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Qk=e=>{var t=Array.isArray(e.value)?e.value[e.value.length-1]:e.value;if(uk(t))return t},$k=(0,v.createContext)(void 0),eA=$k.Provider,tA=(0,v.createContext)(void 0);tA.Provider;function nA(){return(0,v.useContext)($k)}function rA(){return(0,v.useContext)(tA)}function iA(e){var t=e.valueAccessor,n=t===void 0?Qk:t,r=Xk(e,qk),i=r.dataKey;r.clockWise;var a=r.id,o=r.textBreakAll,s=r.zIndex,c=Xk(r,Jk),l=nA(),u=rA(),d=l||u;return!d||!d.length?null:v.createElement(cD,{zIndex:s??eg.label},v.createElement(cr,{className:`recharts-label-list`},d.map((e,t)=>{var s=Mr(i)?n(e,t):ou(e.payload,i),l=Mr(a)?{}:{id:`${a}-${t}`};return v.createElement(Wk,Yk({key:`label-${t}`},Zn(e),c,l,{fill:r.fill??e.fill,parentViewBox:e.parentViewBox,value:s,textBreakAll:o,viewBox:e.viewBox,index:t,zIndex:0}))})))}iA.displayName=`LabelList`;function aA(e){var t=e.label;return t?t===!0?v.createElement(iA,{key:`labelList-implicit`}):v.isValidElement(t)||Lk(t)?v.createElement(iA,{key:`labelList-implicit`,content:t}):typeof t==`object`?v.createElement(iA,Yk({key:`labelList-implicit`},t,{type:String(t.type)})):null:null}function oA(){return oA=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oA.apply(null,arguments)}var sA=e=>{var t=e.cx,n=e.cy,r=e.r,i=e.className,a=Un(`recharts-dot`,i);return R(t)&&R(n)&&R(r)?v.createElement(`circle`,oA({},Yn(e),Ki(e),{className:a,cx:t,cy:n,r})):null},cA=al({name:`polarAxis`,initialState:{radiusAxis:{},angleAxis:{}},reducers:{addRadiusAxis(e,t){e.radiusAxis[t.payload.id]=W(t.payload)},removeRadiusAxis(e,t){delete e.radiusAxis[t.payload.id]},addAngleAxis(e,t){e.angleAxis[t.payload.id]=W(t.payload)},removeAngleAxis(e,t){delete e.angleAxis[t.payload.id]}}}),lA=cA.actions;lA.addRadiusAxis,lA.removeRadiusAxis,lA.addAngleAxis,lA.removeAngleAxis;var uA=cA.reducer;function dA(e){return e&&typeof e==`object`&&`className`in e&&typeof e.className==`string`?e.className:``}var fA=e=>e&&typeof e==`object`&&`clipDot`in e?!!e.clipDot:!0;function pA(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function mA(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?pA(Object(n),!0).forEach(function(t){hA(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pA(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function hA(e,t,n){return(t=gA(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gA(e){var t=_A(e,`string`);return typeof t==`symbol`?t:t+``}function _A(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function vA(e,t){return mA(mA({},t),e)}function yA(e){return(0,v.isValidElement)(e)?e.props:e}function bA(e,t){return(0,v.cloneElement)(e,vA(yA(e),t))}function xA(e){if(`index`in e){var t=e.index;return typeof t==`number`||typeof t==`string`?t:void 0}}function SA(e){return`isActive`in e&&e.isActive===!0}function CA(e){var t=e.option,n=e.DefaultShape,r=e.shapeProps,i=e.activeClassName,a=i===void 0?`recharts-active-shape`:i,o=e.inActiveClassName,s=o===void 0?`recharts-shape`:o,c=xA(r),l=(0,v.isValidElement)(t)?bA(t,r):t===n?v.createElement(n,r):typeof t==`function`?t(r,c):typeof t==`object`?v.createElement(n,vA(t,r)):v.createElement(n,r);return SA(r)?v.createElement(cr,{className:a},l):v.createElement(cr,{className:s},l)}function wA(e){var t=e.tooltipEntrySettings,n=vo(),r=Wu(),i=(0,v.useRef)(null);return(0,v.useLayoutEffect)(()=>{r||(i.current===null?n(Jw(t)):i.current!==t&&n(Yw({prev:i.current,next:t})),i.current=t)},[t,n,r]),(0,v.useLayoutEffect)(()=>()=>{i.current&&=(n(Xw(i.current)),null)},[n]),null}function TA(e){var t=e.legendPayload,n=vo(),r=Wu(),i=(0,v.useRef)(null);return(0,v.useLayoutEffect)(()=>{r||(i.current===null?n(Ld(t)):i.current!==t&&n(Rd({prev:i.current,next:t})),i.current=t)},[n,r,t]),(0,v.useLayoutEffect)(()=>()=>{i.current&&=(n(zd(i.current)),null)},[n]),null}function EA(e,t){return jA(e)||AA(e,t)||OA(e,t)||DA()}function DA(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OA(e,t){if(e){if(typeof e==`string`)return kA(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?kA(e,t):void 0}}function kA(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function AA(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function jA(e){if(Array.isArray(e))return e}var MA=`index`;function NA(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=[];for(var i of n)r.push({status:`removed`,prev:i});for(var a=0;a<t.length;a++){var o=e[a],s=t[a];o==null?r.push({status:`added`,next:s}):r.push({status:`matched`,prev:o,next:s})}return r}function PA(e,t){var n=e.length/t.length;return NA(t.map((t,r)=>e[Math.floor(r*n)]),t)}function FA(e,t){return NA(t.map((t,n)=>e[n]),t)}function IA(e,t){for(var n=new Map,r=0;r<e.length;r++){var i=e[r];if(i!=null){var a=t(i,r);a!=null&&!n.has(a)&&n.set(a,i)}}return n}function LA(e,t,n){var r=IA(e,n),i=new Set,a=t.map((e,t)=>{var a=n(e,t);if(a!=null){var o=r.get(a);if(o!==void 0)return i.add(a),o}}),o=[];for(var s of r){var c=EA(s,2),l=c[0],u=c[1];i.has(l)||o.push(u)}return NA(a,t,o)}function RA(e,t,n){return t==null?null:e==null?t.map(e=>({status:`added`,next:e})):n===`index`?PA(e,t):n===`append`?FA(e,t):LA(e,t,n)}function zA(e,t){var n=(0,v.useRef)(e),r=(0,v.useRef)(t.current),i=(0,v.useRef)(!0);n.current!==e&&(n.current=e,r.current=t.current,i.current=!1);var a=(0,v.useCallback)(function(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(n===0){i.current=!0;return}n===1&&(r.current=e),n>0&&i.current&&a&&(t.current=e)},[t]);return{startValue:r.current,syncStepValue:a}}function BA(e,t){return GA(e)||WA(e,t)||HA(e,t)||VA()}function VA(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HA(e,t){if(e){if(typeof e==`string`)return UA(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?UA(e,t):void 0}}function UA(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function WA(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function GA(e){if(Array.isArray(e))return e}function KA(e,t){var n=BA((0,v.useState)(!1),2),r=n[0],i=n[1];return{isAnimating:r,handleAnimationStart:(0,v.useCallback)(()=>{typeof e==`function`&&e(),i(!0)},[e]),handleAnimationEnd:(0,v.useCallback)(()=>{typeof t==`function`&&t(),i(!1)},[t])}}function qA(e){var t=e.animationInput,n=e.animationIdPrefix,r=e.items,i=e.previousItemsRef,a=e.isAnimationActive,o=e.animationBegin,s=e.animationDuration,c=e.animationEasing,l=e.onAnimationStart,u=e.onAnimationEnd,d=e.animationInterpolateFn,f=e.animationMatchBy,p=e.shouldUpdatePreviousRef,m=e.children,h=e.layout,g=nm(t,n),_=zA(g,i),y=_.startValue??null,b=RA(y,r,f??MA);return v.createElement(tm,{animationId:g,begin:o,duration:s,isActive:a,easing:c,onAnimationEnd:u,onAnimationStart:l,key:g},e=>{var t=y==null,n=r==null?r:d(b,e,h),i=p?p(e):e>0;return _.syncStepValue(n,e,i),n==null?null:m(n,e,t)})}function JA(e,t){return $A(e)||QA(e,t)||XA(e,t)||YA()}function YA(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XA(e,t){if(e){if(typeof e==`string`)return ZA(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ZA(e,t):void 0}}function ZA(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function QA(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function $A(e){if(Array.isArray(e))return e}var ej=v.useId??(()=>JA(v.useState(()=>Dr(`uid-`)),1)[0]);function tj(e,t){var n=ej();return t||(e?`${e}-${n}`:n)}var nj=(0,v.createContext)(void 0),rj=e=>{var t=e.id,n=e.type,r=e.children,i=tj(`recharts-${n}`,t);return v.createElement(nj.Provider,{value:i},r(i))},ij=al({name:`graphicalItems`,initialState:{cartesianItems:[],polarItems:[]},reducers:{addCartesianGraphicalItem:{reducer(e,t){e.cartesianItems.push(W(t.payload))},prepare:Wc()},replaceCartesianGraphicalItem:{reducer(e,t){var n=t.payload,r=n.prev,i=n.next,a=Ac(e).cartesianItems.indexOf(W(r));a>-1&&(e.cartesianItems[a]=W(i))},prepare:Wc()},removeCartesianGraphicalItem:{reducer(e,t){var n=Ac(e).cartesianItems.indexOf(W(t.payload));n>-1&&e.cartesianItems.splice(n,1)},prepare:Wc()},addPolarGraphicalItem:{reducer(e,t){e.polarItems.push(W(t.payload))},prepare:Wc()},removePolarGraphicalItem:{reducer(e,t){var n=Ac(e).polarItems.indexOf(W(t.payload));n>-1&&e.polarItems.splice(n,1)},prepare:Wc()},replacePolarGraphicalItem:{reducer(e,t){var n=t.payload,r=n.prev,i=n.next,a=Ac(e).polarItems.indexOf(W(r));a>-1&&(e.polarItems[a]=W(i))},prepare:Wc()}}}),aj=ij.actions,oj=aj.addCartesianGraphicalItem,sj=aj.replaceCartesianGraphicalItem,cj=aj.removeCartesianGraphicalItem;aj.addPolarGraphicalItem,aj.removePolarGraphicalItem,aj.replacePolarGraphicalItem;var lj=ij.reducer,uj=(0,v.memo)(e=>{var t=vo(),n=(0,v.useRef)(null);return(0,v.useLayoutEffect)(()=>{n.current===null?t(oj(e)):n.current!==e&&t(sj({prev:n.current,next:e})),n.current=e},[t,e]),(0,v.useLayoutEffect)(()=>()=>{n.current&&=(t(cj(n.current)),null)},[t]),null}),dj=[`points`];function fj(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?fj(Object(n),!0).forEach(function(t){mj(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fj(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function mj(e,t,n){return(t=hj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hj(e){var t=gj(e,`string`);return typeof t==`symbol`?t:t+``}function gj(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function _j(){return _j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_j.apply(null,arguments)}function vj(e,t){if(e==null)return{};var n,r,i=yj(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function yj(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function bj(e){var t=e.option,n=e.dotProps,r=e.className;if((0,v.isValidElement)(t))return(0,v.cloneElement)(t,n);if(typeof t==`function`)return t(n);var i=Un(r,typeof t==`boolean`?``:t.className),a=n??{};a.points;var o=vj(a,dj);return v.createElement(sA,_j({},o,{className:i}))}function xj(e,t){return e==null?!1:t?!0:e.length===1}function Sj(e){var t=e.points,n=e.dot,r=e.className,i=e.dotClassName,a=e.dataKey,o=e.baseProps,s=e.needClip,c=e.clipPathId,l=e.zIndex,u=l===void 0?eg.scatter:l;if(!xj(t,n))return null;var d=fA(n),f=Qn(n),p=t.map((e,r)=>{var s=pj(pj(pj({r:3},o),f),{},{index:r,cx:e.x??void 0,cy:e.y??void 0,dataKey:a,value:e.value,payload:e.payload,points:t});return v.createElement(bj,{key:`dot-${r}`,option:n,dotProps:s,className:i})}),m={};return s&&c!=null&&(m.clipPath=`url(#clipPath-${d?``:`dots-`}${c})`),v.createElement(cD,{zIndex:u},v.createElement(cr,_j({className:r},m),p))}function Cj(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function wj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Cj(Object(n),!0).forEach(function(t){Tj(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cj(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Tj(e,t,n){return(t=Ej(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ej(e){var t=Dj(e,`string`);return typeof t==`symbol`?t:t+``}function Dj(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Oj=al({name:`cartesianAxis`,initialState:{xAxis:{},yAxis:{},zAxis:{}},reducers:{addXAxis:{reducer(e,t){e.xAxis[t.payload.id]=W(t.payload)},prepare:Wc()},replaceXAxis:{reducer(e,t){var n=t.payload,r=n.prev,i=n.next;e.xAxis[r.id]!==void 0&&(r.id!==i.id&&delete e.xAxis[r.id],e.xAxis[i.id]=W(i))},prepare:Wc()},removeXAxis:{reducer(e,t){delete e.xAxis[t.payload.id]},prepare:Wc()},addYAxis:{reducer(e,t){e.yAxis[t.payload.id]=W(t.payload)},prepare:Wc()},replaceYAxis:{reducer(e,t){var n=t.payload,r=n.prev,i=n.next;e.yAxis[r.id]!==void 0&&(r.id!==i.id&&delete e.yAxis[r.id],e.yAxis[i.id]=W(i))},prepare:Wc()},removeYAxis:{reducer(e,t){delete e.yAxis[t.payload.id]},prepare:Wc()},addZAxis:{reducer(e,t){e.zAxis[t.payload.id]=W(t.payload)},prepare:Wc()},replaceZAxis:{reducer(e,t){var n=t.payload,r=n.prev,i=n.next;e.zAxis[r.id]!==void 0&&(r.id!==i.id&&delete e.zAxis[r.id],e.zAxis[i.id]=W(i))},prepare:Wc()},removeZAxis:{reducer(e,t){delete e.zAxis[t.payload.id]},prepare:Wc()},updateYAxisWidth(e,t){var n=t.payload,r=n.id,i=n.width,a=e.yAxis[r];if(a){var o=a.widthHistory||[];if(o.length===3&&o[0]===o[2]&&i===o[1]&&i!==a.width&&Math.abs(i-(o[0]??0))<=1)return;var s=[...o,i].slice(-3);e.yAxis[r]=wj(wj({},a),{},{width:i,widthHistory:s})}},updateXAxisHeight(e,t){var n=t.payload,r=n.id,i=n.height,a=e.xAxis[r];if(a){var o=a.heightHistory||[];if(o.length===3&&o[0]===o[2]&&i===o[1]&&i!==a.height&&Math.abs(i-(o[0]??0))<=1)return;var s=[...o,i].slice(-3);e.xAxis[r]=wj(wj({},a),{},{height:i,heightHistory:s})}}}}),kj=Oj.actions,Aj=kj.addXAxis,jj=kj.replaceXAxis,Mj=kj.removeXAxis,Nj=kj.addYAxis,Pj=kj.replaceYAxis,Fj=kj.removeYAxis;kj.addZAxis,kj.replaceZAxis,kj.removeZAxis;var Ij=kj.updateYAxisWidth,Lj=kj.updateXAxisHeight,Rj=Oj.reducer,zj=V([V([Bu],e=>({top:e.top,bottom:e.bottom,left:e.left,right:e.right})),Cu,wu],(e,t,n)=>{if(e&&t!=null&&n!=null)return{x:e.left,y:e.top,width:Math.max(0,t-e.left-e.right),height:Math.max(0,n-e.top-e.bottom)}}),Bj=()=>B(zj),Vj=()=>B(uE);function Hj(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Uj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Hj(Object(n),!0).forEach(function(t){Wj(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hj(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Wj(e,t,n){return(t=Gj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gj(e){var t=Kj(e,`string`);return typeof t==`symbol`?t:t+``}function Kj(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var qj=e=>{var t=e.point,n=e.childIndex,r=e.mainColor,i=e.activeDot,a=e.dataKey,o=e.clipPath;if(i===!1||t.x==null||t.y==null)return null;var s=Uj(Uj(Uj({},{index:n,dataKey:a,cx:t.x,cy:t.y,r:4,fill:r??`none`,strokeWidth:2,stroke:`#fff`,payload:t.payload,value:t.value}),Xn(i)),Ki(i)),c=(0,v.isValidElement)(i)?(0,v.cloneElement)(i,s):typeof i==`function`?i(s):v.createElement(sA,s);return v.createElement(cr,{className:`recharts-active-dot`,clipPath:o},c)};function Jj(e){var t=e.points,n=e.mainColor,r=e.activeDot,i=e.itemDataKey,a=e.clipPath,o=e.zIndex,s=o===void 0?eg.activeDot:o,c=B(rE),l=Vj();if(t==null||l==null)return null;var u=t.find(e=>l.includes(e.payload));return Mr(u)?null:v.createElement(cD,{zIndex:s},v.createElement(qj,{point:u,childIndex:Number(c),mainColor:n,dataKey:i,activeDot:r,clipPath:a}))}var Yj=e=>{var t=e.chartData,n=vo(),r=Wu();return(0,v.useEffect)(()=>r?()=>{}:(n(jD(t)),()=>{n(jD(void 0))}),[t,n,r]),null},Xj={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},Zj=al({name:`brush`,initialState:Xj,reducers:{setBrushSettings(e,t){return t.payload==null?Xj:t.payload}}});Zj.actions.setBrushSettings;var Qj=Zj.reducer;function $j(e){return(e%180+180)%180}var eM=function(e){var t=e.width,n=e.height,r=$j(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0)*Math.PI/180,i=Math.atan(n/t),a=r>i&&r<Math.PI-i?n/Math.sin(r):t/Math.cos(r);return Math.abs(a)},tM=al({name:`referenceElements`,initialState:{dots:[],areas:[],lines:[]},reducers:{addDot:(e,t)=>{e.dots.push(t.payload)},removeDot:(e,t)=>{var n=Ac(e).dots.findIndex(e=>e===t.payload);n!==-1&&e.dots.splice(n,1)},addArea:(e,t)=>{e.areas.push(t.payload)},removeArea:(e,t)=>{var n=Ac(e).areas.findIndex(e=>e===t.payload);n!==-1&&e.areas.splice(n,1)},addLine:(e,t)=>{e.lines.push(W(t.payload))},removeLine:(e,t)=>{var n=Ac(e).lines.findIndex(e=>e===t.payload);n!==-1&&e.lines.splice(n,1)}}}),nM=tM.actions;nM.addDot,nM.removeDot,nM.addArea,nM.removeArea,nM.addLine,nM.removeLine;var rM=tM.reducer;function iM(e,t){return lM(e)||cM(e,t)||oM(e,t)||aM()}function aM(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oM(e,t){if(e){if(typeof e==`string`)return sM(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?sM(e,t):void 0}}function sM(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function cM(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function lM(e){if(Array.isArray(e))return e}var uM=(0,v.createContext)(void 0),dM=e=>{var t=e.children,n=iM((0,v.useState)(`${Dr(`recharts`)}-clip`),1)[0],r=Bj();if(r==null)return null;var i=r.x,a=r.y,o=r.width,s=r.height;return v.createElement(uM.Provider,{value:n},v.createElement(`defs`,null,v.createElement(`clipPath`,{id:n},v.createElement(`rect`,{x:i,y:a,height:s,width:o}))),t)};function fM(){}function pM(e){if(!e||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null?!1:Object.prototype.toString.call(e)===`[object Object]`}function mM(e,t,n){return hM(e,t,void 0,void 0,void 0,void 0,n)}function hM(e,t,n,r,i,a,o){let s=o(e,t,n,r,i,a);if(s!==void 0)return s;if(typeof e==typeof t)switch(typeof e){case`bigint`:case`string`:case`boolean`:case`symbol`:case`undefined`:return e===t;case`number`:return e===t||Object.is(e,t);case`function`:return e===t;case`object`:return gM(e,t,a,o)}return gM(e,t,a,o)}function gM(e,t,n,r){if(Object.is(e,t))return!0;let i=la(e),a=la(t);if(i===`[object Arguments]`&&(i=Sa),a===`[object Arguments]`&&(a=Sa),i!==a)return!1;switch(i){case da:return e.toString()===t.toString();case fa:return Ua(e.valueOf(),t.valueOf());case pa:case ga:case ha:return Object.is(e.valueOf(),t.valueOf());case ua:return e.source===t.source&&e.flags===t.flags;case ba:return e===t}n??=new Map;let o=n.get(e),s=n.get(t);if(o!=null&&s!=null)return o===t;n.set(e,t),n.set(t,e);try{switch(i){case _a:if(e.size!==t.size)return!1;for(let[i,a]of e.entries())if(!t.has(i)||!hM(a,t.get(i),i,e,t,n,r))return!1;return!0;case va:{if(e.size!==t.size)return!1;let i=Array.from(e.values()),a=Array.from(t.values());for(let o=0;o<i.length;o++){let s=i[o],c=a.findIndex(i=>hM(s,i,void 0,e,t,n,r));if(c===-1)return!1;a.splice(c,1)}return!0}case ya:case Ta:case Ea:case Da:case Oa:case ka:case Aa:case ja:case Ma:case Na:case Pa:case Fa:if(La(e)!==La(t)||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!hM(e[i],t[i],i,e,t,n,r))return!1;return!0;case xa:return e.byteLength===t.byteLength&&gM(new Uint8Array(e),new Uint8Array(t),n,r);case wa:return e.byteLength!==t.byteLength||e.byteOffset!==t.byteOffset?!1:gM(new Uint8Array(e),new Uint8Array(t),n,r);case Ca:return e.name===t.name&&e.message===t.message;case Sa:{if(!(gM(e.constructor,t.constructor,n,r)||pM(e)&&pM(t)))return!1;let i=[...Object.keys(e),...ca(e)],a=[...Object.keys(t),...ca(t)];if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++){let o=i[a],s=e[o];if(!Object.hasOwn(t,o))return!1;let c=t[o];if(!hM(s,c,o,e,t,n,r))return!1}return!0}default:return!1}}finally{n.delete(e),n.delete(t)}}function _M(e,t){return mM(e,t,fM)}function vM(e,t){if(t<1)return[];if(t===1)return e;for(var n=[],r=0;r<e.length;r+=t){var i=e[r];i!==void 0&&n.push(i)}return n}function yM(e,t,n){return eM({width:e.width+t.width,height:e.height+t.height},n)}function bM(e,t,n){var r=n===`width`,i=e.x,a=e.y,o=e.width,s=e.height;return t===1?{start:r?i:a,end:r?i+o:a+s}:{start:r?i+o:a+s,end:r?i:a}}function xM(e,t,n,r,i){if(e*t<e*r||e*t>e*i)return!1;var a=n();return e*(t-e*a/2-r)>=0&&e*(t+e*a/2-i)<=0}function SM(e,t){return vM(e,t+1)}function CM(e,t,n,r,i){for(var a=(r||[]).slice(),o=t.start,s=t.end,c=0,l=1,u=o,d=function(){var t=r?.[c];if(t===void 0)return{v:vM(r,l)};var a=c,d,f=()=>(d===void 0&&(d=n(t,a)),d),p=t.coordinate,m=c===0||xM(e,p,f,u,s);m||(c=0,u=o,l+=1),m&&(u=p+e*(f()/2+i),c+=l)},f;l<=a.length;)if(f=d(),f)return f.v;return[]}function wM(e,t,n,r,i){var a=(r||[]).slice().length;if(a===0)return[];for(var o=t.start,s=t.end,c=1;c<=a;c++){for(var l=(a-1)%c,u=o,d=!0,f=function(){var t=r[m];if(t==null)return 0;var a=m,o,c=()=>(o===void 0&&(o=n(t,a)),o),f=t.coordinate,p=m===l||xM(e,f,c,u,s);if(!p)return d=!1,1;p&&(u=f+e*(c()/2+i))},p,m=l;m<a&&(p=f(),p===0||p!==1);m+=c);if(d){for(var h=[],g=l;g<a;g+=c){var _=r[g];_!=null&&h.push(_)}return h}}return[]}function TM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function EM(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?TM(Object(n),!0).forEach(function(t){DM(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):TM(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function DM(e,t,n){return(t=OM(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OM(e){var t=kM(e,`string`);return typeof t==`symbol`?t:t+``}function kM(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function AM(e,t,n,r,i){for(var a=(r||[]).slice(),o=a.length,s=t.start,c=t.end,l=function(t){var r=a[t];if(r==null)return 1;var l=r,u,d=()=>(u===void 0&&(u=n(r,t)),u);if(t===o-1){var f=e*(l.coordinate+e*d()/2-c);a[t]=l=EM(EM({},l),{},{tickCoord:f>0?l.coordinate-f*e:l.coordinate})}else a[t]=l=EM(EM({},l),{},{tickCoord:l.coordinate});l.tickCoord!=null&&xM(e,l.tickCoord,d,s,c)&&(c=l.tickCoord-e*(d()/2+i),a[t]=EM(EM({},l),{},{isShow:!0}))},u=o-1;u>=0;u--)if(l(u))continue;return a}function jM(e,t,n,r,i,a){var o=(r||[]).slice(),s=o.length,c=t.start,l=t.end;if(a){var u=r[s-1];if(u!=null){var d=n(u,s-1),f=e*(u.coordinate+e*d/2-l);o[s-1]=u=EM(EM({},u),{},{tickCoord:f>0?u.coordinate-f*e:u.coordinate}),u.tickCoord!=null&&xM(e,u.tickCoord,()=>d,c,l)&&(l=u.tickCoord-e*(d/2+i),o[s-1]=EM(EM({},u),{},{isShow:!0}))}}for(var p=a?s-1:s,m=function(t){var r=o[t];if(r==null)return 1;var a=r,s,u=()=>(s===void 0&&(s=n(r,t)),s);if(t===0){var d=e*(a.coordinate-e*u()/2-c);o[t]=a=EM(EM({},a),{},{tickCoord:d<0?a.coordinate-d*e:a.coordinate})}else o[t]=a=EM(EM({},a),{},{tickCoord:a.coordinate});a.tickCoord!=null&&xM(e,a.tickCoord,u,c,l)&&(c=a.tickCoord+e*(u()/2+i),o[t]=EM(EM({},a),{},{isShow:!0}))},h=0;h<p;h++)if(m(h))continue;return o}function MM(e,t,n){var r=e.tick,i=e.ticks,a=e.viewBox,o=e.minTickGap,s=e.orientation,c=e.interval,l=e.tickFormatter,u=e.unit,d=e.angle;if(!i||!i.length||!r)return[];if(R(c)||kf.isSsr)return SM(i,R(c)?c:0)??[];var f=[],p=s===`top`||s===`bottom`?`width`:`height`,m=u&&p===`width`?CO(u,{fontSize:t,letterSpacing:n}):{width:0,height:0},h=(e,r)=>{var i=typeof l==`function`?l(e.value,r):e.value;return p===`width`?yM(CO(i,{fontSize:t,letterSpacing:n}),m,d):CO(i,{fontSize:t,letterSpacing:n})[p]},g=i[0],_=i[1],v=i.length>=2&&g!=null&&_!=null?Sr(_.coordinate-g.coordinate):1,y=bM(a,v,p);return c===`equidistantPreserveStart`?CM(v,y,h,i,o):c===`equidistantPreserveEnd`?wM(v,y,h,i,o):(f=c===`preserveStart`||c===`preserveStartEnd`?jM(v,y,h,i,o,c===`preserveStartEnd`):AM(v,y,h,i,o),f.filter(e=>e.isShow))}var NM=e=>{var t=e.ticks,n=e.label,r=e.labelGapWithTick,i=r===void 0?5:r,a=e.tickSize,o=a===void 0?0:a,s=e.tickMargin,c=s===void 0?0:s,l=0;if(t){Array.from(t).forEach(e=>{if(e){var t=e.getBoundingClientRect();t.width>l&&(l=t.width)}});var u=n?n.getBoundingClientRect().width:0,d=o+c,f=l+d+u+(n?i:0);return Math.round(f)}return 0},PM=e=>{var t=e.ticks,n=e.label,r=e.labelGapWithTick,i=r===void 0?5:r,a=e.tickSize,o=a===void 0?0:a,s=e.tickMargin,c=s===void 0?0:s,l=0;if(t){Array.from(t).forEach(e=>{if(e){var t=e.getBoundingClientRect();t.height>l&&(l=t.height)}});var u=n?n.getBoundingClientRect().height:0,d=o+c,f=l+d+u+(n?i:0);return Math.round(f)}return 0},FM=al({name:`renderedTicks`,initialState:{xAxis:{},yAxis:{}},reducers:{setRenderedTicks:(e,t)=>{var n=t.payload,r=n.axisType,i=n.axisId,a=n.ticks;e[r][i]=W(a)},removeRenderedTicks:(e,t)=>{var n=t.payload,r=n.axisType,i=n.axisId;delete e[r][i]}}}),IM=FM.actions,LM=IM.setRenderedTicks,RM=IM.removeRenderedTicks,zM=FM.reducer,BM=[`axisLine`,`width`,`height`,`className`,`hide`,`ticks`,`axisType`,`axisId`];function VM(e,t){return KM(e)||GM(e,t)||UM(e,t)||HM()}function HM(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UM(e,t){if(e){if(typeof e==`string`)return WM(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?WM(e,t):void 0}}function WM(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function GM(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function KM(e){if(Array.isArray(e))return e}function qM(e,t){if(e==null)return{};var n,r,i=JM(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function JM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function YM(){return YM=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},YM.apply(null,arguments)}function XM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ZM(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?XM(Object(n),!0).forEach(function(t){QM(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):XM(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function QM(e,t,n){return(t=$M(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $M(e){var t=eN(e,`string`);return typeof t==`symbol`?t:t+``}function eN(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var tN={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:`bottom`,ticks:[],stroke:`#666`,tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:`preserveEnd`,zIndex:eg.axis};function nN(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=e.orientation,o=e.mirror,s=e.axisLine,c=e.otherSvgProps;if(!s)return null;var l=ZM(ZM(ZM({},c),Yn(s)),{},{fill:`none`});if(a===`top`||a===`bottom`){var u=+(a===`top`&&!o||a===`bottom`&&o);l=ZM(ZM({},l),{},{x1:t,y1:n+u*i,x2:t+r,y2:n+u*i})}else{var d=+(a===`left`&&!o||a===`right`&&o);l=ZM(ZM({},l),{},{x1:t+d*r,y1:n,x2:t+d*r,y2:n+i})}return v.createElement(`line`,YM({},l,{className:Un(`recharts-cartesian-axis-line`,_r(s,`className`))}))}function rN(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h=s?-1:1,g=e.tickSize||o,_=R(e.tickCoord)?e.tickCoord:e.coordinate;switch(a){case`top`:l=u=e.coordinate,f=n+ +!s*i,d=f-h*g,m=d-h*c,p=_;break;case`left`:d=f=e.coordinate,u=t+ +!s*r,l=u-h*g,p=l-h*c,m=_;break;case`right`:d=f=e.coordinate,u=t+ +s*r,l=u+h*g,p=l+h*c,m=_;break;default:l=u=e.coordinate,f=n+ +s*i,d=f+h*g,m=d+h*c,p=_}return{line:{x1:l,y1:d,x2:u,y2:f},tick:{x:p,y:m}}}function iN(e,t){switch(e){case`left`:return t?`start`:`end`;case`right`:return t?`end`:`start`;default:return`middle`}}function aN(e,t){switch(e){case`left`:case`right`:return`middle`;case`top`:return t?`start`:`end`;default:return t?`end`:`start`}}function oN(e){var t=e.option,n=e.tickProps,r=e.value,i,a=Un(n.className,`recharts-cartesian-axis-tick-value`);if(v.isValidElement(t))i=v.cloneElement(t,ZM(ZM({},n),{},{className:a}));else if(typeof t==`function`)i=t(ZM(ZM({},n),{},{className:a}));else{var o=`recharts-cartesian-axis-tick-value`;typeof t!=`boolean`&&(o=Un(o,dA(t))),i=v.createElement(bk,YM({},n,{className:o}),r)}return i}function sN(e){var t=e.ticks,n=e.axisType,r=e.axisId,i=vo(),a=(0,v.useRef)(null);return(0,v.useEffect)(()=>{if(r!=null&&n!=null){var e=t.map(e=>({value:e.value,coordinate:e.coordinate,offset:e.offset,index:e.index})),o=a.current;o!=null&&o.axisId===r&&o.axisType===n&&_M(o.ticks,e)||(a.current={ticks:e,axisId:r,axisType:n},i(LM({ticks:e,axisId:r,axisType:n})))}},[i,t,r,n]),(0,v.useEffect)(()=>r==null||n==null?Fr:()=>{i(RM({axisId:r,axisType:n}))},[i,r,n]),null}var cN=(0,v.forwardRef)((e,t)=>{var n=e.ticks,r=n===void 0?[]:n,i=e.tick,a=e.tickLine,o=e.stroke,s=e.tickFormatter,c=e.unit,l=e.padding,u=e.tickTextProps,d=e.orientation,f=e.mirror,p=e.x,m=e.y,h=e.width,g=e.height,_=e.tickSize,y=e.tickMargin,b=e.fontSize,x=e.letterSpacing,S=e.getTicksConfig,C=e.events,w=e.axisType,T=e.axisId,E=MM(ZM(ZM({},S),{},{ticks:r}),b,x),D=Yn(S),O=Xn(i),k=lk(D.textAnchor)?D.textAnchor:iN(d,f),A=aN(d,f),j={};typeof a==`object`&&(j=a);var M=ZM(ZM({},D),{},{fill:`none`},j),N=E.map(e=>ZM({entry:e},rN(e,p,m,h,g,d,_,f,y))),ee=N.map(e=>{var t=e.entry,n=e.line;return v.createElement(cr,{className:`recharts-cartesian-axis-tick`,key:`tick-${t.value}-${t.coordinate}-${t.tickCoord}`},a&&v.createElement(`line`,YM({},M,n,{className:Un(`recharts-cartesian-axis-tick-line`,_r(a,`className`))})))}),te=N.map((e,t)=>{var n=e.entry,r=e.tick,a=ZM(ZM({},ZM(ZM(ZM(ZM({verticalAnchor:A},D),{},{textAnchor:k,stroke:`none`,fill:o},r),{},{index:t,payload:n,visibleTicksCount:E.length,tickFormatter:s,padding:l},u),{},{angle:u?.angle??D.angle??0})),O);return v.createElement(cr,YM({className:`recharts-cartesian-axis-tick-label`,key:`tick-label-${n.value}-${n.coordinate}-${n.tickCoord}`},Ji(C,n,t)),i&&v.createElement(oN,{option:i,tickProps:a,value:`${typeof s==`function`?s(n.value,t):n.value}${c||``}`}))});return v.createElement(`g`,{className:`recharts-cartesian-axis-ticks recharts-${w}-ticks`},v.createElement(sN,{ticks:E,axisId:T,axisType:w}),te.length>0&&v.createElement(cD,{zIndex:eg.label},v.createElement(`g`,{className:`recharts-cartesian-axis-tick-labels recharts-${w}-tick-labels`,ref:t},te)),ee.length>0&&v.createElement(`g`,{className:`recharts-cartesian-axis-tick-lines recharts-${w}-tick-lines`},ee))}),lN=(0,v.forwardRef)((e,t)=>{var n=e.axisLine,r=e.width,i=e.height,a=e.className,o=e.hide,s=e.ticks,c=e.axisType,l=e.axisId,u=qM(e,BM),d=VM((0,v.useState)(``),2),f=d[0],p=d[1],m=VM((0,v.useState)(``),2),h=m[0],g=m[1],_=(0,v.useRef)(null);(0,v.useImperativeHandle)(t,()=>({getCalculatedWidth:()=>NM({ticks:_.current,label:e.labelRef?.current,labelGapWithTick:5,tickSize:e.tickSize,tickMargin:e.tickMargin}),getCalculatedHeight:()=>PM({ticks:_.current,label:e.labelRef?.current,labelGapWithTick:5,tickSize:e.tickSize,tickMargin:e.tickMargin})}));var y=(0,v.useCallback)(e=>{if(e){var t=e.getElementsByClassName(`recharts-cartesian-axis-tick-value`);_.current=t;var n=t[0];if(n){var r=window.getComputedStyle(n),i=r.fontSize,a=r.letterSpacing;(i!==f||a!==h)&&(p(i),g(a))}}},[f,h]);return o||r!=null&&r<=0||i!=null&&i<=0?null:v.createElement(cD,{zIndex:e.zIndex},v.createElement(cr,{className:Un(`recharts-cartesian-axis`,a)},v.createElement(nN,{x:e.x,y:e.y,width:r,height:i,orientation:e.orientation,mirror:e.mirror,axisLine:n,otherSvgProps:Yn(e)}),v.createElement(cN,{ref:y,axisType:c,events:u,fontSize:f,getTicksConfig:e,height:e.height,letterSpacing:h,mirror:e.mirror,orientation:e.orientation,padding:e.padding,stroke:e.stroke,tick:e.tick,tickFormatter:e.tickFormatter,tickLine:e.tickLine,tickMargin:e.tickMargin,tickSize:e.tickSize,tickTextProps:e.tickTextProps,ticks:s,unit:e.unit,width:e.width,x:e.x,y:e.y,axisId:l}),v.createElement(Mk,{x:e.x,y:e.y,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width},v.createElement(Kk,{label:e.label,labelRef:e.labelRef}),e.children)))}),uN=v.forwardRef((e,t)=>{var n=ea(e,tN);return v.createElement(lN,YM({},n,{ref:t}))});uN.displayName=`CartesianAxis`;var dN=al({name:`errorBars`,initialState:{},reducers:{addErrorBar:(e,t)=>{var n=t.payload,r=n.itemId,i=n.errorBar;e[r]||(e[r]=[]),e[r].push(i)},replaceErrorBar:(e,t)=>{var n=t.payload,r=n.itemId,i=n.prev,a=n.next;e[r]&&(e[r]=e[r].map(e=>e.dataKey===i.dataKey&&e.direction===i.direction?a:e))},removeErrorBar:(e,t)=>{var n=t.payload,r=n.itemId,i=n.errorBar;e[r]&&(e[r]=e[r].filter(e=>e.dataKey!==i.dataKey||e.direction!==i.direction))}}}),fN=dN.actions;fN.addErrorBar,fN.replaceErrorBar,fN.removeErrorBar;var pN=dN.reducer;function mN(e,t){var n=B(t=>IS(t,e)),r=B(e=>zS(e,t)),i=n?.allowDataOverflow??PS.allowDataOverflow,a=r?.allowDataOverflow??LS.allowDataOverflow;return{needClip:i||a,needClipX:i,needClipY:a}}function hN(e){var t=e.xAxisId,n=e.yAxisId,r=e.clipPathId,i=Bj(),a=mN(t,n),o=a.needClipX,s=a.needClipY,c=a.needClip,l=B(e=>lw(e,t,!1)),u=B(e=>uw(e,n,!1));if(!c||!i)return null;var d=i.x,f=i.y,p=i.width,m=i.height,h=o&&l?Math.min(l[0],l[1]):d-p/2,g=s&&u?Math.min(u[0],u[1]):f-m/2,_=o&&l?Math.abs(l[1]-l[0]):p*2,y=s&&u?Math.abs(u[1]-u[0]):m*2;return v.createElement(`clipPath`,{id:`clipPath-${r}`},v.createElement(`rect`,{x:h,y:g,width:_,height:y}))}function gN(e){var t=Xn(e),n=3,r=2;if(t!=null){var i=t.r,a=t.strokeWidth,o=Number(i),s=Number(a);return(Number.isNaN(o)||o<0)&&(o=n),(Number.isNaN(s)||s<0)&&(s=r),{r:o,strokeWidth:s}}return{r:n,strokeWidth:r}}function _N(e,t){return e.graphicalItems.cartesianItems.find(e=>e.id===t)?.xAxisId??0}function vN(e,t){return e.graphicalItems.cartesianItems.find(e=>e.id===t)?.yAxisId??0}var yN=(e,t,n)=>Iw(e,`xAxis`,_N(e,t),n),bN=(e,t,n)=>Fw(e,`xAxis`,_N(e,t),n),xN=(e,t,n)=>Iw(e,`yAxis`,vN(e,t),n),SN=(e,t,n)=>Fw(e,`yAxis`,vN(e,t),n),CN=V([kd,yN,xN,bN,SN],(e,t,n,r,i)=>cu(e,`xAxis`)?vu(t,r,!1):vu(n,i,!1)),wN=V([qS,(e,t)=>t],(e,t)=>e.filter(e=>e.type===`area`).find(e=>e.id===t)),TN=e=>cu(kd(e),`xAxis`)?`yAxis`:`xAxis`,EN=(e,t)=>TN(e)===`yAxis`?vN(e,t):_N(e,t),DN=(e,t,n)=>yC(e,TN(e),EN(e,t),n),ON=V([kd,yN,xN,bN,SN,V([wN,DN],(e,t)=>{if(e!=null&&t!=null){var n=e.stackId,r=Cg(e);if(n!=null&&r!=null){var i=(t[n]?.stackedData)?.find(e=>e.key===r);if(i!=null)return i.map(e=>[e[0],e[1]])}}}),vh,CN,wN,$h,V([wN,DN],(e,t)=>{if(e!=null&&e.stackId!=null&&t!=null){var n=t[e.stackId];if(n!=null)return n.graphicalItems.map(e=>e.dataKey).filter(Pr)}})],(e,t,n,r,i,a,o,s,c,l,u)=>{var d=o.chartData,f=o.dataStartIndex,p=o.dataEndIndex;if(!(c==null||e!==`horizontal`&&e!==`vertical`||t==null||n==null||r==null||i==null||r.length===0||i.length===0||s==null)){var m=c.data,h=m&&m.length>0?m:d?.slice(f,p+1);if(h!=null)return sP({layout:e,xAxis:t,yAxis:n,xAxisTicks:r,yAxisTicks:i,dataStartIndex:f,areaSettings:c,stackedData:a,displayedData:h,chartBaseValue:l,bandSize:s,stackDataKeys:u})}}),kN=[`animationElapsedTime`,`isAnimating`,`isEntrance`,`layout`,`isRange`,`stroke`,`connectNulls`],AN=[`id`,`baseLine`];function jN(){return jN=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jN.apply(null,arguments)}function MN(e,t){if(e==null)return{};var n,r,i=NN(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function NN(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function PN(e){var t=e.alpha,n=e.baseLine,r=e.points,i=e.strokeWidth,a=r[0]?.x,o=r[r.length-1]?.x;if(!G(a)||!G(o))return null;var s=t*Math.abs(a-o),c=Math.max(...r.map(e=>e.y||0));return R(n)?c=Math.max(n,c):n&&Array.isArray(n)&&n.length&&(c=Math.max(...n.map(e=>e.y||0),c)),R(c)?v.createElement(`rect`,{x:a<o?a:a-s,y:0,width:s,height:Math.floor(c+(i?parseInt(`${i}`,10):1))}):null}function FN(e){var t=e.alpha,n=e.baseLine,r=e.points,i=e.strokeWidth,a=r[0]?.y,o=r[r.length-1]?.y;if(!G(a)||!G(o))return null;var s=t*Math.abs(a-o),c=Math.max(...r.map(e=>e.x||0));return R(n)?c=Math.max(n,c):n&&Array.isArray(n)&&n.length&&(c=Math.max(...n.map(e=>e.x||0),c)),R(c)?v.createElement(`rect`,{x:0,y:a<o?a:a-s,width:c+(i?parseInt(`${i}`,10):1),height:Math.floor(s)}):null}function IN(e){var t=e.alpha,n=e.layout,r=e.points,i=e.baseLine,a=e.strokeWidth;return n===`vertical`?v.createElement(FN,{alpha:t,points:r,baseLine:i,strokeWidth:a}):v.createElement(PN,{alpha:t,points:r,baseLine:i,strokeWidth:a})}function LN(e){var t=e.animationElapsedTime,n=t===void 0?1:t,r=e.isAnimating,i=r!==void 0&&r,a=e.isEntrance,o=a!==void 0&&a,s=e.layout,c=e.isRange,l=e.stroke,u=e.connectNulls,d=MN(e,kN),f=s===`vertical`?`vertical`:`horizontal`,p=u??!1,m=ej(),h=d.id,g=d.baseLine,_=Yn(MN(d,AN)),y=v.createElement(up,jN({},d,{id:h,baseLine:g,connectNulls:p,stroke:`none`,className:`recharts-area-area`,layout:f})),b=l!==`none`&&v.createElement(up,jN({},_,{className:`recharts-area-curve`,layout:f,type:d.type,connectNulls:p,fill:`none`,stroke:l,points:d.points})),x=l!==`none`&&c&&Array.isArray(g)&&v.createElement(up,jN({},_,{className:`recharts-area-curve`,layout:f,type:d.type,connectNulls:p,fill:`none`,stroke:l,points:g}));return o&&(i||n<1)?v.createElement(cr,null,v.createElement(`defs`,null,v.createElement(`clipPath`,{id:m},v.createElement(IN,{alpha:n,points:d.points??[],baseLine:g,layout:f,strokeWidth:d.strokeWidth}))),v.createElement(cr,{clipPath:`url(#${m})`},y,b,x)):v.createElement(v.Fragment,null,y,b,x)}var RN=[`id`],zN=[`activeDot`,`animationBegin`,`animationDuration`,`animationEasing`,`connectNulls`,`dot`,`fill`,`fillOpacity`,`hide`,`isAnimationActive`,`legendType`,`stroke`,`xAxisId`,`yAxisId`];function BN(){return BN=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},BN.apply(null,arguments)}function VN(e,t){if(e==null)return{};var n,r,i=HN(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function HN(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function UN(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function WN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?UN(Object(n),!0).forEach(function(t){GN(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):UN(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function GN(e,t,n){return(t=KN(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KN(e){var t=qN(e,`string`);return typeof t==`symbol`?t:t+``}function qN(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var JN={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:`ease`,animationMatchBy:MA,animationInterpolateFn:(e,t)=>e==null?[]:t===1?e.flatMap(e=>e.status===`removed`?[]:[e.next]):e.flatMap(e=>e.status===`matched`?[WN(WN({},e.next),{},{x:Ar(e.prev.x,e.next.x,t),y:Ar(e.prev.y,e.next.y,t)})]:e.status===`added`?[e.next]:[]),connectNulls:!1,dot:!1,fill:`#3182bd`,fillOpacity:.6,hide:!1,isAnimationActive:`auto`,legendType:`line`,stroke:`#3182bd`,strokeWidth:1,type:`linear`,label:!1,shape:LN,xAxisId:0,yAxisId:0,zIndex:eg.area};function YN(e,t){return e&&e!==`none`?e:t}var XN=e=>{var t=e.dataKey,n=e.name,r=e.stroke,i=e.fill,a=e.legendType;return[{inactive:e.hide,dataKey:t,type:a,color:YN(r,i),value:bu(n,t),payload:e}]},ZN=v.memo(e=>{var t=e.dataKey,n=e.data,r=e.stroke,i=e.strokeWidth,a=e.fill,o=e.name,s=e.hide,c=e.unit,l=e.formatter,u=e.tooltipType,d=e.id,f={dataDefinedOnItem:n,getPosition:Fr,settings:{stroke:r,strokeWidth:i,fill:a,dataKey:t,nameKey:void 0,name:bu(o,t),hide:s,type:u,color:YN(r,a),unit:c,formatter:l,graphicalItemId:d}};return v.createElement(wA,{tooltipEntrySettings:f})});function QN(e){var t=e.clipPathId,n=e.points,r=e.props,i=r.needClip,a=r.dot,o=r.dataKey,s=Yn(r);return v.createElement(Sj,{points:n,dot:a,className:`recharts-area-dots`,dotClassName:`recharts-area-dot`,dataKey:o,baseProps:s,needClip:i,clipPathId:t})}function $N(e){var t=e.showLabels,n=e.children,r=e.points.map(e=>{var t={x:e.x??0,y:e.y??0,width:0,lowerWidth:0,upperWidth:0,height:0};return WN(WN({},t),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:t,fill:void 0})});return v.createElement(eA,{value:t?r:void 0},n)}function eP(e){var t=e.points,n=e.baseLine,r=e.needClip,i=e.clipPathId,a=e.props,o=e.animationElapsedTime,s=e.isAnimating,c=e.isEntrance,l=a.layout,u=a.type,d=a.stroke,f=a.connectNulls,p=a.isRange,m=a.shape,h=a.id,g=VN(a,RN),_=WN(WN({},Zn(g)),{},{id:h,points:t,connectNulls:f,type:u,baseLine:n,layout:l,stroke:d,isRange:p,animationElapsedTime:o,isAnimating:s,isEntrance:c});return v.createElement(v.Fragment,null,t?.length>1&&v.createElement(cr,{clipPath:r?`url(#clipPath-${i})`:void 0},v.createElement(CA,{option:m,DefaultShape:JN.shape,shapeProps:_})),v.createElement(QN,{points:t,props:g,clipPathId:i}))}function tP(e,t,n){return R(e)?Ar(R(t)?t:void 0,e,n):Mr(e)||Cr(e)?Ar(R(t)?t:void 0,0,n):e}function nP(e){var t=e.needClip,n=e.clipPathId,r=e.props,i=e.previousPointsRef,a=e.previousBaselineRef,o=r.points,s=r.baseLine,c=r.isAnimationActive,l=r.animationBegin,u=r.animationDuration,d=r.animationEasing,f=r.animationMatchBy,p=r.animationInterpolateFn,m=(0,v.useMemo)(()=>({points:o,baseLine:s}),[o,s]),h=zA(m,a),g=jd(),_=KA(r.onAnimationStart,r.onAnimationEnd),y=_.isAnimating,b=_.handleAnimationStart,x=_.handleAnimationEnd,S=h.startValue;if(g==null)return null;var C=Array.isArray(s)&&Array.isArray(S)?RA(S,s,f):Array.isArray(s)?RA(null,s,f):null;return v.createElement(qA,{animationInput:m,animationIdPrefix:`recharts-area-`,items:o,previousItemsRef:i,isAnimationActive:c,animationBegin:l,animationDuration:u,animationEasing:d,onAnimationStart:b,onAnimationEnd:x,animationInterpolateFn:p,animationMatchBy:f,layout:g},(e,i,a)=>{var c=i===1?s:Array.isArray(s)?p(C,i,g):a?s:tP(s,S,i);return h.syncStepValue(c,i),v.createElement($N,{showLabels:!y,points:o},r.children,v.createElement(eP,{points:e,baseLine:c,needClip:t,clipPathId:n,props:r,animationElapsedTime:i,isAnimating:y||i<1,isEntrance:a}),v.createElement(aA,{label:r.label}))})}function rP(e){var t=e.needClip,n=e.clipPathId,r=e.props,i=(0,v.useRef)(null),a=(0,v.useRef)();return v.createElement(nP,{needClip:t,clipPathId:n,props:r,previousPointsRef:i,previousBaselineRef:a})}var iP=class extends v.PureComponent{render(){var e=this.props,t=e.hide,n=e.dot,r=e.points,i=e.className,a=e.top,o=e.left,s=e.needClip,c=e.xAxisId,l=e.yAxisId,u=e.width,d=e.height,f=e.id,p=e.baseLine,m=e.zIndex;if(t)return null;var h=Un(`recharts-area`,i),g=f,_=gN(n),y=_.r,b=_.strokeWidth,x=fA(n),S=y*2+b,C=s?`url(#clipPath-${x?``:`dots-`}${g})`:void 0;return v.createElement(cD,{zIndex:m},v.createElement(cr,{className:h},s&&v.createElement(`defs`,null,v.createElement(hN,{clipPathId:g,xAxisId:c,yAxisId:l}),!x&&v.createElement(`clipPath`,{id:`clipPath-dots-${g}`},v.createElement(`rect`,{x:o-S/2,y:a-S/2,width:u+S,height:d+S}))),v.createElement(rP,{needClip:s,clipPathId:g,props:this.props})),v.createElement(Jj,{points:r,mainColor:YN(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:C}),this.props.isRange&&Array.isArray(p)&&v.createElement(Jj,{points:p,mainColor:YN(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:C}))}};function aP(e){var t=e.activeDot,n=e.animationBegin,r=e.animationDuration,i=e.animationEasing,a=e.connectNulls,o=e.dot,s=e.fill,c=e.fillOpacity,l=e.hide,u=e.isAnimationActive,d=e.legendType,f=e.stroke,p=e.xAxisId,m=e.yAxisId,h=VN(e,zN),g=Ad(),_=DE(),y=mN(p,m).needClip,b=Wu(),x=B(t=>ON(t,e.id,b))??{},S=x.points,C=x.isRange,w=x.baseLine,T=Bj();if(g!==`horizontal`&&g!==`vertical`||T==null||_!==`AreaChart`&&_!==`ComposedChart`)return null;var E=T.height,D=T.width,O=T.x,k=T.y;return!S||!S.length?null:v.createElement(iP,BN({},h,{activeDot:t,animationBegin:n,animationDuration:r,animationEasing:i,baseLine:w,connectNulls:a,dot:o,fill:s,fillOpacity:c,height:E,hide:l,layout:g,isAnimationActive:u,isRange:C,legendType:d,needClip:y,points:S,stroke:f,width:D,left:O,top:k,xAxisId:p,yAxisId:m}))}var oP=(e,t,n,r,i)=>{var a=n??t;if(R(a))return a;var o=e===`horizontal`?i:r,s=o.scale.domain();if(o.type===`number`){var c=Math.max(s[0],s[1]),l=Math.min(s[0],s[1]);return a===`dataMin`?l:a===`dataMax`||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return a===`dataMin`?s[0]:a===`dataMax`?s[1]:s[0]};function sP(e){var t=e.areaSettings,n=t.connectNulls,r=t.baseValue,i=t.dataKey,a=e.stackedData,o=e.layout,s=e.chartBaseValue,c=e.xAxis,l=e.yAxis,u=e.displayedData,d=e.dataStartIndex,f=e.xAxisTicks,p=e.yAxisTicks,m=e.bandSize,h=e.stackDataKeys,g=a&&a.length,_=oP(o,s,r,c,l),v=o===`horizontal`,y=!1,b=u.map((e,t)=>{var r;if(g)r=a[d+t];else{var o=ou(e,i);Array.isArray(o)?(r=o,y=!0):r=[_,o]}var s=r?.[1]??null,u=ou(e,i),b=g&&u==null&&h!=null&&h.length>0&&h.every(t=>ou(e,t)==null),x=s==null||g&&!n&&u==null||b;return v?{x:fu({axis:c,ticks:f,bandSize:m,entry:e,index:t}),y:x?null:l.scale.map(s)??null,value:r,payload:e}:{x:x?null:c.scale.map(s)??null,y:fu({axis:l,ticks:p,bandSize:m,entry:e,index:t}),value:r,payload:e}});return{points:b,baseLine:(g||y?b.map(e=>{var t=Array.isArray(e.value)?e.value[0]:null;return v?{x:e.x,y:t!=null&&e.y!=null?l.scale.map(t)??null:null,payload:e.payload}:{x:t==null?null:c.scale.map(t)??null,y:e.y,payload:e.payload}}):v?l.scale.map(_):c.scale.map(_))??0,isRange:y}}function cP(e){var t=ea(e,JN),n=Wu();return v.createElement(rj,{id:t.id,type:`area`},e=>v.createElement(v.Fragment,null,v.createElement(TA,{legendPayload:XN(t)}),v.createElement(ZN,{dataKey:t.dataKey,data:t.data,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,hide:t.hide,unit:t.unit,formatter:t.formatter,tooltipType:t.tooltipType,id:e}),v.createElement(uj,{type:`area`,id:e,data:t.data,dataKey:t.dataKey,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,stackId:du(t.stackId),hide:t.hide,barSize:void 0,baseValue:t.baseValue,isPanorama:n,connectNulls:t.connectNulls}),v.createElement(aP,BN({},t,{id:e}))))}var lP=v.memo(cP,of);lP.displayName=`Area`;var uP=[`domain`,`range`],dP=[`domain`,`range`];function fP(e,t){if(e==null)return{};var n,r,i=pP(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function pP(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function mP(e,t){return e===t?!0:Array.isArray(e)&&e.length===2&&Array.isArray(t)&&t.length===2?e[0]===t[0]&&e[1]===t[1]:!1}function hP(e,t){if(e===t)return!0;var n=e.domain,r=e.range,i=fP(e,uP),a=t.domain,o=t.range,s=fP(t,dP);return!mP(n,a)||!mP(r,o)?!1:of(i,s)}var gP=[`type`],_P=[`dangerouslySetInnerHTML`,`ticks`,`scale`],vP=[`id`,`scale`];function yP(){return yP=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yP.apply(null,arguments)}function bP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function xP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?bP(Object(n),!0).forEach(function(t){SP(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bP(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function SP(e,t,n){return(t=CP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CP(e){var t=wP(e,`string`);return typeof t==`symbol`?t:t+``}function wP(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function TP(e,t){if(e==null)return{};var n,r,i=EP(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function EP(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function DP(e){var t=vo(),n=(0,v.useRef)(null),r=jd(),i=e.type,a=TP(e,gP),o=ig(r,`xAxis`,i),s=(0,v.useMemo)(()=>{if(o!=null)return xP(xP({},a),{},{type:o})},[a,o]);return(0,v.useLayoutEffect)(()=>{s!=null&&(n.current===null?t(Aj(s)):n.current!==s&&t(jj({prev:n.current,next:s})),n.current=s)},[s,t]),(0,v.useLayoutEffect)(()=>()=>{n.current&&=(t(Mj(n.current)),null)},[t]),null}var OP=e=>{var t=e.xAxisId,n=e.className,r=e.height,i=e.label,a=(0,v.useRef)(null),o=(0,v.useRef)(null),s=B(Hu),c=Wu(),l=vo(),u=`xAxis`,d=B(e=>Pw(e,u,t,c)),f=B(e=>ww(e,t)),p=B(e=>kw(e,t)),m=B(e=>FS(e,t));if((0,v.useLayoutEffect)(()=>{if(!(r!==`auto`||!f||Lk(i)||(0,v.isValidElement)(i)||m==null)){var e=a.current;if(e){var n=e.getCalculatedHeight();Math.round(f.height)!==Math.round(n)&&l(Lj({id:t,height:n}))}}},[d,f,l,i,t,r,m]),f==null||p==null||m==null)return null;e.dangerouslySetInnerHTML,e.ticks,e.scale;var h=TP(e,_P);m.id,m.scale;var g=TP(m,vP);return v.createElement(uN,yP({},h,g,{ref:a,labelRef:o,x:p.x,y:p.y,width:f.width,height:f.height,className:Un(`recharts-${u} ${u}`,n),viewBox:s,ticks:d,axisType:u,axisId:t}))},kP={allowDataOverflow:PS.allowDataOverflow,allowDecimals:PS.allowDecimals,allowDuplicatedCategory:PS.allowDuplicatedCategory,angle:PS.angle,axisLine:tN.axisLine,height:PS.height,hide:!1,includeHidden:PS.includeHidden,interval:PS.interval,label:!1,minTickGap:PS.minTickGap,mirror:PS.mirror,orientation:PS.orientation,padding:PS.padding,reversed:PS.reversed,scale:PS.scale,tick:PS.tick,tickCount:PS.tickCount,tickLine:tN.tickLine,tickSize:tN.tickSize,type:PS.type,niceTicks:PS.niceTicks,xAxisId:0},AP=v.memo(e=>{var t=ea(e,kP);return v.createElement(v.Fragment,null,v.createElement(DP,{allowDataOverflow:t.allowDataOverflow,allowDecimals:t.allowDecimals,allowDuplicatedCategory:t.allowDuplicatedCategory,angle:t.angle,dataKey:t.dataKey,domain:t.domain,height:t.height,hide:t.hide,id:t.xAxisId,includeHidden:t.includeHidden,interval:t.interval,minTickGap:t.minTickGap,mirror:t.mirror,name:t.name,orientation:t.orientation,padding:t.padding,reversed:t.reversed,scale:t.scale,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit,niceTicks:t.niceTicks}),v.createElement(OP,t))},hP);AP.displayName=`XAxis`;var jP=[`type`],MP=[`dangerouslySetInnerHTML`,`ticks`,`scale`],NP=[`id`,`scale`];function PP(){return PP=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},PP.apply(null,arguments)}function FP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function IP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?FP(Object(n),!0).forEach(function(t){LP(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):FP(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function LP(e,t,n){return(t=RP(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RP(e){var t=zP(e,`string`);return typeof t==`symbol`?t:t+``}function zP(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function BP(e,t){if(e==null)return{};var n,r,i=VP(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function VP(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function HP(e){var t=vo(),n=(0,v.useRef)(null),r=jd(),i=e.type,a=BP(e,jP),o=ig(r,`yAxis`,i),s=(0,v.useMemo)(()=>{if(o!=null)return IP(IP({},a),{},{type:o})},[o,a]);return(0,v.useLayoutEffect)(()=>{s!=null&&(n.current===null?t(Nj(s)):n.current!==s&&t(Pj({prev:n.current,next:s})),n.current=s)},[s,t]),(0,v.useLayoutEffect)(()=>()=>{n.current&&=(t(Fj(n.current)),null)},[t]),null}function UP(e){var t=e.yAxisId,n=e.className,r=e.width,i=e.label,a=(0,v.useRef)(null),o=(0,v.useRef)(null),s=B(Hu),c=Wu(),l=vo(),u=`yAxis`,d=B(e=>jw(e,t)),f=B(e=>Aw(e,t)),p=B(e=>Pw(e,u,t,c)),m=B(e=>RS(e,t));if((0,v.useLayoutEffect)(()=>{if(!(r!==`auto`||!d||Lk(i)||(0,v.isValidElement)(i)||m==null)){var e=a.current;if(e){var n=e.getCalculatedWidth();Math.round(d.width)!==Math.round(n)&&l(Ij({id:t,width:n}))}}},[p,d,l,i,t,r,m]),d==null||f==null||m==null)return null;e.dangerouslySetInnerHTML,e.ticks,e.scale;var h=BP(e,MP);m.id,m.scale;var g=BP(m,NP);return v.createElement(uN,PP({},h,g,{ref:a,labelRef:o,x:f.x,y:f.y,tickTextProps:r===`auto`?{width:void 0}:{width:r},width:d.width,height:d.height,className:Un(`recharts-${u} ${u}`,n),viewBox:s,ticks:p,axisType:u,axisId:t}))}var WP={allowDataOverflow:LS.allowDataOverflow,allowDecimals:LS.allowDecimals,allowDuplicatedCategory:LS.allowDuplicatedCategory,angle:LS.angle,axisLine:tN.axisLine,hide:!1,includeHidden:LS.includeHidden,interval:LS.interval,label:!1,minTickGap:LS.minTickGap,mirror:LS.mirror,orientation:LS.orientation,padding:LS.padding,reversed:LS.reversed,scale:LS.scale,tick:LS.tick,tickCount:LS.tickCount,tickLine:tN.tickLine,tickSize:tN.tickSize,type:LS.type,niceTicks:LS.niceTicks,width:LS.width,yAxisId:0},GP=v.memo(e=>{var t=ea(e,WP);return v.createElement(v.Fragment,null,v.createElement(HP,{interval:t.interval,id:t.yAxisId,scale:t.scale,type:t.type,domain:t.domain,allowDataOverflow:t.allowDataOverflow,dataKey:t.dataKey,allowDuplicatedCategory:t.allowDuplicatedCategory,allowDecimals:t.allowDecimals,tickCount:t.tickCount,padding:t.padding,includeHidden:t.includeHidden,reversed:t.reversed,ticks:t.ticks,width:t.width,orientation:t.orientation,mirror:t.mirror,hide:t.hide,unit:t.unit,name:t.name,angle:t.angle,minTickGap:t.minTickGap,tick:t.tick,tickFormatter:t.tickFormatter,niceTicks:t.niceTicks}),v.createElement(UP,t))},hP);GP.displayName=`YAxis`;var KP=V([(e,t)=>t,kd,bg,kg,XT,QT,jE,Bu],UE);function qP(e){return`getBBox`in e.currentTarget&&typeof e.currentTarget.getBBox==`function`}function JP(e){var t=e.currentTarget.getBoundingClientRect(),n,r;if(qP(e)){var i=e.currentTarget.getBBox();n=i.width>0?t.width/i.width:1,r=i.height>0?t.height/i.height:1}else{var a=e.currentTarget;n=a.offsetWidth>0?t.width/a.offsetWidth:1,r=a.offsetHeight>0?t.height/a.offsetHeight:1}var o=(e,i)=>({relativeX:Math.round((e-t.left)/n),relativeY:Math.round((i-t.top)/r)});return`touches`in e?Array.from(e.touches).map(e=>o(e.clientX,e.clientY)):o(e.clientX,e.clientY)}var YP=Lc(`mouseClick`),XP=Gl();XP.startListening({actionCreator:YP,effect:(e,t)=>{var n=e.payload,r=KP(t.getState(),JP(n));r?.activeIndex!=null&&t.dispatch(tT({activeIndex:r.activeIndex,activeDataKey:void 0,activeCoordinate:r.activeCoordinate}))}});var ZP=Lc(`mouseMove`),QP=Gl(),$P=null,eF=null,tF=null;QP.startListening({actionCreator:ZP,effect:(e,t)=>{var n=e.payload,r=t.getState().eventSettings,i=r.throttleDelay,a=r.throttledEvents,o=a===`all`||a?.includes(`mousemove`);$P!==null&&(cancelAnimationFrame($P),$P=null),eF!==null&&(typeof i!=`number`||!o)&&(clearTimeout(eF),eF=null),tF=JP(n);var s=()=>{var e=t.getState(),n=Vw(e,e.tooltip.settings.shared);if(!tF){$P=null,eF=null;return}if(n===`axis`){var r=KP(e,tF);r?.activeIndex==null?t.dispatch($w()):t.dispatch(eT({activeIndex:r.activeIndex,activeDataKey:void 0,activeCoordinate:r.activeCoordinate}))}$P=null,eF=null};if(!o){s();return}i===`raf`?$P=requestAnimationFrame(s):typeof i==`number`&&eF===null&&(eF=setTimeout(s,i))}});function nF(e,t){return t instanceof HTMLElement?`HTMLElement <${t.tagName} class="${t.className}">`:t===window?`global.window`:e===`children`&&typeof t==`object`&&t?`<<CHILDREN>>`:t}var rF={accessibilityLayer:!0,barCategoryGap:`10%`,barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:`none`,syncId:void 0,syncMethod:`index`,baseValue:void 0,reverseStackOrder:!1},iF=al({name:`rootProps`,initialState:rF,reducers:{updateOptions:(e,t)=>{e.accessibilityLayer=t.payload.accessibilityLayer,e.barCategoryGap=t.payload.barCategoryGap,e.barGap=t.payload.barGap??rF.barGap,e.barSize=t.payload.barSize,e.maxBarSize=t.payload.maxBarSize,e.stackOffset=t.payload.stackOffset,e.syncId=t.payload.syncId,e.syncMethod=t.payload.syncMethod,e.className=t.payload.className,e.baseValue=t.payload.baseValue,e.reverseStackOrder=t.payload.reverseStackOrder}}}),aF=iF.reducer,oF=iF.actions.updateOptions,sF=al({name:`polarOptions`,initialState:null,reducers:{updatePolarOptions:(e,t)=>e===null?t.payload:(e.startAngle=t.payload.startAngle,e.endAngle=t.payload.endAngle,e.cx=t.payload.cx,e.cy=t.payload.cy,e.innerRadius=t.payload.innerRadius,e.outerRadius=t.payload.outerRadius,e)}});sF.actions.updatePolarOptions;var cF=sF.reducer,lF=Lc(`keyDown`),uF=Lc(`focus`),dF=Lc(`blur`),fF=Gl(),pF=null,mF=null,hF=null;fF.startListening({actionCreator:lF,effect:(e,t)=>{hF=e.payload,pF!==null&&(cancelAnimationFrame(pF),pF=null);var n=t.getState().eventSettings,r=n.throttleDelay,i=n.throttledEvents,a=i===`all`||i.includes(`keydown`);mF!==null&&(typeof r!=`number`||!a)&&(clearTimeout(mF),mF=null);var o=()=>{try{var e=t.getState();if(e.rootProps.accessibilityLayer===!1)return;var n=e.tooltip.keyboardInteraction,r=hF;if(r!==`ArrowRight`&&r!==`ArrowLeft`&&r!==`Enter`)return;var i=gT(n,RT(e),gC(e),qT(e)),a=i==null?-1:Number(i),o=!Number.isFinite(a)||a<0,s=QT(e),c=RT(e),l=Vw(e,e.tooltip.settings.shared);if(r===`Enter`){if(o)return;var u=IE(e,l,`hover`,String(n.index));t.dispatch(rT({active:!n.active,activeIndex:n.index,activeCoordinate:u}));return}var d=Lw(e)===`left-to-right`?1:-1,f=r===`ArrowRight`?1:-1,p;if(o){var m=gC(e),h=qT(e),g=f*d,_=e=>({active:!1,index:String(e),dataKey:void 0,graphicalItemId:void 0,coordinate:void 0});if(p=-1,g>0){for(var v=0;v<c.length;v++)if(gT(_(v),c,m,h)!=null){p=v;break}}else for(var y=c.length-1;y>=0;y--)if(gT(_(y),c,m,h)!=null){p=y;break}if(p<0)return}else{p=a+f*d;var b=s?.length||c.length;if(b===0||p>=b||p<0)return}var x=IE(e,l,`hover`,String(p));t.dispatch(rT({active:!0,activeIndex:p.toString(),activeCoordinate:x}))}finally{pF=null,mF=null}};if(!a){o();return}r===`raf`?pF=requestAnimationFrame(o):typeof r==`number`&&mF===null&&(o(),hF=null,mF=setTimeout(()=>{hF?o():(mF=null,pF=null)},r))}}),fF.startListening({actionCreator:uF,effect:(e,t)=>{var n=t.getState();if(n.rootProps.accessibilityLayer!==!1){var r=n.tooltip.keyboardInteraction;if(!r.active&&r.index==null){var i=`0`,a=IE(n,Vw(n,n.tooltip.settings.shared),`hover`,String(i));t.dispatch(rT({active:!0,activeIndex:i,activeCoordinate:a}))}}}}),fF.startListening({actionCreator:dF,effect:(e,t)=>{var n=t.getState();if(n.rootProps.accessibilityLayer!==!1){var r=n.tooltip.keyboardInteraction;r.active&&t.dispatch(rT({active:!1,activeIndex:r.index,activeCoordinate:r.coordinate}))}}});function gF(e){e.persist();var t=e.currentTarget;return new Proxy(e,{get:(e,n)=>{if(n===`currentTarget`)return t;var r=Reflect.get(e,n);return typeof r==`function`?r.bind(e):r}})}var _F=Lc(`externalEvent`),vF=Gl(),yF=new Map,bF=new Map,xF=new Map;vF.startListening({actionCreator:_F,effect:(e,t)=>{var n=e.payload,r=n.handler,i=n.reactEvent;if(r!=null){var a=i.type,o=gF(i);xF.set(a,{handler:r,reactEvent:o});var s=yF.get(a);s!==void 0&&(cancelAnimationFrame(s),yF.delete(a));var c=t.getState().eventSettings,l=c.throttleDelay,u=c.throttledEvents,d=u===`all`||u?.includes(a),f=bF.get(a);f!==void 0&&(typeof l!=`number`||!d)&&(clearTimeout(f),bF.delete(a));var p=()=>{var e=xF.get(a);try{if(!e)return;var n=e.handler,r=e.reactEvent,i=t.getState(),o={activeCoordinate:cE(i),activeDataKey:aE(i),activeIndex:rE(i),activeLabel:iE(i),activeTooltipIndex:rE(i),isTooltipActive:lE(i)};n&&n(o,r)}finally{yF.delete(a),bF.delete(a),xF.delete(a)}};if(!d){p();return}if(l===`raf`){var m=requestAnimationFrame(p);yF.set(a,m)}else if(typeof l==`number`){if(!bF.has(a)){p();var h=setTimeout(p,l);bF.set(a,h)}}else p()}}});var SF=V([V([bT],e=>e.tooltipItemPayloads),(e,t)=>t,(e,t,n)=>n],(e,t,n)=>{if(t!=null){var r=e.find(e=>e.settings.graphicalItemId===n);if(r!=null){var i=r.getPosition;if(i!=null)return i(t)}}}),CF=Lc(`touchMove`),wF=Gl(),TF=null,EF=null,DF=null,OF=null;wF.startListening({actionCreator:CF,effect:(e,t)=>{var n=e.payload;if(n.touches!=null&&n.touches.length!==0){OF=gF(n);var r=t.getState().eventSettings,i=r.throttleDelay,a=r.throttledEvents,o=a===`all`||a.includes(`touchmove`);TF!==null&&(cancelAnimationFrame(TF),TF=null),EF!==null&&(typeof i!=`number`||!o)&&(clearTimeout(EF),EF=null),DF=Array.from(n.touches).map(e=>JP({clientX:e.clientX,clientY:e.clientY,currentTarget:n.currentTarget}));var s=()=>{if(OF!=null){var e=t.getState(),n=Vw(e,e.tooltip.settings.shared);if(n===`axis`){var r=DF?.[0];if(r==null){TF=null,EF=null;return}var i=KP(e,r);i?.activeIndex!=null&&t.dispatch(eT({activeIndex:i.activeIndex,activeDataKey:void 0,activeCoordinate:i.activeCoordinate}))}else if(n===`item`){var a=OF.touches[0];if(document.elementFromPoint==null||a==null)return;var o=document.elementFromPoint(a.clientX,a.clientY);if(!o||!o.getAttribute)return;var s=o.getAttribute(ku),c=o.getAttribute(`data-recharts-item-id`)??void 0,l=PT(e).find(e=>e.id===c);if(s==null||l==null||c==null)return;var u=l.dataKey,d=SF(e,s,c);t.dispatch(Qw({activeDataKey:u,activeIndex:s,activeCoordinate:d,activeGraphicalItemId:c}))}TF=null,EF=null}};if(!o){s();return}i===`raf`?TF=requestAnimationFrame(s):typeof i==`number`&&EF===null&&(s(),OF=null,EF=setTimeout(()=>{OF?s():(EF=null,TF=null)},i))}}});var kF={throttleDelay:`raf`,throttledEvents:[`mousemove`,`touchmove`,`pointermove`,`scroll`,`wheel`]},AF=al({name:`eventSettings`,initialState:kF,reducers:{setEventSettings:(e,t)=>{t.payload.throttleDelay!=null&&(e.throttleDelay=t.payload.throttleDelay),t.payload.throttledEvents!=null&&(e.throttledEvents=W(t.payload.throttledEvents))}}}),jF=AF.actions.setEventSettings,MF=AF.reducer,NF=ss({brush:Qj,cartesianAxis:Rj,chartData:ND,errorBars:pN,eventSettings:MF,graphicalItems:lj,layout:$l,legend:Bd,options:ED,polarAxis:uA,polarOptions:cF,referenceElements:rM,renderedTicks:zM,rootProps:aF,tooltip:iT,zIndex:oD}),PF=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`Chart`;return Yc({reducer:NF,preloadedState:e,middleware:e=>e({serializableCheck:!1,immutableCheck:![`commonjs`,`es6`,`production`].includes(`es6`)}).concat([XP.middleware,QP.middleware,fF.middleware,vF.middleware,wF.middleware]),enhancers:e=>{var t=e;return typeof e==`function`&&(t=e()),t.concat(qc({type:`raf`}))},devTools:kf.devToolsEnabled&&{serialize:{replacer:nF},name:`recharts-${t}`}})};function FF(e){var t=e.preloadedState,n=e.children,r=e.reduxStoreName,i=Wu(),a=(0,v.useRef)(null);if(i)return n;a.current??=PF(t,r);var o=ho;return v.createElement(nf,{context:o,store:a.current},n)}function IF(e){var t=e.layout,n=e.margin,r=vo(),i=Wu();return(0,v.useEffect)(()=>{i||(r(Xl(t)),r(Yl(n)))},[r,i,t,n]),null}var LF=(0,v.memo)(IF,of);function RF(e){var t=vo();return(0,v.useEffect)(()=>{t(oF(e))},[t,e]),null}var zF=(0,v.memo)(e=>{var t=vo();return(0,v.useEffect)(()=>{t(jF(e))},[t,e]),null},of);function BF(e){var t=e.zIndex,n=e.isPanorama,r=(0,v.useRef)(null),i=vo();return(0,v.useLayoutEffect)(()=>(r.current&&i(iD({zIndex:t,element:r.current,isPanorama:n})),()=>{i(aD({zIndex:t,isPanorama:n}))}),[i,t,n]),v.createElement(`g`,{tabIndex:-1,ref:r,className:`recharts-zIndex-layer_${t}`})}function VF(e){var t=e.children,n=e.isPanorama,r=B(GE);if(!r||r.length===0)return t;var i=r.filter(e=>e<0),a=r.filter(e=>e>0);return v.createElement(v.Fragment,null,i.map(e=>v.createElement(BF,{key:e,zIndex:e,isPanorama:n})),t,a.map(e=>v.createElement(BF,{key:e,zIndex:e,isPanorama:n})))}var HF=[`children`];function UF(e,t){if(e==null)return{};var n,r,i=WF(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function WF(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function GF(){return GF=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},GF.apply(null,arguments)}var KF={width:`100%`,height:`100%`,display:`block`},qF=(0,v.forwardRef)((e,t)=>{var n=Dd(),r=Od(),i=Xf();if(!tu(n)||!tu(r))return null;var a=e.children,o=e.otherAttributes,s=e.title,c=e.desc,l,u;return o!=null&&(l=typeof o.tabIndex==`number`?o.tabIndex:i?0:void 0,u=typeof o.role==`string`?o.role:i?`application`:void 0),v.createElement(rr,GF({},o,{title:s,desc:c,role:u,tabIndex:l,width:n,height:r,style:KF,ref:t}),a)}),JF=e=>{var t=e.children,n=B(Ku);if(!n)return null;var r=n.width,i=n.height,a=n.y,o=n.x;return v.createElement(rr,{width:r,height:i,x:o,y:a},t)},YF=(0,v.forwardRef)((e,t)=>{var n=e.children,r=UF(e,HF);return Wu()?v.createElement(JF,null,v.createElement(VF,{isPanorama:!0},n)):v.createElement(qF,GF({ref:t},r),v.createElement(VF,{isPanorama:!1},n))});function XF(e,t){return tI(e)||eI(e,t)||QF(e,t)||ZF()}function ZF(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QF(e,t){if(e){if(typeof e==`string`)return $F(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$F(e,t):void 0}}function $F(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function eI(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function tI(e){if(Array.isArray(e))return e}function nI(){var e=vo(),t=XF((0,v.useState)(null),2),n=t[0],r=t[1],i=B(Tu);return(0,v.useEffect)(()=>{if(n!=null){var t=n.getBoundingClientRect().width/n.offsetWidth;G(t)&&t!==i&&e(Ql(t))}},[n,e,i]),r}function rI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function iI(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?rI(Object(n),!0).forEach(function(t){aI(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rI(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function aI(e,t,n){return(t=oI(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oI(e){var t=sI(e,`string`);return typeof t==`symbol`?t:t+``}function sI(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function cI(){return cI=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cI.apply(null,arguments)}function lI(e,t){return mI(e)||pI(e,t)||dI(e,t)||uI()}function uI(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dI(e,t){if(e){if(typeof e==`string`)return fI(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fI(e,t):void 0}}function fI(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function pI(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function mI(e){if(Array.isArray(e))return e}var hI=()=>(WD(),null);function gI(e){if(typeof e==`number`)return e;if(typeof e==`string`){var t=parseFloat(e);if(!Number.isNaN(t))return t}return 0}var _I=(0,v.forwardRef)((e,t)=>{var n=(0,v.useRef)(null),r=lI((0,v.useState)({containerWidth:gI(e.style?.width),containerHeight:gI(e.style?.height)}),2),i=r[0],a=r[1],o=(0,v.useCallback)((e,t)=>{a(n=>{var r=Math.round(e),i=Math.round(t);return n.containerWidth===r&&n.containerHeight===i?n:{containerWidth:r,containerHeight:i}})},[]),s=(0,v.useCallback)(e=>{if(typeof t==`function`&&t(e),n.current!=null&&(n.current.disconnect(),n.current=null),e!=null&&typeof ResizeObserver<`u`){var r=e.getBoundingClientRect(),i=r.width,a=r.height;o(i,a);var s=new ResizeObserver(e=>{var t=e[0];if(t!=null){var n=t.contentRect,r=n.width,i=n.height;o(r,i)}});s.observe(e),n.current=s}},[t,o]);return(0,v.useEffect)(()=>()=>{n.current?.disconnect()},[o]),v.createElement(v.Fragment,null,v.createElement(Pd,{width:i.containerWidth,height:i.containerHeight}),v.createElement(`div`,cI({ref:s},e)))}),vI=(0,v.forwardRef)((e,t)=>{var n=e.width,r=e.height,i=lI((0,v.useState)({containerWidth:gI(n),containerHeight:gI(r)}),2),a=i[0],o=i[1],s=(0,v.useCallback)((e,t)=>{o(n=>{var r=Math.round(e),i=Math.round(t);return n.containerWidth===r&&n.containerHeight===i?n:{containerWidth:r,containerHeight:i}})},[]),c=(0,v.useCallback)(e=>{if(typeof t==`function`&&t(e),e!=null){var n=e.getBoundingClientRect(),r=n.width,i=n.height;s(r,i)}},[t,s]);return v.createElement(v.Fragment,null,v.createElement(Pd,{width:a.containerWidth,height:a.containerHeight}),v.createElement(`div`,cI({ref:c},e)))}),yI=(0,v.forwardRef)((e,t)=>{var n=e.width,r=e.height;return v.createElement(v.Fragment,null,v.createElement(Pd,{width:n,height:r}),v.createElement(`div`,cI({ref:t},e)))}),bI=(0,v.forwardRef)((e,t)=>{var n=e.width,r=e.height;return typeof n==`string`||typeof r==`string`?v.createElement(vI,cI({},e,{ref:t})):typeof n==`number`&&typeof r==`number`?v.createElement(yI,cI({},e,{width:n,height:r,ref:t})):v.createElement(v.Fragment,null,v.createElement(Pd,{width:n,height:r}),v.createElement(`div`,cI({ref:t},e)))});function xI(e){return e?_I:bI}var SI=(0,v.forwardRef)((e,t)=>{var n=e.children,r=e.className,i=e.height,a=e.onClick,o=e.onContextMenu,s=e.onDoubleClick,c=e.onMouseDown,l=e.onMouseEnter,u=e.onMouseLeave,d=e.onMouseMove,f=e.onMouseUp,p=e.onTouchEnd,m=e.onTouchMove,h=e.onTouchStart,g=e.style,_=e.width,y=e.responsive,b=e.dispatchTouchEvents,x=b===void 0||b,S=(0,v.useRef)(null),C=vo(),w=lI((0,v.useState)(null),2),T=w[0],E=w[1],D=lI((0,v.useState)(null),2),O=D[0],k=D[1],A=nI(),j=xd(),M=j?.width>0?j.width:_,N=j?.height>0?j.height:i,ee=(0,v.useCallback)(e=>{A(e),typeof t==`function`&&t(e),E(e),k(e),e!=null&&(S.current=e)},[A,t,E,k]),te=(0,v.useCallback)(e=>{C(YP(e)),C(_F({handler:a,reactEvent:e}))},[C,a]),ne=(0,v.useCallback)(e=>{C(ZP(e)),C(_F({handler:l,reactEvent:e}))},[C,l]),re=(0,v.useCallback)(e=>{C($w()),C(_F({handler:u,reactEvent:e}))},[C,u]),ie=(0,v.useCallback)(e=>{C(ZP(e)),C(_F({handler:d,reactEvent:e}))},[C,d]),ae=(0,v.useCallback)(()=>{C(uF())},[C]),oe=(0,v.useCallback)(()=>{C(dF())},[C]),se=(0,v.useCallback)(e=>{C(lF(e.key))},[C]),ce=(0,v.useCallback)(e=>{C(_F({handler:o,reactEvent:e}))},[C,o]),le=(0,v.useCallback)(e=>{C(_F({handler:s,reactEvent:e}))},[C,s]),ue=(0,v.useCallback)(e=>{C(_F({handler:c,reactEvent:e}))},[C,c]),P=(0,v.useCallback)(e=>{C(_F({handler:f,reactEvent:e}))},[C,f]),de=(0,v.useCallback)(e=>{C(_F({handler:h,reactEvent:e}))},[C,h]),fe=(0,v.useCallback)(e=>{x&&C(CF(e)),C(_F({handler:m,reactEvent:e}))},[C,x,m]),pe=(0,v.useCallback)(e=>{C(_F({handler:p,reactEvent:e}))},[C,p]),me=xI(y);return v.createElement(vD.Provider,{value:T},v.createElement(Gr.Provider,{value:O},v.createElement(me,{width:M??g?.width,height:N??g?.height,className:Un(`recharts-wrapper`,r),style:iI({position:`relative`,cursor:`default`,width:M,height:N},g),onClick:te,onContextMenu:ce,onDoubleClick:le,onFocus:ae,onBlur:oe,onKeyDown:se,onMouseDown:ue,onMouseEnter:ne,onMouseLeave:re,onMouseMove:ie,onMouseUp:P,onTouchEnd:pe,onTouchMove:fe,onTouchStart:de,ref:ee},v.createElement(hI,null),n)))}),CI=[`width`,`height`,`responsive`,`children`,`className`,`style`,`compact`,`title`,`desc`];function wI(e,t){if(e==null)return{};var n,r,i=TI(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function TI(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var EI=(0,v.forwardRef)((e,t)=>{var n=e.width,r=e.height,i=e.responsive,a=e.children,o=e.className,s=e.style,c=e.compact,l=e.title,u=e.desc,d=Yn(wI(e,CI));return c?v.createElement(v.Fragment,null,v.createElement(Pd,{width:n,height:r}),v.createElement(YF,{otherAttributes:d,title:l,desc:u},a)):v.createElement(SI,{className:o,style:s,width:n,height:r,responsive:i??!1,onClick:e.onClick,onMouseLeave:e.onMouseLeave,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onContextMenu:e.onContextMenu,onDoubleClick:e.onDoubleClick,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEnd},v.createElement(YF,{otherAttributes:d,title:l,desc:u,ref:t},v.createElement(dM,null,a)))});function DI(){return DI=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},DI.apply(null,arguments)}function OI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function kI(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?OI(Object(n),!0).forEach(function(t){AI(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):OI(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function AI(e,t,n){return(t=jI(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jI(e){var t=MI(e,`string`);return typeof t==`symbol`?t:t+``}function MI(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var NI=kI({accessibilityLayer:!0,barCategoryGap:`10%`,barGap:4,layout:`horizontal`,margin:{top:5,right:5,bottom:5,left:5},responsive:!1,reverseStackOrder:!1,stackOffset:`none`,syncMethod:`index`},kF),PI=(0,v.forwardRef)(function(e,t){var n=ea(e.categoricalChartProps,NI),r=e.chartName,i=e.defaultTooltipEventType,a=e.validateTooltipEventTypes,o=e.tooltipPayloadSearcher,s=e.categoricalChartProps,c={chartName:r,defaultTooltipEventType:i,validateTooltipEventTypes:a,tooltipPayloadSearcher:o,eventEmitter:void 0};return v.createElement(FF,{preloadedState:{options:c},reduxStoreName:s.id??r},v.createElement(Yj,{chartData:s.data}),v.createElement(LF,{layout:n.layout,margin:n.margin}),v.createElement(zF,{throttleDelay:n.throttleDelay,throttledEvents:n.throttledEvents}),v.createElement(RF,{baseValue:n.baseValue,accessibilityLayer:n.accessibilityLayer,barCategoryGap:n.barCategoryGap,maxBarSize:n.maxBarSize,stackOffset:n.stackOffset,barGap:n.barGap,barSize:n.barSize,syncId:n.syncId,syncMethod:n.syncMethod,className:n.className,reverseStackOrder:n.reverseStackOrder}),v.createElement(EI,DI({},n,{ref:t})))}),FI=[`axis`],II=(0,v.forwardRef)((e,t)=>v.createElement(PI,{chartName:`AreaChart`,defaultTooltipEventType:`axis`,validateTooltipEventTypes:FI,tooltipPayloadSearcher:wD,categoricalChartProps:e,ref:t})),LI=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function RI(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:LI(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var zI=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},BI=e=>{let t=zI(e);return t.charAt(0).toUpperCase()+t.slice(1)},VI=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),HI={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function UI(e){return e!=null}function WI(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??HI.width,a=e.size??e.height??HI.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?VI(...c):VI(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??HI[`stroke-width`])*Number(e.size??e.width??HI.width)/Number(t.size??t.width??HI.width):t.strokeWidth??HI[`stroke-width`];return[`svg`,{...Object.entries(HI).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&UI(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&UI(t.width)&&{[r(`width`)]:t.width},...`height`in t&&UI(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function GI(e,t={}){return WI(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var KI=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},qI=(0,v.createContext)({}),JI=()=>(0,v.useContext)(qI),YI=(0,v.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:_=`currentColor`,className:y=``}=JI()??{},b=!!c||KI(d),[x,S,C=[]]=GI(u,{color:e??_,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:VI(y,s),hasA11yProp:b,attributes:d});return(0,v.createElement)(x,{ref:f,...S},[...C.map(([e,t])=>(0,v.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function Q(e,t=[],n=[]){let r=typeof e==`string`?RI(e,t,n):e,i=(0,v.forwardRef)(({className:e,...t},n)=>(0,v.createElement)(YI,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=BI(r.name)),i}var XI={name:`activity`,size:24,node:[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]};XI.node;var ZI=Q(XI),QI={name:`arrow-up-right`,size:24,node:[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]};QI.node;var $I=Q(QI),eL={name:`building-complex`,size:24,node:[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]],aliases:[`building-2`]};eL.node;var tL=Q(eL),nL={name:`calendar`,size:24,node:[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}]]};nL.node;var rL=Q(nL),iL={name:`chart-column`,size:24,node:[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]],aliases:[`bar-chart-3`]};iL.node;var aL=Q(iL),oL={name:`chevron-down`,size:24,node:[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]};oL.node;var sL=Q(oL),cL={name:`chevron-up`,size:24,node:[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]};cL.node;var lL=Q(cL),uL={name:`circle-alert`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]],aliases:[`alert-circle`]};uL.node;var dL=Q(uL),fL={name:`circle-check`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16 9-5.5 5.5L8 12`,key:`xofnsj`}]],aliases:[`check-circle-2`]};fL.node;var pL=Q(fL),mL={name:`clipboard-list`,size:24,node:[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]};mL.node;var hL=Q(mL),gL={name:`clock`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]};gL.node;var _L=Q(gL),vL={name:`cpu`,size:24,node:[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]};vL.node;var yL=Q(vL),bL={name:`credit-card`,size:24,node:[[`rect`,{width:`20`,height:`14`,x:`2`,y:`5`,rx:`2`,key:`ynyp8z`}],[`line`,{x1:`2`,x2:`22`,y1:`10`,y2:`10`,key:`1b3vmo`}],[`path`,{d:`M6 14h2`,key:`mk7k0u`}]]};bL.node;var xL=Q(bL),SL={name:`database`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]};SL.node;var CL=Q(SL),wL={name:`eye-off`,size:24,node:[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]};wL.node;var TL=Q(wL),EL={name:`eye`,size:24,node:[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]};EL.node;var DL=Q(EL),OL={name:`file-spreadsheet`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M8 13h2`,key:`yr2amv`}],[`path`,{d:`M14 13h2`,key:`un5t4a`}],[`path`,{d:`M8 17h2`,key:`2yhykz`}],[`path`,{d:`M14 17h2`,key:`10kma7`}]]};OL.node;var kL=Q(OL),AL={name:`file-text`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]};AL.node;var jL=Q(AL),ML={name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]};ML.node;var NL=Q(ML),PL={name:`graduation-cap`,size:24,node:[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]};PL.node;var FL=Q(PL),IL={name:`info`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]};IL.node;var LL=Q(IL),RL={name:`lock`,size:24,node:[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]};RL.node;var zL=Q(RL),BL={name:`log-out`,size:24,node:[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]};BL.node;var VL=Q(BL),HL={name:`mail`,size:24,node:[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]};HL.node;var UL=Q(HL),WL={name:`maximize-2`,size:24,node:[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]};WL.node;var GL=Q(WL),KL={name:`minimize-2`,size:24,node:[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]};KL.node;var qL=Q(KL),JL={name:`palette`,size:24,node:[[`path`,{d:`M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,key:`e79jfc`}],[`circle`,{cx:`13.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`1okk4w`}],[`circle`,{cx:`17.5`,cy:`10.5`,r:`.5`,fill:`currentColor`,key:`f64h9f`}],[`circle`,{cx:`6.5`,cy:`12.5`,r:`.5`,fill:`currentColor`,key:`qy21gx`}],[`circle`,{cx:`8.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`fotxhn`}]]};JL.node;var YL=Q(JL),XL={name:`phone`,size:24,node:[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]};XL.node;var ZL=Q(XL),QL={name:`plus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]};QL.node;var $L=Q(QL),eR={name:`qr-code`,size:24,node:[[`rect`,{width:`5`,height:`5`,x:`3`,y:`3`,rx:`1`,key:`1tu5fj`}],[`rect`,{width:`5`,height:`5`,x:`16`,y:`3`,rx:`1`,key:`1v8r4q`}],[`rect`,{width:`5`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`1x03jg`}],[`path`,{d:`M21 16h-3a2 2 0 0 0-2 2v3`,key:`177gqh`}],[`path`,{d:`M21 21v.01`,key:`ents32`}],[`path`,{d:`M12 7v3a2 2 0 0 1-2 2H7`,key:`8crl2c`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M12 3h.01`,key:`n36tog`}],[`path`,{d:`M12 16v.01`,key:`133mhm`}],[`path`,{d:`M16 12h1`,key:`1slzba`}],[`path`,{d:`M21 12v.01`,key:`1lwtk9`}],[`path`,{d:`M12 21v-1`,key:`1880an`}]]};eR.node;var tR=Q(eR),nR={name:`refresh-cw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]};nR.node;var rR=Q(nR),iR={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};iR.node;var aR=Q(iR),oR={name:`send`,size:24,node:[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]};oR.node;var sR=Q(oR),cR={name:`shield-alert`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]};cR.node;var lR=Q(cR),uR={name:`shield-check`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]};uR.node;var dR=Q(uR),fR={name:`shield`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]};fR.node;var pR=Q(fR),mR={name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]};mR.node;var hR=Q(mR),gR={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]};gR.node;var _R=Q(gR),vR={name:`user-check`,size:24,node:[[`path`,{d:`m16 11 2 2 4-4`,key:`9rsbq5`}],[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]};vR.node;var yR=Q(vR),bR={name:`user`,size:24,node:[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]};bR.node;var xR=Q(bR),SR={name:`users`,size:24,node:[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]};SR.node;var CR=Q(SR),wR={name:`zap`,size:24,node:[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]};wR.node;var TR=Q(wR),ER=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),$=o(((e,t)=>{t.exports=ER()}))(),DR=[`Connecting to Technika 6.0 registration portal...`,`Fetching latest participant numbers...`,`Organizing college & event statistics...`,`Preparing charts and festival insights...`,`Almost ready! Opening your dashboard...`],OR=({error:e,onRetry:t,onLoadFallback:n})=>{let[r,i]=(0,v.useState)(0),[a,o]=(0,v.useState)(15),[s,c]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{let e=setInterval(()=>{i(e=>(e+1)%DR.length)},1800),t=setInterval(()=>{o(e=>e>=92?92:e+Math.floor(Math.random()*12+6))},500),n=setTimeout(()=>{c(!0)},4500);return()=>{clearInterval(e),clearInterval(t),clearTimeout(n)}},[]),(0,$.jsxs)(`div`,{className:`analytics-loader-root`,children:[(0,$.jsx)(`div`,{className:`al-orb al-orb-blue`}),(0,$.jsx)(`div`,{className:`al-orb al-orb-amber`}),(0,$.jsx)(`div`,{className:`al-orb al-orb-purple`}),(0,$.jsxs)(`div`,{className:`al-card`,children:[(0,$.jsxs)(`div`,{className:`al-header`,children:[(0,$.jsxs)(`div`,{className:`al-brand-row`,children:[(0,$.jsx)(`div`,{className:`al-logo-badge`,title:`Arka Jain University`,children:(0,$.jsx)(`img`,{src:`/logo.webp`,alt:`ARKA JAIN UNIVERSITY`,className:`al-uni-logo-img`})}),(0,$.jsxs)(`div`,{className:`al-brand-text`,children:[(0,$.jsx)(`div`,{className:`al-uni-title`,children:`ARKA JAIN UNIVERSITY`}),(0,$.jsx)(`div`,{className:`al-uni-subtitle`,children:`Jharkhand \xA0·\xA0 NAAC Grade A`})]})]}),(0,$.jsxs)(`div`,{className:`al-fest-badge`,title:`Technika 6.0`,children:[(0,$.jsx)(`img`,{src:`/technika_logo.webp`,alt:`Technika 6.0`,className:`al-fest-logo-img`}),(0,$.jsxs)(`div`,{className:`al-fest-brand`,children:[(0,$.jsx)(`span`,{children:`Technika`}),(0,$.jsx)(`span`,{className:`al-brand-accent`,children:`6.0`})]})]})]}),(0,$.jsx)(`div`,{className:`al-center-stage`,children:(0,$.jsxs)(`div`,{className:`al-radar-wrap`,children:[(0,$.jsx)(`div`,{className:`al-radar-ring al-ring-3`}),(0,$.jsx)(`div`,{className:`al-radar-ring al-ring-2`}),(0,$.jsx)(`div`,{className:`al-radar-ring al-ring-1`}),(0,$.jsx)(`div`,{className:`al-core-icon`,children:e?(0,$.jsx)(dL,{size:32,className:`text-red`}):(0,$.jsx)(aL,{size:32,className:`al-chart-icon`})})]})}),(0,$.jsx)(`div`,{className:`al-status-section`,children:e?(0,$.jsxs)(`div`,{className:`al-error-box`,children:[(0,$.jsx)(`div`,{className:`al-error-title`,children:`Unable to Load Data`}),(0,$.jsx)(`div`,{className:`al-error-msg`,children:e}),(0,$.jsxs)(`div`,{className:`al-actions-row`,children:[t&&(0,$.jsxs)(`button`,{className:`al-retry-btn`,onClick:t,children:[(0,$.jsx)(rR,{size:14}),(0,$.jsx)(`span`,{children:`Try Again`})]}),n&&(0,$.jsxs)(`button`,{className:`al-preview-btn`,onClick:n,children:[(0,$.jsx)(hR,{size:14}),(0,$.jsx)(`span`,{children:`View Dashboard`})]})]})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`al-loading-title-row`,children:[(0,$.jsx)(`h3`,{className:`al-loading-title`,children:`Loading Technika Dashboard`}),(0,$.jsxs)(`span`,{className:`al-percent-pill`,children:[a,`%`]})]}),(0,$.jsx)(`div`,{className:`al-progress-track`,children:(0,$.jsx)(`div`,{className:`al-progress-fill`,style:{width:`${a}%`},children:(0,$.jsx)(`div`,{className:`al-progress-shimmer`})})}),(0,$.jsxs)(`div`,{className:`al-step-row`,children:[(0,$.jsx)(ZI,{size:15,className:`al-activity-icon`}),(0,$.jsx)(`span`,{className:`al-step-text`,children:DR[r]})]}),s&&(0,$.jsxs)(`div`,{className:`al-took-long-box`,children:[(0,$.jsx)(`span`,{children:`Taking a few seconds to load...`}),(0,$.jsxs)(`div`,{className:`al-took-long-actions`,children:[t&&(0,$.jsxs)(`button`,{className:`al-mini-btn`,onClick:t,children:[(0,$.jsx)(rR,{size:12}),(0,$.jsx)(`span`,{children:`Refresh`})]}),n&&(0,$.jsx)(`button`,{className:`al-mini-btn al-mini-accent`,onClick:n,children:(0,$.jsx)(`span`,{children:`Continue →`})})]})]})]})}),(0,$.jsxs)(`div`,{className:`al-footer`,children:[(0,$.jsxs)(`div`,{className:`al-pill`,children:[(0,$.jsx)(`span`,{className:`al-pulse-dot`}),(0,$.jsx)(`span`,{children:`LIVE REGISTRATIONS`})]}),(0,$.jsx)(`div`,{className:`al-pill-divider`,children:`·`}),(0,$.jsx)(`div`,{className:`al-pill`,children:(0,$.jsx)(`span`,{children:`REAL-TIME STATS`})}),(0,$.jsx)(`div`,{className:`al-pill-divider`,children:`·`}),(0,$.jsx)(`div`,{className:`al-pill`,children:(0,$.jsx)(`span`,{children:`OFFICIAL PORTAL`})})]})]}),(0,$.jsx)(`style`,{children:`
        .analytics-loader-root {
          min-height: 100vh;
          width: 100vw;
          background: #f0f4f9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          color: #0f172a;
        }

        /* ── Soft Ambient Glow Orbs ── */
        .al-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.55;
        }

        .al-orb-blue {
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(191, 219, 254, 0.8) 0%, transparent 70%);
          top: -100px;
          left: -100px;
          animation: alFloat 9s ease-in-out infinite alternate;
        }

        .al-orb-amber {
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(254, 215, 170, 0.7) 0%, transparent 70%);
          bottom: -80px;
          right: -80px;
          animation: alFloat 11s ease-in-out infinite alternate-reverse;
        }

        .al-orb-purple {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(233, 213, 255, 0.6) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.35;
        }

        @keyframes alFloat {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(22px) scale(1.05); }
        }

        /* ── Main Light Claymorphism Card ── */
        .al-card {
          width: 100%;
          max-width: 500px;
          background: #ffffff;
          border-radius: 30px;
          border: 2px solid #ffffff;
          padding: 34px 32px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          box-shadow: 
            16px 22px 48px rgba(162, 178, 201, 0.38),
            -10px -10px 30px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.95),
            inset -1.5px -1.5px 3px rgba(162, 178, 201, 0.12);
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }

        /* ── Brand Header ── */
        .al-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1.5px solid #eef2f6;
          padding-bottom: 18px;
        }

        .al-brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .al-logo-badge {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: #ffffff;
          border: 1.5px solid #e2eaf4;
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            3px 4px 10px rgba(162, 178, 201, 0.25),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
        }

        .al-uni-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 9px;
        }

        .al-uni-title {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #0f172a;
        }

        .al-uni-subtitle {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
          margin-top: 1px;
        }

        .al-fest-badge {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          background: #f8fafc;
          border: 1.5px solid #ffffff;
          padding: 4px 12px 4px 6px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 
            3px 4px 10px rgba(162, 178, 201, 0.2),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
        }

        .al-fest-logo-img {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid #e2e8f0;
        }

        .al-fest-brand {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .al-brand-accent {
          color: #2563eb;
          font-weight: 900;
        }

        /* ── Center Stage & Floating Clay Orb ── */
        .al-center-stage {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 0 6px 0;
        }

        .al-radar-wrap {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .al-radar-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid;
          pointer-events: none;
        }

        .al-ring-1 {
          width: 96px;
          height: 96px;
          border-color: rgba(37, 99, 235, 0.25);
          animation: alSpin 5s linear infinite;
        }

        .al-ring-2 {
          width: 120px;
          height: 120px;
          border-color: rgba(6, 182, 212, 0.28);
          border-style: dashed;
          animation: alSpinReverse 9s linear infinite;
        }

        .al-ring-3 {
          width: 140px;
          height: 140px;
          border-color: rgba(245, 158, 11, 0.25);
          animation: alPulseRing 2.6s ease-out infinite;
        }

        @keyframes alSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes alSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes alPulseRing {
          0% { transform: scale(0.88); opacity: 0.7; }
          50% { transform: scale(1.06); opacity: 0.2; }
          100% { transform: scale(0.88); opacity: 0.7; }
        }

        .al-core-icon {
          width: 72px;
          height: 72px;
          border-radius: 24px;
          background: linear-gradient(135deg, #ffffff 0%, #f0f5fc 100%);
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            6px 8px 20px rgba(162, 178, 201, 0.35),
            -4px -4px 12px rgba(255, 255, 255, 0.95),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.9),
            inset -1.5px -1.5px 3px rgba(162, 178, 201, 0.15);
          z-index: 2;
        }

        .al-chart-icon {
          color: #2563eb;
          animation: alCorePulse 1.8s ease-in-out infinite;
        }

        @keyframes alCorePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.85; }
        }

        /* ── Status Section ── */
        .al-status-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .al-loading-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .al-loading-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .al-percent-pill {
          font-size: 12px;
          font-weight: 800;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 3px 9px;
          border-radius: 10px;
          box-shadow: 1px 1px 3px rgba(162, 178, 201, 0.2);
        }

        .al-progress-track {
          width: 100%;
          height: 10px;
          background: #e2eaf4;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: 
            inset 2px 2px 4px rgba(162, 178, 201, 0.35),
            inset -1px -1px 2px rgba(255, 255, 255, 0.8);
          position: relative;
        }

        .al-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #2563eb 0%, #06b6d4 60%, #f59e0b 100%);
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .al-progress-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          animation: alShimmer 1.8s infinite;
        }

        @keyframes alShimmer {
          100% { left: 160%; }
        }

        .al-step-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
          min-height: 20px;
        }

        .al-activity-icon {
          color: #059669;
          flex-shrink: 0;
          animation: alCorePulse 1.2s infinite;
        }

        .al-step-text {
          font-weight: 600;
          color: #475569;
        }

        /* ── Took long box ── */
        .al-took-long-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          color: #64748b;
          margin-top: 4px;
          box-shadow: 2px 2px 6px rgba(162, 178, 201, 0.12);
        }

        .al-took-long-actions {
          display: flex;
          gap: 6px;
        }

        .al-mini-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 5px 11px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          color: #334155;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s;
          box-shadow: 1px 1px 3px rgba(162, 178, 201, 0.15);
        }

        .al-mini-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .al-mini-accent {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #2563eb;
        }

        .al-mini-accent:hover {
          background: #dbeafe;
          color: #1d4ed8;
        }

        /* ── Error Box ── */
        .al-error-box {
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          border-radius: 16px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: center;
          align-items: center;
        }

        .al-error-title {
          font-size: 14px;
          font-weight: 800;
          color: #dc2626;
        }

        .al-error-msg {
          font-size: 12px;
          color: #b91c1c;
          line-height: 1.4;
        }

        .al-actions-row {
          display: flex;
          gap: 10px;
          margin-top: 6px;
        }

        .al-retry-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #dc2626;
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(220, 38, 38, 0.25);
        }

        .al-preview-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          color: #334155;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        /* ── Footer ── */
        .al-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          padding-top: 8px;
          border-top: 1.5px solid #eef2f6;
        }

        .al-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.05em;
        }

        .al-pill-divider {
          color: #cbd5e1;
          font-weight: 900;
          font-size: 12px;
        }

        .al-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.6);
          animation: alCorePulse 2s infinite;
        }

        .text-red {
          color: #dc2626;
        }

        /* ── Mobile Responsiveness ── */
        @media (max-width: 580px) {
          .analytics-loader-root {
            padding: 16px;
          }
          .al-card {
            padding: 24px 18px;
            border-radius: 24px;
            gap: 20px;
            width: 100%;
          }
          .al-header {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding-bottom: 14px;
            text-align: center;
          }
          .al-brand-row {
            flex-direction: column;
            gap: 8px;
            align-items: center;
          }
          .al-uni-title {
            font-size: 12px;
          }
          .al-uni-subtitle {
            font-size: 10px;
          }
          .al-took-long-box {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            text-align: center;
            padding: 12px 14px;
          }
          .al-took-long-actions {
            display: flex;
            gap: 8px;
            width: 100%;
          }
          .al-mini-btn {
            flex: 1;
            justify-content: center;
            padding: 8px 10px;
            font-size: 11px;
          }
          .al-footer {
            gap: 8px;
          }
          .al-pill {
            font-size: 9px;
          }
        }
      `})]})},kR=(()=>{let e=`https://reg.technika2026.online`;return e.startsWith(`/`)?``:e.replace(/\/$/,``)})(),AR=()=>{if(typeof window>`u`)return`https://technika2026.online`;let e=window.location.hostname;return e===`localhost`||e===`127.0.0.1`?`http://localhost:8080`:/^\d+\.\d+\.\d+\.\d+$/.test(e)?`http://${e}:8080`:`https://technika2026.online`},jR=(e=``,t=``)=>{let n=`${(e||``).toLowerCase().trim()} ${(t||``).toLowerCase().trim()}`,r=AR();return n.includes(`adeeb`)?`${r}/team/adeeb.webp`:n.includes(`sanchit`)?`${r}/team/sanchit.webp`:n.includes(`mamatha`)?`${r}/team/mamatha.webp`:n.includes(`arvind`)?`${r}/team/arvind.webp`:n.includes(`ashwini`)?`${r}/team/ashwini.webp`:n.includes(`viranshu`)?`${r}/team/viranshu.webp`:n.includes(`rashid`)?`${r}/team/rashid.webp`:n.includes(`divya`)?`${r}/team/divya.webp`:n.includes(`prem`)?`${r}/team/prem.webp`:n.includes(`sayantani`)?`${r}/team/sayantani.webp`:n.includes(`astik`)?`${r}/team/astik.webp`:n.includes(`padmaja`)?`${r}/team/padmaja.webp`:n.includes(`anjali`)?`${r}/team/Anjali.webp`:n.includes(`sonali`)?`${r}/team/sonali.webp`:n.includes(`nikita`)?`${r}/team/nikita.webp`:n.includes(`aaditya`)||n.includes(`aditya`)?`${r}/team/aaditya.webp`:n.includes(`sohail`)?`${r}/team/sohail.webp`:n.includes(`harsh`)?`${r}/team/harsh.webp`:n.includes(`ishika`)?`${r}/team/ishika.webp`:n.includes(`ankit`)?`${r}/team/ankit.webp`:n.includes(`suman`)?`${r}/team/s%20suman.webp`:n.includes(`prince`)?`${r}/team/prince.webp`:n.includes(`anish`)?`${r}/team/anish.webp`:n.includes(`rishav`)?`${r}/team/rishav.webp`:n.includes(`awesh`)?`${r}/team/awesh.webp`:n.includes(`himanshu`)?`${r}/team/himanshu.webp`:null},MR=()=>{let e=localStorage.getItem(`adminToken`),t=localStorage.getItem(`adminRole`),n=localStorage.getItem(`adminName`)||`Administrator`,r=localStorage.getItem(`adminEmail`)||``,i=localStorage.getItem(`adminDesignation`)||(t===`admin`?`Administration`:`Coordinator`);if(e)try{let t=e.split(`.`);if(t.length===3){let e=JSON.parse(atob(t[1]));!r&&e.email&&(r=e.email),(!n||n===`Administrator`)&&e.name&&(n=e.name)}}catch{}let a=n.toLowerCase().trim(),o=r.toLowerCase().trim(),s=a.includes(`adeeb`)||o.includes(`adeeb`),c=a.includes(`sanchit`)||o.includes(`sanchit`),l=a.includes(`mamatha`)||o.includes(`mamatha`),u=s||l,d=jR(n,r);return{token:e,role:t,name:n,email:r,designation:i,photoUrl:d,isAdeeb:s,isSanchit:c,isMamatha:l,canAccessAccessControl:u}};function NR(e,t=1e3){let[n,r]=(0,v.useState)(0),i=(0,v.useRef)(0);return(0,v.useEffect)(()=>{let n=i.current,a=e-n;if(a===0){r(e);return}let o=performance.now(),s=e=>{let c=e-o,l=Math.min(c/t,1),u=1-(1-l)**3,d=Math.round(n+a*u);r(d),i.current=d,l<1&&requestAnimationFrame(s)};requestAnimationFrame(s)},[e,t]),n}var PR=({onLogout:e})=>{let t=_t(),[n,r]=(0,v.useState)(null),[i,a]=(0,v.useState)(!0),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(()=>{let e=localStorage.getItem(`adminName`)||`Administrator`,t=localStorage.getItem(`adminEmail`)||``;return{token:localStorage.getItem(`adminToken`),role:localStorage.getItem(`adminRole`),name:e,designation:localStorage.getItem(`adminDesignation`)||`Admin`,photoUrl:jR(e,t)}}),[f,p]=(0,v.useState)(!1),m=()=>{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminRole`),localStorage.removeItem(`adminName`),localStorage.removeItem(`adminDesignation`),d({token:null,role:null,name:`Administrator`,designation:`Admin`,photoUrl:null}),e&&e()},h=async(e=!1)=>{e&&s(!0);try{let t=localStorage.getItem(`adminToken`)||localStorage.getItem(`dashboardToken`),n={};t&&(n.Authorization=`Bearer ${t}`);let i=e?`${kR}/api/admin/analytics?sync=1`:`${kR}/api/admin/analytics`,a=await fetch(i,{headers:n});if(!a.ok)throw Error(`Failed to fetch analytics`);let o=await a.json();r(o),l(``)}catch(e){l(e.message||`Failed to load analytics data`)}finally{a(!1),e&&setTimeout(()=>s(!1),600)}};(0,v.useEffect)(()=>{h();let e=setInterval(()=>{h(!1)},25e3);return()=>clearInterval(e)},[]);let g=e=>e<10?`0${e}`:`${e}`,_=(e,t=2)=>{if(!e)return`??`;let n=e.trim().split(/\s+/);return n.length>=2?(n[0][0]+n[1][0]).toUpperCase():e.slice(0,t).toUpperCase()},y=n?.totalRegistrations||0,b=n?.websiteRegistrations??Math.max(0,y-(n?.googleFormRegistrations||0)),x=n?.googleFormRegistrations||0,S=n?.totalInstitutes||0,C=y>0?Math.round(b/y*100):0,w=y>0?Math.round(x/y*100):0,T=(0,v.useMemo)(()=>{if(typeof n?.externalRegistrations==`number`)return n.externalRegistrations;if(!n)return 0;let e=0;return Array.isArray(n.instituteWise)&&n.instituteWise.forEach(t=>{let n=(t.institute||``).trim().toLowerCase();(n.includes(`arka`)||n.includes(`jain`)||n===`aju`)&&(e+=typeof t.count==`number`?t.count:0)}),Math.max(0,y-e)},[n,y]),E=y>0?Math.round(T/y*100):0,D=NR(T),O=NR(y),k=NR(b),A=NR(x),j=NR(S),M=n?.maxEvent,N=M?.eventName||`Robo Wars`,ee=M?.count||2,te=y>0?Math.round(ee/y*100):100,ne=n?.minEvent,re=ne?.eventName||`Code Buster`,ie=ne?.count||1,[ae,oe]=(0,v.useState)(`TOP10`),[se,ce]=(0,v.useState)(!1),[le,ue]=(0,v.useState)(!1),P=(0,v.useMemo)(()=>{let e=n?.genderDistribution||{},t=0,r=0,i=0;Object.entries(e).forEach(([e,n])=>{let a=(e||``).trim().toLowerCase(),o=typeof n==`number`?n:0;a===`male`||a===`m`?t+=o:a===`female`||a===`f`?r+=o:i+=o});let a=t+r+i,o=a>0?Math.round(t/a*100):y>0?65:0,s=a>0?Math.round(r/a*100):y>0?35:0,c=a>0&&i>0?Math.max(0,100-o-s):0;return{male:t,female:r,unspecified:i,total:a,malePct:o,femalePct:s,unspecifiedPct:c}},[n,y]),de=(e=``)=>e.startsWith(`TECH_`)?`Technical`:e.startsWith(`CUL_`)?`Cultural`:e.startsWith(`CRE_`)?`Creative`:`Technical`,fe=(0,v.useMemo)(()=>{if(!n||!n.eventWise||n.eventWise.length===0)return[{name:`Data Dash`,count:11,fill:`#2563eb`,eventId:`TECH_DD`,category:`Technical`},{name:`IntelliQuest`,count:8,fill:`#2563eb`,eventId:`TECH_IQ`,category:`Technical`},{name:`Need For Speed`,count:7,fill:`#ec4899`,eventId:`CRE_NF`,category:`Creative`},{name:`Group Ramp Walk`,count:6,fill:`#f59e0b`,eventId:`CUL_GW`,category:`Cultural`}];let e={Technical:`#2563eb`,Cultural:`#f59e0b`,Creative:`#ec4899`};return n.eventWise.map(t=>{let n=de(t.eventId);return{name:t.eventName,count:t.count,eventId:t.eventId,category:n,fill:e[n]||`#2563eb`}})},[n]),pe=(0,v.useMemo)(()=>!fe||fe.length===0?[]:ae===`TOP10`?fe.slice(0,10):ae===`ALL`?fe:fe.filter(e=>e.category===ae),[fe,ae]),me=(0,v.useMemo)(()=>!n||n.dailyTrend.length===0?[{date:`Recorded day`,count:2}]:n.dailyTrend.map(e=>({date:e.date.split(`-`).slice(1).join(`/`),count:e.count})),[n]),he=(0,v.useMemo)(()=>{if(n?.eventTypeBreakdown&&n.eventTypeBreakdown.length>0)return n.eventTypeBreakdown;let e=0,t=0,r=0;(n?.eventWise||[]).forEach(n=>{let i=n.eventId.toUpperCase();i.startsWith(`TECH_`)||i.includes(`TECH`)||i.includes(`ROBO`)||i.includes(`CODE`)||i.includes(`HACK`)||i.includes(`WEB`)?e+=n.count:i.startsWith(`CUL_`)||i.includes(`CUL`)||i.includes(`DANCE`)||i.includes(`MUSIC`)||i.includes(`VOICE`)||i.includes(`RAMP`)?t+=n.count:r+=n.count});let i=e+t+r||1;return[{category:`Technical`,count:e,share:Number((e/i*100).toFixed(1)),color:`#22d3ee`},{category:`Cultural`,count:t,share:Number((t/i*100).toFixed(1)),color:`#fbbf24`},{category:`Creative`,count:r,share:Number((r/i*100).toFixed(1)),color:`#ec4899`}]},[n]),F=n?.totalEventRegistrations||he.reduce((e,t)=>e+t.count,0);return i||window.location.search.includes(`loader`)?(0,$.jsx)(OR,{error:c,onRetry:()=>{a(!0),h(!0)},onLoadFallback:()=>{a(!1)}}):(0,$.jsxs)(`div`,{className:`clay-dashboard-root`,children:[(0,$.jsx)(`div`,{className:`clay-bg-orb clay-bg-orb-1`}),(0,$.jsx)(`div`,{className:`clay-bg-orb clay-bg-orb-2`}),(0,$.jsx)(`div`,{className:`clay-bg-orb clay-bg-orb-3`}),(0,$.jsxs)(`header`,{className:`clay-nav`,children:[(0,$.jsxs)(`div`,{className:`clay-nav-left`,children:[(0,$.jsx)(`div`,{className:`clay-nav-logo-badge`,title:`Arka Jain University`,children:(0,$.jsx)(`img`,{src:`/logo.webp`,alt:`ARKA JAIN UNIVERSITY`,className:`clay-nav-logo-img`})}),(0,$.jsxs)(`div`,{className:`clay-nav-titles`,children:[(0,$.jsx)(`div`,{className:`clay-nav-uni-title`,children:`ARKA JAIN UNIVERSITY`}),(0,$.jsx)(`div`,{className:`clay-nav-uni-subtitle`,children:`Jharkhand \xA0·\xA0 NAAC Grade A`})]}),(0,$.jsx)(`div`,{className:`clay-nav-divider`}),(0,$.jsxs)(`div`,{className:`clay-nav-tech-badge`,title:`Technika 6.0`,children:[(0,$.jsx)(`img`,{src:`/technika_logo.webp`,alt:`Technika 6.0`,className:`clay-nav-tech-img`}),(0,$.jsxs)(`div`,{className:`clay-nav-brand`,children:[`Technika `,(0,$.jsx)(`span`,{className:`clay-brand-cyan`,children:`6.0`})]})]})]}),(0,$.jsx)(`div`,{className:`clay-nav-right`,children:u.token?(0,$.jsxs)(`div`,{className:`clay-auth-group`,children:[(0,$.jsxs)(`button`,{onClick:()=>t(`/admin/participants`),className:`clay-portal-user-btn`,title:`Go to Admin Workspace`,children:[(0,$.jsx)(`div`,{className:`clay-portal-avatar`,style:{padding:0,overflow:`hidden`},children:u.photoUrl&&!f?(0,$.jsx)(`img`,{src:u.photoUrl,alt:u.name,style:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`50%`},onError:()=>p(!0)}):u.name.split(` `).filter(Boolean).map(e=>e[0]).join(``).slice(0,2).toUpperCase()||`AD`}),(0,$.jsxs)(`div`,{className:`clay-portal-meta`,children:[(0,$.jsx)(`span`,{className:`clay-portal-user-name`,children:u.name}),(0,$.jsx)(`span`,{className:`clay-portal-user-role`,children:u.designation})]}),(0,$.jsx)(`span`,{className:`clay-portal-workspace-tag`,children:`Portal →`})]}),(0,$.jsxs)(`button`,{onClick:m,className:`clay-logout-btn`,title:`Log out of Admin Portal`,children:[(0,$.jsx)(VL,{size:14}),(0,$.jsx)(`span`,{children:`Logout`})]})]}):(0,$.jsxs)(`button`,{onClick:()=>t(`/admin/login`),className:`clay-login-portal-btn`,title:`Access Admin & Organizer Portal`,children:[(0,$.jsx)(`div`,{className:`clay-portal-icon-box`,children:(0,$.jsx)(zL,{size:13})}),(0,$.jsx)(`span`,{className:`clay-login-portal-text`,children:`Login Portal`}),(0,$.jsx)(`span`,{className:`clay-portal-badge`,children:`Admin`})]})})]}),(0,$.jsxs)(`main`,{className:`clay-main-container`,children:[c&&(0,$.jsxs)(`div`,{className:`clay-error-banner`,children:[(0,$.jsx)(LL,{size:16}),(0,$.jsx)(`span`,{children:c})]}),(0,$.jsxs)(`section`,{className:`clay-hero-section`,children:[(0,$.jsxs)(`div`,{className:`clay-hero-left`,children:[(0,$.jsx)(`div`,{className:`clay-breadcrumb`,children:`TECHNIKA 6.0 \xA0/\xA0 REGISTRATION DASHBOARD`}),(0,$.jsxs)(`h1`,{className:`clay-hero-heading`,children:[`Registration overview`,(0,$.jsx)(`span`,{className:`clay-period`,children:`.`})]}),(0,$.jsx)(`p`,{className:`clay-hero-subtitle`,children:`Every participant. Every institute. The complete picture.`})]}),(0,$.jsxs)(`div`,{className:`clay-hero-actions`,style:{display:`flex`,alignItems:`center`,gap:`10px`,flexWrap:`wrap`},children:[(0,$.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`7px`,padding:`7px 14px`,borderRadius:`999px`,background:`#ecfdf5`,border:`1.5px solid #a7f3d0`,fontSize:`12px`,fontWeight:700,color:`#065f46`,boxShadow:`0 2px 5px rgba(16, 185, 129, 0.08)`},title:`Continuous live telemetry connected to OG Form Sheet responses`,children:[(0,$.jsx)(`span`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,background:`#10b981`,display:`inline-block`,boxShadow:`0 0 0 3px rgba(16, 185, 129, 0.25)`}}),(0,$.jsx)(`span`,{children:`Live Sync Active`})]}),(0,$.jsxs)(`button`,{className:`clay-btn-refresh ${o?`is-spinning`:``}`,onClick:()=>h(!0),disabled:o,title:`Force immediate synchronization with OG Form Sheet`,children:[(0,$.jsx)(rR,{size:17,className:o?`clay-spin-anim`:``}),(0,$.jsx)(`span`,{children:o?`Syncing...`:`Sync Live`})]})]})]}),(0,$.jsxs)(`section`,{className:`clay-kpi-grid`,children:[(0,$.jsxs)(`div`,{className:`clay-kpi-card`,children:[(0,$.jsxs)(`div`,{className:`clay-kpi-head`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-title`,children:`Total registrations`}),(0,$.jsx)(`div`,{className:`clay-kpi-icon-wrap`,children:(0,$.jsx)(hL,{size:18})})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-val-row`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-num clay-num-cyan`,children:g(O)}),(0,$.jsx)(`span`,{className:`clay-kpi-label`,children:`participants`})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-foot`,children:[`Across `,n?.eventWise?.length||45,` registered events`]})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-card`,children:[(0,$.jsxs)(`div`,{className:`clay-kpi-head`,children:[(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexWrap:`wrap`},children:[(0,$.jsx)(`span`,{className:`clay-kpi-title`,children:`Registration From Website`}),(0,$.jsxs)(`span`,{style:{fontSize:`10px`,fontWeight:900,textTransform:`uppercase`,letterSpacing:`0.06em`,background:`#e0f2fe`,color:`#0284c7`,border:`1.5px solid #bae6fd`,padding:`2px 7px`,borderRadius:`6px`,display:`inline-flex`,alignItems:`center`,gap:`4px`},title:`Direct website registrations are closed and data is frozen`,children:[(0,$.jsx)(`span`,{style:{fontSize:`11px`},children:`❄️`}),` FREEZE`]})]}),(0,$.jsx)(`div`,{className:`clay-kpi-icon-wrap`,style:{color:`#0284c7`,background:`#e0f2fe`},children:(0,$.jsx)(NL,{size:18})})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-val-row`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-num`,children:g(k)}),(0,$.jsxs)(`span`,{className:`clay-kpi-percent`,children:[C,`%`]})]}),(0,$.jsx)(`div`,{className:`clay-kpi-foot`,style:{color:`#0369a1`,fontWeight:600},children:`❄️ Freeze · Portal closed (no longer accepting data)`})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-card`,children:[(0,$.jsxs)(`div`,{className:`clay-kpi-head`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-title`,children:`Through OG Form Sheet`}),(0,$.jsx)(`div`,{className:`clay-kpi-icon-wrap`,style:{color:`#059669`,background:`#ecfdf5`},children:(0,$.jsx)(jL,{size:18})})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-val-row`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-num`,children:g(A)}),(0,$.jsxs)(`span`,{className:`clay-kpi-percent`,style:{color:`#059669`},children:[w,`%`]})]}),(0,$.jsx)(`div`,{className:`clay-kpi-foot`,children:`Direct from Original Form Sheet`})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-card`,children:[(0,$.jsxs)(`div`,{className:`clay-kpi-head`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-title`,children:`External Students`}),(0,$.jsx)(`div`,{className:`clay-kpi-icon-wrap`,style:{color:`#7c3aed`,background:`#f5f3ff`},children:(0,$.jsx)(FL,{size:18})})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-val-row`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-num`,children:g(D)}),(0,$.jsxs)(`span`,{className:`clay-kpi-percent`,style:{color:`#7c3aed`},children:[E,`%`]})]}),(0,$.jsx)(`div`,{className:`clay-kpi-foot`,children:`Other institutes & schools`})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-card`,children:[(0,$.jsxs)(`div`,{className:`clay-kpi-head`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-title`,children:`Participating institutes`}),(0,$.jsx)(`div`,{className:`clay-kpi-icon-wrap`,children:(0,$.jsx)(tL,{size:18})})]}),(0,$.jsxs)(`div`,{className:`clay-kpi-val-row`,children:[(0,$.jsx)(`span`,{className:`clay-kpi-num`,children:g(j)}),(0,$.jsx)(`span`,{className:`clay-kpi-label`,children:`institutes`})]}),(0,$.jsx)(`div`,{className:`clay-kpi-foot`,children:`Representation across campuses`})]})]}),(0,$.jsx)(`section`,{className:`clay-categories-grid`,children:(0,$.jsxs)(`div`,{className:`clay-card clay-cat-card`,children:[(0,$.jsxs)(`div`,{className:`clay-card-header-row`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:`clay-card-serif-title`,children:`Event type categories`}),(0,$.jsx)(`p`,{className:`clay-card-subtitle`,children:`Technical, Cultural & Creative participation breakdown`})]}),(0,$.jsxs)(`div`,{className:`clay-badge-pill`,children:[F,` total event entries`]})]}),(0,$.jsx)(`div`,{className:`clay-cat-tiles-row`,children:he.map(e=>{let t=e.category===`Technical`,n=e.category===`Cultural`,r=e.category===`Creative`;return(0,$.jsxs)(`div`,{className:`clay-cat-tile ${t?`tile-cyan`:n?`tile-amber`:`tile-pink`}`,children:[(0,$.jsxs)(`div`,{className:`clay-cat-tile-top`,children:[(0,$.jsxs)(`div`,{className:`clay-cat-tile-icon`,children:[t&&(0,$.jsx)(yL,{size:16}),n&&(0,$.jsx)(hR,{size:16}),r&&(0,$.jsx)(YL,{size:16})]}),(0,$.jsxs)(`span`,{className:`clay-cat-tile-pill`,children:[e.share,`%`]})]}),(0,$.jsx)(`div`,{className:`clay-cat-tile-num`,children:e.count}),(0,$.jsx)(`div`,{className:`clay-cat-tile-label`,children:e.category}),(0,$.jsx)(`div`,{className:`clay-cat-tile-desc`,children:t?`Coding & Robotics`:n?`Music, Dance & Drama`:`Design & Creative Arts`})]},e.category)})}),(0,$.jsxs)(`div`,{className:`clay-cat-segmented-wrap`,children:[(0,$.jsxs)(`div`,{className:`clay-cat-segmented-label`,children:[(0,$.jsx)(`span`,{children:`Genre representation`}),(0,$.jsx)(`span`,{children:`100% distribution`})]}),(0,$.jsx)(`div`,{className:`clay-cat-segmented-track`,children:he.map((e,t)=>{let n=Math.max(e.share,2);return(0,$.jsx)(`div`,{className:`clay-cat-segment`,style:{width:`${n}%`,backgroundColor:e.color,boxShadow:`0 0 10px ${e.color}66`},title:`${e.category}: ${e.count} registrations (${e.share}%)`},t)})})]}),(0,$.jsx)(`div`,{className:`clay-cat-list`,children:he.map(e=>{let t=e.category===`Technical`,n=e.category===`Cultural`;return(0,$.jsxs)(`div`,{className:`clay-cat-list-row`,children:[(0,$.jsxs)(`div`,{className:`clay-cat-list-left`,children:[(0,$.jsx)(`span`,{className:`clay-cat-indicator-dot`,style:{backgroundColor:e.color,boxShadow:`0 0 8px ${e.color}`}}),(0,$.jsxs)(`span`,{className:`clay-cat-name`,children:[e.category,` Events`]})]}),(0,$.jsxs)(`div`,{className:`clay-cat-list-right`,children:[(0,$.jsx)(`div`,{className:`clay-bar-trough clay-cat-mini-trough`,children:(0,$.jsx)(`div`,{className:`clay-bar-fill ${t?`fill-cyan`:n?`fill-amber`:`fill-pink`}`,style:{width:`${Math.min(100,Math.max(8,e.share))}%`}})}),(0,$.jsx)(`span`,{className:`clay-cat-count-val`,children:e.count}),(0,$.jsxs)(`span`,{className:`clay-cat-share-val`,children:[e.share,`%`]})]})]},e.category)})}),(0,$.jsxs)(`div`,{className:`clay-card-footer-info`,children:[(0,$.jsx)(LL,{size:14,className:`clay-info-icon`}),(0,$.jsx)(`span`,{children:`Categorized based on official Technika 6.0 technical, cultural and creative guidelines.`})]})]})}),(0,$.jsxs)(`section`,{className:`clay-mid-grid`,children:[(0,$.jsxs)(`div`,{className:`clay-card clay-event-chart-card`,children:[(0,$.jsxs)(`div`,{className:`clay-card-header-row`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:`clay-card-serif-title`,children:`Event registrations`}),(0,$.jsx)(`p`,{className:`clay-card-subtitle`,children:`Participation across the Technika lineup`})]}),(0,$.jsx)(`div`,{className:`clay-event-header-controls`,children:(0,$.jsxs)(`div`,{className:`clay-badge-pill`,children:[pe.length,` of `,n?.eventWise?.length||45,` events`]})})]}),(0,$.jsxs)(`div`,{className:`clay-event-filter-bar`,children:[(0,$.jsx)(`button`,{type:`button`,className:`clay-filter-chip ${ae===`TOP10`?`active`:``}`,onClick:()=>oe(`TOP10`),children:(0,$.jsx)(`span`,{children:`🏆 Top 10`})}),(0,$.jsxs)(`button`,{type:`button`,className:`clay-filter-chip ${ae===`Technical`?`active tech`:``}`,onClick:()=>oe(`Technical`),children:[(0,$.jsx)(yL,{size:12}),(0,$.jsx)(`span`,{children:`Technical (20)`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`clay-filter-chip ${ae===`Cultural`?`active cult`:``}`,onClick:()=>oe(`Cultural`),children:[(0,$.jsx)(rL,{size:12}),(0,$.jsx)(`span`,{children:`Cultural (15)`})]}),(0,$.jsxs)(`button`,{type:`button`,className:`clay-filter-chip ${ae===`Creative`?`active creat`:``}`,onClick:()=>oe(`Creative`),children:[(0,$.jsx)(YL,{size:12}),(0,$.jsx)(`span`,{children:`Creative (10)`})]}),(0,$.jsx)(`button`,{type:`button`,className:`clay-filter-chip ${ae===`ALL`?`active`:``}`,onClick:()=>oe(`ALL`),children:(0,$.jsx)(`span`,{children:`All 45`})})]}),(0,$.jsx)(`div`,{className:`clay-ranked-bars-list`,children:pe.map((e,t)=>{let n=ee>0?ee:11,r=Math.max(8,Math.round(e.count/n*100)),i=y>0?(e.count/y*100).toFixed(0):`0`,a=fe.findIndex(t=>t.eventId===e.eventId)+1,o=a<=3,s=a===1?`🥇`:a===2?`🥈`:a===3?`🥉`:`#${a}`;return(0,$.jsxs)(`div`,{className:`clay-ranked-bar-row`,children:[(0,$.jsxs)(`div`,{className:`clay-ranked-meta`,children:[(0,$.jsx)(`span`,{className:`clay-rank-badge ${o?`rank-${a}`:``}`,children:s}),(0,$.jsx)(`span`,{className:`clay-ranked-name`,title:e.name,children:e.name}),(0,$.jsx)(`span`,{className:`clay-cat-tag cat-${e.category.toLowerCase()}`,children:e.category})]}),(0,$.jsx)(`div`,{className:`clay-ranked-bar-track`,children:(0,$.jsx)(`div`,{className:`clay-ranked-bar-fill fill-${e.category.toLowerCase()}`,style:{width:`${r}%`}})}),(0,$.jsxs)(`div`,{className:`clay-ranked-counts`,children:[(0,$.jsx)(`span`,{className:`clay-count-val`,children:e.count}),(0,$.jsxs)(`span`,{className:`clay-count-pct`,children:[i,`%`]})]})]},e.eventId||t)})}),(0,$.jsxs)(`div`,{className:`clay-card-footer-info`,children:[(0,$.jsx)(LL,{size:14,className:`clay-info-icon`}),(0,$.jsx)(`span`,{children:`Participants may register for more than one event.`})]})]}),(0,$.jsxs)(`div`,{className:`clay-card clay-popular-card`,children:[(0,$.jsxs)(`div`,{className:`clay-img-frame`,children:[(0,$.jsx)(`img`,{src:`/robo-wars.webp`,alt:`Robo Wars`,className:`clay-event-img`,onError:e=>{e.target.style.display=`none`}}),(0,$.jsx)(`div`,{className:`clay-img-overlay-glow`})]}),(0,$.jsxs)(`div`,{className:`clay-popular-body`,children:[(0,$.jsxs)(`div`,{className:`clay-popular-tag`,children:[(0,$.jsx)(hR,{size:13,className:`clay-sparkle-icon`}),(0,$.jsx)(`span`,{children:`MOST POPULAR EVENT`})]}),(0,$.jsxs)(`div`,{className:`clay-popular-title-row`,children:[(0,$.jsx)(`h3`,{className:`clay-popular-name`,children:N}),(0,$.jsx)(`button`,{className:`clay-arrow-btn`,title:`View event details`,children:(0,$.jsx)($I,{size:17})})]}),(0,$.jsxs)(`div`,{className:`clay-popular-stats`,children:[ee,` registrations \xA0·\xA0 `,te,`% of participants`]}),(0,$.jsx)(`div`,{className:`clay-popular-divider`}),(0,$.jsxs)(`div`,{className:`clay-popular-footer-row`,children:[(0,$.jsx)(`span`,{className:`clay-popular-foot-lbl`,children:`Least registered`}),(0,$.jsxs)(`span`,{className:`clay-popular-foot-val`,children:[re,` \xA0·\xA0 `,ie]})]})]})]})]}),(0,$.jsxs)(`section`,{className:`clay-tables-grid`,children:[(0,$.jsxs)(`div`,{id:`institute-participation-card`,className:`clay-card clay-table-card ${se?`clay-card-expanded`:``}`,style:{transition:`all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`},children:[(0,$.jsxs)(`div`,{className:`clay-card-header-row`,style:{alignItems:`center`,gap:`12px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexWrap:`wrap`},children:[(0,$.jsx)(`h2`,{className:`clay-card-serif-title`,style:{margin:0},children:`Institute participation`}),se&&(0,$.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,padding:`2px 8px`,borderRadius:`999px`,background:`#eff6ff`,color:`#2563eb`,border:`1px solid #bfdbfe`},children:`30 total`})]}),(0,$.jsx)(`p`,{className:`clay-card-subtitle`,style:{margin:`3px 0 0 0`},children:`Representation from participating institutions`})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexShrink:0},children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>ce(!se),className:`clay-table-toggle-btn ${se?`active`:``}`,title:se?`Switch to Collapsed View (scrollable)`:`Switch to Expanded View (shows all institutions for screenshot)`,children:se?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(qL,{size:13}),(0,$.jsx)(`span`,{children:`Collapse`})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(GL,{size:13}),(0,$.jsx)(`span`,{children:`Expanded View`})]})}),(0,$.jsx)(`div`,{className:`clay-kpi-icon-wrap`,style:{flexShrink:0},children:(0,$.jsx)(tL,{size:18})})]})]}),(0,$.jsx)(`div`,{className:`clay-table-wrap`,style:{maxHeight:se?`none`:`430px`,overflowY:se?`visible`:`auto`,paddingRight:se?`0`:`4px`},children:(0,$.jsxs)(`table`,{className:`clay-data-table`,children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{style:{width:`56%`},children:`INSTITUTE`}),(0,$.jsx)(`th`,{style:{width:`20%`,textAlign:`center`},children:`PARTICIPANTS`}),(0,$.jsx)(`th`,{style:{width:`24%`,textAlign:`right`},children:`SHARE`})]})}),(0,$.jsx)(`tbody`,{children:n?.instituteWise&&n.instituteWise.length>0?n.instituteWise.map((e,t)=>{let n=y>0?(e.count/y*100).toFixed(1):`50.0`,r=t%2==0;return(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-entity-cell`,children:[(0,$.jsx)(`span`,{className:`clay-initial-badge`,children:_(e.institute)}),(0,$.jsx)(`span`,{className:`clay-entity-name`,title:e.institute,children:e.institute})]})}),(0,$.jsx)(`td`,{style:{textAlign:`center`},children:(0,$.jsx)(`span`,{className:`clay-count-val`,children:e.count})}),(0,$.jsx)(`td`,{style:{textAlign:`right`},children:(0,$.jsxs)(`div`,{className:`clay-share-col`,children:[(0,$.jsx)(`div`,{className:`clay-bar-trough`,children:(0,$.jsx)(`div`,{className:`clay-bar-fill ${r?`fill-cyan`:`fill-amber`}`,style:{width:`${Math.min(100,Math.max(10,Number(n)))}%`}})}),(0,$.jsxs)(`span`,{className:`clay-share-text`,children:[n,`%`]})]})})]},t)}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-entity-cell`,children:[(0,$.jsx)(`span`,{className:`clay-initial-badge`,children:`AJ`}),(0,$.jsx)(`span`,{className:`clay-entity-name`,children:`Arka Jain University`})]})}),(0,$.jsx)(`td`,{style:{textAlign:`center`},children:(0,$.jsx)(`span`,{className:`clay-count-val`,children:`1`})}),(0,$.jsx)(`td`,{style:{textAlign:`right`},children:(0,$.jsxs)(`div`,{className:`clay-share-col`,children:[(0,$.jsx)(`div`,{className:`clay-bar-trough`,children:(0,$.jsx)(`div`,{className:`clay-bar-fill fill-cyan`,style:{width:`50%`}})}),(0,$.jsx)(`span`,{className:`clay-share-text`,children:`50.0%`})]})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-entity-cell`,children:[(0,$.jsx)(`span`,{className:`clay-initial-badge`,children:`AD`}),(0,$.jsx)(`span`,{className:`clay-entity-name`,children:`AIIMS Deoghar`})]})}),(0,$.jsx)(`td`,{style:{textAlign:`center`},children:(0,$.jsx)(`span`,{className:`clay-count-val`,children:`1`})}),(0,$.jsx)(`td`,{style:{textAlign:`right`},children:(0,$.jsxs)(`div`,{className:`clay-share-col`,children:[(0,$.jsx)(`div`,{className:`clay-bar-trough`,children:(0,$.jsx)(`div`,{className:`clay-bar-fill fill-amber`,style:{width:`50%`}})}),(0,$.jsx)(`span`,{className:`clay-share-text`,children:`50.0%`})]})})]})]})})]})}),(0,$.jsx)(`div`,{className:`clay-table-footer-bar`,children:(0,$.jsx)(`button`,{type:`button`,onClick:()=>ce(!se),className:`clay-footer-expand-btn`,children:se?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(lL,{size:14}),(0,$.jsx)(`span`,{children:`Collapse to compact scroll view`})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(sL,{size:14}),(0,$.jsxs)(`span`,{children:[`Show all `,n?.instituteWise?.length||30,` institutions (Expanded for screenshot)`]})]})})})]}),(0,$.jsxs)(`div`,{className:`clay-card clay-table-card ${le?`clay-card-expanded`:``}`,style:{transition:`all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`},children:[(0,$.jsxs)(`div`,{className:`clay-card-header-row`,style:{alignItems:`center`,gap:`12px`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexWrap:`wrap`},children:[(0,$.jsx)(`h2`,{className:`clay-card-serif-title`,style:{margin:0},children:`Course participation`}),le&&(0,$.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,padding:`2px 8px`,borderRadius:`999px`,background:`#eff6ff`,color:`#2563eb`,border:`1px solid #bfdbfe`},children:`14 total`})]}),(0,$.jsx)(`p`,{className:`clay-card-subtitle`,style:{margin:`3px 0 0 0`},children:`Registrations by academic discipline`})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexShrink:0},children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>ue(!le),className:`clay-table-toggle-btn ${le?`active`:``}`,title:le?`Switch to Collapsed View`:`Switch to Expanded View for screenshot`,children:le?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(qL,{size:13}),(0,$.jsx)(`span`,{children:`Collapse`})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(GL,{size:13}),(0,$.jsx)(`span`,{children:`Expanded View`})]})}),(0,$.jsx)(`div`,{className:`clay-kpi-icon-wrap`,style:{flexShrink:0},children:(0,$.jsx)(FL,{size:18})})]})]}),(0,$.jsx)(`div`,{className:`clay-table-wrap`,style:{maxHeight:le?`none`:`430px`,overflowY:le?`visible`:`auto`,paddingRight:le?`0`:`4px`},children:(0,$.jsxs)(`table`,{className:`clay-data-table`,children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{style:{width:`56%`},children:`COURSE`}),(0,$.jsx)(`th`,{style:{width:`20%`,textAlign:`center`},children:`PARTICIPANTS`}),(0,$.jsx)(`th`,{style:{width:`24%`,textAlign:`right`},children:`SHARE`})]})}),(0,$.jsx)(`tbody`,{children:n?.courseDistribution&&n.courseDistribution.length>0?n.courseDistribution.map((e,t)=>{let n=y>0?(e.count/y*100).toFixed(1):`50.0`,r=t%2==0;return(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-entity-cell`,children:[(0,$.jsx)(`span`,{className:`clay-initial-badge`,children:_(e.course)}),(0,$.jsx)(`span`,{className:`clay-entity-name`,title:e.course,children:e.course})]})}),(0,$.jsx)(`td`,{style:{textAlign:`center`},children:(0,$.jsx)(`span`,{className:`clay-count-val`,children:e.count})}),(0,$.jsx)(`td`,{style:{textAlign:`right`},children:(0,$.jsxs)(`div`,{className:`clay-share-col`,children:[(0,$.jsx)(`div`,{className:`clay-bar-trough`,children:(0,$.jsx)(`div`,{className:`clay-bar-fill ${r?`fill-cyan`:`fill-amber`}`,style:{width:`${Math.min(100,Math.max(10,Number(n)))}%`}})}),(0,$.jsxs)(`span`,{className:`clay-share-text`,children:[n,`%`]})]})})]},t)}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-entity-cell`,children:[(0,$.jsx)(`span`,{className:`clay-initial-badge`,children:`BC`}),(0,$.jsx)(`span`,{className:`clay-entity-name`,children:`BCA`})]})}),(0,$.jsx)(`td`,{style:{textAlign:`center`},children:(0,$.jsx)(`span`,{className:`clay-count-val`,children:`1`})}),(0,$.jsx)(`td`,{style:{textAlign:`right`},children:(0,$.jsxs)(`div`,{className:`clay-share-col`,children:[(0,$.jsx)(`div`,{className:`clay-bar-trough`,children:(0,$.jsx)(`div`,{className:`clay-bar-fill fill-cyan`,style:{width:`50%`}})}),(0,$.jsx)(`span`,{className:`clay-share-text`,children:`50.0%`})]})})]}),(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-entity-cell`,children:[(0,$.jsx)(`span`,{className:`clay-initial-badge`,children:`BT`}),(0,$.jsx)(`span`,{className:`clay-entity-name`,children:`BTech`})]})}),(0,$.jsx)(`td`,{style:{textAlign:`center`},children:(0,$.jsx)(`span`,{className:`clay-count-val`,children:`1`})}),(0,$.jsx)(`td`,{style:{textAlign:`right`},children:(0,$.jsxs)(`div`,{className:`clay-share-col`,children:[(0,$.jsx)(`div`,{className:`clay-bar-trough`,children:(0,$.jsx)(`div`,{className:`clay-bar-fill fill-amber`,style:{width:`50%`}})}),(0,$.jsx)(`span`,{className:`clay-share-text`,children:`50.0%`})]})})]})]})})]})}),(0,$.jsx)(`div`,{className:`clay-table-footer-bar`,children:(0,$.jsx)(`button`,{type:`button`,onClick:()=>ue(!le),className:`clay-footer-expand-btn`,children:le?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(lL,{size:14}),(0,$.jsx)(`span`,{children:`Collapse to compact scroll view`})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(sL,{size:14}),(0,$.jsxs)(`span`,{children:[`Show all `,n?.courseDistribution?.length||14,` courses (Expanded for screenshot)`]})]})})})]})]}),(0,$.jsxs)(`section`,{className:`clay-bottom-grid`,children:[(0,$.jsxs)(`div`,{className:`clay-card clay-trend-card`,children:[(0,$.jsxs)(`div`,{className:`clay-card-header-row`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:`clay-card-serif-title`,children:`Daily registration trend`}),(0,$.jsx)(`p`,{className:`clay-card-subtitle`,children:`Registration activity over time`})]}),(0,$.jsxs)(`div`,{className:`clay-badge-pill`,children:[y,` registrations`]})]}),(0,$.jsx)(`div`,{className:`clay-trend-chart-box`,children:(0,$.jsx)(Cd,{width:`100%`,height:210,children:(0,$.jsxs)(II,{data:me,margin:{top:20,right:20,left:-25,bottom:10},children:[(0,$.jsx)(`defs`,{children:(0,$.jsxs)(`linearGradient`,{id:`clayCyanGlow`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,$.jsx)(`stop`,{offset:`5%`,stopColor:`#3b82f6`,stopOpacity:.35}),(0,$.jsx)(`stop`,{offset:`95%`,stopColor:`#3b82f6`,stopOpacity:0})]})}),(0,$.jsx)(AP,{dataKey:`date`,tick:{fill:`#475569`,fontSize:11,fontWeight:600},axisLine:!1,tickLine:!1}),(0,$.jsx)(GP,{tick:{fill:`#64748b`,fontSize:11,fontWeight:500},axisLine:!1,tickLine:!1,allowDecimals:!1,domain:[0,e=>Math.max(4,e+1)]}),(0,$.jsx)(sO,{contentStyle:{backgroundColor:`#ffffff`,borderRadius:14,border:`1.5px solid rgba(162, 178, 201, 0.4)`,boxShadow:`0 8px 24px rgba(162, 178, 201, 0.35)`,color:`#0f172a`,fontSize:12,fontWeight:600}}),(0,$.jsx)(lP,{type:`monotone`,dataKey:`count`,stroke:`#2563eb`,strokeWidth:2.5,fill:`url(#clayCyanGlow)`,dot:{fill:`#2563eb`,stroke:`#ffffff`,strokeWidth:3,r:5},activeDot:{fill:`#1d4ed8`,stroke:`#ffffff`,strokeWidth:2,r:7}})]})})}),(0,$.jsxs)(`div`,{className:`clay-card-footer-info`,children:[(0,$.jsx)(LL,{size:14,className:`clay-info-icon`}),(0,$.jsx)(`span`,{children:n?.dailyTrend?.length&&n.dailyTrend.length>1?`Live registrations timeline updated automatically.`:`Registrations recorded for today.`})]})]}),(0,$.jsxs)(`div`,{className:`clay-card clay-gender-card`,children:[(0,$.jsxs)(`div`,{className:`clay-card-header-row`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:`clay-card-serif-title`,children:`Gender demographics`}),(0,$.jsx)(`p`,{className:`clay-card-subtitle`,children:`Participant breakdown by gender`})]}),(0,$.jsxs)(`div`,{className:`clay-badge-pill`,children:[P.total||y,` participants`]})]}),(0,$.jsxs)(`div`,{className:`clay-gender-split-wrap`,children:[(0,$.jsxs)(`div`,{className:`clay-gender-split-bar`,children:[(0,$.jsx)(`div`,{className:`clay-split-seg seg-male`,style:{width:`${P.malePct}%`},title:`Male: ${P.male} (${P.malePct}%)`}),(0,$.jsx)(`div`,{className:`clay-split-seg seg-female`,style:{width:`${P.femalePct}%`},title:`Female: ${P.female} (${P.femalePct}%)`}),P.unspecified>0&&(0,$.jsx)(`div`,{className:`clay-split-seg seg-unspecified`,style:{width:`${P.unspecifiedPct}%`},title:`Unspecified: ${P.unspecified} (${P.unspecifiedPct}%)`})]}),(0,$.jsxs)(`div`,{className:`clay-gender-split-labels`,children:[(0,$.jsxs)(`span`,{className:`split-lbl-male`,children:[`♂ Male `,P.malePct,`%`]}),(0,$.jsxs)(`span`,{className:`split-lbl-female`,children:[`♀ Female `,P.femalePct,`%`]}),P.unspecified>0&&(0,$.jsxs)(`span`,{className:`split-lbl-unspecified`,children:[`❔ Unspecified `,P.unspecifiedPct,`%`]})]})]}),(0,$.jsxs)(`div`,{className:`clay-gender-bars-list`,children:[(0,$.jsxs)(`div`,{className:`clay-gender-bar-row`,children:[(0,$.jsxs)(`div`,{className:`clay-gender-meta`,children:[(0,$.jsx)(`div`,{className:`clay-gender-icon-orb male`,children:(0,$.jsx)(`span`,{children:`♂`})}),(0,$.jsxs)(`div`,{className:`clay-gender-info`,children:[(0,$.jsx)(`span`,{className:`clay-gender-name`,children:`Male`}),(0,$.jsxs)(`span`,{className:`clay-gender-pct-tag male`,children:[P.malePct,`%`]})]})]}),(0,$.jsx)(`div`,{className:`clay-gender-track`,children:(0,$.jsx)(`div`,{className:`clay-gender-fill fill-male`,style:{width:`${Math.max(8,P.malePct)}%`}})}),(0,$.jsxs)(`div`,{className:`clay-gender-count-box`,children:[(0,$.jsx)(`span`,{className:`clay-gender-count-val`,children:P.male}),(0,$.jsx)(`span`,{className:`clay-gender-count-lbl`,children:`participants`})]})]}),(0,$.jsxs)(`div`,{className:`clay-gender-bar-row`,children:[(0,$.jsxs)(`div`,{className:`clay-gender-meta`,children:[(0,$.jsx)(`div`,{className:`clay-gender-icon-orb female`,children:(0,$.jsx)(`span`,{children:`♀`})}),(0,$.jsxs)(`div`,{className:`clay-gender-info`,children:[(0,$.jsx)(`span`,{className:`clay-gender-name`,children:`Female`}),(0,$.jsxs)(`span`,{className:`clay-gender-pct-tag female`,children:[P.femalePct,`%`]})]})]}),(0,$.jsx)(`div`,{className:`clay-gender-track`,children:(0,$.jsx)(`div`,{className:`clay-gender-fill fill-female`,style:{width:`${Math.max(8,P.femalePct)}%`}})}),(0,$.jsxs)(`div`,{className:`clay-gender-count-box`,children:[(0,$.jsx)(`span`,{className:`clay-gender-count-val`,children:P.female}),(0,$.jsx)(`span`,{className:`clay-gender-count-lbl`,children:`participants`})]})]}),P.unspecified>0&&(0,$.jsxs)(`div`,{className:`clay-gender-bar-row`,children:[(0,$.jsxs)(`div`,{className:`clay-gender-meta`,children:[(0,$.jsx)(`div`,{className:`clay-gender-icon-orb unspecified`,children:(0,$.jsx)(`span`,{children:`❔`})}),(0,$.jsxs)(`div`,{className:`clay-gender-info`,children:[(0,$.jsx)(`span`,{className:`clay-gender-name`,children:`Unspecified`}),(0,$.jsxs)(`span`,{className:`clay-gender-pct-tag unspecified`,children:[P.unspecifiedPct,`%`]})]})]}),(0,$.jsx)(`div`,{className:`clay-gender-track`,children:(0,$.jsx)(`div`,{className:`clay-gender-fill fill-unspecified`,style:{width:`${Math.max(8,P.unspecifiedPct)}%`}})}),(0,$.jsxs)(`div`,{className:`clay-gender-count-box`,children:[(0,$.jsx)(`span`,{className:`clay-gender-count-val`,children:P.unspecified}),(0,$.jsx)(`span`,{className:`clay-gender-count-lbl`,children:`participants`})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-card-footer-info`,children:[(0,$.jsx)(LL,{size:14,className:`clay-info-icon`}),(0,$.jsx)(`span`,{children:`Demographic breakdown based on verified participant registration profiles.`})]})]})]}),(0,$.jsxs)(`footer`,{className:`clay-footer`,children:[(0,$.jsx)(`div`,{className:`clay-foot-left`,children:`Arka Jain University \xA0/\xA0 Technika 6.0`}),(0,$.jsx)(`div`,{className:`clay-foot-right`,children:`Technika 6.0 · Arka Jain University`})]})]}),(0,$.jsx)(`nav`,{className:`clay-mobile-bottom-bar`,"aria-label":`Mobile Navigation`,children:(0,$.jsxs)(`div`,{className:`clay-mob-nav-inner`,children:[(0,$.jsxs)(`button`,{className:`clay-mob-nav-item is-active`,title:`Registration Analytics`,type:`button`,children:[(0,$.jsx)(`div`,{className:`clay-mob-icon-wrap`,children:(0,$.jsx)(aL,{size:18})}),(0,$.jsx)(`span`,{className:`clay-mob-label`,children:`Analytics`})]}),u.token?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`button`,{onClick:()=>t(`/admin/participants`),className:`clay-mob-nav-item`,title:`Admin Portal (${u.name})`,type:`button`,children:[(0,$.jsx)(`div`,{className:`clay-mob-avatar`,style:{padding:0,overflow:`hidden`},children:u.photoUrl&&!f?(0,$.jsx)(`img`,{src:u.photoUrl,alt:u.name,style:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`50%`},onError:()=>p(!0)}):u.name.split(` `).filter(Boolean).map(e=>e[0]).join(``).slice(0,2).toUpperCase()||`AD`}),(0,$.jsx)(`span`,{className:`clay-mob-label`,children:`Portal`})]}),(0,$.jsxs)(`button`,{onClick:m,className:`clay-mob-nav-item is-logout`,title:`Log out of Admin Portal`,type:`button`,children:[(0,$.jsx)(`div`,{className:`clay-mob-icon-wrap text-red`,children:(0,$.jsx)(VL,{size:18})}),(0,$.jsx)(`span`,{className:`clay-mob-label text-red`,children:`Logout`})]})]}):(0,$.jsxs)(`button`,{onClick:()=>t(`/admin/login`),className:`clay-mob-nav-item`,title:`Access Admin & Organizer Portal`,type:`button`,children:[(0,$.jsx)(`div`,{className:`clay-mob-icon-wrap`,children:(0,$.jsx)(zL,{size:18})}),(0,$.jsx)(`span`,{className:`clay-mob-label`,children:`Login`})]})]})}),(0,$.jsx)(`style`,{children:`
        /* Reset and Root Variables */
        .clay-dashboard-root {
          min-height: 100vh;
          background-color: #e6ecf5;
          color: #0f172a;
          font-family: 'Space Grotesk', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          padding-bottom: 40px;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Background Floating Orbs (Same as /admin/users & AdminLayout) ── */
        .clay-bg-orb {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.06));
        }

        .clay-bg-orb-1 {
          width: 320px;
          height: 320px;
          top: -4%;
          right: 4%;
          background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
          box-shadow: 
            inset -12px -12px 24px rgba(99, 102, 241, 0.4),
            inset 12px 12px 24px rgba(255, 255, 255, 0.65);
          animation: floatOrb 10s ease-in-out infinite alternate;
          opacity: 0.5;
        }

        .clay-bg-orb-2 {
          width: 240px;
          height: 240px;
          bottom: 8%;
          right: 18%;
          background: linear-gradient(135deg, #6ee7b7 0%, #34d399 100%);
          box-shadow: 
            inset -10px -10px 20px rgba(16, 185, 129, 0.4),
            inset 10px 10px 20px rgba(255, 255, 255, 0.65);
          animation: floatOrb 12s ease-in-out 1s infinite alternate-reverse;
          opacity: 0.4;
        }

        .clay-bg-orb-3 {
          width: 180px;
          height: 180px;
          bottom: 25%;
          left: 5%;
          background: linear-gradient(135deg, #fde047 0%, #eab308 100%);
          box-shadow: 
            inset -8px -8px 16px rgba(202, 138, 4, 0.4),
            inset 8px 8px 16px rgba(255, 255, 255, 0.65);
          animation: floatOrb 8s ease-in-out 2s infinite alternate;
          opacity: 0.35;
        }

        @keyframes floatOrb {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }

        /* ── Top Navigation Bar ── */
        .clay-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 44px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 20px rgba(162, 178, 201, 0.35);
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* ── Mobile Bottom Navigation Bar (Hidden on Desktop) ── */
        .clay-mobile-bottom-bar {
          display: none;
        }

        .clay-nav-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-nav-logo-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: #ffffff;
          padding: 4px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.3),
            -3px -3px 8px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.8);
          flex-shrink: 0;
        }

        .clay-nav-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .clay-nav-tech-badge {
          display: flex;
          align-items: center;
          gap: 9px;
          background: #f4f8fd;
          border: 2px solid rgba(255, 255, 255, 0.95);
          padding: 4px 12px 4px 5px;
          border-radius: 14px;
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.25),
            -3px -3px 8px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-nav-tech-img {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          object-fit: cover;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .clay-nav-titles {
          display: flex;
          flex-direction: column;
        }

        .clay-nav-uni-title {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: #0f172a;
        }

        .clay-nav-uni-subtitle {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .clay-nav-divider {
          width: 1.5px;
          height: 28px;
          background: rgba(162, 178, 201, 0.4);
          margin: 0 4px;
        }

        .clay-nav-brand {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .clay-brand-cyan {
          color: #2563eb;
        }

        .clay-nav-center {
          display: flex;
          align-items: center;
        }

        .clay-nav-tab-group {
          display: flex;
          background: #e2eaf4;
          padding: 4px;
          border-radius: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 
            inset 2px 2px 4px rgba(162, 178, 201, 0.35),
            inset -2px -2px 4px rgba(255, 255, 255, 0.9);
          gap: 4px;
        }

        .clay-nav-tab {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clay-nav-tab.active {
          background: #ffffff;
          color: #1e293b;
          box-shadow: 
            2px 3px 8px rgba(162, 178, 201, 0.35),
            -1px -1px 4px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }

        .clay-nav-tab.inactive {
          background: transparent;
          color: #64748b;
        }

        .clay-nav-tab.inactive:hover {
          color: #0f172a;
          background: rgba(255, 255, 255, 0.6);
        }

        .clay-tab-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 6px #2563eb;
        }

        .clay-nav-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.25),
            -3px -3px 8px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.8);
          animation: pulseGlow 2s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .clay-status-text {
          font-size: 12px;
          font-weight: 700;
          color: #475569;
        }

        /* ── Login Portal & Auth Group ── */
        .clay-auth-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clay-login-portal-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 6px 14px 6px 8px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          color: #0f172a;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 
            5px 6px 16px rgba(162, 178, 201, 0.3),
            -3px -3px 8px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }

        .clay-login-portal-btn:hover {
          transform: translateY(-1px);
          border-color: #3b82f6;
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.2);
        }

        .clay-portal-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: #ffffff;
          box-shadow: 
            2px 2px 6px rgba(37, 99, 235, 0.3),
            inset 1px 1px 2px rgba(255, 255, 255, 0.6);
          flex-shrink: 0;
        }

        .clay-login-portal-text {
          font-size: 12.5px;
          font-weight: 700;
          color: #0f172a;
        }

        .clay-portal-badge {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 2px 7px;
          border-radius: 6px;
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          border: 1px solid rgba(37, 99, 235, 0.25);
        }

        .clay-portal-user-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 5px 12px 5px 6px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          color: #0f172a;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.25),
            -3px -3px 8px rgba(255, 255, 255, 0.9);
          transition: all 0.2s ease;
        }

        .clay-portal-user-btn:hover {
          transform: translateY(-1px);
          border-color: #3b82f6;
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.2);
        }

        .clay-portal-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          box-shadow: 
            2px 2px 6px rgba(37, 99, 235, 0.35),
            inset 1px 1px 2px rgba(255, 255, 255, 0.5);
        }

        .clay-portal-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
          text-align: left;
        }

        .clay-portal-user-name {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          max-width: 110px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .clay-portal-user-role {
          font-size: 10px;
          font-weight: 700;
          color: #2563eb;
          max-width: 110px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .clay-portal-workspace-tag {
          font-size: 10px;
          font-weight: 700;
          color: #2563eb;
          padding: 2px 6px;
          border-radius: 6px;
          background: rgba(37, 99, 235, 0.1);
        }

        .clay-logout-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: 12px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 3px 3px 8px rgba(239, 68, 68, 0.15);
          transition: all 0.2s ease;
        }

        .clay-logout-btn:hover {
          background: #ef4444;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
        }

        /* ── Main Container ── */
        .clay-main-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          position: relative;
          z-index: 1;
        }

        /* ── Hero Header ── */
        .clay-hero-section {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          padding: 8px 0;
        }

        .clay-breadcrumb {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #64748b;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .clay-hero-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 40px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
          line-height: 1.15;
        }

        .clay-period {
          color: #2563eb;
        }

        .clay-hero-subtitle {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .clay-hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-btn-refresh {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 14px;
          background: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.9);
          color: #0f172a;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 
            6px 8px 18px rgba(162, 178, 201, 0.28),
            -5px -5px 12px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }

        .clay-btn-refresh:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 8px 12px 22px rgba(162, 178, 201, 0.35);
        }

        .clay-btn-refresh:active {
          transform: translateY(1px);
        }

        .clay-spin-anim {
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .clay-btn-export {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border: 2px solid #ffffff;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 
            6px 8px 18px rgba(37, 99, 235, 0.32),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -2px -2px 4px rgba(15, 23, 42, 0.25);
          transition: all 0.2s ease;
        }

        .clay-btn-export:hover {
          transform: translateY(-2px);
          box-shadow: 8px 12px 24px rgba(37, 99, 235, 0.45);
        }

        .clay-btn-export:active {
          transform: translateY(1px);
        }

        /* ── Base Clay Card ── */
        .clay-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 26px 28px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 
            8px 10px 24px rgba(162, 178, 201, 0.28),
            -6px -6px 18px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .clay-card:hover {
          box-shadow: 
            10px 14px 30px rgba(162, 178, 201, 0.35),
            -6px -6px 18px rgba(255, 255, 255, 0.95);
        }

        /* ── ROW 1: 5 KPI Cards Grid ── */
        .clay-kpi-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .clay-kpi-card {
          background: #ffffff;
          border-radius: 22px;
          padding: 22px 24px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 
            8px 10px 22px rgba(162, 178, 201, 0.26),
            -5px -5px 14px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.16);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .clay-kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: 10px 14px 26px rgba(162, 178, 201, 0.35);
        }

        .clay-kpi-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .clay-kpi-title {
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
        }

        .clay-kpi-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 11px;
          background: #eef4fc;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 1px 1px 2px rgba(162, 178, 201, 0.35);
        }

        .clay-kpi-val-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 12px;
        }

        .clay-kpi-num {
          font-size: 38px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .clay-num-cyan {
          color: #2563eb;
        }

        .clay-kpi-label {
          font-size: 13px;
          color: #64748b;
          font-weight: 600;
        }

        .clay-kpi-percent {
          font-size: 16px;
          font-weight: 800;
          color: #2563eb;
        }

        .clay-kpi-foot {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
          margin-top: auto;
        }

        /* ── ROW 2: Event Type Categories ── */
        .clay-categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .clay-card-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .clay-card-serif-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .clay-card-subtitle {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .clay-badge-pill {
          padding: 4px 12px;
          border-radius: 9999px;
          background: #f1f5f9;
          border: 1px solid rgba(162, 178, 201, 0.3);
          font-size: 11px;
          font-weight: 700;
          color: #475569;
          box-shadow: inset 1px 1px 2px rgba(162, 178, 201, 0.2);
        }

        .clay-cat-tiles-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 18px;
        }

        .clay-cat-tile {
          border-radius: 18px;
          padding: 14px 16px;
          background: #f8fafc;
          border: 1.5px solid #ffffff;
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.22),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.9),
            inset -1.5px -1.5px 3px rgba(162, 178, 201, 0.15);
          transition: transform 0.2s ease;
        }

        .clay-cat-tile:hover {
          transform: translateY(-2px);
        }

        .clay-cat-tile.tile-cyan {
          border-color: rgba(37, 99, 235, 0.25);
        }
        .clay-cat-tile.tile-cyan .clay-cat-tile-icon {
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
        }
        .clay-cat-tile.tile-cyan .clay-cat-tile-pill {
          background: rgba(37, 99, 235, 0.12);
          color: #2563eb;
          border: 1px solid rgba(37, 99, 235, 0.25);
        }

        .clay-cat-tile.tile-amber {
          border-color: rgba(245, 158, 11, 0.25);
        }
        .clay-cat-tile.tile-amber .clay-cat-tile-icon {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }
        .clay-cat-tile.tile-amber .clay-cat-tile-pill {
          background: rgba(245, 158, 11, 0.12);
          color: #d97706;
          border: 1px solid rgba(245, 158, 11, 0.25);
        }

        .clay-cat-tile.tile-pink {
          border-color: rgba(236, 72, 153, 0.25);
        }
        .clay-cat-tile.tile-pink .clay-cat-tile-icon {
          background: rgba(236, 72, 153, 0.1);
          color: #db2777;
        }
        .clay-cat-tile.tile-pink .clay-cat-tile-pill {
          background: rgba(236, 72, 153, 0.12);
          color: #db2777;
          border: 1px solid rgba(236, 72, 153, 0.25);
        }

        .clay-cat-tile-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .clay-cat-tile-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .clay-cat-tile-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 9999px;
        }

        .clay-cat-tile-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
        }

        .clay-cat-tile-label {
          font-size: 13px;
          font-weight: 700;
          color: #334155;
          margin-top: 2px;
        }

        .clay-cat-tile-desc {
          font-size: 10px;
          color: #64748b;
          margin-top: 2px;
        }

        .clay-cat-segmented-wrap {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .clay-cat-segmented-label {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .clay-cat-segmented-track {
          display: flex;
          height: 12px;
          background: #e2eaf4;
          border-radius: 9999px;
          padding: 2px;
          gap: 3px;
          box-shadow: 
            inset 2px 2px 4px rgba(162, 178, 201, 0.35),
            inset -1px -1px 2px rgba(255, 255, 255, 0.9);
          overflow: hidden;
        }

        .clay-cat-segment {
          height: 100%;
          border-radius: 6px;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .clay-cat-list {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .clay-cat-list-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 10px 14px;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px solid #e2eaf4;
        }

        .clay-cat-list-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .clay-cat-indicator-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .clay-cat-name {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }

        .clay-cat-list-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-cat-mini-trough {
          width: 110px;
        }

        .clay-cat-count-val {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          min-width: 24px;
          text-align: right;
        }

        .clay-cat-share-val {
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          min-width: 44px;
          text-align: right;
        }

        .fill-emerald {
          background: linear-gradient(90deg, #059669 0%, #10b981 100%);
        }
        .fill-purple {
          background: linear-gradient(90deg, #7c3aed 0%, #a855f7 100%);
        }
        .fill-pink {
          background: linear-gradient(90deg, #db2777 0%, #ec4899 100%);
        }

        /* ── ROW 3: Event Registrations & Most Popular Event ── */
        .clay-mid-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 22px;
        }

        .clay-event-header-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .clay-mini-switcher {
          display: flex;
          background: #e2eaf4;
          padding: 3px;
          border-radius: 12px;
          gap: 3px;
          box-shadow: inset 1px 1px 3px rgba(162, 178, 201, 0.4);
        }

        .clay-mini-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 9px;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clay-mini-btn.is-active {
          background: #ffffff;
          color: #2563eb;
          box-shadow: 2px 2px 6px rgba(162, 178, 201, 0.35);
        }

        .clay-event-filter-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .clay-filter-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .clay-filter-chip:hover {
          background: #e2e8f0;
          color: #1e293b;
        }

        .clay-filter-chip.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
        }

        .clay-filter-chip.active.tech {
          background: #2563eb;
          border-color: #2563eb;
        }

        .clay-filter-chip.active.cult {
          background: #f59e0b;
          border-color: #f59e0b;
          box-shadow: 0 4px 10px rgba(245, 158, 11, 0.25);
        }

        .clay-filter-chip.active.creat {
          background: #ec4899;
          border-color: #ec4899;
          box-shadow: 0 4px 10px rgba(236, 72, 153, 0.25);
        }

        .clay-ranked-bars-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 380px;
          overflow-y: auto;
          padding-right: 6px;
        }

        .clay-ranked-bars-list::-webkit-scrollbar {
          width: 5px;
        }

        .clay-ranked-bars-list::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        .clay-ranked-bar-row {
          display: grid;
          grid-template-columns: 200px 1fr 65px;
          align-items: center;
          gap: 14px;
          padding: 8px 12px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #ffffff;
          box-shadow: 2px 3px 8px rgba(162, 178, 201, 0.15);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .clay-ranked-bar-row:hover {
          transform: translateX(2px);
          box-shadow: 3px 4px 12px rgba(162, 178, 201, 0.25);
          background: #ffffff;
        }

        .clay-ranked-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .clay-rank-badge {
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          min-width: 24px;
          text-align: center;
        }

        .clay-rank-badge.rank-1,
        .clay-rank-badge.rank-2,
        .clay-rank-badge.rank-3 {
          font-size: 13px;
        }

        .clay-ranked-name {
          font-size: 12px;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
        }

        .clay-cat-tag {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }

        .cat-technical {
          background: rgba(37, 99, 235, 0.12);
          color: #2563eb;
        }

        .cat-cultural {
          background: rgba(245, 158, 11, 0.12);
          color: #d97706;
        }

        .cat-creative {
          background: rgba(236, 72, 153, 0.12);
          color: #db2777;
        }

        .clay-ranked-bar-track {
          height: 9px;
          background: #e2eaf4;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 1px 1px 2px rgba(162, 178, 201, 0.35);
        }

        .clay-ranked-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .clay-ranked-bar-fill.fill-technical {
          background: linear-gradient(90deg, #2563eb, #3b82f6);
        }

        .clay-ranked-bar-fill.fill-cultural {
          background: linear-gradient(90deg, #d97706, #f59e0b);
        }

        .clay-ranked-bar-fill.fill-creative {
          background: linear-gradient(90deg, #db2777, #ec4899);
        }

        .clay-ranked-counts {
          display: flex;
          align-items: baseline;
          justify-content: flex-end;
          gap: 6px;
        }

        .clay-count-val {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-count-pct {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
        }

        .clay-chart-tooltip {
          background: #ffffff;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .clay-tt-name {
          font-size: 12px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .clay-tt-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clay-tt-count {
          font-size: 11px;
          font-weight: 700;
          color: #2563eb;
        }

        .clay-barchart-container {
          width: 100%;
          min-height: 260px;
        }

        /* Popular Event Card */
        .clay-popular-card {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .clay-img-frame {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 18px;
          overflow: hidden;
          background: #e2eaf4;
          border: 2px solid #ffffff;
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.25),
            inset 2px 2px 4px rgba(162, 178, 201, 0.2);
          margin-bottom: 18px;
        }

        .clay-event-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .clay-img-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(15, 23, 42, 0.4) 100%);
          pointer-events: none;
        }

        .clay-popular-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .clay-popular-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #d97706;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .clay-sparkle-icon {
          color: #d97706;
        }

        .clay-popular-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .clay-popular-name {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 
            3px 3px 8px rgba(162, 178, 201, 0.3),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
          transition: transform 0.2s ease;
        }

        .clay-arrow-btn:hover {
          transform: scale(1.08);
          background: #e2eaf4;
        }

        .clay-popular-stats {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .clay-popular-divider {
          width: 100%;
          height: 1px;
          background: #e2eaf4;
          margin-top: auto;
          margin-bottom: 12px;
        }

        .clay-popular-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
        }

        .clay-popular-foot-lbl {
          color: #94a3b8;
          font-weight: 600;
        }

        .clay-popular-foot-val {
          color: #0f172a;
          font-weight: 800;
        }

        /* ── ROW 3: Tables Grid ── */
        .clay-tables-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          align-items: start;
        }

        .clay-card-expanded {
          box-shadow: 
            10px 14px 32px rgba(162, 178, 201, 0.35),
            -6px -6px 20px rgba(255, 255, 255, 0.95),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18) !important;
        }

        .clay-table-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: #475569;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.04);
        }

        .clay-table-toggle-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
          border-color: #cbd5e1;
          transform: translateY(-1px);
        }

        .clay-table-toggle-btn.active {
          background: #eff6ff;
          color: #2563eb;
          border-color: #bfdbfe;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);
        }

        .clay-table-footer-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 14px 0 2px 0;
          margin-top: 10px;
          border-top: 1px dashed #e2e8f0;
        }

        .clay-footer-expand-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: #2563eb;
          background: #f0f7ff;
          border: 1.5px solid #dbeafe;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.08);
        }

        .clay-footer-expand-btn:hover {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        .clay-table-wrap {
          overflow-x: auto;
          overflow-y: auto;
          max-height: 430px;
          padding-right: 4px;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
          scroll-behavior: smooth;
        }

        .clay-table-wrap::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .clay-table-wrap::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 999px;
        }

        .clay-table-wrap::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 999px;
        }

        .clay-table-wrap::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .clay-data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .clay-data-table th {
          position: sticky;
          top: 0;
          background: #ffffff;
          z-index: 2;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #64748b;
          text-transform: uppercase;
          padding: 8px 12px 14px 12px;
          border-bottom: 1.5px solid #e2e8f0;
          box-shadow: 0 1px 0 #e2e8f0;
          text-align: left;
        }

        .clay-data-table td {
          padding: 14px 12px;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: middle;
        }

        .clay-entity-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .clay-initial-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: #e2eaf4;
          border: 1.5px solid #ffffff;
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          box-shadow: 2px 2px 6px rgba(162, 178, 201, 0.25);
          flex-shrink: 0;
        }

        .clay-entity-name {
          color: #0f172a;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 240px;
        }

        .clay-count-val {
          font-weight: 700;
          color: #0f172a;
        }

        .clay-share-col {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        .clay-bar-trough {
          width: 64px;
          height: 6px;
          background: #e2eaf4;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 1px 1px 2px rgba(162, 178, 201, 0.3);
        }

        .clay-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fill-cyan {
          background: #2563eb;
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.4);
        }

        .fill-amber {
          background: #f59e0b;
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
        }

        .clay-share-text {
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          min-width: 44px;
          text-align: right;
        }

        /* ── ROW 4: Registration Trend & Gender Demographics Grid ── */
        .clay-bottom-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 22px;
        }

        .clay-trend-chart-box {
          width: 100%;
          min-height: 200px;
        }

        /* ── Gender Demographics Card Styles ── */
        .clay-gender-card {
          display: flex;
          flex-direction: column;
        }

        .clay-gender-split-wrap {
          margin-top: 14px;
          margin-bottom: 18px;
          padding: 12px 14px;
          border-radius: 16px;
          background: #eef3f9;
          box-shadow: inset 2px 2px 5px rgba(162, 178, 201, 0.3), inset -2px -2px 5px rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        .clay-gender-split-bar {
          height: 12px;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          background: #e2eaf4;
          box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
        }

        .clay-split-seg.seg-male {
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-split-seg.seg-female {
          background: linear-gradient(90deg, #ec4899 0%, #db2777 100%);
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-split-seg.seg-unspecified,
        .clay-split-seg.seg-other {
          background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-gender-split-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-size: 0.76rem;
          font-weight: 700;
        }

        .split-lbl-male { color: #2563eb; }
        .split-lbl-female { color: #db2777; }
        .split-lbl-unspecified,
        .split-lbl-other { color: #d97706; }

        .clay-gender-bars-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .clay-gender-bar-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.55);
          box-shadow: 3px 4px 10px rgba(162, 178, 201, 0.15), inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .clay-gender-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 105px;
        }

        .clay-gender-icon-orb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        .clay-gender-icon-orb.male {
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          box-shadow: 2px 3px 6px rgba(37, 99, 235, 0.15);
        }

        .clay-gender-icon-orb.female {
          background: #fdf2f8;
          color: #db2777;
          border: 1px solid #fbcfe8;
          box-shadow: 2px 3px 6px rgba(219, 39, 119, 0.15);
        }

        .clay-gender-icon-orb.unspecified,
        .clay-gender-icon-orb.other {
          background: #fffbeb;
          color: #d97706;
          border: 1px solid #fde68a;
          box-shadow: 2px 3px 6px rgba(217, 119, 6, 0.15);
        }

        .clay-gender-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .clay-gender-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1e293b;
        }

        .clay-gender-pct-tag {
          font-size: 0.7rem;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 6px;
          display: inline-block;
          width: fit-content;
        }

        .clay-gender-pct-tag.male {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .clay-gender-pct-tag.female {
          background: #fce7f3;
          color: #be185d;
        }

        .clay-gender-pct-tag.unspecified,
        .clay-gender-pct-tag.other {
          background: #fef3c7;
          color: #b45309;
        }

        .clay-gender-track {
          flex: 1;
          height: 10px;
          border-radius: 10px;
          background: #e2eaf4;
          overflow: hidden;
          box-shadow: inset 1px 1px 3px rgba(162, 178, 201, 0.4);
        }

        .clay-gender-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-gender-fill.fill-male {
          background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
        }

        .clay-gender-fill.fill-female {
          background: linear-gradient(90deg, #ec4899 0%, #be185d 100%);
          box-shadow: 0 2px 6px rgba(219, 39, 119, 0.3);
        }

        .clay-gender-fill.fill-unspecified,
        .clay-gender-fill.fill-other {
          background: linear-gradient(90deg, #f59e0b 0%, #b45309 100%);
          box-shadow: 0 2px 6px rgba(217, 119, 6, 0.3);
        }

        .clay-gender-count-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          min-width: 55px;
        }

        .clay-gender-count-val {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-gender-count-lbl {
          font-size: 0.65rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
        }

        /* ── Footer ── */
        .clay-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 4px 6px;
          font-size: 12px;
          color: #64748b;
          border-top: 1.5px solid #cbd5e1;
          margin-top: 8px;
        }

        .clay-foot-left {
          color: #64748b;
          font-weight: 600;
        }

        .clay-foot-right {
          color: #64748b;
          font-weight: 600;
        }

        /* Loading Screen */
        .clay-loading-screen {
          min-height: 100vh;
          background: #e6ecf5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .clay-spinner-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px;
          border-radius: 28px;
          background: #ffffff;
          box-shadow: 
            10px 14px 28px rgba(162, 178, 201, 0.35),
            -6px -6px 16px rgba(255, 255, 255, 0.9);
        }

        .clay-spinner {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 4px solid #e2eaf4;
          border-top-color: #2563eb;
          animation: spin 0.8s linear infinite;
        }

        .clay-loading-text {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }

        /* ── Responsiveness ── */
        @media (max-width: 1080px) {
          .clay-kpi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .clay-categories-grid {
            grid-template-columns: 1fr;
          }
          .clay-mid-grid {
            grid-template-columns: 1fr;
          }
          .clay-tables-grid {
            grid-template-columns: 1fr;
          }
          .clay-bottom-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .clay-nav {
            padding: 10px 14px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            box-sizing: border-box;
          }
          .clay-nav-left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
          }
          .clay-nav-divider {
            display: none;
          }
          .clay-nav-uni-title {
            font-size: 11px;
            letter-spacing: 0.04em;
          }
          .clay-nav-uni-subtitle {
            font-size: 9px;
          }
          .clay-nav-tech-badge {
            padding: 3px 8px 3px 4px;
          }
          .clay-nav-tech-img {
            width: 24px;
            height: 24px;
          }
          .clay-nav-brand {
            font-size: 12px;
          }
          /* Hide center tabs and right actions from top nav on mobile (they are now in the bottom bar) */
          .clay-nav-center {
            display: none !important;
          }
          .clay-nav-right {
            display: none !important;
          }

          /* Docked Mobile Bottom Navigation Bar */
          .clay-mobile-bottom-bar {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.94);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: 1.5px solid rgba(255, 255, 255, 0.9);
            box-shadow: 
              0 -8px 25px rgba(15, 23, 42, 0.08),
              0 -1px 3px rgba(162, 178, 201, 0.2);
            padding: 6px 12px calc(6px + env(safe-area-inset-bottom, 8px)) 12px;
            box-sizing: border-box;
          }

          .clay-mob-nav-inner {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 4px;
            max-width: 440px;
            margin: 0 auto;
          }

          .clay-mob-nav-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            padding: 6px 4px;
            border-radius: 12px;
            background: transparent;
            border: none;
            color: #64748b;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
          }

          .clay-mob-nav-item:active {
            transform: scale(0.94);
          }

          .clay-mob-nav-item.is-active {
            color: #2563eb;
          }

          .clay-mob-nav-item.is-active .clay-mob-icon-wrap {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #ffffff;
            box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
          }

          .clay-mob-icon-wrap {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 30px;
            border-radius: 14px;
            transition: all 0.2s ease;
          }

          .clay-mob-dot {
            position: absolute;
            top: 3px;
            right: 5px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #2563eb;
            box-shadow: 0 0 6px #2563eb;
          }

          .clay-mob-avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: #ffffff;
            font-size: 10px;
            font-weight: 800;
            box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
          }

          .clay-mob-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: -0.01em;
            white-space: nowrap;
          }

          .clay-mob-nav-item.is-logout {
            color: #dc2626;
          }

          .clay-mob-nav-item.is-logout .text-red {
            color: #dc2626;
          }

          .clay-main-container {
            padding: 16px 14px calc(90px + env(safe-area-inset-bottom, 12px)) 14px;
            box-sizing: border-box;
          }
          .clay-hero-heading {
            font-size: 26px;
            line-height: 1.15;
          }
          .clay-hero-actions {
            width: 100%;
            display: flex;
            gap: 10px;
          }
          .clay-btn-refresh,
          .clay-btn-export {
            flex: 1;
            justify-content: center;
            font-size: 12px;
            padding: 10px 12px;
          }
          .clay-kpi-grid {
            grid-template-columns: 1fr;
          }
          .clay-cat-tiles-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})},FR=()=>{let e=_t(),[t,n]=(0,v.useState)(`Faculty Coordinator`),[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)({email:``,password:``}),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)(``),[d,f]=(0,v.useState)(!1),p=(0,v.useRef)(null),m=[{key:`Faculty Coordinator`,label:`Faculty Coordinator`,icon:`🎓`,desc:`Faculty event advisors`},{key:`Administration`,label:`Administration`,icon:`🛡️`,desc:`Core organizing committee`},{key:`Student Coordinator`,label:`Student Coordinator`,icon:`⚡`,desc:`Event heads & coordinators`}],h=m.find(e=>e.key===t)||m[0];(0,v.useEffect)(()=>{let e=e=>{p.current&&!p.current.contains(e.target)&&i(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let g=e=>{o({...a,[e.target.name]:e.target.value})};return(0,$.jsxs)(`div`,{className:`clay-login-page`,children:[(0,$.jsx)(`div`,{className:`clay-floating-orb orb-1`}),(0,$.jsx)(`div`,{className:`clay-floating-orb orb-2`}),(0,$.jsx)(`div`,{className:`clay-floating-orb orb-3`}),(0,$.jsx)(`div`,{className:`clay-floating-orb orb-4`}),(0,$.jsx)(`div`,{className:`clay-login-topbar`,children:(0,$.jsx)(`button`,{type:`button`,onClick:()=>e(`/`),className:`clay-back-dash-btn`,children:(0,$.jsx)(`span`,{children:`← Back to Public Dashboard`})})}),(0,$.jsxs)(`div`,{className:`clay-card`,children:[(0,$.jsx)(`div`,{className:`clay-emblem-wrapper`,children:(0,$.jsx)(`div`,{className:`clay-emblem`,children:(0,$.jsx)(`span`,{className:`clay-emblem-icon`,children:`🔐`})})}),(0,$.jsxs)(`div`,{className:`clay-card-header`,children:[(0,$.jsx)(`span`,{className:`clay-badge-tag`,children:`TECHNIKA 6.0 PORTAL`}),(0,$.jsx)(`h1`,{className:`clay-title`,children:`ADMIN LOGIN`}),(0,$.jsx)(`p`,{className:`clay-subtitle`,children:`Enter your official credentials and select your authorized role`})]}),l&&(0,$.jsxs)(`div`,{className:`clay-error-box`,children:[(0,$.jsx)(`span`,{style:{fontSize:`1rem`},children:`⚠️`}),(0,$.jsx)(`span`,{children:l})]}),(0,$.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),u(``),f(!0);try{let n=await fetch(`${kR}/api/admin/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:a.email,password:a.password,role:t})}),r=await n.json();n.ok?(localStorage.setItem(`adminToken`,r.token),localStorage.setItem(`adminRole`,r.role),localStorage.setItem(`adminName`,r.name||`Administrator`),localStorage.setItem(`adminDesignation`,r.designation||t),localStorage.setItem(`adminEmail`,a.email.trim().toLowerCase()),r.permissions&&localStorage.setItem(`adminPermissions`,JSON.stringify(r.permissions)),e(`/admin/participants`)):u(r.message||`Login failed. Please check your credentials.`)}catch{u(`Network error. Is the backend server running?`)}finally{f(!1)}},className:`clay-form`,children:[(0,$.jsxs)(`div`,{className:`clay-category-section`,children:[(0,$.jsxs)(`div`,{className:`clay-category-header`,children:[(0,$.jsx)(`span`,{className:`clay-category-num`,children:`01`}),(0,$.jsx)(`span`,{className:`clay-category-title`,children:`LOGIN CREDENTIALS`})]}),(0,$.jsxs)(`div`,{className:`clay-field-group`,children:[(0,$.jsx)(`label`,{className:`clay-label`,children:(0,$.jsx)(`span`,{children:`Enter Your @technika2026.online email`})}),(0,$.jsxs)(`div`,{className:`clay-input-box`,children:[(0,$.jsx)(`div`,{className:`clay-input-badge`,children:(0,$.jsx)(`span`,{children:`✉️`})}),(0,$.jsx)(`input`,{type:`email`,name:`email`,value:a.email,onChange:g,placeholder:`name@technika2026.online`,required:!0,autoComplete:`email`,className:`clay-pure-input`})]})]}),(0,$.jsxs)(`div`,{className:`clay-field-group`,children:[(0,$.jsx)(`label`,{className:`clay-label`,children:(0,$.jsx)(`span`,{children:`ACCOUNT PASSWORD`})}),(0,$.jsxs)(`div`,{className:`clay-input-box`,children:[(0,$.jsx)(`div`,{className:`clay-input-badge`,children:(0,$.jsx)(`span`,{children:`🔒`})}),(0,$.jsx)(`input`,{type:s?`text`:`password`,name:`password`,value:a.password,onChange:g,placeholder:`••••••••••••`,required:!0,autoComplete:`current-password`,className:`clay-pure-input`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>c(!s),className:`clay-eye-btn`,title:s?`Hide password`:`Show password`,children:s?`👁️`:`🙈`})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-category-section`,style:{position:`relative`,zIndex:10},children:[(0,$.jsxs)(`div`,{className:`clay-category-header`,children:[(0,$.jsx)(`span`,{className:`clay-category-num`,children:`02`}),(0,$.jsx)(`span`,{className:`clay-category-title`,children:`SPECIFY YOUR ROLE`})]}),(0,$.jsxs)(`div`,{className:`clay-dropdown-wrapper`,ref:p,children:[(0,$.jsx)(`label`,{className:`clay-label`,children:(0,$.jsx)(`span`,{children:`ASSIGNED DESIGNATION`})}),(0,$.jsxs)(`button`,{type:`button`,onClick:()=>i(!r),className:`clay-dropdown-trigger ${r?`open`:``}`,"aria-haspopup":`listbox`,"aria-expanded":r,children:[(0,$.jsxs)(`div`,{className:`clay-dropdown-current`,children:[(0,$.jsx)(`span`,{className:`dropdown-current-icon`,children:h.icon}),(0,$.jsxs)(`div`,{className:`dropdown-current-info`,children:[(0,$.jsx)(`span`,{className:`dropdown-current-name`,children:h.label}),(0,$.jsx)(`span`,{className:`dropdown-current-desc`,children:h.desc})]})]}),(0,$.jsx)(`div`,{className:`clay-chevron-pill`,children:(0,$.jsx)(`span`,{className:`clay-chevron-arrow ${r?`rotated`:``}`,children:`▼`})})]}),r&&(0,$.jsx)(`div`,{className:`clay-dropdown-menu`,role:`listbox`,children:m.map(e=>{let r=t===e.key;return(0,$.jsxs)(`button`,{type:`button`,role:`option`,"aria-selected":r,onClick:()=>{n(e.key),i(!1),u(``)},className:`clay-dropdown-item ${r?`selected`:``}`,children:[(0,$.jsx)(`span`,{className:`item-icon`,children:e.icon}),(0,$.jsxs)(`div`,{className:`item-text`,children:[(0,$.jsx)(`span`,{className:`item-label`,children:e.label}),(0,$.jsx)(`span`,{className:`item-desc`,children:e.desc})]}),r&&(0,$.jsx)(`span`,{className:`item-check`,children:`✓`})]},e.key)})})]})]}),(0,$.jsx)(`button`,{type:`submit`,disabled:d,className:`clay-submit-btn ${d?`loading`:``}`,children:d?(0,$.jsxs)(`span`,{className:`btn-content`,children:[(0,$.jsx)(`span`,{className:`clay-spinner`}),`VERIFYING...`]}):(0,$.jsx)(`span`,{className:`btn-content`,children:`ACCESS ADMIN PORTAL →`})})]}),(0,$.jsx)(`div`,{className:`clay-footer-note`,children:(0,$.jsx)(`span`,{children:`🔒 Protected by Role-Based JWT Encryption • Technika 2026`})})]}),(0,$.jsx)(`style`,{children:`
        .clay-login-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 1rem;
          background: #e6ecf5;
          position: relative;
          overflow-y: auto;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
          box-sizing: border-box;
        }

        .clay-login-topbar {
          position: absolute;
          top: 20px;
          left: 24px;
          z-index: 20;
        }

        .clay-back-dash-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          border: none;
          background: #e6ecf5;
          color: #475569;
          font-family: inherit;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 
            6px 6px 14px rgba(166, 180, 200, 0.6),
            -6px -6px 14px rgba(255, 255, 255, 0.9);
          transition: all 0.2s ease;
        }

        .clay-back-dash-btn:hover {
          color: #1e293b;
          transform: translateY(-2px);
          box-shadow: 
            8px 8px 18px rgba(166, 180, 200, 0.7),
            -8px -8px 18px rgba(255, 255, 255, 1);
        }

        .clay-back-dash-btn:active {
          transform: translateY(1px);
          box-shadow: 
            inset 3px 3px 6px rgba(166, 180, 200, 0.6),
            inset -3px -3px 6px rgba(255, 255, 255, 0.9);
        }

        /* ── Floating 3D Clay Spheres ── */
        .clay-floating-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.08));
        }

        .orb-1 {
          width: 170px;
          height: 170px;
          top: 6%;
          left: 7%;
          background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
          box-shadow: 
            inset -10px -10px 20px rgba(99, 102, 241, 0.45),
            inset 10px 10px 20px rgba(255, 255, 255, 0.7);
          animation: floatOrb 8s ease-in-out infinite alternate;
        }

        .orb-2 {
          width: 140px;
          height: 140px;
          bottom: 6%;
          right: 7%;
          background: linear-gradient(135deg, #6ee7b7 0%, #34d399 100%);
          box-shadow: 
            inset -10px -10px 20px rgba(16, 185, 129, 0.45),
            inset 10px 10px 20px rgba(255, 255, 255, 0.7);
          animation: floatOrb 10s ease-in-out 1s infinite alternate-reverse;
        }

        .orb-3 {
          width: 90px;
          height: 90px;
          top: 12%;
          right: 15%;
          background: linear-gradient(135deg, #fbcfe8 0%, #f472b6 100%);
          box-shadow: 
            inset -6px -6px 14px rgba(236, 72, 153, 0.45),
            inset 6px 6px 14px rgba(255, 255, 255, 0.7);
          animation: floatOrb 7s ease-in-out 0.5s infinite alternate;
        }

        .orb-4 {
          width: 100px;
          height: 100px;
          bottom: 10%;
          left: 12%;
          background: linear-gradient(135deg, #fde047 0%, #eab308 100%);
          box-shadow: 
            inset -7px -7px 16px rgba(202, 138, 4, 0.45),
            inset 7px 7px 16px rgba(255, 255, 255, 0.7);
          animation: floatOrb 9s ease-in-out 2s infinite alternate-reverse;
        }

        @keyframes floatOrb {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-16px) rotate(6deg); }
        }

        /* ── Compact Claymorphism Card ── */
        .clay-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 440px;
          background: #eef3f9;
          border-radius: 28px;
          padding: 1.4rem 1.6rem 1.1rem 1.6rem;
          border: 2.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            20px 24px 44px rgba(162, 178, 201, 0.52),
            -16px -16px 36px rgba(255, 255, 255, 0.95),
            inset 3px 3px 8px rgba(255, 255, 255, 0.9),
            inset -5px -5px 10px rgba(162, 178, 201, 0.3);
          box-sizing: border-box;
        }

        /* ── Top 3D Clay Emblem (Compact) ── */
        .clay-emblem-wrapper {
          display: flex;
          justify-content: center;
          margin-top: -3.2rem;
          margin-bottom: 0.45rem;
        }

        .clay-emblem {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border: 3.5px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            8px 12px 22px rgba(37, 99, 235, 0.4),
            inset 4px 4px 8px rgba(255, 255, 255, 0.65),
            inset -4px -4px 8px rgba(15, 23, 42, 0.35);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-emblem-icon {
          font-size: 1.65rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        /* ── Compact Header ── */
        .clay-card-header {
          text-align: center;
          margin-bottom: 0.85rem;
        }

        .clay-badge-tag {
          display: inline-block;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2563eb;
          background: #dbeafe;
          padding: 2px 10px;
          border-radius: 9999px;
          box-shadow: 
            inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.8),
            inset -1.5px -1.5px 3px rgba(37, 99, 235, 0.2),
            2px 2px 5px rgba(37, 99, 235, 0.1);
          margin-bottom: 0.25rem;
        }

        .clay-title {
          font-size: 1.45rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .clay-subtitle {
          font-size: 0.74rem;
          color: #64748b;
          margin-top: 0.2rem;
          margin-bottom: 0;
          line-height: 1.3;
          font-weight: 500;
        }

        /* ── Compact Error Box ── */
        .clay-error-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fee2e2;
          color: #991b1b;
          padding: 0.55rem 0.85rem;
          border-radius: 14px;
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          border: 1px solid rgba(239, 68, 68, 0.2);
          box-shadow:
            4px 6px 12px rgba(239, 68, 68, 0.15),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(239, 68, 68, 0.18);
        }

        /* ── Form Layout ── */
        .clay-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        /* ── Categorized Sections (Compact) ── */
        .clay-category-section {
          background: #f4f8fd;
          border-radius: 18px;
          padding: 0.75rem 0.95rem;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
          box-sizing: border-box;
        }

        .clay-category-header {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 0.5rem;
        }

        .clay-category-num {
          font-size: 0.6rem;
          font-weight: 900;
          background: #2563eb;
          color: #ffffff;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 1px 1px 3px rgba(37, 99, 235, 0.3);
        }

        .clay-category-title {
          font-size: 0.68rem;
          font-weight: 800;
          color: #475569;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── Compact Input Groups ── */
        .clay-field-group {
          margin-bottom: 0.5rem;
          width: 100%;
          box-sizing: border-box;
        }

        .clay-field-group:last-child {
          margin-bottom: 0;
        }

        .clay-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          color: #334155;
          letter-spacing: 0.02em;
          margin-bottom: 0.25rem;
          padding-left: 2px;
        }

        .clay-input-box {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          background: #e2eaf4 !important;
          border-radius: 14px !important;
          padding: 4px 8px !important;
          border: 2px solid transparent !important;
          box-sizing: border-box !important;
          width: 100% !important;
          box-shadow:
            inset 3px 3px 6px rgba(162, 178, 201, 0.5),
            inset -3px -3px 6px rgba(255, 255, 255, 0.95) !important;
          transition: all 0.2s ease !important;
          overflow: hidden !important;
        }

        .clay-input-box:focus-within {
          border-color: #3b82f6 !important;
          background: #ffffff !important;
          box-shadow:
            0 0 0 3px rgba(59, 130, 246, 0.18),
            inset 2px 2px 4px rgba(162, 178, 201, 0.25),
            inset -2px -2px 4px rgba(255, 255, 255, 0.9) !important;
        }

        .clay-input-badge {
          width: 30px !important;
          height: 30px !important;
          border-radius: 10px !important;
          background: #f1f5fa !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 0.95rem !important;
          flex-shrink: 0 !important;
          box-shadow:
            2px 2px 4px rgba(162, 178, 201, 0.35),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
        }

        .clay-pure-input {
          flex: 1 1 auto !important;
          min-width: 0 !important;
          width: 100% !important;
          border: none !important;
          outline: none !important;
          background: transparent !important;
          background-color: transparent !important;
          color: #0f172a !important;
          font-size: 0.85rem !important;
          font-weight: 600 !important;
          font-family: inherit !important;
          padding: 5px 3px !important;
          height: auto !important;
          box-shadow: none !important;
        }

        .clay-pure-input::placeholder {
          color: #94a3b8 !important;
          font-weight: 400 !important;
        }

        .clay-pure-input:-webkit-autofill,
        .clay-pure-input:-webkit-autofill:hover, 
        .clay-pure-input:-webkit-autofill:focus,
        .clay-pure-input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px #e2eaf4 inset !important;
          -webkit-text-fill-color: #0f172a !important;
          caret-color: #0f172a !important;
          transition: background-color 5000s ease-in-out 0s;
        }

        .clay-eye-btn {
          border: none !important;
          background: #f1f5fa !important;
          cursor: pointer !important;
          font-size: 0.95rem !important;
          width: 28px !important;
          height: 28px !important;
          border-radius: 9px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow:
            2px 2px 4px rgba(162, 178, 201, 0.3),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8) !important;
          transition: transform 0.15s !important;
          flex-shrink: 0 !important;
        }

        .clay-eye-btn:hover {
          transform: scale(1.06) !important;
        }

        /* ── Compact Dropdown Specifics ── */
        .clay-dropdown-wrapper {
          position: relative;
        }

        .clay-dropdown-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.5rem 0.85rem;
          background: #e2eaf4;
          border-radius: 14px;
          border: 2px solid transparent;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          box-shadow:
            inset 3px 3px 6px rgba(162, 178, 201, 0.45),
            inset -3px -3px 6px rgba(255, 255, 255, 0.9);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box;
        }

        .clay-dropdown-trigger:hover {
          background: #e8f0fa;
        }

        .clay-dropdown-trigger.open {
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow:
            0 0 0 3px rgba(59, 130, 246, 0.15),
            inset 2px 2px 4px rgba(162, 178, 201, 0.25),
            inset -2px -2px 4px rgba(255, 255, 255, 0.8);
        }

        .clay-dropdown-current {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .dropdown-current-icon {
          font-size: 1.2rem;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,0.1));
        }

        .dropdown-current-info {
          display: flex;
          flex-direction: column;
        }

        .dropdown-current-name {
          font-size: 0.84rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
        }

        .dropdown-current-desc {
          font-size: 0.65rem;
          color: #64748b;
          font-weight: 500;
        }

        .clay-chevron-pill {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            2px 2px 4px rgba(162, 178, 201, 0.4),
            -1.5px -1.5px 3px rgba(255, 255, 255, 0.8),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          flex-shrink: 0;
        }

        .clay-chevron-arrow {
          font-size: 0.55rem;
          color: #475569;
          transition: transform 0.25s ease;
        }

        .clay-chevron-arrow.rotated {
          transform: rotate(180deg);
        }

        /* Dropdown Menu Overlay */
        .clay-dropdown-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          z-index: 999;
          background: #eef4fb;
          border-radius: 16px;
          padding: 0.45rem;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow:
            12px 16px 32px rgba(162, 178, 201, 0.6),
            -6px -6px 20px rgba(255, 255, 255, 0.95),
            inset 2px 2px 4px rgba(255, 255, 255, 0.85);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          animation: dropdownSlideIn 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-6px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .clay-dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.6rem 0.85rem;
          border-radius: 12px;
          border: none;
          background: #f4f8fd;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          width: 100%;
          transition: all 0.15s ease;
          box-shadow:
            1.5px 2px 4px rgba(162, 178, 201, 0.25),
            -1.5px -1.5px 3px rgba(255, 255, 255, 0.8);
        }

        .clay-dropdown-item:hover {
          transform: translateY(-1px);
          background: #e6effa;
          box-shadow:
            3px 4px 8px rgba(162, 178, 201, 0.35),
            -2px -2px 4px rgba(255, 255, 255, 0.9);
        }

        .clay-dropdown-item.selected {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          box-shadow:
            5px 6px 14px rgba(37, 99, 235, 0.38),
            inset 2px 2px 3px rgba(255, 255, 255, 0.4),
            inset -2px -2px 4px rgba(15, 23, 42, 0.3);
        }

        .clay-dropdown-item.selected .item-desc {
          color: rgba(255, 255, 255, 0.85);
        }

        .item-icon {
          font-size: 1.15rem;
          flex-shrink: 0;
        }

        .item-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .item-label {
          font-size: 0.82rem;
          font-weight: 800;
          line-height: 1.15;
        }

        .item-desc {
          font-size: 0.65rem;
          color: #64748b;
          font-weight: 500;
        }

        .item-check {
          font-size: 0.85rem;
          font-weight: 900;
          background: rgba(255, 255, 255, 0.25);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Compact 3D Clay Submit Button ── */
        .clay-submit-btn {
          width: 100%;
          padding: 0.8rem 1rem;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          border-radius: 16px;
          border: 2px solid rgba(255, 255, 255, 0.65);
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow:
            8px 10px 20px rgba(37, 99, 235, 0.38),
            -3px -3px 8px rgba(255, 255, 255, 0.7),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -3px -3px 6px rgba(15, 23, 42, 0.3);
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.1rem;
        }

        .clay-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow:
            10px 14px 24px rgba(37, 99, 235, 0.44),
            -3px -3px 10px rgba(255, 255, 255, 0.8),
            inset 3px 3px 6px rgba(255, 255, 255, 0.6);
        }

        .clay-submit-btn:active:not(:disabled) {
          transform: translateY(1px) scale(0.99);
          box-shadow:
            3px 4px 10px rgba(37, 99, 235, 0.3),
            inset 3px 3px 6px rgba(15, 23, 42, 0.35);
        }

        .clay-submit-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .btn-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clay-spinner {
          width: 15px;
          height: 15px;
          border: 2.5px solid rgba(255, 255, 255, 0.4);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Footer ── */
        .clay-footer-note {
          text-align: center;
          margin-top: 0.65rem;
          font-size: 0.68rem;
          color: #94a3b8;
          font-weight: 600;
        }

        @media (max-height: 700px) {
          .clay-login-page {
            padding: 0.35rem 0.5rem;
          }
          .clay-card {
            padding: 1.1rem 1.3rem 0.8rem 1.3rem;
            max-width: 410px;
          }
          .clay-emblem-wrapper {
            margin-top: -2.6rem;
            margin-bottom: 0.2rem;
          }
          .clay-emblem {
            width: 48px;
            height: 48px;
          }
          .clay-emblem-icon {
            font-size: 1.3rem;
          }
          .clay-title {
            font-size: 1.25rem;
          }
          .clay-subtitle {
            display: none;
          }
          .clay-form {
            gap: 0.5rem;
          }
        }
      `})]})},IR=()=>{let e=mt(),[t,n]=(0,v.useState)(!1),[r,i]=(0,v.useState)(!1),{token:a,role:o,name:s,designation:c,photoUrl:l,canAccessAccessControl:u}=MR();if((0,v.useEffect)(()=>{a&&fetch(`${kR}/api/admin/my-permissions`,{headers:{Authorization:`Bearer ${a}`}}).then(e=>e.json()).then(e=>{e.permissions&&localStorage.setItem(`adminPermissions`,JSON.stringify(e.permissions))}).catch(()=>{})},[a]),!a||(e=>{if(!e)return!0;try{let t=e.split(`.`);if(t.length!==3)return!1;let n=JSON.parse(atob(t[1]));return!!(n.exp&&Date.now()>=n.exp*1e3)}catch{return!1}})(a))return localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminRole`),localStorage.removeItem(`adminName`),localStorage.removeItem(`adminDesignation`),localStorage.removeItem(`adminEmail`),(0,$.jsx)(Ht,{to:`/admin/login`,replace:!0});let d=e=>e.split(` `).filter(Boolean).map(e=>e[0]).join(``).substring(0,2).toUpperCase(),f=[{name:`Analytics`,path:`/`,icon:(0,$.jsx)(aL,{size:19,strokeWidth:2.2}),desc:`Public dashboard & stats`},{name:`Participants`,path:`/admin/participants`,icon:(0,$.jsx)(CR,{size:19,strokeWidth:2.2}),desc:`View all registrations`},...u?[{name:`Access Control`,path:`/admin/access`,icon:(0,$.jsx)(dR,{size:19,strokeWidth:2.2}),desc:`Faculty & coordinator permissions`}]:[]],p=(()=>{switch(o){case`admin`:return{bg:`#dbeafe`,color:`#2563eb`,shadow:`rgba(37, 99, 235, 0.15)`};case`faculty`:return{bg:`#ede9fe`,color:`#7c3aed`,shadow:`rgba(124, 58, 237, 0.15)`};case`coordinator`:return{bg:`#d1fae5`,color:`#059669`,shadow:`rgba(5, 150, 105, 0.15)`};default:return{bg:`#dbeafe`,color:`#2563eb`,shadow:`rgba(37, 99, 235, 0.15)`}}})();return(0,$.jsxs)(`div`,{className:`clay-admin-shell ${t?`sidebar-collapsed`:``}`,children:[(0,$.jsx)(`div`,{className:`clay-bg-orb clay-bg-orb-1`}),(0,$.jsx)(`div`,{className:`clay-bg-orb clay-bg-orb-2`}),(0,$.jsx)(`div`,{className:`clay-bg-orb clay-bg-orb-3`}),(0,$.jsxs)(`aside`,{className:`clay-sidebar ${t?`collapsed`:``}`,children:[(0,$.jsxs)(`div`,{className:`clay-sidebar-brand`,children:[(0,$.jsxs)(`div`,{className:`clay-brand-row`,children:[(0,$.jsx)(`div`,{className:`clay-brand-logo`,style:{padding:0,overflow:`hidden`},children:(0,$.jsx)(`img`,{src:`/technika_logo.webp`,alt:`Technika 6.0`,style:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`12px`}})}),!t&&(0,$.jsxs)(`div`,{className:`clay-brand-text`,children:[(0,$.jsx)(`span`,{className:`clay-brand-name`,children:`TECHNIKA`}),(0,$.jsx)(`span`,{className:`clay-brand-ver`,children:`6.0`})]})]}),(0,$.jsx)(`button`,{className:`clay-sidebar-toggle`,onClick:()=>n(!t),title:t?`Expand sidebar`:`Collapse sidebar`,children:t?`→`:`←`})]}),(0,$.jsxs)(jn,{to:`/admin`,className:`clay-profile-card ${e.pathname===`/admin`?`active`:``}`,title:`View Complete Profile, Credentials & Settings`,children:[(0,$.jsxs)(`div`,{className:`clay-avatar`,children:[l&&!r?(0,$.jsx)(`img`,{src:l,alt:s,className:`clay-avatar-img`,onError:()=>i(!0)}):(0,$.jsx)(`span`,{className:`clay-avatar-initials`,children:d(s)}),(0,$.jsx)(`span`,{className:`clay-avatar-status`})]}),!t&&(0,$.jsxs)(`div`,{className:`clay-profile-info`,children:[(0,$.jsx)(`span`,{className:`clay-profile-name`,children:s}),(0,$.jsx)(`span`,{className:`clay-profile-role`,style:{background:p.bg,color:p.color,boxShadow:`2px 2px 6px ${p.shadow}, inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px ${p.shadow}`},children:c})]}),!t&&(0,$.jsx)(`span`,{className:`clay-profile-arrow`,title:`View Profile`,children:`→`})]}),(0,$.jsxs)(`nav`,{className:`clay-nav`,children:[(0,$.jsx)(`div`,{className:`clay-nav-label`,children:!t&&`NAVIGATION`}),(0,$.jsx)(`ul`,{className:`clay-nav-list`,children:f.map(n=>{let r=n.path===`/`?e.pathname===`/`:e.pathname.startsWith(n.path);return(0,$.jsx)(`li`,{children:(0,$.jsxs)(jn,{to:n.path,className:`clay-nav-item ${r?`active`:``}`,title:t?n.name:void 0,children:[(0,$.jsx)(`span`,{className:`clay-nav-icon`,children:n.icon}),!t&&(0,$.jsxs)(`div`,{className:`clay-nav-text`,children:[(0,$.jsx)(`span`,{className:`clay-nav-name`,children:n.name}),(0,$.jsx)(`span`,{className:`clay-nav-desc`,children:n.desc})]}),r&&!t&&(0,$.jsx)(`span`,{className:`clay-nav-active-dot`})]})},n.name)})})]})]}),(0,$.jsxs)(`header`,{className:`clay-mobile-topbar`,children:[(0,$.jsxs)(`div`,{className:`clay-mobile-brand`,children:[(0,$.jsx)(`div`,{className:`clay-mobile-logo`,children:(0,$.jsx)(`img`,{src:`/technika_logo.webp`,alt:`Technika 6.0`,style:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`10px`}})}),(0,$.jsxs)(`div`,{className:`clay-mobile-title`,children:[(0,$.jsx)(`span`,{className:`clay-mobile-name`,children:`TECHNIKA`}),(0,$.jsx)(`span`,{className:`clay-mobile-ver`,children:`6.0`})]})]}),(0,$.jsxs)(jn,{to:`/admin`,className:`clay-mobile-profile-btn`,title:`View Profile`,children:[(0,$.jsxs)(`div`,{className:`clay-mobile-avatar`,children:[l&&!r?(0,$.jsx)(`img`,{src:l,alt:s,className:`clay-mobile-avatar-img`,onError:()=>i(!0)}):(0,$.jsx)(`span`,{children:d(s)}),(0,$.jsx)(`span`,{className:`clay-mobile-dot`})]}),(0,$.jsxs)(`div`,{className:`clay-mobile-user-meta`,children:[(0,$.jsx)(`span`,{className:`clay-mobile-user-name`,children:s.split(` `)[0]}),(0,$.jsx)(`span`,{className:`clay-mobile-role`,style:{background:p.bg,color:p.color},children:o===`admin`?`Admin`:`Faculty`})]})]})]}),(0,$.jsx)(`main`,{className:`clay-main-content`,children:(0,$.jsx)(Ut,{})}),(0,$.jsxs)(`nav`,{className:`clay-mobile-bottom-nav`,children:[(0,$.jsxs)(jn,{to:`/`,className:`clay-mob-nav-btn ${e.pathname===`/`?`active`:``}`,children:[(0,$.jsx)(`span`,{className:`clay-mob-icon`,children:(0,$.jsx)(aL,{size:19,strokeWidth:2.2})}),(0,$.jsx)(`span`,{className:`clay-mob-label`,children:`Analytics`})]}),(0,$.jsxs)(jn,{to:`/admin/participants`,className:`clay-mob-nav-btn ${e.pathname.startsWith(`/admin/participants`)?`active`:``}`,children:[(0,$.jsx)(`span`,{className:`clay-mob-icon`,children:(0,$.jsx)(CR,{size:19,strokeWidth:2.2})}),(0,$.jsx)(`span`,{className:`clay-mob-label`,children:`Users`})]}),u&&(0,$.jsxs)(jn,{to:`/admin/access`,className:`clay-mob-nav-btn ${e.pathname.startsWith(`/admin/access`)?`active`:``}`,title:`Access Control`,children:[(0,$.jsx)(`span`,{className:`clay-mob-icon`,children:(0,$.jsx)(dR,{size:19,strokeWidth:2.2})}),(0,$.jsx)(`span`,{className:`clay-mob-label`,children:`Access`})]}),(0,$.jsxs)(jn,{to:`/admin`,className:`clay-mob-nav-btn ${e.pathname===`/admin`?`active`:``}`,children:[(0,$.jsx)(`span`,{className:`clay-mob-icon`,children:(0,$.jsx)(xR,{size:19,strokeWidth:2.2})}),(0,$.jsx)(`span`,{className:`clay-mob-label`,children:`Profile`})]})]}),(0,$.jsx)(`style`,{children:`
        .clay-admin-shell {
          display: flex;
          min-height: 100vh;
          width: 100%;
          background: #e6ecf5;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
          position: relative;
          overflow: hidden;
        }

        /* ── Background Orbs ── */
        .clay-bg-orb {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.06));
        }

        .clay-bg-orb-1 {
          width: 300px;
          height: 300px;
          top: -5%;
          right: 5%;
          background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
          box-shadow: 
            inset -12px -12px 24px rgba(99, 102, 241, 0.4),
            inset 12px 12px 24px rgba(255, 255, 255, 0.65);
          animation: floatAdmin 10s ease-in-out infinite alternate;
          opacity: 0.5;
        }

        .clay-bg-orb-2 {
          width: 220px;
          height: 220px;
          bottom: 5%;
          right: 15%;
          background: linear-gradient(135deg, #6ee7b7 0%, #34d399 100%);
          box-shadow: 
            inset -10px -10px 20px rgba(16, 185, 129, 0.4),
            inset 10px 10px 20px rgba(255, 255, 255, 0.65);
          animation: floatAdmin 12s ease-in-out 1s infinite alternate-reverse;
          opacity: 0.4;
        }

        .clay-bg-orb-3 {
          width: 160px;
          height: 160px;
          bottom: 30%;
          left: 40%;
          background: linear-gradient(135deg, #fde047 0%, #eab308 100%);
          box-shadow: 
            inset -8px -8px 16px rgba(202, 138, 4, 0.4),
            inset 8px 8px 16px rgba(255, 255, 255, 0.65);
          animation: floatAdmin 8s ease-in-out 2s infinite alternate;
          opacity: 0.35;
        }

        @keyframes floatAdmin {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }

        /* ── Sidebar (Fixed & Locked) ── */
        .clay-sidebar {
          width: 270px;
          min-width: 270px;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          background: #eef3f9;
          border-right: 2.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            8px 0 30px rgba(162, 178, 201, 0.2),
            inset -4px 0 12px rgba(162, 178, 201, 0.08),
            inset 4px 0 12px rgba(255, 255, 255, 0.6);
          display: flex;
          flex-direction: column;
          z-index: 40;
          overflow-y: auto;
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-sidebar.collapsed {
          width: 76px;
          min-width: 76px;
        }

        .clay-sidebar.collapsed .clay-sidebar-brand {
          padding: 1rem 0.5rem;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .clay-sidebar.collapsed .clay-brand-row {
          justify-content: center;
          width: 100%;
        }

        .clay-sidebar.collapsed .clay-sidebar-toggle {
          margin: 0 auto;
        }

        .clay-sidebar.collapsed .clay-profile-card {
          width: 50px;
          height: 50px;
          margin: 0.75rem auto;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          box-sizing: border-box;
        }

        .clay-sidebar.collapsed .clay-avatar {
          width: 36px;
          height: 36px;
          margin: 0;
        }

        .clay-sidebar.collapsed .clay-avatar-initials {
          font-size: 0.78rem;
        }

        .clay-sidebar.collapsed .clay-avatar-status {
          width: 10px;
          height: 10px;
          bottom: -1px;
          right: -1px;
        }

        .clay-sidebar.collapsed .clay-nav {
          padding: 0.8rem 6px;
        }

        .clay-sidebar.collapsed .clay-nav-label {
          display: none;
        }

        .clay-sidebar.collapsed .clay-nav-list {
          align-items: center;
          gap: 0.6rem;
        }

        .clay-sidebar.collapsed .clay-nav-list li {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .clay-sidebar.collapsed .clay-nav-item {
          width: 48px;
          height: 48px;
          padding: 0;
          justify-content: center;
          border-radius: 14px;
        }

        .clay-sidebar.collapsed .clay-nav-icon {
          font-size: 1.3rem;
          margin: 0;
        }

        /* ── Brand ── */
        .clay-sidebar-brand {
          padding: 1.1rem 1rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .clay-brand-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .clay-brand-logo {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2.5px solid #ffffff;
          box-shadow:
            4px 6px 14px rgba(37, 99, 235, 0.35),
            inset 3px 3px 6px rgba(255, 255, 255, 0.5),
            inset -3px -3px 6px rgba(15, 23, 42, 0.3);
        }

        .clay-brand-t {
          font-weight: 900;
          font-size: 1.15rem;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .clay-brand-text {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .clay-brand-name {
          font-weight: 900;
          font-size: 1.05rem;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .clay-brand-ver {
          font-weight: 900;
          font-size: 0.65rem;
          color: #2563eb;
          background: #dbeafe;
          padding: 1px 6px;
          border-radius: 6px;
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.8),
            inset -1px -1px 2px rgba(37, 99, 235, 0.15),
            2px 2px 4px rgba(37, 99, 235, 0.1);
        }

        .clay-sidebar-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.8);
          background: #e2eaf4;
          color: #475569;
          font-weight: 900;
          font-size: 0.7rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.3),
            3px 3px 8px rgba(162, 178, 201, 0.25);
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .clay-sidebar-toggle:hover {
          background: #dbeafe;
          color: #2563eb;
          transform: scale(1.08);
        }

        /* ── Profile Card (Clickable Link to Complete Profile) ── */
        .clay-profile-card {
          padding: 0.9rem 1rem;
          margin: 0.8rem 0.75rem;
          background: #f4f8fd;
          border-radius: 18px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-profile-card:hover {
          background: #eaf1fb;
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 1);
          box-shadow:
            8px 10px 22px rgba(162, 178, 201, 0.3),
            -5px -5px 14px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
        }

        .clay-profile-card.active {
          background: #e6f0fc;
          border-color: #3b82f6;
          box-shadow:
            6px 8px 18px rgba(37, 99, 235, 0.18),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(37, 99, 235, 0.1);
        }

        .clay-profile-arrow {
          margin-left: auto;
          font-size: 0.95rem;
          font-weight: 900;
          color: #94a3b8;
          transition: transform 0.2s, color 0.2s;
        }

        .clay-profile-card:hover .clay-profile-arrow {
          color: #2563eb;
          transform: translateX(2px);
        }

        .clay-profile-card.active .clay-profile-arrow {
          color: #2563eb;
        }

        .clay-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2.5px solid #ffffff;
          position: relative;
          box-shadow:
            4px 5px 12px rgba(59, 130, 246, 0.35),
            inset 3px 3px 6px rgba(255, 255, 255, 0.45),
            inset -3px -3px 6px rgba(15, 23, 42, 0.25);
        }

        .clay-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }

        .clay-avatar-initials {
          font-weight: 900;
          font-size: 0.82rem;
          color: #ffffff;
          text-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        .clay-avatar-status {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #22c55e;
          border: 2.5px solid #eef3f9;
          box-shadow: 0 2px 4px rgba(34, 197, 94, 0.4);
        }

        .clay-profile-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
          overflow: hidden;
        }

        .clay-profile-name {
          font-weight: 800;
          font-size: 0.85rem;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clay-profile-role {
          display: inline-block;
          font-size: 0.62rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 8px;
          letter-spacing: 0.02em;
          width: fit-content;
        }

        /* ── Navigation ── */
        .clay-nav {
          flex: 1;
          padding: 0.5rem 0.75rem;
        }

        .clay-nav-label {
          font-size: 0.6rem;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0 8px;
          margin-bottom: 0.5rem;
        }

        .clay-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .clay-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.7rem 0.85rem;
          border-radius: 14px;
          text-decoration: none;
          color: #475569;
          background: transparent;
          border: 2px solid transparent;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .clay-nav-item:hover {
          background: #f4f8fd;
          color: #1e293b;
          border-color: rgba(255, 255, 255, 0.7);
          box-shadow:
            4px 5px 12px rgba(162, 178, 201, 0.2),
            -3px -3px 8px rgba(255, 255, 255, 0.7),
            inset 1px 1px 3px rgba(255, 255, 255, 0.7),
            inset -1px -1px 3px rgba(162, 178, 201, 0.12);
          transform: translateY(-1px);
        }

        .clay-nav-item.active {
          background: #f4f8fd;
          color: #2563eb;
          border-color: rgba(255, 255, 255, 0.9);
          font-weight: 700;
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.25),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
          transform: translateY(-1px);
        }

        .clay-nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          color: #64748b;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .clay-nav-item:hover .clay-nav-icon {
          color: #2563eb;
          transform: scale(1.08);
        }

        .clay-nav-item.active .clay-nav-icon {
          color: #2563eb;
        }

        .clay-nav-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .clay-nav-name {
          font-weight: 700;
          font-size: 0.85rem;
        }

        .clay-nav-desc {
          font-size: 0.62rem;
          color: #94a3b8;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clay-nav-active-dot {
          position: absolute;
          right: 12px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.5);
        }

        /* ── Main Content (Offset by Fixed Sidebar) ── */
        .clay-main-content {
          flex: 1;
          margin-left: 270px;
          width: calc(100% - 270px);
          min-width: 0;
          min-height: 100vh;
          padding: 1.5rem 2rem;
          position: relative;
          z-index: auto;
          transition: margin-left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-admin-shell.sidebar-collapsed .clay-main-content {
          margin-left: 76px;
          width: calc(100% - 76px);
        }

        /* ── Scrollbar Styles ── */
        .clay-main-content::-webkit-scrollbar {
          width: 8px;
        }

        .clay-main-content::-webkit-scrollbar-track {
          background: #e6ecf5;
        }

        .clay-main-content::-webkit-scrollbar-thumb {
          background: #c8d5e3;
          border-radius: 10px;
          border: 2px solid #e6ecf5;
        }

        .clay-main-content::-webkit-scrollbar-thumb:hover {
          background: #a2b5c8;
        }

        /* ── Mobile Topbar & Bottom Nav (Hidden on Desktop) ── */
        .clay-mobile-topbar,
        .clay-mobile-bottom-nav {
          display: none;
        }

        /* ── Responsive Mobile Overhaul ── */
        @media (max-width: 768px) {
          .clay-admin-shell {
            flex-direction: column;
            overflow-x: hidden;
          }

          /* Hide Desktop Sidebar on Mobile */
          .clay-sidebar {
            display: none !important;
          }

          /* Mobile Topbar */
          .clay-mobile-topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.65rem 1rem;
            background: #eef3f9;
            border-bottom: 2px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 4px 15px rgba(162, 178, 201, 0.2);
            position: sticky;
            top: 0;
            z-index: 150;
            backdrop-filter: blur(12px);
            width: 100%;
          }

          .clay-mobile-brand {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .clay-mobile-logo {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #ffffff;
            box-shadow: 2px 3px 8px rgba(37, 99, 235, 0.25);
            flex-shrink: 0;
          }

          .clay-mobile-title {
            display: flex;
            align-items: baseline;
            gap: 4px;
          }

          .clay-mobile-name {
            font-weight: 900;
            font-size: 0.95rem;
            color: #0f172a;
            letter-spacing: -0.01em;
          }

          .clay-mobile-ver {
            font-weight: 900;
            font-size: 0.65rem;
            color: #2563eb;
            background: #dbeafe;
            padding: 1px 5px;
            border-radius: 6px;
          }

          .clay-mobile-profile-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            background: #ffffff;
            padding: 4px 10px 4px 5px;
            border-radius: 20px;
            border: 1.5px solid rgba(255, 255, 255, 0.9);
            box-shadow:
              3px 4px 10px rgba(162, 178, 201, 0.18),
              inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          }

          .clay-mobile-avatar {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.72rem;
            font-weight: 900;
            color: #ffffff;
            position: relative;
          }

          .clay-mobile-avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            display: block;
          }

          .clay-mobile-dot {
            position: absolute;
            bottom: -1px;
            right: -1px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #22c55e;
            border: 1.5px solid #ffffff;
          }

          .clay-mobile-user-meta {
            display: flex;
            flex-direction: column;
            gap: 1px;
          }

          .clay-mobile-user-name {
            font-size: 0.75rem;
            font-weight: 800;
            color: #0f172a;
            line-height: 1;
          }

          .clay-mobile-role {
            font-size: 0.6rem;
            font-weight: 800;
            padding: 1px 5px;
            border-radius: 5px;
            width: fit-content;
          }

          /* Main Content occupies 100% full width */
          .clay-main-content {
            margin-left: 0 !important;
            width: 100% !important;
            max-width: 100vw !important;
            padding: 0.85rem 0.85rem 85px 0.85rem !important;
            box-sizing: border-box;
          }

          /* Mobile Bottom Navigation Bar */
          .clay-mobile-bottom-nav {
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 64px;
            background: rgba(238, 243, 249, 0.96);
            backdrop-filter: blur(16px);
            border-top: 2px solid rgba(255, 255, 255, 0.9);
            box-shadow:
              0 -6px 20px rgba(162, 178, 201, 0.25),
              inset 0 1px 2px rgba(255, 255, 255, 0.8);
            z-index: 200;
            padding: 0 0.4rem;
          }

          .clay-mob-nav-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2px;
            text-decoration: none;
            color: #64748b;
            padding: 5px 8px;
            border-radius: 12px;
            transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            flex: 1;
          }

          .clay-mob-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            color: #64748b;
          }

          .clay-mob-label {
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.01em;
          }

          .clay-mob-nav-btn.active {
            color: #2563eb;
            background: #ffffff;
            box-shadow:
              3px 4px 10px rgba(162, 178, 201, 0.2),
              -2px -2px 6px rgba(255, 255, 255, 0.9),
              inset 1px 1px 2px rgba(255, 255, 255, 0.9);
            transform: translateY(-2px);
          }
        }
      `})]})},LR=()=>{let e=_t(),[t,n]=(0,v.useState)(!1),{token:r,role:i=`admin`,name:a,designation:o,photoUrl:s,canAccessAccessControl:c}=MR(),l=localStorage.getItem(`adminEmail`),[u,d]=(0,v.useState)(!1),[f,p]=(0,v.useState)(!1),[m,h]=(0,v.useState)(null),g={};try{if(r){let e=r.split(`.`)[1].replace(/-/g,`+`).replace(/_/g,`/`),t=decodeURIComponent(atob(e).split(``).map(e=>`%`+(`00`+e.charCodeAt(0).toString(16)).slice(-2)).join(``));g=JSON.parse(t)}}catch(e){console.warn(`Unable to decode JWT token`,e)}let _=g.email||l||(i===`admin`?`adeeb@technika2026.online`:`staff@technika2026.online`),y=g.iat?new Date(g.iat*1e3).toLocaleString(`en-IN`,{timeZone:`Asia/Kolkata`,dateStyle:`medium`,timeStyle:`short`}):`Active Session`,b=g.exp?new Date(g.exp*1e3).toLocaleString(`en-IN`,{timeZone:`Asia/Kolkata`,dateStyle:`medium`,timeStyle:`short`}):`12 Hours from login`,x=()=>{if(!g.exp)return`Active (12h)`;let e=g.exp-Math.floor(Date.now()/1e3);return e<=0?`Expired`:`${Math.floor(e/3600)}h ${Math.floor(e%3600/60)}m remaining`};(0,v.useEffect)(()=>{r&&(async()=>{try{let e=await fetch(`${kR}/api/admin/users`,{headers:{Authorization:`Bearer ${r}`}}),t=0;if(e.ok){let n=await e.json();t=Array.isArray(n)?n.length:n.users?.length||0}h({totalUsers:t,totalTeams:45})}catch{}})()},[r]);let S=()=>{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminRole`),localStorage.removeItem(`adminName`),localStorage.removeItem(`adminDesignation`),localStorage.removeItem(`adminEmail`),e(`/admin/login`)},C=e=>e.split(` `).filter(Boolean).map(e=>e[0]).join(``).substring(0,2).toUpperCase(),w=(()=>{switch(i){case`admin`:return{title:`Administrator`,pillBg:`#dbeafe`,pillColor:`#1d4ed8`,gradient:`linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)`,scope:`Full Administrative & Financial Authority`,tag:`ROOT ACCESS`};case`faculty`:return{title:`Faculty Coordinator`,pillBg:`#ede9fe`,pillColor:`#6d28d9`,gradient:`linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)`,scope:`Departmental & Event Supervision`,tag:`FACULTY PRIVILEGES`};case`coordinator`:return{title:`Student Coordinator`,pillBg:`#d1fae5`,pillColor:`#047857`,gradient:`linear-gradient(135deg, #10b981 0%, #047857 100%)`,scope:`Participant Check-in & Roster Management`,tag:`COORDINATOR DESK`};default:return{title:`Staff Member`,pillBg:`#e2e8f0`,pillColor:`#334155`,gradient:`linear-gradient(135deg, #64748b 0%, #334155 100%)`,scope:`Operational Support`,tag:`STANDARD ACCESS`}}})();return(0,$.jsxs)(`div`,{className:`clay-profile-page`,children:[(0,$.jsxs)(`div`,{className:`clay-profile-header`,children:[(0,$.jsxs)(`div`,{className:`clay-header-left`,children:[(0,$.jsx)(`div`,{className:`clay-header-emblem`,children:(0,$.jsx)(xR,{size:22})}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h1`,{className:`clay-page-title`,children:`USER PROFILE & CREDENTIALS`}),(0,$.jsx)(`p`,{className:`clay-page-subtitle`,children:`Complete administrative authorization, security credentials & session management`})]})]}),(0,$.jsxs)(`div`,{className:`clay-status-chip`,children:[(0,$.jsx)(`span`,{className:`clay-pulse-dot`}),(0,$.jsxs)(`span`,{className:`clay-status-text`,children:[`AUTHORIZED SESSION · `,w.tag]})]})]}),(0,$.jsxs)(`div`,{className:`clay-profile-grid`,children:[(0,$.jsxs)(`div`,{className:`clay-profile-col-left`,children:[(0,$.jsxs)(`div`,{className:`clay-card clay-hero-card`,children:[(0,$.jsx)(`div`,{className:`clay-hero-banner`,style:{background:w.gradient},children:(0,$.jsx)(`div`,{className:`clay-hero-banner-orb`})}),(0,$.jsxs)(`div`,{className:`clay-hero-body`,children:[(0,$.jsxs)(`div`,{className:`clay-hero-avatar-wrapper`,children:[(0,$.jsx)(`div`,{className:`clay-hero-avatar`,style:{background:w.gradient,overflow:`hidden`},children:s&&!t?(0,$.jsx)(`img`,{src:s,alt:a,className:`clay-hero-avatar-img`,onError:()=>n(!0)}):(0,$.jsx)(`span`,{className:`clay-hero-avatar-text`,children:C(a)})}),(0,$.jsx)(`div`,{className:`clay-hero-online-badge`,title:`Active Online Session`,children:(0,$.jsx)(`span`,{className:`clay-hero-online-dot`})})]}),(0,$.jsxs)(`div`,{className:`clay-hero-names`,children:[(0,$.jsx)(`h2`,{className:`clay-hero-name`,children:a}),(0,$.jsxs)(`div`,{className:`clay-hero-badge-row`,children:[(0,$.jsxs)(`span`,{className:`clay-role-pill`,style:{background:w.pillBg,color:w.pillColor},children:[`★ `,o]}),(0,$.jsx)(`span`,{className:`clay-inst-pill`,children:`🏛 Arka Jain University`})]})]}),(0,$.jsxs)(`div`,{className:`clay-info-strip`,children:[(0,$.jsxs)(`div`,{className:`clay-strip-item`,children:[(0,$.jsx)(`span`,{className:`clay-strip-label`,children:`Official Email`}),(0,$.jsxs)(`div`,{className:`clay-strip-val-row`,children:[(0,$.jsx)(`span`,{className:`clay-strip-val`,children:_}),(0,$.jsx)(`button`,{className:`clay-strip-copy-btn`,onClick:()=>{navigator.clipboard.writeText(_),d(!0),setTimeout(()=>d(!1),2e3)},title:`Copy email address`,children:u?`✓ Copied`:`📋 Copy`})]})]}),(0,$.jsxs)(`div`,{className:`clay-strip-item`,children:[(0,$.jsx)(`span`,{className:`clay-strip-label`,children:`Assigned Role`}),(0,$.jsx)(`span`,{className:`clay-strip-val bold`,children:w.title})]}),(0,$.jsxs)(`div`,{className:`clay-strip-item`,children:[(0,$.jsx)(`span`,{className:`clay-strip-label`,children:`Access Level`}),(0,$.jsx)(`span`,{className:`clay-strip-val highlight`,children:w.scope})]}),(0,$.jsxs)(`div`,{className:`clay-strip-item`,children:[(0,$.jsx)(`span`,{className:`clay-strip-label`,children:`Account Clearance`}),(0,$.jsx)(`span`,{className:`clay-strip-val clearance-ok`,children:`✓ Verified Technika Authority`})]})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-card clay-shortcuts-card`,children:[(0,$.jsxs)(`h3`,{className:`clay-card-title flex items-center gap-2`,children:[(0,$.jsx)(TR,{size:18,style:{color:`#eab308`}}),` QUICK SHORTCUTS`]}),(0,$.jsxs)(`div`,{className:`clay-shortcuts-grid`,children:[(0,$.jsxs)(jn,{to:`/admin/participants`,className:`clay-shortcut-btn`,children:[(0,$.jsx)(`span`,{className:`clay-shortcut-icon`,children:(0,$.jsx)(CR,{size:22,style:{color:`#2563eb`}})}),(0,$.jsxs)(`div`,{className:`clay-shortcut-text`,children:[(0,$.jsx)(`span`,{className:`clay-shortcut-title`,children:`Participants`}),(0,$.jsx)(`span`,{className:`clay-shortcut-desc`,children:`View all student registrations`})]}),(0,$.jsx)(`span`,{className:`clay-shortcut-arrow`,children:`→`})]}),c&&(0,$.jsxs)(jn,{to:`/admin/access`,className:`clay-shortcut-btn`,children:[(0,$.jsx)(`span`,{className:`clay-shortcut-icon`,children:(0,$.jsx)(dR,{size:22,style:{color:`#7c3aed`}})}),(0,$.jsxs)(`div`,{className:`clay-shortcut-text`,children:[(0,$.jsx)(`span`,{className:`clay-shortcut-title`,children:`Access Control`}),(0,$.jsx)(`span`,{className:`clay-shortcut-desc`,children:`Manage role privileges`})]}),(0,$.jsx)(`span`,{className:`clay-shortcut-arrow`,children:`→`})]}),(0,$.jsxs)(jn,{to:`/`,className:`clay-shortcut-btn`,children:[(0,$.jsx)(`span`,{className:`clay-shortcut-icon`,children:(0,$.jsx)(aL,{size:22,style:{color:`#059669`}})}),(0,$.jsxs)(`div`,{className:`clay-shortcut-text`,children:[(0,$.jsx)(`span`,{className:`clay-shortcut-title`,children:`Live Analytics`}),(0,$.jsx)(`span`,{className:`clay-shortcut-desc`,children:`Registration stats & charts`})]}),(0,$.jsx)(`span`,{className:`clay-shortcut-arrow`,children:`→`})]})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-profile-col-right`,children:[m&&(0,$.jsxs)(`div`,{className:`clay-card clay-stats-summary-card`,children:[(0,$.jsxs)(`h3`,{className:`clay-card-title flex items-center gap-2`,children:[(0,$.jsx)(ZI,{size:18,style:{color:`#2563eb`}}),` SYSTEM ACTIVITY OVERVIEW`]}),(0,$.jsxs)(`div`,{className:`clay-stats-pills-row`,children:[(0,$.jsxs)(`div`,{className:`clay-mini-stat`,children:[(0,$.jsx)(`span`,{className:`clay-mini-stat-num`,children:m.totalUsers}),(0,$.jsx)(`span`,{className:`clay-mini-stat-lbl`,children:`Registered Participants`})]}),(0,$.jsxs)(`div`,{className:`clay-mini-stat`,children:[(0,$.jsx)(`span`,{className:`clay-mini-stat-num`,children:`45`}),(0,$.jsx)(`span`,{className:`clay-mini-stat-lbl`,children:`Active Competitions`})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-card clay-clearance-card`,children:[(0,$.jsxs)(`h3`,{className:`clay-card-title flex items-center gap-2`,children:[(0,$.jsx)(dR,{size:18,style:{color:`#7c3aed`}}),` AUTHORIZED PRIVILEGES & CLEARANCES`]}),(0,$.jsxs)(`div`,{className:`clay-clearance-list`,children:[(0,$.jsxs)(`div`,{className:`clay-clearance-item active`,children:[(0,$.jsx)(`div`,{className:`clay-clearance-icon`,children:`✓`}),(0,$.jsxs)(`div`,{className:`clay-clearance-content`,children:[(0,$.jsx)(`span`,{className:`clay-clearance-title`,children:`Participant Verification & Approvals`}),(0,$.jsx)(`span`,{className:`clay-clearance-desc`,children:`Inspect student IDs, review ₹600 manual receipts, and mark approvals.`})]}),(0,$.jsx)(`span`,{className:`clay-clearance-tag full`,children:`GRANTED`})]}),(0,$.jsxs)(`div`,{className:`clay-clearance-item active`,children:[(0,$.jsx)(`div`,{className:`clay-clearance-icon`,children:`✓`}),(0,$.jsxs)(`div`,{className:`clay-clearance-content`,children:[(0,$.jsx)(`span`,{className:`clay-clearance-title`,children:`Event Operations & Attendance Desk`}),(0,$.jsx)(`span`,{className:`clay-clearance-desc`,children:`Manage desk check-ins and verify student reporting for all fest events.`})]}),(0,$.jsx)(`span`,{className:`clay-clearance-tag full`,children:`GRANTED`})]}),(0,$.jsxs)(`div`,{className:`clay-clearance-item active`,children:[(0,$.jsx)(`div`,{className:`clay-clearance-icon`,children:`✓`}),(0,$.jsxs)(`div`,{className:`clay-clearance-content`,children:[(0,$.jsx)(`span`,{className:`clay-clearance-title`,children:`Real-Time Registration Telemetry`}),(0,$.jsx)(`span`,{className:`clay-clearance-desc`,children:`Access high-resolution departmental breakdown, event category stats, and trends.`})]}),(0,$.jsx)(`span`,{className:`clay-clearance-tag full`,children:`GRANTED`})]}),(0,$.jsxs)(`div`,{className:`clay-clearance-item active`,children:[(0,$.jsx)(`div`,{className:`clay-clearance-icon`,children:`✓`}),(0,$.jsxs)(`div`,{className:`clay-clearance-content`,children:[(0,$.jsx)(`span`,{className:`clay-clearance-title`,children:`Document Inspection Viewer`}),(0,$.jsx)(`span`,{className:`clay-clearance-desc`,children:`Side-by-side verification of payment screenshots, No-Dues slips & College IDs.`})]}),(0,$.jsx)(`span`,{className:`clay-clearance-tag full`,children:`GRANTED`})]}),(0,$.jsxs)(`div`,{className:`clay-clearance-item active`,children:[(0,$.jsx)(`div`,{className:`clay-clearance-icon`,children:`✓`}),(0,$.jsxs)(`div`,{className:`clay-clearance-content`,children:[(0,$.jsx)(`span`,{className:`clay-clearance-title`,children:`Export & Report Generation`}),(0,$.jsx)(`span`,{className:`clay-clearance-desc`,children:`Download consolidated CSV manifests for registration desk check-ins.`})]}),(0,$.jsx)(`span`,{className:`clay-clearance-tag full`,children:`GRANTED`})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-card clay-session-card`,children:[(0,$.jsx)(`h3`,{className:`clay-card-title`,children:`🔐 ACTIVE SESSION SECURITY`}),(0,$.jsxs)(`div`,{className:`clay-session-table`,children:[(0,$.jsxs)(`div`,{className:`clay-session-row`,children:[(0,$.jsx)(`span`,{className:`clay-session-key`,children:`Session State`}),(0,$.jsx)(`span`,{className:`clay-session-val green-text`,children:`● Authenticated & Active`})]}),(0,$.jsxs)(`div`,{className:`clay-session-row`,children:[(0,$.jsx)(`span`,{className:`clay-session-key`,children:`Session Started`}),(0,$.jsx)(`span`,{className:`clay-session-val`,children:y})]}),(0,$.jsxs)(`div`,{className:`clay-session-row`,children:[(0,$.jsx)(`span`,{className:`clay-session-key`,children:`Token Expiry`}),(0,$.jsxs)(`span`,{className:`clay-session-val`,children:[b,` (`,x(),`)`]})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-card clay-logout-card`,children:[(0,$.jsxs)(`div`,{className:`clay-logout-card-header`,children:[(0,$.jsx)(`div`,{className:`clay-logout-warning-icon`,children:`🚪`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{className:`clay-logout-card-title`,children:`TERMINATE SESSION / SIGN OUT`}),(0,$.jsx)(`p`,{className:`clay-logout-card-desc`,children:`Safely disconnect your credentials and clear cached authorization keys from this browser.`})]})]}),(0,$.jsxs)(`div`,{className:`clay-logout-actions`,children:[(0,$.jsxs)(`button`,{onClick:()=>p(!0),className:`clay-big-logout-btn`,id:`profile-logout-btn`,children:[(0,$.jsx)(`span`,{className:`clay-btn-icon`,children:`🚪`}),(0,$.jsx)(`span`,{className:`clay-btn-text`,children:`LOG OUT OF ADMIN PORTAL`})]}),(0,$.jsx)(`button`,{onClick:()=>e(`/admin/login`),className:`clay-switch-account-btn`,children:`🔄 Switch Account / Re-authenticate`})]})]})]})]}),f&&(0,$.jsx)(`div`,{className:`clay-modal-backdrop`,onClick:()=>p(!1),children:(0,$.jsxs)(`div`,{className:`clay-logout-modal`,onClick:e=>e.stopPropagation(),children:[(0,$.jsx)(`div`,{className:`clay-modal-icon`,children:`⚠️`}),(0,$.jsx)(`h3`,{className:`clay-modal-title`,children:`Confirm Sign Out`}),(0,$.jsxs)(`p`,{className:`clay-modal-desc`,children:[`Are you sure you want to end your session as `,(0,$.jsx)(`strong`,{children:a}),` (`,o,`)? You will need to log in again to access the portal.`]}),(0,$.jsxs)(`div`,{className:`clay-modal-btns`,children:[(0,$.jsx)(`button`,{onClick:()=>p(!1),className:`clay-modal-cancel-btn`,children:`Cancel`}),(0,$.jsx)(`button`,{onClick:S,className:`clay-modal-confirm-btn`,children:`Yes, Log Out`})]})]})}),(0,$.jsx)(`style`,{children:`
        .clay-profile-page {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
        }

        /* ── Header ── */
        .clay-profile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          background: #f4f8fd;
          padding: 1.2rem 1.6rem;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.2),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
        }

        .clay-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .clay-header-emblem {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: #ffffff;
          border: 2px solid #ffffff;
          box-shadow:
            4px 6px 14px rgba(37, 99, 235, 0.35),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -2px -2px 4px rgba(15, 23, 42, 0.25);
        }

        .clay-page-title {
          font-size: 1.25rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .clay-page-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin: 2px 0 0 0;
          font-weight: 500;
        }

        .clay-status-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #eef4fc;
          padding: 6px 14px;
          border-radius: 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            3px 4px 10px rgba(162, 178, 201, 0.15),
            inset 1px 1px 3px rgba(255, 255, 255, 0.8),
            inset -1px -1px 3px rgba(162, 178, 201, 0.12);
        }

        .clay-pulse-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        .clay-status-text {
          font-size: 0.72rem;
          font-weight: 800;
          color: #047857;
          letter-spacing: 0.04em;
        }

        /* ── Grid Layout ── */
        .clay-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 1.5rem;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .clay-profile-grid {
            grid-template-columns: 1fr;
          }
        }

        .clay-profile-col-left,
        .clay-profile-col-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* ── Reusable Clay Card ── */
        .clay-card {
          background: #f4f8fd;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
          overflow: hidden;
        }

        .clay-card-title {
          font-size: 0.82rem;
          font-weight: 900;
          color: #334155;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 1.1rem 1.4rem 0.6rem 1.4rem;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── Hero Card ── */
        .clay-hero-banner {
          height: 105px;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .clay-hero-banner-orb {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          top: -40px;
          right: -20px;
          background: rgba(255, 255, 255, 0.15);
          filter: blur(10px);
        }

        .clay-hero-body {
          padding: 0 1.5rem 1.5rem 1.5rem;
          position: relative;
          margin-top: -45px;
        }

        .clay-hero-avatar-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
          margin-bottom: 0.8rem;
        }

        .clay-hero-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid #ffffff;
          box-shadow:
            6px 8px 18px rgba(37, 99, 235, 0.35),
            inset 3px 3px 6px rgba(255, 255, 255, 0.5),
            inset -3px -3px 6px rgba(15, 23, 42, 0.25);
        }

        .clay-hero-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }

        .clay-hero-avatar-text {
          font-size: 2rem;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .clay-hero-online-badge {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #22c55e;
          border: 3.5px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(34, 197, 94, 0.4);
        }

        .clay-hero-online-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
        }

        .clay-hero-names {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1.2rem;
        }

        .clay-hero-name {
          font-size: 1.5rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .clay-hero-badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .clay-role-pill {
          font-size: 0.72rem;
          font-weight: 900;
          padding: 3px 10px;
          border-radius: 10px;
          letter-spacing: 0.02em;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 2px 2px 6px rgba(0,0,0,0.06);
        }

        .clay-inst-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 10px;
          background: #e2e8f0;
          color: #475569;
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        /* ── Info Strip ── */
        .clay-info-strip {
          background: #eef4fc;
          border-radius: 16px;
          padding: 1rem;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
        }

        .clay-strip-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          border-bottom: 1px dashed rgba(162, 178, 201, 0.4);
          padding-bottom: 0.5rem;
        }

        .clay-strip-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .clay-strip-label {
          color: #64748b;
          font-weight: 600;
        }

        .clay-strip-val-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .clay-strip-val {
          font-weight: 700;
          color: #1e293b;
          word-break: break-all;
        }

        .clay-strip-val.bold {
          font-weight: 800;
          color: #0f172a;
        }

        .clay-strip-val.highlight {
          color: #2563eb;
          font-weight: 700;
        }

        .clay-strip-val.clearance-ok {
          color: #059669;
          font-weight: 800;
        }

        .clay-strip-copy-btn {
          background: #dbeafe;
          color: #1d4ed8;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 6px;
          padding: 2px 8px;
          font-size: 0.68rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-strip-copy-btn:hover {
          background: #bfdbfe;
          transform: translateY(-1px);
        }

        /* ── Shortcuts ── */
        .clay-shortcuts-grid {
          padding: 0.6rem 1.4rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .clay-shortcut-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          text-decoration: none;
          color: #1e293b;
          box-shadow:
            4px 5px 12px rgba(162, 178, 201, 0.15),
            -3px -3px 8px rgba(255, 255, 255, 0.8),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-shortcut-btn:hover {
          background: #eef4fc;
          transform: translateY(-2px);
          box-shadow:
            6px 8px 16px rgba(162, 178, 201, 0.25),
            -4px -4px 10px rgba(255, 255, 255, 0.9);
        }

        .clay-shortcut-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .clay-shortcut-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .clay-shortcut-title {
          font-size: 0.84rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-shortcut-desc {
          font-size: 0.68rem;
          color: #64748b;
          font-weight: 500;
        }

        .clay-shortcut-arrow {
          font-size: 1rem;
          font-weight: 900;
          color: #94a3b8;
        }

        /* ── Mini Stats ── */
        .clay-stats-pills-row {
          padding: 0.6rem 1.4rem 1.4rem 1.4rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .clay-mini-stat {
          background: #ffffff;
          padding: 0.85rem;
          border-radius: 14px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow:
            4px 5px 12px rgba(162, 178, 201, 0.15),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-mini-stat-num {
          font-size: 1.3rem;
          font-weight: 900;
          color: #2563eb;
        }

        .clay-mini-stat-num.live {
          color: #059669;
          font-size: 1rem;
          padding-top: 4px;
        }

        .clay-mini-stat-lbl {
          font-size: 0.65rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        /* ── Clearances List ── */
        .clay-clearance-list {
          padding: 0.6rem 1.4rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .clay-clearance-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          padding: 0.8rem 1rem;
          border-radius: 14px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            3px 4px 10px rgba(162, 178, 201, 0.12),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-clearance-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #d1fae5;
          color: #047857;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .clay-clearance-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .clay-clearance-title {
          font-size: 0.82rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-clearance-desc {
          font-size: 0.68rem;
          color: #64748b;
          font-weight: 500;
        }

        .clay-clearance-tag.full {
          background: #d1fae5;
          color: #047857;
          font-size: 0.62rem;
          font-weight: 900;
          padding: 3px 8px;
          border-radius: 8px;
          letter-spacing: 0.05em;
        }

        /* ── Session Security ── */
        .clay-session-table {
          padding: 0.6rem 1.4rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .clay-session-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          font-size: 0.78rem;
          padding: 0.4rem 0;
          border-bottom: 1px dashed rgba(162, 178, 201, 0.35);
        }

        .clay-session-row:last-child {
          border-bottom: none;
        }

        .clay-session-key {
          color: #64748b;
          font-weight: 600;
        }

        .clay-session-val {
          font-weight: 700;
          color: #1e293b;
        }

        .clay-session-val.green-text {
          color: #059669;
          font-weight: 800;
        }

        .clay-token-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .clay-token-snippet {
          background: #e2e8f0;
          padding: 2px 6px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 0.72rem;
          color: #334155;
        }

        .clay-copy-token-btn {
          background: #e2e8f0;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 6px;
          padding: 2px 6px;
          font-size: 0.65rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* ── Sign Out Center ── */
        .clay-logout-card {
          background: linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%);
          border: 2px solid rgba(239, 68, 68, 0.2);
          box-shadow:
            6px 8px 20px rgba(239, 68, 68, 0.12),
            -5px -5px 14px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(239, 68, 68, 0.08);
          padding: 1.4rem;
        }

        .clay-logout-card-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 1.2rem;
        }

        .clay-logout-warning-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #fee2e2;
          color: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          border: 2px solid #ffffff;
          flex-shrink: 0;
          box-shadow: 3px 4px 10px rgba(239, 68, 68, 0.2);
        }

        .clay-logout-card-title {
          font-size: 0.95rem;
          font-weight: 900;
          color: #991b1b;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .clay-logout-card-desc {
          font-size: 0.75rem;
          color: #7f1d1d;
          margin: 4px 0 0 0;
          line-height: 1.4;
          font-weight: 500;
        }

        .clay-logout-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .clay-big-logout-btn {
          width: 100%;
          padding: 0.95rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 2.5px solid #ffffff;
          border-radius: 16px;
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-weight: 900;
          font-size: 0.92rem;
          cursor: pointer;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow:
            5px 7px 18px rgba(185, 28, 28, 0.35),
            inset 2px 2px 4px rgba(255, 255, 255, 0.4),
            inset -2px -2px 4px rgba(0, 0, 0, 0.3);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-big-logout-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            7px 10px 24px rgba(185, 28, 28, 0.45),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -2px -2px 4px rgba(0, 0, 0, 0.35);
        }

        .clay-btn-icon {
          font-size: 1.15rem;
        }

        .clay-switch-account-btn {
          background: transparent;
          border: 1.5px dashed rgba(220, 38, 38, 0.35);
          color: #b91c1c;
          padding: 0.65rem 1rem;
          border-radius: 12px;
          font-size: 0.76rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-switch-account-btn:hover {
          background: rgba(254, 226, 226, 0.7);
          border-color: #dc2626;
        }

        /* ── Modal Backdrop ── */
        .clay-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .clay-logout-modal {
          background: #ffffff;
          border-radius: 24px;
          border: 3px solid #ffffff;
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
          padding: 1.8rem;
          max-width: 440px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: popModal 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes popModal {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .clay-modal-icon {
          font-size: 2.2rem;
          margin-bottom: 0.6rem;
        }

        .clay-modal-title {
          font-size: 1.2rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .clay-modal-desc {
          font-size: 0.84rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 1.5rem 0;
        }

        .clay-modal-btns {
          display: flex;
          gap: 12px;
          width: 100%;
        }

        .clay-modal-cancel-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          border: 2px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          font-weight: 800;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-modal-cancel-btn:hover {
          background: #f1f5f9;
        }

        .clay-modal-confirm-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          border: 2px solid #ef4444;
          background: #ef4444;
          color: #ffffff;
          font-weight: 900;
          font-size: 0.85rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
          transition: all 0.2s;
        }

        .clay-modal-confirm-btn:hover {
          background: #dc2626;
        }
      `})]})},RR=()=>{let e=localStorage.getItem(`adminRole`),[t,n]=(0,v.useState)([]),[r,i]=(0,v.useState)(!0),[a,o]=(0,v.useState)(``),[s,c]=(0,v.useState)(``),[l,u]=(0,v.useState)(`all`),[d,f]=(0,v.useState)(`all`),[p,m]=(0,v.useState)(`all`),[h,g]=(0,v.useState)(`limited`),[_,y]=(0,v.useState)(()=>{try{let e=localStorage.getItem(`adminPermissions`);return e?JSON.parse(e):null}catch{return null}}),[b,x]=(0,v.useState)({}),[S,C]=(0,v.useState)(null),[w,T]=(0,v.useState)(null),[E,D]=(0,v.useState)(null),O=e=>{x(t=>({...t,[e]:!t[e]}))},k=e=>{if(e.source!==`google_form`){let t=e.paymentScreenshotUrl||e.noDuesSlipUrl;return!!(t&&typeof t==`string`&&t.trim()&&!t.includes(`offline-receipt.png`))}let t=e.paymentScreenshotUrl;if(!t||typeof t!=`string`)return!1;let n=t.trim();return!n||n===`N/A`||n===`-`||n===`null`||n===`undefined`||n.includes(`offline-receipt.png`)?!1:n.startsWith(`http://`)||n.startsWith(`https://`)},A=e=>{if(!e)return!1;let t=(e.institution||``).toLowerCase();if(!(t.includes(`arka`)||t.includes(`jain`)||t===`aju`))return!1;let n=`${e.course||``} ${e.semester||``}`.toLowerCase();return n.includes(`b.tech`)||n.includes(`btech`)||n.includes(`b.e.`)||n.includes(`bca`)||n.includes(`diploma`)||n.includes(`polytechnic`)},j=e=>e?A(e)?600:e.expectedAmount||100:100,M=e=>{if(!e)return null;let t=(e.utrEnteredManually||e.paymentUTR||``).trim();if(!t)return null;let n=t.toUpperCase();return n===`DONE`||n===`D`||n===`N/A`||n===`NA`||n===`NONE`||n===`NIL`||n===`NO`||n===`PENDING`||n===`OK`||n===`PAID`||t===`.`||t===`-`||t.startsWith(`.-S`)||t.startsWith(`GFORM-`)||t.startsWith(`NODUES-`)?null:t},[N,ee]=(0,v.useState)(null),[te,ne]=(0,v.useState)({}),re=e=>{let t=[],n=new Set;if(e.noDuesSlipUrl&&typeof e.noDuesSlipUrl==`string`&&e.noDuesSlipUrl.trim()&&(t.push({id:`nodues`,title:`₹600 No-Dues Manual Slip`,subtitle:`Official Departmental Clearance Receipt`,url:e.noDuesSlipUrl.trim(),badge:`No-Dues Slip`,type:`slip`,icon:`📄`}),n.add(e.noDuesSlipUrl.trim())),e.collegeIdCardUrl&&typeof e.collegeIdCardUrl==`string`&&e.collegeIdCardUrl.trim()&&(t.push({id:`idcard`,title:`College ID Card`,subtitle:`${e.institution||`College`} · ${e.course||`Student`} verification`,url:e.collegeIdCardUrl.trim(),badge:`College ID`,type:`idcard`,icon:`🪪`}),n.add(e.collegeIdCardUrl.trim())),k(e)&&e.paymentScreenshotUrl&&typeof e.paymentScreenshotUrl==`string`&&e.paymentScreenshotUrl.trim()){let r=e.paymentScreenshotUrl.trim();if(!n.has(r)){let i=e.isAjuExempt||e.paymentUTR&&e.paymentUTR.startsWith(`NODUES-`)||A(e),a=M(e),o=j(e);t.push({id:`payment`,title:i?`₹600 Fee Receipt / Verification Slip`:`₹${o} Payment Screenshot`,subtitle:a?`UTR: ${a}`:`Payment Screenshot`,url:r,badge:i?`Receipt`:`Payment SS`,type:`payment`,icon:`📸`}),n.add(r)}}return t},ie=(e,t=0)=>{if(!ge)return;let n=re(e);n.length!==0&&(ne({}),ee({user:e,docs:n,activeIdx:Math.min(t,n.length-1),viewMode:`tabs`}))},ae=e=>{if(!e)return``;if(e.includes(`drive.google.com`)){let t=e.match(/[?&]id=([a-zA-Z0-9_-]+)/)||e.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);if(t&&t[1])return`${kR}/api/admin/drive-proxy?id=${t[1]}`}return e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`data:`)?e:`${kR}${e.startsWith(`/`)?``:`/`}${e}`},oe=e=>{if(!e)return``;if(e.includes(`drive.google.com`)){let t=e.match(/[?&]id=([a-zA-Z0-9_-]+)/)||e.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);if(t&&t[1])return`https://drive.google.com/file/d/${t[1]}/view`}return ae(e)};(0,v.useEffect)(()=>{se()},[]);let se=async()=>{try{let t=localStorage.getItem(`adminToken`);if(!t){o(`No active session found. Please log in.`);return}let r=await fetch(`${kR}/api/admin/users`,{headers:{Authorization:`Bearer ${t}`}});if(r.ok){let t=await r.json();n(t.users||t),t.permissions&&(y(t.permissions),localStorage.setItem(`adminPermissions`,JSON.stringify(t.permissions))),g(t.accessLevel||(e===`admin`?`full`:`limited`)),o(``)}else if(r.status===401)localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminRole`),localStorage.removeItem(`adminName`),localStorage.removeItem(`adminDesignation`),o(`Session expired. Please log in again.`);else if(r.status===403){let e=await r.json().catch(()=>({}));o(e.message||`Access restricted. You do not have permission to view registered participants.`)}else{let e=await r.json().catch(()=>({}));o(e.message||`Failed to fetch users`)}}catch{o(`Network error. Unable to connect to backend server.`)}finally{i(!1)}},ce=async(e,r)=>{if(window.confirm(`Are you sure you want to completely delete ${r}'s registration? This cannot be undone.`))try{(await fetch(`${kR}/api/admin/users/${e}`,{method:`DELETE`,headers:{Authorization:`Bearer ${localStorage.getItem(`adminToken`)}`}})).ok?n(t.filter(t=>t._id!==e)):alert(`Failed to delete user`)}catch{alert(`Network error`)}},le=async(e,t)=>{if(!e||!e.email){D({type:`error`,message:`No registered email found for this participant`});return}T(t),D(null);try{let r=localStorage.getItem(`adminToken`),i=await fetch(`${kR}/api/admin/send-email`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${r}`},body:JSON.stringify({userId:e._id||e.registrationId,type:t})}),a=await i.json();if(!i.ok)throw Error(a.message||`Failed to send email`);D({type:`success`,message:a.message||`Email sent successfully!`});let o=t===`confirmation`?{confirmationEmailSent:!0,confirmationEmailSentAt:new Date().toISOString(),confirmationEmailSentBy:a.user?.confirmationEmailSentBy||`You`}:{qrEmailSent:!0,qrEmailSentAt:new Date().toISOString(),qrEmailSentBy:a.user?.qrEmailSentBy||`You`};n(t=>t.map(t=>t._id===e._id||t.registrationId===e.registrationId?{...t,...o}:t)),N&&(N.user._id===e._id||N.user.registrationId===e.registrationId)&&ee(e=>e?{...e,user:{...e.user,...o}}:null),S&&(S._id===e._id||S.registrationId===e.registrationId)&&C(e=>e?{...e,...o}:null)}catch(e){D({type:`error`,message:e.message||`Network error occurred while sending email`})}finally{T(null)}},ue=Array.from(new Set(t.flatMap(e=>e.registeredEvents?.map(e=>e.event?.name)||[]).filter(Boolean))),P=t.filter(e=>{let t=s.toLowerCase(),n=!t||e.name?.toLowerCase().includes(t)||e.email?.toLowerCase().includes(t)||e.registrationId?.toLowerCase().includes(t)||e.institution?.toLowerCase().includes(t)||e.whatsapp?.includes(t),r=l===`all`||e.registeredEvents?.some(e=>e.event?.name===l),i=e.source||`website`,a=d===`all`||i===d,o=e.isAjuExempt||e.paymentUTR&&e.paymentUTR.startsWith(`NODUES-`)||A(e),c=e.source===`google_form`,u=k(e),f=!0;return p===`portal_image`?f=!c&&u:p===`form_image`?f=c&&u:p===`form_no_image`?f=c&&!u:p===`has_screenshot`?f=u:p===`no_screenshot`?f=!u:p===`aju_exempt`?f=o:p===`online_paid`?f=!o&&u:p===`payment_pending`&&(f=!u),n&&r&&a&&f}),de=[...P],fe=e===`admin`,pe=fe||_?.canViewParticipants!==!1,me=fe||!!(_?.canViewPhone||_?.canViewContact),he=fe||!!_?.canViewEmail,F=fe||!!_?.canSendEmail,I=fe||!!(_?.canViewFinancials||_?.canVerifyPayments),ge=fe||!!(_?.canViewDocuments||_?.canVerifyPayments),_e=fe||!!_?.canExportCSV,ve=fe;return r?(0,$.jsxs)(`div`,{className:`clay-loading-state`,children:[(0,$.jsx)(`div`,{className:`clay-loader-orb`,children:(0,$.jsx)(`span`,{className:`clay-loader-icon`,children:`⏳`})}),(0,$.jsx)(`span`,{className:`clay-loader-text`,children:`Loading participants...`}),(0,$.jsx)(`style`,{children:`
          .clay-loading-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            padding: 80px 20px;
            font-family: 'Space Grotesk', sans-serif;
          }
          .clay-loader-orb {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
            border: 3px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow:
              8px 10px 22px rgba(99, 102, 241, 0.35),
              inset 4px 4px 8px rgba(255, 255, 255, 0.5),
              inset -4px -4px 8px rgba(55, 48, 163, 0.3);
            animation: pulseOrb 1.5s ease-in-out infinite;
          }
          .clay-loader-icon { font-size: 1.6rem; }
          .clay-loader-text {
            font-weight: 700;
            color: #475569;
            font-size: 0.95rem;
          }
          @keyframes pulseOrb {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
        `})]}):a?(0,$.jsxs)(`div`,{className:`clay-error-state`,children:[(0,$.jsx)(`div`,{className:`clay-error-orb`,children:`⚠️`}),(0,$.jsx)(`span`,{style:{fontSize:`1.05rem`,fontWeight:700,color:`#dc2626`},children:a}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`14px`},children:[(0,$.jsx)(`button`,{onClick:()=>{o(``),i(!0),se()},style:{padding:`10px 18px`,borderRadius:`12px`,border:`2px solid rgba(255, 255, 255, 0.8)`,background:`#ffffff`,color:`#1e293b`,fontWeight:700,cursor:`pointer`,boxShadow:`3px 4px 10px rgba(162, 178, 201, 0.25)`,fontFamily:`'Space Grotesk', sans-serif`},children:`🔄 Try Again`}),(0,$.jsx)(`button`,{onClick:()=>{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminRole`),localStorage.removeItem(`adminName`),localStorage.removeItem(`adminDesignation`),window.location.href=`/admin/login`},style:{padding:`10px 18px`,borderRadius:`12px`,border:`none`,background:`linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)`,color:`#ffffff`,fontWeight:700,cursor:`pointer`,boxShadow:`4px 6px 14px rgba(37, 99, 235, 0.35)`,fontFamily:`'Space Grotesk', sans-serif`},children:`🔐 Log In Again`})]}),(0,$.jsx)(`style`,{children:`
          .clay-error-state {
            display: flex; flex-direction: column; align-items: center; gap: 12px;
            padding: 60px; font-family: 'Space Grotesk', sans-serif;
          }
          .clay-error-orb {
            width: 56px; height: 56px; border-radius: 50%;
            background: #fee2e2; display: flex; align-items: center; justify-content: center;
            font-size: 1.4rem; border: 2px solid rgba(239, 68, 68, 0.2);
            box-shadow: 4px 6px 14px rgba(239, 68, 68, 0.15),
              inset 2px 2px 4px rgba(255, 255, 255, 0.8),
              inset -2px -2px 4px rgba(239, 68, 68, 0.12);
          }
        `})]}):pe?(0,$.jsxs)(`div`,{className:`clay-users-page`,children:[(0,$.jsxs)(`div`,{className:`clay-page-header`,children:[(0,$.jsxs)(`div`,{className:`clay-header-left`,children:[(0,$.jsx)(`div`,{className:`clay-header-emblem`,children:`👤`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{className:`clay-page-title`,children:`REGISTERED PARTICIPANTS`}),(0,$.jsx)(`p`,{className:`clay-page-subtitle`,children:`All registrations across Technika 6.0 events`})]})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[_e&&(0,$.jsx)(`button`,{onClick:()=>{if(!_e||P.length===0)return;let e=[`Registration ID`,`Name`,`Institution`,`Course`,`Semester`,`Source`,`Events`];he&&e.push(`Email`),me&&e.push(`WhatsApp`),I&&e.push(`Payment Type`,`UTR`,`Clearance Status`);let t=P.map(e=>{let t=e.isAjuExempt||e.paymentUTR&&e.paymentUTR.startsWith(`NODUES-`),n=(e.registeredEvents||[]).map(e=>e.event?.name||e.eventId).filter(Boolean).join(`; `),r=[`"${e.registrationId||``}"`,`"${(e.name||``).replace(/"/g,`""`)}"`,`"${(e.institution||``).replace(/"/g,`""`)}"`,`"${(e.course||``).replace(/"/g,`""`)}"`,`"${(e.semester||``).replace(/"/g,`""`)}"`,`"${e.source||`website`}"`,`"${n.replace(/"/g,`""`)}"`];if(he&&r.push(`"${(e.email||``).replace(/"/g,`""`)}"`),me&&r.push(`"${(e.whatsapp||``).replace(/"/g,`""`)}"`),I){let n=j(e),i=M(e),a=k(e),o=t?`AJU (₹600 Clearance${e.noDuesSlipUrl||a?``:` - Missing Slip`})`:a?`Online Paid (₹${n})`:`Payment Pending (₹${n})`;r.push(`"${o}"`,`"${(i||``).replace(/"/g,`""`)}"`,`"${t||a?`Clearance Verified`:`Pending Screenshot`}"`)}return r.join(`,`)}),n=[e.join(`,`),...t].join(`\r
`),r=new Blob([n],{type:`text/csv;charset=utf-8;`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.setAttribute(`download`,`technika_participants_${new Date().toISOString().split(`T`)[0]}.csv`),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},className:`clay-export-csv-btn`,title:`Export filtered participant records to CSV`,children:`📥 Export CSV`}),(0,$.jsxs)(`div`,{className:`clay-count-badge`,children:[(0,$.jsx)(`span`,{className:`clay-count-num`,children:P.length}),(0,$.jsx)(`span`,{className:`clay-count-label`,children:P.length===t.length?`Total`:`of ${t.length}`})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-toolbar`,children:[(0,$.jsxs)(`div`,{className:`clay-search-box`,children:[(0,$.jsx)(`span`,{className:`clay-search-icon`,children:`🔍`}),(0,$.jsx)(`input`,{type:`text`,placeholder:`Search by name, email, ID, institution...`,value:s,onChange:e=>c(e.target.value),className:`clay-search-input`}),s&&(0,$.jsx)(`button`,{className:`clay-search-clear`,onClick:()=>c(``),children:`✕`})]}),(0,$.jsxs)(`div`,{className:`clay-filter-box`,children:[(0,$.jsx)(`span`,{className:`clay-filter-icon`,children:`📋`}),(0,$.jsxs)(`select`,{value:l,onChange:e=>u(e.target.value),className:`clay-filter-select`,children:[(0,$.jsx)(`option`,{value:`all`,children:`All Events`}),ue.map(e=>(0,$.jsx)(`option`,{value:e,children:e},e))]})]}),(0,$.jsxs)(`div`,{className:`clay-filter-box`,children:[(0,$.jsx)(`span`,{className:`clay-filter-icon`,children:`🏷️`}),(0,$.jsxs)(`select`,{value:d,onChange:e=>f(e.target.value),className:`clay-filter-select`,children:[(0,$.jsx)(`option`,{value:`all`,children:`All Sources`}),(0,$.jsx)(`option`,{value:`website`,children:`🌐 Website Portal (Frozen)`}),(0,$.jsx)(`option`,{value:`google_form`,children:`📝 Google Form`}),(0,$.jsx)(`option`,{value:`admin_import`,children:`📂 School Import`})]})]}),I&&(0,$.jsxs)(`div`,{className:`clay-filter-box`,children:[(0,$.jsx)(`span`,{className:`clay-filter-icon`,children:`💳`}),(0,$.jsxs)(`select`,{value:p,onChange:e=>m(e.target.value),className:`clay-filter-select`,title:`Filter by clearance and screenshot submission type`,children:[(0,$.jsx)(`option`,{value:`all`,children:`All Clearances`}),(0,$.jsx)(`option`,{value:`online_paid`,children:`💳 Online Paid (Screenshot Uploaded)`}),(0,$.jsx)(`option`,{value:`payment_pending`,children:`⚠️ Payment Pending (No Screenshot)`}),(0,$.jsx)(`option`,{value:`aju_exempt`,children:`🎓 AJU (₹600 Clearance)`}),(0,$.jsx)(`option`,{value:`portal_image`,children:`📸 Uploaded Screenshot (Website)`}),(0,$.jsx)(`option`,{value:`form_image`,children:`📁 Uploaded Screenshot (Form)`}),(0,$.jsx)(`option`,{value:`form_no_image`,children:`⚠️ Missing Screenshot (Form)`})]})]})]}),(0,$.jsxs)(`div`,{className:`clay-table-card`,children:[(0,$.jsx)(`div`,{className:`clay-mobile-swipe-hint`,children:(0,$.jsx)(`span`,{children:`👉 Swipe table sideways to inspect documents & verification actions`})}),(0,$.jsx)(`div`,{className:`clay-table-wrapper`,children:(0,$.jsxs)(`table`,{className:`clay-table`,children:[(0,$.jsx)(`thead`,{children:(0,$.jsxs)(`tr`,{children:[(0,$.jsx)(`th`,{children:`ID`}),(0,$.jsx)(`th`,{children:me||he?`Name & Contact`:`Name`}),(0,$.jsx)(`th`,{children:`Institution`}),(0,$.jsx)(`th`,{children:`Registered Events`}),I&&(0,$.jsx)(`th`,{children:`Payment Status`}),(F||ve)&&(0,$.jsx)(`th`,{children:`Actions`})]})}),(0,$.jsx)(`tbody`,{children:de.length===0?(0,$.jsx)(`tr`,{children:(0,$.jsx)(`td`,{colSpan:4+ +!!I+(F||ve?1:0),style:{textAlign:`center`,padding:`40px`,color:`#94a3b8`},children:(0,$.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,$.jsx)(`span`,{style:{fontSize:`2rem`},children:`📭`}),(0,$.jsx)(`span`,{style:{fontWeight:700},children:`No participants found`}),(0,$.jsx)(`span`,{style:{fontSize:`0.8rem`},children:`Try adjusting your search or filter`})]})})}):de.map((e,t)=>(0,$.jsxs)(`tr`,{className:t%2==0?`row-even`:`row-odd`,children:[(0,$.jsx)(`td`,{children:(0,$.jsx)(`span`,{className:`clay-id-badge`,children:e.registrationId})}),(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-user-cell`,children:[(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexWrap:`wrap`},children:[(0,$.jsx)(`span`,{className:`clay-user-name`,children:e.name}),e.source===`google_form`?(0,$.jsx)(`span`,{className:`source-pill source-gform`,title:`Registered via Google Form`,children:`📝 Google Form`}):e.source===`admin_import`?(0,$.jsx)(`span`,{className:`source-pill source-import`,title:`Registered via School Batch Import`,children:`📂 School Import`}):(0,$.jsx)(`span`,{className:`source-pill source-web`,title:`Registered via Website Portal`,children:`🌐 Website`})]}),he&&e.email&&(0,$.jsxs)(`div`,{className:`clay-user-email`,children:[`✉️ `,e.email]}),me&&e.whatsapp&&(0,$.jsxs)(`div`,{className:`clay-user-phone`,children:[`📞 `,e.whatsapp]}),!he&&!me&&(0,$.jsx)(`div`,{className:`clay-user-contact-masked`,title:`Contact details protected by access control policy`,children:(0,$.jsx)(`span`,{children:`🔒 Contact hidden`})})]})}),(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-inst-cell`,children:[(0,$.jsx)(`div`,{className:`clay-inst-name`,children:e.institution===`School Student`?`SRI KRISHNA PUBLIC SCHOOL`:e.institution||`N/A`}),(()=>{let t=(e.course||``).trim(),n=(e.semester||``).trim();n.toLowerCase()===`n/a`||n.toLowerCase()===`general`||n.toLowerCase()===`standard`?n=``:n&&!n.toLowerCase().startsWith(`sem`)&&!n.toLowerCase().startsWith(`class`)&&!n.toLowerCase().startsWith(`grade`)&&(n=`Sem ${n}`);let r=[t.toLowerCase()===`school student`||t.toLowerCase()===`school / college student`?``:t,n].filter(Boolean).join(` · `);return r?(0,$.jsx)(`div`,{className:`clay-inst-course`,children:r}):null})()]})}),(0,$.jsx)(`td`,{children:e.registeredEvents?.length>0?(()=>{let t=[...e.registeredEvents];if(l!==`all`){let e=t.findIndex(e=>e.event?.name===l);if(e>0){let[n]=t.splice(e,1);t.unshift(n)}}let n=!!b[e._id],r=t[0],i=t.length-1;return t.length===1?(0,$.jsx)(`div`,{className:`clay-events-list`,children:(0,$.jsx)(`span`,{className:`clay-event-chip`,children:r.event?.name||r.eventId||`Unknown`})}):n?(0,$.jsxs)(`div`,{className:`clay-events-list expanded`,children:[t.map(e=>(0,$.jsx)(`span`,{className:`clay-event-chip`,children:e.event?.name||e.eventId||`Unknown`},e._id||e.eventId)),(0,$.jsx)(`button`,{type:`button`,onClick:t=>{t.stopPropagation(),O(e._id)},className:`clay-event-less-btn`,title:`Collapse events list`,children:`Collapse ▴`})]}):(0,$.jsxs)(`div`,{className:`clay-events-list`,children:[(0,$.jsx)(`span`,{className:`clay-event-chip`,children:r.event?.name||r.eventId||`Unknown`}),(0,$.jsxs)(`button`,{type:`button`,onClick:t=>{t.stopPropagation(),O(e._id)},className:`clay-event-more-btn`,title:`Click to view all ${t.length} registered events`,children:[`+`,i]})]})})():(0,$.jsx)(`span`,{className:`clay-no-events`,children:`No events`})}),I&&(0,$.jsx)(`td`,{children:(()=>{let t=e.isAjuExempt||e.paymentUTR&&e.paymentUTR.startsWith(`NODUES-`)||A(e),n=k(e),r=M(e),i=j(e),a=null;return a=t?n||e.noDuesSlipUrl?(0,$.jsx)(`span`,{style:{background:`#fef3c7`,color:`#92400e`,fontSize:`0.68rem`,fontWeight:800,padding:`2px 8px`,borderRadius:`6px`,border:`1px solid #fde68a`,display:`inline-block`},children:`🎓 AJU (₹600 Clearance)`}):(0,$.jsx)(`span`,{style:{background:`#fff1f2`,color:`#9f1239`,fontSize:`0.68rem`,fontWeight:800,padding:`2px 8px`,borderRadius:`6px`,border:`1px solid #fecdd3`,display:`inline-block`},children:`⚠️ AJU (₹600 Slip Missing)`}):n?(0,$.jsxs)(`span`,{style:{background:`#ecfdf5`,color:`#065f46`,fontSize:`0.68rem`,fontWeight:800,padding:`2px 8px`,borderRadius:`6px`,border:`1px solid #a7f3d0`,display:`inline-block`},children:[`💳 Online Paid (₹`,i,`)`]}):(0,$.jsxs)(`span`,{style:{background:`#fff1f2`,color:`#be123c`,fontSize:`0.68rem`,fontWeight:800,padding:`2px 8px`,borderRadius:`6px`,border:`1px solid #fecdd3`,display:`inline-block`},children:[`⚠️ Payment Pending (₹`,i,`)`]}),(0,$.jsxs)(`div`,{className:`clay-ss-cell-wrap`,children:[(0,$.jsx)(`div`,{style:{marginBottom:`5px`},children:a}),n?ge?(0,$.jsx)(`button`,{onClick:()=>ie(e,0),className:`clay-view-ss-btn`,title:`Click to view payment screenshot`,children:(0,$.jsx)(`span`,{children:`📸 View SS`})}):(0,$.jsx)(`span`,{className:`clay-ss-restricted-badge`,title:`Document view restricted`,children:`📁 SS Uploaded`}):(0,$.jsx)(`span`,{className:`clay-no-ss-badge`,title:`No payment screenshot uploaded`,children:`No SS Uploaded`}),r&&(0,$.jsx)(`div`,{className:`clay-utr-info`,children:(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:`UTR:`}),` `,r]})})]})})()}),(F||ve)&&(0,$.jsx)(`td`,{children:(0,$.jsxs)(`div`,{className:`clay-actions-cell-wrap`,children:[F&&(0,$.jsxs)(`button`,{type:`button`,onClick:()=>C(e),className:`clay-send-email-btn`,title:`Send confirmation email or entry QR pass`,children:[(0,$.jsx)(UL,{size:12}),(0,$.jsx)(`span`,{children:`Send Email`})]}),(0,$.jsx)(`div`,{className:`clay-email-status-pills`,children:e.confirmationEmailSent?(0,$.jsxs)(`span`,{className:`clay-email-pill pill-sent`,title:`Confirmation sent: ${new Date(e.confirmationEmailSentAt).toLocaleString()}${e.confirmationEmailSentBy?` by ${e.confirmationEmailSentBy}`:``}`,children:[(0,$.jsx)(pL,{size:10}),` Confirmed`]}):(0,$.jsxs)(`span`,{className:`clay-email-pill pill-pending`,title:`Confirmation email not sent yet`,children:[(0,$.jsx)(_L,{size:10}),` Confirm Pending`]})}),ve&&(0,$.jsx)(`button`,{onClick:()=>ce(e._id,e.name),className:`clay-delete-btn`,title:`Cancel and delete this registration`,children:`🗑️ Cancel`})]})})]},e._id))})]})})]}),N&&(0,$.jsx)(`div`,{className:`clay-modal-overlay`,onClick:()=>ee(null),children:(0,$.jsxs)(`div`,{className:`clay-modal-card clay-doc-modal-card`,onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(`div`,{className:`clay-modal-header`,children:[(0,$.jsxs)(`div`,{className:`clay-modal-title-group`,children:[(0,$.jsxs)(`div`,{className:`clay-modal-title`,children:[`📸 Verification Documents`,(0,$.jsx)(`span`,{className:`clay-modal-user-chip`,children:N.user.name})]}),(0,$.jsxs)(`div`,{className:`clay-modal-sub`,children:[`Reg ID: `,(0,$.jsx)(`strong`,{style:{color:`#2563eb`},children:N.user.registrationId}),`\xA0·\xA0`,N.user.institution,N.user.course&&` · ${N.user.course}`]})]}),(0,$.jsxs)(`div`,{className:`clay-modal-actions-top`,children:[N.docs.length>1&&(0,$.jsxs)(`div`,{className:`clay-viewmode-toggle`,children:[(0,$.jsx)(`button`,{className:`clay-viewmode-btn ${N.viewMode===`tabs`?`active`:``}`,onClick:()=>ee({...N,viewMode:`tabs`}),title:`Single document focus view with tab selection`,children:`Single View`}),(0,$.jsx)(`button`,{className:`clay-viewmode-btn ${N.viewMode===`side-by-side`?`active`:``}`,onClick:()=>ee({...N,viewMode:`side-by-side`}),title:`View both screenshots side-by-side simultaneously`,children:`⊞ Side-by-Side (Both)`})]}),(0,$.jsx)(`button`,{className:`clay-modal-close`,onClick:()=>ee(null),title:`Close (Esc)`,children:`✕`})]})]}),N.docs.length>1&&(0,$.jsx)(`div`,{className:`clay-doc-tabs-bar`,children:N.docs.map((e,t)=>(0,$.jsxs)(`button`,{className:`clay-doc-tab-btn ${N.activeIdx===t&&N.viewMode===`tabs`?`active`:``}`,onClick:()=>ee({...N,activeIdx:t,viewMode:`tabs`}),children:[(0,$.jsx)(`span`,{className:`clay-doc-tab-icon`,children:e.icon}),(0,$.jsx)(`span`,{className:`clay-doc-tab-title`,children:e.title}),(0,$.jsxs)(`span`,{className:`clay-doc-tab-pill`,children:[t+1,` of `,N.docs.length]})]},e.id))}),(0,$.jsx)(`div`,{className:`clay-modal-body clay-doc-modal-body`,children:N.viewMode===`side-by-side`&&N.docs.length>1?(0,$.jsx)(`div`,{className:`clay-side-by-side-grid`,children:N.docs.map(e=>(0,$.jsxs)(`div`,{className:`clay-side-card`,children:[(0,$.jsxs)(`div`,{className:`clay-side-card-head`,children:[(0,$.jsxs)(`div`,{className:`clay-side-head-left`,children:[(0,$.jsx)(`span`,{className:`clay-side-doc-icon`,children:e.icon}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`clay-side-title`,children:e.title}),(0,$.jsx)(`div`,{className:`clay-side-sub`,children:e.subtitle})]})]}),(0,$.jsx)(`a`,{href:oe(e.url),target:`_blank`,rel:`noreferrer`,className:`clay-open-full-btn`,title:`Open original in Google Drive or full resolution`,children:`Open Original ↗`})]}),(0,$.jsx)(`div`,{className:`clay-side-img-box`,children:te[e.url]?(0,$.jsxs)(`div`,{className:`clay-drive-access-notice compact`,children:[(0,$.jsx)(`div`,{className:`clay-drive-notice-icon`,children:`🔒`}),(0,$.jsx)(`div`,{className:`clay-drive-notice-title`,children:`Drive Permission Required`}),(0,$.jsx)(`p`,{className:`clay-drive-notice-desc`,children:`Folder is Restricted on Drive.`}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`6px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>ne({}),className:`clay-drive-retry-btn`,style:{padding:`5px 12px`,fontSize:`0.75rem`},children:`🔄 Retry`}),(0,$.jsx)(`a`,{href:oe(e.url),target:`_blank`,rel:`noreferrer`,className:`clay-drive-open-btn`,style:{padding:`5px 12px`,fontSize:`0.75rem`},children:`Open in Drive ↗`})]})]}):(0,$.jsx)(`img`,{src:ae(e.url),alt:e.title,className:`clay-modal-img`,loading:`lazy`,referrerPolicy:`no-referrer`,onError:()=>ne(t=>({...t,[e.url]:!0}))})})]},e.id))}):(()=>{let e=N.docs[N.activeIdx]||N.docs[0];return(0,$.jsxs)(`div`,{className:`clay-single-doc-container`,children:[(0,$.jsxs)(`div`,{className:`clay-single-doc-head`,children:[(0,$.jsxs)(`div`,{className:`clay-single-head-info`,children:[(0,$.jsx)(`span`,{className:`clay-single-icon`,children:e.icon}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`clay-single-doc-title`,children:e.title}),(0,$.jsx)(`div`,{className:`clay-single-doc-sub`,children:e.subtitle})]})]}),(0,$.jsxs)(`div`,{className:`clay-single-head-right`,children:[N.docs.length>1&&(0,$.jsxs)(`div`,{className:`clay-nav-arrows`,children:[(0,$.jsx)(`button`,{className:`clay-nav-arrow-btn`,disabled:N.activeIdx===0,onClick:()=>ee({...N,activeIdx:Math.max(0,N.activeIdx-1)}),title:`Previous document`,children:`← Prev`}),(0,$.jsxs)(`span`,{className:`clay-nav-page-num`,children:[N.activeIdx+1,` / `,N.docs.length]}),(0,$.jsx)(`button`,{className:`clay-nav-arrow-btn`,disabled:N.activeIdx===N.docs.length-1,onClick:()=>ee({...N,activeIdx:Math.min(N.docs.length-1,N.activeIdx+1)}),title:`Next document`,children:`Next →`})]}),(0,$.jsx)(`a`,{href:oe(e.url),target:`_blank`,rel:`noreferrer`,className:`clay-open-full-btn`,title:`Open original high-res image or in Google Drive`,children:`Open Original ↗`})]})]}),(0,$.jsx)(`div`,{className:`clay-single-img-wrap`,children:te[e.url]?(0,$.jsxs)(`div`,{className:`clay-drive-access-notice`,children:[(0,$.jsx)(`div`,{className:`clay-drive-notice-icon`,children:`🔒`}),(0,$.jsx)(`div`,{className:`clay-drive-notice-title`,children:`Google Drive Access Required`}),(0,$.jsxs)(`p`,{className:`clay-drive-notice-desc`,children:[`This screenshot is stored in your Google Form responses folder on Google Drive. Because the folder permissions are currently `,(0,$.jsx)(`strong`,{children:`Restricted`}),`, Google blocks third-party previews.`]}),(0,$.jsxs)(`div`,{className:`clay-drive-notice-actions`,style:{display:`flex`,gap:`10px`,justifyContent:`center`,flexWrap:`wrap`,marginBottom:`1.25rem`},children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>ne({}),className:`clay-drive-retry-btn`,children:`🔄 Reload Preview`}),(0,$.jsx)(`a`,{href:oe(e.url),target:`_blank`,rel:`noreferrer`,className:`clay-drive-open-btn`,children:`↗ Open File in Google Drive`})]}),(0,$.jsxs)(`div`,{className:`clay-drive-guide-card`,children:[(0,$.jsx)(`div`,{className:`clay-guide-head`,children:`💡 How to enable instant previews for all coordinators:`}),(0,$.jsxs)(`ol`,{className:`clay-guide-steps`,children:[(0,$.jsx)(`li`,{children:`Open Google Drive using the account that created the Google Form.`}),(0,$.jsxs)(`li`,{children:[`Locate the `,(0,$.jsx)(`strong`,{children:`(File responses)`}),` folder for this form.`]}),(0,$.jsxs)(`li`,{children:[`Right click → `,(0,$.jsx)(`strong`,{children:`Share`}),` → change General access to `,(0,$.jsx)(`strong`,{children:`"Anyone with the link (Viewer)"`}),`.`]})]})]})]}):(0,$.jsx)(`img`,{src:ae(e.url),alt:e.title,className:`clay-modal-img`,referrerPolicy:`no-referrer`,onError:()=>ne(t=>({...t,[e.url]:!0}))})})]})})()}),(0,$.jsxs)(`div`,{className:`clay-modal-footer`,children:[(()=>{let e=N.user,t=M(e),n=j(e),r=A(e)||e.isAjuExempt;return(0,$.jsxs)($.Fragment,{children:[t&&(0,$.jsxs)(`div`,{className:`clay-doc-meta-item`,children:[(0,$.jsx)(`span`,{className:`meta-label`,children:`Entered UTR:`}),(0,$.jsx)(`span`,{className:`meta-val`,children:t})]}),(0,$.jsxs)(`div`,{className:`clay-doc-meta-item`,children:[(0,$.jsx)(`span`,{className:`meta-label`,children:`Fee Amount:`}),(0,$.jsxs)(`span`,{className:`meta-val`,children:[`₹`,n]})]}),(0,$.jsxs)(`div`,{className:`clay-doc-meta-item`,children:[(0,$.jsx)(`span`,{className:`meta-label`,children:`Status:`}),(0,$.jsx)(`span`,{className:`meta-badge status-${(e.verificationStatus||``).toLowerCase()}`,children:k(e)?`VERIFIED`:`PENDING PROOF`})]}),r&&(0,$.jsx)(`div`,{className:`clay-doc-meta-item`,children:(0,$.jsx)(`span`,{className:`meta-badge badge-exempt`,children:`🎓 AJU (₹600 Clearance)`})})]})})(),F&&(0,$.jsx)(`div`,{className:`clay-modal-footer-email-actions`,children:(0,$.jsx)(`button`,{type:`button`,disabled:w!==null,onClick:()=>le(N.user,`confirmation`),className:`clay-footer-action-btn ${N.user.confirmationEmailSent?`btn-success`:`btn-primary`}`,title:`Verify screenshot and send confirmation email with registered events list`,children:w===`confirmation`?(0,$.jsxs)(`span`,{className:`btn-loading`,children:[(0,$.jsx)(rR,{size:13,className:`spin`}),` Sending...`]}):N.user.confirmationEmailSent?(0,$.jsxs)(`span`,{children:[(0,$.jsx)(pL,{size:13}),` Confirmed (Resend)`]}):(0,$.jsxs)(`span`,{children:[(0,$.jsx)(sR,{size:13}),` Verify & Send Confirmation`]})})})]})]})}),S&&(0,$.jsx)(`div`,{className:`clay-modal-overlay`,onClick:()=>C(null),children:(0,$.jsxs)(`div`,{className:`clay-modal-card clay-email-dialog-card`,onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(`div`,{className:`clay-modal-header`,children:[(0,$.jsxs)(`div`,{className:`clay-modal-title-group`,children:[(0,$.jsxs)(`div`,{className:`clay-modal-title`,children:[(0,$.jsx)(UL,{size:20,color:`#2563eb`}),(0,$.jsx)(`span`,{children:`Send Email to Participant`}),(0,$.jsx)(`span`,{className:`clay-modal-user-chip`,children:S.name})]}),(0,$.jsxs)(`div`,{className:`clay-modal-sub`,children:[`Reg ID: `,(0,$.jsx)(`strong`,{style:{color:`#2563eb`},children:S.registrationId}),`\xA0·\xA0`,S.email,`\xA0·\xA0`,S.institution]})]}),(0,$.jsx)(`button`,{className:`clay-modal-close`,onClick:()=>C(null),title:`Close`,children:`✕`})]}),(0,$.jsxs)(`div`,{className:`clay-email-dialog-body`,children:[(0,$.jsxs)(`div`,{className:`clay-email-events-recap`,children:[(0,$.jsxs)(`div`,{className:`clay-events-recap-head`,children:[(0,$.jsxs)(`span`,{children:[`Registered Events (`,S.registeredEvents?.length||0,`):`]}),A(S)||S.isAjuExempt?(0,$.jsx)(`span`,{className:`recap-exempt-badge`,children:`🎓 AJU (₹600 Clearance)`}):k(S)?(0,$.jsxs)(`span`,{className:`recap-paid-badge`,children:[`💳 Paid (₹`,j(S),`)`]}):(0,$.jsxs)(`span`,{className:`recap-pending-badge`,style:{background:`#fee2e2`,color:`#991b1b`,padding:`2px 8px`,borderRadius:`6px`,fontWeight:800,fontSize:`0.75rem`},children:[`⚠️ Payment Pending (₹`,j(S),`)`]})]}),(0,$.jsx)(`div`,{className:`clay-events-recap-chips`,children:S.registeredEvents?.length>0?S.registeredEvents.map((e,t)=>(0,$.jsx)(`span`,{className:`recap-chip`,children:e.event?.name||e.eventId||`Unknown Event`},t)):(0,$.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#94a3b8`},children:`No registered events`})})]}),(0,$.jsxs)(`div`,{className:`clay-email-types-grid`,children:[(0,$.jsxs)(`div`,{className:`clay-email-type-card`,children:[(0,$.jsxs)(`div`,{className:`email-type-header`,children:[(0,$.jsx)(`div`,{className:`email-type-icon-box type-confirm`,children:(0,$.jsx)(dR,{size:22,color:`#047857`})}),(0,$.jsxs)(`div`,{className:`email-type-info`,children:[(0,$.jsx)(`div`,{className:`email-type-title`,children:`1. Registration Confirmation Email`}),(0,$.jsx)(`div`,{className:`email-type-subtitle`,children:`For faculty coordinators after checking Payment SS`})]})]}),(0,$.jsxs)(`p`,{className:`email-type-desc`,children:[`Confirms that registration has been verified and lists `,(0,$.jsxs)(`strong`,{children:[`all `,S.registeredEvents?.length||0,` registered events`]}),`, schedule highlights, rules, and desk instructions.`]}),(0,$.jsxs)(`div`,{className:`email-type-status-row`,children:[(0,$.jsx)(`span`,{className:`status-label`,children:`Status:`}),S.confirmationEmailSent?(0,$.jsxs)(`span`,{className:`status-val sent`,children:[(0,$.jsx)(pL,{size:13}),` Sent on `,new Date(S.confirmationEmailSentAt).toLocaleDateString(),S.confirmationEmailSentBy&&` by ${S.confirmationEmailSentBy}`]}):(0,$.jsxs)(`span`,{className:`status-val pending`,children:[(0,$.jsx)(_L,{size:13}),` Not sent yet`]})]}),(0,$.jsx)(`button`,{type:`button`,disabled:w!==null,onClick:()=>le(S,`confirmation`),className:`clay-email-send-action-btn btn-send-confirm`,children:w===`confirmation`?(0,$.jsxs)(`span`,{className:`btn-loading`,children:[(0,$.jsx)(rR,{size:14,className:`spin`}),` Sending Confirmation...`]}):S.confirmationEmailSent?(0,$.jsxs)(`span`,{children:[(0,$.jsx)(rR,{size:14}),` Resend Confirmation Email`]}):(0,$.jsxs)(`span`,{children:[(0,$.jsx)(sR,{size:14}),` Send Confirmation Email`]})})]}),(0,$.jsxs)(`div`,{className:`clay-email-type-card disabled-card`,children:[(0,$.jsxs)(`div`,{className:`email-type-header`,children:[(0,$.jsx)(`div`,{className:`email-type-icon-box type-qr`,style:{opacity:.6},children:(0,$.jsx)(tR,{size:22,color:`#64748b`})}),(0,$.jsxs)(`div`,{className:`email-type-info`,children:[(0,$.jsxs)(`div`,{className:`email-type-title`,style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,$.jsx)(`span`,{children:`2. Entry QR Pass Email`}),(0,$.jsx)(`span`,{style:{fontSize:`0.65rem`,background:`#f1f5f9`,color:`#64748b`,padding:`2px 8px`,borderRadius:`6px`,border:`1px solid #cbd5e1`},children:`Coming Soon`})]}),(0,$.jsx)(`div`,{className:`email-type-subtitle`,children:`Official Campus Entry & Security Check-In`})]})]}),(0,$.jsx)(`p`,{className:`email-type-desc`,style:{color:`#94a3b8`},children:`Digital entry QR pass system will be activated closer to the fest dates for campus entry gate scanning.`}),(0,$.jsxs)(`div`,{className:`email-type-status-row`,children:[(0,$.jsx)(`span`,{className:`status-label`,children:`Availability:`}),(0,$.jsxs)(`span`,{className:`status-val pending`,children:[(0,$.jsx)(_L,{size:13}),` Activating Soon`]})]}),(0,$.jsx)(`button`,{type:`button`,disabled:!0,className:`clay-email-send-action-btn`,style:{background:`#e2e8f0`,color:`#94a3b8`,border:`1px solid #cbd5e1`,cursor:`not-allowed`},children:(0,$.jsx)(`span`,{children:`🔒 QR Pass Coming Soon`})})]})]})]})]})}),E&&(0,$.jsxs)(`div`,{className:`clay-email-floating-toast toast-${E.type}`,children:[(0,$.jsx)(`div`,{className:`toast-icon`,children:E.type===`success`?(0,$.jsx)(pL,{size:18}):(0,$.jsx)(dL,{size:18})}),(0,$.jsx)(`div`,{className:`toast-msg`,children:E.message}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>D(null),className:`toast-close`,children:`✕`})]}),(0,$.jsx)(`style`,{children:`
        /* Source Badges */
        .source-pill {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .source-web {
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        }
        .source-gform {
          background: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
        }
        .source-import {
          background: #faf5ff;
          color: #7e22ce;
          border: 1px solid #e9d5ff;
        }

        .clay-users-page {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        /* ── Page Header ── */
        .clay-page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .clay-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-header-emblem {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          border: 2.5px solid #ffffff;
          flex-shrink: 0;
          box-shadow:
            6px 8px 18px rgba(37, 99, 235, 0.3),
            inset 3px 3px 6px rgba(255, 255, 255, 0.5),
            inset -3px -3px 6px rgba(15, 23, 42, 0.3);
        }

        .clay-page-title {
          font-size: 1.5rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .clay-page-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin: 2px 0 0 0;
          font-weight: 500;
        }

        .clay-count-badge {
          display: flex;
          align-items: baseline;
          gap: 6px;
          background: #f4f8fd;
          padding: 8px 16px;
          border-radius: 16px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
        }

        .clay-count-num {
          font-size: 1.5rem;
          font-weight: 900;
          color: #2563eb;
        }

        .clay-count-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
        }

        /* ── Toolbar ── */
        .clay-toolbar {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .clay-search-box {
          flex: 1;
          min-width: 250px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #e2eaf4;
          border-radius: 16px;
          padding: 6px 14px;
          border: 2px solid transparent;
          box-shadow:
            inset 3px 3px 6px rgba(162, 178, 201, 0.45),
            inset -3px -3px 6px rgba(255, 255, 255, 0.9);
          transition: all 0.2s;
        }

        .clay-search-box:focus-within {
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow:
            0 0 0 3px rgba(59, 130, 246, 0.15),
            inset 2px 2px 4px rgba(162, 178, 201, 0.2),
            inset -2px -2px 4px rgba(255, 255, 255, 0.9);
        }

        .clay-search-icon { font-size: 0.9rem; flex-shrink: 0; }

        .clay-search-input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          font-family: inherit;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1e293b;
        }

        .clay-search-input::placeholder { color: #94a3b8; font-weight: 500; }

        .clay-search-clear {
          width: 22px; height: 22px; border-radius: 50%;
          border: none; background: rgba(100, 116, 139, 0.12);
          color: #64748b; cursor: pointer; font-size: 0.7rem;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.15s;
        }
        .clay-search-clear:hover { background: rgba(100, 116, 139, 0.2); }

        .clay-filter-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #e2eaf4;
          border-radius: 16px;
          padding: 6px 14px;
          border: 2px solid transparent;
          box-shadow:
            inset 3px 3px 6px rgba(162, 178, 201, 0.45),
            inset -3px -3px 6px rgba(255, 255, 255, 0.9);
          transition: all 0.2s;
        }

        .clay-filter-box:focus-within {
          border-color: #3b82f6;
          background: #ffffff;
        }

        .clay-filter-icon { font-size: 0.9rem; }

        .clay-filter-select {
          border: none;
          background: transparent;
          outline: none;
          font-family: inherit;
          font-size: 0.82rem;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          padding-right: 8px;
        }

        /* ── Data Table Card ── */
        .clay-table-card {
          background: #eef3f9;
          border-radius: 22px;
          border: 2.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            12px 16px 36px rgba(162, 178, 201, 0.35),
            -10px -10px 28px rgba(255, 255, 255, 0.85),
            inset 3px 3px 8px rgba(255, 255, 255, 0.85),
            inset -3px -3px 8px rgba(162, 178, 201, 0.15);
          overflow: hidden;
        }

        /* ── Mobile Swipe Hint ── */
        .clay-mobile-swipe-hint {
          display: none;
        }

        .clay-table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          width: 100%;
        }

        .clay-table {
          width: 100%;
          min-width: 860px;
          border-collapse: collapse;
          text-align: left;
        }

        .clay-table thead tr {
          background: #f4f8fd;
          border-bottom: 2px solid rgba(255, 255, 255, 0.7);
        }

        .clay-table th {
          padding: 0.9rem 1rem;
          font-size: 0.72rem;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .clay-table td {
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          color: #334155;
          vertical-align: top;
        }

        .clay-table tbody tr {
          border-bottom: 1.5px solid rgba(226, 234, 244, 0.8);
          transition: all 0.2s;
        }

        .clay-table tbody tr:hover {
          background: rgba(244, 248, 253, 0.7);
        }

        .clay-table tbody tr.row-even {
          background: rgba(255, 255, 255, 0.25);
        }

        .clay-table tbody tr.row-odd {
          background: transparent;
        }

        .clay-table tbody tr:last-child {
          border-bottom: none;
        }

        /* ── Table Cell Styles ── */
        .clay-id-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          color: #2563eb;
          background: #dbeafe;
          padding: 3px 10px;
          border-radius: 8px;
          font-family: 'Space Mono', monospace, 'Space Grotesk', sans-serif;
          box-shadow:
            inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.8),
            inset -1.5px -1.5px 3px rgba(37, 99, 235, 0.12),
            2px 2px 5px rgba(37, 99, 235, 0.08);
        }

        .clay-user-contact-masked {
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 2px;
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px dashed #cbd5e1;
          width: fit-content;
        }
        .clay-export-csv-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          color: #0f172a;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 2px 3px 8px rgba(148, 163, 184, 0.15);
        }
        .clay-export-csv-btn:hover {
          background: #f8fafc;
          border-color: #3b82f6;
          color: #2563eb;
          transform: translateY(-1px);
        }
        .clay-ss-restricted-badge {
          font-size: 0.7rem;
          color: #64748b;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
        }
        .clay-user-cell { display: flex; flex-direction: column; gap: 2px; }
        .clay-user-name { font-weight: 800; font-size: 0.88rem; color: #0f172a; }
        .clay-user-email { font-size: 0.78rem; color: #64748b; }
        .clay-user-phone { font-size: 0.75rem; color: #94a3b8; margin-top: 1px; }

        .clay-inst-cell { display: flex; flex-direction: column; gap: 2px; }
        .clay-inst-name { font-weight: 700; font-size: 0.82rem; color: #1e293b; }
        .clay-inst-course { font-size: 0.75rem; color: #94a3b8; }

        .clay-events-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 5px;
        }

        .clay-event-chip {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 8px;
          background: #ede9fe;
          color: #6d28d9;
          border: 1.5px solid rgba(255, 255, 255, 0.8);
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.8),
            inset -1px -1px 2px rgba(109, 40, 217, 0.08),
            2px 2px 5px rgba(109, 40, 217, 0.06);
        }

        .clay-event-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 8px;
          background: #ede9fe;
          color: #6d28d9;
          border: 1.5px solid rgba(109, 40, 217, 0.25);
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.9),
            2px 2px 5px rgba(109, 40, 217, 0.12);
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }

        .clay-event-more-btn:hover {
          background: #ddd6fe;
          color: #5b21b6;
          border-color: rgba(109, 40, 217, 0.45);
          transform: translateY(-1px);
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.9),
            2px 4px 8px rgba(109, 40, 217, 0.2);
        }

        .clay-event-less-btn {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 8px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #cbd5e1;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }

        .clay-event-less-btn:hover {
          background: #e2e8f0;
          color: #334155;
        }

        .clay-no-ss-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 3px 9px;
          border-radius: 8px;
          background: #fef2f2;
          color: #dc2626;
          border: 1.5px solid #fecaca;
          box-shadow: 2px 2px 5px rgba(220, 38, 38, 0.08);
          margin-bottom: 4px;
        }

        .clay-no-events {
          font-size: 0.78rem;
          color: #94a3b8;
          font-style: italic;
        }

        .clay-view-ss-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 13px;
          border-radius: 11px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          background: #dbeafe;
          color: #2563eb;
          font-weight: 800;
          font-size: 0.72rem;
          cursor: pointer;
          text-transform: uppercase;
          margin-bottom: 5px;
          box-shadow:
            3px 4px 10px rgba(37, 99, 235, 0.14),
            inset 2px 2px 4px rgba(255, 255, 255, 0.85),
            inset -2px -2px 4px rgba(37, 99, 235, 0.1);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-view-ss-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            4px 6px 14px rgba(37, 99, 235, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(37, 99, 235, 0.14);
        }

        .clay-multi-ss-cell {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .clay-multi-ss-main-btn {
          background: linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%);
          color: #1d4ed8;
          border-color: rgba(255, 255, 255, 0.95);
        }

        .clay-ss-count-chip {
          background: #2563eb;
          color: #ffffff;
          font-size: 0.62rem;
          font-weight: 900;
          padding: 1px 6px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
          box-shadow: 0 1px 3px rgba(37, 99, 235, 0.3);
        }

        .clay-ss-quick-tags {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 4px;
        }

        .clay-ss-mini-tag {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 2px 7px;
          font-size: 0.65rem;
          font-weight: 800;
          border-radius: 7px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow:
            1.5px 2px 4px rgba(162, 178, 201, 0.25),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-ss-mini-tag:hover {
          transform: translateY(-1px);
        }

        .clay-ss-mini-tag.tag-slip {
          background: #fef3c7;
          color: #b45309;
          border-color: #fde68a;
        }

        .clay-ss-mini-tag.tag-idcard {
          background: #ecfdf5;
          color: #047857;
          border-color: #a7f3d0;
        }

        .clay-ss-mini-tag.tag-payment {
          background: #eff6ff;
          color: #1d4ed8;
          border-color: #bfdbfe;
        }

        .clay-utr-info {
          font-size: 0.7rem;
          color: #64748b;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .clay-delete-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 12px;
          border-radius: 10px;
          border: 2px solid rgba(239, 68, 68, 0.15);
          background: #fee2e2;
          color: #dc2626;
          font-weight: 700;
          font-size: 0.72rem;
          cursor: pointer;
          text-transform: uppercase;
          box-shadow:
            3px 4px 10px rgba(239, 68, 68, 0.1),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(239, 68, 68, 0.08);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-delete-btn:hover {
          transform: translateY(-1px);
          background: #fecaca;
          box-shadow:
            4px 6px 14px rgba(239, 68, 68, 0.15),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(239, 68, 68, 0.12);
        }

        /* ── Multi-Screenshot Modal ── */
        .clay-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          padding: 20px;
        }

        .clay-modal-card {
          background: #eef3f9;
          border-radius: 24px;
          border: 2.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            20px 24px 50px rgba(162, 178, 201, 0.45),
            -16px -16px 40px rgba(255, 255, 255, 0.9),
            inset 3px 3px 8px rgba(255, 255, 255, 0.85),
            inset -3px -3px 8px rgba(162, 178, 201, 0.2);
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .clay-doc-modal-card {
          width: 96vw;
          max-width: 1040px;
          max-height: 94vh;
        }

        .clay-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.4rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.4);
          gap: 16px;
        }

        .clay-modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .clay-modal-title {
          font-weight: 800;
          font-size: 1.05rem;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .clay-modal-user-chip {
          background: #dbeafe;
          color: #1d4ed8;
          padding: 2px 10px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }

        .clay-modal-sub {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
        }

        .clay-modal-actions-top {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .clay-viewmode-toggle {
          display: flex;
          background: #e2eaf4;
          padding: 3px;
          border-radius: 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: inset 1px 1px 3px rgba(162, 178, 201, 0.3);
        }

        .clay-viewmode-btn {
          border: none;
          background: transparent;
          color: #64748b;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .clay-viewmode-btn.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .clay-modal-close {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.8);
          background: #e2eaf4;
          color: #64748b; font-size: 0.85rem; font-weight: 900;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.3),
            3px 3px 8px rgba(162, 178, 201, 0.2);
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .clay-modal-close:hover {
          background: #fee2e2;
          color: #dc2626;
          transform: scale(1.05);
        }

        /* Tabs Bar */
        .clay-doc-tabs-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 1.4rem;
          background: rgba(255, 255, 255, 0.6);
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.8);
          overflow-x: auto;
        }

        .clay-doc-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          font-weight: 700;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .clay-doc-tab-btn:hover {
          background: #ffffff;
          color: #0f172a;
        }

        .clay-doc-tab-btn.active {
          background: #ffffff;
          border-color: #2563eb;
          color: #2563eb;
          box-shadow:
            3px 4px 12px rgba(37, 99, 235, 0.12),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
        }

        .clay-doc-tab-pill {
          background: #e2e8f0;
          color: #64748b;
          font-size: 0.65rem;
          padding: 1px 6px;
          border-radius: 9999px;
          font-weight: 800;
        }

        .clay-doc-tab-btn.active .clay-doc-tab-pill {
          background: #dbeafe;
          color: #1d4ed8;
        }

        /* Modal Body */
        .clay-doc-modal-body {
          padding: 1.25rem 1.4rem;
          overflow-y: auto;
          flex-grow: 1;
        }

        /* Side-by-Side Dual View */
        .clay-side-by-side-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }

        .clay-side-card {
          background: #ffffff;
          border-radius: 18px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          padding: 14px;
          display: flex;
          flex-direction: column;
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
        }

        .clay-side-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 10px;
        }

        .clay-side-head-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clay-side-doc-icon {
          font-size: 1.3rem;
        }

        .clay-side-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-side-sub {
          font-size: 0.72rem;
          color: #64748b;
        }

        .clay-side-img-box {
          width: 100%;
          min-height: 280px;
          max-height: 55vh;
          background: #f1f5f9;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
        }

        .clay-side-img-box img {
          width: 100%;
          height: 100%;
          max-height: 55vh;
          object-fit: contain;
        }

        /* Single Document View */
        .clay-single-doc-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .clay-single-doc-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 12px 16px;
          border-radius: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 2px 4px 10px rgba(162, 178, 201, 0.15);
        }

        .clay-single-head-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .clay-single-icon {
          font-size: 1.5rem;
        }

        .clay-single-doc-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-single-doc-sub {
          font-size: 0.75rem;
          color: #64748b;
        }

        .clay-single-head-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-nav-arrows {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          padding: 3px 6px;
          border-radius: 10px;
        }

        .clay-nav-arrow-btn {
          border: none;
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 7px;
          font-size: 0.72rem;
          font-weight: 800;
          color: #2563eb;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 0.15s ease;
        }

        .clay-nav-arrow-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          color: #94a3b8;
        }

        .clay-nav-page-num {
          font-size: 0.72rem;
          font-weight: 800;
          color: #475569;
          padding: 0 4px;
        }

        .clay-open-full-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.74rem;
          font-weight: 800;
          color: #2563eb;
          text-decoration: none;
          padding: 5px 11px;
          border-radius: 9px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          transition: all 0.15s ease;
        }

        .clay-open-full-btn:hover {
          background: #dbeafe;
          transform: translateY(-1px);
        }

        .clay-single-img-wrap {
          width: 100%;
          min-height: 380px;
          max-height: 65vh;
          background: #f8fafc;
          border-radius: 16px;
          border: 2px solid #ffffff;
          box-shadow:
            inset 2px 2px 6px rgba(162, 178, 201, 0.2),
            5px 6px 16px rgba(162, 178, 201, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 8px;
        }

        .clay-modal-img {
          max-width: 100%;
          max-height: 65vh;
          object-fit: contain;
          border-radius: 10px;
        }

        /* Google Drive Access Notice Styling */
        .clay-drive-access-notice {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 520px;
          margin: auto;
        }

        .clay-drive-access-notice.compact {
          padding: 1.2rem 1rem;
        }

        .clay-drive-notice-icon {
          font-size: 2.2rem;
          margin-bottom: 0.6rem;
        }

        .clay-drive-notice-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 0.4rem;
        }

        .clay-drive-notice-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.2rem;
        }

        .clay-drive-notice-actions {
          margin-bottom: 1.2rem;
        }

        .clay-drive-retry-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 12px;
          background: #10b981;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          transition: all 0.2s;
        }

        .clay-drive-retry-btn:hover {
          background: #059669;
          transform: translateY(-1px);
        }

        .clay-drive-open-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 12px;
          background: #2563eb;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          transition: all 0.2s;
        }

        .clay-drive-open-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .clay-drive-guide-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.9rem 1.1rem;
          text-align: left;
          width: 100%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .clay-guide-head {
          font-size: 0.78rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .clay-guide-steps {
          margin: 0;
          padding-left: 1.2rem;
          font-size: 0.75rem;
          color: #475569;
          line-height: 1.55;
        }

        .clay-guide-steps li {
          margin-bottom: 0.2rem;
        }

        /* Modal Footer */
        .clay-modal-footer {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0.9rem 1.4rem;
          background: rgba(255, 255, 255, 0.6);
          border-top: 1.5px solid rgba(255, 255, 255, 0.8);
          flex-wrap: wrap;
        }

        .clay-doc-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
        }

        .meta-label {
          color: #64748b;
          font-weight: 700;
        }

        .meta-val {
          color: #0f172a;
          font-weight: 800;
          font-family: monospace;
          background: #ffffff;
          padding: 2px 6px;
          border-radius: 5px;
          border: 1px solid #e2e8f0;
        }

        .meta-badge {
          padding: 2px 8px;
          border-radius: 9999px;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .meta-badge.status-success {
          background: #dcfce7;
          color: #15803d;
          border: 1px solid #86efac;
        }

        .meta-badge.status-pending {
          background: #fef9c3;
          color: #a16207;
          border: 1px solid #fde047;
        }

        .meta-badge.status-failed {
          background: #fee2e2;
          color: #b91c1c;
          border: 1px solid #fca5a5;
        }

        .meta-badge.badge-exempt {
          background: #fdf4ff;
          color: #9333ea;
          border: 1px solid #e9d5ff;
        }

        /* ── Clearance Source Tag ── */
        .clay-clearance-src-tag {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .clay-clearance-src-tag.tag-cloudinary {
          background: #e0f2fe;
          color: #0369a1;
          border: 1px solid #bae6fd;
        }
        .clay-clearance-src-tag.tag-gform-img {
          background: #f0fdf4;
          color: #15803d;
          border: 1px solid #bbf7d0;
        }
        .clay-clearance-src-tag.tag-gform-none {
          background: #fffbeb;
          color: #b45309;
          border: 1px solid #fde68a;
        }

        /* ── Actions Column & Send Email Button ── */
        .clay-actions-cell-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }

        .clay-send-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 11px;
          border-radius: 9px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          cursor: pointer;
          font-family: inherit;
          box-shadow:
            2px 4px 10px rgba(37, 99, 235, 0.25),
            inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.4),
            inset -1.5px -1.5px 3px rgba(0, 0, 0, 0.2);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-send-email-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            3px 6px 14px rgba(37, 99, 235, 0.35),
            inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.5);
        }

        .clay-email-status-pills {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .clay-email-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.64rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 6px;
          white-space: nowrap;
        }
        .clay-email-pill.pill-sent {
          background: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
        }
        .clay-email-pill.pill-pending {
          background: #f8fafc;
          color: #94a3b8;
          border: 1px dashed #cbd5e1;
        }
        .clay-email-pill.pill-qr-sent {
          background: #eef2ff;
          color: #4338ca;
          border: 1px solid #c7d2fe;
        }

        /* ── Modal Footer Email Actions ── */
        .clay-modal-footer-email-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .clay-footer-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 13px;
          border-radius: 10px;
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          font-size: 0.72rem;
          font-weight: 800;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.18s ease;
        }

        .clay-footer-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .clay-footer-action-btn.btn-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          box-shadow: 2px 4px 10px rgba(37, 99, 235, 0.25);
        }
        .clay-footer-action-btn.btn-accent {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: #ffffff;
          box-shadow: 2px 4px 10px rgba(124, 58, 237, 0.25);
        }
        .clay-footer-action-btn.btn-success {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: #ffffff;
          box-shadow: 2px 4px 10px rgba(5, 150, 105, 0.25);
        }

        /* ── Email Dialog Modal ── */
        .clay-email-dialog-card {
          width: 92vw;
          max-width: 720px;
          max-height: 92vh;
        }

        .clay-email-dialog-body {
          padding: 1.25rem 1.4rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .clay-email-events-recap {
          background: #ffffff;
          border-radius: 14px;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          padding: 0.85rem 1rem;
          box-shadow:
            inset 1.5px 1.5px 3px rgba(162, 178, 201, 0.2),
            2px 4px 10px rgba(0, 0, 0, 0.03);
        }

        .clay-events-recap-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.76rem;
          font-weight: 800;
          color: #334155;
          margin-bottom: 0.5rem;
        }

        .recap-exempt-badge {
          background: #fef3c7;
          color: #92400e;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 5px;
        }

        .recap-paid-badge {
          background: #ecfdf5;
          color: #065f46;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 5px;
        }

        .clay-events-recap-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .recap-chip {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 6px;
          background: #ede9fe;
          color: #6d28d9;
          border: 1px solid #ddd6fe;
        }

        .clay-email-types-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .clay-email-type-card {
          background: #ffffff;
          border-radius: 16px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }

        .clay-email-type-card:hover {
          transform: translateY(-2px);
          box-shadow:
            8px 12px 22px rgba(162, 178, 201, 0.3),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
        }

        .email-type-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .email-type-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.06);
        }

        .email-type-icon-box.type-confirm {
          background: #d1fae5;
        }

        .email-type-icon-box.type-qr {
          background: #e0e7ff;
        }

        .email-type-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .email-type-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .email-type-subtitle {
          font-size: 0.68rem;
          color: #64748b;
          font-weight: 600;
        }

        .email-type-desc {
          font-size: 0.75rem;
          color: #475569;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }

        .email-type-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
          border-top: 1px dashed #e2e8f0;
          font-size: 0.72rem;
        }

        .status-label {
          color: #64748b;
          font-weight: 700;
        }

        .status-val {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-weight: 800;
          font-size: 0.7rem;
        }
        .status-val.sent {
          color: #059669;
        }
        .status-val.pending {
          color: #94a3b8;
        }

        .clay-email-send-action-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 11px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-email-send-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .clay-email-send-action-btn.btn-send-confirm {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: #ffffff;
          box-shadow: 2px 4px 12px rgba(5, 150, 105, 0.25);
        }
        .clay-email-send-action-btn.btn-send-confirm:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 3px 6px 16px rgba(5, 150, 105, 0.35);
        }

        .clay-email-send-action-btn.btn-send-qr {
          background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
          color: #ffffff;
          box-shadow: 2px 4px 12px rgba(79, 70, 229, 0.25);
        }
        .clay-email-send-action-btn.btn-send-qr:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 3px 6px 16px rgba(79, 70, 229, 0.35);
        }

        /* ── Floating Toast ── */
        .clay-email-floating-toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 10000;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          font-size: 0.84rem;
          font-weight: 700;
          animation: toastSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-email-floating-toast.toast-success {
          background: #065f46;
          color: #ffffff;
          border: 1.5px solid #34d399;
        }

        .clay-email-floating-toast.toast-error {
          background: #991b1b;
          color: #ffffff;
          border: 1.5px solid #f87171;
        }

        .toast-close {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          font-size: 0.85rem;
          padding: 2px 5px;
          opacity: 0.8;
        }
        .toast-close:hover {
          opacity: 1;
        }

        .btn-loading {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes toastSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .clay-mobile-swipe-hint {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px 12px;
            background: #dbeafe;
            color: #1e40af;
            font-size: 0.72rem;
            font-weight: 800;
            border-bottom: 2px solid rgba(255, 255, 255, 0.9);
            text-align: center;
          }

          .clay-page-header { 
            flex-direction: column; 
            align-items: flex-start;
            gap: 10px;
          }

          .clay-header-left {
            gap: 10px;
          }

          .clay-page-title {
            font-size: 1.25rem;
          }

          .clay-toolbar { 
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .clay-search-box { 
            width: 100%; 
            min-width: unset; 
            box-sizing: border-box;
          }

          .clay-filter-box {
            width: 100%;
            box-sizing: border-box;
          }

          .clay-filter-select {
            width: 100%;
          }
        }
      `})]}):(0,$.jsxs)(`div`,{className:`clay-error-state`,children:[(0,$.jsx)(`div`,{className:`clay-error-orb`,children:`🔒`}),(0,$.jsx)(`span`,{style:{fontSize:`1.05rem`,fontWeight:700,color:`#dc2626`},children:`Access Restricted`}),(0,$.jsxs)(`p`,{style:{maxWidth:`420px`,textAlign:`center`,color:`#64748b`,fontSize:`0.9rem`,lineHeight:`1.5`,margin:`4px 0 14px 0`},children:[`You do not have permission to view registered participants. Please contact `,(0,$.jsx)(`strong`,{children:`Adeeb Razi`}),` (Administration) to request directory access.`]}),(0,$.jsx)(`button`,{onClick:()=>{o(``),i(!0),se()},style:{padding:`10px 18px`,borderRadius:`12px`,border:`2px solid rgba(255, 255, 255, 0.8)`,background:`#ffffff`,color:`#1e293b`,fontWeight:700,cursor:`pointer`,boxShadow:`3px 4px 10px rgba(162, 178, 201, 0.25)`,fontFamily:`'Space Grotesk', sans-serif`},children:`🔄 Refresh Permissions`})]})},zR=()=>{let e=_t(),{canAccessAccessControl:t}=MR();if(!t)return(0,$.jsx)(`div`,{className:`fresh-access-denied`,children:(0,$.jsxs)(`div`,{className:`denied-box`,children:[(0,$.jsx)(lR,{size:56,className:`denied-icon`}),(0,$.jsx)(`h2`,{children:`Access Restricted`}),(0,$.jsxs)(`p`,{children:[`Access Control and staff permission management are restricted exclusively to `,(0,$.jsx)(`strong`,{children:`Adeeb Razi`}),` and `,(0,$.jsx)(`strong`,{children:`Prof. Mamatha Vayelapelli`}),`.`]}),(0,$.jsx)(`button`,{onClick:()=>e(`/admin/participants`),className:`denied-return-btn`,children:`Return to Dashboard`})]})});let[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)(!0),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(`all`),[u,d]=(0,v.useState)(null),[f,p]=(0,v.useState)(null),[m,h]=(0,v.useState)(!1),[g,_]=(0,v.useState)({name:``,email:``,password:``,role:`coordinator`,designation:`Event Coordinator`}),[y,b]=(0,v.useState)(!1),[x,S]=(0,v.useState)(``),[C,w]=(0,v.useState)(!1),T=async()=>{a(!0);try{let e=localStorage.getItem(`adminToken`),t=await fetch(`${kR}/api/admin/staff`,{headers:{Authorization:`Bearer ${e}`}});if(t.ok){let e=await t.json();e.staff&&r(e.staff)}}catch(e){console.warn(`Could not fetch staff from database:`,e)}finally{a(!1)}};(0,v.useEffect)(()=>{T()},[]);let E=e=>{let t={admin:`Administrator`,faculty:`Faculty Coordinator`,coordinator:`Student Coordinator`,volunteer:`Desk Volunteer`};_(n=>({...n,role:e,designation:t[e]||`Staff Member`}))},D=async e=>{if(e.preventDefault(),S(``),!g.name.trim()||!g.email.trim()||!g.password.trim()){S(`Please enter name, email, and password.`);return}if(g.password.trim().length<6){S(`Password must be at least 6 characters long.`);return}w(!0);try{let e=localStorage.getItem(`adminToken`),t=await fetch(`${kR}/api/admin/staff`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify(g)}),n=await t.json();t.ok?(d({message:`✓ Account created for ${g.name} and saved to MongoDB!`,type:`success`}),h(!1),_({name:``,email:``,password:``,role:`coordinator`,designation:`Event Coordinator`}),await T(),setTimeout(()=>d(null),3500)):S(n.message||`Failed to create staff account.`)}catch{S(`Network error while creating staff account.`)}finally{w(!1)}},O=async e=>{if(e.isPermanent||e.email.toLowerCase()===`adeeb@technika2026.online`){alert(`Master Administrator (Adeeb Razi) is permanently protected and cannot be deleted.`);return}if(window.confirm(`Are you sure you want to permanently delete "${e.name}" (${e.email})?\n\nThis will remove their database record and revoke login access.`))try{let t=localStorage.getItem(`adminToken`),n=e._id||e.email,i=await fetch(`${kR}/api/admin/staff/${encodeURIComponent(n)}`,{method:`DELETE`,headers:{Authorization:`Bearer ${t}`}}),a=await i.json();i.ok?(d({message:`✓ Removed ${e.name} from MongoDB`,type:`success`}),r(t=>t.filter(t=>t._id!==e._id&&t.email.toLowerCase()!==e.email.toLowerCase())),setTimeout(()=>d(null),3500)):d({message:a.message||`Failed to delete staff member.`,type:`error`})}catch{d({message:`Network error while deleting staff member.`,type:`error`})}},k=async(e,t)=>{if(e.isPermanent||e.role===`admin`)return;let n=e.permissions?{...e.permissions}:{canViewPhone:e.role===`faculty`,canViewEmail:e.role===`faculty`,canSendEmail:e.role===`faculty`,canVerifyPayments:e.role===`faculty`,canCheckIn:!0,canExportCSV:e.role===`faculty`,canDelete:!1},i=!n[t],a={...n,[t]:i};t===`canViewPhone`&&(a.canViewContact=i),r(t=>t.map(t=>e._id&&t._id===e._id||t.email.toLowerCase()===e.email.toLowerCase()?{...t,permissions:a}:t));let o=`${e._id||e.email}-${t}`;p(o);try{let n=localStorage.getItem(`adminToken`),r=e._id||e.email;if((await fetch(`${kR}/api/admin/staff/${encodeURIComponent(r)}/permissions`,{method:`PUT`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${n}`},body:JSON.stringify({permissions:a})})).ok)d({message:`✓ ${{canViewPhone:`Contact (Phone)`,canViewEmail:`Email Address`,canSendEmail:`Send Email`,canVerifyPayments:`Payment Details`,canCheckIn:`Check-In Desk`,canExportCSV:`Export CSV`,canDelete:`Delete Power`,canViewContact:`Contact (Phone)`}[t]} ${i?`Granted`:`Revoked`} for ${e.name} (Saved in MongoDB)`,type:`success`}),setTimeout(()=>p(null),1200),setTimeout(()=>d(null),3e3);else throw Error(`Database update failed`)}catch{r(t=>t.map(t=>e._id&&t._id===e._id||t.email.toLowerCase()===e.email.toLowerCase()?{...t,permissions:n}:t)),p(null),d({message:`⚠️ Failed to save changes to database.`,type:`error`}),setTimeout(()=>d(null),3500)}},A=n.filter(e=>{if(c!==`all`&&e.role!==c)return!1;if(!o.trim())return!0;let t=o.toLowerCase();return e.name?.toLowerCase().includes(t)||e.email?.toLowerCase().includes(t)||e.designation?.toLowerCase().includes(t)}),j=n.filter(e=>e.role===`admin`).length,M=n.filter(e=>e.role===`faculty`).length,N=n.filter(e=>e.role===`coordinator`).length,ee=n.filter(e=>e.role===`volunteer`).length;return(0,$.jsxs)(`div`,{className:`fresh-access-wrap`,children:[(0,$.jsxs)(`div`,{className:`fresh-header-card`,children:[(0,$.jsxs)(`div`,{className:`header-left-col`,children:[(0,$.jsx)(`div`,{className:`header-icon-badge`,children:(0,$.jsx)(pR,{className:`icon-main`})}),(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{className:`title-row`,children:[(0,$.jsx)(`h1`,{className:`header-title`,children:`Staff & Access Control`}),(0,$.jsxs)(`span`,{className:`live-db-pill`,children:[(0,$.jsx)(CL,{size:13,className:`pill-icon`}),(0,$.jsx)(`span`,{children:i?`Syncing...`:`MongoDB Synced`})]})]}),(0,$.jsx)(`p`,{className:`header-sub`,children:`Manage festival personnel credentials and limited privilege switches saved directly to database.`})]})]}),(0,$.jsx)(`div`,{className:`header-actions`,children:(0,$.jsxs)(`button`,{type:`button`,onClick:()=>h(!0),className:`btn-create-staff`,children:[(0,$.jsx)($L,{size:18}),(0,$.jsx)(`span`,{children:`Add Staff Member`})]})})]}),u&&(0,$.jsx)(`div`,{className:`fresh-toast ${u.type}`,children:(0,$.jsxs)(`div`,{className:`toast-content`,children:[u.type===`success`?(0,$.jsx)(pL,{size:18}):(0,$.jsx)(lR,{size:18}),(0,$.jsx)(`span`,{children:u.message})]})}),(0,$.jsxs)(`div`,{className:`fresh-toolbar`,children:[(0,$.jsxs)(`div`,{className:`fresh-stats-bar`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`stat-chip total ${c===`all`?`active`:``}`,onClick:()=>l(`all`),title:`Show all personnel`,children:[(0,$.jsx)(xR,{size:16}),(0,$.jsxs)(`span`,{children:[`Total Staff: `,(0,$.jsx)(`strong`,{children:n.length})]})]}),(0,$.jsxs)(`button`,{type:`button`,className:`stat-chip admin ${c===`admin`?`active`:``}`,onClick:()=>l(`admin`),title:`Filter Administrators`,children:[(0,$.jsx)(pR,{size:16}),(0,$.jsxs)(`span`,{children:[`Administrators: `,(0,$.jsx)(`strong`,{children:j})]})]}),(0,$.jsxs)(`button`,{type:`button`,className:`stat-chip faculty ${c===`faculty`?`active`:``}`,onClick:()=>l(`faculty`),title:`Filter Faculty Coordinators`,children:[(0,$.jsx)(hR,{size:16}),(0,$.jsxs)(`span`,{children:[`Faculty: `,(0,$.jsx)(`strong`,{children:M})]})]}),(0,$.jsxs)(`button`,{type:`button`,className:`stat-chip coordinator ${c===`coordinator`?`active`:``}`,onClick:()=>l(`coordinator`),title:`Filter Student Coordinators`,children:[(0,$.jsx)(tR,{size:16}),(0,$.jsxs)(`span`,{children:[`Coordinators: `,(0,$.jsx)(`strong`,{children:N})]})]}),(0,$.jsxs)(`button`,{type:`button`,className:`stat-chip volunteer ${c===`volunteer`?`active`:``}`,onClick:()=>l(`volunteer`),title:`Filter Desk Volunteers`,children:[(0,$.jsx)(yR,{size:16}),(0,$.jsxs)(`span`,{children:[`Volunteers: `,(0,$.jsx)(`strong`,{children:ee})]})]})]}),(0,$.jsxs)(`div`,{className:`search-box-wrap`,children:[(0,$.jsx)(aR,{size:16,className:`search-icon`}),(0,$.jsx)(`input`,{type:`text`,value:o,onChange:e=>s(e.target.value),placeholder:`Search by name, email, or designation...`,className:`search-input`}),o&&(0,$.jsx)(`button`,{className:`search-clear-btn`,onClick:()=>s(``),children:`✕`})]})]}),(0,$.jsxs)(`div`,{className:`limited-legend-bar`,children:[(0,$.jsx)(`span`,{className:`legend-label`,children:`Limited Privileges Key:`}),(0,$.jsxs)(`div`,{className:`legend-items`,children:[(0,$.jsxs)(`span`,{className:`legend-item`,children:[(0,$.jsx)(ZL,{size:13}),` Contact (Phone)`]}),(0,$.jsxs)(`span`,{className:`legend-item`,children:[(0,$.jsx)(UL,{size:13}),` Email Address`]}),(0,$.jsxs)(`span`,{className:`legend-item`,children:[(0,$.jsx)(sR,{size:13}),` Send Email`]}),(0,$.jsxs)(`span`,{className:`legend-item`,children:[(0,$.jsx)(xL,{size:13}),` Payment Details`]}),(0,$.jsxs)(`span`,{className:`legend-item`,children:[(0,$.jsx)(tR,{size:13}),` Check-In Desk`]}),(0,$.jsxs)(`span`,{className:`legend-item`,children:[(0,$.jsx)(kL,{size:13}),` Export CSV`]}),(0,$.jsxs)(`span`,{className:`legend-item`,children:[(0,$.jsx)(_R,{size:13}),` Delete Power`]})]})]}),(0,$.jsxs)(`div`,{className:`fresh-cards-grid`,children:[A.map((e,t)=>{let n=!!e.isPermanent||e.email.toLowerCase()===`adeeb@technika2026.online`,r=e.role===`admin`,i=jR(e.name,e.email),a=e.permissions||{canViewPhone:r||e.role===`faculty`,canViewEmail:r||e.role===`faculty`,canSendEmail:r||e.role===`faculty`,canVerifyPayments:r||e.role===`faculty`,canCheckIn:!0,canExportCSV:r||e.role===`faculty`,canDelete:r};return(0,$.jsxs)(`div`,{className:`fresh-staff-card ${n?`master-card`:``} ${e.role}`,children:[(0,$.jsxs)(`div`,{className:`card-header-area`,children:[(0,$.jsxs)(`div`,{className:`avatar-side`,children:[i?(0,$.jsx)(`img`,{src:i,alt:e.name,className:`avatar-img`}):(0,$.jsx)(`div`,{className:`avatar-fallback ${e.role}`,children:e.name?.charAt(0)||`S`}),n&&(0,$.jsx)(`span`,{className:`crown-badge`,title:`Master Root Administrator`,children:`👑`})]}),(0,$.jsxs)(`div`,{className:`profile-side`,children:[(0,$.jsxs)(`div`,{className:`profile-name-row`,children:[(0,$.jsx)(`h3`,{className:`profile-name`,children:e.name}),(0,$.jsx)(`span`,{className:`role-tag ${e.role}`,children:e.role===`admin`?`Admin`:e.role===`faculty`?`Faculty`:e.role===`volunteer`?`Volunteer`:`Coordinator`})]}),(0,$.jsx)(`div`,{className:`profile-designation`,children:e.designation||`Staff Member`}),(0,$.jsxs)(`div`,{className:`profile-email`,children:[(0,$.jsx)(UL,{size:12,style:{display:`inline`,marginRight:`4px`}}),(0,$.jsx)(`span`,{children:e.email})]})]}),(0,$.jsx)(`div`,{className:`card-action-side`,children:n?(0,$.jsx)(`div`,{className:`locked-badge`,title:`Permanent Root account cannot be deleted`,children:(0,$.jsx)(zL,{size:14})}):(0,$.jsx)(`button`,{type:`button`,onClick:()=>O(e),className:`btn-trash-staff`,title:`Delete account for ${e.name}`,children:(0,$.jsx)(_R,{size:16})})})]}),(0,$.jsxs)(`div`,{className:`card-permissions-area`,children:[(0,$.jsxs)(`div`,{className:`perm-section-title`,children:[(0,$.jsx)(`span`,{children:`Database Access Privileges`}),r&&(0,$.jsx)(`span`,{className:`admin-all-clear`,children:`Full Authority`})]}),r?(0,$.jsxs)(`div`,{className:`admin-full-banner`,children:[(0,$.jsx)(pR,{size:16,color:`#6366f1`}),(0,$.jsx)(`span`,{children:`All limited privileges are permanently granted for Administrators.`})]}):(0,$.jsxs)(`div`,{className:`limited-toggles-grid`,children:[(0,$.jsxs)(`div`,{className:`perm-toggle-tile ${a.canViewPhone?`active`:``}`,children:[(0,$.jsxs)(`div`,{className:`tile-info`,children:[(0,$.jsx)(ZL,{size:15,className:`tile-icon`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`tile-title`,children:`Contact (Phone)`}),(0,$.jsx)(`div`,{className:`tile-desc`,children:`WhatsApp & phone number`})]})]}),(0,$.jsxs)(`div`,{className:`switch-wrap`,children:[f===`${e._id||e.email}-canViewPhone`&&(0,$.jsx)(`span`,{className:`saving-pulse`,children:`Saving...`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>k(e,`canViewPhone`),className:`switch-btn ${a.canViewPhone?`on`:`off`}`,children:(0,$.jsx)(`span`,{className:`switch-thumb`})})]})]}),(0,$.jsxs)(`div`,{className:`perm-toggle-tile ${a.canViewEmail?`active`:``}`,children:[(0,$.jsxs)(`div`,{className:`tile-info`,children:[(0,$.jsx)(UL,{size:15,className:`tile-icon`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`tile-title`,children:`Email Address`}),(0,$.jsx)(`div`,{className:`tile-desc`,children:`View participant email`})]})]}),(0,$.jsxs)(`div`,{className:`switch-wrap`,children:[f===`${e._id||e.email}-canViewEmail`&&(0,$.jsx)(`span`,{className:`saving-pulse`,children:`Saving...`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>k(e,`canViewEmail`),className:`switch-btn ${a.canViewEmail?`on`:`off`}`,children:(0,$.jsx)(`span`,{className:`switch-thumb`})})]})]}),(0,$.jsxs)(`div`,{className:`perm-toggle-tile ${a.canSendEmail?`active`:``}`,children:[(0,$.jsxs)(`div`,{className:`tile-info`,children:[(0,$.jsx)(sR,{size:15,className:`tile-icon`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`tile-title`,children:`Send Email`}),(0,$.jsx)(`div`,{className:`tile-desc`,children:`Dispatch QR passes & emails`})]})]}),(0,$.jsxs)(`div`,{className:`switch-wrap`,children:[f===`${e._id||e.email}-canSendEmail`&&(0,$.jsx)(`span`,{className:`saving-pulse`,children:`Saving...`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>k(e,`canSendEmail`),className:`switch-btn ${a.canSendEmail?`on`:`off`}`,children:(0,$.jsx)(`span`,{className:`switch-thumb`})})]})]}),(0,$.jsxs)(`div`,{className:`perm-toggle-tile ${a.canVerifyPayments?`active`:``}`,children:[(0,$.jsxs)(`div`,{className:`tile-info`,children:[(0,$.jsx)(xL,{size:15,className:`tile-icon`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`tile-title`,children:`Payment Details`}),(0,$.jsx)(`div`,{className:`tile-desc`,children:`Verify UPI, slips & fees`})]})]}),(0,$.jsxs)(`div`,{className:`switch-wrap`,children:[f===`${e._id||e.email}-canVerifyPayments`&&(0,$.jsx)(`span`,{className:`saving-pulse`,children:`Saving...`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>k(e,`canVerifyPayments`),className:`switch-btn ${a.canVerifyPayments?`on`:`off`}`,children:(0,$.jsx)(`span`,{className:`switch-thumb`})})]})]}),(0,$.jsxs)(`div`,{className:`perm-toggle-tile ${a.canCheckIn?`active`:``}`,children:[(0,$.jsxs)(`div`,{className:`tile-info`,children:[(0,$.jsx)(tR,{size:15,className:`tile-icon`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`tile-title`,children:`Check-In Desk`}),(0,$.jsx)(`div`,{className:`tile-desc`,children:`Scan venue QR codes`})]})]}),(0,$.jsxs)(`div`,{className:`switch-wrap`,children:[f===`${e._id||e.email}-canCheckIn`&&(0,$.jsx)(`span`,{className:`saving-pulse`,children:`Saving...`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>k(e,`canCheckIn`),className:`switch-btn ${a.canCheckIn?`on`:`off`}`,children:(0,$.jsx)(`span`,{className:`switch-thumb`})})]})]}),(0,$.jsxs)(`div`,{className:`perm-toggle-tile ${a.canExportCSV?`active`:``}`,children:[(0,$.jsxs)(`div`,{className:`tile-info`,children:[(0,$.jsx)(kL,{size:15,className:`tile-icon`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`tile-title`,children:`Export CSV`}),(0,$.jsx)(`div`,{className:`tile-desc`,children:`Download spreadsheets`})]})]}),(0,$.jsxs)(`div`,{className:`switch-wrap`,children:[f===`${e._id||e.email}-canExportCSV`&&(0,$.jsx)(`span`,{className:`saving-pulse`,children:`Saving...`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>k(e,`canExportCSV`),className:`switch-btn ${a.canExportCSV?`on`:`off`}`,children:(0,$.jsx)(`span`,{className:`switch-thumb`})})]})]}),(0,$.jsxs)(`div`,{className:`perm-toggle-tile ${a.canDelete?`active danger`:``}`,children:[(0,$.jsxs)(`div`,{className:`tile-info`,children:[(0,$.jsx)(_R,{size:15,className:`tile-icon danger`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`tile-title`,children:`Delete Power`}),(0,$.jsx)(`div`,{className:`tile-desc`,children:`Purge registrations`})]})]}),(0,$.jsxs)(`div`,{className:`switch-wrap`,children:[f===`${e._id||e.email}-canDelete`&&(0,$.jsx)(`span`,{className:`saving-pulse`,children:`Saving...`}),(0,$.jsx)(`button`,{type:`button`,onClick:()=>k(e,`canDelete`),className:`switch-btn danger ${a.canDelete?`on`:`off`}`,children:(0,$.jsx)(`span`,{className:`switch-thumb`})})]})]})]})]})]},e._id||t)}),A.length===0&&(0,$.jsxs)(`div`,{className:`fresh-empty-state`,children:[(0,$.jsx)(aR,{size:36,color:`#94a3b8`}),(0,$.jsx)(`h3`,{children:`No Staff Found`}),(0,$.jsx)(`p`,{children:`No personnel records matched your filter query.`})]})]}),m&&(0,$.jsx)(`div`,{className:`fresh-modal-backdrop`,onClick:()=>h(!1),children:(0,$.jsxs)(`div`,{className:`fresh-modal-box`,onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(`div`,{className:`modal-header`,children:[(0,$.jsx)(`div`,{className:`modal-icon-wrap`,children:(0,$.jsx)($L,{size:20})}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{className:`modal-title`,children:`Add Staff Member`}),(0,$.jsx)(`p`,{className:`modal-sub`,children:`Create credentials saved directly into MongoDB.`})]}),(0,$.jsx)(`button`,{type:`button`,className:`modal-close`,onClick:()=>h(!1),children:`✕`})]}),x&&(0,$.jsxs)(`div`,{className:`modal-alert-error`,children:[(0,$.jsx)(lR,{size:16}),(0,$.jsx)(`span`,{children:x})]}),(0,$.jsxs)(`form`,{onSubmit:D,className:`modal-form`,children:[(0,$.jsxs)(`div`,{className:`form-row`,children:[(0,$.jsx)(`label`,{className:`form-label`,children:`Full Name`}),(0,$.jsxs)(`div`,{className:`input-wrap`,children:[(0,$.jsx)(xR,{size:16,className:`field-icon`}),(0,$.jsx)(`input`,{type:`text`,required:!0,value:g.name,onChange:e=>_({...g,name:e.target.value}),placeholder:`e.g. Awesh Hussain`,className:`text-input`})]})]}),(0,$.jsxs)(`div`,{className:`form-row`,children:[(0,$.jsx)(`label`,{className:`form-label`,children:`Email Address (Login Username)`}),(0,$.jsxs)(`div`,{className:`input-wrap`,children:[(0,$.jsx)(UL,{size:16,className:`field-icon`}),(0,$.jsx)(`input`,{type:`email`,required:!0,value:g.email,onChange:e=>_({...g,email:e.target.value}),placeholder:`e.g. awesh@technika2026.online`,className:`text-input`})]})]}),(0,$.jsxs)(`div`,{className:`form-row`,children:[(0,$.jsx)(`label`,{className:`form-label`,children:`Password`}),(0,$.jsxs)(`div`,{className:`input-wrap`,children:[(0,$.jsx)(zL,{size:16,className:`field-icon`}),(0,$.jsx)(`input`,{type:y?`text`:`password`,required:!0,value:g.password,onChange:e=>_({...g,password:e.target.value}),placeholder:`Minimum 6 characters`,className:`text-input`}),(0,$.jsx)(`button`,{type:`button`,className:`eye-toggle`,onClick:()=>b(!y),children:y?(0,$.jsx)(TL,{size:16}):(0,$.jsx)(DL,{size:16})})]})]}),(0,$.jsxs)(`div`,{className:`form-row`,children:[(0,$.jsx)(`label`,{className:`form-label`,children:`Account Role`}),(0,$.jsxs)(`select`,{value:g.role,onChange:e=>E(e.target.value),className:`select-input`,children:[(0,$.jsx)(`option`,{value:`coordinator`,children:`Student Coordinator`}),(0,$.jsx)(`option`,{value:`faculty`,children:`Faculty Coordinator`}),(0,$.jsx)(`option`,{value:`admin`,children:`Administrator`}),(0,$.jsx)(`option`,{value:`volunteer`,children:`Volunteer`})]})]}),(0,$.jsxs)(`div`,{className:`form-row`,children:[(0,$.jsx)(`label`,{className:`form-label`,children:`Designation / Title`}),(0,$.jsx)(`input`,{type:`text`,value:g.designation,onChange:e=>_({...g,designation:e.target.value}),placeholder:`e.g. Event Coordinator, Technical Lead, Stage Incharge`,className:`text-input no-icon`})]}),(0,$.jsxs)(`div`,{className:`modal-btn-row`,children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>h(!1),className:`btn-cancel`,disabled:C,children:`Cancel`}),(0,$.jsx)(`button`,{type:`submit`,className:`btn-submit`,disabled:C,children:C?`Saving to Database...`:`✓ Create Account`})]})]})]})}),(0,$.jsx)(`style`,{children:`
        .fresh-access-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.5rem 1rem 3rem 1rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #0f172a;
        }

        /* Top Header Card */
        .fresh-header-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 1.5rem 2rem;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
          margin-bottom: 1.5rem;
        }

        .header-left-col {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .header-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(79, 70, 229, 0.25);
        }

        .icon-main {
          width: 28px;
          height: 28px;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .header-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .live-db-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .header-sub {
          margin: 0.35rem 0 0 0;
          color: #64748b;
          font-size: 0.88rem;
          line-height: 1.4;
        }

        .btn-create-staff {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);
          transition: all 0.2s ease;
        }

        .btn-create-staff:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);
        }

        /* Toast */
        .fresh-toast {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.9rem 1.4rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.88rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .fresh-toast.success .toast-content {
          background: #065f46;
          color: #ffffff;
        }

        .fresh-toast.error .toast-content {
          background: #991b1b;
          color: #ffffff;
        }

        /* Toolbar & Interactive Colorful Filter Chips */
        .fresh-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 1.25rem;
        }

        .fresh-stats-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .stat-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.55rem 1.1rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          color: #334155;
        }

        .stat-chip:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
        }

        /* Total Staff */
        .stat-chip.total {
          color: #0f172a;
        }
        .stat-chip.total.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
        }

        /* Administrators */
        .stat-chip.admin {
          color: #4338ca;
        }
        .stat-chip.admin.active {
          background: #4338ca;
          color: #ffffff;
          border-color: #4338ca;
          box-shadow: 0 4px 12px rgba(67, 56, 202, 0.25);
        }

        /* Faculty */
        .stat-chip.faculty {
          color: #b45309;
        }
        .stat-chip.faculty.active {
          background: #b45309;
          color: #ffffff;
          border-color: #b45309;
          box-shadow: 0 4px 12px rgba(180, 83, 9, 0.25);
        }

        /* Coordinators */
        .stat-chip.coordinator {
          color: #0284c7;
        }
        .stat-chip.coordinator.active {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);
        }

        /* Volunteers */
        .stat-chip.volunteer {
          color: #059669;
        }
        .stat-chip.volunteer.active {
          background: #059669;
          color: #ffffff;
          border-color: #059669;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
        }

        .search-box-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.45rem 0.85rem;
          width: 340px;
          max-width: 100%;
        }

        .search-icon {
          color: #94a3b8;
        }

        .search-input {
          border: none;
          outline: none;
          font-size: 0.85rem;
          width: 100%;
          color: #0f172a;
        }

        .search-clear-btn {
          border: none;
          background: transparent;
          color: #94a3b8;
          font-size: 0.85rem;
          cursor: pointer;
        }

        /* Limited Privileges Legend Bar */
        .limited-legend-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          background: #f8fafc;
          border: 1px dashed #cbd5e1;
          border-radius: 12px;
          padding: 0.6rem 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.78rem;
          color: #64748b;
        }

        .legend-label {
          font-weight: 700;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .legend-items {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #ffffff;
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          font-weight: 600;
          color: #475569;
        }

        /* Cards Grid */
        .fresh-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 1.25rem;
        }

        @media (max-width: 640px) {
          .fresh-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Individual Staff Card */
        .fresh-staff-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.25rem;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          transition: all 0.2s ease;
        }

        .fresh-staff-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.08);
        }

        .fresh-staff-card.master-card {
          border: 2px solid #f59e0b;
          background: linear-gradient(180deg, #fffbeb 0%, #ffffff 30%);
        }

        /* Card Header Area */
        .card-header-area {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .avatar-side {
          position: relative;
        }

        .avatar-img {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          object-fit: cover;
          border: 2px solid #e2e8f0;
        }

        .avatar-fallback {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.3rem;
          color: #ffffff;
        }

        .avatar-fallback.admin {
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
        }

        .avatar-fallback.faculty {
          background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
        }

        .avatar-fallback.coordinator {
          background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%);
        }

        .avatar-fallback.volunteer {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
        }

        .crown-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          font-size: 1rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        .profile-side {
          flex: 1;
          min-width: 0;
        }

        .profile-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .profile-name {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .role-tag {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .role-tag.admin {
          background: #e0e7ff;
          color: #4338ca;
        }

        .role-tag.faculty {
          background: #fef3c7;
          color: #b45309;
        }

        .role-tag.coordinator {
          background: #e0f2fe;
          color: #0369a1;
        }

        .role-tag.volunteer {
          background: #d1fae5;
          color: #065f46;
        }

        .profile-designation {
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          margin-top: 2px;
        }

        .profile-email {
          font-size: 0.76rem;
          color: #94a3b8;
          margin-top: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-action-side {
          margin-left: auto;
        }

        .locked-badge {
          background: #fef3c7;
          color: #d97706;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-trash-staff {
          background: transparent;
          border: 1px solid #fee2e2;
          color: #ef4444;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .btn-trash-staff:hover {
          background: #ef4444;
          color: #ffffff;
        }

        /* Card Permissions Area */
        .card-permissions-area {
          border-top: 1px solid #f1f5f9;
          padding-top: 0.9rem;
        }

        .perm-section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          margin-bottom: 0.75rem;
        }

        .admin-all-clear {
          color: #4f46e5;
          background: #eef2ff;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .admin-full-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #4338ca;
        }

        /* Limited Toggles Grid */
        .limited-toggles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
        }

        .perm-toggle-tile {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          transition: all 0.15s ease;
        }

        .perm-toggle-tile.active {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }

        .perm-toggle-tile.active.danger {
          background: #fef2f2;
          border-color: #fecaca;
        }

        .tile-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tile-icon {
          color: #64748b;
        }

        .perm-toggle-tile.active .tile-icon {
          color: #16a34a;
        }

        .perm-toggle-tile.active.danger .tile-icon.danger {
          color: #dc2626;
        }

        .tile-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1e293b;
        }

        .tile-desc {
          font-size: 0.7rem;
          color: #64748b;
        }

        /* iOS Switch Button */
        .switch-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .saving-pulse {
          font-size: 0.72rem;
          font-weight: 700;
          color: #059669;
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .switch-btn {
          width: 44px;
          height: 24px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          position: relative;
          background: #cbd5e1;
          transition: background 0.2s ease;
          padding: 2px;
        }

        .switch-btn.on {
          background: #16a34a;
        }

        .switch-btn.danger.on {
          background: #dc2626;
        }

        .switch-thumb {
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }

        .switch-btn.on .switch-thumb {
          transform: translateX(20px);
        }

        /* Empty State */
        .fresh-empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem 1rem;
          background: #ffffff;
          border: 1px dashed #cbd5e1;
          border-radius: 16px;
        }

        .fresh-empty-state h3 {
          margin: 0.75rem 0 0.25rem 0;
          color: #334155;
        }

        .fresh-empty-state p {
          margin: 0;
          color: #94a3b8;
          font-size: 0.88rem;
        }

        /* Modal Styles */
        .fresh-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
        }

        .fresh-modal-box {
          background: #ffffff;
          border-radius: 20px;
          width: 480px;
          max-width: 100%;
          padding: 1.75rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.25rem;
          position: relative;
        }

        .modal-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #eef2ff;
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-title {
          font-size: 1.15rem;
          font-weight: 800;
          margin: 0;
          color: #0f172a;
        }

        .modal-sub {
          margin: 2px 0 0 0;
          font-size: 0.8rem;
          color: #64748b;
        }

        .modal-close {
          position: absolute;
          top: 0;
          right: 0;
          background: transparent;
          border: none;
          font-size: 1.1rem;
          color: #94a3b8;
          cursor: pointer;
        }

        .modal-alert-error {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fee2e2;
          color: #991b1b;
          padding: 0.65rem 0.9rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }

        .input-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0.6rem 0.85rem;
          background: #ffffff;
        }

        .input-wrap:focus-within {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .field-icon {
          color: #94a3b8;
        }

        .text-input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.88rem;
          color: #0f172a;
        }

        .text-input.no-icon {
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0.6rem 0.85rem;
          outline: none;
        }

        .text-input.no-icon:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .eye-toggle {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
        }

        .select-input {
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0.65rem 0.85rem;
          font-size: 0.88rem;
          background: #ffffff;
          outline: none;
          color: #0f172a;
        }

        .select-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .modal-btn-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 0.5rem;
        }

        .btn-cancel {
          background: #f1f5f9;
          border: none;
          color: #475569;
          padding: 0.65rem 1.25rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .btn-submit {
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: #ffffff;
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        /* Access Denied */
        .fresh-access-denied {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .denied-box {
          background: #ffffff;
          border: 1px solid #fee2e2;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          max-width: 440px;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.08);
        }

        .denied-icon {
          color: #ef4444;
          margin-bottom: 1rem;
        }

        .denied-box h2 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #991b1b;
          margin: 0 0 0.5rem 0;
        }

        .denied-box p {
          color: #64748b;
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .denied-return-btn {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }
      `})]})};function BR(){return(0,v.useEffect)(()=>{let e=e=>(e.preventDefault(),!1),t=e=>{if(e.key===`F12`||e.keyCode===123)return e.preventDefault(),!1;let t=e.ctrlKey||e.metaKey;if(t&&e.shiftKey&&(e.key===`I`||e.key===`i`||e.key===`J`||e.key===`j`||e.key===`C`||e.key===`c`)||t&&(e.key===`u`||e.key===`U`)||t&&(e.key===`s`||e.key===`S`))return e.preventDefault(),!1};return document.addEventListener(`contextmenu`,e,{capture:!0}),document.addEventListener(`keydown`,t,{capture:!0}),()=>{document.removeEventListener(`contextmenu`,e,{capture:!0}),document.removeEventListener(`keydown`,t,{capture:!0})}},[]),(0,$.jsx)(An,{children:(0,$.jsxs)(Kt,{children:[(0,$.jsx)(Wt,{path:`/`,element:(0,$.jsx)(PR,{})}),(0,$.jsx)(Wt,{path:`/developer`,element:(0,$.jsx)(Ht,{to:`/`,replace:!0})}),(0,$.jsx)(Wt,{path:`/admin/login`,element:(0,$.jsx)(FR,{})}),(0,$.jsxs)(Wt,{path:`/admin`,element:(0,$.jsx)(IR,{}),children:[(0,$.jsx)(Wt,{index:!0,element:(0,$.jsx)(LR,{})}),(0,$.jsx)(Wt,{path:`profile`,element:(0,$.jsx)(Ht,{to:`/admin`,replace:!0})}),(0,$.jsx)(Wt,{path:`participants`,element:(0,$.jsx)(RR,{})}),(0,$.jsx)(Wt,{path:`users`,element:(0,$.jsx)(Ht,{to:`/admin/participants`,replace:!0})}),(0,$.jsx)(Wt,{path:`teams`,element:(0,$.jsx)(Ht,{to:`/admin/participants`,replace:!0})}),(0,$.jsx)(Wt,{path:`access`,element:(0,$.jsx)(zR,{})}),(0,$.jsx)(Wt,{path:`permissions`,element:(0,$.jsx)(Ht,{to:`/admin/access`,replace:!0})}),(0,$.jsx)(Wt,{path:`analytics`,element:(0,$.jsx)(Ht,{to:`/`,replace:!0})})]}),(0,$.jsx)(Wt,{path:`*`,element:(0,$.jsx)(Ht,{to:`/`,replace:!0})})]})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(v.StrictMode,{children:(0,$.jsx)(BR,{})}));