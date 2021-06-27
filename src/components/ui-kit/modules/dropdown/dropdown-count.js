import DropdownCounter from "../dropdown-counter/dropdown-counter";

class DropdownCount {
  constructor(rootElem) {
    this.data = 0;
    this.dropdownType = '';
    this.spellCases = {};
    this.dropdownCounters = [];
    this.rootElem = rootElem;
    this._getElems();
    this._bindEvents();
  }
  _getElems() {
    this.spellCases = {
      guests: ["гость", "гостя", "гостей"],
      infants: ['младенец', 'младенца', 'младенцев'],
      bedrooms: ['спальня', 'спальни', 'спален'],
      beds: ['кровать', 'кровати', 'кроватей'],
      baths: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    };
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
  _bindEvents() {
    this.arrow.addEventListener('click', this._handleDropdown.bind(this));
    if (this.dropdownType === 'guests') {
      this.clearButton.addEventListener('click', this._handleClearButton.bind(this));
      this.applyButton.addEventListener('click', this._handleApplyButton.bind(this));
    }
    this.rootElem.addEventListener('counterChanged', this._handleCounter.bind(this));
    document.addEventListener('click', this._handleClickOutsideDropdown.bind(this));
  }
  _handleClickOutsideDropdown(e) {
    const target = e.target;
    const itIsDropdown = target === this.rootElem || this.rootElem.contains(target);
    if (!itIsDropdown) {
      this.hideDropdown();
    }
  }
  _handleCounter() {
    if (this.dropdownType === 'guests') {
      this._showClearButton();
    }
    if (this.dropdownType === 'room') {
      this.setData(this._collectData());
    }
  }
  _handleDropdown() {
    if (this.rootElem.classList.contains("dropdown_active")) {
      this.hideDropdown();
    } else this.showDropdown();
  }
  _handleApplyButton() {
    this.setData(this._collectData());
    this.hideDropdown();
    this._showClearButton();
  }
  _handleClearButton() {
    this._clearData();
    this._hideClearButton();
  }
  _collectData() {
    if (this.dropdownType === 'guests') {
      let guests = {};
      guests.total = 0;
      guests.infants = 0;
      for (let i = 0; i < this.dropdownCounters.length; i++) {
        guests.total += this.dropdownCounters[i].getData();
        if (i === this.dropdownCounters.length - 1) {
          guests.infants = this.dropdownCounters[i].getData();
        }
      }
      return guests;
    }
    else {
      let room = {};
      room.bedrooms = this.dropdownCounters[0].getData();
      room.beds = this.dropdownCounters[1].getData();
      room.baths = this.dropdownCounters[2].getData();
      return room;
    }
  }
  _getPosInSpellCasesArray(result) {
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
    let result = this._collectData();
    if (this.dropdownType === 'guests') {
      let temp = '';
      temp = result.total + " " + this.spellCases.guests[this._getPosInSpellCasesArray(result.total)];
      if (result.infants > 0) {
        temp += ',  ' + result.infants + " " + this.spellCases.infants[this._getPosInSpellCasesArray(result.infants)];
      }
      this.input.value = temp;
    }
    else {
      let temp = '';
      if (result.bedrooms > 0) {
        temp += result.bedrooms + " " + this.spellCases.bedrooms[this._getPosInSpellCasesArray(result.bedrooms)];
      }
      if (result.beds > 0) {
        if (temp.length > 0) {
          temp += ",  " + result.beds + " " + this.spellCases.beds[this._getPosInSpellCasesArray(result.beds)];
        }
        else temp += result.beds + " " + this.spellCases.beds[this._getPosInSpellCasesArray(result.beds)];
      }
      if (result.baths > 0) {
        if (temp.length > 0) {
          temp += ",  " + result.baths + " " + this.spellCases.baths[this._getPosInSpellCasesArray(result.baths)];
        }
        else temp += result.baths + " " + this.spellCases.baths[this._getPosInSpellCasesArray(result.baths)];
      }
      temp += '...';
      this.input.value = temp;
    }
  }
  getLastNumber(value) {
    return value.toString().split("").pop();
  }
  _clearData() {
    this.input.value = "";
    this.dropdownCounters.forEach(elem => {
      elem.resetData();
    });
  }
  _showClearButton() {
    this.clearButton.classList.remove('buttons-dropdown_hidden');
  }
  _hideClearButton() {
    this.clearButton.classList.add('buttons-dropdown_hidden');
  }
}
export default DropdownCount;