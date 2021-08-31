import { printPage } from './printPage.js';
import firebase from '../services/firebase.js';

// clica para alterar a pagina
export const initiate = () => {
  window.addEventListener('popstate', () => {
    printPage(window.location.pathname);
  });
  // clica para dar reload na pagina
  window.addEventListener('load', async () => {
    await firebase.waitAuthState();
    printPage(window.location.pathname);
  });
};
