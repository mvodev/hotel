const $bulletListExpandableImg = document.querySelector('.bullet-list-expandable img');
const $bulletListExpandableDropdown = document.querySelector('.bullet-list-expandable__dropdown');
$bulletListExpandableImg.addEventListener('click', expandableListHandler);
function expandableListHandler() {
 $bulletListExpandableDropdown.classList.toggle('show');
}