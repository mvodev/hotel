import './styles/ui-kit-styles.scss';
import 'ion-rangeslider';
import './components/ui-kit/modules/dropdown/fsd-datepicker.js';
import './components/ui-kit/modules/text-field/text-field.js';
import './components/ui-kit/modules/dropdown/dropdown.js';
import './components/ui-kit/modules/button/star-rating.js';
import './components/ui-kit/modules/button/like-rating.js';
import './components/ui-kit/modules/list/expandable-cl.js';
import './components/ui-kit/modules/burger/burger.js';
import './components/ui-kit/modules/button/radio-buttons-sex.js';
$('.js-cards__right-column-datepicker').fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
$('.js-range-slider__input').ionRangeSlider({
  type: "double",
  min: 0,
  max: 20000,
  from: 5000,
  to: 10000,
  step: 1000,
  onChange: function (data) {
    let minValue = ''
    let maxValue = ''
    if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
    else minValue = data.from;
    if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
    else maxValue = data.to;
    $('.js-range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  },
  onStart: function (data) {
    let minValue = ''
    let maxValue = ''
    if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
    else minValue = data.from;
    if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
    else maxValue = data.to;
    $('.js-range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  }
});
// dropdown additional options for range dropdown:
// range: true, dateFormat: 'dd M',inline: true