///////////////////////Constants////////////////////////////////////////////
let counterBedRoom = (counterBed = 0);
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
