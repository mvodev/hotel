import autobind from "autobind-decorator";

class ExpandableCL {

  constructor(bulletList) {
    this.bulletList = bulletList;
    this._getElems();
    this._bindEvents();
  }

  _getElems() {
    this.bulletListExpandableArrow =this.bulletList.querySelector('.js-bullet-list-expandable__arrow');
    this.bulletListDropdown = this.bulletList.querySelector('.js-bullet-list-expandable__dropdown');
  }

  _bindEvents() {
    this.bulletList.addEventListener('click', this._handleExpandableList);
  }

  @autobind
  _handleExpandableList(event) {
    this.bulletListDropdown.classList.toggle('bullet-list_is-opened');
    this._toggleArrow();
  }

  _toggleArrow() {
    if (this.bulletListExpandableArrow.innerText === 'keyboard_arrow_down') {
      this.bulletListExpandableArrow.innerText = 'keyboard_arrow_up';
    }
    else if (this.bulletListExpandableArrow.innerText === 'keyboard_arrow_up') {
      this.bulletListExpandableArrow.innerText = 'keyboard_arrow_down';
    }
  }
  
}
export default ExpandableCL;