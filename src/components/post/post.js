export const POST_DELETED = 'post-deleted';

const createHTML = (post) => {
  return `
    <div id="post-${post.id}">
        <h2>${post.title}</h2>
        <p>${post.text}</p>
        <button id="delete-post-${post.id}">Remover</button>
    </div>
    `;
};

const registerListeners = (post) => {
  const deleteButton = document.getElementById(`delete-post-${post.id}`);
  deleteButton.addEventListener("click", () => {
    const postDiv = document.getElementById(`post-${post.id}`);
    postDiv.remove();
    window.dispatchEvent(new CustomEvent(POST_DELETED, { detail: post.id }));
  });
};

export default { createHTML, registerListeners };