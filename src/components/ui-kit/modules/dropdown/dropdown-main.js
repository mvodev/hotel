import DropdownDate from './dropdown-date';
import DropdownCount from './dropdown-count';

class DropdownMain {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this.initDropdowns();
 }
 initDropdowns() {
  this.rootElem.forEach(elem => {
   if (elem.classList.contains("dropdown__date") || elem.classList.contains("dropdown__filter")) {
    new DropdownDate(elem);
   }
   else {
    new DropdownCount(elem)
   };
  });
 }
}
export default DropdownMain;