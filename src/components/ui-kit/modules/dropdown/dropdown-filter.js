import './fsd-datepicker.js';
class DropdownFilter {
  constructor(rootElem) {
    this.rootElem = rootElem;
    this.getElems();
    this.init();
    this.bindEvents();
  }
  getElems() {
    this.input = this.rootElem.querySelector(".dropdown__input");
    this.arrow = this.rootElem.querySelector('.dropdown__arrow');
  }
  bindEvents() {
    this.arrow.addEventListener('click', this.handlerArrowDropdown.bind(this));
  }

  init() {
    this.$dpInput = $('.dropdown__filter input');
    this.$dpInput.fsdDatepicker({
      applyButton: true, clearButton: true, range: true, dateFormat: 'dd M',
      onSelect: function (fd, d, picker) {
        picker.$el.val(fd);
        if (fd.length === 0) {
          picker.$el.val('');
        }
      }
    });
  }
  handlerArrowDropdown() {
    this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
  }
}
export default DropdownFilter;