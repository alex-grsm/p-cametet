// import { getHeaderHeight } from './functions/header-height';
import langDropDown from './components/langdropdown';
import superMenu from './components/superMenu';
import search from './components/search';
import heroSwiper from './components/heroswiper';
import productSwiper from './components/productswiper';
import brandSwiper from './components/brandswiper';
import scrolling from './components/scrolling';
import showMoreBtn from './components/show-more';
import mobileMenu from './components/mobmenu';
import './components/validation';
import './components/modals';




window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // getHeaderHeight();
  langDropDown();
  superMenu();
  search();
  heroSwiper();
  productSwiper();
  brandSwiper();
  scrolling('.pageup');
  showMoreBtn();
  mobileMenu();

  /** Current year */
  document.querySelector('#year').innerHTML = new Date().getFullYear();
});
