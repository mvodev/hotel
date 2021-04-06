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
  if (this.valueNumber === 0) {
   this.minus.classList.remove('container-dropdown__decrease_dark');
  }
  this.container.dispatchEvent(new CustomEvent("counterChanged", { bubbles: true }));
 }
 handlePlus() {
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