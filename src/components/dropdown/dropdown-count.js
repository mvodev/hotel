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
    this.inputWrapper = this.rootElem.querySelector(".dropdown__input-wrapper");
    this.body = this.rootElem.querySelector(".dropdown__body");
    this.counters = this.rootElem.querySelectorAll(".dropdown-counter");
    if (this.rootElem.classList.contains("dropdown_room")) {
      this.dropdownType = 'room';
    } else if (this.rootElem.classList.contains("dropdown_guests")) {
      this.dropdownType = 'guests';
      this.applyButton = this.rootElem.querySelector(".js-dropdown__body-buttons").lastChild;
      this.clearButton = this.rootElem.querySelector(".js-dropdown__body-buttons").firstChild;
      this._checkIfClearButtonMustBeShown();
    }
    this.counters.forEach(elem => {
      this.dropdownCounters.push(new DropdownCounter(elem));
    });

  }

  showDropdown() {
    this.rootElem.classList.add("dropdown_is-opened");
    this.body.classList.add("dropdown_is-opened");
  }

  hideDropdown() {
    this.rootElem.classList.remove("dropdown_is-opened");
    this.body.classList.remove("dropdown_is-opened");
  }

  _bindEvents() {
    this.inputWrapper.addEventListener('click', this._handleDropdown.bind(this));
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
      this._checkIfClearButtonMustBeShown();
    }
    if (this.dropdownType === 'room') {
      this._setData(this._collectData());
    }
  }

  _handleDropdown() {
    if (this.rootElem.classList.contains("dropdown_is-opened")) {
      this.hideDropdown();
    } else {
      this.showDropdown();
      this._checkIfClearButtonMustBeShown();
    }
  }

  _handleApplyButton() {
    let result = this._collectData();
    this._setData(result);
    this.hideDropdown();
    this._checkIfClearButtonMustBeShown();
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
      room.total = room.bedrooms + room.beds + room.baths;
      return room;
    }
  }

  _getPosInSpellCasesArray(result) {
    const cases = [2, 0, 1, 1, 1, 2];
    return ((result % 100) > 4 && (result % 100) < 20) ? 2 : cases[(result % 10 < 5) ? result % 10 : 5];
  }

  _setData(result) {
    if (this.dropdownType === 'guests') {
      let temp = '';
      temp = result.total + " " + this.spellCases.guests[this._getPosInSpellCasesArray(result.total)];
      if (result.infants > 0) {
        temp += ',  ' + result.infants + " " + this.spellCases.infants[this._getPosInSpellCasesArray(result.infants)];
      }
      if (result.total === 0) {
        temp = '';
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
      if (result.total === 0) {
        temp = '';
      }
      this.input.value = temp;
    }
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

  _checkIfClearButtonMustBeShown() {
    if (this._collectData().total > 0) {
      this._showClearButton();
    }
    else {
      this._hideClearButton();
    }
  }

}
export default DropdownCount;