import firebase from '../../services/firebase.js';

export const addPosts = async (post) => {
  const currentUserId = await firebase.getUser().uid;
  const isLiked = post.data().likes.includes(currentUserId);

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
              <button id="like-btn" class="manage-post-btn like-btn"><i data-like="${post.id}" class="${isLiked ? 'fas' : 'far'} fa-heart" id="heart"></i></button>
              <p class="likes-number" id="${post.id}">${post.data().likes.length}</p>
            </div>
            ${post.data().userId === currentUserId ? `<button class="manage-post-btn edit-btn"><i data-edit="${post.id}" class="fas fa-pencil-alt"></i></button>
            <button class="manage-post-btn delete-btn"><i data-delete="${post.id}" class="fas fa-trash-alt"></i></button>` : ''}
          </div>
          <div class="modal-wrapper">
          <div class="modal">
              <div class="modal-close">x</div>
                  <div class="modal-content">
                      <h2 class="modal-text">Tem certeza que deseja excluir o post?</h2>
                      <button  class="modal-yes" data-confirmdelete="${post.id}" id="yes-delete">Confirmar</button>
                      <button class="modal-no" data-closemodal="${post.id}" id="no-delete">Cancelar</button>
                  </div>
           </div>
         </div>     
       </li>
     `;

  document.querySelector('#postsList').innerHTML += postTemplate;
};
