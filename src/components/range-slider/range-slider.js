import './range-slider-class.js';
import RangeSlider from './range-slider-class.js';

window.addEventListener('load', () => (
  document.querySelectorAll('.js-range-slider').forEach(elem => new RangeSlider(elem))
));

