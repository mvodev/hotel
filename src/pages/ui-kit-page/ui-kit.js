import './ui-kit-styles.scss';
import '../../styles/style.scss';

import 'cleave.js';

import '@/components/text-field/text-field.js';
import '@/components/dropdown/dropdown.js';
import '@/components/button-rate/star-rating.js';
import '@/components/comment/comment.js';
import '@/components/list/expandable-cl.js';
import '@/pages/headers-and-footers/headers-and-footers.js';
import '@/components/room-card/room-card.js';
import '@/components/range-slider/range-slider.js';
import '@/components/list-links/sublinks.js';

$('.js-cards__datepicker').fsdDatepicker({ applyButton: true, clearButton: true, range: true, dateFormat: 'dd M' });