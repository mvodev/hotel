import './ui-kit-styles.scss';
import '../../styles/style.scss';

import 'cleave.js';
import 'slick-carousel';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../node_modules/slick-carousel/slick/slick-theme.scss';
import 'ion-rangeslider';


import '@/components/text-field/text-field.js';
import '@/components/dropdown/fsd-datepicker.js';
import '@/components/dropdown/dropdown.js';
import '@/components/button-rate/star-rating.js';
import '@/components/button-like/like-rating.js';
import '@/components/list/expandable-cl.js';
import '@/components/burger/burger.js';
import '@/components/room-card/room-card.js';
import '@/components/range-slider/range-slider.js';
import '@/components/list-links/sublinks.js';

$('.js-cards__datepicker').fsdDatepicker({ applyButton: true, clearButton: true, range: true, dateFormat: 'dd M' });