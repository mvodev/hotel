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
/******/ 	deferredModules.push(["./components/website/details/details.js","vendors~UIKit~details~landing~main~registration~search~signin","vendors~UIKit~details~landing~search","vendors~UIKit~details~registration","UIKit~details~landing~main~registration~search~signin","UIKit~details~landing~search"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ui-kit/modules/button/like-rating-class.js":
/*!***************************************************************!*\
  !*** ./components/ui-kit/modules/button/like-rating-class.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class LikeRating {

  constructor(likeButton) {
    this.likeButton = likeButton;
    this._getElems();
    this._bindEvents();
  }
  _bindEvents() {
    this.likeButton.addEventListener('click', this._handlelikeButtonClick.bind(this));
  }
  _getElems() {
    this.heart = this.likeButton.querySelector('.js-button-like__heart');
    this.numberOfLikes = this.likeButton.querySelector('.js-button-like__number');
  }
  _handlelikeButtonClick(event) {
    if (event.target.parentElement.classList.contains('button-like_is-liked')
      || event.target.classList.contains('button-like_is-liked')) {
      this.numberOfLikes.innerText--;
      this.heart.innerText = 'favorite_border';
      this.likeButton.classList.remove('button-like_is-liked');
    }
    else {
      this.numberOfLikes.innerText++;
      this.likeButton.classList.add('button-like_is-liked');
      this.heart.innerText = 'favorite';
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (LikeRating);

/***/ }),

/***/ "./components/ui-kit/modules/button/like-rating.js":
/*!*********************************************************!*\
  !*** ./components/ui-kit/modules/button/like-rating.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _like_rating_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-rating-class.js */ "./components/ui-kit/modules/button/like-rating-class.js");

const likeButtons = document.querySelectorAll('.js-button-like');
likeButtons.forEach(elem => new _like_rating_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](elem));

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
    this.options = this._getOptions(options);
    this._initCanvas();
    this._drawChart();
  }
  _initCanvas() {
    const canvas = document.createElement('canvas');
    this.rootElem.append(canvas);
    canvas.width = this.options.width;
    canvas.height = this.options.height;
    const ctx = canvas.getContext("2d");
    this.ctx = ctx;
  }
  _drawArc(centerX, centerY, radius, startAngle, endAngle, color) {
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.lineWidth = this.options.lineWidth;
    this.ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
    this.ctx.stroke();
  }
  _drawText(ctx, text, position, style) {
    ctx.fillStyle = this.options.fontColor;
    ctx.font = this.options.fontWeight + ' ' + style.fontSize + ' ' + this.options.font;
    ctx.fillText(text, position.x, position.y);
  }
  _drawChart() {
    let centerX = this.options.width / 2;
    let centerY = this.options.width / 2;
    let radius = (this.options.width > this.options.height)
      ? (this.options.height / 2 - this.options.lineWidth)
      : (this.options.width / 2 - this.options.lineWidth);
    let perfectAngle = (this.options.segments.perfect / this.options.number) * 2 * Math.PI;
    let goodAngle = (this.options.segments.good / this.options.number) * 2 * Math.PI;
    let poorAngle = (this.options.segments.poor / this.options.number) * 2 * Math.PI;
    let satisfactoryAngle = (this.options.segments.satisfactory / this.options.number) * 2 * Math.PI;
    if (poorAngle != 0) {
      this._drawArc(
        centerX,
        centerY,
        radius,
        this.options.initialAngle + this.options.delimeterAngle,
        this.options.initialAngle + poorAngle,
        this.options.backgroundColor.poor);
    }
    if (satisfactoryAngle != 0) {
      this._drawArc(
        centerX,
        centerY,
        radius,
        this.options.initialAngle + this.options.delimeterAngle + poorAngle,
        this.options.initialAngle + poorAngle + satisfactoryAngle,
        this.options.backgroundColor.satisfactory);
    }
    if (goodAngle != 0) {
      this._drawArc(
        centerX,
        centerY,
        radius,
        this.options.initialAngle + poorAngle + satisfactoryAngle + this.options.delimeterAngle,
        this.options.initialAngle + poorAngle + satisfactoryAngle + goodAngle,
        this.options.backgroundColor.good);
    }
    if (perfectAngle != 0) {
      this._drawArc(
        centerX,
        centerY,
        radius,
        this.options.delimeterAngle + this.options.initialAngle + poorAngle + satisfactoryAngle + goodAngle,
        this.options.initialAngle + poorAngle + satisfactoryAngle + goodAngle + perfectAngle, this.options.backgroundColor.perfect);
    }
  }
  _getOptions(options) {
    let width = options.width || 120;
    let height = options.height || 120;
    let font = options.font || 'Montserrat,sans-serif';
    let number = options.number || 260;
    let label = options.label || "голосов";
    let defaultSegments = {
      perfect: 130, good: 65, satisfactory: 65, poor: 0,
    }
    let segments = options.segments || defaultSegments;
    let lineWidth = 4;
    let fontWeight = 'bold';
    let delimeterAngle = lineWidth / (width / 2);
    let initialAngle = -Math.PI / 2;
    let backgroundColor = {
      perfect: '#FFE39C',
      good: '#6FCF97',
      satisfactory: '#BC9CFF',
      poor: '#919191',
      background: '#FFFFFF',
    };
    let defaultFontColor = '#BC9CFF';
    let fontColor = options.fontColor || defaultFontColor;
    return { width, height, number, label, segments, lineWidth, initialAngle, backgroundColor, delimeterAngle, font, fontColor, fontWeight }
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
const diagramChart = new _diagram_chart_js__WEBPACK_IMPORTED_MODULE_0__["default"](diagramChartRootElem, 
                                     { number: 260,
                                      label: 'голосов', 
                                      segments: 
                                             { perfect: 130,
                                              good: 65, 
                                              satisfactory: 65, 
                                              poor: 0, 
                                             } 
                                      });

/***/ }),

/***/ "./components/ui-kit/modules/list/expandable-cl-class.js":
/*!***************************************************************!*\
  !*** ./components/ui-kit/modules/list/expandable-cl-class.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ExpandableCL {
  constructor(bulletList) {
    this.bulletList = bulletList;
    this._getElems();
    this._bindEvents();
  }
  _getElems() {
    this.bulletListExpandableArrow =
    this.bulletList.querySelector('.js-bullet-list-expandable__arrow');
    this.bulletListDropdown = this.bulletList.querySelector('.js-bullet-list-expandable__dropdown');
  }
  _bindEvents() {
    this.bulletListExpandableArrow.addEventListener('click', this._handleExpandableList.bind(this));
  }
  _handleExpandableList(event) {
    this.bulletListDropdown.classList.toggle('bullet-list_is-visible');
    this._toggleArrow();
  }
  _toggleArrow() {
    if (this.bulletListExpandableArrow.innerText === 'keyboard_arrow_down') {
    this.bulletListExpandableArrow.innerText = 'keyboard_arrow_up';
    }
    else if (this.bulletListExpandableArrow.innerText === 'keyboard_arrow_up') {
    this.bulletListExpandableArrow.innerText = 'keyboard_arrow_down';
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ExpandableCL);

/***/ }),

/***/ "./components/ui-kit/modules/list/expandable-cl.js":
/*!*********************************************************!*\
  !*** ./components/ui-kit/modules/list/expandable-cl.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expandable_cl_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandable-cl-class.js */ "./components/ui-kit/modules/list/expandable-cl-class.js");

const bulletListExpandable = document.querySelectorAll('.js-bullet-list-expandable');
bulletListExpandable.forEach(elem => new _expandable_cl_class_js__WEBPACK_IMPORTED_MODULE_0__["default"](elem));

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
/* harmony import */ var _ui_kit_modules_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui-kit/modules/dropdown/dropdown.js */ "./components/ui-kit/modules/dropdown/dropdown.js");
/* harmony import */ var _ui_kit_modules_list_expandable_cl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui-kit/modules/list/expandable-cl.js */ "./components/ui-kit/modules/list/expandable-cl.js");
/* harmony import */ var _ui_kit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui-kit/modules/burger/burger.js */ "./components/ui-kit/modules/burger/burger.js");
/* harmony import */ var _ui_kit_modules_diagram_diagram_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui-kit/modules/diagram/diagram.js */ "./components/ui-kit/modules/diagram/diagram.js");
/* harmony import */ var _ui_kit_modules_list_links_sublinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui-kit/modules/list-links/sublinks.js */ "./components/ui-kit/modules/list-links/sublinks.js");
















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
//# sourceMappingURL=details.6442aed69ab93a72ad05.js.map