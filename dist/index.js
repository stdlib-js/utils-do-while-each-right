"use strict";var m=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var g=m(function(q,h){
var v=require('@stdlib/assert-is-collection/dist'),s=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function d(r,e,i,n){var a,u;if(!v(r))throw new TypeError(t('1TFAh',r));if(!s(e))throw new TypeError(t('1TF2H',e));if(!s(i))throw new TypeError(t('1TF3N',i));if(a=r.length,a===0&&(e.call(n,void 0,void 0,r),a=r.length,a===0))return r;u=a-1;do e.call(n,r[u],u,r),a!==r.length&&(u+=r.length-a,a=r.length),u-=1;while(u>=0&&i(r[u+1],u+1,r));return r}h.exports=d
});var f=g();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
