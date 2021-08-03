import ExpandableCL from './expandable-cl-class.js';
const bulletListExpandable = document.querySelectorAll('.js-bullet-list-expandable');
bulletListExpandable.forEach(elem => new ExpandableCL(elem));