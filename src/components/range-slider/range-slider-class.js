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
        type: "double",
        min: 0,
        max: 20000,
        from: 5000,
        to: 10000,
        step: 1000,
        onChange: function (data) {
          let minValue = ''
          let maxValue = ''
          if (data.from >= 1000) minValue = `${Math.floor(data.from / 1000)}000`;
          else minValue = data.from;
          if (data.to >= 1000) maxValue = `${Math.floor(data.to / 1000)}000`;
          else maxValue = data.to;
          $('.js-range-slider__label').
            html(`${minValue}<span class="rub">i</span> - ${maxValue}<span class="rub">i</span>`);
        },
        onStart: function (data) {
          let minValue = ''
          let maxValue = ''
          if (data.from >= 1000) minValue = `${Math.floor(data.from / 1000)}000`;
          else minValue = data.from;
          if (data.to >= 1000) maxValue = `${Math.floor(data.to / 1000)}000`;
          else maxValue = data.to;
          $('.js-range-slider__label').
            html(`${minValue}<span class="rub">i</span> - ${maxValue}<span class="rub">i</span>`);
        }
      });
  }

}
export default RangeSlider;