import './fsd-datepicker.js';
import 'cleave.js';
class DropdownDate {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this.getElem();
  this.init();
 }
 getElem() {
  this.input = this.rootElem.querySelector(".dropdown__input");
 }
 init() {
  if (this.rootElem.classList.contains("dropdown__date")) {
   $('.dropdown__date input').fsdDatepicker({ todayButton: true, clearButton: true });
   new Cleave(this.input, {
    date: true,
    delimiter: '.',
    datePattern: ['d', 'm', 'Y']
   });
  }
  else if (this.rootElem.classList.contains("dropdown__filter")) {
   $('.dropdown__filter input').fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
  }
 }
}
export default DropdownDate;