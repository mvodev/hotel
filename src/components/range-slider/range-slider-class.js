import 'ion-rangeslider';

class RangeSlider {

  constructor(slider) {
    this.slider = slider;
    this._getElems();
    this._init();
  }

  _getElems() {
    this.sliderInput = this.slider.querySelector('.js-range-slider__input');
    this.label = this.slider.querySelector('.js-range-slider__label');
  }

  _init() {
    $(this.sliderInput).
      ionRangeSlider({
        onChange: function (data) {
          $('.js-range-slider__label').
            html(`${data.from}<span class="rub">i</span> - ${data.to}<span class="rub">i</span>`);
        },
        onStart: function (data) {
          $('.js-range-slider__label').
            html(`${data.from}<span class="rub">i</span> - ${data.to}<span class="rub">i</span>`);
        }
      });
  }

}
export default RangeSlider;