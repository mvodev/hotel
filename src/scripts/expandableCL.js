const $bulletListExpandableArrow = document.querySelectorAll('.bullet-list-expandable span');
const $bulletListExpandableDropdown = document.querySelector('.bullet-list-expandable__dropdown');
$bulletListExpandableArrow.forEach(elem => elem.addEventListener('click', expandableListHandler));
function expandableListHandler(event) {
 event.target.parentNode.parentNode.childNodes[1].classList.toggle('bullet-list_show');
 if ($bulletListExpandableArrow.innerHTML === 'keyboard_arrow_down') {
  $bulletListExpandableArrow.innerHTML = 'keyboard_arrow_up';
 }
 else if ($bulletListExpandableArrow.innerHTML === 'keyboard_arrow_up') {
  $bulletListExpandableArrow.innerHTML = 'keyboard_arrow_down';
 }
}