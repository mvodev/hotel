import './ui-kit-styles.scss';
import '../../../styles/style.scss';

import 'cleave.js';
import '../../../../node_modules/slick-carousel/slick/slick.js';
import '../../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../../node_modules/slick-carousel/slick/slick-theme.scss';
import 'ion-rangeslider';

import '../modules/dropdown/fsd-datepicker.js';
import '../modules/text-field/text-field.js';
import '../modules/dropdown/dropdown.js';
import '../modules/button/star-rating.js';
import '../modules/button/like-rating.js';
import '../modules/list/expandable-cl.js';
import '../modules/burger/burger.js';
import '../modules/room-card/room-card.js';
import '../modules/range-slider/range-slider.js';

$('.js-cards__datepicker').fsdDatepicker({ applyButton: true, clearButton: true, range: true, dateFormat: 'dd M' });