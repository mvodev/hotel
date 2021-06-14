import LikeRating from './like-rating-class.js';
const likeButtons = document.querySelectorAll('.js-button-like');
likeButtons.forEach(elem => new LikeRating(elem));