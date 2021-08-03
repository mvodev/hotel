/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"registration": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./pages/registration/registration.js","vendors~UIKit~details~landing~main~registration~search~signin","vendors~UIKit~details~registration","UIKit~details~landing~main~registration~search~signin"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ui-kit/modules/burger/burger-class.js":
/*!**********************************************************!*\
  !*** ./components/ui-kit/modules/burger/burger-class.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Burger {
  constructor(burger) {
    this.burger = burger;
    this._getElems()
    this._bindEvents();
  }
  _getElems() {
    this.nav = this.burger.parentNode.querySelector('.js-header-nav');
  }
  _bindEvents() {
    this.burger.addEventListener('click', this._handleBurgerClick.bind(this));
  }
  _handleBurgerClick(e) {
    this.burger.classList.toggle('burger-active');
    this.nav.classList.toggle('burger-active');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./components/ui-kit/modules/burger/burger.js":
/*!****************************************************!*\
  !*** ./components/ui-kit/modules/burger/burger.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger-class.js */ "./components/ui-kit/modules/burger/burger-class.js");

document.querySelectorAll('.js-header-burger').forEach(elem => new _burger_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](elem));

/***/ }),

/***/ "./components/ui-kit/modules/list-links/sublinks-class.js":
/*!****************************************************************!*\
  !*** ./components/ui-kit/modules/list-links/sublinks-class.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class SubLinks {
  constructor(arrow) {
    this.subMenuArrow = arrow;
    this._bindEvents();
  }
  _bindEvents() {
    this.subMenuArrow.addEventListener('click', this._handleMenuArrow.bind(this));
    document.addEventListener('click', this._handleClickOutsideSublinks.bind(this));
  }
  _handleMenuArrow(e) {
    this.subMenuArrow.nextElementSibling.classList.toggle('list-links__sub-links_is-visible');
    this._toggleArrow();
  }
  _toggleArrow() {
    if (this.subMenuArrow.innerText === 'keyboard_arrow_down') {
      this.subMenuArrow.innerText = 'keyboard_arrow_up';
    }
    else if (this.subMenuArrow.innerText === 'keyboard_arrow_up') {
      this.subMenuArrow.innerText = 'keyboard_arrow_down';
    }
  }
  _handleClickOutsideSublinks(e) {
    const target = e.target;
    const itIsSublinks = target === this.subMenuArrow 
    || this.subMenuArrow.nextElementSibling.contains(target);
    if (!itIsSublinks) {
      this._hideSubLinks();
    }
  }
  _hideSubLinks() {
    this.subMenuArrow.nextElementSibling.classList.remove('list-links__sub-links_is-visible');
    this.subMenuArrow.innerText = 'keyboard_arrow_down';
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SubLinks);






/***/ }),

/***/ "./components/ui-kit/modules/list-links/sublinks.js":
/*!**********************************************************!*\
  !*** ./components/ui-kit/modules/list-links/sublinks.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sublinks_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sublinks-class.js */ "./components/ui-kit/modules/list-links/sublinks-class.js");

document.querySelectorAll('.js-list-links__arrow').forEach(elem=>new _sublinks_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](elem));

/***/ }),

/***/ "./components/ui-kit/modules/text-field/text-field-class.js":
/*!******************************************************************!*\
  !*** ./components/ui-kit/modules/text-field/text-field-class.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");

class TextField {
  constructor(textFieldInput) {
    this.textFieldInput = textFieldInput;
    this._init();
  }
  _init() {
    new Cleave(this.textFieldInput, {
      date: true,
      delimiter: '.',
      datePattern: ['d', 'm', 'Y']
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (TextField);

/***/ }),

/***/ "./components/ui-kit/modules/text-field/text-field.js":
/*!************************************************************!*\
  !*** ./components/ui-kit/modules/text-field/text-field.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_field_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-field-class.js */ "./components/ui-kit/modules/text-field/text-field-class.js");

document.querySelectorAll('.js-text-field__input-date').forEach(elem=>new _text_field_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](elem));

/***/ }),

/***/ "./pages/registration/registration.js":
/*!********************************************!*\
  !*** ./pages/registration/registration.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registration_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.scss */ "./pages/registration/registration.scss");
/* harmony import */ var _registration_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_registration_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");
/* harmony import */ var _components_ui_kit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui-kit/modules/burger/burger.js */ "./components/ui-kit/modules/burger/burger.js");
/* harmony import */ var _components_ui_kit_modules_text_field_text_field_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui-kit/modules/text-field/text-field.js */ "./components/ui-kit/modules/text-field/text-field.js");
/* harmony import */ var _components_ui_kit_modules_list_links_sublinks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui-kit/modules/list-links/sublinks.js */ "./components/ui-kit/modules/list-links/sublinks.js");










/***/ }),

/***/ "./pages/registration/registration.scss":
/*!**********************************************!*\
  !*** ./pages/registration/registration.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=registration.39cc18c11d9f75f085e0.js.map