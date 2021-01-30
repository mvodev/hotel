const $headerBurgerInput = $('.js-header-burger__input');
$headerBurgerInput.click(function (event) {
 $('.header-burger__label,.header-login-nav,.header-login-nav__nav,.header-login,.header-login__nav,.header-login__wrapper').toggleClass('active');
});
const $headerLoginBurgerInput = $('.header-login__burger-input');
$headerLoginBurgerInput.click(function (event) {
 $('.header-login__burger-label,.header-login,.header-login__nav').toggleClass('active');
});