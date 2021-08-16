import profile from '../../components/profile/profile.js';
import { changePage } from '../../routes/changePage.js';
import firebase from '../../services/firebase.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const user = firebase.getUser();
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
                      <li class="li-items" id="navigate-profile"><a href="#" id="goProfile">Perfil</a></li>
                      <li class="li-items" id="navigate-feed"><a href="#">Feed</a></li>
                      <li class="li-items feed-logout"></li>
                  </ul>
              </nav>
          </header>
          <main class="feed-container">
            <section class="greet-user">
              <p>Bem vinda, ${user.displayName}</p>
            </section>
        
            <form id="postForm" class="posts-form">
                <input type="text" name="postText" id="postText" class="post-text" autocomplete="off" placeholder="No que você está pensando?">
                <button id="publishBtn" class="post-btn">Publicar</button>
            </form>

            <section class="loading-posts"></section>
            <ul id="postsList" class="posts-list"></ul>
          </main>
          

    `;

  rootElement.innerHTML = contentnewElement;

  const hamburger = rootElement.querySelector('#hamburger');
  const navLinks = rootElement.querySelector('.navbar-links');
  const links = rootElement.querySelectorAll('.navbar-links li');
  const section = rootElement.querySelector('.feed-logout');
  const navigateProfile = rootElement.querySelector('#goProfile');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach((link) => {
      link.classList.toggle('fade');
    });
  });

  rootElement.querySelector('#postForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const textPost = document.querySelector('#postText').value;
    firebase.createPost(textPost);
  });

  firebase.loadPosts();

  // NAV LINKS
  navigateProfile.addEventListener('click', () => {
    changePage('/create-profile');
  });

  // LOGOUT COMPONENT
  section.appendChild(profile());

  return rootElement;
};

export default createPage;



  //  <div class="post-feed-item">
  //               <img src="http://placehold.it/100x100" alt="user avatar">
  //               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  //               <i class="fas fa-heart" id="heart"></i>
  //           </div>


