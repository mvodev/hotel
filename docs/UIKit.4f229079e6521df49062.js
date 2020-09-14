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
/******/ 	deferredModules.push(["./UIKit.js","vendors~UIKit"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./UIKit.js":
/*!******************!*\
  !*** ./UIKit.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _styles_UIKitStyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/UIKitStyles.scss */ "./styles/UIKitStyles.scss");
/* harmony import */ var _styles_UIKitStyles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_UIKitStyles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css */ "../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css");
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/air-datepicker/dist/css/datepicker.min.css */ "../node_modules/air-datepicker/dist/css/datepicker.min.css");
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_air_datepicker_dist_css_datepicker_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/air-datepicker/dist/js/datepicker.js */ "../node_modules/air-datepicker/dist/js/datepicker.js");
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_air_datepicker_dist_js_datepicker_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_scripts_starRating_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/scripts/starRating.js */ "./scripts/starRating.js");
/* harmony import */ var _src_scripts_starRating_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_starRating_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_scripts_likeRating_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/scripts/likeRating.js */ "./scripts/likeRating.js");
/* harmony import */ var _src_scripts_likeRating_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_likeRating_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ion-rangeslider */ "../node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cleave.js */ "../node_modules/cleave.js/dist/cleave-esm.js");
/* harmony import */ var _src_scripts_dropDownGuests_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/scripts/dropDownGuests.js */ "./scripts/dropDownGuests.js");
/* harmony import */ var _src_scripts_dropDownGuests_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_dropDownGuests_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_scripts_dropDownRoom_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/scripts/dropDownRoom.js */ "./scripts/dropDownRoom.js");
/* harmony import */ var _src_scripts_dropDownRoom_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_dropDownRoom_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_scripts_expandableCL_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/scripts/expandableCL.js */ "./scripts/expandableCL.js");
/* harmony import */ var _src_scripts_expandableCL_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_expandableCL_js__WEBPACK_IMPORTED_MODULE_10__);











var cleave = new Cleave('.txtField-input-date', {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
});
$('.dropdown-input__date_input-field').datepicker({ todayButton: true, clearButton: true });
// $('.dropdown-input__date_input-field').datepicker({ todayButton: true, clearButton: true });
$('.dropdown-input__filter_input-field').datepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
$('.range-slider__input').ionRangeSlider({
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
    $('.range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  },
  onStart: function (data) {
    let minValue = ''
    let maxValue = ''
    if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
    else minValue = data.from;
    if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
    else maxValue = data.to;
    $('.range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  }
});
// dropdown additional options for range dropdown:
// range: true, dateFormat: 'dd M',inline: true
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./scripts/dropDownGuests.js":
/*!***********************************!*\
  !*** ./scripts/dropDownGuests.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

///////////////////////Constants////////////////////////////////////////////
const adult = counterAdult();
const child = counterChild();
const infant = counterInfant();
const $dropDownInputGuests = document.querySelectorAll(".dropdown-input__arrow");
const $dropDownInputFieldGuests = document.querySelectorAll(
  ".dropdown-input__guests input"
);
const $counterAdultValueTag = document.querySelectorAll(
  ".dropdown-guests__adult div:nth-child(3)"
);
const $counterAdultValueDecrease = document.querySelectorAll(
  ".dropdown-guests__adult div:nth-child(2)"
);
const $counterAdultValueIncrease = document.querySelectorAll(
  ".dropdown-guests__adult div:nth-child(4)"
);
const $counterChildValueTag = document.querySelectorAll(
  ".dropdown-guests__child div:nth-child(3)"
);
const $counterChildValueDecreaseTag = document.querySelectorAll(
  ".dropdown-guests__child div:nth-child(2)"
);
const $counterChildValueIncreaseTag = document.querySelectorAll(
  ".dropdown-guests__child div:nth-child(4)"
);
const $counterInfantValueTag = document.querySelectorAll(
  ".dropdown-guests__infant div:nth-child(3)"
);
const $counterInfantValueDecrease = document.querySelectorAll(
  ".dropdown-guests__infant div:nth-child(2)"
);
const $counterInfantValueIncrease = document.querySelectorAll(
  ".dropdown-guests__infant div:nth-child(4)"
);
const $eraseButton = document.querySelectorAll(
  ".dropdown-guests__apply-button div:nth-child(1)"
);
const $applyButton = document.querySelectorAll(
  ".dropdown-guests__apply-button div:nth-child(2)"
);

/////////////////////////Listeners//////////////////////////////////////////////
$dropDownInputGuests.forEach(elem => elem.addEventListener("click", handler));
$counterAdultValueDecrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("decrease", "adult")
));
$counterAdultValueIncrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("increase", "adult")
));
$counterChildValueDecreaseTag.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("decrease", "child")
));
$counterChildValueIncreaseTag.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("increase", "child")
));
$counterInfantValueDecrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("decrease", "infant")
));
$counterInfantValueIncrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("increase", "infant")
));
$applyButton.forEach(elem => elem.addEventListener("click", () =>
  showResultInDropDownGuests("apply")
));
$eraseButton.forEach(elem => elem.addEventListener("click", () =>
  showResultInDropDownGuests("erase")
));
//////////////////////Handlers//////////////////////////////////////////
function handler(event) {
  event.target.parentNode.parentNode.childNodes[1].classList.toggle('dropdown_active');
  event.target.parentNode.parentNode.childNodes[1].classList.toggle('dropdown-input__guests_rounding-corners-top');
  if (event.target.innerText === 'keyboard_arrow_down') {
    event.target.innerText = 'keyboard_arrow_up';
  } else if (event.target.innerText === 'keyboard_arrow_up') {
    event.target.innerText = 'keyboard_arrow_down';
  }
}
function changeCounterGuests(howChange, changeTarget) {
  if (changeTarget === "adult") {
    if (howChange === "increase") {
      $counterAdultValueTag.innerText++;
      adult.increase();
    } else {
      if ($counterAdultValueTag.innerText > 0) {
        $counterAdultValueTag.innerText--;
        adult.decrease();
      }
    }
  } else if (changeTarget === "child") {
    if (howChange === "increase") {
      $counterChildValueTag.innerText++;
      child.increase();
    } else {
      if ($counterChildValueTag.innerText > 0) {
        $counterChildValueTag.innerText--;
        child.decrease();
      }
    }
  } else {
    if (howChange === "increase") {
      $counterInfantValueTag.innerText++;
      infant.increase();
    } else {
      if ($counterInfantValueTag.innerText > 0) {
        $counterInfantValueTag.innerText--;
        infant.decrease();
      }
    }
  }
}
function showResultInDropDownGuests(action) {
  if (action === "apply") {
    let result = "";
    let counterGuests = infant.getCounter() + child.getCounter() + adult.getCounter();
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
    $dropDownInputFieldGuests.forEach(elem => elem.value = result);
    dropDownResult = result;
    if (result != "") $eraseButton.forEach(elem => elem.classList.remove("dropdown_button-hidden"));
    result = "";
  } else if (action === "erase") {
    eraseResult();
  }
}
function eraseResult() {
  counterAdult = counterChild = counterInfant = 0;
  $dropDownInputFieldGuests.forEach(elem => elem.value = '');
  $counterAdultValueTag.forEach(elem => elem.innerText = 0);
  $counterChildValueTag.forEach(elem => elem.innerText = 0);
  $counterInfantValueTag.forEach(elem => elem.innerText = 0);
  $eraseButton.forEach(elem => elem.classList.add("dropdown_button-hidden"));
}
function eraseCounters() {
  adult.erase();
  child.erase();
  infant.erase();
}

function counterAdult() {
  let privateCounter = 0;
  return {
    increase: function () {
      privateCounter++;
      $counterAdultValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        $counterAdultValueTag.forEach(elem => elem.innerText--);
      }
    },
    getCounter: function () {
      return privateCounter;
    },
    erase: function () {
      privateCounter = 0;
    }
  };
}
function counterChild() {
  let privateCounter = 0;
  return {
    increase: function () {
      privateCounter++;
      $counterChildValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        $counterChildValueTag.forEach(elem => elem.innerText--);
      }
    },
    getCounter: function () {
      return privateCounter;
    },
    erase: function () {
      privateCounter = 0;
    }
  };
}
function counterInfant() {
  let privateCounter = 0;
  return {
    increase: function () {
      privateCounter++;
      $counterInfantValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        $counterInfantValueTag.forEach(elem => elem.innerText--);
      }
    },
    getCounter: function () {
      return privateCounter;
    },
    erase: function () {
      privateCounter = 0;
    }
  };
}


/***/ }),

/***/ "./scripts/dropDownRoom.js":
/*!*********************************!*\
  !*** ./scripts/dropDownRoom.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

///////////////////////Constants////////////////////////////////////////////
const bed = counterBed();
const bath = counterBath();
const bedRoom = counterBedRoom();
const dropDownInputRoom = document.querySelectorAll(".dropdown-input__room");
const dropDownInputFieldRoom = document.querySelectorAll(
  ".dropdown-input__room input");
const counterBadRoomValueTag = document.querySelectorAll(
  ".dropdown-room__bedroom div:nth-child(3)");
const counterBadRoomValueDecrease = document.querySelectorAll(
  ".dropdown-room__bedroom div:nth-child(2)");
const counterBadRoomValueIncrease = document.querySelectorAll(
  ".dropdown-room__bedroom div:nth-child(4)");
const counterBadValueTag = document.querySelectorAll(
  ".dropdown-room__bed div:nth-child(3)");
const counterBadValueDecreaseTag = document.querySelectorAll(
  ".dropdown-room__bed div:nth-child(2)");
const counterBadValueIncreaseTag = document.querySelectorAll(
  ".dropdown-room__bed div:nth-child(4)");
const counterBathValueTag = document.querySelectorAll(
  ".dropdown-room__bath div:nth-child(3)");
const counterBathValueDecrease = document.querySelectorAll(
  ".dropdown-room__bath div:nth-child(2)");
const counterBathValueIncrease = document.querySelectorAll(
  ".dropdown-room__bath div:nth-child(4)");

/////////////////////////Listeners//////////////////////////////////////////////
dropDownInputRoom.forEach(elem => elem.addEventListener("click", dropdownClickHandler));
counterBadRoomValueIncrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounter("increase", "badroom")
));
counterBadRoomValueDecrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounter("decrease", "badroom")
));
counterBadValueDecreaseTag.forEach(elem => elem.addEventListener("click", () =>
  changeCounter("decrease", "bad")
));
counterBadValueIncreaseTag.forEach(elem => elem.addEventListener("click", () =>
  changeCounter("increase", "bad")
));
counterBathValueDecrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounter("decrease", "bath")
));
counterBathValueIncrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounter("increase", "bath")
));
//////////////////////Handlers//////////////////////////////////////////
function dropdownClickHandler(event) {
  event.target.parentNode.parentNode.childNodes[1].classList.toggle('dropdown_active');
  showResultInDropDown();
}
function counterBedRoom() {
  let privateCounter = 2;
  return {
    increase: function () {
      privateCounter++;
      counterBadRoomValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        counterBadRoomValueTag.forEach(elem => elem.innerText--);
      }
    },
    getCounter: function () {
      return privateCounter;
    }
  };
}
function counterBed() {
  let privateCounter = 2;
  return {
    increase: function () {
      privateCounter++;
      counterBadValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        counterBadValueTag.forEach(elem => elem.innerText--);
      }
    },
    getCounter: function () {
      return privateCounter;
    }
  };
}
function counterBath() {
  let privateCounter = 0;
  return {
    increase: function () {
      privateCounter++;
      counterBathValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        counterBathValueTag.forEach(elem => elem.innerText--);
      }
    },
    getCounter: function () {
      return privateCounter;
    }
  };
}
function changeCounter(howChange, changeTarget) {
  if (changeTarget === "badroom") {
    if (howChange === "increase") {
      bedRoom.increase();
    } else {
      if (bedRoom.getCounter > 0) {
        bedRoom.decrease();
      }
    }
  } else if (changeTarget === "bad") {
    if (howChange === "increase") {
      bed.increase();
    } else {
      if (bed.getCounter() > 0) {
        bed.decrease();
      }
    }
  } else {
    if (howChange === "increase") {
      bath.increase();
    } else {
      if (bath.getCounter() > 0) {
        bath.decrease();
      }
    }
  }
  showResultInDropDown();
}
function showResultInDropDown() {
  let result = "";
  if (bedRoom.getCounter() === 1) {
    result += bedRoom.getCounter() + " спальня ";
  } else if (bedRoom.getCounter() > 1) {
    result += bedRoom.getCounter() + " спальни ";
  }
  if (bed.getCounter() === 1) {
    result += bed.getCounter() + " кровать ";
  } else if (bed.getCounter() > 1) {
    result += bed.getCounter() + " кровати ";
  }
  if (bath.getCounter() === 1) {
    result += bath.getCounter() + " ванная ";
  } else if (bath.getCounter() > 1) {
    result += bath.getCounter() + " ванных ";
  }
  dropDownInputFieldRoom.forEach(elem => elem.value = result);
}


/***/ }),

/***/ "./scripts/expandableCL.js":
/*!*********************************!*\
  !*** ./scripts/expandableCL.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const $bulletListExpandableArrow = document.querySelectorAll('.bullet-list-expandable span');
$bulletListExpandableArrow.forEach(elem => elem.addEventListener('click', expandableListHandler));
function expandableListHandler(event) {
 event.target.parentNode.parentNode.childNodes[1].classList.toggle('bullet-list_show');
 if (event.target.innerText === 'keyboard_arrow_down') {
  event.target.innerText = 'keyboard_arrow_up';
 }
 else if (event.target.innerText === 'keyboard_arrow_up') {
  event.target.innerText = 'keyboard_arrow_down';
 }
}

/***/ }),

/***/ "./scripts/likeRating.js":
/*!*******************************!*\
  !*** ./scripts/likeRating.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const likeButtons = document.querySelectorAll('.button-like');
likeButtons.forEach(elem => elem.addEventListener('click', likeClickListener));
function likeClickListener(event) {
 if (event.target.className === '') {
  if (event.target.parentElement.classList.contains('button-like_is-liked')) {
   event.target.innerText--;
   event.target.parentElement.childNodes[0].innerText = 'favorite_border';
   event.target.parentElement.classList.remove('button-like_is-liked');
  }
  else {
   event.target.innerText++;
   event.target.parentElement.classList.add('button-like_is-liked');
   event.target.parentElement.childNodes[0].innerText = 'favorite';
  }
 }
 else if (event.target.className == 'button-like__heart') {
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

/***/ "./scripts/starRating.js":
/*!*******************************!*\
  !*** ./scripts/starRating.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const rateButton = document.querySelectorAll('.button-rate label');
rateButton.forEach(elem => elem.addEventListener('click', rateClickListener)
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

/***/ "./styles/UIKitStyles.scss":
/*!*********************************!*\
  !*** ./styles/UIKitStyles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=UIKit.4f229079e6521df49062.js.map