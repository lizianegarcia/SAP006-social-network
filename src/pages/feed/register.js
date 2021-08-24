import { addPosts } from './add-post.js';
import firebase from '../../services/firebase.js';

const register = async () => {
  const currentUserId = await firebase.getUser().uid;

  const clearPostList = () => {
    document.querySelector('.posts-list').innerHTML = '';
  };

  const insertPostList = async (posts) => {
    clearPostList();
    posts.forEach((eachPost) => {
      addPosts(eachPost);
    });
    await register();
  };

  const postsListContainer = document.querySelector('#postsList');

  // função editar post
  postsListContainer.addEventListener('click', async (e) => {
    const { target } = e;
    const editPostButton = target.dataset.edit;
    const cancelEditionButton = target.dataset.cancel;
    const saveEditionButton = target.dataset.save;
    const deleteButton = target.dataset.delete;
    const likeButton = target.dataset.like;

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
      await insertPostList(posts);
    }

    if (deleteButton) {
      const postId = deleteButton;
      await firebase.deletePost(postId);
      document.querySelector(`#post-${postId}`).remove();
    }

    if (likeButton) {
      const postId = likeButton;
      await firebase.likePosts(postId, currentUserId);
      const posts = await firebase.loadPosts();
      await insertPostList(posts);
    }
  });
};

export default register;
