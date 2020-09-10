///////////////////////Constants////////////////////////////////////////////
let counterAdult = (counterChild = counterInfant = 0);
const $dropDownInputGuests = document.querySelector(".dropdown-input__arrow");
const $dropDownInputFieldGuests = document.querySelector(
  ".dropdown-input__guests input"
);
const $counterAdultValueTag = document.querySelector(
  ".dropdown-guests__adult div:nth-child(3)"
);
const $counterAdultValueDecrease = document.querySelector(
  ".dropdown-guests__adult div:nth-child(2)"
);
const $counterAdultValueIncrease = document.querySelector(
  ".dropdown-guests__adult div:nth-child(4)"
);
const $counterChildValueTag = document.querySelector(
  ".dropdown-guests__child div:nth-child(3)"
);
const $counterChildValueDecreaseTag = document.querySelector(
  ".dropdown-guests__child div:nth-child(2)"
);
const $counterChildValueIncreaseTag = document.querySelector(
  ".dropdown-guests__child div:nth-child(4)"
);
const $counterInfantValueTag = document.querySelector(
  ".dropdown-guests__infant div:nth-child(3)"
);
const $counterInfantValueDecrease = document.querySelector(
  ".dropdown-guests__infant div:nth-child(2)"
);
const $counterInfantValueIncrease = document.querySelector(
  ".dropdown-guests__infant div:nth-child(4)"
);
const $eraseButton = document.querySelector(
  ".dropdown-guests__apply-button div:nth-child(1)"
);
const $applyButton = document.querySelector(
  ".dropdown-guests__apply-button div:nth-child(2)"
);

/////////////////////////Listeners//////////////////////////////////////////////
$dropDownInputGuests.addEventListener("click", handler);
$counterAdultValueDecrease.addEventListener("click", () =>
  changeCounterGuests("decrease", "adult")
);
$counterAdultValueIncrease.addEventListener("click", () =>
  changeCounterGuests("increase", "adult")
);
$counterChildValueDecreaseTag.addEventListener("click", () =>
  changeCounterGuests("decrease", "child")
);
$counterChildValueIncreaseTag.addEventListener("click", () =>
  changeCounterGuests("increase", "child")
);
$counterInfantValueDecrease.addEventListener("click", () =>
  changeCounterGuests("decrease", "infant")
);
$counterInfantValueIncrease.addEventListener("click", () =>
  changeCounterGuests("increase", "infant")
);
$applyButton.addEventListener("click", () =>
  showResultInDropDownGuests("apply")
);
$eraseButton.addEventListener("click", () =>
  showResultInDropDownGuests("erase")
);
//////////////////////Handlers//////////////////////////////////////////
function handler(event) {
  document
    .getElementsByClassName('dropdown-guests')[0]
    .classList.toggle('show');
  document.querySelector('.dropdown-input__guests').classList
    .toggle('dropdown-input__guests_rounding-corners-top');
  if (document
    .querySelector('.dropdown-input__arrow')
    .innerText === 'keyboard_arrow_down') {

    document
      .querySelector('.dropdown-input__arrow')
      .innerText = 'keyboard_arrow_up'
  } else if (document
    .querySelector('.dropdown-input__arrow')
    .innerText === 'keyboard_arrow_up') {
    document
      .querySelector('.dropdown-input__arrow')
      .innerText = 'keyboard_arrow_down'
  }
}
function changeCounterGuests(howChange, changeTarget) {
  if (changeTarget === "adult") {
    if (howChange === "increase") {
      $counterAdultValueTag.innerText++;
      counterAdult++;
    } else {
      if ($counterAdultValueTag.innerText > 0) {
        $counterAdultValueTag.innerText--;
        counterAdult--;
      }
    }
  } else if (changeTarget === "child") {
    if (howChange === "increase") {
      $counterChildValueTag.innerText++;
      counterChild++;
    } else {
      if ($counterChildValueTag.innerText > 0) {
        $counterChildValueTag.innerText--;
        counterChild--;
      }
    }
  } else {
    if (howChange === "increase") {
      $counterInfantValueTag.innerText++;
      counterInfant++;
    } else {
      if ($counterInfantValueTag.innerText > 0) {
        $counterInfantValueTag.innerText--;
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
    $dropDownInputFieldGuests.value = result;
    dropDownResult = result;
    if (result != "") $eraseButton.classList.remove("dropdown_button-hidden");
    result = "";
  } else if (action === "erase") {
    dropDownResult = "";
    counterAdult = counterChild = counterInfant = 0;
    $dropDownInputFieldGuests.value = dropDownResult;
    $counterAdultValueTag.innerText = 0;
    $counterChildValueTag.innerText = 0;
    $counterInfantValueTag.innerText = 0;
    $eraseButton.classList.add("dropdown_button-hidden");
  }
}
