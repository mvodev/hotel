import './fsd-datepicker.js';
class DropdownDate {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this.getElems();
  this.init();
  this.bindEvents();
 }
 getElems() {
  this.startInput = this.rootElem.querySelectorAll(".dropdown__input")[0];
  this.endInput = this.rootElem.querySelectorAll(".dropdown__input")[1];
  this.$dpInput = $(this.startInput);
  this.$endInput = $(this.endInput);
  this.arrows = this.rootElem.querySelectorAll('.dropdown__arrow');
  this.startDropdownArrow = this.arrows[0];
  this.endDropdownArrow = this.arrows[1];
 }
 bindEvents() {
  this.startDropdownArrow.addEventListener('click', this.handlerStartArrowDropdown.bind(this));
  this.endDropdownArrow.addEventListener('click', this.handlerEndArrowDropdown.bind(this));
 }

 init() {
  this.$dpInput.fsdDatepicker({
   todayButton: true, clearButton: true, range: true,
   multipleDatesSeparator: '     ',
   onSelect: function (fd, d, picker) {
    picker.$el.val(fd.split('     ')[0]);
    picker.$el.parent().parent().children().last().children().first().val(fd.split('     ')[1]);
    if (fd.length === 0) {
     picker.$el.parent().parent().children().last().children().first().val('');
    }
   }
  });
 }
 handlerStartArrowDropdown() {
  this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
 }
 handlerEndArrowDropdown() {
  this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
 }
}
export default DropdownDate;