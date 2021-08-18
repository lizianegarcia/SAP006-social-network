/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */

import profile from '../../components/profile/profile.js';
import { changePage } from '../../routes/changePage.js';
// import firebase from '../../services/firebase.js';

const createPage = () => {
  const usuario = firebase.auth().currentUser;
  // console.log(usuario);
  firebase
    .firestore()
    .collection('checkbox')
    .doc(usuario.uid)
    .get()
    .then(doc => {
      console.log(doc.data().array);
    });

  const photoURL = firebase.auth().currentUser.photoURL;
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
      <input type="checkbox" value="Leitura" id="Leitura" name="Interest">
      <label for="Leitura"><img class='img' src="../../img/profile/leitura.png"></label>
      <label for="Leitura" class="interest">Leitura</i></label>
    
      <input type="checkbox" value="Viagens" id="Viagens" name="Interest">
      <label for="Viagens"><img class='img' src="../../img/profile/viagens.png"></label>
      <label for="Viagens" class="interest">Viagens</label>

      <input type="checkbox" value="Natureza" id="Natureza" name="Interest">
      <label for="Natureza"><img class='img' src="../../img/profile/natureza.png"></label>
      <label for="Natureza" class="interest">Natureza</label>
    
      <input type="checkbox" value="Filmes e séries" id="Filmes e séries" name="Interest">
      <label for="Filmes e séries"><img class='img' src="../../img/profile/filmes.png"></label>

      <label for="Filmes e séries" class="interest">Filmes e Séries</label>
      <input type="checkbox" value="Culinária" id="Culinária" name="Interest">
      <label for="Culinária"><img class='img' src="../../img/profile/culinaria.png">
      </label>
      <label for="Culinária" class="interest">Culinária</label>

      <input type="checkbox" value="Astrologia" id="Astrologia" name="Interest">
      <label for="Astrologia"><img class='img' src="../../img/profile/astrologia.png">
      </label>
      <label for="Astrologia" class="interest">Astrologia</label>

      <input type="checkbox" value="Games" id="Games" name="Interest">
      <label for="Games"><img class='img' src="../../img/profile/games.png"></label>
      <label for="Games" class="interest">Games</label>

      <input type="checkbox" value="Fotografia" id="Fotografia" name="Interest">
      <label for="Fotografia"><img class='img' src="../../img/profile/fotografia.png"></label>
      <label for="Fotografia" class="interest">Fotografia</label>

      <input type="checkbox" value="Aprender novas línguas" id="Aprender novas línguas" name="Interest">
      <label for="Aprender novas línguas"><img class='img' src="../../img/profile/linguas.png"></label>
      <label for="Aprender novas línguas" class="interest">Aprender novas línguas</label>

      <input type="checkbox" value="Esportes" id="Esportes" name="Interest">
      <img class='img' src="../../img/profile/esportes.png"></label>
      <label for="Esportes" class="interest">Esportes</label>
    </div>
  </section>
    <button id="botao-check" type="button" class="btn">Salvar </button>
    <div class="resultadoCheckbox"> </div>
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;

  const hamburger = rootElement.querySelector('#hamburger');
  const navLinks = rootElement.querySelector('.navbar-links');
  const links = rootElement.querySelectorAll('.navbar-links li');
  const section = rootElement.querySelector('.feed-logout');
  const navigateFeed = rootElement.querySelector('#goFeed');
  const botao = rootElement.querySelector('#botao-check');
  let interesse = rootElement.querySelectorAll('input[name="Interest"]');
  let div = rootElement.querySelector('.resultadoCheckbox');
  let insterestChecked = [];
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
    links.forEach(link => {
      link.classList.toggle('fade');
    });
  });

  // Envio de interesses checked ao Firestore
  botao.addEventListener('click', () => {
    for (let i = 0; i < interesse.length; i++) {
      if (interesse[i].checked) {
        insterestChecked.push(interesse[i].value);
      }
    }
    div.innerHTML = insterestChecked.join(', ');

    const interests = {
      array: insterestChecked,
    };

    const collectionInterests = firebase
      .firestore()
      .collection('checkbox')
      .doc(usuario.uid);
    console.log('foooooooi', collectionInterests);
    collectionInterests.set(interests).then(res => {
      console.log('add no firebase');
    });
  });

  // Pega a imagem do usuário ou coloca um avatar
  firebase.auth().onAuthStateChanged(User => {
    if (User != null) {
      userPhoto.src = User.photoURL || '../../img/profile/user-default.png';
      userName.innerHTML = User.displayName;
    }
  });

  // Envio de imagem do perfil ao Storage
  const reader = new FileReader();
  const uid = firebase.database().ref().push().key;
  const sendImageToStorage = () => {
    const ref = firebase.storage().ref('User-images');
    inputImg.onchange = event => {
      const photo = event.target.files[0];
      reader.readAsDataURL(photo);
      reader.onload = function () {
        const base64 = reader.result.split('base64,')[1];
        ref
          .child(uid)
          .putString(base64, 'base64', { contentType: 'image/png' })
          .then(snapshot => {
            ref
              .child(uid)
              .getDownloadURL()
              .then(url => {
                userPhoto.src = url;
                firebase.auth().currentUser.updateProfile({
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
