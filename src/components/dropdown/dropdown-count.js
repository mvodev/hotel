import autobind from 'autobind-decorator';
import DropdownCounter from '@/components/dropdown-counter/dropdown-counter';

class DropdownCount {

  constructor(rootElem) {
    this.dropdownType = '';
    this.dropdownCounters = [];
    this.rootElem = rootElem;
    this._getElems();
    this._bindEvents();
  }

  showDropdown() {
    this.rootElem.classList.add('dropdown_is-opened');
    this.body.classList.add('dropdown_is-opened');
  }

  hideDropdown() {
    this.rootElem.classList.remove('dropdown_is-opened');
    this.body.classList.remove('dropdown_is-opened');
  }

  _getElems() {
    if (this.rootElem.classList.contains('dropdown_common')) {
      this.dropdownType = 'common';
    } else if (this.rootElem.classList.contains('dropdown_buttons')) {
      this.dropdownType = 'buttons';
      this.applyButton = this.rootElem.querySelector('.js-dropdown__body-buttons').lastChild;
      this.clearButton = this.rootElem.querySelector('.js-dropdown__body-buttons').firstChild;
      this._checkIfClearButtonMustBeShown();
    }
    if (this.dropdownType === 'buttons' || this.dropdownType === 'common') {
      this.labels = this.rootElem.getAttribute('data-labels') !== null ? this.rootElem.getAttribute('data-labels') : [];
      if (this.labels.length === 0) {
        throw new Error('Data attributes for dropdown is unset!');
      }
      this.labels = JSON.parse(this.labels);
      if (this.labels[0].spellCases === undefined) {
        throw new Error('Spell cases for dropdown must be set!');
      }
      this.arrow = this.rootElem.querySelector('.dropdown__arrow');
      this.input = this.rootElem.querySelector('.dropdown__input');
      this.inputWrapper = this.rootElem.querySelector('.dropdown__input-wrapper');
      this.body = this.rootElem.querySelector('.dropdown__body');
      this.counters = this.rootElem.querySelectorAll('.dropdown-counter');
      this.counters.forEach(elem => {
        this.dropdownCounters.push(new DropdownCounter(elem));
      });
    }
  }

  _bindEvents() {
    if (this.dropdownType === 'buttons' || this.dropdownType === 'common') {
      this.inputWrapper.addEventListener('click', this._handleDropdown);
      if (this.dropdownType === 'buttons') {
        this.clearButton.addEventListener('click', this._handleClearButton);
        this.applyButton.addEventListener('click', this._handleApplyButton);
      }
      this.rootElem.addEventListener('counterChanged', this._handleCounter);
      document.addEventListener('click', this._handleClickOutsideDropdown);
    }
  }

  @autobind
  _handleClickOutsideDropdown(e) {
    const target = e.target;
    const itIsDropdown = target === this.rootElem || this.rootElem.contains(target);
    if (!itIsDropdown) {
      this.hideDropdown();
    }
  }

  @autobind
  _handleCounter() {
    if (this.dropdownType === 'buttons') {
      this._checkIfClearButtonMustBeShown();
    }
    if (this.dropdownType === 'common') {
      this._setData(this._collectData());
    }
  }

  @autobind
  _handleDropdown() {
    if (this.rootElem.classList.contains('dropdown_is-opened')) {
      this.hideDropdown();
    } else {
      this.showDropdown();
      this._checkIfClearButtonMustBeShown();
    }
  }

  @autobind
  _handleApplyButton() {
    let result = this._collectData();
    this._setData(result);
    this.hideDropdown();
    this._checkIfClearButtonMustBeShown();
  }

  @autobind
  _handleClearButton() {
    this._clearData();
    this._hideClearButton();
  }

  _collectData() {
    if (this.dropdownType === 'buttons') {
      let result = 0;
      for (let i = 0; i < this.dropdownCounters.length; i += 1) {
        result += this.dropdownCounters[i].getData();
      }
      return result;
    }
    else {
      let result = [];
      for (let i = 0; i < this.labels.length; i += 1) {
        result[i] = this.dropdownCounters[i].getData();
      }
      return result;
    }
  }

  _getPosInSpellCasesArray(result) {
    const cases = [2, 0, 1, 1, 1, 2];
    return ((result % 100) > 4 && (result % 100) < 20) ? 2 : cases[(result % 10 < 5) ? result % 10 : 5];
  }

  _setData(result) {
    if (this.dropdownType === 'buttons') {
      this.input.value = `${result} ${this.labels[0].spellCases[this._getPosInSpellCasesArray(result)]}`;
    }
    else {
      let res = '';
      let total = 0;
      for (let i = 0; i < result.length; i++) {
        if (result[i] > 0) {
          res = res.concat(`${(total > 0 && result[i] > 0) ? ', ' : ''}${result[i]} ${this.labels[i].spellCases[this._getPosInSpellCasesArray(result[i])]}`);
        }
        total += result[i];
      }
      this.input.value = total > 0 ? `${res}...` : '';
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
    if (this.dropdownType === 'buttons') {
      if (this._collectData() > 0) {
        this._showClearButton();
      }
      else {
        this._hideClearButton();
      }
    }
  }

}
export default DropdownCount;