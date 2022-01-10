import autobind from 'autobind-decorator';
import './fsd-datepicker.js';

class DropdownFilter {

  constructor(rootElem) {
    this.rootElem = rootElem;
    this._getElems();
    this._init();
    this._bindEvents();
  }

  _getElems() {
    this.inputWrapper = this.rootElem.querySelector('.dropdown__input-wrapper');
    this.arrow = this.rootElem.querySelector('.dropdown__arrow');
  }

  _bindEvents() {
    this.inputWrapper.addEventListener('click', this._handlerArrowDropdown);
  }

  _init() {
    this.$dpInput = $('.dropdown_filter input');
    this.$dpInput.fsdDatepicker({
      applyButton: true,
      clearButton: true,
      range: true,
      dateFormat: 'dd M',
      onSelect: function (fd, d, picker) {
        picker.$el.val(fd);
        if (fd.length === 0) {
          picker.$el.val('');
        }
      }
    });
  }

  @autobind
  _handlerArrowDropdown() {
    this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
  }
  
}
export default DropdownFilter;