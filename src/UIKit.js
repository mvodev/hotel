import './styles/UIKitStyles.scss';
import '../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css'
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/air-datepicker/dist/js/datepicker.min.js';
import '../src/scripts/dropDownGuests.js'
import '../src/scripts/dropDownRoom.js'
import '../src/scripts/starRating.js'
import '../src/scripts/likeRating.js'
import 'ion-rangeslider'
import 'cleave.js'
var cleave = new Cleave('.txtField-input-date', {
 date: true,
 delimiter: '.',
 datePattern: ['d', 'm', 'Y']
});
//import 'air-datepicker'
$('.datepicker-here').datepicker({ todayButton: true, clearButton: true });
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
