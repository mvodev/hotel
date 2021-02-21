import DropdownDate from '../dropdown/dropdownDate';
import DropdownCount from '../dropdown/dropdownCount';

class DropdownMain {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this.initDropdowns();
 }
 initDropdowns() {
  this.rootElem.forEach(elem => {
   if (elem.classList.contains(".dropdown__date") || elem.classList.contains(".dropdown__filter")) {
    new DropdownDate(elem);
   }
   else new DropdownCount(elem);
  });
 }
}
export default DropdownMain;