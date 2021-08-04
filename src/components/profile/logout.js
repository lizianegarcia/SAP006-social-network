/* eslint-disable import/no-cycle */
import auth from '../../services/auth.js';
import { changePage } from '../../router.js';

export const logout = () => {
  auth.logout();
  changePage('/login');
};
