const waitAuthState = () => new Promise((resolve) => firebase.auth().onAuthStateChanged(resolve));

const getUser = () => firebase.auth().currentUser;

const logUser = () => firebase.auth().onAuthStateChanged;

const updateUser = async (name) => {
  const user = await getUser();
  user.updateProfile({
    displayName: name,
  });
};

const signInSignUpWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  await firebase.auth().signInWithPopup(provider);
};

const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

const signOut = () => firebase.auth().signOut();

const verificationEmail = () => firebase.auth().currentUser.sendEmailVerification();

const signUp = async (name, email, password) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
  await updateUser(name);
  await verificationEmail();
  await signOut();
};

const forgotYourPassword = (email) => firebase.auth().sendPasswordResetEmail(email);

// FEED

const loadPosts = () => {
  const postsCollection = firebase.firestore().collection('posts');
  return postsCollection.orderBy('data', 'desc').get();
};

const editPost = (newText, postID) => firebase.firestore().collection('posts').doc(postID).update({ text: newText });

const deletePost = (postId) => {
  const postsCollection = firebase.firestore().collection('posts');
  return postsCollection.doc(postId).delete();
};

const likePosts = async (postId, currentUserId) => {
  const postsCollection = firebase.firestore().collection('posts');

  const post = await postsCollection.doc(postId).get();

  if (post.data().likes.includes(currentUserId)) {
    return postsCollection.doc(postId).update({
      likes: firebase.firestore.FieldValue.arrayRemove(currentUserId),
    });
  }

  return postsCollection.doc(postId).update({
    likes: firebase.firestore.FieldValue.arrayUnion(currentUserId),
  });
};

const postData = () => {
  const data = new Date();
  return data.toLocaleString('pt-BR');
};

const createPost = (textPost) => {
  const user = firebase.auth().currentUser;
  const post = {
    text: textPost,
    userId: user.uid,
    userName: user.displayName,
    userEmail: user.email,
    likes: [],
    comments: [],
    data: postData(),
  };

  const postsCollection = firebase
    .firestore()
    .collection('posts');
  return postsCollection.add(post);
};

// PERFIL
const sendImage = firebase.storage().ref('User-images');

const uidUser = firebase.database().ref().push().key;

export default {
  waitAuthState,
  logUser,
  getUser,
  updateUser,
  signInSignUpWithGoogle,
  signIn,
  signUp,
  signOut,
  forgotYourPassword,
  createPost,
  loadPosts,
  editPost,
  deletePost,
  likePosts,
  sendImage,
  uidUser,
};
