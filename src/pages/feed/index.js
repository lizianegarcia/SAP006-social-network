// import profile from '../../components/profile/profile.js';
// import firebase from '../../services/firebase.js';
import { loadPosts, createPost, addPosts } from '../../services/firebase.js';

  const rootElement = document.createElement('div');
  const contentnewElement = `        
        <header>
            <nav class="feed-navbar">
                <img class="feed-logo" src="./img/Amitié2.png" alt="">
                <div class="hamburger" id="hamburger">
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                </div>

                <ul class="navbar-links" id="navbar-links">
                    <li class="li-items"><a href="#">Bem vinda</a></li>
                    <li class="li-items"><a href="#">Perfil</a></li>
                    <li class="li-items"><a href="#">Feed</a></li>
                </ul>
            </nav>
        </header>
       
          <form id="postForm" class="posts-form">
              <input type="text" name="postText" id="postText" class="post-text" autocomplete="off" placeholder="No que você está pensando?">
              <button id="publishBtn" class="post-btn">Publicar</button>
          </form>

          <section class="loading-posts"></section>
          <ul id="postsList" class="posts-list"></ul>

        
    `;

  rootElement.innerHTML = contentnewElement;

  const hamburger = rootElement.querySelector('#hamburger');
  const navLinks = rootElement.querySelector('.navbar-links');
  const links = rootElement.querySelectorAll('.navbar-links li');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach((link) => {
      link.classList.toggle('fade');
    });
  });

  rootElement.querySelector('#postForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const textPost = document.querySelector('#postText').value;
    createPost(textPost);
  });

  //rootElement.querySelector('.loading-posts').innerHTML = addPosts();
  loadPosts();

//   BOTÃO DE LOGOUT
//   const section = rootElement.querySelector('.post-feed');
//   section.appendChild(profile());

  return rootElement;
};

export default createPage;

/*

   <div class="post-feed-item">
                <img src="http://placehold.it/100x100" alt="user avatar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fas fa-heart" id="heart"></i>
            </div>

*/
