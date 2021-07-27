import LikeRating from '../button-like/like-rating-class.js';
const likeButtons = document.querySelectorAll('.js-button-like');
likeButtons.forEach(elem => new LikeRating(elem));