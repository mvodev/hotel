const likeButtons = document.querySelectorAll('.button-like');
likeButtons.forEach(elem => elem.addEventListener('click', likeClickListener));
function likeClickListener(event) {
 if (event.target.className === '') {
  event.target.innerText++;
 }
 else if (event.target.className == 'material-icons') {
  event.target.parentElement.childNodes[1].innerText++;
 }
}