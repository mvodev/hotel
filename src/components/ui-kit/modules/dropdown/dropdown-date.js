import './fsd-datepicker.js';
class DropdownDate {
  constructor(rootElem) {
    this.rootElem = rootElem;
    this._getElems();
    this._init();
    this._bindEvents();
  }
  _getElems() {
    this.startInput = this.rootElem.querySelectorAll(".dropdown__input")[0];
    this.endInput = this.rootElem.querySelectorAll(".dropdown__input")[1];
    this.$dpInput = $(this.startInput);
    this.$endInput = $(this.endInput);
    this.arrows = this.rootElem.querySelectorAll('.dropdown__arrow');
    this.startDropdownArrow = this.arrows[0];
    this.endDropdownArrow = this.arrows[1];
  }
  _bindEvents() {
    this.startDropdownArrow.addEventListener('click', this._handlerStartArrowDropdown.bind(this));
    this.endDropdownArrow.addEventListener('click', this._handlerEndArrowDropdown.bind(this));
    this.endInput.addEventListener('click', this._handlerEndInputDropdown.bind(this));
  }

  _init() {
    this.$dpInput.
    fsdDatepicker({
      applyButton: true,
      clearButton: true, 
      range: true,
      multipleDatesSeparator: '     ',
      onSelect: function (fd, d, picker) {
        const $leftDatepicker = picker.$el;
        const $rightDatepicker = picker.$el.parent().parent().children().last().children().first();
        $leftDatepicker.val(fd.split('     ')[0]);
        $rightDatepicker.val(fd.split('     ')[1]);
        if (fd.length === 0) {
          $rightDatepicker.val('');
        }
      }
    });
  }
  _handlerStartArrowDropdown() {
    this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
  }
  _handlerEndArrowDropdown() {
    this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
  }
  _handlerEndInputDropdown(){
    this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
  }
}
export default DropdownDate;