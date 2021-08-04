/* eslint-disable import/no-cycle */
import auth from '../../services/auth.js';
import { changePage } from '../../router.js';

export const login = (email) => {
  let hasError = false;
  const emailError = document.getElementById('email-error');
  emailError.style.display = 'none';

  if (!email) {
    emailError.innerHTML = 'Ops, faltou seu email!';
    emailError.style.display = 'block';
    hasError = true;
  }

  // TODO: create firebase and function isUserRegistered
  // const alreadyExists = await firebase.isUserRegistered(email);
  // if(alreadyExists) {
  //   emailError.innerHTML = "E-mail já cadastrado!";
  //   emailError.style.display = "block";
  //   hasError = true;
  // }

  if (!hasError) {
    auth.login(email);
    changePage('/');
  }
};
