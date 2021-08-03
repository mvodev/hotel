import DropdownDate from './dropdown-date';
import DropdownCount from './dropdown-count';
import DropdownFilter from './dropdown-filter';

class DropdownMain {
  constructor(rootElems) {
    this.rootElems = rootElems;
    this._initDropdowns();
  }
  _initDropdowns() {
    this.rootElems.forEach(elem => {
    if (elem.classList.contains("dropdown_filter-date")) {
      console.log('inside DropdownDate');
      new DropdownDate(elem);
    }
    else if (elem.classList.contains("dropdown_filter")) {
      new DropdownFilter(elem);
      console.log('inside DropdownFilter')
    }
    else {
      new DropdownCount(elem);
      console.log('inside DropdownCounter')
    };
    });
  }
}
export default DropdownMain;