import { printPage } from './printPage.js';

export const initiate = () => {
  window.addEventListener('popstate', () => {
    printPage(window.location.pathname);
  });

  window.addEventListener('load', () => {
    printPage(window.location.pathname);
  });
};
