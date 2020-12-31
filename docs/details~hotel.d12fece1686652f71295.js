(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details~hotel"],{

/***/ "./components/UIKit/modules/burger/burger.js":
/*!***************************************************!*\
  !*** ./components/UIKit/modules/burger/burger.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.header-login-nav__burger-input').on(function (event) {
 $('.header-login-nav__burger-label,.header-login-nav,.header-login-nav__nav').toggleClass('active');
});

$('.header-login__burger-input').on(function (event) {
 $('.header-login__burger-label,.header-login,.header-login__nav').toggleClass('active');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/UIKit/modules/dropdown/dropDownGuests.js":
/*!*************************************************************!*\
  !*** ./components/UIKit/modules/dropdown/dropDownGuests.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

///////////////////////Constants////////////////////////////////////////////
const adult = counterAdult();
const child = counterChild();
const infant = counterInfant();
const dropDownInputGuests = document.querySelectorAll(".dropdown-input__guests-arrow");
const dropDownInputFieldGuests = document.querySelectorAll(
  ".dropdown-input__guests input"
);
const counterAdultValueTag = document.querySelectorAll(
  ".dropdown-guests__adult div:nth-child(3)"
);
const counterAdultValueDecrease = document.querySelectorAll(
  ".dropdown-guests__adult div:nth-child(2)"
);
const counterAdultValueIncrease = document.querySelectorAll(
  ".dropdown-guests__adult div:nth-child(4)"
);
const counterChildValueTag = document.querySelectorAll(
  ".dropdown-guests__child div:nth-child(3)"
);
const counterChildValueDecreaseTag = document.querySelectorAll(
  ".dropdown-guests__child div:nth-child(2)"
);
const counterChildValueIncreaseTag = document.querySelectorAll(
  ".dropdown-guests__child div:nth-child(4)"
);
const counterInfantValueTag = document.querySelectorAll(
  ".dropdown-guests__infant div:nth-child(3)"
);
const counterInfantValueDecrease = document.querySelectorAll(
  ".dropdown-guests__infant div:nth-child(2)"
);
const counterInfantValueIncrease = document.querySelectorAll(
  ".dropdown-guests__infant div:nth-child(4)"
);
const eraseButton = document.querySelectorAll(
  ".dropdown-guests__erase-button"
);


const applyButton = document.querySelectorAll(
  ".dropdown-guests__apply-button div:nth-child(2)"
);

/////////////////////////Listeners//////////////////////////////////////////////
dropDownInputGuests.forEach(elem => elem.addEventListener("click", dropDownGuestsClickHandler));
counterAdultValueDecrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("decrease", "adult")
));
counterAdultValueIncrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("increase", "adult")
));
counterChildValueDecreaseTag.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("decrease", "child")
));
counterChildValueIncreaseTag.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("increase", "child")
));
counterInfantValueDecrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("decrease", "infant")
));
counterInfantValueIncrease.forEach(elem => elem.addEventListener("click", () =>
  changeCounterGuests("increase", "infant")
));
applyButton.forEach(elem => elem.addEventListener("click", () =>
  showResultInDropDownGuests("apply")
));
eraseButton.forEach(elem => elem.addEventListener("click", () =>
  showResultInDropDownGuests("erase")
));
//////////////////////Handlers//////////////////////////////////////////
function dropDownGuestsClickHandler(event) {

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

      counterAdultValueTag.innerText++;
      adult.increase();
    } else {
      if (adult.getCounter() > 0) {
        counterAdultValueTag.innerText--;
        adult.decrease();
      }
    }
  } else if (changeTarget === "child") {
    if (howChange === "increase") {
      counterChildValueTag.innerText++;
      child.increase();
    } else {
      if (child.getCounter() > 0) {
        counterChildValueTag.innerText--;
        child.decrease();
      }
    }
  } else {
    if (howChange === "increase") {
      counterInfantValueTag.innerText++;
      infant.increase();
    } else {
      if (infant.getCounter() > 0) {
        counterInfantValueTag.innerText--;
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
    dropDownInputFieldGuests.forEach(elem => elem.value = result);
    dropDownResult = result;
    if (result != "") eraseButton.forEach(elem => elem.classList.remove("dropdown_button-hidden"));
    result = "";
  } else if (action === "erase") {
    eraseResult();
  }
}
function eraseResult() {
  eraseCounters();
  dropDownInputFieldGuests.forEach(elem => elem.value = '');
  counterAdultValueTag.forEach(elem => elem.innerText = 0);
  counterChildValueTag.forEach(elem => elem.innerText = 0);
  counterInfantValueTag.forEach(elem => elem.innerText = 0);
  eraseButton.forEach(elem => elem.classList.add("dropdown_button-hidden"));
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
      counterAdultValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        counterAdultValueTag.forEach(elem => elem.innerText--);
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
      counterChildValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        counterChildValueTag.forEach(elem => elem.innerText--);
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
      counterInfantValueTag.forEach(elem => elem.innerText++);
    },
    decrease: function () {
      if (privateCounter > 0) {
        privateCounter--;
        counterInfantValueTag.forEach(elem => elem.innerText--);
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

/***/ "./scripts/expandableCL.js":
/*!*********************************!*\
  !*** ./scripts/expandableCL.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const bulletListExpandableArrow = document.querySelectorAll('.bullet-list-expandable span');
bulletListExpandableArrow.forEach(elem => elem.addEventListener('click', expandableListHandler));
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
   event.target.parentElement.classList.remove('is-liked');
  }
  else {
   event.target.innerText++;
   event.target.parentElement.classList.add('button-like_is-liked');
   event.target.parentElement.childNodes[0].innerText = 'favorite';
  }
 }
 else if (event.target.className == 'button-like-heart') {
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

/***/ "./styles/details.scss":
/*!*****************************!*\
  !*** ./styles/details.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=details~hotel.d12fece1686652f71295.js.map