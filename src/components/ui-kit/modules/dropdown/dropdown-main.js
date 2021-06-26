import DropdownDate from './dropdown-date';
import DropdownCount from './dropdown-count';
import DropdownFilter from './dropdown-filter';

class DropdownMain {
  constructor(rootElem) {
    this.rootElem = rootElem;
    this._initDropdowns();
  }
  _initDropdowns() {
    this.rootElem.forEach(elem => {
    if (elem.classList.contains("dropdown__filter-date")) {
      new DropdownDate(elem);
    }
    else if (elem.classList.contains("dropdown__filter")) {
      new DropdownFilter(elem);
    }
    else {
      new DropdownCount(elem)
    };
    });
  }
}
export default DropdownMain;