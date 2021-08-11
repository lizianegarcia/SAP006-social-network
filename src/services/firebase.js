import { changePage } from '../routes/changePage.js';

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

const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

const signUp = async (name, email, password) => {
  const user = await firebase.auth()
    .createUserWithEmailAndPassword(email, password);
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

// FEED

export const createPost = (textPost) => {
  const user = firebase.auth().currentUser;
  const post = {
    text: textPost,
    userId: user.uid,
    userName: user.displayName,
    userEmail: user.email,
    likes: 0,
    comments: [],
  };

  const postsCollection = firebase
    .firestore()
    .collection('posts');
  postsCollection.add(post).then(() => {
    document.querySelector('#postsList').value = '';
    loadPosts();
  });
};

export const addPosts = (post) => {
  console.log(post);
  const postTemplate = `
   <li id="${post.data().userId}" class="post-container">
    <div class= "user-profile">
      <img src="http://placehold.it/100x100" class="user-avatar" alt="User Photo">
      <p class="user-name">@${post.data().userName}</p>
    </div>
    <article class="post-field">
      <p class="user-post">${post.data().text}</p>
      
    </article>
    <div class="manage-post">
      <button id="like-btn" class="manage-post-btn"><i class="fas fa-heart" id="heart"></i></button>
      <button id="edit-btn" class="manage-post-btn">Editar</button>
      <button id="delete-btn" class="manage-post-btn">Deletar</button>
    </div>
   </li>
   `;
  document.querySelector('#postsList').innerHTML += postTemplate;
};

export const loadPosts = () => {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.get().then((snap) => {
    console.log(snap);
    document.querySelector('.loading-posts').innerHTML = '';
    snap.forEach((post) => {
      addPosts(post);
    });
  });
};

export const deletePost = (postId) => {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.doc(postId).delete().then((doc) => {
    console.log('Deleted!!!!!');
    loadPosts();
  });
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
