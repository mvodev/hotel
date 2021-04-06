import DropdownCounter from "./dropdown-counter/dropdown-counter";

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
   this.dropdownCounters.push(new DropdownCounter(elem));
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
  this.rootElem.addEventListener('counterChanged', this.handleCounter.bind(this));
 }
 handleCounter() {
  this.setData(this.collectData());
  if (this.dropdownType === 'guests') {
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
  if (this.dropdownType === 'guests') {
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
   if (result.bedrooms > 0) {
    temp += result.bedrooms + " " + this.spellCases.bedrooms[this.getPosInSpellCasesArray(result.bedrooms)];
   }
   if (result.beds > 0) {
    if (temp.length > 0) {
     temp += "," + result.beds + " " + this.spellCases.beds[this.getPosInSpellCasesArray(result.beds)];
    }
    else temp += result.beds + " " + this.spellCases.beds[this.getPosInSpellCasesArray(result.beds)];
   }
   if (result.baths > 0) {
    if (temp.length > 0) {
     temp += "," + result.baths + " " + this.spellCases.baths[this.getPosInSpellCasesArray(result.baths)];
    }
    else temp += result.baths + " " + this.spellCases.baths[this.getPosInSpellCasesArray(result.baths)];
   }
   temp += '...'
   this.input.value = temp;
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
export default DropdownCount;