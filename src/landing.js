import './styles/landing.scss';
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/air-datepicker/dist/js/datepicker.js';
import './components/UIKit/modules/burger/burger.js';
$('dropdown-input__date-input-field').datepicker({ todayButton: true, clearButton: true });
$('#d1').datepicker({ todayButton: true, clearButton: true });
$('#d2').datepicker({ todayButton: true, clearButton: true });
$('.dropdown-input__filter-input-field').datepicker({ todayButton: true, clearButton: true, range: true, dateFormat: 'dd M' });