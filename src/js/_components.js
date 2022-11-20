// import { getHeaderHeight } from './functions/header-height';
import langDropDown from './components/langdropdown';
import superMenu from './components/superMenu';
import search from './components/search';
import heroSwiper from './components/heroswiper';
import productЫwiper from './components/productswiper';
import brandSwiper from './components/brandswiper';
import scrolling from './components/scrolling';
import showMoreBtn from './components/show-more';
import './components/validation';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // getHeaderHeight();
  langDropDown();
  superMenu();
  search();
  heroSwiper();
  productЫwiper();
  brandSwiper();
  scrolling('.pageup');
  showMoreBtn();

  /** Current year */
  document.querySelector('#year').innerHTML = new Date().getFullYear();
});
