import firebase from '../../services/firebase.js';

export const addPosts = async (post) => {
  const currentUserId = await firebase.getUser().uid;

  const postTemplate = `
      <li id="post-${post.id}" data-template class="post-container">
  
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
            <button class="manage-post-btn delete-btn"><i class="fas fa-trash-alt"></i></button>}
          </div>

          <div class="modal-wrapper">
          <div class="modal">
              <div class="modal-close">x</div>
                  <div class="modal-content">
                      <h2 class="modal-text">Tem certeza que deseja excluir o post?</h2>
                      <button  class="modal-yes" data-yes="confirm" id="yes-delete">Confirmar</button>
                      <button class="modal-no" id="no-delete">Cancelar</button>
                  </div>
           </div>
         </div>     
       </li>
     `;

  document.querySelector('#postsList').innerHTML += postTemplate;

  const postsListContainer = document.querySelector('#postsList');

  const clearPostList = () => {
    document.querySelector('.posts-list').innerHTML = '';
  };

  const insertPostList = (posts) => {
    clearPostList();
    posts.forEach((eachPost) => {
      addPosts(eachPost);
    });
  };

  // função editar post
  postsListContainer.addEventListener('click', async (e) => {
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

      await firebase.editPost(newText, postId);
      const posts = await firebase.loadPosts();
      insertPostList(posts);
    }
  });

  // função excluir posts
  const deleteButtons = document.querySelectorAll('.delete-btn');
  for (const button of deleteButtons) {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const postId = e.currentTarget.parentNode.id;
      await firebase.deletePost(postId);
      document.querySelector(`#post-${postId}`).remove();
    });
  }

  // função like posts
  const likeButtons = document.querySelectorAll('.like-btn');
  for (const button of likeButtons) {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const postId = e.currentTarget.parentNode.id;
      await firebase.likePosts(postId);
      const posts = await firebase.loadPosts();
      insertPostList(posts);
    });
  }

  // função excluir posts

  // const deleteButtons = document.querySelectorAll('.delete-btn')

  // for (const button of deleteButtons) {
  //   button.addEventListener('click', (e) => {
  //     e.preventDefault()

  //     const postId = post.id
  //     console.log(postId)
  //     const target = e.target.parentNode
  //     console.log(target)
  //     const targetDataset = target.dataset.delete
  //     console.log(targetDataset)

  //     if (targetDataset == "delete") {
  //       const liElement = target.parentNode.parentNode.parentNode.parentNode;
  //       console.log(liElement)
  //       console.log('Chegou aqui')
  //       //const modal = liElement.querySelector('.modal-wrapper');
  //       // const confirmDelete =
  //       // const cancelDelete =
  //       // modal.style.display = "block"

  //       // confirmDelete.addEventListener("click", () => {
  //       //   deletePost(postId)
  //       //     .then(() => {
  //       //       divDelete.style.display = "none"
  //       //       post.remove()
  //       //     })
  //       //     .catch(e => {
  //       //       console.log("erro")
  //       //     })
  //       // })
  //       // cancelDelete.addEventListener("click", () => {
  //       //   divDelete.style.display = "none"
  //       // })
  //     }

  //     // deletePost(e.currentTarget.parentNode.id)
  //     // document.querySelector('#postsList').innerHTML = ''
  //   });
  // };
};
