import profile from '../../components/profile/profile.js';
import { changePage } from '../../routes/changePage.js';
import firebase from '../../services/firebase.js';

const createPage = () => {
  const photoURL = firebase.getUser().photoURL;
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
        <li class="li-items" id="navigate-profile"><a href="#">Perfil</a></li>
        <li class="li-items" id="navigate-feed"><a href="#" id="goFeed">Feed</a></li>
        <li class="li-items feed-logout"></li>
      </ul>
    </nav>
  </header>
  <main class='profile-content-container'>
      <section class='profile-area'>
      <div class='profile-area-theme'>
      <img class='theme-image' src="../../img/profile/background.png">
      </div>
      <figure class='profile-area-photo-box'>
        <div class="image-upload">
          <label for="file-input">
            <img src='${photoURL}' id='user-photo' class='user-photo'/>
          </label>
          <input id="file-input" type="file" />
        </div>
      </figure>
      <div class='name-profile-area'>
        <p id='name-user'></p>
      </div>
    </section>  
    <section class='profile-area-interests'>
      <div class='profile-interests'>
        <div class='personal-interest'>
        <label for="Leitura"><img class='img' src="../../img/profile/leitura.png"></label>
        <label for="Leitura" class="interest">Leitura</i></label>
        </div>

        <div class='personal-interest'>
        <label for="Viagens"><img class='img' src="../../img/profile/viagens.png"></label>
        <label for="Viagens" class="interest">Viagens</label>
        </div>

        <div class='personal-interest'>
        <label for="Natureza"><img class='img' src="../../img/profile/natureza.png"></label>
        <label for="Natureza" class="interest">Natureza</label>
        </div>

        <div class='personal-interest'>
        <label for="Filmes e séries"><img class='img' src="../../img/profile/filmes.png"></label>
        <label for="Filmes e séries" class="interest">Filmes e Séries</label>
        </div>

        <div class='personal-interest'>
        <label for="Culinária"><img class='img' src="../../img/profile/culinaria.png"></label>
        <label for="Culinária" class="interest">Culinária</label>
        </div>

        <div class='personal-interest'>
        <label for="Astrologia"><img class='img' src="../../img/profile/astrologia.png"></label>
        <label for="Astrologia" class="interest">Astrologia</label>
        </div>

        <div class='personal-interest'>
        <label for="Games"><img class='img' src="../../img/profile/games.png"></label>
        <label for="Games" class="interest">Games</label>
        </div>

        <div class='personal-interest'>
        <label for="Fotografia"><img class='img' src="../../img/profile/fotografia.png"></label>
        <label for="Fotografia" class="interest">Fotografia</label>
        </div>

        <div class='personal-interest'>
        <label for="Aprender novas línguas"><img class='img' src="../../img/profile/linguas.png"></label>
        <label for="Aprender novas línguas" class="interest">Aprender novas línguas</label>
        </div>

        <div class='personal-interest'>
        <img class='img' src="../../img/profile/esportes.png"></label>
        <label for="Esportes" class="interest">Esportes</label>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>Feito por <a class="footer-links" href="https://github.com/lanizia" target="_blank">Lana</a>, <a class="footer-links" href="https://github.com/lathne" target="_blank">Laura</a> e <a class="footer-links" href="https://github.com/lizianegarcia" target="_blank">Lizi</a> durante o bootcamp da <a class="footer-links" href="https://www.laboratoria.la/" target="_blank">Laboratoria</a> SAP006 - 2021 </p>
  </footer>

  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;

  const hamburger = rootElement.querySelector('#hamburger');
  const navLinks = rootElement.querySelector('.navbar-links');
  const links = rootElement.querySelectorAll('.navbar-links li');
  const section = rootElement.querySelector('.feed-logout');
  const navigateFeed = rootElement.querySelector('#goFeed');
  const inputImg = rootElement.querySelector('#file-input');
  const userPhoto = rootElement.querySelector('#user-photo');
  const userName = rootElement.querySelector('#name-user');

  // NAV LINKS
  navigateFeed.addEventListener('click', () => {
    changePage('/');
  });

  // LOGOUT COMPONENT
  section.appendChild(profile());

  // MENU
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach((link) => {
      link.classList.toggle('fade');
    });
  });

  // Pega a imagem do usuário ou coloca um avatar
  firebase.logUser((user) => {
    if (user != null) {
      userPhoto.src = user.photoURL || '../../img/profile/user-default.png';
      userName.innerHTML = user.displayName;
    }
  });

  // Envio de imagem do perfil ao Storage
  const reader = new FileReader();
  const sendImageToStorage = () => {
    inputImg.onchange = (event) => {
      const photo = event.target.files[0];
      reader.readAsDataURL(photo);
      // eslint-disable-next-line func-names
      reader.onload = function () {
        const base64 = reader.result.split('base64,')[1];
        firebase.sendImage
          .child(firebase.uidUser)
          .putString(base64, 'base64', { contentType: 'image/png' })
          // eslint-disable-next-line no-unused-vars
          .then((snapshot) => {
            firebase.sendImage
              .child(firebase.uidUser)
              .getDownloadURL()
              .then((url) => {
                userPhoto.src = url;
                firebase.getUser().updateProfile({
                  photoURL: url,
                });
              });
          });
      };
    };
  };

  sendImageToStorage();

  return rootElement;
};

export default createPage;
