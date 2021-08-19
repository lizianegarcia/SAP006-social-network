import firebase from '../../services/firebase.js';

export const addPosts = (post) => {
  const postTemplate = `
      <li id="${post.data().userId}" data-template class="post-container">
  
          <div class="user-info-container">
            <!-- <img src="https://i.pravatar.cc/100?img=48" alt="User Photo" class="user-post-photo"> -->
            <p class="user-name">@${post.data().userName}</p>
            <p class="post-date" id="">${post.data().data}</p>
          </div>
  
          <div class="post-field">
            <p class="user-post">${post.data().text}</p>
  
            <div data-editcontainer class="edit-container display-none">
              <textarea data-text="${post.id}" class="edit-post-textarea" rows="3" cols="30">${post.data().text}</textarea>
  
              <div class="edit-buttons">
                <button data-cancel="${post.id}" class="manage-edit-btn cancel-btn">Cancelar</button>
                <button data-save="${post.id}" class="manage-edit-btn save-btn">Salvar</button>
              </div>
            </div>
          </div>
  
          <div class="manage-post" id=${post.id}>
            <div class="post-likes" id="${post.id}">
              <button id="like-btn" class="manage-post-btn like-btn"><i class="fas fa-heart" id="heart"></i></button>
              <p class="likes-number" id="${post.id}">${post.data().likes}</p>
            </div>
            <button class="manage-post-btn edit-btn"><i data-edit="${post.id}" class="fas fa-pencil-alt"></i></button>
            <button class="manage-post-btn delete-btn"><i class="fas fa-trash-alt"></i></button>
          </div>
       </li>
     `;

  document.querySelector('#postsList').innerHTML += postTemplate;

  const postsListContainer = document.querySelector('#postsList');

  // função editar post
  postsListContainer.addEventListener('click', (e) => {
    const { target } = e;
    const editPostButton = target.dataset.edit;
    const cancelEditionButton = target.dataset.cancel;
    const saveEditionButton = target.dataset.save;

    // Open edit
    if (editPostButton) {
      const editPostContainer = target.parentNode.parentNode.parentNode.querySelector('.edit-container');
      const userPost = target.parentNode.parentNode.parentNode.querySelector('.user-post');

      editPostContainer.classList.toggle('display-none');
      userPost.classList.toggle('display-none');
    }
    // cancel edit
    if (cancelEditionButton) {
      const liElement = target.parentNode.parentNode.parentNode.parentNode;
      const userPost = liElement.querySelector('.user-post');
      const editcontainer = liElement.querySelector('.edit-container');

      editcontainer.classList.toggle('display-none');
      userPost.classList.toggle('display-none');
    }
    // save edit
    if (saveEditionButton) {
      const liElement = target.parentNode.parentNode.parentNode.parentNode;
      const textArea = liElement.querySelector('.edit-post-textarea');
      const newText = textArea.value;
      const postId = textArea.dataset.text;

      firebase.editPost(newText, postId);
      document.querySelector('#postsList').innerHTML = '';
      firebase.loadPosts();
    }
  });

  // função excluir posts
  const deleteButtons = document.querySelectorAll('.delete-btn');
  for (const button of deleteButtons) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      firebase.deletePost(e.currentTarget.parentNode.id);
      document.querySelector('#postsList').innerHTML = '';
    });
  }

  // função like posts
  const likeButtons = document.querySelectorAll('.like-btn');
  for (const button of likeButtons) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      firebase.likePosts(e.currentTarget.parentNode.id);
      document.querySelector('#postsList').innerHTML = '';
    });
  }
};
