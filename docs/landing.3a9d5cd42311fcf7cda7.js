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
/******/ 		"landing": 0
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
/******/ 	deferredModules.push(["./landing.js","vendors~UIKit~details~landing~registration~search~signin","vendors~UIKit~details~landing~registration~search","UIKit~details~landing~registration~search"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UIKit/modules/dropdown/dropdown-counter/dropdownCounter.js":
/*!*******************************************************************************!*\
  !*** ./components/UIKit/modules/dropdown/dropdown-counter/dropdownCounter.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DropdownCounter {

 constructor(container) {
  this.container = container;
  this.getElements();
  this.bindEvents();
 }
 getElements() {
  this.minus = this.container.querySelector('.js-container-dropdown__decrease');
  this.plus = this.container.querySelector('.js-container-dropdown__increase');
  this.value = this.container.querySelector('.js-container-dropdown__value');
  this.valueNumber = parseInt(this.value.textContent, 10);
 }
 bindEvents() {
  this.minus.addEventListener('click', this.handleMinus.bind(this));
  this.plus.addEventListener('click', this.handlePlus.bind(this));
 }
 handleMinus() {
  if (this.valueNumber > 0) {
   this.valueNumber--;
   this.value.innerHTML = this.valueNumber;
  }
  if (this.valueNumber === 0) {
   this.minus.classList.remove('container-dropdown__decrease_dark');
  }
  this.container.dispatchEvent(new CustomEvent("counterChanged", { bubbles: true }));
 }
 handlePlus() {
  this.valueNumber++;
  this.value.innerHTML = this.valueNumber;
  this.minus.classList.add('container-dropdown__decrease_dark');
  this.container.dispatchEvent(new CustomEvent("counterChanged",{bubbles:true}));
 }
 getData() {
  return this.valueNumber;
 }
 resetData() {
  this.value.innerHTML = '0';
  this.valueNumber = 0;
  this.minus.classList.remove('container-dropdown__decrease_dark');
 }
}

/* harmony default export */ __webpack_exports__["default"] = (DropdownCounter);

/***/ }),

/***/ "./components/UIKit/modules/dropdown/dropdown.js":
/*!*******************************************************!*\
  !*** ./components/UIKit/modules/dropdown/dropdown.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdownMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdownMain.js */ "./components/UIKit/modules/dropdown/dropdownMain.js");

const dropdown = new _dropdownMain_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelectorAll('.js-dropdown'));


/***/ }),

/***/ "./components/UIKit/modules/dropdown/dropdownCount.js":
/*!************************************************************!*\
  !*** ./components/UIKit/modules/dropdown/dropdownCount.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_counter_dropdownCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-counter/dropdownCounter */ "./components/UIKit/modules/dropdown/dropdown-counter/dropdownCounter.js");


class DropdownCount {
 constructor(rootElem) {
  this.data = 0;
  this.dropdownType = '';
  this.spellCases = {
   guests: ["гость", "гостя", "гостей"],
   infants: ['младенец', 'младенца', 'младенцев'],
   bedrooms: ['спальня', 'спальни', 'спален'],
   beds: ['кровать', 'кровати ', 'кроватей '],
   baths: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
  };
  this.dropdownCounters = [];
  this.rootElem = rootElem;
  this.getElem();
  this.bindEvents();
 }
 getElem() {
  this.arrow = this.rootElem.querySelector(".dropdown__arrow");
  this.input = this.rootElem.querySelector(".dropdown__input");
  this.body = this.rootElem.querySelector(".dropdown__body");
  this.counters = this.rootElem.querySelectorAll(".dropdown-counter");
  if (this.rootElem.classList.contains("dropdown__room")) {
   this.dropdownType = 'room';
  } else if (this.rootElem.classList.contains("dropdown__guests")) {
   this.dropdownType = 'guests';
   this.applyButton = this.rootElem.querySelector(".buttons-dropdown__apply");
   this.clearButton = this.rootElem.querySelector(".buttons-dropdown__clear");
  }

  this.counters.forEach(elem => {
   this.dropdownCounters.push(new _dropdown_counter_dropdownCounter__WEBPACK_IMPORTED_MODULE_0__["default"](elem));
  });
 }
 showDropdown() {
  this.rootElem.classList.add("dropdown_active");
  this.body.classList.add("dropdown_active");
 }
 hideDropdown() {
  this.rootElem.classList.remove("dropdown_active");
  this.body.classList.remove("dropdown_active");
 }
 bindEvents() {
  this.arrow.addEventListener('click', this.handleDropdown.bind(this));
  if (this.dropdownType === 'guests') {
   this.clearButton.addEventListener('click', this.handleClearButton.bind(this));
   this.applyButton.addEventListener('click', this.handleApplyButton.bind(this));
  }
  this.rootElem.addEventListener('counterChanged',this.handleCounter.bind(this));
 }
 handleCounter(){
  this.setData(this.collectData());
  if(this.dropdownType==='guests'){
   this.showClearButton();
  }
 }
 handleDropdown() {
  if (this.rootElem.classList.contains("dropdown_active")) {
   this.hideDropdown();
  } else this.showDropdown();
 }
 handleApplyButton() {
  this.hideDropdown();
  this.showClearButton();
 }
 handleClearButton() {
  this.clearData();
  this.hideClearButton();
 }
 collectData() {
  if(this.dropdownType==='guests'){
   let temp = 0;
   for (let i = 0; i < this.dropdownCounters.length; i++) {
    temp += this.dropdownCounters[i].getData();
   }
   return temp;
  }
  else {
   let room = {};
   room.bedrooms = this.dropdownCounters[0].getData();
   room.beds = this.dropdownCounters[1].getData();
   room.baths = this.dropdownCounters[2].getData();
   return room;
  }
 }
 getPosInSpellCasesArray(result) {
  if (result === 1) {
   return 0;
  }
  else if (result >= 5 && result < 21) {
   return 2;
  }
  else if
   (Number(this.getLastNumber(result)) >= 2 && Number(this.getLastNumber(result)) <= 4) {
   return 1;
  }
  else {
   return 2;
  }
 }
 setData() {
  let result = this.collectData();
  if (this.dropdownType === 'guests') {
   let lastNumber = this.getLastNumber(result);
   this.input.value = result + " " + this.spellCases.guests[this.getPosInSpellCasesArray(result)];
  }
  else {
   let temp = '';
   if(result.bedrooms>0){
    temp+= result.bedrooms + " " + this.spellCases.bedrooms[this.getPosInSpellCasesArray(result.bedrooms)];
   }
   if(result.beds>0){
    if(temp.length>0){
     temp += "," + result.beds + this.spellCases.beds[this.getPosInSpellCasesArray(result.beds)];
    }
    else temp += result.beds + this.spellCases.beds[this.getPosInSpellCasesArray(result.beds)];
   }
   if (result.baths>0){
    if(temp.length>0){
     temp += "," + result.baths + this.spellCases.baths[this.getPosInSpellCasesArray(result.baths)];
    }
    else temp +=result.baths + this.spellCases.baths[this.getPosInSpellCasesArray(result.baths)];
   }
   temp+='...'
   this.input.value =temp;
  }
 }
 getLastNumber(value) {
  return value.toString().split("").pop();
 }
 clearData() {
  this.input.value = "";
  this.dropdownCounters.forEach(elem => {
   elem.resetData();
  });
 }
 showClearButton() {
  this.clearButton.classList.remove('hidden');
 }
 hideClearButton() {
  this.clearButton.classList.add('hidden');
 }
}
/* harmony default export */ __webpack_exports__["default"] = (DropdownCount);

/***/ }),

/***/ "./components/UIKit/modules/dropdown/dropdownDate.js":
/*!***********************************************************!*\
  !*** ./components/UIKit/modules/dropdown/dropdownDate.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _dropdown_fsdDatepicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dropdown/fsdDatepicker.js */ "./components/UIKit/modules/dropdown/fsdDatepicker.js");
/* harmony import */ var _dropdown_fsdDatepicker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dropdown_fsdDatepicker_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");


class DropdownDate {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this.getElem();
  this.init();
 }
 getElem() {
  this.input = this.rootElem.querySelector(".dropdown__input");
 }
 init() {
  if (this.rootElem.classList.contains("dropdown__date")) {
   $('.dropdown__date input').fsdDatepicker({ todayButton: true, clearButton: true });
   new Cleave(this.input, {
    date: true,
    delimiter: '.',
    datePattern: ['d', 'm', 'Y']
   });
  }
  else if (this.rootElem.classList.contains("dropdown__filter")) {
   $('.dropdown__filter input').fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
  }
 }
}
/* harmony default export */ __webpack_exports__["default"] = (DropdownDate);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/UIKit/modules/dropdown/dropdownMain.js":
/*!***********************************************************!*\
  !*** ./components/UIKit/modules/dropdown/dropdownMain.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_dropdownDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dropdown/dropdownDate */ "./components/UIKit/modules/dropdown/dropdownDate.js");
/* harmony import */ var _dropdown_dropdownCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown/dropdownCount */ "./components/UIKit/modules/dropdown/dropdownCount.js");



class DropdownMain {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this.initDropdowns();
 }
 initDropdowns() {
  this.rootElem.forEach(elem => {
   if (elem.classList.contains("dropdown__date") || elem.classList.contains("dropdown__filter")) {
    new _dropdown_dropdownDate__WEBPACK_IMPORTED_MODULE_0__["default"](elem);
   }
   else {
    new _dropdown_dropdownCount__WEBPACK_IMPORTED_MODULE_1__["default"](elem)
   };
  });
 }
}
/* harmony default export */ __webpack_exports__["default"] = (DropdownMain);

/***/ }),

/***/ "./landing.js":
/*!********************!*\
  !*** ./landing.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_landing_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/landing.scss */ "./styles/landing.scss");
/* harmony import */ var _styles_landing_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_landing_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UIKit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UIKit/modules/burger/burger.js */ "./components/UIKit/modules/burger/burger.js");
/* harmony import */ var _components_UIKit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_UIKit_modules_burger_burger_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");
/* harmony import */ var _components_UIKit_modules_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UIKit/modules/dropdown/dropdown.js */ "./components/UIKit/modules/dropdown/dropdown.js");





/***/ }),

/***/ "./styles/landing.scss":
/*!*****************************!*\
  !*** ./styles/landing.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=landing.3a9d5cd42311fcf7cda7.js.map