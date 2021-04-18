jQuery(function(){
 const $headerBurgerInput = $('.js-header-burger');
 $headerBurgerInput.click(function (event) {
  $('.header-burger,.js-header-nav').toggleClass('burger-active');
 });
})