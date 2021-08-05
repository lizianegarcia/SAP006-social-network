/* eslint-disable import/no-cycle */
import firebase from '../../services/firebase.js';
import { changePage } from '../../router.js';

export const logout = () => {
  firebase.signOut();
  changePage('/login');
};
