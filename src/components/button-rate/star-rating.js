import StarRating from './star-rating-class.js';
const rateButtons = document.querySelectorAll('.js-button-rate');
rateButtons.forEach(elem => new StarRating(elem));
