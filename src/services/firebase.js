const waitAuthState = () => new Promise((resolve) => firebase.auth().onAuthStateChanged(resolve));

const getUser = () => firebase.auth().currentUser;

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

const addPosts = (post) => {
  const postTemplate = `
    <li id="${post.data().userId}" data-template class="post-container">
      <div class="user-photo-container">
        <img src="https://i.pravatar.cc/100?img=48" alt="User Photo" class="user-post-photo">
        <p class="user-name">@${post.data().userName}</p>
      </div>
      <div id=${post.id}>
        <textarea disabled class="user-post" rows="4" cols="50">${
  post.data().text
}</textarea>

        <div data-edit class="edit-container display-none">
          <textarea data-text="${
  post.id
}" class="edit-post" rows="4" cols="50">${post.data().text}</textarea>
        
          <div class="edit-buttons">
            <button data-cancel="${
  post.id
}" class="manage-post-btn cancel-btn" disabled>Cancelar</button>
            <button data-save="${
  post.id
}" class="manage-post-btn save-btn" disabled>Salvar</button>
          </div>
        </div>
      </div>
     </li>
     <div class="manage-post" id=${post.id}>
      <div class="post-likes" id="${post.id}">
        <button id="like-btn" class="manage-post-btn like-btn"><i class="fas fa-heart" id="heart"></i></button>
        <p class="likes-number" id="${post.id}">${post.data().likes}</p>
      </div>
      <button data-edit="${
  post.id
}" class="manage-post-btn edit-btn">Editar</button>
      <button class="manage-post-btn delete-btn">Excluir</button>
     </div>
   `;
  document.querySelector('#postsList').innerHTML += postTemplate;

  const postContainer = document.querySelectorAll('[data-template]');

  const activateEdition = (document) => {
    document.querySelector('.edit-container').classList.remove('display-none');
  };

  for (const open of postContainer) {
    console.log(open);
    open.addEventListener('click', (e) => {
      const target = e.target;
      if (target.dataset.edit === '') {
        activateEdition(open);
      }
    });
  }

  // const editButtons = document.querySelectorAll('[data-edit]')
  // for (const button of editButtons) {
  //   button.addEventListener('click', (e) => {
  //     const editId = e.target.dataset.edit
  //     const textArea = document.querySelector(`[data-text="${editId}"]`)
  //     textArea.removeAttribute("disabled");

  //     const saveButtons = document.querySelectorAll(`[data-save="${editId}"]`);
  //     saveButtons.removeAttribute('disabled');
  //     saveButtons.classList.removeAttribute('display-none')
  //     const cancelButtons = document.querySelectorAll(`[data-cancel="${editId}"]`);
  //     cancelButtons.removeAttribute('disabled');
  //     cancelButtons.classList.removeAttribute('display-none')

  //   });
  // };

  const deleteButtons = document.querySelectorAll('.delete-btn');
  for (const button of deleteButtons) {
    button.addEventListener('click', (e) => {
      deletePost(e.currentTarget.parentNode.id);
    });
  }

  const likeButtons = document.querySelectorAll('.like-btn');
  for (const button of likeButtons) {
    button.addEventListener('click', (e) => {
      likePosts(e.currentTarget.parentNode.id);
    });
  }
};

const editPost = (newText, postID) => {
  console.log(newText);
  console.log(postID);
  firebase.firestore().collection('posts').doc(postID).update({ text: newText });
};

const likePosts = (postId) => {
  const postsCollection = firebase.firestore().collection('posts');

  const promisseResult = postsCollection
    .doc(postId)
    .get()
    .then((post) => {
      console.log(postId);
      console.log(post.data());
      const countLikes = post.data().likes;
      if (countLikes >= 1) {
        postsCollection
          .doc(postId)
          .update({
            likes: post.data().likes - 1,
          })
          .then(() => {
            loadPosts();
          });
      } else {
        postsCollection
          .doc(postId)
          .update({
            likes: post.data().likes + 1,
          })
          .then(() => {
            loadPosts();
          });
      }
    });
  return promisseResult.then();
};

const deletePost = (postId) => {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection
    .doc(postId)
    .delete()
    .then(() => {
      console.log('Deleted!!!!!');
      loadPosts();
    });
};

const loadPosts = () => {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.get().then((snap) => {
    document.querySelector('.loading-posts').innerHTML = '';
    snap.forEach((post) => {
      addPosts(post);
    });
  });
};

const createPost = (textPost) => {
  const user = firebase.auth().currentUser;
  const post = {
    text: textPost,
    userId: user.uid,
    userName: user.displayName,
    userEmail: user.email,
    likes: 0,
    comments: [],
  };

  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.add(post).then(() => {
    document.querySelector('#postsList').value = '';
    loadPosts();
  });
};

export default {
  waitAuthState,
  getUser,
  updateUser,
  signInSignUpWithGoogle,
  signIn,
  signUp,
  signOut,
  forgotYourPassword,
  createPost,
  loadPosts,
};
