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
$dropDownInputGuests.forEach(elem => elem.addEventListener("click", dropDownGuestsClickHandler));
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
  eraseCounters();
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
