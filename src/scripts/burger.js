$(document).ready(function () {
 $('.header-login-nav__burger-label').click(function(event){
  $('.header-login-nav__burger-label,.header-login-nav,.header-login-nav__nav').toggleClass('active');
 });

 $('.header-login__burger-label').click(function (event) {
  $('.header-login__burger-label,.header-login,.header-login__nav').toggleClass('active');
 });
});