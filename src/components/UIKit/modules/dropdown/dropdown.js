import DropdownCounter from './dropdown-counter/dropdownCounter';
document.querySelectorAll('.js-dropdown-counter').forEach(elem => {
 new DropdownCounter(elem);
})