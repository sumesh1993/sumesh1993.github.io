/*! For license information please see redirect.js.LICENSE.txt */
(()=>{var __webpack_modules__={277:(e,t,r)=>{"use strict";r.d(t,{L:()=>v});var n=r(661),o=r(379),a=r.n(o),_=r(795),i=r.n(_),c=r(569),s=r.n(c),l=r(565),u=r.n(l),p=r(216),d=r.n(p),f=r(589),m=r.n(f),h=r(591),b={};b.styleTagTransform=m(),b.setAttributes=u(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d(),a()(h.Z,b);const y=h.Z&&h.Z.locals?h.Z.locals:void 0,v=function(e){var t=e.backgroundColor,r=e.icon,o=e.onClick;return n.default.createElement("button",{className:y.container,style:{backgroundColor:t},onClick:o},r)}},257:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(379),o=r.n(n),a=r(795),_=r.n(a),i=r(569),c=r.n(i),s=r(565),l=r.n(s),u=r(216),p=r.n(u),d=r(589),f=r.n(d),m=r(854),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=_(),h.insertStyleElement=p(),o()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const b=function(e){var t=document.createElement("div");t.id=e,document.body.appendChild(t)}},663:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(661),components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(277),react_modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(253),react_modal__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__),_style_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39),preact_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(396),utilities_script__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(257);function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,_,i=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(_=r.return(),Object(_)!==_))return}finally{if(s)throw o}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}(0,utilities_script__WEBPACK_IMPORTED_MODULE_5__.Z)("redirect");var RedirectWidget=function RedirectWidget(){var _useState=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.eJ)(!1),_useState2=_slicedToArray(_useState,2),showModal=_useState2[0],setShowModal=_useState2[1],handleCloseModal=function(){return setShowModal(!1)},config={};return config="{{config}}",config=eval(config),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(react__WEBPACK_IMPORTED_MODULE_0__.default.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(components__WEBPACK_IMPORTED_MODULE_1__.L,{backgroundColor:config.backgroundColor,onClick:function(){return setShowModal(!showModal)}}),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default(),{isOpen:showModal,ariaHideApp:!1,shouldCloseOnOverlayClick:!0,onRequestClose:handleCloseModal,overlayClassName:_style_module_css__WEBPACK_IMPORTED_MODULE_3__.Z.overlay,className:_style_module_css__WEBPACK_IMPORTED_MODULE_3__.Z.content},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("h3",null,"Merry Christmas")))},__WEBPACK_DEFAULT_EXPORT__=RedirectWidget,redirect=document.getElementById("redirect");react__WEBPACK_IMPORTED_MODULE_0__.default.render(react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(RedirectWidget,null),redirect)},591:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),_=r.n(a)()(o());_.push([e.id,".XVk4P4haZrSPM6VwCTcI {\n  background-color: grey;\n  width: 70px;\n  height: 70px;\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n  border-radius: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 28px,\n    rgba(0, 0, 0, 0.15) 0px 10px 10px;\n}\n",""]),_.locals={container:"XVk4P4haZrSPM6VwCTcI"};const i=_},854:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),_=r.n(a)()(o());_.push([e.id,"button {\n  cursor: pointer;\n  border: none;\n}\n",""]),_.locals={};const i=_},936:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),_=r.n(a)()(o());_.push([e.id,".uALkD1DNwOHbE5umaE8B {\n  background-color: palevioletred;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  border-radius: 50px;\n}\n\n.o9Gkj52BL1qYycbrORp1 {\n  background-color: white;\n  width: 300px;\n  height: 400px;\n  border-radius: 5px;\n  padding: 20px;\n}\n\n.go_6Ja12zB215ype452A {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n",""]),_.locals={container:"uALkD1DNwOHbE5umaE8B",content:"o9Gkj52BL1qYycbrORp1",overlay:"go_6Ja12zB215ype452A"};const i=_},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var _={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(_[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&_[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},875:(e,t,r)=>{var n;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n)}()},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,_){if(_!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},871:(e,t,r)=>{"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var r=this.constructor.getDerivedStateFromProps(e,t);return null!=r?r:null}.bind(this))}function a(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}function _(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var r=null,_=null,i=null;if("function"==typeof t.componentWillMount?r="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?_="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(_="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==r||null!==_||null!==i){var c=e.displayName||e.name,s="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==r?"\n  "+r:"")+(null!==_?"\n  "+_:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,r){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:r;l.call(this,e,t,n)}}return e}r.r(t),r.d(t,{polyfill:()=>_}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},39:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(379),o=r.n(n),a=r(795),_=r.n(a),i=r(569),c=r.n(i),s=r(565),l=r.n(s),u=r(216),p=r.n(u),d=r(589),f=r.n(d),m=r(936),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=_(),h.insertStyleElement=p(),o()(m.Z,h);const b=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},_=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=r(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var f=o(d,n);n.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}_.push(u)}return _}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var _=0;_<a.length;_++){var i=r(a[_]);t[i].references--}for(var c=n(e,o),s=0;s<a.length;s++){var l=r(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},473:e=>{"use strict";e.exports=function(){}}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,t,r,n)=>{if(!t){var o=1/0;for(c=0;c<deferred.length;c++){for(var[t,r,n]=deferred[c],a=!0,_=0;_<t.length;_++)(!1&n||o>=n)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[_])))?t.splice(_--,1):(a=!1,n<o&&(o=n));if(a){deferred.splice(c--,1);var i=r();void 0!==i&&(e=i)}}return e}n=n||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>n;c--)deferred[c]=deferred[c-1];deferred[c]=[t,r,n]},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={626:0};__webpack_require__.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,_,i]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in _)__webpack_require__.o(_,n)&&(__webpack_require__.m[n]=_[n]);if(i)var s=i(__webpack_require__)}for(t&&t(r);c<a.length;c++)o=a[c],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return __webpack_require__.O(s)},r=self.webpackChunkpreact_webpack=self.webpackChunkpreact_webpack||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(663)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
