import './styles/UIKitStyles.scss';
import '../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css'
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
//import '../node_modules/air-datepicker/dist/js/datepicker.js';
import '../src/scripts/fsdDatepicker';
import './components/UIKit/modules/button/starRating.js';
import './components/UIKit/modules/button/likeRating.js';
import 'ion-rangeslider';
import 'cleave.js'
import './components/UIKit/modules/dropdown/dropDownGuests';
import './components/UIKit/modules/dropdown/dropDownRoom';
import './components/UIKit/modules/list/expandableCL.js';
import './components/UIKit/modules/burger/burger.js';
var cleave = new Cleave('.text-field_input-date', {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
});
$('.dropdown-input__date-input-field').fsdDatepicker({ todayButton: true, clearButton: true });
$('.dropdown-input__filter-input-field').fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
$('.cards__right-column-datepicker').fsdDatepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });
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
// dropdown additional options for range dropdown:
// range: true, dateFormat: 'dd M',inline: true