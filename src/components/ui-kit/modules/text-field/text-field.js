import 'cleave.js';
document.querySelectorAll('.js-text-field__input-date').forEach(function (elem) {
 new Cleave(elem, {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
 });
});