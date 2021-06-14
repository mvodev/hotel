class RoomCardSlider {
  constructor(rootElem) {
  this.rootElem = rootElem;
  this._initSlider();
  }
_withArrows() {
  if ($(this.rootElem).hasClass('room-card__slider_with-arrow')) {
    return true;
  }
  return false;
}
_initSlider() {
  $(this.rootElem).slick({
    infinite: true,
    dots: true,
    dotsClass: 'room-card__slider-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: false,
    arrows: this._withArrows(),
    prevArrow:
    '<button class="room-card__arrow room-card__arrow-left">expand_more</button>',
    nextArrow:
    '<button class="room-card__arrow room-card__arrow-right">expand_more</button>',
  });
}
}
export default RoomCardSlider;