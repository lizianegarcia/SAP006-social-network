/* eslint-disable import/no-cycle */
import { changePage } from '../../routes/changePage.js';
import firebase from '../../services/firebase.js';

export const logout = () => {
  firebase.signOut();
  changePage('/login');
};
