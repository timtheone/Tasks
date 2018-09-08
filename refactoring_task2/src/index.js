require('./sass/main.scss');
import showTabs from './js/main.js';

const listParent = document.querySelector('.tab-navs__list');

listParent.addEventListener("click", showTabs, false);