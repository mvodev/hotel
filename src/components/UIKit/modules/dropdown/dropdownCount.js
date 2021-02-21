import DropdownCounter from "./dropdown-counter/dropdownCounter";

class DropdownCount {
 constructor(rootElem) {
  this.data = 0;
  this.dropdownType = '';
  this.spellCases = {
   guests: ["гость", "гостя", "гостей"],
   infants: ['младенец', 'младенца', 'младенцев'],
   bedrooms: ['спальня, ', 'спальни, ', 'спален, '],
   bads: ['кровать, ', 'кровати, ', 'кроватей, '],
   baths: ['ванная комната ', 'ванные комнаты ', 'ванных комнат '],
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
   console.log('inside get elem else if dropdown__guests');
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
  console.log('inside bind events dropdownCount ' + this.dropdownType);
  if (this.dropdownType === 'guests') {
   this.clearButton.addEventListener('click', this.handleClearButton.bind(this));
   this.applyButton.addEventListener('click', this.handleApplyButton.bind(this));
  }
 }
 handleDropdown() {
  if (this.rootElem.classList.contains("dropdown_active")) {
   this.hideDropdown();
  } else this.showDropdown();
 }
 handleApplyButton() {
  this.setData(this.collectDataGuests());
  this.showClearButton();
 }
 handleClearButton() {
  this.clearData();
  this.hideClearButton();
 }
 collectDataGuests() {
  let temp = 0;
  for (let i = 0; i < this.dropdownCounters.length; i++) {
   temp += this.dropdownCounters[i].getData();
  }
  return temp;
 }
 collectDataRoom() {
  let room = {};
  room.badrooms = this.dropdownCounters[0].getData();
  room.bads = this.dropdownCounters[1].getData();
  room.baths = this.dropdownCounters[2].getData();
  return room;
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
  let result;
  if (this.dropdownType === 'guests') {
   result = this.collectDataGuests();
   let lastNumber = this.getLastNumber(result);
   this.input.value = result + " " + this.spellCases.guests[this.getPosInSpellCasesArray(result)];
  }
  else {
   this.input.value = result.badrooms + " " + this.spellCases.badrooms[this.getPosInSpellCasesArray(result.badrooms)] + result.bads + this.spellCases.bads[this.getPosInSpellCasesArray(result.bads)] + result.baths + this.spellCases.baths[this.getPosInSpellCasesArray[result.baths]];
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