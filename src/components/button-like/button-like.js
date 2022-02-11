import LikeRating from '../button-like/button-like-class.js';

const likeButtons = document.querySelectorAll('.js-button-like');
likeButtons.forEach(elem => new LikeRating(elem));