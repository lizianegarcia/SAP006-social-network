import { changePage } from '../../routes/changePage.js';
import firebase from '../../services/firebase.js';

export const signUp = async (page, name, email, password) => {
  const signUpError = page.querySelector('#sign-up-error');
  signUpError.style.display = 'none';

  try {
    await firebase.signUp(name, email, password);
    changePage('/');
  } catch (error) {
    console.error(error);

    if (error.code === 'auth/email-already-in-use') {
      signUpError.innerHTML = 'Ops, e-mail já registrado!';
    } else {
      signUpError.innerHTML = 'Ops, não foi possível criar um usuário!';
      signUpError.setAttribute('style', 'color: red');
    }

    signUpError.style.display = 'block';
  }
};
