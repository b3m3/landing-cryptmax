import webp from './lib/webp.js';
import burger from './lib/burger.js';
import moveElement from './lib/moveElement.js';
import select from './modules/select.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  webp();
  burger();
  moveElement(601, '.wrapp-btn', '.btn-elem');
  select();
});