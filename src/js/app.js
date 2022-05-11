import webp from './lib/webp.js';
import burger from './lib/burger.js';
import moveElement from './lib/moveElement.js';
import select from './modules/select.js';
import slider from './lib/slider.js';
import tabs from './modules/tabs.js';
import animateImage from './modules/animate-image.js';
import accoridon from './lib/accordion.js';
import pageScrollEvents from './lib/pageScrollEvents.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  webp();
  burger();
  moveElement(601, '.wrapp-btn', '.btn-elem');
  slider();
  select('.header-best__select-btn', '.header-best__select-item');
  tabs();
  animateImage();
  accoridon(425);
  pageScrollEvents();
});