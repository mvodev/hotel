import './styles/details.scss';
import './components/UIKit/modules/button/likeRating.js';
import './components/UIKit/modules/dropdown/fsdDatepicker.js';
import './components/UIKit/modules/list/expandableCL.js';
import './components/UIKit/modules/burger/burger.js';
import 'cleave.js';

$('#d3').fsdDatepicker({ todayButton: true, clearButton: true });
$('#d4').fsdDatepicker({ todayButton: true, clearButton: true });
document.querySelectorAll('.dropdown-input__date-input-field').forEach(function (elem) {
 new Cleave(elem, {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
 });
});