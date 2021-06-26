class DropdownCounter {

  constructor(container) {
    this.container = container;
    this._getElements();
    this._bindEvents();
  }
  _getElements() {
    this.minus = this.container.querySelector('.js-container-dropdown__decrease');
    this.plus = this.container.querySelector('.js-container-dropdown__increase');
    this.value = this.container.querySelector('.js-container-dropdown__value');
    this.valueNumber = parseInt(this.value.textContent, 10);
  }
  _bindEvents() {
    this.minus.addEventListener('click', this._handleMinus.bind(this));
    this.plus.addEventListener('click', this._handlePlus.bind(this));
  }
  _handleMinus() {
    if (this.valueNumber > 0) {
    this.valueNumber--;
    this.value.innerHTML = this.valueNumber;
    }
    if (this.valueNumber === 0) {
    this.minus.classList.remove('container-dropdown__decrease_dark');
    }
    this.container.dispatchEvent(new CustomEvent("counterChanged", { bubbles: true }));
  }
  _handlePlus() {
    this.valueNumber++;
    this.value.innerHTML = this.valueNumber;
    this.minus.classList.add('container-dropdown__decrease_dark');
    this.container.dispatchEvent(new CustomEvent("counterChanged",{bubbles:true}));
  }
  getData() {
    return this.valueNumber;
  }
  resetData() {
    this.value.innerHTML = '0';
    this.valueNumber = 0;
    this.minus.classList.remove('container-dropdown__decrease_dark');
  }
}

export default DropdownCounter;