class DropdownCounter {

 constructor(container) {
  this.container = container;
  this.getElements();
  this.bindEvents();
 }
 getElements() {
  this.minus = this.container.querySelector('.js-container-dropdown__decrease');
  this.plus = this.container.querySelector('.js-container-dropdown__increase');
  this.value = this.container.querySelector('.js-container-dropdown__value');
  this.valueNumber = parseInt(this.value.textContent, 10);
 }
 bindEvents() {
  this.minus.addEventListener('click', this.handleMinus.bind(this));
  this.plus.addEventListener('click', this.handlePlus.bind(this));
 }
 handleMinus() {
  if (this.valueNumber > 0) {
   this.valueNumber--;
   this.value.innerHTML = this.valueNumber;
  }
 }
 handlePlus() {
  this.valueNumber++;
  this.value.innerHTML = this.valueNumber;
 }
}

export default DropdownCounter;