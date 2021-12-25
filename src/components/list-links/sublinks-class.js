import autobind from "autobind-decorator";

class SubLinks {

  constructor(arrow) {
    this.subMenuArrow = arrow;
    this._bindEvents();
  }

  _bindEvents() {
    this.subMenuArrow.addEventListener('click', this._handleMenuArrow);
    document.addEventListener('click', this._handleClickOutsideSublinks);
  }

  @autobind
  _handleMenuArrow(e) {
    this.subMenuArrow.nextElementSibling.classList.toggle('list-links__sub-links_is-visible');
    this._toggleArrow();
  }

  _toggleArrow() {
    if (this.subMenuArrow.innerText === 'keyboard_arrow_down') {
      this.subMenuArrow.innerText = 'keyboard_arrow_up';
    }
    else if (this.subMenuArrow.innerText === 'keyboard_arrow_up') {
      this.subMenuArrow.innerText = 'keyboard_arrow_down';
    }
  }

  @autobind
  _handleClickOutsideSublinks(e) {
    const target = e.target;
    const itIsSublinks = target === this.subMenuArrow 
    || this.subMenuArrow.nextElementSibling.contains(target);
    if (!itIsSublinks) {
      this._hideSubLinks();
    }
  }

  _hideSubLinks() {
    this.subMenuArrow.nextElementSibling.classList.remove('list-links__sub-links_is-visible');
    this.subMenuArrow.innerText = 'keyboard_arrow_down';
  }
  
}
export default SubLinks;




