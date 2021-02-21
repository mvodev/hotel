import '../dropdown/fsdDatepicker.js';
import 'cleave.js';
class DropdownDate {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this.getElem();
  this.init();
 }
 getElem() {
  // $('dropdown__date dropdowm__input').fsdDatepicker({ todayButton: true, clearButton: true });
  this.input = this.rootElem.querySelector(".dropdown__input");

  // $('.dropdown-input__date-input-field').fsdDatepicker({ todayButton: true, clearButton: true });
 }
 init() {
  if (this.rootElem.classList.contains("dropdown__date")) {
   //this.input.fsdDatepicker({ todayButton: true, clearButton: true });
   $('dropdown__date dropdown__input').fsdDatepicker({ todayButton: true, clearButton: true });
   new Cleave(this.input, {
    date: true,
    delimiter: '.',
    datePattern: ['d', 'm', 'Y']
   });
  }
  else if (this.rootElem.classList.contains("dropdown__filter")) {
   // this.input.fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
   $('dropdown__date dropdown__input').fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
  }
 }
}
export default DropdownDate;