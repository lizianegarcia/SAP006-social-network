import postComponent, { POST_DELETED } from "../../components/post/post.js";
import profileComponent from "../../components/profile/profile.js";

let posts = [
  {
    id: 3,
    title: "Lorem Ipsum 3",
    text: "Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: "Lorem Ipsum 2",
    text: "Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const createHTML = () => {
  return `
    <h1>Feed</h1>
    ${profileComponent.createHTML()}
    
    <form id="create-post">
      <input type="text" id="title" placeholder="Title"/>
      <textarea id="text" placeholder="Text"></textarea>
      <button>Enviar</button>
    </form>
    
    <div id="posts">
      ${posts.map(postComponent.createHTML).join("")}
    </div>
  `;
};

const registerListeners = () => {
  profileComponent.registerListeners();
  posts.forEach(postComponent.registerListeners);

  const createPostForm = document.getElementById("create-post");
  createPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const postsDiv = document.getElementById("posts");
    const titleInput = document.getElementById("title");
    const textInput = document.getElementById("text");

    // validate

    const newPost = {
      id: posts.length + 1,
      title: titleInput.value,
      text: textInput.value,
    };

    posts = [newPost, ...posts];

    postsDiv.innerHTML = postComponent.createHTML(newPost) + postsDiv.innerHTML;
    posts.forEach(postComponent.registerListeners);
  });

  window.addEventListener(POST_DELETED, (event) => {
    const deletedPostId = event.detail;
    posts = posts.filter((post) => post.id !== deletedPostId);
  });
};

export default { createHTML, registerListeners };