(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HealthMiner"] = factory();
	else
		root["HealthMiner"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function d(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function p(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function v(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function S(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function D(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function k(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=D(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&k(e[s])!==k(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)m(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=x(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=x(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),d(n)&&(s=function(e,t){t[n]=k(e)}),t=0;t<e.length;t++)he[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):k(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return k(e)+(68<k(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(be(this,t,e),c.updateOffset(this,n),this):xe(this,t)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=k(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=k(t);else if(!d(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),c.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=k(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=k(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=k(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=k(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,!(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=l(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!o(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;0<t;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||59<n[pe]?pe:n[ve]<0||59<n[ve]?ve:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=Se),g(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ht(e._a[me],s[me]),(e._dayOfYear>De(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&0<=e&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(g(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,d=l.length,h=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),h+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(he,a)&&he[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=d-h,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||lt(e._l),null===r||void 0===a&&""===r?v({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),S(r)?new M(dt(r)):(h(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),p(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?kt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):h(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(vt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ct(t)):u(n)?function(e){if(!e._d){var t=C(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):d(n)?t._d=new Date(n):c.createFromInputFallback(t),p(e)||(e._d=null),e))}function Ot(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Yt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()}),bt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:v()});function Pt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==k(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+U(~~(e/60),2)+n+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+k(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(S(e)||h(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:d(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=Et.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:k(a[ye])*n,h:k(a[ge])*n,m:k(a[pe])*n,s:k(a[ve])*n,ms:k(Ct(1e3*a[we]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:(a[1],1),r={y:jt(a[2],n),M:jt(a[3],n),w:jt(a[4],n),d:jt(a[5],n),h:jt(a[6],n),m:jt(a[7],n),s:jt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),$t(this,At(e="string"==typeof e?+e:e,t),s),this}}function $t(e,t,n,s){var i=t._milliseconds,r=Ct(t._days),a=Ct(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,xe(e,"Month")+a*n),r&&be(e,"Date",xe(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=k(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(k(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=k(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=k(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=k(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=M.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var n=e||Tt(),s=Nt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(x(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},ln.clone=function(){return new M(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:D(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return g(this).overflow},ln.isAfter=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=S(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return p(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return _({},g(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Gt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?$t(this,At(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=n("dates accessor is deprecated. Use date instead.",nn),ln.months=n("months accessor is deprecated. Use month instead",Fe),ln.years=n("years accessor is deprecated. Use year instead",Oe),ln.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Yt(e))._a){var t=e._isUTC?y(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=y().set(s,t);return i[n](r,e)}function fn(e,t,n){if(d(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?d(t)&&(n=t,t=void 0):(t=e,e=!1,d(n=t)&&(n=t,t=void 0)),t=t||"";var i,r=lt(),a=e?r._week.dow:0;if(null!=n)return cn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?o(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:o(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===k(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ot),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(0<e)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=D((e=D(n/60))/60),n%=60,e%=60;var r=D(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),o=a=0),u.milliseconds=r%1e3,e=D(r/1e3),u.seconds=e%60,t=D(e/60),u.minutes=t%60,n=D(t/60),u.hours=n%24,o+=i=D(pn(a+=D(n/24))),a-=gn(vn(i)),s=D(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return D(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=0<+t,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(k(e))}),c.version="2.22.2",e=Tt,c.fn=ln,c.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return Tt(1e3*e)},c.months=function(e,t){return fn(e,t,"months")},c.isDate=h,c.locale=ot,c.invalid=v,c.duration=At,c.isMoment=S,c.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},c.parseZone=function(){return Tt.apply(null,arguments).parseZone()},c.localeData=lt,c.isDuration=Rt,c.monthsShort=function(e,t){return fn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},c.defineLocale=ut,c.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},c.locales=function(){return s(st)},c.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},c.normalizeUnits=R,c.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=ln,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},c});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if(true)module.exports=t();else {}}(function(){return function t(e,i,n){function a(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return require(r,!0);if(o)return o(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[r]={exports:{}};e[r][0].call(d.exports,function(t){var i=e[r][1][t];return a(i||t)},d,d.exports,t,e,i,n)}return i[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)a(n[r]);return a}({1:[function(t,e,i){},{}],2:[function(t,e,i){var n=t(6);function a(t){if(t){var e=[0,0,0],i=1,a=t.match(/^#([a-fA-F0-9]{3})$/i);if(a){a=a[1];for(var o=0;o<e.length;o++)e[o]=parseInt(a[o]+a[o],16)}else if(a=t.match(/^#([a-fA-F0-9]{6})$/i)){a=a[1];for(o=0;o<e.length;o++)e[o]=parseInt(a.slice(2*o,2*o+2),16)}else if(a=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=parseInt(a[o+1]);i=parseFloat(a[4])}else if(a=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=Math.round(2.55*parseFloat(a[o+1]));i=parseFloat(a[4])}else if(a=t.match(/(\w+)/)){if("transparent"==a[1])return[0,0,0,0];if(!(e=n[a[1]]))return}for(o=0;o<e.length;o++)e[o]=d(e[o],0,255);return i=i||0==i?d(i,0,1):1,e[3]=i,e}}function o(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(i)?1:i,0,1)]}}}function r(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(i)?1:i,0,1)]}}}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function u(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function d(t,e,i){return Math.min(Math.max(e,t),i)}function c(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:a,getHsla:o,getRgb:function(t){var e=a(t);return e&&e.slice(0,3)},getHsl:function(t){var e=o(t);return e&&e.slice(0,3)},getHwb:r,getAlpha:function(t){var e=a(t);{if(e)return e[3];if(e=o(t))return e[3];if(e=r(t))return e[3]}},hexString:function(t){return"#"+c(t[0])+c(t[1])+c(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return s(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:s,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return l(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+a+"%)"},percentaString:l,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return u(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:u,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return h[t.slice(0,3)]}};var h={};for(var f in n)h[n[f]]=f},{6:6}],3:[function(t,e,i){var n=t(5),a=t(2),o=function(t){return t instanceof o?t:this instanceof o?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=a.getRgba(t))?this.setValues("rgb",e):(e=a.getHsla(t))?this.setValues("hsl",e):(e=a.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new o(t);var e};o.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=this,n=t,a=void 0===e?.5:e,o=2*a-1,r=i.alpha()-n.alpha(),s=((o*r==-1?o:(o+r)/(1+o*r))+1)/2,l=1-s;return this.rgb(s*i.red()+l*n.red(),s*i.green()+l*n.green(),s*i.blue()+l*n.blue()).alpha(i.alpha()*a+n.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new o,n=this.values,a=i.values;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return i}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},o.prototype.setValues=function(t,e){var i,a,o=this.values,r=this.spaces,s=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)o[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)o[t][i]=e[t.charAt(i)];l=e.a}else if(void 0!==e[r[t][0]]){var u=r[t];for(i=0;i<t.length;i++)o[t][i]=e[u[i]];l=e.alpha}if(o.alpha=Math.max(0,Math.min(1,void 0===l?o.alpha:l)),"alpha"===t)return!1;for(i=0;i<t.length;i++)a=Math.max(0,Math.min(s[t][i],o[t][i])),o[t][i]=Math.round(a);for(var d in r)d!==t&&(o[d]=n[t][d](o[t]));return!0},o.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},o.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{2:2,5:5}],4:[function(t,e,i){function n(t){var e,i,n=t[0]/255,a=t[1]/255,o=t[2]/255,r=Math.min(n,a,o),s=Math.max(n,a,o),l=s-r;return s==r?e=0:n==s?e=(a-o)/l:a==s?e=2+(o-n)/l:o==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(r+s)/2,[e,100*(s==r?0:i<=.5?l/(s+r):l/(2-s-r)),100*i]}function a(t){var e,i,n=t[0],a=t[1],o=t[2],r=Math.min(n,a,o),s=Math.max(n,a,o),l=s-r;return i=0==s?0:l/s*1e3/10,s==r?e=0:n==s?e=(a-o)/l:a==s?e=2+(o-n)/l:o==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function o(t){var e=t[0],i=t[1],a=t[2];return[n(t)[0],100*(1/255*Math.min(e,Math.min(i,a))),100*(a=1-1/255*Math.max(e,Math.max(i,a)))]}function s(t){var e,i=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]}function l(t){return C[JSON.stringify(t)]}function u(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function d(t){var e=u(t),i=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function c(t){var e,i,n,a,o,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[o=255*l,o,o];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(n=r+1/3*-(u-1))<0&&n++,n>1&&n--,o=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,a[u]=255*o;return a}function h(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),r=255*n*(1-i),s=255*n*(1-i*o),l=255*n*(1-i*(1-o));n*=255;switch(a){case 0:return[n,l,r];case 1:return[s,n,r];case 2:return[r,n,l];case 3:return[r,s,n];case 4:return[l,r,n];case 5:return[n,r,s]}}function f(t){var e,i,n,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),n=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(n=1-n),a=s+n*((i=1-l)-s),e){default:case 6:case 0:r=i,g=a,b=s;break;case 1:r=a,g=i,b=s;break;case 2:r=s,g=i,b=a;break;case 3:r=s,g=a,b=i;break;case 4:r=a,g=s,b=i;break;case 5:r=i,g=s,b=a}return[255*r,255*g,255*b]}function p(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function m(t){var e,i,n,a=t[0]/100,o=t[1]/100,r=t[2]/100;return i=-.9689*a+1.8758*o+.0415*r,n=.0557*a+-.204*o+1.057*r,e=(e=3.2406*a+-1.5372*o+-.4986*r)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function v(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function x(t){var e,i,n,a,o=t[0],r=t[1],s=t[2];return o<=8?a=(i=100*o/903.3)/100*7.787+16/116:(i=100*Math.pow((o+16)/116,3),a=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(r/500+a-16/116)/7.787:95.047*Math.pow(r/500+a,3),i,n=n/108.883<=.008859?n=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3)]}function y(t){var e,i=t[0],n=t[1],a=t[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+a*a),e]}function k(t){return m(x(t))}function M(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function w(t){return S[t]}e.exports={rgb2hsl:n,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:function(t){return y(d(t))},hsl2rgb:c,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]},hsl2hwb:function(t){return o(c(t))},hsl2cmyk:function(t){return s(c(t))},hsl2keyword:function(t){return l(c(t))},hsv2rgb:h,hsv2hsl:function(t){var e,i,n=t[0],a=t[1]/100,o=t[2]/100;return e=a*o,[n,100*(e=(e/=(i=(2-a)*o)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return o(h(t))},hsv2cmyk:function(t){return s(h(t))},hsv2keyword:function(t){return l(h(t))},hwb2rgb:f,hwb2hsl:function(t){return n(f(t))},hwb2hsv:function(t){return a(f(t))},hwb2cmyk:function(t){return s(f(t))},hwb2keyword:function(t){return l(f(t))},cmyk2rgb:p,cmyk2hsl:function(t){return n(p(t))},cmyk2hsv:function(t){return a(p(t))},cmyk2hwb:function(t){return o(p(t))},cmyk2keyword:function(t){return l(p(t))},keyword2rgb:w,keyword2hsl:function(t){return n(w(t))},keyword2hsv:function(t){return a(w(t))},keyword2hwb:function(t){return o(w(t))},keyword2cmyk:function(t){return s(w(t))},keyword2lab:function(t){return d(w(t))},keyword2xyz:function(t){return u(w(t))},xyz2rgb:m,xyz2lab:v,xyz2lch:function(t){return y(v(t))},lab2xyz:x,lab2rgb:k,lab2lch:y,lch2lab:M,lch2xyz:function(t){return x(M(t))},lch2rgb:function(t){return k(M(t))}};var S={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},C={};for(var _ in S)C[JSON.stringify(S[_])]=_},{}],5:[function(t,e,i){var n=t(4),a=function(){return new u};for(var o in n){a[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),n[t](e)}}(o);var r=/(\w+)2(\w+)/.exec(o),s=r[1],l=r[2];(a[s]=a[s]||{})[l]=a[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=n[t](e);if("string"==typeof i||void 0===i)return i;for(var a=0;a<i.length;a++)i[a]=Math.round(i[a]);return i}}(o)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=a[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{4:4}],6:[function(t,e,i){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var n=t(29)();n.helpers=t(45),t(27)(n),n.defaults=t(25),n.Element=t(26),n.elements=t(40),n.Interaction=t(28),n.layouts=t(30),n.platform=t(48),n.plugins=t(31),n.Ticks=t(34),t(22)(n),t(23)(n),t(24)(n),t(33)(n),t(32)(n),t(35)(n),t(55)(n),t(53)(n),t(54)(n),t(56)(n),t(57)(n),t(58)(n),t(15)(n),t(16)(n),t(17)(n),t(18)(n),t(19)(n),t(20)(n),t(21)(n),t(8)(n),t(9)(n),t(10)(n),t(11)(n),t(12)(n),t(13)(n),t(14)(n);var a=t(49);for(var o in a)a.hasOwnProperty(o)&&n.plugins.register(a[o]);n.platform.initialize(),e.exports=n,"undefined"!=typeof window&&(window.Chart=n),n.Legend=a.legend._element,n.Title=a.title._element,n.pluginService=n.plugins,n.PluginBase=n.Element.extend({}),n.canvasHelpers=n.helpers.canvas,n.layoutService=n.layouts},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,40:40,45:45,48:48,49:49,53:53,54:54,55:55,56:56,57:57,58:58,8:8,9:9}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){t.Radar=function(e,i){return i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";var n=t(25),a=t(40),o=t(45);n._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),n._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),e.exports=function(t){t.controllers.bar=t.DatasetController.extend({dataElementType:a.Rectangle,initialize:function(){var e;t.DatasetController.prototype.initialize.apply(this,arguments),(e=this.getMeta()).stack=this.getDataset().stack,e.bar=!0},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,e,i){var n=this,a=n.chart,r=n.getMeta(),s=n.getDataset(),l=t.custom||{},u=a.options.elements.rectangle;t._xScale=n.getScaleForId(r.xAxisID),t._yScale=n.getScaleForId(r.yAxisID),t._datasetIndex=n.index,t._index=e,t._model={datasetLabel:s.label,label:a.data.labels[e],borderSkipped:l.borderSkipped?l.borderSkipped:u.borderSkipped,backgroundColor:l.backgroundColor?l.backgroundColor:o.valueAtIndexOrDefault(s.backgroundColor,e,u.backgroundColor),borderColor:l.borderColor?l.borderColor:o.valueAtIndexOrDefault(s.borderColor,e,u.borderColor),borderWidth:l.borderWidth?l.borderWidth:o.valueAtIndexOrDefault(s.borderWidth,e,u.borderWidth)},n.updateElementGeometry(t,e,i),t.pivot()},updateElementGeometry:function(t,e,i){var n=this,a=t._model,o=n.getValueScale(),r=o.getBasePixel(),s=o.isHorizontal(),l=n._ruler||n.getRuler(),u=n.calculateBarValuePixels(n.index,e),d=n.calculateBarIndexPixels(n.index,e,l);a.horizontal=s,a.base=i?r:u.base,a.x=s?i?r:u.head:d.center,a.y=s?d.center:i?r:u.head,a.height=s?d.size:void 0,a.width=s?void 0:d.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},_getStacks:function(t){var e,i,n=this.chart,a=this.getIndexScale().options.stacked,o=void 0===t?n.data.datasets.length:t+1,r=[];for(e=0;e<o;++e)(i=n.getDatasetMeta(e)).bar&&n.isDatasetVisible(e)&&(!1===a||!0===a&&-1===r.indexOf(i.stack)||void 0===a&&(void 0===i.stack||-1===r.indexOf(i.stack)))&&r.push(i.stack);return r},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n},getRuler:function(){var t,e,i=this.getIndexScale(),n=this.getStackCount(),a=this.index,r=i.isHorizontal(),s=r?i.left:i.top,l=s+(r?i.width:i.height),u=[];for(t=0,e=this.getMeta().data.length;t<e;++t)u.push(i.getPixelForValue(null,t,a));return{min:o.isNullOrUndef(i.options.barThickness)?function(t,e){var i,n,a,o,r=t.isHorizontal()?t.width:t.height,s=t.getTicks();for(a=1,o=e.length;a<o;++a)r=Math.min(r,e[a]-e[a-1]);for(a=0,o=s.length;a<o;++a)n=t.getPixelForTick(a),r=a>0?Math.min(r,n-i):r,i=n;return r}(i,u):-1,pixels:u,start:s,end:l,stackCount:n,scale:i}},calculateBarValuePixels:function(t,e){var i,n,a,o,r,s,l=this.chart,u=this.getMeta(),d=this.getValueScale(),c=l.data.datasets,h=d.getRightValue(c[t].data[e]),f=d.options.stacked,g=u.stack,p=0;if(f||void 0===f&&void 0!==g)for(i=0;i<t;++i)(n=l.getDatasetMeta(i)).bar&&n.stack===g&&n.controller.getValueScaleId()===d.id&&l.isDatasetVisible(i)&&(a=d.getRightValue(c[i].data[e]),(h<0&&a<0||h>=0&&a>0)&&(p+=a));return o=d.getPixelForValue(p),{size:s=((r=d.getPixelForValue(p+h))-o)/2,base:o,head:r,center:r+s/2}},calculateBarIndexPixels:function(t,e,i){var n,a,r,s,l,u,d,c,h,f,g,p,m,v,b,x,y,k=i.scale.options,M="flex"===k.barThickness?(h=e,g=k,m=(f=i).pixels,v=m[h],b=h>0?m[h-1]:null,x=h<m.length-1?m[h+1]:null,y=g.categoryPercentage,null===b&&(b=v-(null===x?f.end-v:x-v)),null===x&&(x=v+v-b),p=v-(v-b)/2*y,{chunk:(x-b)/2*y/f.stackCount,ratio:g.barPercentage,start:p}):(n=e,a=i,u=(r=k).barThickness,d=a.stackCount,c=a.pixels[n],o.isNullOrUndef(u)?(s=a.min*r.categoryPercentage,l=r.barPercentage):(s=u*d,l=1),{chunk:s/d,ratio:l,start:c-s/2}),w=this.getStackIndex(t,this.getMeta().stack),S=M.start+M.chunk*w+M.chunk/2,C=Math.min(o.valueOrDefault(k.maxBarThickness,1/0),M.chunk*M.ratio);return{base:S-C/2,head:S+C/2,center:S,size:C}},draw:function(){var t=this.chart,e=this.getValueScale(),i=this.getMeta().data,n=this.getDataset(),a=i.length,r=0;for(o.canvas.clipArea(t.ctx,t.chartArea);r<a;++r)isNaN(e.getRightValue(n.data[r]))||i[r].draw();o.canvas.unclipArea(t.ctx)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model;a.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:o.valueAtIndexOrDefault(e.hoverBackgroundColor,i,o.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor?n.hoverBorderColor:o.valueAtIndexOrDefault(e.hoverBorderColor,i,o.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:o.valueAtIndexOrDefault(e.hoverBorderWidth,i,a.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model,r=this.chart.options.elements.rectangle;a.backgroundColor=n.backgroundColor?n.backgroundColor:o.valueAtIndexOrDefault(e.backgroundColor,i,r.backgroundColor),a.borderColor=n.borderColor?n.borderColor:o.valueAtIndexOrDefault(e.borderColor,i,r.borderColor),a.borderWidth=n.borderWidth?n.borderWidth:o.valueAtIndexOrDefault(e.borderWidth,i,r.borderWidth)}}),t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{25:25,40:40,45:45}],16:[function(t,e,i){"use strict";var n=t(25),a=t(40),o=t(45);n._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}}),e.exports=function(t){t.controllers.bubble=t.DatasetController.extend({dataElementType:a.Point,update:function(t){var e=this,i=e.getMeta().data;o.each(i,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,a=n.getMeta(),o=t.custom||{},r=n.getScaleForId(a.xAxisID),s=n.getScaleForId(a.yAxisID),l=n._resolveElementOptions(t,e),u=n.getDataset().data[e],d=n.index,c=i?r.getPixelForDecimal(.5):r.getPixelForValue("object"==typeof u?u:NaN,e,d),h=i?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=r,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,radius:i?0:l.radius,skip:o.skip||isNaN(c)||isNaN(h),x:c,y:h},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options;e.backgroundColor=o.valueOrDefault(i.hoverBackgroundColor,o.getHoverColor(i.backgroundColor)),e.borderColor=o.valueOrDefault(i.hoverBorderColor,o.getHoverColor(i.borderColor)),e.borderWidth=o.valueOrDefault(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},removeHoverStyle:function(t){var e=t._model,i=t._options;e.backgroundColor=i.backgroundColor,e.borderColor=i.borderColor,e.borderWidth=i.borderWidth,e.radius=i.radius},_resolveElementOptions:function(t,e){var i,n,a,r=this.chart,s=r.data.datasets[this.index],l=t.custom||{},u=r.options.elements.point,d=o.options.resolve,c=s.data[e],h={},f={chart:r,dataIndex:e,dataset:s,datasetIndex:this.index},g=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle"];for(i=0,n=g.length;i<n;++i)h[a=g[i]]=d([l[a],s[a],u[a]],f,e);return h.radius=d([l.radius,c?c.r:void 0,s.radius,u.radius],f,e),h}})}},{25:25,40:40,45:45}],17:[function(t,e,i){"use strict";var n=t(25),a=t(40),o=t(45);n._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var o=0;o<n[0].data.length;++o)e.push('<li><span style="background-color:'+n[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),r=e.datasets[0],s=a.data[n],l=s&&s.custom||{},u=o.valueAtIndexOrDefault,d=t.options.elements.arc;return{text:i,fillStyle:l.backgroundColor?l.backgroundColor:u(r.backgroundColor,n,d.backgroundColor),strokeStyle:l.borderColor?l.borderColor:u(r.borderColor,n,d.borderColor),lineWidth:l.borderWidth?l.borderWidth:u(r.borderWidth,n,d.borderWidth),hidden:isNaN(r.data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,o=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;i<n;++i)(a=r.getDatasetMeta(i)).data[o]&&(a.data[o].hidden=!a.data[o].hidden);r.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return o.isArray(i)?(i=i.slice())[0]+=n:i+=n,i}}}}),n._set("pie",o.clone(n.doughnut)),n._set("pie",{cutoutPercentage:0}),e.exports=function(t){t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:a.Arc,linkScales:o.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var e=this,i=e.chart,n=i.chartArea,a=i.options,r=a.elements.arc,s=n.right-n.left-r.borderWidth,l=n.bottom-n.top-r.borderWidth,u=Math.min(s,l),d={x:0,y:0},c=e.getMeta(),h=a.cutoutPercentage,f=a.circumference;if(f<2*Math.PI){var g=a.rotation%(2*Math.PI),p=(g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0))+f,m=Math.cos(g),v=Math.sin(g),b=Math.cos(p),x=Math.sin(p),y=g<=0&&p>=0||g<=2*Math.PI&&2*Math.PI<=p,k=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,M=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,w=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,S=h/100,C=M?-1:Math.min(m*(m<0?1:S),b*(b<0?1:S)),_=w?-1:Math.min(v*(v<0?1:S),x*(x<0?1:S)),D=y?1:Math.max(m*(m>0?1:S),b*(b>0?1:S)),I=k?1:Math.max(v*(v>0?1:S),x*(x>0?1:S)),P=.5*(D-C),A=.5*(I-_);u=Math.min(s/P,l/A),d={x:-.5*(D+C),y:-.5*(I+_)}}i.borderWidth=e.getMaxBorderWidth(c.data),i.outerRadius=Math.max((u-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:0,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=d.x*i.outerRadius,i.offsetY=d.y*i.outerRadius,c.total=e.calculateTotal(),e.outerRadius=i.outerRadius-i.radiusLength*e.getRingIndex(e.index),e.innerRadius=Math.max(e.outerRadius-i.radiusLength,0),o.each(c.data,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,a=n.chart,r=a.chartArea,s=a.options,l=s.animation,u=(r.left+r.right)/2,d=(r.top+r.bottom)/2,c=s.rotation,h=s.rotation,f=n.getDataset(),g=i&&l.animateRotate?0:t.hidden?0:n.calculateCircumference(f.data[e])*(s.circumference/(2*Math.PI)),p=i&&l.animateScale?0:n.innerRadius,m=i&&l.animateScale?0:n.outerRadius,v=o.valueAtIndexOrDefault;o.extend(t,{_datasetIndex:n.index,_index:e,_model:{x:u+a.offsetX,y:d+a.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:m,innerRadius:p,label:v(f.label,e,a.data.labels[e])}});var b=t._model;this.removeHoverStyle(t),i&&l.animateRotate||(b.startAngle=0===e?s.rotation:n.getMeta().data[e-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,e=this.getDataset(),i=this.getMeta(),n=0;return o.each(i.data,function(i,a){t=e.data[a],isNaN(t)||i.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){for(var e,i,n=0,a=this.index,o=t.length,r=0;r<o;r++)e=t[r]._model?t[r]._model.borderWidth:0,n=(i=t[r]._chart?t[r]._chart.config.data.datasets[a].hoverBorderWidth:0)>(n=e>n?e:n)?i:n;return n}})}},{25:25,40:40,45:45}],18:[function(t,e,i){"use strict";var n=t(25),a=t(40),o=t(45);n._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(t){function e(t,e){return o.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,update:function(t){var i,n,a,r=this,s=r.getMeta(),l=s.dataset,u=s.data||[],d=r.chart.options,c=d.elements.line,h=r.getScaleForId(s.yAxisID),f=r.getDataset(),g=e(f,d);for(g&&(a=l.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),l._scale=h,l._datasetIndex=r.index,l._children=u,l._model={spanGaps:f.spanGaps?f.spanGaps:d.spanGaps,tension:a.tension?a.tension:o.valueOrDefault(f.lineTension,c.tension),backgroundColor:a.backgroundColor?a.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:f.borderWidth||c.borderWidth,borderColor:a.borderColor?a.borderColor:f.borderColor||c.borderColor,borderCapStyle:a.borderCapStyle?a.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:a.borderDash?a.borderDash:f.borderDash||c.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:a.fill?a.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:a.steppedLine?a.steppedLine:o.valueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:a.cubicInterpolationMode?a.cubicInterpolationMode:o.valueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode)},l.pivot()),i=0,n=u.length;i<n;++i)r.updateElement(u[i],i,t);for(g&&0!==l._model.tension&&r.updateBezierControlPoints(),i=0,n=u.length;i<n;++i)u[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,n=this.getDataset(),a=t.custom||{};return a.backgroundColor?i=a.backgroundColor:n.pointBackgroundColor?i=o.valueAtIndexOrDefault(n.pointBackgroundColor,e,i):n.backgroundColor&&(i=n.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,n=this.getDataset(),a=t.custom||{};return a.borderColor?i=a.borderColor:n.pointBorderColor?i=o.valueAtIndexOrDefault(n.pointBorderColor,e,i):n.borderColor&&(i=n.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,n=this.getDataset(),a=t.custom||{};return isNaN(a.borderWidth)?!isNaN(n.pointBorderWidth)||o.isArray(n.pointBorderWidth)?i=o.valueAtIndexOrDefault(n.pointBorderWidth,e,i):isNaN(n.borderWidth)||(i=n.borderWidth):i=a.borderWidth,i},updateElement:function(t,e,i){var n,a,r=this,s=r.getMeta(),l=t.custom||{},u=r.getDataset(),d=r.index,c=u.data[e],h=r.getScaleForId(s.yAxisID),f=r.getScaleForId(s.xAxisID),g=r.chart.options.elements.point;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),n=f.getPixelForValue("object"==typeof c?c:NaN,e,d),a=i?h.getBasePixel():r.calculatePointY(c,e,d),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:n,y:a,skip:l.skip||isNaN(n)||isNaN(a),radius:l.radius||o.valueAtIndexOrDefault(u.pointRadius,e,g.radius),pointStyle:l.pointStyle||o.valueAtIndexOrDefault(u.pointStyle,e,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,hitRadius:l.hitRadius||o.valueAtIndexOrDefault(u.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,i){var n,a,o,r=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),u=0,d=0;if(l.options.stacked){for(n=0;n<i;n++)if(a=r.data.datasets[n],"line"===(o=r.getDatasetMeta(n)).type&&o.yAxisID===l.id&&r.isDatasetVisible(n)){var c=Number(l.getRightValue(a.data[e]));c<0?d+=c||0:u+=c||0}var h=Number(l.getRightValue(t));return h<0?l.getPixelForValue(d+h):l.getPixelForValue(u+h)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,a=this.getMeta(),r=this.chart.chartArea,s=a.data||[];function l(t,e,i){return Math.max(Math.min(t,i),e)}if(a.dataset._model.spanGaps&&(s=s.filter(function(t){return!t._model.skip})),"monotone"===a.dataset._model.cubicInterpolationMode)o.splineCurveMonotone(s);else for(t=0,e=s.length;t<e;++t)i=s[t]._model,n=o.splineCurve(o.previousItem(s,t)._model,i,o.nextItem(s,t)._model,a.dataset._model.tension),i.controlPointPreviousX=n.previous.x,i.controlPointPreviousY=n.previous.y,i.controlPointNextX=n.next.x,i.controlPointNextY=n.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,e=s.length;t<e;++t)(i=s[t]._model).controlPointPreviousX=l(i.controlPointPreviousX,r.left,r.right),i.controlPointPreviousY=l(i.controlPointPreviousY,r.top,r.bottom),i.controlPointNextX=l(i.controlPointNextX,r.left,r.right),i.controlPointNextY=l(i.controlPointNextY,r.top,r.bottom)},draw:function(){var t=this.chart,i=this.getMeta(),n=i.data||[],a=t.chartArea,r=n.length,s=0;for(o.canvas.clipArea(t.ctx,a),e(this.getDataset(),t.options)&&i.dataset.draw(),o.canvas.unclipArea(t.ctx);s<r;++s)n[s].draw(a)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model;a.radius=n.hoverRadius||o.valueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),a.backgroundColor=n.hoverBackgroundColor||o.valueAtIndexOrDefault(e.pointHoverBackgroundColor,i,o.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor||o.valueAtIndexOrDefault(e.pointHoverBorderColor,i,o.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth||o.valueAtIndexOrDefault(e.pointHoverBorderWidth,i,a.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),r.radius=a.radius||o.valueAtIndexOrDefault(i.pointRadius,n,e.chart.options.elements.point.radius),r.backgroundColor=e.getPointBackgroundColor(t,n),r.borderColor=e.getPointBorderColor(t,n),r.borderWidth=e.getPointBorderWidth(t,n)}})}},{25:25,40:40,45:45}],19:[function(t,e,i){"use strict";var n=t(25),a=t(40),o=t(45);n._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var o=0;o<n[0].data.length;++o)e.push('<li><span style="background-color:'+n[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),r=e.datasets[0],s=a.data[n].custom||{},l=o.valueAtIndexOrDefault,u=t.options.elements.arc;return{text:i,fillStyle:s.backgroundColor?s.backgroundColor:l(r.backgroundColor,n,u.backgroundColor),strokeStyle:s.borderColor?s.borderColor:l(r.borderColor,n,u.borderColor),lineWidth:s.borderWidth?s.borderWidth:l(r.borderWidth,n,u.borderWidth),hidden:isNaN(r.data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,o=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;i<n;++i)(a=r.getDatasetMeta(i)).data[o].hidden=!a.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),e.exports=function(t){t.controllers.polarArea=t.DatasetController.extend({dataElementType:a.Arc,linkScales:o.noop,update:function(t){var e=this,i=e.chart,n=i.chartArea,a=e.getMeta(),r=i.options,s=r.elements.arc,l=Math.min(n.right-n.left,n.bottom-n.top);i.outerRadius=Math.max((l-s.borderWidth/2)/2,0),i.innerRadius=Math.max(r.cutoutPercentage?i.outerRadius/100*r.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),e.outerRadius=i.outerRadius-i.radiusLength*e.index,e.innerRadius=e.outerRadius-i.radiusLength,a.count=e.countVisibleElements(),o.each(a.data,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){for(var n=this,a=n.chart,r=n.getDataset(),s=a.options,l=s.animation,u=a.scale,d=a.data.labels,c=n.calculateCircumference(r.data[e]),h=u.xCenter,f=u.yCenter,g=0,p=n.getMeta(),m=0;m<e;++m)isNaN(r.data[m])||p.data[m].hidden||++g;var v=s.startAngle,b=t.hidden?0:u.getDistanceFromCenterForValue(r.data[e]),x=v+c*g,y=x+(t.hidden?0:c),k=l.animateScale?0:u.getDistanceFromCenterForValue(r.data[e]);o.extend(t,{_datasetIndex:n.index,_index:e,_scale:u,_model:{x:h,y:f,innerRadius:0,outerRadius:i?k:b,startAngle:i&&l.animateRotate?v:x,endAngle:i&&l.animateRotate?v:y,label:o.valueAtIndexOrDefault(d,e,d[e])}}),n.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),i=0;return o.each(e.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{25:25,40:40,45:45}],20:[function(t,e,i){"use strict";var n=t(25),a=t(40),o=t(45);n._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,linkScales:o.noop,update:function(t){var e=this,i=e.getMeta(),n=i.dataset,a=i.data,r=n.custom||{},s=e.getDataset(),l=e.chart.options.elements.line,u=e.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),o.extend(i.dataset,{_datasetIndex:e.index,_scale:u,_children:a,_loop:!0,_model:{tension:r.tension?r.tension:o.valueOrDefault(s.lineTension,l.tension),backgroundColor:r.backgroundColor?r.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:s.borderWidth||l.borderWidth,borderColor:r.borderColor?r.borderColor:s.borderColor||l.borderColor,fill:r.fill?r.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:r.borderDash?r.borderDash:s.borderDash||l.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle}}),i.dataset.pivot(),o.each(a,function(i,n){e.updateElement(i,n,t)},e),e.updateBezierControlPoints()},updateElement:function(t,e,i){var n=this,a=t.custom||{},r=n.getDataset(),s=n.chart.scale,l=n.chart.options.elements.point,u=s.getPointPositionForValue(e,r.data[e]);void 0!==r.radius&&void 0===r.pointRadius&&(r.pointRadius=r.radius),void 0!==r.hitRadius&&void 0===r.pointHitRadius&&(r.pointHitRadius=r.hitRadius),o.extend(t,{_datasetIndex:n.index,_index:e,_scale:s,_model:{x:i?s.xCenter:u.x,y:i?s.yCenter:u.y,tension:a.tension?a.tension:o.valueOrDefault(r.lineTension,n.chart.options.elements.line.tension),radius:a.radius?a.radius:o.valueAtIndexOrDefault(r.pointRadius,e,l.radius),backgroundColor:a.backgroundColor?a.backgroundColor:o.valueAtIndexOrDefault(r.pointBackgroundColor,e,l.backgroundColor),borderColor:a.borderColor?a.borderColor:o.valueAtIndexOrDefault(r.pointBorderColor,e,l.borderColor),borderWidth:a.borderWidth?a.borderWidth:o.valueAtIndexOrDefault(r.pointBorderWidth,e,l.borderWidth),pointStyle:a.pointStyle?a.pointStyle:o.valueAtIndexOrDefault(r.pointStyle,e,l.pointStyle),hitRadius:a.hitRadius?a.hitRadius:o.valueAtIndexOrDefault(r.pointHitRadius,e,l.hitRadius)}}),t._model.skip=a.skip?a.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,e=this.getMeta();o.each(e.data,function(i,n){var a=i._model,r=o.splineCurve(o.previousItem(e.data,n,!0)._model,a,o.nextItem(e.data,n,!0)._model,a.tension);a.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),a.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),a.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),a.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),i.pivot()})},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,a=t._model;a.radius=i.hoverRadius?i.hoverRadius:o.valueAtIndexOrDefault(e.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),a.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:o.valueAtIndexOrDefault(e.pointHoverBackgroundColor,n,o.getHoverColor(a.backgroundColor)),a.borderColor=i.hoverBorderColor?i.hoverBorderColor:o.valueAtIndexOrDefault(e.pointHoverBorderColor,n,o.getHoverColor(a.borderColor)),a.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:o.valueAtIndexOrDefault(e.pointHoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,a=t._model,r=this.chart.options.elements.point;a.radius=i.radius?i.radius:o.valueAtIndexOrDefault(e.pointRadius,n,r.radius),a.backgroundColor=i.backgroundColor?i.backgroundColor:o.valueAtIndexOrDefault(e.pointBackgroundColor,n,r.backgroundColor),a.borderColor=i.borderColor?i.borderColor:o.valueAtIndexOrDefault(e.pointBorderColor,n,r.borderColor),a.borderWidth=i.borderWidth?i.borderWidth:o.valueAtIndexOrDefault(e.pointBorderWidth,n,r.borderWidth)}})}},{25:25,40:40,45:45}],21:[function(t,e,i){"use strict";t(25)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),e.exports=function(t){t.controllers.scatter=t.controllers.line}},{25:25}],22:[function(t,e,i){"use strict";var n=t(25),a=t(26),o=t(45);n._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:o.noop,onComplete:o.noop}}),e.exports=function(t){t.Animation=a.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,n){var a,o,r=this.animations;for(e.chart=t,n||(t.animating=!0),a=0,o=r.length;a<o;++a)if(r[a].chart===t)return void(r[a]=e);r.push(e),1===r.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=o.findIndex(this.animations,function(e){return e.chart===t});-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=o.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),i=0;t.dropFrames>1&&(i=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+i);var n=Date.now();t.dropFrames+=(n-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var e,i,n=this.animations,a=0;a<n.length;)i=(e=n[a]).chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),o.callback(e.render,[i,e],i),o.callback(e.onAnimationProgress,[e],i),e.currentStep>=e.numSteps?(o.callback(e.onAnimationComplete,[e],i),i.animating=!1,n.splice(a,1)):++a}},Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},{25:25,26:26,45:45}],23:[function(t,e,i){"use strict";var n=t(25),a=t(45),o=t(28),r=t(30),s=t(48),l=t(31);e.exports=function(t){function e(t){return"top"===t||"bottom"===t}t.types={},t.instances={},t.controllers={},a.extend(t.prototype,{construct:function(e,i){var o,r,l=this;(r=(o=(o=i)||{}).data=o.data||{}).datasets=r.datasets||[],r.labels=r.labels||[],o.options=a.configMerge(n.global,n[o.type],o.options||{}),i=o;var u=s.acquireContext(e,i),d=u&&u.canvas,c=d&&d.height,h=d&&d.width;l.id=a.uid(),l.ctx=u,l.canvas=d,l.config=i,l.width=h,l.height=c,l.aspectRatio=c?h/c:null,l.options=i.options,l._bufferedRender=!1,l.chart=l,l.controller=l,t.instances[l.id]=l,Object.defineProperty(l,"data",{get:function(){return l.config.data},set:function(t){l.config.data=t}}),u&&d?(l.initialize(),l.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return l.notify(t,"beforeInit"),a.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),l.notify(t,"afterInit"),t},clear:function(){return a.canvas.clear(this),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,n=e.canvas,o=i.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(a.getMaximumWidth(n))),s=Math.max(0,Math.floor(o?r/o:a.getMaximumHeight(n)));if((e.width!==r||e.height!==s)&&(n.width=e.width=r,n.height=e.height=s,n.style.width=r+"px",n.style.height=s+"px",a.retinaScale(e,i.devicePixelRatio),!t)){var u={width:r,height:s};l.notify(e,"resize",[u]),e.options.onResize&&e.options.onResize(e,u),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;a.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),a.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var i=this,n=i.options,o=i.scales||{},r=[],s=Object.keys(o).reduce(function(t,e){return t[e]=!1,t},{});n.scales&&(r=r.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),n.scale&&r.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),a.each(r,function(n){var r=n.options,l=r.id,u=a.valueOrDefault(r.type,n.dtype);e(r.position)!==e(n.dposition)&&(r.position=n.dposition),s[l]=!0;var d=null;if(l in o&&o[l].type===u)(d=o[l]).options=r,d.ctx=i.ctx,d.chart=i;else{var c=t.scaleService.getScaleConstructor(u);if(!c)return;d=new c({id:l,type:u,options:r,ctx:i.ctx,chart:i}),o[d.id]=d}d.mergeTicksOptions(),n.isDefault&&(i.scale=d)}),a.each(s,function(t,e){t||delete o[e]}),i.scales=o,t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,i=[],n=[];return a.each(e.data.datasets,function(a,o){var r=e.getDatasetMeta(o),s=a.type||e.config.type;if(r.type&&r.type!==s&&(e.destroyDatasetMeta(o),r=e.getDatasetMeta(o)),r.type=s,i.push(r.type),r.controller)r.controller.updateIndex(o),r.controller.linkScales();else{var l=t.controllers[r.type];if(void 0===l)throw new Error('"'+r.type+'" is not a chart type.');r.controller=new l(e,o),n.push(r.controller)}},e),n},resetElements:function(){var t=this;a.each(t.data.datasets,function(e,i){t.getDatasetMeta(i).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(e){var i,n,o=this;if(e&&"object"==typeof e||(e={duration:e,lazy:arguments[1]}),n=(i=o).options,a.each(i.scales,function(t){r.removeBox(i,t)}),n=a.configMerge(t.defaults.global,t.defaults[i.config.type],n),i.options=i.config.options=n,i.ensureScalesHaveIDs(),i.buildOrUpdateScales(),i.tooltip._options=n.tooltips,i.tooltip.initialize(),l._invalidate(o),!1!==l.notify(o,"beforeUpdate")){o.tooltip._data=o.data;var s=o.buildOrUpdateControllers();a.each(o.data.datasets,function(t,e){o.getDatasetMeta(e).controller.buildOrUpdateElements()},o),o.updateLayout(),o.options.animation&&o.options.animation.duration&&a.each(s,function(t){t.reset()}),o.updateDatasets(),o.tooltip.initialize(),o.lastActive=[],l.notify(o,"afterUpdate"),o._bufferedRender?o._bufferedRequest={duration:e.duration,easing:e.easing,lazy:e.lazy}:o.render(e)}},updateLayout:function(){!1!==l.notify(this,"beforeLayout")&&(r.update(this,this.width,this.height),l.notify(this,"afterScaleUpdate"),l.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==l.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);l.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==l.notify(this,"beforeDatasetUpdate",[i])&&(e.controller.update(),l.notify(this,"afterDatasetUpdate",[i]))},render:function(e){var i=this;e&&"object"==typeof e||(e={duration:e,lazy:arguments[1]});var n=e.duration,o=e.lazy;if(!1!==l.notify(i,"beforeRender")){var r=i.options.animation,s=function(t){l.notify(i,"afterRender"),a.callback(r&&r.onComplete,[t],i)};if(r&&(void 0!==n&&0!==n||void 0===n&&0!==r.duration)){var u=new t.Animation({numSteps:(n||r.duration)/16.66,easing:e.easing||r.easing,render:function(t,e){var i=a.easing.effects[e.easing],n=e.currentStep,o=n/e.numSteps;t.draw(i(o),o,n)},onAnimationProgress:r.onProgress,onAnimationComplete:s});t.animationService.addAnimation(i,u,n,o)}else i.draw(),s(new t.Animation({numSteps:0,chart:i}));return i}},draw:function(t){var e=this;e.clear(),a.isNullOrUndef(t)&&(t=1),e.transition(t),!1!==l.notify(e,"beforeDraw",[t])&&(a.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),l.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==l.notify(e,"beforeDatasetsDraw",[t])){for(var i=(e.data.datasets||[]).length-1;i>=0;--i)e.isDatasetVisible(i)&&e.drawDataset(i,t);l.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i=this.getDatasetMeta(t),n={meta:i,index:t,easingValue:e};!1!==l.notify(this,"beforeDatasetDraw",[n])&&(i.controller.draw(e),l.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==l.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),l.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return o.modes.single(this,t)},getElementsAtEvent:function(t){return o.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return o.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var n=o.modes[e];return"function"==typeof n?n(this,t,i):[]},getDatasetAtEvent:function(t){return o.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],n=i._meta&&i._meta[e];n&&(n.controller.destroy(),delete i._meta[e])},destroy:function(){var e,i,n=this,o=n.canvas;for(n.stop(),e=0,i=n.data.datasets.length;e<i;++e)n.destroyDatasetMeta(e);o&&(n.unbindEvents(),a.canvas.clear(n),s.releaseContext(n.ctx),n.canvas=null,n.ctx=null),l.notify(n,"destroy"),delete t.instances[n.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e)},bindEvents:function(){var t=this,e=t._listeners={},i=function(){t.eventHandler.apply(t,arguments)};a.each(t.options.events,function(n){s.addEventListener(t,n,i),e[n]=i}),t.options.responsive&&(i=function(){t.resize()},s.addEventListener(t,"resize",i),e.resize=i)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,a.each(e,function(e,i){s.removeEventListener(t,i,e)}))},updateHoverStyle:function(t,e,i){var n,a,o,r=i?"setHoverStyle":"removeHoverStyle";for(a=0,o=t.length;a<o;++a)(n=t[a])&&this.getDatasetMeta(n._datasetIndex).controller[r](n)},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==l.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var n=e.handleEvent(t);i&&(n=i._start?i.handleEvent(t):n|i.handleEvent(t)),l.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):n&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,n=i.options||{},o=n.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,o.mode,o),a.callback(n.onHover||n.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,o.mode,!1),i.active.length&&o.mode&&i.updateHoverStyle(i.active,o.mode,!0),e=!a.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),t.Controller=t}},{25:25,28:28,30:30,31:31,45:45,48:48}],24:[function(t,e,i){"use strict";var n=t(45);e.exports=function(t){var e=["push","pop","shift","splice","unshift"];function i(t,i){var n=t._chartjs;if(n){var a=n.listeners,o=a.indexOf(i);-1!==o&&a.splice(o,1),a.length>0||(e.forEach(function(e){delete t[e]}),delete t._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},n.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),i=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=i.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=i.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&i(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],a=i.data;for(t=0,e=n.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,a,o=this,r=o.getDataset(),s=r.data||(r.data=[]);o._data!==s&&(o._data&&i(o._data,o),a=o,(t=s)._chartjs?t._chartjs.listeners.push(a):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[a]}}),e.forEach(function(e){var i="onData"+e.charAt(0).toUpperCase()+e.slice(1),a=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),o=a.apply(this,e);return n.each(t._chartjs.listeners,function(t){"function"==typeof t[i]&&t[i].apply(t,e)}),o}})})),o._data=s),o.resyncElements()},update:n.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,a=0;a<n;++a)i[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},removeHoverStyle:function(t,e){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},r=n.valueAtIndexOrDefault,s=t._model;s.backgroundColor=o.backgroundColor?o.backgroundColor:r(i.backgroundColor,a,e.backgroundColor),s.borderColor=o.borderColor?o.borderColor:r(i.borderColor,a,e.borderColor),s.borderWidth=o.borderWidth?o.borderWidth:r(i.borderWidth,a,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},o=n.valueAtIndexOrDefault,r=n.getHoverColor,s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:o(e.hoverBackgroundColor,i,r(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:o(e.hoverBorderColor,i,r(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:o(e.hoverBorderWidth,i,s.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):n>i&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=n.inherits}},{45:45}],25:[function(t,e,i){"use strict";var n=t(45);e.exports={_set:function(t,e){return n.merge(this[t]||(this[t]={}),e)}}},{45:45}],26:[function(t,e,i){"use strict";var n=t(3),a=t(45);var o=function(t){a.extend(this,t),this.initialize.apply(this,arguments)};a.extend(o.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=a.clone(t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,a=e._start,o=e._view;return i&&1!==t?(o||(o=e._view={}),a||(a=e._start={}),function(t,e,i,a){var o,r,s,l,u,d,c,h,f,g=Object.keys(i);for(o=0,r=g.length;o<r;++o)if(d=i[s=g[o]],e.hasOwnProperty(s)||(e[s]=d),(l=e[s])!==d&&"_"!==s[0]){if(t.hasOwnProperty(s)||(t[s]=l),(c=typeof d)==typeof(u=t[s]))if("string"===c){if((h=n(u)).valid&&(f=n(d)).valid){e[s]=f.mix(h,a).rgbString();continue}}else if("number"===c&&isFinite(u)&&isFinite(d)){e[s]=u+(d-u)*a;continue}e[s]=d}}(a,o,i,t),e):(e._view=i,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return a.isNumber(this._model.x)&&a.isNumber(this._model.y)}}),o.extend=a.inherits,e.exports=o},{3:3,45:45}],27:[function(t,e,i){"use strict";var n=t(3),a=t(25),o=t(45);e.exports=function(t){function e(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function i(t){return null!=t&&"none"!==t}function r(t,n,a){var o=document.defaultView,r=t.parentNode,s=o.getComputedStyle(t)[n],l=o.getComputedStyle(r)[n],u=i(s),d=i(l),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(s,t,a):c,d?e(l,r,a):c):"none"}o.configMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(e,i,n,a){var r=i[e]||{},s=n[e];"scales"===e?i[e]=o.scaleMerge(r,s):"scale"===e?i[e]=o.merge(r,[t.scaleService.getScaleDefaults(s.type),s]):o._merger(e,i,n,a)}})},o.scaleMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(e,i,n,a){if("xAxes"===e||"yAxes"===e){var r,s,l,u=n[e].length;for(i[e]||(i[e]=[]),r=0;r<u;++r)l=n[e][r],s=o.valueOrDefault(l.type,"xAxes"===e?"category":"linear"),r>=i[e].length&&i[e].push({}),!i[e][r].type||l.type&&l.type!==i[e][r].type?o.merge(i[e][r],[t.scaleService.getScaleDefaults(s),l]):o.merge(i[e][r],l)}else o._merger(e,i,n,a)}})},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return o.each(t,function(t){e(t)&&i.push(t)}),i},o.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,a=t.length;n<a;++n)if(e.call(i,t[n],n,t))return n;return-1},o.findNextWhere=function(t,e,i){o.isNullOrUndef(i)&&(i=-1);for(var n=i+1;n<t.length;n++){var a=t[n];if(e(a))return a}},o.findPreviousWhere=function(t,e,i){o.isNullOrUndef(i)&&(i=t.length);for(var n=i-1;n>=0;n--){var a=t[n];if(e(a))return a}},o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,i){return Math.abs(t-e)<i},o.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&i+e>t},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),o=Math.atan2(n,i);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:a}},o.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},o.aliasPixel=function(t){return t%2==0?0:.5},o.splineCurve=function(t,e,i,n){var a=t.skip?e:t,o=e,r=i.skip?e:i,s=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),l=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),u=s/(s+l),d=l/(s+l),c=n*(u=isNaN(u)?0:u),h=n*(d=isNaN(d)?0:d);return{previous:{x:o.x-c*(r.x-a.x),y:o.y-c*(r.y-a.y)},next:{x:o.x+h*(r.x-a.x),y:o.y+h*(r.y-a.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,i,n,a,r,s,l,u,d,c=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),h=c.length;for(e=0;e<h;++e)if(!(n=c[e]).model.skip){if(i=e>0?c[e-1]:null,(a=e<h-1?c[e+1]:null)&&!a.model.skip){var f=a.model.x-n.model.x;n.deltaK=0!==f?(a.model.y-n.model.y)/f:0}!i||i.model.skip?n.mK=n.deltaK:!a||a.model.skip?n.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<h-1;++e)n=c[e],a=c[e+1],n.model.skip||a.model.skip||(o.almostEquals(n.deltaK,0,this.EPSILON)?n.mK=a.mK=0:(r=n.mK/n.deltaK,s=a.mK/n.deltaK,(u=Math.pow(r,2)+Math.pow(s,2))<=9||(l=3/Math.sqrt(u),n.mK=r*l*n.deltaK,a.mK=s*l*n.deltaK)));for(e=0;e<h;++e)(n=c[e]).model.skip||(i=e>0?c[e-1]:null,a=e<h-1?c[e+1]:null,i&&!i.model.skip&&(d=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-d,n.model.controlPointPreviousY=n.model.y-d*n.mK),a&&!a.model.skip&&(d=(a.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+d,n.model.controlPointNextY=n.model.y+d*n.mK))},o.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},o.niceNum=function(t,e){var i=Math.floor(o.log10(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)},o.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},o.getRelativePosition=function(t,e){var i,n,a=t.originalEvent||t,r=t.currentTarget||t.srcElement,s=r.getBoundingClientRect(),l=a.touches;l&&l.length>0?(i=l[0].clientX,n=l[0].clientY):(i=a.clientX,n=a.clientY);var u=parseFloat(o.getStyle(r,"padding-left")),d=parseFloat(o.getStyle(r,"padding-top")),c=parseFloat(o.getStyle(r,"padding-right")),h=parseFloat(o.getStyle(r,"padding-bottom")),f=s.right-s.left-u-c,g=s.bottom-s.top-d-h;return{x:i=Math.round((i-s.left-u)/f*r.width/e.currentDevicePixelRatio),y:n=Math.round((n-s.top-d)/g*r.height/e.currentDevicePixelRatio)}},o.getConstraintWidth=function(t){return r(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return r(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode;if(!e)return t.clientWidth;var i=parseInt(o.getStyle(e,"padding-left"),10),n=parseInt(o.getStyle(e,"padding-right"),10),a=e.clientWidth-i-n,r=o.getConstraintWidth(t);return isNaN(r)?a:Math.min(a,r)},o.getMaximumHeight=function(t){var e=t.parentNode;if(!e)return t.clientHeight;var i=parseInt(o.getStyle(e,"padding-top"),10),n=parseInt(o.getStyle(e,"padding-bottom"),10),a=e.clientHeight-i-n,r=o.getConstraintHeight(t);return isNaN(r)?a:Math.min(a,r)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||window.devicePixelRatio||1;if(1!==i){var n=t.canvas,a=t.height,o=t.width;n.height=a*i,n.width=o*i,t.ctx.scale(i,i),n.style.height||n.style.width||(n.style.height=a+"px",n.style.width=o+"px")}},o.fontString=function(t,e,i){return e+" "+t+"px "+i},o.longestText=function(t,e,i,n){var a=(n=n||{}).data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},r=n.garbageCollect=[],n.font=e),t.font=e;var s=0;o.each(i,function(e){null!=e&&!0!==o.isArray(e)?s=o.measureText(t,a,r,s,e):o.isArray(e)&&o.each(e,function(e){null==e||o.isArray(e)||(s=o.measureText(t,a,r,s,e))})});var l=r.length/2;if(l>i.length){for(var u=0;u<l;u++)delete a[r[u]];r.splice(0,l)}return s},o.measureText=function(t,e,i,n,a){var o=e[a];return o||(o=e[a]=t.measureText(a).width,i.push(a)),o>n&&(n=o),n},o.numberOfLabelLines=function(t){var e=1;return o.each(t,function(t){o.isArray(t)&&t.length>e&&(e=t.length)}),e},o.color=n?function(t){return t instanceof CanvasGradient&&(t=a.global.defaultColor),n(t)}:function(t){return console.error("Color.js not found!"),t},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{25:25,3:3,45:45}],28:[function(t,e,i){"use strict";var n=t(45);function a(t,e){return t.native?{x:t.x,y:t.y}:n.getRelativePosition(t,e)}function o(t,e){var i,n,a,o,r;for(n=0,o=t.data.datasets.length;n<o;++n)if(t.isDatasetVisible(n))for(a=0,r=(i=t.getDatasetMeta(n)).data.length;a<r;++a){var s=i.data[a];s._view.skip||e(s)}}function r(t,e){var i=[];return o(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function s(t,e,i,n){var a=Number.POSITIVE_INFINITY,r=[];return o(t,function(t){if(!i||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=n(e,o);s<a?(r=[t],a=s):s===a&&r.push(t)}}),r}function l(t){var e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){var a=e?Math.abs(t.x-n.x):0,o=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}function u(t,e,i){var n=a(e,t);i.axis=i.axis||"x";var o=l(i.axis),u=i.intersect?r(t,n):s(t,n,!1,o),d=[];return u.length?(t.data.datasets.forEach(function(e,i){if(t.isDatasetVisible(i)){var n=t.getDatasetMeta(i).data[u[0]._index];n&&!n._view.skip&&d.push(n)}}),d):[]}e.exports={modes:{single:function(t,e){var i=a(e,t),n=[];return o(t,function(t){if(t.inRange(i.x,i.y))return n.push(t),n}),n.slice(0,1)},label:u,index:u,dataset:function(t,e,i){var n=a(e,t);i.axis=i.axis||"xy";var o=l(i.axis),u=i.intersect?r(t,n):s(t,n,!1,o);return u.length>0&&(u=t.getDatasetMeta(u[0]._datasetIndex).data),u},"x-axis":function(t,e){return u(t,e,{intersect:!1})},point:function(t,e){return r(t,a(e,t))},nearest:function(t,e,i){var n=a(e,t);i.axis=i.axis||"xy";var o=l(i.axis),r=s(t,n,i.intersect,o);return r.length>1&&r.sort(function(t,e){var i=t.getArea()-e.getArea();return 0===i&&(i=t._datasetIndex-e._datasetIndex),i}),r.slice(0,1)},x:function(t,e,i){var n=a(e,t),r=[],s=!1;return o(t,function(t){t.inXRange(n.x)&&r.push(t),t.inRange(n.x,n.y)&&(s=!0)}),i.intersect&&!s&&(r=[]),r},y:function(t,e,i){var n=a(e,t),r=[],s=!1;return o(t,function(t){t.inYRange(n.y)&&r.push(t),t.inRange(n.x,n.y)&&(s=!0)}),i.intersect&&!s&&(r=[]),r}}}},{45:45}],29:[function(t,e,i){"use strict";t(25)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.Chart=t,t}},{25:25}],30:[function(t,e,i){"use strict";var n=t(45);function a(t,e){return n.where(t,function(t){return t.position===e})}function o(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,i){var n=e?i:t,a=e?t:i;return n.weight===a.weight?n._tmpIndex_-a._tmpIndex_:n.weight-a.weight}),t.forEach(function(t){delete t._tmpIndex_})}e.exports={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,a=["fullWidth","position","weight"],o=a.length,r=0;r<o;++r)n=a[r],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(t,e,i){if(t){var r=t.options.layout||{},s=n.options.toPadding(r.padding),l=s.left,u=s.right,d=s.top,c=s.bottom,h=a(t.boxes,"left"),f=a(t.boxes,"right"),g=a(t.boxes,"top"),p=a(t.boxes,"bottom"),m=a(t.boxes,"chartArea");o(h,!0),o(f,!1),o(g,!0),o(p,!1);var v=e-l-u,b=i-d-c,x=b/2,y=(e-v/2)/(h.length+f.length),k=(i-x)/(g.length+p.length),M=v,w=b,S=[];n.each(h.concat(f,g,p),function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?v:M,k),w-=e.height):(e=t.update(y,w),M-=e.width),S.push({horizontal:i,minSize:e,box:t})});var C=0,_=0,D=0,I=0;n.each(g.concat(p),function(t){if(t.getPadding){var e=t.getPadding();C=Math.max(C,e.left),_=Math.max(_,e.right)}}),n.each(h.concat(f),function(t){if(t.getPadding){var e=t.getPadding();D=Math.max(D,e.top),I=Math.max(I,e.bottom)}});var P=l,A=u,T=d,F=c;n.each(h.concat(f),N),n.each(h,function(t){P+=t.width}),n.each(f,function(t){A+=t.width}),n.each(g.concat(p),N),n.each(g,function(t){T+=t.height}),n.each(p,function(t){F+=t.height}),n.each(h.concat(f),function(t){var e=n.findNextWhere(S,function(e){return e.box===t}),i={left:0,right:0,top:T,bottom:F};e&&t.update(e.minSize.width,w,i)}),P=l,A=u,T=d,F=c,n.each(h,function(t){P+=t.width}),n.each(f,function(t){A+=t.width}),n.each(g,function(t){T+=t.height}),n.each(p,function(t){F+=t.height});var O=Math.max(C-P,0);P+=O,A+=Math.max(_-A,0);var R=Math.max(D-T,0);T+=R,F+=Math.max(I-F,0);var L=i-T-F,z=e-P-A;z===M&&L===w||(n.each(h,function(t){t.height=L}),n.each(f,function(t){t.height=L}),n.each(g,function(t){t.fullWidth||(t.width=z)}),n.each(p,function(t){t.fullWidth||(t.width=z)}),w=L,M=z);var B=l+O,W=d+R;n.each(h.concat(g),V),B+=M,W+=w,n.each(f,V),n.each(p,V),t.chartArea={left:P,top:T,right:P+M,bottom:T+w},n.each(m,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(M,w)})}function N(t){var e=n.findNextWhere(S,function(e){return e.box===t});if(e)if(t.isHorizontal()){var i={left:Math.max(P,C),right:Math.max(A,_),top:0,bottom:0};t.update(t.fullWidth?v:M,b/2,i)}else t.update(e.minSize.width,w)}function V(t){t.isHorizontal()?(t.left=t.fullWidth?l:P,t.right=t.fullWidth?e-u:P+M,t.top=W,t.bottom=W+t.height,W=t.bottom):(t.left=B,t.right=B+t.width,t.top=T,t.bottom=T+w,B=t.right)}}}},{45:45}],31:[function(t,e,i){"use strict";var n=t(25),a=t(45);n._set("global",{plugins:{}}),e.exports={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,a,o,r,s,l=this.descriptors(t),u=l.length;for(n=0;n<u;++n)if("function"==typeof(s=(o=(a=l[n]).plugin)[e])&&((r=[t].concat(i||[])).push(a.options),!1===s.apply(o,r)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var i=[],o=[],r=t&&t.config||{},s=r.options&&r.options.plugins||{};return this._plugins.concat(r.plugins||[]).forEach(function(t){if(-1===i.indexOf(t)){var e=t.id,r=s[e];!1!==r&&(!0===r&&(r=a.clone(n.global.plugins[e])),i.push(t),o.push({plugin:t,options:r||{}}))}}),e.descriptors=o,e.id=this._cacheId,o},_invalidate:function(t){delete t.$plugins}}},{25:25,45:45}],32:[function(t,e,i){"use strict";var n=t(25),a=t(26),o=t(45),r=t(34);function s(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(t[e].label);return n}function l(t,e,i){var n=t.getPixelForTick(e);return i&&(n-=0===e?(t.getPixelForTick(1)-n)/2:(n-t.getPixelForTick(e-1))/2),n}n._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:r.formatters.values,minor:{},major:{}}}),e.exports=function(t){function e(t,e,i){return o.isArray(e)?o.longestText(t,i,e):t.measureText(e).width}function i(t){var e=o.valueOrDefault,i=n.global,a=e(t.fontSize,i.defaultFontSize),r=e(t.fontStyle,i.defaultFontStyle),s=e(t.fontFamily,i.defaultFontFamily);return{size:a,style:r,family:s,font:o.fontString(a,r,s)}}function r(t){return o.options.toLineHeight(o.valueOrDefault(t.lineHeight,1.2),o.valueOrDefault(t.fontSize,n.global.defaultFontSize))}t.Scale=a.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){o.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var n,a,r,s,l,u,d=this;for(d.beforeUpdate(),d.maxWidth=t,d.maxHeight=e,d.margins=o.extend({left:0,right:0,top:0,bottom:0},i),d.longestTextCache=d.longestTextCache||{},d.beforeSetDimensions(),d.setDimensions(),d.afterSetDimensions(),d.beforeDataLimits(),d.determineDataLimits(),d.afterDataLimits(),d.beforeBuildTicks(),l=d.buildTicks()||[],d.afterBuildTicks(),d.beforeTickToLabelConversion(),r=d.convertTicksToLabels(l)||d.ticks,d.afterTickToLabelConversion(),d.ticks=r,n=0,a=r.length;n<a;++n)s=r[n],(u=l[n])?u.label=s:l.push(u={label:s,major:!1});return d._ticks=l,d.beforeCalculateTickRotation(),d.calculateTickRotation(),d.afterCalculateTickRotation(),d.beforeFit(),d.fit(),d.afterFit(),d.afterUpdate(),d.minSize},afterUpdate:function(){o.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){o.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){o.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){o.callback(this.options.beforeDataLimits,[this])},determineDataLimits:o.noop,afterDataLimits:function(){o.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){o.callback(this.options.beforeBuildTicks,[this])},buildTicks:o.noop,afterBuildTicks:function(){o.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){o.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){o.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){o.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,n=t.options.ticks,a=s(t._ticks),r=i(n);e.font=r.font;var l=n.minRotation||0;if(a.length&&t.options.display&&t.isHorizontal())for(var u,d=o.longestText(e,r.font,a,t.longestTextCache),c=d,h=t.getPixelForTick(1)-t.getPixelForTick(0)-6;c>h&&l<n.maxRotation;){var f=o.toRadians(l);if(u=Math.cos(f),Math.sin(f)*d>t.maxHeight){l--;break}l++,c=u*d}t.labelRotation=l},afterCalculateTickRotation:function(){o.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){o.callback(this.options.beforeFit,[this])},fit:function(){var t=this,n=t.minSize={width:0,height:0},a=s(t._ticks),l=t.options,u=l.ticks,d=l.scaleLabel,c=l.gridLines,h=l.display,f=t.isHorizontal(),g=i(u),p=l.gridLines.tickMarkLength;if(n.width=f?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:h&&c.drawTicks?p:0,n.height=f?h&&c.drawTicks?p:0:t.maxHeight,d.display&&h){var m=r(d)+o.options.toPadding(d.padding).height;f?n.height+=m:n.width+=m}if(u.display&&h){var v=o.longestText(t.ctx,g.font,a,t.longestTextCache),b=o.numberOfLabelLines(a),x=.5*g.size,y=t.options.ticks.padding;if(f){t.longestLabelWidth=v;var k=o.toRadians(t.labelRotation),M=Math.cos(k),w=Math.sin(k)*v+g.size*b+x*(b-1)+x;n.height=Math.min(t.maxHeight,n.height+w+y),t.ctx.font=g.font;var S=e(t.ctx,a[0],g.font),C=e(t.ctx,a[a.length-1],g.font);0!==t.labelRotation?(t.paddingLeft="bottom"===l.position?M*S+3:M*x+3,t.paddingRight="bottom"===l.position?M*x+3:M*C+3):(t.paddingLeft=S/2+3,t.paddingRight=C/2+3)}else u.mirror?v=0:v+=y+x,n.width=Math.min(t.maxWidth,n.width+v),t.paddingTop=g.size/2,t.paddingBottom=g.size/2}t.handleMargins(),t.width=n.width,t.height=n.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){o.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(o.isNullOrUndef(t))return NaN;if("number"==typeof t&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:o.noop,getPixelForValue:o.noop,getValueForPixel:o.noop,getPixelForTick:function(t){var e=this,i=e.options.offset;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(i?0:1),1),a=n*t+e.paddingLeft;i&&(a+=n/2);var o=e.left+Math.round(a);return o+=e.isFullWidth()?e.margins.left:0}var r=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(r/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var i=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,n=e.left+Math.round(i);return n+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,i,n,a,r=this,s=r.isHorizontal(),l=r.options.ticks.minor,u=t.length,d=o.toRadians(r.labelRotation),c=Math.cos(d),h=r.longestLabelWidth*c,f=[];for(l.maxTicksLimit&&(a=l.maxTicksLimit),s&&(e=!1,(h+l.autoSkipPadding)*u>r.width-(r.paddingLeft+r.paddingRight)&&(e=1+Math.floor((h+l.autoSkipPadding)*u/(r.width-(r.paddingLeft+r.paddingRight)))),a&&u>a&&(e=Math.max(e,Math.floor(u/a)))),i=0;i<u;i++)n=t[i],(e>1&&i%e>0||i%e==0&&i+e>=u)&&i!==u-1&&delete n.label,f.push(n);return f},draw:function(t){var e=this,a=e.options;if(a.display){var s=e.ctx,u=n.global,d=a.ticks.minor,c=a.ticks.major||d,h=a.gridLines,f=a.scaleLabel,g=0!==e.labelRotation,p=e.isHorizontal(),m=d.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),v=o.valueOrDefault(d.fontColor,u.defaultFontColor),b=i(d),x=o.valueOrDefault(c.fontColor,u.defaultFontColor),y=i(c),k=h.drawTicks?h.tickMarkLength:0,M=o.valueOrDefault(f.fontColor,u.defaultFontColor),w=i(f),S=o.options.toPadding(f.padding),C=o.toRadians(e.labelRotation),_=[],D=e.options.gridLines.lineWidth,I="right"===a.position?e.right:e.right-D-k,P="right"===a.position?e.right+k:e.right,A="bottom"===a.position?e.top+D:e.bottom-k-D,T="bottom"===a.position?e.top+D+k:e.bottom+D;if(o.each(m,function(i,n){if(!o.isNullOrUndef(i.label)){var r,s,c,f,v,b,x,y,M,w,S,F,O,R,L=i.label;n===e.zeroLineIndex&&a.offset===h.offsetGridLines?(r=h.zeroLineWidth,s=h.zeroLineColor,c=h.zeroLineBorderDash,f=h.zeroLineBorderDashOffset):(r=o.valueAtIndexOrDefault(h.lineWidth,n),s=o.valueAtIndexOrDefault(h.color,n),c=o.valueOrDefault(h.borderDash,u.borderDash),f=o.valueOrDefault(h.borderDashOffset,u.borderDashOffset));var z="middle",B="middle",W=d.padding;if(p){var N=k+W;"bottom"===a.position?(B=g?"middle":"top",z=g?"right":"center",R=e.top+N):(B=g?"middle":"bottom",z=g?"left":"center",R=e.bottom-N);var V=l(e,n,h.offsetGridLines&&m.length>1);V<e.left&&(s="rgba(0,0,0,0)"),V+=o.aliasPixel(r),O=e.getPixelForTick(n)+d.labelOffset,v=x=M=S=V,b=A,y=T,w=t.top,F=t.bottom+D}else{var E,H="left"===a.position;d.mirror?(z=H?"left":"right",E=W):(z=H?"right":"left",E=k+W),O=H?e.right-E:e.left+E;var j=l(e,n,h.offsetGridLines&&m.length>1);j<e.top&&(s="rgba(0,0,0,0)"),j+=o.aliasPixel(r),R=e.getPixelForTick(n)+d.labelOffset,v=I,x=P,M=t.left,S=t.right+D,b=y=w=F=j}_.push({tx1:v,ty1:b,tx2:x,ty2:y,x1:M,y1:w,x2:S,y2:F,labelX:O,labelY:R,glWidth:r,glColor:s,glBorderDash:c,glBorderDashOffset:f,rotation:-1*C,label:L,major:i.major,textBaseline:B,textAlign:z})}}),o.each(_,function(t){if(h.display&&(s.save(),s.lineWidth=t.glWidth,s.strokeStyle=t.glColor,s.setLineDash&&(s.setLineDash(t.glBorderDash),s.lineDashOffset=t.glBorderDashOffset),s.beginPath(),h.drawTicks&&(s.moveTo(t.tx1,t.ty1),s.lineTo(t.tx2,t.ty2)),h.drawOnChartArea&&(s.moveTo(t.x1,t.y1),s.lineTo(t.x2,t.y2)),s.stroke(),s.restore()),d.display){s.save(),s.translate(t.labelX,t.labelY),s.rotate(t.rotation),s.font=t.major?y.font:b.font,s.fillStyle=t.major?x:v,s.textBaseline=t.textBaseline,s.textAlign=t.textAlign;var i=t.label;if(o.isArray(i))for(var n=i.length,a=1.5*b.size,r=e.isHorizontal()?0:-a*(n-1)/2,l=0;l<n;++l)s.fillText(""+i[l],0,r),r+=a;else s.fillText(i,0,0);s.restore()}}),f.display){var F,O,R=0,L=r(f)/2;if(p)F=e.left+(e.right-e.left)/2,O="bottom"===a.position?e.bottom-L-S.bottom:e.top+L+S.top;else{var z="left"===a.position;F=z?e.left+L+S.top:e.right-L-S.top,O=e.top+(e.bottom-e.top)/2,R=z?-.5*Math.PI:.5*Math.PI}s.save(),s.translate(F,O),s.rotate(R),s.textAlign="center",s.textBaseline="middle",s.fillStyle=M,s.font=w.font,s.fillText(f.labelString,0,0),s.restore()}if(h.drawBorder){s.lineWidth=o.valueAtIndexOrDefault(h.lineWidth,0),s.strokeStyle=o.valueAtIndexOrDefault(h.color,0);var B=e.left,W=e.right+D,N=e.top,V=e.bottom+D,E=o.aliasPixel(s.lineWidth);p?(N=V="top"===a.position?e.bottom:e.top,N+=E,V+=E):(B=W="left"===a.position?e.right:e.left,B+=E,W+=E),s.beginPath(),s.moveTo(B,N),s.lineTo(W,V),s.stroke()}}}})}},{25:25,26:26,34:34,45:45}],33:[function(t,e,i){"use strict";var n=t(25),a=t(45),o=t(30);e.exports=function(t){t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=a.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?a.merge({},[n.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=a.extend(this.defaults[t],e))},addScalesToLayout:function(t){a.each(t.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,o.addBox(t,e)})}}}},{25:25,30:30,45:45}],34:[function(t,e,i){"use strict";var n=t(45);e.exports={formatters:{values:function(t){return n.isArray(t)?t:""+t},linear:function(t,e,i){var a=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var o=n.log10(Math.abs(a)),r="";if(0!==t){var s=-1*Math.floor(o);s=Math.max(Math.min(s,20),0),r=t.toFixed(s)}else r="0";return r},logarithmic:function(t,e,i){var a=t/Math.pow(10,Math.floor(n.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===e||e===i.length-1?t.toExponential():""}}}},{45:45}],35:[function(t,e,i){"use strict";var n=t(25),a=t(26),o=t(45);n._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:o.noop,title:function(t,e){var i="",n=e.labels,a=n?n.length:0;if(t.length>0){var o=t[0];o.xLabel?i=o.xLabel:a>0&&o.index<a&&(i=n[o.index])}return i},afterTitle:o.noop,beforeBody:o.noop,beforeLabel:o.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),i+=t.yLabel},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:o.noop,afterBody:o.noop,beforeFooter:o.noop,footer:o.noop,afterFooter:o.noop}}}),e.exports=function(t){function e(t,e){var i=o.color(t);return i.alpha(e*i.alpha()).rgbaString()}function i(t,e){return e&&(o.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function r(t){var e=n.global,i=o.valueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:i(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:i(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:i(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:i(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:i(t.titleFontStyle,e.defaultFontStyle),titleFontSize:i(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:i(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:i(t.footerFontStyle,e.defaultFontStyle),footerFontSize:i(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}t.Tooltip=a.extend({initialize:function(){this._model=r(this._options),this._lastActive=[]},getTitle:function(){var t=this._options.callbacks,e=t.beforeTitle.apply(this,arguments),n=t.title.apply(this,arguments),a=t.afterTitle.apply(this,arguments),o=[];return o=i(o=i(o=i(o,e),n),a)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return o.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var n=this,a=n._options.callbacks,r=[];return o.each(t,function(t){var o={before:[],lines:[],after:[]};i(o.before,a.beforeLabel.call(n,t,e)),i(o.lines,a.label.call(n,t,e)),i(o.after,a.afterLabel.call(n,t,e)),r.push(o)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return o.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.callbacks,e=t.beforeFooter.apply(this,arguments),n=t.footer.apply(this,arguments),a=t.afterFooter.apply(this,arguments),o=[];return o=i(o=i(o=i(o,e),n),a)},update:function(e){var i,n,a,s,l,u,d,c,h,f,g,p,m,v,b,x,y,k,M,w,S=this,C=S._options,_=S._model,D=S._model=r(C),I=S._active,P=S._data,A={xAlign:_.xAlign,yAlign:_.yAlign},T={x:_.x,y:_.y},F={width:_.width,height:_.height},O={x:_.caretX,y:_.caretY};if(I.length){D.opacity=1;var R=[],L=[];O=t.Tooltip.positioners[C.position].call(S,I,S._eventPosition);var z=[];for(i=0,n=I.length;i<n;++i)z.push((x=I[i],y=void 0,k=void 0,void 0,void 0,y=x._xScale,k=x._yScale||x._scale,M=x._index,w=x._datasetIndex,{xLabel:y?y.getLabelForIndex(M,w):"",yLabel:k?k.getLabelForIndex(M,w):"",index:M,datasetIndex:w,x:x._model.x,y:x._model.y}));C.filter&&(z=z.filter(function(t){return C.filter(t,P)})),C.itemSort&&(z=z.sort(function(t,e){return C.itemSort(t,e,P)})),o.each(z,function(t){R.push(C.callbacks.labelColor.call(S,t,S._chart)),L.push(C.callbacks.labelTextColor.call(S,t,S._chart))}),D.title=S.getTitle(z,P),D.beforeBody=S.getBeforeBody(z,P),D.body=S.getBody(z,P),D.afterBody=S.getAfterBody(z,P),D.footer=S.getFooter(z,P),D.x=Math.round(O.x),D.y=Math.round(O.y),D.caretPadding=C.caretPadding,D.labelColors=R,D.labelTextColors=L,D.dataPoints=z,A=function(t,e){var i,n,a,o,r,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",c="center";s.y<e.height?c="top":s.y>l.height-e.height&&(c="bottom");var h=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===c?(i=function(t){return t<=h},n=function(t){return t>h}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},o=function(t){return t-e.width-s.caretSize-s.caretPadding<0},r=function(t){return t<=f?"top":"bottom"},i(s.x)?(d="left",a(s.x)&&(d="center",c=r(s.y))):n(s.x)&&(d="right",o(s.x)&&(d="center",c=r(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:c}}(this,F=function(t,e){var i=t._chart.ctx,n=2*e.yPadding,a=0,r=e.body,s=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);s+=e.beforeBody.length+e.afterBody.length;var l=e.title.length,u=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;n+=l*d,n+=l?(l-1)*e.titleSpacing:0,n+=l?e.titleMarginBottom:0,n+=s*c,n+=s?(s-1)*e.bodySpacing:0,n+=u?e.footerMarginTop:0,n+=u*h,n+=u?(u-1)*e.footerSpacing:0;var f=0,g=function(t){a=Math.max(a,i.measureText(t).width+f)};return i.font=o.fontString(d,e._titleFontStyle,e._titleFontFamily),o.each(e.title,g),i.font=o.fontString(c,e._bodyFontStyle,e._bodyFontFamily),o.each(e.beforeBody.concat(e.afterBody),g),f=e.displayColors?c+2:0,o.each(r,function(t){o.each(t.before,g),o.each(t.lines,g),o.each(t.after,g)}),f=0,i.font=o.fontString(h,e._footerFontStyle,e._footerFontFamily),o.each(e.footer,g),{width:a+=2*e.xPadding,height:n}}(this,D)),a=D,s=F,l=A,u=S._chart,d=a.x,c=a.y,h=a.caretSize,f=a.caretPadding,g=a.cornerRadius,p=l.xAlign,m=l.yAlign,v=h+f,b=g+f,"right"===p?d-=s.width:"center"===p&&((d-=s.width/2)+s.width>u.width&&(d=u.width-s.width),d<0&&(d=0)),"top"===m?c+=v:c-="bottom"===m?s.height+v:s.height/2,"center"===m?"left"===p?d+=v:"right"===p&&(d-=v):"left"===p?d-=b:"right"===p&&(d+=b),T={x:d,y:c}}else D.opacity=0;return D.xAlign=A.xAlign,D.yAlign=A.yAlign,D.x=T.x,D.y=T.y,D.width=F.width,D.height=F.height,D.caretX=O.x,D.caretY=O.y,S._model=D,e&&C.custom&&C.custom.call(S,D),S},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,a=this.getCaretPosition(t,e,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,i){var n,a,o,r,s,l,u=i.caretSize,d=i.cornerRadius,c=i.xAlign,h=i.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===h)s=g+m/2,"left"===c?(a=(n=f)-u,o=n,r=s+u,l=s-u):(a=(n=f+p)+u,o=n,r=s-u,l=s+u);else if("left"===c?(n=(a=f+d+u)-u,o=a+u):"right"===c?(n=(a=f+p-d-u)-u,o=a+u):(n=(a=i.caretX)-u,o=a+u),"top"===h)s=(r=g)-u,l=r;else{s=(r=g+m)+u,l=r;var v=o;o=n,n=v}return{x1:n,x2:a,x3:o,y1:r,y2:s,y3:l}},drawTitle:function(t,i,n,a){var r=i.title;if(r.length){n.textAlign=i._titleAlign,n.textBaseline="top";var s,l,u=i.titleFontSize,d=i.titleSpacing;for(n.fillStyle=e(i.titleFontColor,a),n.font=o.fontString(u,i._titleFontStyle,i._titleFontFamily),s=0,l=r.length;s<l;++s)n.fillText(r[s],t.x,t.y),t.y+=u+d,s+1===r.length&&(t.y+=i.titleMarginBottom-d)}},drawBody:function(t,i,n,a){var r=i.bodyFontSize,s=i.bodySpacing,l=i.body;n.textAlign=i._bodyAlign,n.textBaseline="top",n.font=o.fontString(r,i._bodyFontStyle,i._bodyFontFamily);var u=0,d=function(e){n.fillText(e,t.x+u,t.y),t.y+=r+s};n.fillStyle=e(i.bodyFontColor,a),o.each(i.beforeBody,d);var c=i.displayColors;u=c?r+2:0,o.each(l,function(s,l){var u=e(i.labelTextColors[l],a);n.fillStyle=u,o.each(s.before,d),o.each(s.lines,function(o){c&&(n.fillStyle=e(i.legendColorBackground,a),n.fillRect(t.x,t.y,r,r),n.lineWidth=1,n.strokeStyle=e(i.labelColors[l].borderColor,a),n.strokeRect(t.x,t.y,r,r),n.fillStyle=e(i.labelColors[l].backgroundColor,a),n.fillRect(t.x+1,t.y+1,r-2,r-2),n.fillStyle=u),d(o)}),o.each(s.after,d)}),u=0,o.each(i.afterBody,d),t.y-=s},drawFooter:function(t,i,n,a){var r=i.footer;r.length&&(t.y+=i.footerMarginTop,n.textAlign=i._footerAlign,n.textBaseline="top",n.fillStyle=e(i.footerFontColor,a),n.font=o.fontString(i.footerFontSize,i._footerFontStyle,i._footerFontFamily),o.each(r,function(e){n.fillText(e,t.x,t.y),t.y+=i.footerFontSize+i.footerSpacing}))},drawBackground:function(t,i,n,a,o){n.fillStyle=e(i.backgroundColor,o),n.strokeStyle=e(i.borderColor,o),n.lineWidth=i.borderWidth;var r=i.xAlign,s=i.yAlign,l=t.x,u=t.y,d=a.width,c=a.height,h=i.cornerRadius;n.beginPath(),n.moveTo(l+h,u),"top"===s&&this.drawCaret(t,a),n.lineTo(l+d-h,u),n.quadraticCurveTo(l+d,u,l+d,u+h),"center"===s&&"right"===r&&this.drawCaret(t,a),n.lineTo(l+d,u+c-h),n.quadraticCurveTo(l+d,u+c,l+d-h,u+c),"bottom"===s&&this.drawCaret(t,a),n.lineTo(l+h,u+c),n.quadraticCurveTo(l,u+c,l,u+c-h),"center"===s&&"left"===r&&this.drawCaret(t,a),n.lineTo(l,u+h),n.quadraticCurveTo(l,u,l+h,u),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&o&&(this.drawBackground(n,e,t,i,a),n.x+=e.xPadding,n.y+=e.yPadding,this.drawTitle(n,e,t,a),this.drawBody(n,e,t,a),this.drawFooter(n,e,t,a))}},handleEvent:function(t){var e,i=this,n=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:i._active=i._chart.getElementsAtEventForMode(t,n.mode,n),(e=!o.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(n.enabled||n.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,i,n=0,a=0,o=0;for(e=0,i=t.length;e<i;++e){var r=t[e];if(r&&r.hasValue()){var s=r.tooltipPosition();n+=s.x,a+=s.y,++o}}return{x:Math.round(n/o),y:Math.round(a/o)}},nearest:function(t,e){var i,n,a,r=e.x,s=e.y,l=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var u=t[i];if(u&&u.hasValue()){var d=u.getCenterPoint(),c=o.distanceBetweenPoints(e,d);c<l&&(l=c,a=u)}}if(a){var h=a.tooltipPosition();r=h.x,s=h.y}return{x:r,y:s}}}}},{25:25,26:26,45:45}],36:[function(t,e,i){"use strict";var n=t(25),a=t(26),o=t(45);n._set("global",{elements:{arc:{backgroundColor:n.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=a.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var n=o.getAngleFromPoint(i,{x:t,y:e}),a=n.angle,r=n.distance,s=i.startAngle,l=i.endAngle;l<s;)l+=2*Math.PI;for(;a>l;)a-=2*Math.PI;for(;a<s;)a+=2*Math.PI;var u=a>=s&&a<=l,d=r>=i.innerRadius&&r<=i.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,n=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,n),t.arc(e.x,e.y,e.innerRadius,n,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},{25:25,26:26,45:45}],37:[function(t,e,i){"use strict";var n=t(25),a=t(26),o=t(45),r=n.global;n._set("global",{elements:{line:{tension:.4,backgroundColor:r.defaultColor,borderWidth:3,borderColor:r.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=a.extend({draw:function(){var t,e,i,n,a=this._view,s=this._chart.ctx,l=a.spanGaps,u=this._children.slice(),d=r.elements.line,c=-1;for(this._loop&&u.length&&u.push(u[0]),s.save(),s.lineCap=a.borderCapStyle||d.borderCapStyle,s.setLineDash&&s.setLineDash(a.borderDash||d.borderDash),s.lineDashOffset=a.borderDashOffset||d.borderDashOffset,s.lineJoin=a.borderJoinStyle||d.borderJoinStyle,s.lineWidth=a.borderWidth||d.borderWidth,s.strokeStyle=a.borderColor||r.defaultColor,s.beginPath(),c=-1,t=0;t<u.length;++t)e=u[t],i=o.previousItem(u,t),n=e._view,0===t?n.skip||(s.moveTo(n.x,n.y),c=t):(i=-1===c?i:u[c],n.skip||(c!==t-1&&!l||-1===c?s.moveTo(n.x,n.y):o.canvas.lineTo(s,i._view,e._view),c=t));s.stroke(),s.restore()}})},{25:25,26:26,45:45}],38:[function(t,e,i){"use strict";var n=t(25),a=t(26),o=t(45),r=n.global.defaultColor;function s(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}n._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:r,borderColor:r,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=a.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:s,inXRange:s,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._model,a=this._chart.ctx,s=e.pointStyle,l=e.radius,u=e.x,d=e.y,c=o.color,h=0;e.skip||(a.strokeStyle=e.borderColor||r,a.lineWidth=o.valueOrDefault(e.borderWidth,n.global.elements.point.borderWidth),a.fillStyle=e.backgroundColor||r,void 0!==t&&(i.x<t.left||1.01*t.right<i.x||i.y<t.top||1.01*t.bottom<i.y)&&(i.x<t.left?h=(u-i.x)/(t.left-i.x):1.01*t.right<i.x?h=(i.x-u)/(i.x-t.right):i.y<t.top?h=(d-i.y)/(t.top-i.y):1.01*t.bottom<i.y&&(h=(i.y-d)/(i.y-t.bottom)),h=Math.round(100*h)/100,a.strokeStyle=c(a.strokeStyle).alpha(h).rgbString(),a.fillStyle=c(a.fillStyle).alpha(h).rgbString()),o.canvas.drawPoint(a,s,l,u,d))}})},{25:25,26:26,45:45}],39:[function(t,e,i){"use strict";var n=t(25),a=t(26);function o(t){return void 0!==t._view.width}function r(t){var e,i,n,a,r=t._view;if(o(t)){var s=r.width/2;e=r.x-s,i=r.x+s,n=Math.min(r.y,r.base),a=Math.max(r.y,r.base)}else{var l=r.height/2;e=Math.min(r.x,r.base),i=Math.max(r.x,r.base),n=r.y-l,a=r.y+l}return{left:e,top:n,right:i,bottom:a}}n._set("global",{elements:{rectangle:{backgroundColor:n.global.defaultColor,borderColor:n.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=a.extend({draw:function(){var t,e,i,n,a,o,r,s=this._chart.ctx,l=this._view,u=l.borderWidth;if(l.horizontal?(t=l.base,e=l.x,i=l.y-l.height/2,n=l.y+l.height/2,a=e>t?1:-1,o=1,r=l.borderSkipped||"left"):(t=l.x-l.width/2,e=l.x+l.width/2,i=l.y,a=1,o=(n=l.base)>i?1:-1,r=l.borderSkipped||"bottom"),u){var d=Math.min(Math.abs(t-e),Math.abs(i-n)),c=(u=u>d?d:u)/2,h=t+("left"!==r?c*a:0),f=e+("right"!==r?-c*a:0),g=i+("top"!==r?c*o:0),p=n+("bottom"!==r?-c*o:0);h!==f&&(i=g,n=p),g!==p&&(t=h,e=f)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=u;var m=[[t,n],[t,i],[e,i],[e,n]],v=["bottom","left","top","right"].indexOf(r,0);function b(t){return m[(v+t)%4]}-1===v&&(v=0);var x=b(0);s.moveTo(x[0],x[1]);for(var y=1;y<4;y++)x=b(y),s.lineTo(x[0],x[1]);s.fill(),u&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var n=r(this);i=t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}return i},inLabelRange:function(t,e){if(!this._view)return!1;var i=r(this);return o(this)?t>=i.left&&t<=i.right:e>=i.top&&e<=i.bottom},inXRange:function(t){var e=r(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=r(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,i=this._view;return o(this)?(t=i.x,e=(i.y+i.base)/2):(t=(i.x+i.base)/2,e=i.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},{25:25,26:26}],40:[function(t,e,i){"use strict";e.exports={},e.exports.Arc=t(36),e.exports.Line=t(37),e.exports.Point=t(38),e.exports.Rectangle=t(39)},{36:36,37:37,38:38,39:39}],41:[function(t,e,i){"use strict";var n=t(42);i=e.exports={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,n,a,o){if(o){var r=Math.min(o,n/2),s=Math.min(o,a/2);t.moveTo(e+r,i),t.lineTo(e+n-r,i),t.quadraticCurveTo(e+n,i,e+n,i+s),t.lineTo(e+n,i+a-s),t.quadraticCurveTo(e+n,i+a,e+n-r,i+a),t.lineTo(e+r,i+a),t.quadraticCurveTo(e,i+a,e,i+a-s),t.lineTo(e,i+s),t.quadraticCurveTo(e,i,e+r,i)}else t.rect(e,i,n,a)},drawPoint:function(t,e,i,n,a){var o,r,s,l,u,d;if(!e||"object"!=typeof e||"[object HTMLImageElement]"!==(o=e.toString())&&"[object HTMLCanvasElement]"!==o){if(!(isNaN(i)||i<=0)){switch(e){default:t.beginPath(),t.arc(n,a,i,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),u=(r=3*i/Math.sqrt(3))*Math.sqrt(3)/2,t.moveTo(n-r/2,a+u/3),t.lineTo(n+r/2,a+u/3),t.lineTo(n,a-2*u/3),t.closePath(),t.fill();break;case"rect":d=1/Math.SQRT2*i,t.beginPath(),t.fillRect(n-d,a-d,2*d,2*d),t.strokeRect(n-d,a-d,2*d,2*d);break;case"rectRounded":var c=i/Math.SQRT2,h=n-c,f=a-c,g=Math.SQRT2*i;t.beginPath(),this.roundedRect(t,h,f,g,g,i/2),t.closePath(),t.fill();break;case"rectRot":d=1/Math.SQRT2*i,t.beginPath(),t.moveTo(n-d,a),t.lineTo(n,a+d),t.lineTo(n+d,a),t.lineTo(n,a-d),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(n,a+i),t.lineTo(n,a-i),t.moveTo(n-i,a),t.lineTo(n+i,a),t.closePath();break;case"crossRot":t.beginPath(),s=Math.cos(Math.PI/4)*i,l=Math.sin(Math.PI/4)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n-s,a+l),t.lineTo(n+s,a-l),t.closePath();break;case"star":t.beginPath(),t.moveTo(n,a+i),t.lineTo(n,a-i),t.moveTo(n-i,a),t.lineTo(n+i,a),s=Math.cos(Math.PI/4)*i,l=Math.sin(Math.PI/4)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n-s,a+l),t.lineTo(n+s,a-l),t.closePath();break;case"line":t.beginPath(),t.moveTo(n-i,a),t.lineTo(n+i,a),t.closePath();break;case"dash":t.beginPath(),t.moveTo(n,a),t.lineTo(n+i,a),t.closePath()}t.stroke()}}else t.drawImage(e,n-e.width/2,a-e.height/2,e.width,e.height)},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,n){if(i.steppedLine)return"after"===i.steppedLine&&!n||"after"!==i.steppedLine&&n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y),void t.lineTo(i.x,i.y);i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}};n.clear=i.clear,n.drawRoundedRectangle=function(t){t.beginPath(),i.roundedRect.apply(i,arguments),t.closePath()}},{42:42}],42:[function(t,e,i){"use strict";var n,a={noop:function(){},uid:(n=0,function(){return n++}),isNullOrUndef:function(t){return null==t},isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return a.valueOrDefault(a.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,n){var o,r,s;if(a.isArray(t))if(r=t.length,n)for(o=r-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;o<r;o++)e.call(i,t[o],o);else if(a.isObject(t))for(r=(s=Object.keys(t)).length,o=0;o<r;o++)e.call(i,t[s[o]],s[o])},arrayEquals:function(t,e){var i,n,o,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(o=t[i],r=e[i],o instanceof Array&&r instanceof Array){if(!a.arrayEquals(o,r))return!1}else if(o!==r)return!1;return!0},clone:function(t){if(a.isArray(t))return t.map(a.clone);if(a.isObject(t)){for(var e={},i=Object.keys(t),n=i.length,o=0;o<n;++o)e[i[o]]=a.clone(t[i[o]]);return e}return t},_merger:function(t,e,i,n){var o=e[t],r=i[t];a.isObject(o)&&a.isObject(r)?a.merge(o,r,n):e[t]=a.clone(r)},_mergerIf:function(t,e,i){var n=e[t],o=i[t];a.isObject(n)&&a.isObject(o)?a.mergeIf(n,o):e.hasOwnProperty(t)||(e[t]=a.clone(o))},merge:function(t,e,i){var n,o,r,s,l,u=a.isArray(e)?e:[e],d=u.length;if(!a.isObject(t))return t;for(n=(i=i||{}).merger||a._merger,o=0;o<d;++o)if(e=u[o],a.isObject(e))for(l=0,s=(r=Object.keys(e)).length;l<s;++l)n(r[l],t,e,i);return t},mergeIf:function(t,e){return a.merge(t,e,{merger:a._mergerIf})},extend:function(t){for(var e=function(e,i){t[i]=e},i=1,n=arguments.length;i<n;++i)a.each(arguments[i],e);return t},inherits:function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=a.inherits,t&&a.extend(i.prototype,t),i.__super__=e.prototype,i}};e.exports=a,a.callCallback=a.callback,a.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},a.getValueOrDefault=a.valueOrDefault,a.getValueAtIndexOrDefault=a.valueAtIndexOrDefault},{}],43:[function(t,e,i){"use strict";var n=t(42),a={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){return t*t*(2.70158*t-1.70158)},easeOutBack:function(t){return(t-=1)*t*(2.70158*t+1.70158)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-a.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*a.easeInBounce(2*t):.5*a.easeOutBounce(2*t-1)+.5}};e.exports={effects:a},n.easingEffects=a},{42:42}],44:[function(t,e,i){"use strict";var n=t(42);e.exports={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,a,o;return n.isObject(t)?(e=+t.top||0,i=+t.right||0,a=+t.bottom||0,o=+t.left||0):e=i=a=o=+t||0,{top:e,right:i,bottom:a,left:o,height:e+a,width:o+i}},resolve:function(t,e,i){var a,o,r;for(a=0,o=t.length;a<o;++a)if(void 0!==(r=t[a])&&(void 0!==e&&"function"==typeof r&&(r=r(e)),void 0!==i&&n.isArray(r)&&(r=r[i]),void 0!==r))return r}}},{42:42}],45:[function(t,e,i){"use strict";e.exports=t(42),e.exports.easing=t(43),e.exports.canvas=t(41),e.exports.options=t(44)},{41:41,42:42,43:43,44:44}],46:[function(t,e,i){e.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],47:[function(t,e,i){"use strict";var n=t(45),a="$chartjs",o="chartjs-",r=o+"render-monitor",s=o+"render-animation",l=["animationstart","webkitAnimationStart"],u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function d(t,e){var i=n.getStyle(t,e),a=i&&i.match(/^(\d+)(\.\d+)?px$/);return a?Number(a[1]):void 0}var c=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function h(t,e,i){t.addEventListener(e,i,c)}function f(t,e,i){t.removeEventListener(e,i,c)}function g(t,e,i,n,a){return{type:t,chart:e,native:a||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function p(t,e,i){var u,d,c,f,p,m,v,b,x=t[a]||(t[a]={}),y=x.resizer=function(t){var e=document.createElement("div"),i=o+"size-monitor",n="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=n,e.className=i,e.innerHTML='<div class="'+i+'-expand" style="'+n+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+i+'-shrink" style="'+n+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var a=e.childNodes[0],r=e.childNodes[1];e._reset=function(){a.scrollLeft=1e6,a.scrollTop=1e6,r.scrollLeft=1e6,r.scrollTop=1e6};var s=function(){e._reset(),t()};return h(a,"scroll",s.bind(a,"expand")),h(r,"scroll",s.bind(r,"shrink")),e}((u=function(){if(x.resizer)return e(g("resize",i))},c=!1,f=[],function(){f=Array.prototype.slice.call(arguments),d=d||this,c||(c=!0,n.requestAnimFrame.call(window,function(){c=!1,u.apply(d,f)}))}));m=function(){if(x.resizer){var e=t.parentNode;e&&e!==y.parentNode&&e.insertBefore(y,e.firstChild),y._reset()}},v=(p=t)[a]||(p[a]={}),b=v.renderProxy=function(t){t.animationName===s&&m()},n.each(l,function(t){h(p,t,b)}),v.reflow=!!p.offsetParent,p.classList.add(r)}function m(t){var e,i,o,s=t[a]||{},u=s.resizer;delete s.resizer,i=(e=t)[a]||{},(o=i.renderProxy)&&(n.each(l,function(t){f(e,t,o)}),delete i.renderProxy),e.classList.remove(r),u&&u.parentNode&&u.parentNode.removeChild(u)}e.exports={_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t,e,i,n="from{opacity:0.99}to{opacity:1}";e="@-webkit-keyframes "+s+"{"+n+"}@keyframes "+s+"{"+n+"}."+r+"{-webkit-animation:"+s+" 0.001s;animation:"+s+" 0.001s;}",i=(t=this)._style||document.createElement("style"),t._style||(t._style=i,e="/* Chart.js */\n"+e,i.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(i)),i.appendChild(document.createTextNode(e))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){var i=t.style,n=t.getAttribute("height"),o=t.getAttribute("width");if(t[a]={initial:{height:n,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===o||""===o){var r=d(t,"width");void 0!==r&&(t.width=r)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var s=d(t,"height");void 0!==r&&(t.height=s)}}(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e[a]){var i=e[a].initial;["height","width"].forEach(function(t){var a=i[t];n.isNullOrUndef(a)?e.removeAttribute(t):e.setAttribute(t,a)}),n.each(i.style||{},function(t,i){e.style[i]=t}),e.width=e.width,delete e[a]}},addEventListener:function(t,e,i){var o=t.canvas;if("resize"!==e){var r=i[a]||(i[a]={});h(o,e,(r.proxies||(r.proxies={}))[t.id+"_"+e]=function(e){var a,o,r,s;i((o=t,r=u[(a=e).type]||a.type,s=n.getRelativePosition(a,o),g(r,o,s.x,s.y,a)))})}else p(o,i,t)},removeEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var o=((i[a]||{}).proxies||{})[t.id+"_"+e];o&&f(n,e,o)}else m(n)}},n.addEvent=h,n.removeEvent=f},{45:45}],48:[function(t,e,i){"use strict";var n=t(45),a=t(46),o=t(47),r=o._enabled?o:a;e.exports=n.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},r)},{45:45,46:46,47:47}],49:[function(t,e,i){"use strict";e.exports={},e.exports.filler=t(50),e.exports.legend=t(51),e.exports.title=t(52)},{50:50,51:51,52:52}],50:[function(t,e,i){"use strict";var n=t(25),a=t(40),o=t(45);n._set("global",{plugins:{filler:{propagate:!0}}});var r={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),a=n&&i.isDatasetVisible(e)&&n.dataset._children||[],o=a.length||0;return o?function(t,e){return e<o&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function s(t,e,i){var n,a=t._model||{},o=a.fill;if(void 0===o&&(o=!!a.backgroundColor),!1===o||null===o)return!1;if(!0===o)return"origin";if(n=parseFloat(o,10),isFinite(n)&&Math.floor(n)===n)return"-"!==o[0]&&"+"!==o[0]||(n=e+n),!(n===e||n<0||n>=i)&&n;switch(o){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return o;default:return!1}}function l(t){var e,i=t.el._model||{},n=t.el._scale||{},a=t.fill,o=null;if(isFinite(a))return null;if("start"===a?o=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===a?o=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?o=i.scaleZero:n.getBasePosition?o=n.getBasePosition():n.getBasePixel&&(o=n.getBasePixel()),null!=o){if(void 0!==o.x&&void 0!==o.y)return o;if("number"==typeof o&&isFinite(o))return{x:(e=n.isHorizontal())?o:null,y:e?null:o}}return null}function u(t,e,i){var n,a=t[e].fill,o=[e];if(!i)return a;for(;!1!==a&&-1===o.indexOf(a);){if(!isFinite(a))return a;if(!(n=t[a]))return!1;if(n.visible)return a;o.push(a),a=n.fill}return!1}function d(t){return t&&!t.skip}function c(t,e,i,n,a){var r;if(n&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<n;++r)o.canvas.lineTo(t,e[r-1],e[r]);for(t.lineTo(i[a-1].x,i[a-1].y),r=a-1;r>0;--r)o.canvas.lineTo(t,i[r],i[r-1],!0)}}e.exports={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,o,d,c,h,f,g=(t.data.datasets||[]).length,p=e.propagate,m=[];for(n=0;n<g;++n)d=null,(o=(i=t.getDatasetMeta(n)).dataset)&&o._model&&o instanceof a.Line&&(d={visible:t.isDatasetVisible(n),fill:s(o,n,g),chart:t,el:o}),i.$filler=d,m.push(d);for(n=0;n<g;++n)(d=m[n])&&(d.fill=u(m,n,p),d.boundary=l(d),d.mapper=(void 0,f=void 0,h=(c=d).fill,f="dataset",!1===h?null:(isFinite(h)||(f="boundary"),r[f](c))))},beforeDatasetDraw:function(t,e){var i=e.meta.$filler;if(i){var a=t.ctx,r=i.el,s=r._view,l=r._children||[],u=i.mapper,h=s.backgroundColor||n.global.defaultColor;u&&h&&l.length&&(o.canvas.clipArea(a,t.chartArea),function(t,e,i,n,a,o){var r,s,l,u,h,f,g,p=e.length,m=n.spanGaps,v=[],b=[],x=0,y=0;for(t.beginPath(),r=0,s=p+!!o;r<s;++r)h=i(u=e[l=r%p]._view,l,n),f=d(u),g=d(h),f&&g?(x=v.push(u),y=b.push(h)):x&&y&&(m?(f&&v.push(u),g&&b.push(h)):(c(t,v,b,x,y),x=y=0,v=[],b=[]));c(t,v,b,x,y),t.closePath(),t.fillStyle=a,t.fill()}(a,l,u,s,h,r._loop),o.canvas.unclipArea(a))}}}},{25:25,40:40,45:45}],51:[function(t,e,i){"use strict";var n=t(25),a=t(26),o=t(45),r=t(30),s=o.noop;function l(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}n._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,a=n.getDatasetMeta(i);a.hidden=null===a.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return o.isArray(e.datasets)?e.datasets.map(function(e,i){return{text:e.label,fillStyle:o.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:i}},this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var u=a.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:s,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:function(){var t=this,e=t.options.labels||{},i=o.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter(function(i){return e.filter(i,t.chart.data)})),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=t.options,i=e.labels,a=e.display,r=t.ctx,s=n.global,u=o.valueOrDefault,d=u(i.fontSize,s.defaultFontSize),c=u(i.fontStyle,s.defaultFontStyle),h=u(i.fontFamily,s.defaultFontFamily),f=o.fontString(d,c,h),g=t.legendHitBoxes=[],p=t.minSize,m=t.isHorizontal();if(m?(p.width=t.maxWidth,p.height=a?10:0):(p.width=a?10:0,p.height=t.maxHeight),a)if(r.font=f,m){var v=t.lineWidths=[0],b=t.legendItems.length?d+i.padding:0;r.textAlign="left",r.textBaseline="top",o.each(t.legendItems,function(e,n){var a=l(i,d)+d/2+r.measureText(e.text).width;v[v.length-1]+a+i.padding>=t.width&&(b+=d+i.padding,v[v.length]=t.left),g[n]={left:0,top:0,width:a,height:d},v[v.length-1]+=a+i.padding}),p.height+=b}else{var x=i.padding,y=t.columnWidths=[],k=i.padding,M=0,w=0,S=d+x;o.each(t.legendItems,function(t,e){var n=l(i,d)+d/2+r.measureText(t.text).width;w+S>p.height&&(k+=M+i.padding,y.push(M),M=0,w=0),M=Math.max(M,n),w+=S,g[e]={left:0,top:0,width:n,height:d}}),k+=M,y.push(M),p.width+=k}t.width=p.width,t.height=p.height},afterFit:s,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,i=e.labels,a=n.global,r=a.elements.line,s=t.width,u=t.lineWidths;if(e.display){var d,c=t.ctx,h=o.valueOrDefault,f=h(i.fontColor,a.defaultFontColor),g=h(i.fontSize,a.defaultFontSize),p=h(i.fontStyle,a.defaultFontStyle),m=h(i.fontFamily,a.defaultFontFamily),v=o.fontString(g,p,m);c.textAlign="left",c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=v;var b=l(i,g),x=t.legendHitBoxes,y=t.isHorizontal();d=y?{x:t.left+(s-u[0])/2,y:t.top+i.padding,line:0}:{x:t.left+i.padding,y:t.top+i.padding,line:0};var k=g+i.padding;o.each(t.legendItems,function(n,l){var f,p,m,v,M,w=c.measureText(n.text).width,S=b+g/2+w,C=d.x,_=d.y;y?C+S>=s&&(_=d.y+=k,d.line++,C=d.x=t.left+(s-u[d.line])/2):_+k>t.bottom&&(C=d.x=C+t.columnWidths[d.line]+i.padding,_=d.y=t.top+i.padding,d.line++),function(t,i,n){if(!(isNaN(b)||b<=0)){c.save(),c.fillStyle=h(n.fillStyle,a.defaultColor),c.lineCap=h(n.lineCap,r.borderCapStyle),c.lineDashOffset=h(n.lineDashOffset,r.borderDashOffset),c.lineJoin=h(n.lineJoin,r.borderJoinStyle),c.lineWidth=h(n.lineWidth,r.borderWidth),c.strokeStyle=h(n.strokeStyle,a.defaultColor);var s=0===h(n.lineWidth,r.borderWidth);if(c.setLineDash&&c.setLineDash(h(n.lineDash,r.borderDash)),e.labels&&e.labels.usePointStyle){var l=g*Math.SQRT2/2,u=l/Math.SQRT2,d=t+u,f=i+u;o.canvas.drawPoint(c,n.pointStyle,l,d,f)}else s||c.strokeRect(t,i,b,g),c.fillRect(t,i,b,g);c.restore()}}(C,_,n),x[l].left=C,x[l].top=_,f=n,p=w,v=b+(m=g/2)+C,M=_+m,c.fillText(f.text,v,M),f.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(v,M),c.lineTo(v+p,M),c.stroke()),y?d.x+=S+i.padding:d.y+=k})}},handleEvent:function(t){var e=this,i=e.options,n="mouseup"===t.type?"click":t.type,a=!1;if("mousemove"===n){if(!i.onHover)return}else{if("click"!==n)return;if(!i.onClick)return}var o=t.x,r=t.y;if(o>=e.left&&o<=e.right&&r>=e.top&&r<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(o>=u.left&&o<=u.left+u.width&&r>=u.top&&r<=u.top+u.height){if("click"===n){i.onClick.call(e,t.native,e.legendItems[l]),a=!0;break}if("mousemove"===n){i.onHover.call(e,t.native,e.legendItems[l]),a=!0;break}}}return a}});function d(t,e){var i=new u({ctx:t.ctx,options:e,chart:t});r.configure(t,i,e),r.addBox(t,i),t.legend=i}e.exports={id:"legend",_element:u,beforeInit:function(t){var e=t.options.legend;e&&d(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(o.mergeIf(e,n.global.legend),i?(r.configure(t,i,e),i.options=e):d(t,e)):i&&(r.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}}},{25:25,26:26,30:30,45:45}],52:[function(t,e,i){"use strict";var n=t(25),a=t(26),o=t(45),r=t(30),s=o.noop;n._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});var l=a.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:s,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:s,afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=o.valueOrDefault,i=t.options,a=i.display,r=e(i.fontSize,n.global.defaultFontSize),s=t.minSize,l=o.isArray(i.text)?i.text.length:1,u=o.options.toLineHeight(i.lineHeight,r),d=a?l*u+2*i.padding:0;t.isHorizontal()?(s.width=t.maxWidth,s.height=d):(s.width=d,s.height=t.maxHeight),t.width=s.width,t.height=s.height},afterFit:s,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,i=o.valueOrDefault,a=t.options,r=n.global;if(a.display){var s,l,u,d=i(a.fontSize,r.defaultFontSize),c=i(a.fontStyle,r.defaultFontStyle),h=i(a.fontFamily,r.defaultFontFamily),f=o.fontString(d,c,h),g=o.options.toLineHeight(a.lineHeight,d),p=g/2+a.padding,m=0,v=t.top,b=t.left,x=t.bottom,y=t.right;e.fillStyle=i(a.fontColor,r.defaultFontColor),e.font=f,t.isHorizontal()?(l=b+(y-b)/2,u=v+p,s=y-b):(l="left"===a.position?b+p:y-p,u=v+(x-v)/2,s=x-v,m=Math.PI*("left"===a.position?-.5:.5)),e.save(),e.translate(l,u),e.rotate(m),e.textAlign="center",e.textBaseline="middle";var k=a.text;if(o.isArray(k))for(var M=0,w=0;w<k.length;++w)e.fillText(k[w],0,M,s),M+=g;else e.fillText(k,0,0,s);e.restore()}}});function u(t,e){var i=new l({ctx:t.ctx,options:e,chart:t});r.configure(t,i,e),r.addBox(t,i),t.titleBlock=i}e.exports={id:"title",_element:l,beforeInit:function(t){var e=t.options.title;e&&u(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(o.mergeIf(e,n.global.title),i?(r.configure(t,i,e),i.options=e):u(t,e)):i&&(r.removeBox(t,i),delete t.titleBlock)}}},{25:25,26:26,30:30,45:45}],53:[function(t,e,i){"use strict";e.exports=function(t){var e=t.Scale.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,i=e.getLabels();e.minIndex=0,e.maxIndex=i.length-1,void 0!==e.options.ticks.min&&(t=i.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=i.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=i[e.minIndex],e.max=i[e.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var i=this,n=i.chart.data,a=i.isHorizontal();return n.yLabels&&!a?i.getRightValue(n.datasets[e].data[t]):i.ticks[t-i.minIndex]},getPixelForValue:function(t,e){var i,n=this,a=n.options.offset,o=Math.max(n.maxIndex+1-n.minIndex-(a?0:1),1);if(null!=t&&(i=n.isHorizontal()?t.x:t.y),void 0!==i||void 0!==t&&isNaN(e)){t=i||t;var r=n.getLabels().indexOf(t);e=-1!==r?r:e}if(n.isHorizontal()){var s=n.width/o,l=s*(e-n.minIndex);return a&&(l+=s/2),n.left+Math.round(l)}var u=n.height/o,d=u*(e-n.minIndex);return a&&(d+=u/2),n.top+Math.round(d)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,i=e.options.offset,n=Math.max(e._ticks.length-(i?0:1),1),a=e.isHorizontal(),o=(a?e.width:e.height)/n;return t-=a?e.left:e.top,i&&(t-=o/2),(t<=0?0:Math.round(t/o))+e.minIndex},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",e,{position:"bottom"})}},{}],54:[function(t,e,i){"use strict";var n=t(25),a=t(45),o=t(34);e.exports=function(t){var e={position:"left",ticks:{callback:o.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,n=i.data.datasets,o=t.isHorizontal();function r(e){return o?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var s=e.stacked;if(void 0===s&&a.each(n,function(t,e){if(!s){var n=i.getDatasetMeta(e);i.isDatasetVisible(e)&&r(n)&&void 0!==n.stack&&(s=!0)}}),e.stacked||s){var l={};a.each(n,function(n,o){var s=i.getDatasetMeta(o),u=[s.type,void 0===e.stacked&&void 0===s.stack?o:"",s.stack].join(".");void 0===l[u]&&(l[u]={positiveValues:[],negativeValues:[]});var d=l[u].positiveValues,c=l[u].negativeValues;i.isDatasetVisible(o)&&r(s)&&a.each(n.data,function(i,n){var a=+t.getRightValue(i);isNaN(a)||s.data[n].hidden||(d[n]=d[n]||0,c[n]=c[n]||0,e.relativePoints?d[n]=100:a<0?c[n]+=a:d[n]+=a)})}),a.each(l,function(e){var i=e.positiveValues.concat(e.negativeValues),n=a.min(i),o=a.max(i);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?o:Math.max(t.max,o)})}else a.each(n,function(e,n){var o=i.getDatasetMeta(n);i.isDatasetVisible(n)&&r(o)&&a.each(e.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||o.data[i].hidden||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n))})});t.min=isFinite(t.min)&&!isNaN(t.min)?t.min:0,t.max=isFinite(t.max)&&!isNaN(t.max)?t.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this.options.ticks;if(this.isHorizontal())t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.width/50));else{var i=a.valueOrDefault(e.fontSize,n.global.defaultFontSize);t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.height/(2*i)))}return t},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this,i=e.start,n=+e.getRightValue(t),a=e.end-i;return e.isHorizontal()?e.left+e.width/a*(n-i):e.bottom-e.height/a*(n-i)},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),n=i?e.width:e.height,a=(i?t-e.left:e.bottom-t)/n;return e.start+(e.end-e.start)*a},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,e)}},{25:25,34:34,45:45}],55:[function(t,e,i){"use strict";var n=t(45);e.exports=function(t){var e=n.noop;t.LinearScaleBase=t.Scale.extend({getRightValue:function(e){return"string"==typeof e?+e:t.Scale.prototype.getRightValue.call(this,e)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=n.sign(t.min),a=n.sign(t.max);i<0&&a<0?t.max=0:i>0&&a>0&&(t.min=0)}var o=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),o!==r&&t.min>=t.max&&(o?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:e,handleDirectionalChanges:e,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),a={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,stepSize:n.valueOrDefault(e.fixedStepSize,e.stepSize)},o=t.ticks=function(t,e){var i,a=[];if(t.stepSize&&t.stepSize>0)i=t.stepSize;else{var o=n.niceNum(e.max-e.min,!1);i=n.niceNum(o/(t.maxTicks-1),!0)}var r=Math.floor(e.min/i)*i,s=Math.ceil(e.max/i)*i;t.min&&t.max&&t.stepSize&&n.almostWhole((t.max-t.min)/t.stepSize,i/1e3)&&(r=t.min,s=t.max);var l=(s-r)/i;l=n.almostEquals(l,Math.round(l),i/1e3)?Math.round(l):Math.ceil(l);var u=1;i<1&&(u=Math.pow(10,i.toString().length-2),r=Math.round(r*u)/u,s=Math.round(s*u)/u),a.push(void 0!==t.min?t.min:r);for(var d=1;d<l;++d)a.push(Math.round((r+d*i)*u)/u);return a.push(void 0!==t.max?t.max:s),a}(a,t);t.handleDirectionalChanges(),t.max=n.max(o),t.min=n.min(o),e.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{45:45}],56:[function(t,e,i){"use strict";var n=t(45),a=t(34);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.logarithmic}},i=t.Scale.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,a=i.data.datasets,o=t.isHorizontal();function r(e){return o?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var s=e.stacked;if(void 0===s&&n.each(a,function(t,e){if(!s){var n=i.getDatasetMeta(e);i.isDatasetVisible(e)&&r(n)&&void 0!==n.stack&&(s=!0)}}),e.stacked||s){var l={};n.each(a,function(a,o){var s=i.getDatasetMeta(o),u=[s.type,void 0===e.stacked&&void 0===s.stack?o:"",s.stack].join(".");i.isDatasetVisible(o)&&r(s)&&(void 0===l[u]&&(l[u]=[]),n.each(a.data,function(e,i){var n=l[u],a=+t.getRightValue(e);isNaN(a)||s.data[i].hidden||a<0||(n[i]=n[i]||0,n[i]+=a)}))}),n.each(l,function(e){if(e.length>0){var i=n.min(e),a=n.max(e);t.min=null===t.min?i:Math.min(t.min,i),t.max=null===t.max?a:Math.max(t.max,a)}})}else n.each(a,function(e,a){var o=i.getDatasetMeta(a);i.isDatasetVisible(a)&&r(o)&&n.each(e.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||o.data[i].hidden||n<0||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n),0!==n&&(null===t.minNotZero||n<t.minNotZero)&&(t.minNotZero=n))})});this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks,i=n.valueOrDefault;t.min=i(e.min,t.min),t.max=i(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(n.log10(t.min))-1),t.max=Math.pow(10,Math.floor(n.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(n.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(n.log10(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(n.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),a={min:e.min,max:e.max},o=t.ticks=function(t,e){var i,a,o=[],r=n.valueOrDefault,s=r(t.min,Math.pow(10,Math.floor(n.log10(e.min)))),l=Math.floor(n.log10(e.max)),u=Math.ceil(e.max/Math.pow(10,l));0===s?(i=Math.floor(n.log10(e.minNotZero)),a=Math.floor(e.minNotZero/Math.pow(10,i)),o.push(s),s=a*Math.pow(10,i)):(i=Math.floor(n.log10(s)),a=Math.floor(s/Math.pow(10,i)));for(var d=i<0?Math.pow(10,Math.abs(i)):1;o.push(s),10==++a&&(a=1,d=++i>=0?1:d),s=Math.round(a*Math.pow(10,i)*d)/d,i<l||i===l&&a<u;);var c=r(t.max,s);return o.push(c),o}(a,t);t.max=n.max(o),t.min=n.min(o),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&o.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(n.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(e){var i,a,o,r,s,l=this,u=l.options.ticks.reverse,d=n.log10,c=l._getFirstTickValue(l.minNotZero),h=0;return e=+l.getRightValue(e),u?(o=l.end,r=l.start,s=-1):(o=l.start,r=l.end,s=1),l.isHorizontal()?(i=l.width,a=u?l.right:l.left):(i=l.height,s*=-1,a=u?l.top:l.bottom),e!==o&&(0===o&&(i-=h=n.getValueOrDefault(l.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=c),0!==e&&(h+=i/(d(r)-d(o))*(d(e)-d(o))),a+=s*h),a},getValueForPixel:function(e){var i,a,o,r,s=this,l=s.options.ticks.reverse,u=n.log10,d=s._getFirstTickValue(s.minNotZero);if(l?(a=s.end,o=s.start):(a=s.start,o=s.end),s.isHorizontal()?(i=s.width,r=l?s.right-e:e-s.left):(i=s.height,r=l?e-s.top:s.bottom-e),r!==a){if(0===a){var c=n.getValueOrDefault(s.options.ticks.fontSize,t.defaults.global.defaultFontSize);r-=c,i-=c,a=d}r*=u(o)-u(a),r/=i,r=Math.pow(10,u(a)+r)}return r}});t.scaleService.registerScaleType("logarithmic",i,e)}},{34:34,45:45}],57:[function(t,e,i){"use strict";var n=t(25),a=t(45),o=t(34);e.exports=function(t){var e=n.global,i={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:o.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function r(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function s(t){var i=t.options.pointLabels,n=a.valueOrDefault(i.fontSize,e.defaultFontSize),o=a.valueOrDefault(i.fontStyle,e.defaultFontStyle),r=a.valueOrDefault(i.fontFamily,e.defaultFontFamily);return{size:n,style:o,family:r,font:a.fontString(n,o,r)}}function l(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||t>a?{start:e-i-5,end:e}:{start:e,end:e+i+5}}function u(t,e,i,n){if(a.isArray(e))for(var o=i.y,r=1.5*n,s=0;s<e.length;++s)t.fillText(e[s],i.x,o),o+=r;else t.fillText(e,i.x,i.y)}function d(t){return a.isNumber(t)?t:0}var c=t.LinearScaleBase.extend({setDimensions:function(){var t=this,i=t.options,n=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var o=a.min([t.height,t.width]),r=a.valueOrDefault(n.fontSize,e.defaultFontSize);t.drawingArea=i.display?o/2-(r/2+n.backdropPaddingY):o/2},determineDataLimits:function(){var t=this,e=t.chart,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;a.each(e.data.datasets,function(o,r){if(e.isDatasetVisible(r)){var s=e.getDatasetMeta(r);a.each(o.data,function(e,a){var o=+t.getRightValue(e);isNaN(o)||s.data[a].hidden||(i=Math.min(o,i),n=Math.max(o,n))})}}),t.min=i===Number.POSITIVE_INFINITY?0:i,t.max=n===Number.NEGATIVE_INFINITY?0:n,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=a.valueOrDefault(t.fontSize,e.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,e;this.options.pointLabels.display?function(t){var e,i,n,o=s(t),u=Math.min(t.height/2,t.width/2),d={r:t.width,l:0,t:t.height,b:0},c={};t.ctx.font=o.font,t._pointLabelSizes=[];var h,f,g,p=r(t);for(e=0;e<p;e++){n=t.getPointPosition(e,u),h=t.ctx,f=o.size,g=t.pointLabels[e]||"",i=a.isArray(g)?{w:a.longestText(h,h.font,g),h:g.length*f+1.5*(g.length-1)*f}:{w:h.measureText(g).width,h:f},t._pointLabelSizes[e]=i;var m=t.getIndexAngle(e),v=a.toDegrees(m)%360,b=l(v,n.x,i.w,0,180),x=l(v,n.y,i.h,90,270);b.start<d.l&&(d.l=b.start,c.l=m),b.end>d.r&&(d.r=b.end,c.r=m),x.start<d.t&&(d.t=x.start,c.t=m),x.end>d.b&&(d.b=x.end,c.b=m)}t.setReductions(u,d,c)}(this):(t=this,e=Math.min(t.height/2,t.width/2),t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0))},setReductions:function(t,e,i){var n=e.l/Math.sin(i.l),a=Math.max(e.r-this.width,0)/Math.sin(i.r),o=-e.t/Math.cos(i.t),r=-Math.max(e.b-this.height,0)/Math.cos(i.b);n=d(n),a=d(a),o=d(o),r=d(r),this.drawingArea=Math.min(Math.round(t-(n+a)/2),Math.round(t-(o+r)/2)),this.setCenterPoint(n,a,o,r)},setCenterPoint:function(t,e,i,n){var a=this,o=a.width-e-a.drawingArea,r=t+a.drawingArea,s=i+a.drawingArea,l=a.height-n-a.drawingArea;a.xCenter=Math.round((r+o)/2+a.left),a.yCenter=Math.round((s+l)/2+a.top)},getIndexAngle:function(t){return t*(2*Math.PI/r(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var i=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*i:(t-e.min)*i},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,i=t.options,n=i.gridLines,o=i.ticks,l=a.valueOrDefault;if(i.display){var d=t.ctx,c=this.getIndexAngle(0),h=l(o.fontSize,e.defaultFontSize),f=l(o.fontStyle,e.defaultFontStyle),g=l(o.fontFamily,e.defaultFontFamily),p=a.fontString(h,f,g);a.each(t.ticks,function(i,s){if(s>0||o.reverse){var u=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);if(n.display&&0!==s&&function(t,e,i,n){var o=t.ctx;if(o.strokeStyle=a.valueAtIndexOrDefault(e.color,n-1),o.lineWidth=a.valueAtIndexOrDefault(e.lineWidth,n-1),t.options.gridLines.circular)o.beginPath(),o.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),o.closePath(),o.stroke();else{var s=r(t);if(0===s)return;o.beginPath();var l=t.getPointPosition(0,i);o.moveTo(l.x,l.y);for(var u=1;u<s;u++)l=t.getPointPosition(u,i),o.lineTo(l.x,l.y);o.closePath(),o.stroke()}}(t,n,u,s),o.display){var f=l(o.fontColor,e.defaultFontColor);if(d.font=p,d.save(),d.translate(t.xCenter,t.yCenter),d.rotate(c),o.showLabelBackdrop){var g=d.measureText(i).width;d.fillStyle=o.backdropColor,d.fillRect(-g/2-o.backdropPaddingX,-u-h/2-o.backdropPaddingY,g+2*o.backdropPaddingX,h+2*o.backdropPaddingY)}d.textAlign="center",d.textBaseline="middle",d.fillStyle=f,d.fillText(i,0,-u),d.restore()}}}),(i.angleLines.display||i.pointLabels.display)&&function(t){var i=t.ctx,n=t.options,o=n.angleLines,l=n.pointLabels;i.lineWidth=o.lineWidth,i.strokeStyle=o.color;var d,c,h,f,g=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),p=s(t);i.textBaseline="top";for(var m=r(t)-1;m>=0;m--){if(o.display){var v=t.getPointPosition(m,g);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(v.x,v.y),i.stroke(),i.closePath()}if(l.display){var b=t.getPointPosition(m,g+5),x=a.valueAtIndexOrDefault(l.fontColor,m,e.defaultFontColor);i.font=p.font,i.fillStyle=x;var y=t.getIndexAngle(m),k=a.toDegrees(y);i.textAlign=0===(f=k)||180===f?"center":f<180?"left":"right",d=k,c=t._pointLabelSizes[m],h=b,90===d||270===d?h.y-=c.h/2:(d>270||d<90)&&(h.y-=c.h),u(i,t.pointLabels[m]||"",b,p.size)}}}(t)}}});t.scaleService.registerScaleType("radialLinear",c,i)}},{25:25,34:34,45:45}],58:[function(t,e,i){"use strict";var n=t(1);n="function"==typeof n?n:window.moment;var a=t(25),o=t(45),r=Number.MIN_SAFE_INTEGER||-9007199254740991,s=Number.MAX_SAFE_INTEGER||9007199254740991,l={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},u=Object.keys(l);function d(t,e){return t-e}function c(t){var e,i,n,a={},o=[];for(e=0,i=t.length;e<i;++e)a[n=t[e]]||(a[n]=!0,o.push(n));return o}function h(t,e,i,n){var a=function(t,e,i){for(var n,a,o,r=0,s=t.length-1;r>=0&&r<=s;){if(a=t[(n=r+s>>1)-1]||null,o=t[n],!a)return{lo:null,hi:o};if(o[e]<i)r=n+1;else{if(!(a[e]>i))return{lo:a,hi:o};s=n-1}}return{lo:o,hi:null}}(t,e,i),o=a.lo?a.hi?a.lo:t[t.length-2]:t[0],r=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=r[e]-o[e],l=s?(i-o[e])/s:0,u=(r[n]-o[n])*l;return o[n]+u}function f(t,e){var i=e.parser,a=e.parser||e.format;return"function"==typeof i?i(t):"string"==typeof t&&"string"==typeof a?n(t,a):(t instanceof n||(t=n(t)),t.isValid()?t:"function"==typeof a?a(t):t)}function g(t,e){if(o.isNullOrUndef(t))return null;var i=e.options.time,n=f(e.getRightValue(t),i);return n.isValid()?(i.round&&n.startOf(i.round),n.valueOf()):null}function p(t){for(var e=u.indexOf(t)+1,i=u.length;e<i;++e)if(l[u[e]].common)return u[e]}function m(t,e,i,a){var r,d=a.time,c=d.unit||function(t,e,i,n){var a,o,r,d=u.length;for(a=u.indexOf(t);a<d-1;++a)if(r=(o=l[u[a]]).steps?o.steps[o.steps.length-1]:s,o.common&&Math.ceil((i-e)/(r*o.size))<=n)return u[a];return u[d-1]}(d.minUnit,t,e,i),h=p(c),f=o.valueOrDefault(d.stepSize,d.unitStepSize),g="week"===c&&d.isoWeekday,m=a.ticks.major.enabled,v=l[c],b=n(t),x=n(e),y=[];for(f||(f=function(t,e,i,n){var a,o,r,s=e-t,u=l[i],d=u.size,c=u.steps;if(!c)return Math.ceil(s/(n*d));for(a=0,o=c.length;a<o&&(r=c[a],!(Math.ceil(s/(d*r))<=n));++a);return r}(t,e,c,i)),g&&(b=b.isoWeekday(g),x=x.isoWeekday(g)),b=b.startOf(g?"day":c),(x=x.startOf(g?"day":c))<e&&x.add(1,c),r=n(b),m&&h&&!g&&!d.round&&(r.startOf(h),r.add(~~((b-r)/(v.size*f))*f,c));r<x;r.add(f,c))y.push(+r);return y.push(+r),y}e.exports=function(t){var e=t.Scale.extend({initialize:function(){if(!n)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),t.Scale.prototype.initialize.call(this)},update:function(){var e=this.options;return e.time&&e.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),t.Scale.prototype.update.apply(this,arguments)},getRightValue:function(e){return e&&void 0!==e.t&&(e=e.t),t.Scale.prototype.getRightValue.call(this,e)},determineDataLimits:function(){var t,e,i,a,l,u,h=this,f=h.chart,p=h.options.time,m=p.unit||"day",v=s,b=r,x=[],y=[],k=[];for(t=0,i=f.data.labels.length;t<i;++t)k.push(g(f.data.labels[t],h));for(t=0,i=(f.data.datasets||[]).length;t<i;++t)if(f.isDatasetVisible(t))if(l=f.data.datasets[t].data,o.isObject(l[0]))for(y[t]=[],e=0,a=l.length;e<a;++e)u=g(l[e],h),x.push(u),y[t][e]=u;else x.push.apply(x,k),y[t]=k.slice(0);else y[t]=[];k.length&&(k=c(k).sort(d),v=Math.min(v,k[0]),b=Math.max(b,k[k.length-1])),x.length&&(x=c(x).sort(d),v=Math.min(v,x[0]),b=Math.max(b,x[x.length-1])),v=g(p.min,h)||v,b=g(p.max,h)||b,v=v===s?+n().startOf(m):v,b=b===r?+n().endOf(m)+1:b,h.min=Math.min(v,b),h.max=Math.max(v+1,b),h._horizontal=h.isHorizontal(),h._table=[],h._timestamps={data:x,datasets:y,labels:k}},buildTicks:function(){var t,e,i,a,o,r,s,d,c,v,b,x,y=this,k=y.min,M=y.max,w=y.options,S=w.time,C=[],_=[];switch(w.ticks.source){case"data":C=y._timestamps.data;break;case"labels":C=y._timestamps.labels;break;case"auto":default:C=m(k,M,y.getLabelCapacity(k),w)}for("ticks"===w.bounds&&C.length&&(k=C[0],M=C[C.length-1]),k=g(S.min,y)||k,M=g(S.max,y)||M,t=0,e=C.length;t<e;++t)(i=C[t])>=k&&i<=M&&_.push(i);return y.min=k,y.max=M,y._unit=S.unit||function(t,e,i,a){var o,r,s=n.duration(n(a).diff(n(i)));for(o=u.length-1;o>=u.indexOf(e);o--)if(r=u[o],l[r].common&&s.as(r)>=t.length)return r;return u[e?u.indexOf(e):0]}(_,S.minUnit,y.min,y.max),y._majorUnit=p(y._unit),y._table=function(t,e,i,n){if("linear"===n||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var a,o,r,s,l,u=[],d=[e];for(a=0,o=t.length;a<o;++a)(s=t[a])>e&&s<i&&d.push(s);for(d.push(i),a=0,o=d.length;a<o;++a)l=d[a+1],r=d[a-1],s=d[a],void 0!==r&&void 0!==l&&Math.round((l+r)/2)===s||u.push({time:s,pos:a/(o-1)});return u}(y._timestamps.data,k,M,w.distribution),y._offsets=(a=y._table,o=_,r=k,s=M,b=0,x=0,(d=w).offset&&o.length&&(d.time.min||(c=o.length>1?o[1]:s,v=o[0],b=(h(a,"time",c,"pos")-h(a,"time",v,"pos"))/2),d.time.max||(c=o[o.length-1],v=o.length>1?o[o.length-2]:r,x=(h(a,"time",c,"pos")-h(a,"time",v,"pos"))/2)),{left:b,right:x}),y._labelFormat=function(t,e){var i,n,a,o=t.length;for(i=0;i<o;i++){if(0!==(n=f(t[i],e)).millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===n.second()&&0===n.minute()&&0===n.hour()||(a=!0)}return a?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}(y._timestamps.data,S),function(t,e){var i,a,o,r,s=[];for(i=0,a=t.length;i<a;++i)o=t[i],r=!!e&&o===+n(o).startOf(e),s.push({value:o,major:r});return s}(_,y._majorUnit)},getLabelForIndex:function(t,e){var i=this.chart.data,n=this.options.time,a=i.labels&&t<i.labels.length?i.labels[t]:"",r=i.datasets[e].data[t];return o.isObject(r)&&(a=this.getRightValue(r)),n.tooltipFormat?f(a,n).format(n.tooltipFormat):"string"==typeof a?a:f(a,n).format(this._labelFormat)},tickFormatFunction:function(t,e,i,n){var a=this.options,r=t.valueOf(),s=a.time.displayFormats,l=s[this._unit],u=this._majorUnit,d=s[u],c=t.clone().startOf(u).valueOf(),h=a.ticks.major,f=h.enabled&&u&&d&&r===c,g=t.format(n||(f?d:l)),p=f?h:a.ticks.minor,m=o.valueOrDefault(p.callback,p.userCallback);return m?m(g,e,i):g},convertTicksToLabels:function(t){var e,i,a=[];for(e=0,i=t.length;e<i;++e)a.push(this.tickFormatFunction(n(t[e].value),e,t));return a},getPixelForOffset:function(t){var e=this,i=e._horizontal?e.width:e.height,n=e._horizontal?e.left:e.top,a=h(e._table,"time",t,"pos");return n+i*(e._offsets.left+a)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._timestamps.datasets[i][e]),null===n&&(n=g(t,this)),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,i=e._horizontal?e.width:e.height,a=e._horizontal?e.left:e.top,o=(i?(t-a)/i:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,r=h(e._table,"pos",o,"time");return n(r)},getLabelWidth:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=o.toRadians(e.maxRotation),r=Math.cos(n),s=Math.sin(n);return i*r+o.valueOrDefault(e.fontSize,a.global.defaultFontSize)*s},getLabelCapacity:function(t){var e=this,i=e.options.time.displayFormats.millisecond,a=e.tickFormatFunction(n(t),0,[],i),o=e.getLabelWidth(a),r=e.isHorizontal()?e.width:e.height,s=Math.floor(r/o);return s>0?s:1}});t.scaleService.registerScaleType("time",e,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{1:1,25:25,45:45}]},{},[7])(7)});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if ( true && !exports.nodeType) {
    if ( true && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(1)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(6);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.health-container {\n  font-family: \"Helvetica\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300;\n  position: relative;\n  box-shadow: 0px 2px 38px -5px rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  padding: 39px 37px 54px;\n  overflow: hidden;\n  max-width: 740px; }\n  .health-container__error {\n    font-family: \"Helvetica\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-weight: 300;\n    display: block;\n    text-align: center;\n    font-style: italic;\n    font-size: 18px;\n    color: #222; }\n    .health-container__error::before {\n      content: '🙃';\n      display: block;\n      font-size: 54px;\n      font-style: normal;\n      line-height: 29px;\n      margin-bottom: 20px; }\n  .health-container__heart-rate {\n    margin: 0 -53px;\n    position: absolute;\n    bottom: -42px;\n    left: 0;\n    right: 0;\n    margin-bottom: 74px;\n    border-bottom: 74px solid rgba(254, 202, 87, 0.47);\n    margin-bottom: 0;\n    bottom: 0;\n    overflow: hidden; }\n    .health-container__heart-rate canvas {\n      position: relative;\n      bottom: -10px; }\n\n@media (max-width: 500px) {\n  .health-container {\n    margin: 0;\n    padding-bottom: 28px;\n    padding-left: 24px;\n    padding-right: 24px; } }\n\n@keyframes fade-in-up {\n  0% {\n    opacity: 0;\n    transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0); } }\n\n.vitals {\n  position: relative;\n  font-family: \"Helvetica\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300; }\n  .vitals, .vitals__graph {\n    animation-name: fade-in-up;\n    animation-fill-mode: forwards;\n    animation-timing-function: ease-in-out;\n    animation-duration: .2s; }\n  .vitals__graph {\n    z-index: 10;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    box-shadow: inset 0px 0px 0px 3px rgba(0, 0, 0, 0.04); }\n  .vitals__graph-wrap {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    z-index: -1; }\n  .vitals__content {\n    z-index: 20;\n    position: relative; }\n  .vitals__metrics {\n    list-style: none;\n    display: flex;\n    margin: 0;\n    margin-bottom: 25px;\n    flex-wrap: wrap; }\n  .vitals__metric-container {\n    margin-right: 40px;\n    margin-bottom: 20px;\n    flex: 0; }\n    .vitals__metric-container::last-child {\n      margin-right: 0; }\n  .vitals__text {\n    font-weight: bold;\n    color: rgba(34, 34, 34, 0.78);\n    letter-spacing: -1px;\n    max-width: 550px;\n    display: block;\n    font-size: 28px;\n    line-height: 34px; }\n    .vitals__text::after {\n      content: '';\n      background-color: rgba(255, 0, 173, 0.15);\n      height: 8px;\n      margin-top: 15px;\n      display: block;\n      margin-right: 22px; }\n\n.vital-metric {\n  font-family: \"Helvetica\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center; }\n  .vital-metric__icon {\n    width: 22px;\n    height: 22px;\n    margin-right: 8px;\n    color: transparent;\n    user-select: none;\n    background-color: transparent;\n    background-size: cover;\n    background-size: contain;\n    background-repeat: no-repeat;\n    margin-bottom: 33px; }\n    .vital-metric__icon--heart {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjIgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJoZWFydCIgZmlsbD0iI0Q3NUE0QSIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgICAgICA8cGF0aCBkPSJNMTAuOTM0LDMuNzEgQzExLjgyMiwxLjUyNiAxMy44NTEsMCAxNi4yMSwwIEMxOS4zODgsMCAyMS42NzcsMi44MjEgMjEuOTY1LDYuMTgzIEMyMS45NjUsNi4xODMgMjIuMTIsNy4wMTggMjEuNzc4LDguNTIgQzIxLjMxMywxMC41NjYgMjAuMjE4LDEyLjM4NCAxOC43NDMsMTMuNzcxIEwxMC45MzQsMjEgTDMuMjU3LDEzLjc3MSBDMS43ODIsMTIuMzg0IDAuNjg3LDEwLjU2NiAwLjIyMiw4LjUyIEMtMC4xMiw3LjAxNyAwLjAzNSw2LjE4MyAwLjAzNSw2LjE4MyBDMC4zMjMsMi44MiAyLjYxMiwwIDUuNzksMCBDOC4xNSwwIDEwLjA0NiwxLjUyNiAxMC45MzQsMy43MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);\n      opacity: .7;\n      background-size: 18px 18px;\n      background-position: center; }\n    .vital-metric__icon--steps {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyM3B4IiB2aWV3Qm94PSIwIDAgMjIgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJpY29uIiBmaWxsPSIjRkJDNDg1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS4xNjA0OCwxMi41NDM1MiBDMjEuMDkyNzIsMTIuODczNTIgMjAuODY3NDQsMTMuMTgxNTIgMjAuNDUyOTYsMTMuMDgyMDggQzE4Ljk2MTM2LDEyLjcyOTIgMTYuNjI0MDgsMTIuNjIzNiAxNS4yMzk4NCwxMi45NTg4OCBDMTQuNzMxMiwxMy4wODIwOCAxNC40OTM2LDEyLjg2MDMyIDE0LjMwMjY0LDEyLjI1MjI0IEMxMy44MjY1NiwxMC43NDEyOCAxMy4wNzUwNCw4LjkxOTY4IDEzLjIzNjk2LDYuNTg1OTIgQzEzLjU5ODY0LDEuMzU3ODQgMTUuNzU3MjgsLTAuMDg5NzYgMTcuMzgzNTIsMC4wMDQ0IEMxOS4wMDk3NiwwLjA5ODU2IDIzLjE4ODg4LDIuNjgzMTIgMjEuMTYwNDgsMTIuNTQzNTIgWiBNMTQuNDcwNzIsMTUuNjYzMTIgQzE0LjQ3MDcyLDE1LjY2MzEyIDE0LjE3OTQ0LDE2LjU3MDQgMTQuMDE1NzYsMTguMDQ3OTIgQzEzLjc0NDcyLDIwLjQ5MTY4IDE0LjI3MDA4LDIyLjE4NzQ0IDE2LjY1NjY0LDIyLjUzMDY0IEMxOC42NzAwOCwyMi44MjEwNCAxOS45NjI4LDIxLjMwNzQ0IDIwLjIzMjA4LDE4Ljg2MzY4IEMyMC4zOTQ4OCwxNy4zODcwNCAyMC40MDg5NiwxNi40NDQ1NiAyMC40MDg5NiwxNi40NDQ1NiBMMTQuNDcwNzIsMTUuNjYzMTIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICAgICAgPHBhdGggZD0iTTUuMTgzMiwwLjAwNDQgQzYuODA5NDQsLTAuMDg4ODggOC45NjgwOCwxLjM1Nzg0IDkuMzI5NzYsNi41ODU5MiBDOS40OTE2OCw4LjkxOTY4IDguNzQwMTYsMTAuNzQyMTYgOC4yNjQwOCwxMi4yNTIyNCBDOC4wNzIyNCwxMi44NTk0NCA3LjgzNTUyLDEzLjA4MTIgNy4zMjY4OCwxMi45NTg4OCBDNS45NDI2NCwxMi42MjM2IDMuNjA1MzYsMTIuNzI4MzIgMi4xMTM3NiwxMy4wODIwOCBDMS42OTkyOCwxMy4xODA2NCAxLjQ3NCwxMi44NzM1MiAxLjQwNjI0LDEyLjU0MzUyIEMtMC42MjIxNiwyLjY4MzEyIDMuNTU3ODQsMC4wOTg1NiA1LjE4MzIsMC4wMDQ0IFogTTIuMTU2ODgsMTYuNDQ0NTYgQzIuMTU2ODgsMTYuNDQ0NTYgMi4xNzE4NCwxNy4zODcwNCAyLjMzMzc2LDE4Ljg2MzY4IEMyLjYwMzkyLDIxLjMwNzQ0IDMuODk1NzYsMjIuODIxMDQgNS45MDkyLDIyLjUzMDY0IEM4LjI5NTc2LDIyLjE4NzQ0IDguODIxMTIsMjAuNDkyNTYgOC41NTAwOCwxOC4wNDc5MiBDOC4zODY0LDE2LjU3MDQgOC4wOTUxMiwxNS42NjMxMiA4LjA5NTEyLDE1LjY2MzEyIEwyLjE1Njg4LDE2LjQ0NDU2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+); }\n    .vital-metric__icon--distance {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMTYgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuNjQ5MzE0OTkxIj4gICAgICAgIDxnIGlkPSJmYWNlYm9vay1wbGFjZWhvbGRlci1mb3ItbG9jYXRlLXBsYWNlcy1vbi1tYXBzIiBmaWxsPSIjRTQ2Qzc2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC44MTM0MDE0LDUuNDY0MzIwMTkgQzE0LjczNTI1MjksNS4xNzE0MjkyMyAxNC41NzY1NTY4LDQuODU5MzQ1NzEgMTQuNDU5MTU1NSw0LjU4NjEwNjczIEMxMy4wNTQzMjAyLDEuMjA5OTQ4OTYgOS45ODQ3ODQyMiwwIDcuNTA2Mjg3NywwIEM0LjE4ODM3MTIzLDAgMC41MzQwNzQyNDYsMi4yMjQ4MDc0MiAwLjA0NjE5NDg5NTYsNi44MTA2NTg5MyBMMC4wNDYxOTQ4OTU2LDcuNzQ3NTczMDkgQzAuMDQ2MTk0ODk1Niw3Ljc4NjY3Mjg1IDAuMDU5NjcwNTMzNiw4LjEzNzkwNzE5IDAuMDc4ODEyMDY1LDguMzEzNjAwOTMgQzAuMzUyMzA2MjY1LDEwLjQ5OTEwNDQgMi4wNzY4MzA2MywxMi44MjE4MTQ0IDMuMzY0Nzc0OTQsMTUuMDA3MzE3OSBDNC43NTA0MTc2MywxNy4zNDg4NjMxIDYuMTg4MjI3MzgsMTkuNjUyMjc4NCA3LjYxMjcxNDYyLDIxLjk1NDcyMzkgQzguNDkxMDgxMjEsMjAuNDUyMTkwMyA5LjM2NjI4MzA2LDE4LjkyOTkwMjYgMTAuMjI0NjQwNCwxNy40NjYyNjQ1IEMxMC40NTg1NzU0LDE3LjAzNjcyODUgMTAuNzMwMTI5OSwxNi42MDc0NDc4IDEwLjk2NDMyMDIsMTYuMTk3NDYxNyBDMTEuMTIwNDEzLDE1LjkyNDQ3OCAxMS40MTg2MTI1LDE1LjY1MTQ5NDIgMTEuNTU0ODQ5MiwxNS4zOTc0OTg4IEMxMi45NDA0NDA4LDEyLjg2MDY1ODkgMTUuMTcwNzEsMTAuMzA0MjE4MSAxNS4xNzA3MSw3Ljc4NjYyMTgxIEwxNS4xNzA3MSw2Ljc1MjM2NjU5IEMxNS4xNzA3NjEsNi40Nzk0MzM4NyAxNC44MzI0NDA4LDUuNTIzMTc0MDEgMTQuODEzNDAxNCw1LjQ2NDMyMDE5IFogTTcuNTY3MDMwMTYsMTAuMTY3NjI0MSBDNi41OTE3MzA4NiwxMC4xNjc2MjQxIDUuNTI0MTk0OSw5LjY3OTk0ODk2IDQuOTk3MjY2ODIsOC4zMzMxNTA4MSBDNC45MTg3NjEwMiw4LjExODc2NTY2IDQuOTI1MDkwNDksNy42ODkxMjc2MSA0LjkyNTA5MDQ5LDcuNjQ5NzcyNjIgTDQuOTI1MDkwNDksNy4wNDQ3OTgxNCBDNC45MjUwOTA0OSw1LjMyNzg3OTM1IDYuMzgyOTA5NTEsNC41NDcxMDkwNSA3LjY1MTE1MDgxLDQuNTQ3MTA5MDUgQzkuMjEyNDg3MjQsNC41NDcxMDkwNSAxMC40MjAwMzcxLDUuNzk2MjU5ODYgMTAuNDIwMDM3MSw3LjM1NzU5NjI5IEMxMC40MjAwMzcxLDguOTE4ODgxNjcgOS4xMjgzNjY1OSwxMC4xNjc2MjQxIDcuNTY3MDMwMTYsMTAuMTY3NjI0MSBaIiBpZD0iRmFjZWJvb2tfUGxhY2VzIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=); }\n  .vital-metric__main-value-container {\n    display: flex;\n    flex-flow: row nowrap; }\n  .vital-metric__main-value {\n    font-size: 60px;\n    font-weight: bold;\n    color: #222;\n    opacity: .74;\n    flex: 0 0 auto;\n    line-height: 50px; }\n  .vital-metric__unit {\n    flex: 1 1 auto;\n    margin-left: 1px; }\n  .vital-metric__unit-value {\n    display: block;\n    font-size: 17px;\n    font-style: italic;\n    font-weight: 400;\n    color: rgba(34, 34, 34, 0.78);\n    opacity: .6;\n    line-height: 20px; }\n  .vital-metric__unit-description {\n    color: rgba(34, 34, 34, 0.78);\n    display: block;\n    font-weight: bold;\n    font-size: 13px;\n    margin-left: 3px; }\n  .vital-metric__secondary-value-container {\n    opacity: .45;\n    flex: 0 0 100%;\n    display: flex;\n    margin-top: 5px; }\n  .vital-metric__secondary-value {\n    font-size: 24px;\n    line-height: 29px;\n    font-weight: bold;\n    line-height: 26px; }\n  .vital-metric__secondary-unit {\n    margin-left: 3px; }\n  .vital-metric__secondary-unit-value {\n    display: block;\n    font-size: 11px;\n    line-height: 11px;\n    font-weight: 400;\n    font-style: italic; }\n  .vital-metric__secondary-unit-value-description {\n    display: block;\n    font-size: 12px;\n    line-height: 12px;\n    font-weight: bold;\n    font-style: italic; }\n\n@media (max-width: 500px) {\n  .vitals__text {\n    font-size: 20px;\n    line-height: 25px; }\n  .vitals__metrics {\n    margin-bottom: 0; } }\n\n@keyframes loader-spin {\n  0% {\n    transform: translateY(-50%) translateX(-50%) rotate(0deg); }\n  100% {\n    transform: translateY(-50%) translateX(-50%) rotate(360deg); } }\n\n.loader {\n  width: 106px;\n  height: 106px;\n  position: relative;\n  margin: 0 auto;\n  background-color: rgba(34, 34, 34, 0.9);\n  border-radius: 100%;\n  padding: 10px; }\n  .loader__ring {\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateY(-50%) translateX(-50%);\n    animation-name: loader-spin;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite; }\n    .loader__ring--small {\n      animation-duration: 1s;\n      background-image: url(data:image/png;base64,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);\n      width: 45px;\n      height: 45px;\n      animation-delay: .3s; }\n    .loader__ring--medium {\n      animation-duration: 1s;\n      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAYAAAFvxRC3AAAp1ElEQVR42u19eXAc13nncN7rAUhKCleRIlnxuuRayY7/8Hpd3op3XbuJylHJla1SNluREu3aq3JFWxupUuVNyps/Ym/KPEVSNEUSIImL4AECBHESF8FDvEECBAgdlEzc9w3iPnpAkAB739fvve7XPT2DOboHM+C8qlcySbPx+Otff9/3vtPlWmHdVV7YWLuIest78B3yy6+RLblCWY2K57t3FCzDblDQYsNjrMBOvexeKOxBcsU0koN6EH+Ith8jL3/YwWtooagfHoblwnEsnxjBcvAPYvvyJHrz8BX0P8oG3fLZGSSXk5PBw44PIzljwOKB5gc0Kvg/+fuhZTNJP1FPNozljEEsp/QIDxQxgh0stvxkB7oFDIM9kXnljCS9qT6MnGx3BztEOKfiK6OfnmxXOzkd8Ciih6n/THKydvJ37yhSg/6wpP8S6sPS+j0/3c9PRh52JaKHDUj/cz852a52GzBLJ5jt60LyzjZkz8PgZDutTlavJP0k2AcdHfT89zR2sg/b/HAt2IdlD2GZPsz0d8yf06dK0pv+HlI66Xkn7z6Ws4eQfLgPyx93ITnoD71B8fz01pLnZ5cWsHx2Dsslk1imD6MnC1ly3HyE5U8WkFwFD5tAcu4olo8MhSnXbi7BwzB7WOhvXV31SyidCMbH6TfcH5FfPkP2upAeYMCLSVnYWXeQt5z8E0sngzhZo5L0hg/4wsOOfkoeNkkfBi8gwIPweSvg6x/jy2nV0veL2nFt1RiSK2f0h8HbTGl/JWlFwAP9C4Aa8DbhYcCzsB/EF6UGZqTFkX1KsOBhh8SHGeX/08+F8rCskeRvHurF8t5OLG9vUYVj+OIHlq0PO+jIw5ptetge8rBt5oc1Khu+FpKaG/L8Uar4sEiokUnsjFSizT/q8MOzYB8I5pTlw0J9ILfNQJsbLCC+bivPPmMtZaXPaomVdH1RuntexsQ2Y4YeM6dCsxzJvv0Yy9cWscwfVqAaekHi26Dg2UAPK5yQMlx2LaPwRAYBCpv8/uOsBuTNa0XeMyNEBk67W11OLH/aj+3H5oPBTvkELaTVIe9pop/LJqi1DwIa3l3+/TCVWyCNYKnvTYc6N4IfHiOq53QH8paNwqHc6mvjB8slvwfEOkpEa+7Es88EeSBfXWe1LUQyaGbELlYe9l93yZjra2CcwC2khB0M1BrY/GD1wCcU0FgJ4pXJdtCigCEGXw+oSTjYoT5Evm8k7+2SGkI6lBO8BcSOMMRA7cKd5ONOBFeJ2VU7lKi+VcR6ET1YF73jbG/DfxLwYK4oLPoqKWJ7O5F6xdnRQi9g6daWtXQ5GgdL75c+O8gQAyUOB+OKfNrqYF8o6/8wGgc73O/5t4AY3C73MMS2U8Twr/0otqtReZX90l1AbD9DDO6ElgZGtDkGl1Qwn+BuuacDqQdTEaMHk1pX43Bg7IBwTSUyTD0YINaGZUVR1q2ayACpnzmA6MEYYh8RxHa3WVgb0ZD8oI5OqOqImodpfViV+nCwvR34RxGpJuqjSP5mMAepnPX8Ebj+SshdsoDpSTAzqZ6kHgJALOh/WbvySlKw1oVwF1UdAWAIgmcBjEG4w5dPWSlwbO1SDM0eE71g/vftZXqw6w+pY+EcP9g09VYUjNE77snRFV5ZuKtBSf5TfzY4R+wThljlnOkri9a6vYTeql1EFeQ1Pqx9gObzvkBn/jHF9Qb5I7DX1oNNFpWD3FE8mw06dRk/MFuwWbVo4cQXyFvU65YryCssH3N928ED4flgzGq+D9eQw90jlxEwrWeI3U94VjyJcmw8kJQRir2vhRyuooVjBLWSYercL5siByPonSYfQOHwU887eTsKeLC0m2jhZAsg5lZvSGeIyCiewPLp+wi+Svn4EOp17FD+7pVH7yBvLnmNJQPkUJPsVRLEisYpYurBiM2fNYhkRw7FD3brgfuXp5tc/2Ffpeu1443uLWUQ6CHcOksOdXYOnH6YHmxCP9gxdrCghWxwVzc8YHF1A7GA2dXNw65y66rn8Yh2MIIYXHbFg6WTf8Sh3givb5Eo8jMEvaIJuIVTjh0lujJLNXsQtcc68euWf1FRXsOBDyUdjfQLJ+QvFhHLVBGjhiJENEJGq0HBv7RL/BSMe3bkjFgfDCxYk1tg/TdC4FPEK2cUjx8dogfjr9LyYKtx4QWOUUMRCTY/Ma1bcc2KB+tWXk526mDHujdt4qY1RwxMayEMJ727Wrck0ebXDmYV0jN9halRuFPmwatULyPsYBAe3NYivbeqd0r1Jg4H6+G3JCx/2ILkrc1YjoGDYQ2x3RyxWDgYvfDSwCw9GI4VxJB+sHYk74idV4nUMAZEnyFlYkdMcSw2EcMMMXowlWNNUlsgOZbhvBzDxYe0V6kjtq0p6dWACjwq/tdeerC91GOtHmxFXXlPef4px5Q4uSllgPUqvMpdDLFVtS5UV3o/9fYcEA62s016P1jT5779wQc8zQ+m+vjhVbKDhWjBerbZdajcUXTwuHBDoq50zjEpJ5zLSEmkhyL2/kV+pwTE0k2IBXKY/MapW5J6Cx9D2kVEO1gfTUez67I7EeyByJ1ymvot2NVtBNE7JTuY6uPvwr+y/SbOOVivJP+49lHyn91Y9Hx45QGWL3qxTC67aurNGcE9kAMHG+KXXTWOVOeYm4Dv2iUs33iI5SuL5GCQ3TWvuwc4YvzqlqVme0mnwnVBXQz1YDWPyMEYYmdVxLCKWLFwCwfEssc2vGSH0y6I1ykgJhwMXOnqq9QQQ/YK7c+VpFdXcqXzg10mB7ugHYxyrHAcOW+xNCjSPSvEbpkRU11Qzt+27HKdknus1OHj/LNwMvNdv4wfn/zC7T15F3nz7iHv6TbkLSHmUnEvyjlw3fUqc3+tc4WaYxhLi5l5k+F4Sv3tcyN46fANtJBZj7zHv0DeUwAcEYdlRKGoHtVpxCgt7Y95gMDt16jg0TDE8nKwgKkZQ5fQQuo1tJABoH1JM4dKwWE/QZ32FUycQ7IOD6vlj0u/iBGQ3kbh6C3TXgoJsMto4dB1wrIG5D3xFQGsG8klw24dsGkGGFM1haqCRmos8qQa9vP8ZjXkUIoNQGmfpL/8M5+gRiN6kFGLFiCN+QRhVwFhV8kQ/STLp9zsk9QZpgOG5bxRqqNPMAMCgriKstntNFBf2QWUGbT6ZXVbsq20Ey2cIsL+VBPy5rcib3EPkVNEdpUTECqnkFw1Q7OtwYjhsTQdMEwBYwyDHIFjLJ8ui+UKHOre+GLMMkp0ot5UnnvaFPDhQR/I04P08g1kw//nGbbhf2/cfMz14tkplHWOmKDVczRSBVF3AIwbWBywAg7YKNYZNkQZlqWmClAbGvxNsSKjYA+F6JNfZwJQ3OtMW11X7z//FAFsrNwM2BhSLVONYcInCUEsChh1BYA//0C3dNGRUHMYIcOorpIpfL9IA4wmasIFiDPsiAkwuHADYODY2d8d4r05TPPA9gCdLUG+Cc+2fJYYA4BB1o72SQ7S7B3+SaqAdSMVMHA67esJIunfX1ZFEDLpqCuGF/kkS3KYG+eoiWFp/TQ1WGNYF014hfS6jzqTXg0E1lQ4YMXTDYQDxrPpVMD6dBnGP0kOGHipf9tqUd9jTiAKVpjH47WNfJKTR1hUGVysaUyGpQqAgVdzTyf3BYfodo1FoW6Do3wik8kw9ZPspfG1A4IMg7A8hBsg63VHK74nasSOtfwZ+ls6w7DGsAMsvgwJ1ZxhEM7dHmwoxLKY1Ghwxu06Mb7+D6kNRt3lKmDdNCYJDIOgvA4Y5O/jKqiEf/tJZBdfHLCD2idJAQMZZgCsGQK6tOChIkTz4R/XEmCZA55tNGsHMYGPGGCcYVgNMm9v0QHrDxGw768phvXiP6Mmhc6wj5kM82UYrfVpfpIBy+zFrx/uM16LRIaBSQGxb5BhKmANipQX4tXn/64phvXhD1XAepDJaEUGwKD8aGsT+STrFel7T7bQxzL/JMVrETBstyDDALAtTWilxD/rXaP83r9aC2AdG05+OU1z7QgMY1b+bjPDWqR93HDNfhJZRq18X9eOdo80AIaDzxL2s0fi25xA0ypgqtGK1AJA0JAcMLXeDrJJGWBbW1GqCbCkb4cB2lg8gpU9hGfEeyTNOkTMaEWCp4LdI1v8fFFEY+5f6+4d7gvTAOujBSAqYKKnogNrDFvJNZ0Tpre1OJaBOjkiXRSdhyJgBw0XbyxcvIMkQ6Mi/SJ8f75nRywBlX8fHTSH146waBHtdYBY9igS7pFUhoX0gz5Tnno+wkjR+GoCVTiOp43xSB4tQjrD+pkvjNUw69ciqSfsH0w+0T4bwmyTnyubNjkK0NxTz5dN4Rn/AVxTeI19kvq1iAKW2mdD5hqE1G2PdpMrWbgtIK4uJL98QcZFkORIA7hILZ22injT8BoyxiMZw/RoEXySYeYdBloNysYXnUgVsEqCg5ryOlZXDslw1xaRmhB3iSXFQSm3DhgtgucBXBqPFAGzCq+xiHd/iFmj4X+qzgKmpjQu0+zBGlbzDoBB3bslYCziDQX6RYxh+cInCRqSBnARj0f+alWE6x0l+XX7k1NocwAjwyhg0FrhQiDAgGHjek6FHsCFTzICYe7EgvZwtn2SLGnWDJiZYTQBBRkBY0ko+TTNKccVLwu6aREtWxMWw5bNgCE12/gTxrBzBsBA4BMZNgkyzFRPslYWAfI9Ak5VKAxTAfNKbRfmpX0XHwQI4a/lBQ7M+mX3r+qWUF7tIq69vYTmoPtq3SP86Mok6i9oQhdzPkW5v610v/8fX3O9Qv7KC2SDP26jS2ga4IrnDGr/nyhkVht9bzz7MFDaZnkPfnDyC+TN/Qp585qRt7ALeYv7UNfpdvS/GGjuNQMYdRv5b3YVbI5rYQtezKpD3mONyHvyK9risFRNOXeraZtElm2Oa6CCdRURMB4Fm0F9+DpaSL+JFrLvENCakLeAXGdKR2jKOc/RJ9pysnJy/TfiSZjnhKgRg045L25HDw9eJaAB0z5H3lPt5NMcNGZRc/OieBLPF056vhvD8ik8l1AogN18gB9Dnv5hwrIs+DRb3F6YV3DmPlKvRgZ7bIIW0RGLf/Sq8hqOGaAidQOFAhjIOrWwoYYB1op8AZvSDdhidqeEHNe8UedLxoP4/FYuSrUTsCvTeDn1CmVY9qdEa0LOPrlEnxmzYJho8d/Xmr/JhcrbaLVkVa9N98agActuQA+gbAbqjI7ddXtPd7I6o3GD0GcVmsgImHAJzx5KeiNqQNntG2sQZqissB+n1bBKts9pr+miPrcM3ZNFLVkmfJJQNkMBowMRaFIwc/MMSimOg+W/l3hkZTMEjIcrsque2mDQpC+vhRivUD5DTIqKcWKHTYulM1i9U1KhT2vN801eCyEQct5Bu8oZ5yEFTLX2LZl2fR4t5fM6IwJUQTstLi0DsAgYVQCWCbBSBpjKsDGBYT6AQSBE+sp2sMJpDxoiaH13llDajTn0TvWA68c5jdIPf1vo+kHKBfRmxnX0vwlgJ0u60XAZEfAV5JOqJABUkc/w7DSvM9IBE2sliwQteRI8r6M+DOPB3PM2C3jbQRokV6Y/N/0YXleE2P1wPbtgi8VZ0BdlfVk/+m/nZ9HouTm3DAVaKmBzWCv9OyPUSopa0sgw2o6XR78P9tok02wGaiW3sFiQBcYm70LPt8R+H/ELd/Uc3qr2LwDAZrBB6BdNUK+rETBkxTAaauuKUHuG2oghQNbi34fwYwNVspmr2bRVOYv/SSxf5pEj3rKYA3bMT/SbZ1GHbafZ4asn16XGaNuHZVPS7yhgiPr2x6w/Seg1YmbYQZYusEqfYujzxOxapTOedzQ7TI0cIYFhyCddIM2Qp4/kfd0hXqOC7Uftn1k/kFyrvAqVr68v5HaYUFx63JBfQVvt0EoQbMjTD/rCHmnkJ9a8KKcZw04KMkwsX9YSUgyVIOpYiVHHP8VYdT2pwdwRZADMrCW1lCchg2dX5wr+tJUa7ATaq9J9PdhcDPJ5ifXeXOjrMgzrSXXdtMcmbWqG5le4/hgnOgUfeF3/r2PdE5wz5PkOrfc22mE87ZzLMJ/SmU4/7m4adA0rgW5XvLjPc0akTHO9t5jyxAEzls7gSX+asWat57fC0nPEqB2WPiAwTJBh0IyaF2fZJuxvKxtfiDfAckaSv5kt2GHpWtqm7ycJ9d7qAKZWUwjP33iNFa47XfEaAiSAjegtGAIUyLMG3lA6Y44h3gsVMCc7qjrPsqf+wJBU12euBKHDqjSGtaCIq0Bm4j0iz/NcxeKsVIFh5gLTrU3Su2ED1qh4/jLeATsyKP2tzjCsJQbvF4Q+Z5hazdaCOrh2fO9JLf8zMgxrJcxaVxSr4ix/OVoBsgNn1wxg5r47gh22R6iX5OV/4X6OW9YMYP1Sqi/DeJMPWs22k811hBLmPXdf2BgyYLXKM8+uFcCO9Ce9kh6gURHIsJ2cYS0gxzxvuZ7k8mVYfhsVdTDAQIapJcxY3tKM0p94wNJZGxkDYJ1I05K0XhIxwHBFAjChwJR+kgCYWMJMZRir+W5IAMYCINyfL5Yw79JkGOsq0Iz6EzJMACylx1TCbLLDtjbj6QTDhFZYKVorLDaUth2zUb6IMUxqTjDMzLBuvSLXKMNA6EtXEoBZMIx/kruYltyufZJS3hMPmBZi68Gmmm+9sxNn2NZ7+FchAwZJwGsFrMyBpG/5tvPDmgzbxQZUaQz7nfQ9cB62xXPXgMgAk9IMRfI9xu50u5lrBxi2VW9UJO0LkWXza0dDmtMEmD9ftMPaMOsdxgALJ3i7ltw7YkxSTxMQva2ItfPD4XfZbFA8fxP/YEkfpPcLaQIGwLgME/oftqDsSHz6c/EPmDlNwNhKRnRPwydpiIDDMIBQQXO6cYeTC8ZQ0TQB5MMwMerNQ2zbm01RI0gkCYNl/XHrOBzE43pMkgZxrRpG8mGJO1qkVp+HhBP5vqus/3q8gZU15PmObxCXunYOCA0jxSDutpakb/s8qFGR3n8ScisMgwcGjCG2A6YOm1yG+X1YmIm/h+IFrGODUr6YfZjmkyYgdNhk7umdbQGmcIU7BwRsuVgH68R96ftaK5khK4bpaQKiHbbig8PPQIyhqlczs7pfTj4+zIeBItMsEFNLUp5XoQ5sl3KCACzsln4xK8+0aTPDFt2dAoy2CPoHRJIYHEu5rlDVAYWlav8wC4ZxGZZq0fR2T0cIA/AaFPyjyPL0X9qw2mCdmdq0SZtn5LeKzX/T25B/INF+PZF1aPL8bLXAKp6UPjDWSSK/gBlCbAywlPYwfX42FGW1Rhus0kmpm/cPsxoAJQImyjAeYtvXGcE4xc+UDS/ZUc3WqHj+xWmgyqY9O3klLi8sVWuM7vtW4mb5mWe0rwv1RnwQqHG0q16SALfHbqCq5qRUtbB0Wi8s1Spxx/wUlgoM04K4PTZqefJpnbK50HSKyLifhnuei/PSz8/N45mzrKWfbyWu/7I/ETCxD7XtwzmJEqhzsO57pkGRCsiL+bs7StJfkP/+cZ0i/fD2kue/3lqWPri+iIuvLeJZQ4e6eSSLlbjGFjJ6FZufbgL6PCPw57c/+4wjcsJh0HyaRt5iHequGzrU6S39zoq13hYNPnid5AlRS4qFpeDasXt6aRQ+T8sp63W8JelDZGzptyACRpveWpUu612CkTXDBoBZryRFRXXbqQhWAsyHYQCYDJ8kA0yQYb6AWTAMABtYhWucXSZHIMDEppHQktQAGDDM0E0ACaOqfbsJ6FVsYY50tVGu9Tghw1SGPdIZdmWRNr3lnyRteossGVakDRLmDGN1koPJr8fEJTfSu2cghtUIgF1mfag1GWbo4+r7SfJa75wRqSEm3SiRuIYCyrBFI2C8SzCXYeXT/oV+yVgQc25jALiMSAGrXUJa424DwxY4YCgQw2bz7sdhY9xwAisNAsOAXTUWDOOfJG1SJDJMqjk1ZDHPNt4WjXsGHyyuF4T+DWKHiULf3Bq+ahbfq5hK/lPXWl40AUba5y/V6rYfhl2iZkXVBVl6z5VYUXtR77EUryr+wnjTN97m+fYS8tYv40fBdDAmIuTxlWn8qLQDeU9DUzjeHK6Z/LoVefOa3F25v0OXjn+BMjIb3f9nc47r35Oj/J6LtvqCll/QtcrQscq1Fvtqr4UForJBSf4TEJehVGULBFsMilQB2sxW9qKHRxuQ9+gd5D3+Ke1vmfMl8uY20T6X0EK7uJdcSgb1roQV47ipbBwdKhrGryVIFjMGy9PPUaMlvG4bJnJ5IyGWeRPp9/jYHbSQVuNeyKhFC1n1yJt9x612zz55j7brLehCclEfIRq54ZZBn2Mg2qTeXLViRv11TeWc9H7l7BowlOJEvWWE2xwoUNddO8klSrOsWvTg4DW0cLiGkO0m7dib3ej2nviSkgzaHBf2udVWx9C9t2zcLVdMCSRTN7fK1aFNs2cmUUbxzBM628NeCQVN3+y5yK9wDVuym1x8X5rEyymX0AI0G1eJBiQj6hOajp+AUR1thGTdbhmajwPJ1Abkk7QJefmUsbe2GuCZpP4+GHTFI2OF4yinRI4D50LsuNQia70Yxn7sFMGg1zgQLOWyeyH1Klo4dINIsjo3kWLIe+wLmJ1ACEZUZWE/ndJROuqWywh5yibdOsGYI5lHEEsJyfiYgCItmoh4CLYhfxT/KMEkg9cs+XUnHNwhOMIdI9itRfz4AJNgqdfojAmYAgBzJo5/yQnmlmHehCrBiC12ZlwnGJ1wgo0SbFKQYON64+jTY3xsH1JzlXJHpZ4To/j1J5JUNNRkV7/mSDdadIpgpZ3oYeploh5Bel13q2NyMu/QUTkniLGf1+5WZwwVkRvlmVE21GQSCMYHm7hVctFwvj44U5NgdDqMNkQT8rp4MtzJUZ5BCAFZ6WL+mA0jWWNfWjkb+A33FklI9shucl0cR0uHwO4ixOIGfhYjV849an8BuUoGqXpUyQUjOkByqbYXn8/EbDBtKIygIsexkWBjeoNy3q8WCAbBax7Azh5apQGkTi065MH5NAwbJmvYJsmKO9DDjFuEVERigYviKNhcnxFifeVWb4/5HXSUSSkjl+aimKJTOlQXxTSP6+gDdEqZigRyGWwwIfzqj2A04I9Yc2QoUZBOVStRSilxxmDf+GK0kqJsJBklWjiGPzhZ+9FiDkgo2MSIz7lLCHWPDnY81epWnaxFvUQCDVAna/l9cLISIhHiVE5xUvm6KaiBT8nFJwSYCcbVY55ZRfKpwCaC8dylzAFc53iil50LBh7FC7H8kez2EpLrHpH/PkLe24/ww/plvGy6DDyue4iXr83ih9WDaKG0C3lLOgl5iE1V1I70TX6vmPxZaR9RgUAqIk0qRojqY6NyqgixqoidVUVIRbebjcyh0ounU4o2GDfwuYrkN0ie05XHR4NpEkwkGKhIZCAYLUeGUhipzrH0S3vCNDB2LHZVoVXDywZFug59HOuV5B+z9oTmoS3IpU+8AXWSTDZUtkCjX3gZm1x0Ru/vs/0c27//8//nejXzFvqr4i68t3IU150dQ/Nnx91yNSGKuol0qp6D7VbTTdWZTDOMbGxeeYVfFYmEDHF9wJUVwY77U5GDIsFYCXcfbOmU7UnRa9F4F5OyyS6C/rztwdscVtOBRLJ5BMKtZ3uDaa9nf57kMo1hOnTV9dS5GfTOeRmVn5tDc9WMYHTwF9Yl2LQwtpzfIAVycSMfksRFCQapvCdHaLIlHxtwTMi05/UcmaxBMiSRp7O8aNq6A8kHe2LgMsDcDb2xRSipi+x/sKmd+DqL7TaRjhPPvJGw/Y2u0gLaUG93dhb/89k53K8TDAkqUnSyIqFkAwluCm5/UYKdYIWOVIJR9cinB2Rp4/uQVgeT1s+b4yPWjAL1pvatknvDjvmuNpLqSBSnH6yLcAe1qr3rv145LeVrLgrNycoGzZmcrGYJljPC8+t5jj0ySTCdXBn9jGCiBKMEo+0VeiMo6QtdasGU5ViQWp5dsTCRKxoLpn6VTUuHzCrS4KIQ3BT8BqnVhQ5jaxWpEQwJEkwkGJZTupFaO5rSLfWEXWgbWqxwVSXV1XgYmeTkKp1N+lbJhFRfpN0iRQmmD5fOMRn51MAXVOSgXmKlqcg+E8F6GcG0WTJI3tvjUKyzUZF+sYrSancsDy5bjQXD0gonpAwgmH6L1Ov11EFqw0gYpuaPYEhrD5AmtDnh3YdSWGNDaJLPG7TuDaUhRXD2lvNpM34k1t8mqLTyIgT7paoeWeVZrsnJarbBdCOft4PRZxOpEkwYucNbjVKC0XajsH/bEURPndgll2d3gjah+iGVdadGUWbufTPBkKUEyxQlWD9vcKITDAx83pYVeqjRMR+8NZjWWicnUnJlRNvGelIMd6dW5dBLGwjBGrkPTByfmS20StN8YMzJKkowan9xCUbtr/1Cd9a9nfogxI86Qpy1rBv00v7okmv1BlqvxZU76vmZbyaF7qLI0qQX0tqbpPWLBj7SbTCh7RzvBrmnU280vStQg0M/Bv370SIWjJVPSC1nVs7ICxuPD+FWXUWKgW6jk9VKgtEWo0jrLa3bYGx0RTud9wEk290mvR+kWkz6djQdpAkaOL8IyUotVaQYhxT8YLqTlfdPQ0KnUV1F7tYGytB2+butGgGbDUVoHhclcv194tVHbxEp9i+iijTaYMJYcwuCcQlmUJEdmA2voM3fYWrRh624NaA7KZxm8GGS6x8Srzz6i0iwrQaCMS9+hhDotvKDcSerRrAOpM1x3aVNF6DtzD9sl1L92F3rvxGlNJl/Trzq1VtHBvEeM8HSNScrYhIM+5Fg3EUhzr3lvfL5gAHTCAtBemVHgWBFiVe8+ouQ63KmyUVBJRgl2CETwbiLAlpLcwn2UYcuwXYyCcYJtqNFyjb8wHDGF4WxB9vjOQd8Ldlj3Zs2ZQ7gKR6HTNOaiiJfG0zw4nMjf48wAFE18tv06bd8Pum2JqH6PIyBYuH4uf488WpjSIoNeX4qhonETArqxdddFHzezscmJys18PUJT/poPxiNhfeJTtU2h436a4lXGnuLSK8vtVwwQYKl9ooEE1SkECbifrBd7fpELFGCbW3GbZxc/87xzr5K8o8TrzP2VtaA5y1NRfbpbgrRi7+f+cH2dVuoSBPBPhRnnjchOqCUEODXDkuvvsSrjM0FM2TS+/CMUUVaEcw6DrnbYORTCbZdINiWJvxrx3uTNypSWuJVxu5K75MKzKk6hkyKHj2TQgwT+RCMqcftuookBJNOAcGuOkmwTxXPXydeYyzbYdLf8VlEfICT2clqCHSDk7VDH0FNb5BIGxSsEoyNpN7aJF0FgjU7SzD8nxOvMZZ9YugvxGqiQwEIZiXBuIviwxZfgm1plprBBpt2lmBJryReYwx79oelP1YLblmqju5kpS4KcyYFlWDcyMeGMBEn2FZu5DejaSBYv5MEi4e5pU+0iuyXfphmGejWXRR8fJ9Zgu3SBt6abpCMYJubUb/L6Y6C0PU58RpjmGB9nr8Uq4mMEkxI1eE3SB6HNDhZrSXYlmbcABKs3FmCef4m8Rpj2sj/wJhJYVSRvJrIrCJ3d/gSbEcb1gi2RVWRuBwkWLrDfrCMxGuM3UXUY7HoAzMQjMchu/3EITv0ZEOzBNtCjfx0aAHwltNB7sRrjFHppfxASu9Hs8ZAt/9MCpFg1AYzBrq3t+gSDPxgm+953nLdVV7Y6HyoKOknidcZiy4Kzztp/eLEZOoHS2VuChroZhLM4MU3Eoyn6myHLIpmrG6QYHvuvrBR/UEwt8dhNXkz8Tpj0v5q5nFIkGAGgnWLNhj2kWC7DQTjEoyHijAY+FXaD6IDopyVYp8qSW8mXmkMSa8B6ec8H/+wSYKpTlYhVUcsuP3IkKqD9WRDsMFAgjEn67YW04Q3QrIOZ2OSeLRReWlD4tXGgOQaevq5jH4IcrOuhoIfjBv4sLVAN/OD7fGRYEi/QYpxyCbU4fNDCcHejUJWa3ni9caC7SXd5MmGaX4kGPeBWdVDcgmmO1lZoFuTYNK7lj84lBF44Usyz9bEK15NcqFUsWWAWOzBb5Hmglv/KtJEMNit0j2/P5zOWkxUFq3VBRVFYsEtbxkgOlmtCGZwsnZireDWYORzP1jTCpGbO4pnc5Qqu/8p8cqjt7IH8U69XE3oyyoEug+ukEkhhon4LVIME+1o9WwO6jCRDvkMwX2Rn3j1zq+jQ/j8EbHhiYlgh8VqItXRanSy+vSk6DASjOXi1wR9IJgmSwgwFSWS/a5W+fr6BA3sX1CednQYdas9KVTpZS3BzG0z/RFMU5HMRSFIsMnNrSFO5YVKb7uny67QdO6dBCXsW8eHpQ+gdbm58a9ofxlalwsSzCdVR8ikEF0Uqg3WimctK7mDWawgdz6K3XbqE9Iscql1fBjfOya0zaRddbCFBBO6GoqBbl6uxqQXlWDGekg1XboVzX/UGWG+X6Pi+e4q9GZNZGCEuKBC6OSIVJAToG1mlk/LJl6u5keCiY1/fQLdRII1e75ry+FhfjZ44ldhntAvE9RZeeXex9uhqzRtX84IZhh+hU3Dr7DWl1XLpOASjBHMWOxBVGSXriIJwUb39dg8J1xRXsOrME+bl75lws9PUElfV5WXk/PHpAI+HzJ3VJ9NZJ6upjf+tTLyxXRprHeWtqroVpMNpYarTr6L6DcGNrbb/FTxfOdJJlbxlPT9gjF8T5xwmydMVzMPXzjKpJc/gh22SNUxOFmZkb9HbV2OomO6wCD31R4lA1INctmeBFLBoKyiCSlfHN+nTbhlvfGtB5Bin9bloh9Mv0EizcC36ixNA91RHjCvEKMyVga7E/uwtF5J/uZaIlXpuOc7Z6bxeT6jm84mQobxfQaCqRIMWbQuF9pmDjCSsY466WYXhQXBiO11ES4QqwZEo5L0RozNhxyBgPot5ak/iCdCXZQ3vFQxjfeQPS7OhzQMILUY3yeOUD4hDl8QXRSDVgNIja3LzS0DgGAfdyW9ETMAEWmWErvTbaXLMJbmc2XTpljAqnL26ecuyNIHVbNSTdWcPuG2ko1Q1gnGRvixQfBWEizXoCLpfKJjKsHE1uW+09V4Vx3dBhMC3V0oJSa/QuhgSNTV+fiZ1S19SRsfe94ikvjfKDapAuj7f+lB0rcueT3vXF6Q0j5ZkJovepF8wYvl8zKWz5FdPY+FCbdYG0BaYSJYySSfD4n0AaTjXHqxEcqMYEYJpvvBjvjYYPoIZbEnBTHwz6e0x0EXygZl44vkxX0Vb4PhVyxeeYzl28t01y5h+RbbNY/IfojlG2RfJ/vaIpYvP6D7kwVENpYvku1LMGwgGB+jXDYlDiDVh8CLE24NN0imInU3BfIdQDqEA8Qh8VeHuje+GHeG6m3l2WfiS6IFULOPKcFg1y3TDSS7+YhuIJlKMEKuKwaC0X1RJReiBJtnBJtnBJvTyVXOCSbM6C6Z0Cfc+qpIbFSRwvg+/xNutbaZRGI9+0zc34hgin0s22ihEOy2H4LdECTYlQeUZJeI9LrESHYBVKRMJVj1PLIgGBIIZrTBqIGPhAm3vgTjA0jFIfDZgg2WyW6RTD2mwDtZkz4deuuU+uKWYMtII9itJbP0Qqp6vGYhwUA9wj5HpJgmwRixdAOfDoGnM7qxNqPbQDBGLm3CrageDcOvjBKMEKw3YyiGboXR8aPF0mD50CQYt8HM6tHXBtMJxlVktaAiVyaY7qLQh8AjHxeF6gMb1h2tWibFMP7NqvqxYmGxQfMZsUyuBsHINxBsiRr4QDKQYKoNxsgF6vGSan8hZoOB/WWUYEYXBSXYGVCRnGCqkxXpQ+BFJyuf0T0ijFAGCTaEMo4OOzzAPX4l22sY5oOvRvbGihKM3SDrCKlqNRWJNAl2g0mvKw8QJRi7QfpKMGqDVZlUpHaDZATjXnxLCWZUkaM5I9IvriYSAsKx2SAfTR3rPL/aLgofCWZxgzRIsAVBRfIbJNvUwEcBJZhKsAmjk7WAkms+f0zKyR2xKR8rsUTCQSq3Oo13Ksq5aT4uCo1gD80STCAYU4+6iqSb3yANjlbmyTfeIFUbbKpwQtpfOBlmanJiRRqmgiGqUG7n3KxLs5PVn5F/zWSDGZ2sSHeyciPfHCaallrPTHk2l4+tMNwzsWJD2tGWCDBJLvzeGw3BEsxHgiHNySqqyOo51FE9L2VXz0jvVi4kpNKaXpBTVq9I3yO23tt06gl0fFSHU1TQGQKQxSs1E4L1kz1dt4ymCbn6a5el5ltLUkPNI+kqIVjFjUXp1PWHKP3qIv71tUXP21fmpe9deELy1QKt/w+ZYCGfsqIifAAAAABJRU5ErkJggg==);\n      width: 76px;\n      height: 76px;\n      animation-delay: .2s; }\n    .loader__ring--large {\n      animation-duration: 1s;\n      background-image: url(data:image/png;base64,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);\n      width: 106px;\n      height: 106px;\n      animation-delay: .1s; }\n", ""]);



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/moment/min/moment.min.js
var moment_min = __webpack_require__(0);

// CONCATENATED MODULE: ./src/Model/HealthModel.ts

class HealthModel_HealthModel {
  constructor(data) {
    this.data = data;
    this.model = {
      lastUpdated: this.getLastUpdated(this.data.lastUpdateTimestamp),
      workoutString: this.getWorkoutString(this.getWorkouts()),
      metrics: this.data.metrics,
      heartRate: this.data.heartrate,
      restingHeartrate: this.data.restingHeartrate
    };
  }

  getWorkoutAverage() {
    return this.data.averageWorkoutPace;
  }

  getModel() {
    return this.model;
  }

  getWorkouts() {
    return this.data.workouts;
  }

  getWorkoutString(workouts) {
    const lastWorkout = workouts[0];
    const lastWorkoutAgo = moment_min(this.getMSTimestamp(lastWorkout.timestamp)).calendar().toLowerCase();
    return `My last run was ${lastWorkoutAgo}, ${this.getWorkoutDescription(lastWorkout)}`;
  }

  getWorkoutDescription(workout) {
    const dist = `${this.getDistanceKM(workout.distance)} Km`;
    const duration = this.getRunDuration(workout);
    const pace = workout.pace;
    const avg = parseFloat(this.getWorkoutAverage().toFixed(1));
    const betterWorse = pace < avg ? 'better' : pace === avg ? 'the same' : 'worse';
    return `I covered ${dist}, it took ${duration} at a pace of ${pace} min/Km, which is ${betterWorse} than my overall average of ${avg} min/Km`;
  }

  getRunDuration(workout) {
    const diff = workout.end_timestamp - workout.timestamp;
    const lengthMins = diff / 60;
    return `${Math.floor(lengthMins)} mins`;
  }

  getDistanceKM(distance) {
    const dist = (distance / 1000).toFixed(1);
    return dist;
  }

  getLastUpdated(timestamp) {
    return moment_min(this.getMSTimestamp(timestamp)).fromNow();
  }

  getMSTimestamp(t) {
    return t * 1000;
  }

  getLatestHeartRate() {
    return this.model.heartRate[0];
  }

  getRestingHeartRate() {
    return this.model.restingHeartrate;
  }

  getStepsToday() {
    return this.model.metrics.today.steps.toLocaleString('en-GB');
  }

  getStepsAllTime() {
    return this.model.metrics.allTime.steps.toLocaleString('en-GB');
  }

  getDistanceTodayKM() {
    return this.getDistanceKM(this.model.metrics.today.distance);
  }

  getDistanceAllTimeKM() {
    return this.getDistanceKM(this.model.metrics.allTime.distance);
  }

}
// EXTERNAL MODULE: ./node_modules/chart.js/dist/Chart.min.js
var Chart_min = __webpack_require__(2);

// CONCATENATED MODULE: ./src/View/HeartChartView.ts

class HeartChartView_HeartChartView {
  constructor(heartData, container) {
    this.heartData = heartData;
    this.container = container;
    this.canvasEl = document.createElement('canvas');
    this.wrapperEl = document.createElement('div');
    this.wrapperEl.classList.add('health-container__heart-rate');
    this.wrapperEl.appendChild(this.canvasEl);
    this.makeChart(this.heartData);
    this.canvasEl.style.maxHeight = '300px';
  }

  makeChart(data) {
    const dataPoints = this.getDataPoints(data);
    const labels = this.getLabels(dataPoints);
    const chartConfig = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Heartrate',
          data: dataPoints,
          lineColor: 'rgba( 0, 0, 0, 0 )',
          borderColor: 'rgba( 0, 0, 0, 0 )',
          pointBorderColor: 'rgba( 0, 0, 0, 0 )',
          pointBackgroundColor: 'rgba( 0, 0, 0, 0 )',
          pointHoverBackgroundColor: 'rgba( 0, 0, 0, 0 )',
          pointHoverBorderColor: 'rgba( 0, 0, 0, 0 )',
          backgroundColor: HeartChartView_HeartChartView.GRAPH_COLOR,
          fill: 'origin',
          cubicInterpolationMode: 'monotone'
        }]
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        tooltips: {
          mode: 'index'
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              display: false
            }
          }],
          xAxes: [{
            ticks: {
              padding: -100,
              display: false
            },
            gridLines: {
              drawBorder: false,
              display: false
            }
          }]
        }
      }
    };
    const context = this.canvasEl.getContext('2d');
    this.chartInstance = new Chart_min(context, chartConfig);
    this.container.appendChild(this.wrapperEl);
    console.log(this.container);
  }

  getElement() {
    return this.wrapperEl;
  }

  getLabels(dataPoints) {
    return dataPoints.map((item, index) => {
      return index.toString();
    });
  }

  getDataPoints(dataSet) {
    return dataSet.map(measure => {
      return measure.bpm;
    });
  }

}
HeartChartView_HeartChartView.GRAPH_COLOR = 'rgba( 254, 202, 87, .47 )';
// CONCATENATED MODULE: ./src/Template/VitalsTemplate.ts
const VitalsTemplate = {
  name: 'VitalsTemplate',
  template: `
    <div class="vitals__graph-wrap">
        <div class="vitals__graph js-graph-container">
        </div>
    </div>
    <section class="vitals">
      <div class="vitals__content">
       <ul class="vitals__metrics js-vitals-container">
       </ul>
       <span class="vitals__text">
        <%= text %>
       </span>
      </div>
    </section>
    `
};
// EXTERNAL MODULE: ./node_modules/underscore/underscore.js
var underscore = __webpack_require__(3);

// CONCATENATED MODULE: ./src/Template/Template.ts


class Template_TemplateManager {
  constructor() {
    this.templateCache = {};
  }

  render(template, model) {
    if (!this.templateCache[template.name]) {
      this.templateCache[template.name] = underscore["template"](template.template);
    }

    return this.templateCache[template.name](model);
  }

}

const templateManager = new Template_TemplateManager();
// CONCATENATED MODULE: ./src/Template/VitalMetricTemplate.ts
;
const VitalMetricTemplate = {
  name: 'VitalMetricTemplate',
  template: `
        <li class="vitals__metric-container" >
            <div class="vital-metric">
                <div class="vital-metric__icon vital-metric__icon--<%= icon %>">
                </div>
                <div class="vital-metric__content">
                
                    <div class="vital-metric__main-value-container">
                        <div class="vital-metric__main-value">
                         <%= mainValue %>
                        </div>
                        <div class="vital-metric__unit">
                            <span class="vital-metric__unit-value">
                                <%= mainValueUnit %>
                            </span>
                            <span class="vital-metric__unit-description">
                                <%= mainValueDesription %>
                            </span>
                        </div>
                    </div>

                    <div class="vital-metric__secondary-value-container">
                        <span class="vital-metric__secondary-value">
                            <%= secondaryValue %>
                        </span>
                        <div class="vital-metric__secondary-unit">
                            <span class="vital-metric__secondary-unit-value">
                                <%= secondaryValueUnit %>
                            </span>
                            <span class="vital-metric__secondary-unit-value-description">
                                <%= secondaryValueDescription %>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `
};
// CONCATENATED MODULE: ./src/View/HealthViewController.ts




class HealthViewController_HealthViewController {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    const containerModel = {
      text: this.model.getModel().workoutString
    };
    this.renderContainer(containerModel, this.container);
    this.heartChartContainer = this.container.querySelector('.js-graph-container');
    this.vitalsContainer = this.container.querySelector('.js-vitals-container');
    this.heartChartView = new HeartChartView_HeartChartView(this.model.getModel().heartRate, this.heartChartContainer);
    this.renderVitals();
  }

  renderVitals() {
    const heart = this.getHeartrateModel(this.model);
    const steps = this.getStepsModel(this.model);
    const distance = this.getDistanceModel(this.model);
    const heartMarkup = this.renderVitalMetric(heart);
    const stepsMarkup = this.renderVitalMetric(steps);
    const distanceMarkup = this.renderVitalMetric(distance);
    this.vitalsContainer.innerHTML = `${heartMarkup} ${stepsMarkup} ${distanceMarkup}`;
  }

  renderContainer(model, container) {
    const markup = templateManager.render(VitalsTemplate, model);
    container.innerHTML = markup;
  }

  getHeartrateModel(model) {
    return {
      icon: 'heart',
      mainValue: model.getLatestHeartRate().bpm.toString(),
      mainValueUnit: 'bpm',
      mainValueDesription: 'latest',
      secondaryValue: model.getRestingHeartRate().toString(),
      secondaryValueUnit: 'bpm',
      secondaryValueDescription: 'resting'
    };
  }

  getStepsModel(model) {
    return {
      icon: 'steps',
      mainValue: model.getStepsToday(),
      mainValueUnit: 'steps',
      mainValueDesription: 'today',
      secondaryValue: model.getStepsAllTime(),
      secondaryValueUnit: 'steps',
      secondaryValueDescription: 'all time'
    };
  }

  getDistanceModel(model) {
    return {
      icon: 'distance',
      mainValue: model.getDistanceTodayKM(),
      mainValueUnit: 'Km',
      mainValueDesription: 'today',
      secondaryValue: model.getDistanceAllTimeKM(),
      secondaryValueUnit: 'Km',
      secondaryValueDescription: 'all time'
    };
  }

  renderVitalMetric(model) {
    return templateManager.render(VitalMetricTemplate, model);
  }

}
// CONCATENATED MODULE: ./src/Util/EventHelper.ts
const setMultipleListeners = function (events, target, callback) {
  events.forEach(eventName => {
    target.addEventListener(eventName, callback);
  });
};
// CONCATENATED MODULE: ./src/Util/Fetch.ts

const JSONFetch = function (config) {
  const request = new XMLHttpRequest();
  request.addEventListener('load', () => {
    const response = JSON.parse(request.responseText);
    config.callback(response, null);
  });
  setMultipleListeners(['error', 'abort'], request, () => {
    config.callback({}, {
      error: 'There was a problem fetching the data'
    });
  });
  request.open(config.method, config.url);
  request.send();
};
const JSONFetchPromise = function (config) {
  return new Promise((resolve, reject) => {
    JSONFetch(Object.assign({}, config, {
      callback: (data, error) => {
        if (error) {
          return reject(error);
        }

        resolve(data);
      }
    }));
  });
};
// CONCATENATED MODULE: ./src/Template/ErrorMessage.ts
;
const ErrorTemplate = {
  name: 'VitalMetricTemplate',
  template: `<span class="health-container__error"><%= message %></span>`
};
// EXTERNAL MODULE: ./src/Style/health-style.scss
var health_style = __webpack_require__(5);

// CONCATENATED MODULE: ./src/CreateWidget.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWidget", function() { return createWidget; });






const createWidget = element => {
  JSONFetchPromise({
    url: 'https://1xr1img432.execute-api.eu-west-2.amazonaws.com/prod',
    method: 'GET'
  }).then(data => {
    const model = new HealthModel_HealthModel(data);
    const view = new HealthViewController_HealthViewController(element, model);
  }).catch(() => {
    element.innerHTML = templateManager.render(ErrorTemplate, {
      message: 'Sorry! something went wrong when fetching vitals data.'
    });
  });
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=health-miner-widget.js.map