const $bulletListExpandableArrow = document.querySelector('.bullet-list-expandable span');
const $bulletListExpandableDropdown = document.querySelector('.bullet-list-expandable__dropdown');
$bulletListExpandableArrow.addEventListener('click', expandableListHandler);
function expandableListHandler() {
 $bulletListExpandableDropdown.classList.toggle('show');
 if ($bulletListExpandableArrow.innerHTML === 'keyboard_arrow_down') {
  $bulletListExpandableArrow.innerHTML = 'keyboard_arrow_up';
 }
 else if ($bulletListExpandableArrow.innerHTML === 'keyboard_arrow_up') {
  $bulletListExpandableArrow.innerHTML = 'keyboard_arrow_down';
 }
}