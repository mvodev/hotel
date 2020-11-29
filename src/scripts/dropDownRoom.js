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
dropDownInputRoom.forEach(elem => elem.addEventListener("click", dropDownRoomClickHandler));
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
function dropDownRoomClickHandler(event) {
  event.target.parentNode.parentNode.childNodes[1].classList.toggle('dropdown_active');
  if (event.target.parentNode.parentNode.childNodes[1].classList.contains('dropdown_active')) {
    event.target.parentNode.parentNode.classList.add('dropdown-input__room_rounding-corners-top');
  }
  else {
    event.target.parentNode.parentNode.classList.remove('dropdown-input__room_rounding-corners-top');
  }
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
      if (bedRoom.getCounter() > 0) {
        bedRoom.decrease();
        console.log();
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
