const likeButtons = document.querySelectorAll('.button_like');
likeButtons.forEach(elem => elem.addEventListener('click', likeClickListener));
function likeClickListener(event) {
 if (event.target.className === '') {
  if (event.target.parentElement.classList.contains('is-liked')) {
   event.target.innerText--;
   event.target.parentElement.childNodes[0].innerText = 'favorite_border';
   event.target.parentElement.classList.remove('is-liked');
  }
  else {
   event.target.innerText++;
   event.target.parentElement.classList.add('is-liked');
   event.target.parentElement.childNodes[0].innerText = 'favorite';
  }
 }
 else if (event.target.className == 'button_like-heart') {
  if (event.target.parentElement.classList.contains('is-liked')) {
   event.target.parentElement.childNodes[1].innerText--;
   event.target.parentElement.childNodes[0].innerText = 'favorite_border';
   event.target.parentElement.classList.remove('is-liked');
  }
  else {
   event.target.parentElement.childNodes[1].innerText++;
   event.target.parentElement.classList.add('button-like_is-liked');
   event.target.parentElement.childNodes[0].innerText = 'favorite';
  }
 }
}