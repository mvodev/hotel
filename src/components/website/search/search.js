import './search.scss';
import '../../../styles/style.scss';
import 'ion-rangeslider';
import '../../../../node_modules/slick-carousel/slick/slick.js';
import '../../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../../node_modules/slick-carousel/slick/slick-theme.scss';
import '../../ui-kit/modules/dropdown/dropdown.js';
import '../../ui-kit/modules/button/star-rating.js';
import '../../ui-kit/modules/list/expandable-cl.js';
import '../../ui-kit/modules/burger/burger.js';
import '../../ui-kit/modules/room-card/room-card.js';
$('.js-range-slider__input').ionRangeSlider({
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
    $('.js-range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  },
  onStart: function (data) {
    let minValue = ''
    let maxValue = ''
    if (data.from >= 1000) minValue = Math.floor(data.from / 1000) + ' 000';
    else minValue = data.from;
    if (data.to >= 1000) maxValue = Math.floor(data.to / 1000) + ' 000';
    else maxValue = data.to;
    $('.js-range-slider__label-wrapper p:nth-child(2)').
      html(minValue + '<span class="rub">i</span> - ' + maxValue + '<span class="rub">i</span>');
  }
});
