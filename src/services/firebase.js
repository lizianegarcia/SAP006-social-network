import { changePage } from '../routes/changePage.js';

/* eslint-disable no-alert */
const getUser = () => firebase.auth().currentUser;

const updateUser = async (name) => {
  const user = await getUser();
  user.updateProfile({
    displayName: name,
  });
};

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      changePage('/');
      console.log(result);
    }).catch((error) => {
      alert('Falha de Registro');
      console.log(error);
    });
};

const signUpWithGoogle = () => {
  const providerSignUp = new firebase.auth.GoogleAuthProvider();
  providerSignUp.addScope('profile');
  providerSignUp.addScope('email');
  return firebase.auth().signInWithPopup(providerSignUp)
    .then((result) => {
      changePage('/');
      console.log(result);
    }).catch((error) => {
      alert('Falha de Registro');
      console.log(error);
    });
};

const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

const signUp = async (name, email, password) => {
  const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
  updateUser(name);
  return user;
};

const signOut = () => firebase.auth().signOut();

// const verificationEmail = () => {
//   firebase.auth().currentUser.sendEmailVerification()
//     .then(() => {
//       console.log('Email verification sent!');
//       // redirecting the user to the profile page once everything is done correctly
//       changePage('/login');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

const forgotYourPassword = (email) => {
  const passwordReset = firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert('E-mail enviado com sucesso!');
    })
    .catch((error) => {
      alert('Falha de Login');
      console.log(error);
    });
  return passwordReset;
};

export default {
  getUser,
  updateUser,
  signInWithGoogle,
  signUpWithGoogle,
  signIn,
  signUp,
  signOut,
  forgotYourPassword,
};
