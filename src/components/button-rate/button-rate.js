import StarRating from './button-rate-class.js';

const rateButtons = document.querySelectorAll('.js-button-rate');
rateButtons.forEach(elem => new StarRating(elem));
