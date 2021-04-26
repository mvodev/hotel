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
/******/ 		"details": 0
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
/******/ 	deferredModules.push(["./components/website/details/details.js","vendors~UIKit~details~landing~main~registration~search~signin","vendors~UIKit~details~landing~registration~search~signin","vendors~UIKit~details~landing~registration","vendors~details","UIKit~details~landing~main~registration~search~signin","UIKit~details~landing~search"]);
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

/***/ "./components/ui-kit/modules/diagram/diagram-chart.js":
/*!************************************************************!*\
  !*** ./components/ui-kit/modules/diagram/diagram-chart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DiagramChart {
  constructor(rootElem, options) {
    this.rootElem = rootElem;
    this.options = this.getOptions(options);
    console.log('inside constructor DiagramChart '+this.options.segments.satisfactory);
    this.initCanvas();
  }
  initCanvas() {
    const canvas = document.createElement('canvas');
    this.rootElem.append(canvas);
    canvas.width = this.options.width;
    canvas.height = this.options.height;
    const ctx = canvas.getContext("2d");
    this.ctx = ctx;
  }
  drawArc(centerX, centerY, radius, startAngle, endAngle, color) {
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.lineWidth = this.options.lineWidth;
    this.ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
    this.ctx.stroke();
  }
  drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.strokeStyle = this.options.backgroundColor.background;
    ctx.lineWidth = this.options.lineWidth;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
  drawChart() {
    let centerX = this.options.width / 2;
    let centerY = this.options.width / 2;
    let radius = this.options.width / 2 - this.options.lineWidth;
    let perfectAngle = (this.options.segments.perfect / this.options.totalNumber) * 2 * Math.PI;
    let goodAngle = (this.options.segments.good / this.options.totalNumber) * 2 * Math.PI;
    let poorAngle = (this.options.segments.poor / this.options.totalNumber) * 2 * Math.PI;
    let satisfactoryAngle = (this.options.segments.satisfactory / this.options.totalNumber) * 2 * Math.PI;
    if (poorAngle != 0) {
      this.drawArc(centerX, centerY, radius, this.options.initialAngle + this.options.delimeterAngle, this.options.initialAngle + poorAngle, this.options.backgroundColor.poor);
    }
    if (satisfactoryAngle != 0) {
      this.drawArc(centerX, centerY, radius, this.options.initialAngle + this.options.delimeterAngle + poorAngle,
        this.options.initialAngle + poorAngle + satisfactoryAngle,
        this.options.backgroundColor.satisfactory);
    }
    if (goodAngle != 0) {
      this.drawArc(centerX, centerY, radius, this.options.initialAngle + poorAngle + satisfactoryAngle + this.options.delimeterAngle, this.options.initialAngle + poorAngle + satisfactoryAngle + goodAngle, this.options.backgroundColor.good);
    }
    if (perfectAngle != 0) {
      this.drawArc(centerX, centerY, radius, this.options.delimeterAngle + this.options.initialAngle + poorAngle + satisfactoryAngle + goodAngle, this.options.initialAngle + poorAngle + satisfactoryAngle + goodAngle + perfectAngle, this.options.backgroundColor.perfect);
    }
  }
  getOptions(options) {
    let width = options.width || 120;
    let height = options.height || 120;
    let totalNumber = options.number || 260;
    let label = options.label || "голосов";
    let defaultSegments = {
      perfect: 130, good: 65, satisfactory: 65, poor: 0,
    }
    let segments = options.segments || defaultSegments;
    let lineWidth = 4;
    let delimeterAngle = lineWidth / (width / 2);
    let initialAngle = -Math.PI / 2;
    let backgroundColor = {
      perfect: '#FFE39C',
      good: '#6FCF97',
      satisfactory: '#BC9CFF',
      poor: '#919191',
      background: '#FFFFFF',
    };
    return { width, height, totalNumber, label, segments, lineWidth, initialAngle, backgroundColor, delimeterAngle }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (DiagramChart);

/***/ }),

/***/ "./components/ui-kit/modules/diagram/diagram.js":
/*!******************************************************!*\
  !*** ./components/ui-kit/modules/diagram/diagram.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diagram_chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diagram-chart.js */ "./components/ui-kit/modules/diagram/diagram-chart.js");

const diagramChartRootElem = document.querySelector('.js-diagram-donut');
const diagramChart = new _diagram_chart_js__WEBPACK_IMPORTED_MODULE_0__["default"](diagramChartRootElem, { number: 260, label: 'голосов', segments: { perfect: 130, good: 65, satisfactory: 65, poor: 0, } });
diagramChart.drawChart();

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

/***/ "./components/website/details/details.js":
/*!***********************************************!*\
  !*** ./components/website/details/details.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _details_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.scss */ "./components/website/details/details.scss");
/* harmony import */ var _details_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_details_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");
/* harmony import */ var _ui_kit_modules_button_like_rating_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui-kit/modules/button/like-rating.js */ "./components/ui-kit/modules/button/like-rating.js");
/* harmony import */ var _ui_kit_modules_button_like_rating_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ui_kit_modules_button_like_rating_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_kit_modules_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui-kit/modules/dropdown/dropdown.js */ "./components/ui-kit/modules/dropdown/dropdown.js");
/* harmony import */ var _ui_kit_modules_list_expandable_cl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui-kit/modules/list/expandable-cl.js */ "./components/ui-kit/modules/list/expandable-cl.js");
/* harmony import */ var _ui_kit_modules_list_expandable_cl_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ui_kit_modules_list_expandable_cl_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_kit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui-kit/modules/burger/burger.js */ "./components/ui-kit/modules/burger/burger.js");
/* harmony import */ var _ui_kit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ui_kit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_chart_js_dist_chart_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/chart.js/dist/chart.min.js */ "../node_modules/chart.js/dist/chart.min.js");
/* harmony import */ var _node_modules_chart_js_dist_chart_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_chart_js_dist_chart_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ui_kit_modules_diagram_diagram_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui-kit/modules/diagram/diagram.js */ "./components/ui-kit/modules/diagram/diagram.js");














/***/ }),

/***/ "./components/website/details/details.scss":
/*!*************************************************!*\
  !*** ./components/website/details/details.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=details.6cdf5fe8b47dbbf5e035.js.map