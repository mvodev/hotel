import Pagination from '@/components/pagination/pagination-class.js';

const paginations = document.querySelectorAll('.js-pagination');
paginations.forEach(elem => new Pagination(elem));