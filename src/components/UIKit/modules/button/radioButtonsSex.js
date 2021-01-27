const radioButtons = document.querySelectorAll('.button-radio__checkbox-input');
radioButtons.forEach(function (elem) {
 elem.addEventListener('click', radioButtonsHandler);
});
function radioButtonsHandler(event) {
 if (event.target.checked) {
  if (event.srcElement.parentElement.innerText === "Женщина") {
   if (event.srcElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.checked){
    event.srcElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.checked=false;
   }
  }
  else{
   if (event.srcElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.checked) {
    event.srcElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.checked = false;
   }
  }
 }
 else{
  if (event.srcElement.parentElement.innerText === "Женщина") {
    event.srcElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.checked = true;
  }
  else{
   event.srcElement.parentElement.parentElement.parentElement.lastChild.firstChild.firstChild.checked = true;
  }
 }
}