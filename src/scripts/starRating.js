const rateButton = document.querySelectorAll('.button-rate label');
rateButton.forEach(elem => elem.addEventListener('click', rateClickListener)
);
function rateClickListener(event) {
 let rateNumber = event.target.title.charAt(0);
 for (let i = 0; i < rateNumber; i++) {
  rateButton[i].innerHTML = '';
  rateButton[i].innerHTML = 'star';
 }
 for (let i = rateNumber; i < 5; i++) {
  rateButton[i].innerHTML = '';
  rateButton[i].innerHTML = 'star_border';
 }
}