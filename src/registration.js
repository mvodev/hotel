import './styles/registration.scss';
import 'cleave.js';
import './components/UIKit/modules/dropdown/fsdDatepicker.js';
import './components/UIKit/modules/button/radioButtonsSex.js';
$('.text-field__input-date').fsdDatepicker({ todayButton: true, clearButton: true });
var cleave = new Cleave('.text-field__input-date', {
 date: true,
 delimiter: '.',
 datePattern: ['d', 'm', 'Y']
});
