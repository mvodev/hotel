//import Post from './Post'
//import './styles/style.css'
//import './styles/extra.scss'
//import WebpackLogo from './assets/webpack-logo.png'
//const post = new Post('webpack jquery title');
//import './pug/UIKit/test.pug'
import './styles/style.scss';
import '../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css'
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/air-datepicker/dist/js/datepicker.min.js';
import '../src/scripts/dropDownGuests'
import '../src/scripts/dropDownRoom'
import 'cleave.js'
import 'ion-rangeslider'
//import 'air-datepicker'
$('.datepicker-here').datepicker({ todayButton: true, clearButton: true });
var cleave = new Cleave('.txtField-input-date', {
 date: true,
 delimiter: '.',
 datePattern: ['d', 'm', 'Y']
});
$(".range-slider").ionRangeSlider({
 type: "double",
 min: 0,
 max: 266,
 from: 72,
 to: 162,
 onChange: function (data) {
  // Called every time handle position is changed
  console.log(data.from);
  console.log(data.to);
 }
});

