import autobind from 'autobind-decorator';

class LikeRating {

  constructor(likeButton) {
    this.likeButton = likeButton;
    this._getElems();
    this._bindEvents();
  }

  _bindEvents() {
    this.likeButton.addEventListener('click', this._handlelikeButtonClick);
  }

  _getElems() {
    this.heart = this.likeButton.querySelector('.js-button-like__heart');
    this.numberOfLikes = this.likeButton.querySelector('.js-button-like__number');
  }

  @autobind
  _handlelikeButtonClick(event) {
    if (event.target.parentElement.classList.contains('button-like_is-liked')
      || event.target.classList.contains('button-like_is-liked')) {
      this.numberOfLikes.innerText--;
      this.heart.innerText = 'favorite_border';
      this.likeButton.classList.remove('button-like_is-liked');
    }
    else {
      this.numberOfLikes.innerText++;
      this.likeButton.classList.add('button-like_is-liked');
      this.heart.innerText = 'favorite';
    }
  }

}
export default LikeRating;