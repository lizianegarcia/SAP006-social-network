
// const logInEmail = document.getElementById('sign-in-email');
// const logInPassword = document.getElementById('password');
// const logInButton = document.getElementById('entrar');

// // const signUpName = document.getElementById('sing-up-name');
// const inputEmail = document.getElementById('sign-up-email');
// const inputPassword = document.getElementById('password2');
// const register = document.getElementById('register')
// const auth = firebase.auth();

// // Add login Event
// logInButton.addEventListener('click', () => {
//   // Get email and password
//   const registeredEmail = logInEmail.value;
//   const registeredPassword = logInPassword.value;

//   const promise = auth.signInWithEmailAndPassword(registeredEmail, registeredPassword);

//   promise.catch((error) => console.log(error.message));
// });

// // Add Sign Up Event
// register.addEventListener('click', () => {
//   // Get email and password
//   const registeredEmail = inputEmail.value;
//   const registeredPassword = inputPassword.value;
//   // Create new user
//   const promise = auth.createUserWithEmailAndPassword(registeredEmail, registeredPassword);
//   promise.catch((error) => console.log(error.message));
// });

// // Add a realtime listener
// auth.onAuthStateChanged((firebaseUser) => {
//   if (firebaseUser) {
//     console.log(firebaseUser);
//   } else {
//     console.log('not logged in');
//   }
// });
