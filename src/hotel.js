import './styles/landing.scss';
import './styles/registration.scss';
import './styles/search.scss';
import './styles/details.scss';
import './styles/signin.scss';
import '../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css'
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/air-datepicker/dist/js/datepicker.js';
import './scripts/starRating.js';
import './scripts/likeRating.js';
import 'ion-rangeslider';
import './scripts/dropDownGuests.js';
import './scripts/dropDownRoom.js';
import './scripts/expandableCL.js';
import './scripts/burger.js';
$('.dropdown-input__date_input-field').datepicker({ todayButton: true, clearButton: true });
$('.dropdown-input__filter_input-field').datepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
$('.range-slider__input').ionRangeSlider({
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
    $('.range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  },
  onStart: function (data) {
    let minValue = ''
    let maxValue = ''
    if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
    else minValue = data.from;
    if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
    else maxValue = data.to;
    $('.range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  }
});
// var cleave = new Cleave('.text-field_input-date', {
//   date: true,
//   delimiter: '.',
//   datePattern: ['d', 'm', 'Y']
// });
// $('.dropdown-input__date_input-field').datepicker({ todayButton: true, clearButton: true });
// $('.dropdown-input__filter_input-field').datepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
// $('.cards__right-column_datepicker').datepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
// $('.range-slider__input').ionRangeSlider({
//   type: "double",
//   min: 0,
//   max: 20000,
//   from: 5000,
//   to: 10000,
//   step: 1000,
//   onChange: function (data) {
//     let minValue = ''
//     let maxValue = ''
//     if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
//     else minValue = data.from;
//     if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
//     else maxValue = data.to;
//     $('.range-slider__label-wrapper p:nth-child(2)').
//       html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
//   },
//   onStart: function (data) {
//     let minValue = ''
//     let maxValue = ''
//     if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
//     else minValue = data.from;
//     if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
//     else maxValue = data.to;
//     $('.range-slider__label-wrapper p:nth-child(2)').
//       html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
//   }
// });