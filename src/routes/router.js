import { printPage } from './printPage.js';
import firebase from '../services/firebase.js';

export const initiate = () => {
  window.addEventListener('popstate', () => {
    printPage(window.location.pathname);
  });

  window.addEventListener('load', async () => {
    await firebase.waitAuthState();
    printPage(window.location.pathname);
  });
};
