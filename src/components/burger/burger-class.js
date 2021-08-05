class Burger {
  constructor(burger) {
    this.burger = burger;
    this._getElems()
    this._bindEvents();
  }
  _getElems() {
    this.nav = this.burger.parentNode.querySelector('.js-header-nav');
  }
  _bindEvents() {
    this.burger.addEventListener('click', this._handleBurgerClick.bind(this));
  }
  _handleBurgerClick(e) {
    this.burger.classList.toggle('burger_is-opened');
    this.nav.classList.toggle('burger_is-opened');
  }
}
export default Burger;