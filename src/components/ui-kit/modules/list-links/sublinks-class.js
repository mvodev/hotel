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
 }
}
export default SubLinks;