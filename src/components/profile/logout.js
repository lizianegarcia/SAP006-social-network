import auth from '../../services/auth.js';

// eslint-disable-next-line import/no-cycle
import { changePage } from '../../router.js';

export const logout = () => {
  auth.logout();
  changePage('/login');
};
