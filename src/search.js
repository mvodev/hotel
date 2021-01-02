import './styles/search.scss';
import './components/UIKit/modules/dropdown/fsdDatepicker.js';
import './components/UIKit/modules/button/starRating.js';
import 'ion-rangeslider';
import './components/UIKit/modules/dropdown/dropDownGuests.js';
import './components/UIKit/modules/dropdown/dropDownRoom.js';
import './components/UIKit/modules/list/expandableCL.js';
import './components/UIKit/modules/burger/burger.js';
$('.dropdown-input__filter-input-field').fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
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
