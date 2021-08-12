import { changePage } from '../routes/changePage.js';

const waitAuthState = () => new Promise((resolve) => firebase.auth().onAuthStateChanged(resolve));

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

const signOut = () => firebase.auth().signOut();

const verificationEmail = () => {
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      alert('Email verification sent!');
    })
    .catch((error) => {
      console.error(error);
    });
};

const signUp = async (name, email, password) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
  await updateUser(name);
  verificationEmail();
  await signOut();
};

const forgotYourPassword = (email) => firebase.auth().sendPasswordResetEmail(email);
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
        <div class="user-photo-container">
          <img src="http://placehold.it/100x100" alt="User Photo" class="user-feed-photo">
        </div>
        <article class="post-field">
          <p class="user-name">@${post.data().userName}</p>
          <p class="user-post">${post.data().text}</p>
        </article>
      </li>
      <section class="manage-post">
          <button id="like-btn" class="manage-post-btn"><i class="fas fa-heart" id="heart"></i></button>
          <button id="edit-btn" class="manage-post-btn">Editar</button>
          <button id="delete-btn" class="manage-post-btn">Excluir</button>
      </section>
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
  waitAuthState,
  getUser,
  updateUser,
  signInWithGoogle,
  signUpWithGoogle,
  signIn,
  signUp,
  signOut,
  forgotYourPassword,
};
