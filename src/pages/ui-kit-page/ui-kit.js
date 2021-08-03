import './ui-kit-styles.scss';
import '../../styles/style.scss';

import 'cleave.js';
import 'slick-carousel';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../node_modules/slick-carousel/slick/slick-theme.scss';
import 'ion-rangeslider';


import '../../components/ui-kit/modules/dropdown/fsd-datepicker.js';
import '../../components/ui-kit/modules/text-field/text-field.js';
import '../../components/ui-kit/modules/dropdown/dropdown.js';
import '../../components/ui-kit/modules/button-rate/star-rating.js';
import '../../components/ui-kit/modules/button-like/like-rating.js';
import '../../components/ui-kit/modules/list/expandable-cl.js';
import '../../components/ui-kit/modules/burger/burger.js';
import '../../components/ui-kit/modules/room-card/room-card.js';
import '../../components/ui-kit/modules/range-slider/range-slider.js';
import '../../components/ui-kit/modules/list-links/sublinks.js';

$('.js-cards__datepicker').fsdDatepicker({ applyButton: true, clearButton: true, range: true, dateFormat: 'dd M' });