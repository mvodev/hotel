class StarRating {

  constructor(starRating) {
    this.starRating = starRating;
    this._getElems();
    this._bindEvents();
  }

  _getElems() {
    this.starRatingLabels = this.starRating.querySelectorAll('.js-button-rate__star');
  }

  _bindEvents() {
    this.starRatingLabels.forEach(elem => elem.addEventListener('click', this._handleRateButtonClick.bind(this)));
  }

  _handleRateButtonClick(event) {
    let rateNumberUserChoice = event.target.title.charAt(0);
    for (let i = 0; i < rateNumberUserChoice; i++) {
      this.starRatingLabels[i].innerHTML = 'star';
    }
    for (let j = rateNumberUserChoice; j < 5; j++) {
      this.starRatingLabels[j].innerHTML = 'star_border';
    }
  }
  
}
export default StarRating;