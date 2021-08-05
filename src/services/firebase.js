/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
import { changePage } from '../router.js';

const getUser = () => firebase.auth().currentUser;

const updateUser = (name) => {
  const user = getUser();
  user.updateProfile({
    displayName: name,
  });
};

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      changePage('/');
      console.log(result);
    }).catch((error) => {
      alert('Falha de Registro');
      console.log(error);
    });
};

// export const signUpWithGoogle = () => {
//   const providerSignUp = new firebase.auth.GoogleAuthProvider();
//   providerSignUp.addScope('profile');
//   providerSignUp.addScope('email');
//   firebase.auth().signInWithPopup(providerSignUp)
//     .then((result) => {
//       changePage('/');
//       console.log(result);
//     }).catch((error) => {
//       alert('Falha de Registro');
//       console.log(error);
//     });
//   return providerSignUp;
// };

const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

const signUp = (name, email, password) => {
  const user = firebase.auth().createUserWithEmailAndPassword(email, password);
  updateUser(name);
  return user;
};

const signOut = () => firebase.auth().signOut();

export default {
  getUser, updateUser, signInWithGoogle, signIn, signUp, signOut,
};
