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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css */ "../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css");
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/air-datepicker/dist/css/datepicker.min.css */ "../node_modules/air-datepicker/dist/css/datepicker.min.css");
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/air-datepicker/dist/js/datepicker.min.js */ "../node_modules/air-datepicker/dist/js/datepicker.min.js");
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_air_datepicker_dist_js_datepicker_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_scripts_dropDownGuests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/scripts/dropDownGuests */ "./scripts/dropDownGuests.js");
/* harmony import */ var _src_scripts_dropDownGuests__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_dropDownGuests__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_scripts_dropDownRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/scripts/dropDownRoom */ "./scripts/dropDownRoom.js");
/* harmony import */ var _src_scripts_dropDownRoom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_dropDownRoom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion-rangeslider */ "../node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_7__);
//import Post from './Post'
//import './styles/style.css'
//import './styles/extra.scss'
//import WebpackLogo from './assets/webpack-logo.png'
//const post = new Post('webpack jquery title');
//import './pug/UIKit/test.pug'








//import 'air-datepicker'
$('.datepicker-here').datepicker({ todayButton: true, clearButton: true });
var cleave = new Cleave('.txtField-input-date', {
 date: true,
 delimiter: '.',
 datePattern: ['d', 'm', 'Y']
});
$("#example_id").ionRangeSlider({
 type: "double",
 min: 5000,
 max: 10000,
 from: 5000,
 to: 10000,
 onStart: function (data) {
  // Called right after range slider instance initialised

  console.log(data.input);        // jQuery-link to input
  console.log(data.slider);       // jQuery-link to range sliders container
  console.log(data.min);          // MIN value
  console.log(data.max);          // MAX values
  console.log(data.from);         // FROM value
  console.log(data.from_percent); // FROM value in percent
  console.log(data.from_value);   // FROM index in values array (if used)
  console.log(data.to);           // TO value
  console.log(data.to_percent);   // TO value in percent
  console.log(data.to_value);     // TO index in values array (if used)
  console.log(data.min_pretty);   // MIN prettified (if used)
  console.log(data.max_pretty);   // MAX prettified (if used)
  console.log(data.from_pretty);  // FROM prettified (if used)
  console.log(data.to_pretty);    // TO prettified (if used)
 },

 onChange: function (data) {
  // Called every time handle position is changed

  console.log(data.from);
 }
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./scripts/dropDownGuests.js":
/*!***********************************!*\
  !*** ./scripts/dropDownGuests.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

///////////////////////Constants////////////////////////////////////////////
let counterAdult = (counterChild = counterInfant = 0);
const dropDownInputGuests = document.querySelector(".dropdown-input__guests");
const dropDownInputFieldGuests = document.querySelector(
  ".dropdown-input__guests input"
);
const counterAdultValueTag = document.querySelector(
  ".dropdown-guests__adult div:nth-child(3)"
);
const counterAdultValueDecrease = document.querySelector(
  ".dropdown-guests__adult div:nth-child(2)"
);
const counterAdultValueIncrease = document.querySelector(
  ".dropdown-guests__adult div:nth-child(4)"
);
const counterChildValueTag = document.querySelector(
  ".dropdown-guests__child div:nth-child(3)"
);
const counterChildValueDecreaseTag = document.querySelector(
  ".dropdown-guests__child div:nth-child(2)"
);
const counterChildValueIncreaseTag = document.querySelector(
  ".dropdown-guests__child div:nth-child(4)"
);
const counterInfantValueTag = document.querySelector(
  ".dropdown-guests__infant div:nth-child(3)"
);
const counterInfantValueDecrease = document.querySelector(
  ".dropdown-guests__infant div:nth-child(2)"
);
const counterInfantValueIncrease = document.querySelector(
  ".dropdown-guests__infant div:nth-child(4)"
);
const eraseButton = document.querySelector(
  ".dropdown-guests__apply-button div:nth-child(1)"
);
const applyButton = document.querySelector(
  ".dropdown-guests__apply-button div:nth-child(2)"
);

/////////////////////////Listeners//////////////////////////////////////////////
dropDownInputGuests.addEventListener("click", handler);
counterAdultValueDecrease.addEventListener("click", () =>
  changeCounterGuests("decrease", "adult")
);
counterAdultValueIncrease.addEventListener("click", () =>
  changeCounterGuests("increase", "adult")
);
counterChildValueDecreaseTag.addEventListener("click", () =>
  changeCounterGuests("decrease", "child")
);
counterChildValueIncreaseTag.addEventListener("click", () =>
  changeCounterGuests("increase", "child")
);
counterInfantValueDecrease.addEventListener("click", () =>
  changeCounterGuests("decrease", "infant")
);
counterInfantValueIncrease.addEventListener("click", () =>
  changeCounterGuests("increase", "infant")
);
applyButton.addEventListener("click", () =>
  showResultInDropDownGuests("apply")
);
eraseButton.addEventListener("click", () =>
  showResultInDropDownGuests("erase")
);
//////////////////////Handlers//////////////////////////////////////////
function handler(event) {
  document
    .getElementsByClassName("dropdown-guests")[0]
    .classList.toggle("show");
}
function changeCounterGuests(howChange, changeTarget) {
  console.log("inside change counter guests");
  if (changeTarget === "adult") {
    if (howChange === "increase") {
      counterAdultValueTag.innerText++;
      counterAdult++;
    } else {
      if (counterAdultValueTag.innerText > 0) {
        counterAdultValueTag.innerText--;
        counterAdult--;
      }
    }
  } else if (changeTarget === "child") {
    if (howChange === "increase") {
      counterChildValueTag.innerText++;
      counterChild++;
    } else {
      if (counterChildValueTag.innerText > 0) {
        counterChildValueTag.innerText--;
        counterChild--;
      }
    }
  } else {
    if (howChange === "increase") {
      counterInfantValueTag.innerText++;
      counterInfant++;
    } else {
      if (counterInfantValueTag.innerText > 0) {
        counterInfantValueTag.innerText--;
        counterInfant--;
      }
    }
  }
}
function showResultInDropDownGuests(action) {
  if (action === "apply") {
    let result = "";
    let counterGuests = counterInfant + counterChild + counterAdult;
    if (
      counterGuests === 1 ||
      (counterGuests > 20 && (counterGuests - 1) % 10 === 0)
    ) {
      result += counterGuests + " гость";
    } else if (counterGuests > 1 && counterGuests < 5) {
      result += counterGuests + " гостя";
    } else if (counterGuests >= 5) {
      result += counterGuests + " гостей";
    }
    dropDownInputFieldGuests.value = result;
    dropDownResult = result;
    if (result != "") eraseButton.classList.remove("hidden");
    result = "";
  } else if (action === "erase") {
    dropDownResult = "";
    counterAdult = counterChild = counterInfant = 0;
    dropDownInputFieldGuests.value = dropDownResult;
    counterAdultValueTag.innerText = 0;
    counterChildValueTag.innerText = 0;
    counterInfantValueTag.innerText = 0;
    eraseButton.classList.add("hidden");
  }
}


/***/ }),

/***/ "./scripts/dropDownRoom.js":
/*!*********************************!*\
  !*** ./scripts/dropDownRoom.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

///////////////////////Constants////////////////////////////////////////////
let counterBedRoom = (counterBed = 2);
let counterBath = 0;
const dropDownInputRoom = document.querySelector(".dropdown-input__room");
const dropDownInputFieldRoom = document.querySelector(
  ".dropdown-input__room input"
);
const counterBadRoomValueTag = document.querySelector(
  ".dropdown-room__bedroom div:nth-child(3)"
);
const counterBadRoomValueDecrease = document.querySelector(
  ".dropdown-room__bedroom div:nth-child(2)"
);
const counterBadRoomValueIncrease = document.querySelector(
  ".dropdown-room__bedroom div:nth-child(4)"
);
const counterBadValueTag = document.querySelector(
  ".dropdown-room__bed div:nth-child(3)"
);
const counterBadValueDecreaseTag = document.querySelector(
  ".dropdown-room__bed div:nth-child(2)"
);
const counterBadValueIncreaseTag = document.querySelector(
  ".dropdown-room__bed div:nth-child(4)"
);
const counterBathValueTag = document.querySelector(
  ".dropdown-room__bath div:nth-child(3)"
);
const counterBathValueDecrease = document.querySelector(
  ".dropdown-room__bath div:nth-child(2)"
);
const counterBathValueIncrease = document.querySelector(
  ".dropdown-room__bath div:nth-child(4)"
);

/////////////////////////Listeners//////////////////////////////////////////////
dropDownInputRoom.addEventListener("click", handler);
counterBadRoomValueIncrease.addEventListener("click", () =>
  changeCounter("increase", "badroom")
);
counterBadRoomValueDecrease.addEventListener("click", () =>
  changeCounter("decrease", "badroom")
);
counterBadValueDecreaseTag.addEventListener("click", () =>
  changeCounter("decrease", "bad")
);
counterBadValueIncreaseTag.addEventListener("click", () =>
  changeCounter("increase", "bad")
);
counterBathValueDecrease.addEventListener("click", () =>
  changeCounter("decrease", "bath")
);
counterBathValueIncrease.addEventListener("click", () =>
  changeCounter("increase", "bath")
);
//////////////////////Handlers//////////////////////////////////////////
function handler(event) {
  document.getElementsByClassName("dropdown-room")[0].classList.toggle("show");
  showResultInDropDown();
}
function changeCounter(howChange, changeTarget) {
  if (changeTarget === "badroom") {
    if (howChange === "increase") {
      counterBadRoomValueTag.innerText++;
      counterBedRoom++;
    } else {
      if (counterBadRoomValueTag.innerText > 0) {
        counterBadRoomValueTag.innerText--;
        counterBedRoom--;
      }
    }
  } else if (changeTarget === "bad") {
    if (howChange === "increase") {
      counterBadValueTag.innerText++;
      counterBed++;
    } else {
      if (counterBadValueTag.innerText > 0) {
        counterBadValueTag.innerText--;
        counterBed--;
      }
    }
  } else {
    if (howChange === "increase") {
      counterBathValueTag.innerText++;
      counterBath++;
    } else {
      if (counterBathValueTag.innerText > 0) {
        counterBathValueTag.innerText--;
        counterBath--;
      }
    }
  }
}
function showResultInDropDown() {
  let result = "";
  if (counterBedRoom === 1) {
    result += counterBedRoom + " спальня ";
  } else if (counterBedRoom > 1) {
    result += counterBedRoom + " спальни ";
  }
  if (counterBed === 1) {
    result += counterBed + " кровать ";
  } else if (counterBed > 1) {
    result += counterBed + " кровати ";
  }
  if (counterBath === 1) {
    result += counterBath + " ванная ";
  } else if (counterBath > 1) {
    result += counterBath + " ванных ";
  }
  dropDownInputFieldRoom.value = result;
}


/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.af6c498b5f0bff468725.js.map