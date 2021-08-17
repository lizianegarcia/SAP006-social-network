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
  postsCollection.orderBy('data','desc').get().then((snap) => {
    document.querySelector('.posts-list').innerHTML = '';
    snap.forEach((post) => {
      addPosts(post);
    });
  });
};

const addPosts = (post) => {
  const postTemplate = `
    <li id="${post.data().userId}" data-template class="post-container">
        <div class="user-info-container">
          <!-- <img src="https://i.pravatar.cc/100?img=48" alt="User Photo" class="user-post-photo"> -->
          <p class="user-name">@${post.data().userName}</p>
          <p class="post-date" id="">${post.data().data}</p>
        </div>
        <div id=${post.id} class="post-field">
          <p class="user-post" rows="4" cols="50">${post.data().text}</p>
          <div data-editcontainer class="edit-container display-none">
            <textarea data-text="${post.id}" class="edit-post" rows="4" cols="50">${post.data().text}</textarea>
            <div class="edit-buttons">
              <button data-cancel="${post.id}" class="manage-post-btn cancel-btn">Cancelar</button>
              <button data-save="${post.id}" class="manage-post-btn save-btn">Salvar</button>
            </div>
          </div>
        </div>
        <div class="manage-post" id=${post.id}>
          <div class="post-likes" id="${post.id}">
            <button id="like-btn" class="manage-post-btn like-btn"><i class="fas fa-heart" id="heart"></i></button>
            <p class="likes-number" id="${post.id}">${post.data().likes}</p>
          </div>
          <button data-edit="${post.id}" class="manage-post-btn edit-btn">Editar</button>
          <button class="manage-post-btn delete-btn">Excluir</button>
        </div>
     </li>
   `;

  document.querySelector('#postsList').innerHTML += postTemplate;
  
  const postsListContainer = document.querySelector('#postsList');

  //função editar post
  postsListContainer.addEventListener('click', (e) => {
    const { target } = e;
    const editPostButton = target.dataset.edit;
    const cancelEditionButton = target.dataset.cancel; 
    const saveEditionButton = target.dataset.save;

    //Open edit
    if(editPostButton) {
      const editPostContainer = target.parentNode.parentNode.querySelector('.edit-container')
      const userPost = target.parentNode.parentNode.querySelector('.user-post')
      editPostContainer.classList.toggle('display-none');
      userPost.classList.toggle('display-none');
    }
    //cancel edit
    if(cancelEditionButton) {
      console.log(cancelEditionButton)
      const cancelEdit = target.parentNode.parentNode;
      const userPost = target.parentNode.parentNode.parentNode.parentNode;
      cancelEdit.classList.toggle('display-none')
      userPost.querySelector('.user-post').classList.toggle('display-none');
    }
    //save edit
    if(saveEditionButton){
      console.log(saveEditionButton)
      // const editId = e.target.dataset.edit
      // const newText = document.querySelector(`[data-text="${editId}"]`).value;
      // console.log(newText)
      console.log(target.parentNode)

      editPost(newText, postID)
      document.querySelector('#postsList').innerHTML = '';
      loadPosts()
    }
  });
 
  //função excluir posts
  const deleteButtons = document.querySelectorAll('.delete-btn')
  for (const button of deleteButtons) {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      deletePost(e.currentTarget.parentNode.id)
      document.querySelector('#postsList').innerHTML = ''
    });
  };

  //função like posts
  const likeButtons = document.querySelectorAll('.like-btn');
  for (const button of likeButtons) {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      likePosts(e.currentTarget.parentNode.id)      
      document.querySelector('#postsList').innerHTML = ''
    });
  }
};

const editPost = (newText, postID) => {
  console.log(newText)
  console.log(postID)
  firebase.firestore().collection('posts').doc(postID).update({ text: newText });
};

const deletePost = (postId) => {
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.doc(postId).delete().then(() => {
    console.log('Deleted!!!!!');
    loadPosts();
  });
};

const likePosts = (postId) => {
  const postsCollection = firebase.firestore().collection("posts");
  const promisseResult = postsCollection.doc(postId).get()
      .then((post => {
        console.log(postId)
        console.log(post.data())
        const countLikes = post.data().likes;
        if(countLikes >= 1) {
            postsCollection.doc(postId).update({
              likes: post.data().likes - 1
            })
            .then(() => {
              loadPosts();
            });
        } else {
          postsCollection.doc(postId).update({
            likes: post.data().likes + 1
          })
          .then(() => {
            loadPosts();
          });
        }
      }))
      return promisseResult.then();
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
    likes: 0,
    comments: [],
    data: postData(),
  };

  const postsCollection = firebase
    .firestore()
    .collection('posts');
  postsCollection.add(post).then(() => {
    document.querySelector('#postsList').innerHTML = '';
    loadPosts();
  });
};

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
};
