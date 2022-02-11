import BulletList from './bullet-list-class.js';

const bulletListExpandable = document.querySelectorAll('.js-bullet-list-expandable');
bulletListExpandable.forEach(elem => new BulletList(elem));