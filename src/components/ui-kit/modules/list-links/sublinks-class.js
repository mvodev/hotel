class SubLinks{
 constructor(arrow){
  this.subMenuArrow = arrow;
  this._bindEvents();
 }
 _bindEvents(){
  this.subMenuArrow.addEventListener('click',this._handleMenuArrow.bind(this));
 }
 _handleMenuArrow(e){
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
}
export default SubLinks;