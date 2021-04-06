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
/******/ 		"UIKit": 0
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
/******/ 	deferredModules.push(["./ui-kit.js","vendors~UIKit~details~landing~registration~search~signin","vendors~UIKit~details~landing~registration~search","vendors~UIKit~details~search","vendors~UIKit~search","UIKit~details~landing~registration~search","UIKit~details~landing~search"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ui-kit/modules/button/like-rating.js":
/*!*********************************************************!*\
  !*** ./components/ui-kit/modules/button/like-rating.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const likeButtons = document.querySelectorAll('.js-button-like');
likeButtons.forEach(elem => elem.addEventListener('click', likeClickListener));
function likeClickListener(event) {
 if (event.target.className == 'button-like__heart') {
  if (event.target.parentElement.classList.contains('button-like_is-liked')) {
   event.target.parentElement.childNodes[1].innerText--;
   event.target.parentElement.childNodes[0].innerText = 'favorite_border';
   event.target.parentElement.classList.remove('button-like_is-liked');
  }
  else {
   event.target.parentElement.childNodes[1].innerText++;
   event.target.parentElement.classList.add('button-like_is-liked');
   event.target.parentElement.childNodes[0].innerText = 'favorite';
  }
 }
}

/***/ }),

/***/ "./components/ui-kit/modules/button/radio-buttons-sex.js":
/*!***************************************************************!*\
  !*** ./components/ui-kit/modules/button/radio-buttons-sex.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const radioButtons = document.querySelectorAll('.js-button-radio__checkbox-input');
radioButtons.forEach(function (elem) {
  elem.addEventListener('click', radioButtonsHandler);
});
function radioButtonsHandler(event) {
  if (event.target.checked) {
    if (event.srcElement.parentElement.innerText === "Женщина") {
      if (event.srcElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.checked) {
        event.srcElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.checked = false;
      }
    }
    else {
      if (event.srcElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.checked) {
        event.srcElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.checked = false;
      }
    }
  }
  else {
    if (event.srcElement.parentElement.innerText === "Женщина") {
      event.srcElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.checked = true;
    }
    else {
      event.srcElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.checked = true;
    }
  }
}

/***/ }),

/***/ "./components/ui-kit/modules/button/star-rating.js":
/*!*********************************************************!*\
  !*** ./components/ui-kit/modules/button/star-rating.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const rateButtons = document.querySelectorAll('.js-button-rate label');
rateButtons.forEach(elem => elem.addEventListener('click', rateClickListener)
);
function rateClickListener(event) {
 let rateNumber = event.target.title.charAt(0);
 let stars = event.target.parentNode.childNodes;
 for (let i = 0; i < rateNumber; i++) {
  stars[i * 2 + 1].innerHTML = 'star';
 }
 for (let i = rateNumber; i < 5; i++) {
  stars[i * 2 + 1].innerHTML = 'star_border';
 }
}

/***/ }),

/***/ "./components/ui-kit/modules/list/expandable-cl.js":
/*!*********************************************************!*\
  !*** ./components/ui-kit/modules/list/expandable-cl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const bulletListExpandableArrow = document.querySelectorAll('.js-bullet-list-expandable span');
bulletListExpandableArrow.forEach(elem => elem.addEventListener('click', expandableListHandler));
function expandableListHandler(event) {
 event.target.parentNode.parentNode.childNodes[1].classList.toggle('bullet-list_is-visible');
 if (event.target.innerText === 'keyboard_arrow_down') {
  event.target.innerText = 'keyboard_arrow_up';
 }
 else if (event.target.innerText === 'keyboard_arrow_up') {
  event.target.innerText = 'keyboard_arrow_down';
 }
}

/***/ }),

/***/ "./components/ui-kit/modules/text-field/text-field.js":
/*!************************************************************!*\
  !*** ./components/ui-kit/modules/text-field/text-field.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");

document.querySelectorAll('.js-text-field__input-date').forEach(function (elem) {
 new Cleave(elem, {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
 });
});

/***/ }),

/***/ "./styles/ui-kit-styles.scss":
/*!***********************************!*\
  !*** ./styles/ui-kit-styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./ui-kit.js":
/*!*******************!*\
  !*** ./ui-kit.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _styles_ui_kit_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/ui-kit-styles.scss */ "./styles/ui-kit-styles.scss");
/* harmony import */ var _styles_ui_kit_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_ui_kit_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ion-rangeslider */ "../node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_kit_modules_dropdown_fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ui-kit/modules/dropdown/fsd-datepicker.js */ "./components/ui-kit/modules/dropdown/fsd-datepicker.js");
/* harmony import */ var _components_ui_kit_modules_dropdown_fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ui_kit_modules_dropdown_fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_kit_modules_text_field_text_field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ui-kit/modules/text-field/text-field.js */ "./components/ui-kit/modules/text-field/text-field.js");
/* harmony import */ var _components_ui_kit_modules_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ui-kit/modules/dropdown/dropdown.js */ "./components/ui-kit/modules/dropdown/dropdown.js");
/* harmony import */ var _components_ui_kit_modules_button_star_rating_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ui-kit/modules/button/star-rating.js */ "./components/ui-kit/modules/button/star-rating.js");
/* harmony import */ var _components_ui_kit_modules_button_star_rating_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_ui_kit_modules_button_star_rating_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_kit_modules_button_like_rating_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ui-kit/modules/button/like-rating.js */ "./components/ui-kit/modules/button/like-rating.js");
/* harmony import */ var _components_ui_kit_modules_button_like_rating_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_ui_kit_modules_button_like_rating_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_kit_modules_list_expandable_cl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ui-kit/modules/list/expandable-cl.js */ "./components/ui-kit/modules/list/expandable-cl.js");
/* harmony import */ var _components_ui_kit_modules_list_expandable_cl_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_ui_kit_modules_list_expandable_cl_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_kit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ui-kit/modules/burger/burger.js */ "./components/ui-kit/modules/burger/burger.js");
/* harmony import */ var _components_ui_kit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_ui_kit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ui_kit_modules_button_radio_buttons_sex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ui-kit/modules/button/radio-buttons-sex.js */ "./components/ui-kit/modules/button/radio-buttons-sex.js");
/* harmony import */ var _components_ui_kit_modules_button_radio_buttons_sex_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_ui_kit_modules_button_radio_buttons_sex_js__WEBPACK_IMPORTED_MODULE_9__);










$('.js-cards__right-column-datepicker').fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
$('.js-range-slider__input').ionRangeSlider({
  type: "double",
  min: 0,
  max: 20000,
  from: 5000,
  to: 10000,
  step: 1000,
  onChange: function (data) {
    let minValue = ''
    let maxValue = ''
    if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
    else minValue = data.from;
    if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
    else maxValue = data.to;
    $('.js-range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  },
  onStart: function (data) {
    let minValue = ''
    let maxValue = ''
    if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
    else minValue = data.from;
    if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
    else maxValue = data.to;
    $('.js-range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  }
});
// dropdown additional options for range dropdown:
// range: true, dateFormat: 'dd M',inline: true
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=UIKit.8932c5d56e27fb09b860.js.map