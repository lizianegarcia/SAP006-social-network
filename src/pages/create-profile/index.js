/* eslint-disable no-use-before-define */
// import firebase from '../../services/firebase.js';

// import firebase from "../../services/firebase";

/* eslint-disable func-names */
const createPage = () => {
  const photoURL = firebase.auth().currentUser.photoURL;
  const rootElement = document.createElement('div');
  const contentnewElement = `
    <section class='profile-area'>
    <div class='profile-area-theme'>
    <img class='theme-image' src="/../../img/profile-background">
    </div>
    <figure class='profile-area-photo-box'>
    <div class="image-upload">
      <label for="file-input">
        <img src="https://lh3.googleusercontent.com/a-/AOh14GjjgYkmwQENTZE5ldo-yTEjZ2Cdz143s2AlbE5e9g=s96-c" style="pointer-events: none"/>
      </label>

      <input id="file-input" type="file" />
    </div>
      <div class='photo'>
        <img id='user-photo' class='user-photo' src='${photoURL}' style="pointer-events: none"/>
        <input type="file" id="input-file-profileImg" class='input-file-profileImg transparency' accept=".jpg, .jpeg, .png">
      </div>
    </figure>
    <div class='name-profile-area'>
    <p id='name-user'></p>
    </div>
    </section>

    <div class='profile-interests'>
    <input type="checkbox" id="leitura" name="Leitura">
    <label for="leitura"><img class='img' src='https://image.flaticon.com/icons/png/512/2972/2972085.png'></label>
    <label for="leitura" class="interest">Leitura</i></label>
    
    <input type="checkbox" id="viagens" name="Viagens">
    <label for="viagens"><img class='img' src='https://image.flaticon.com/icons/png/512/3411/3411404.png'></label>
    <label for="viagens" class="interest">Viagens</label>

    <input type="checkbox" id="natureza" name="Natureza">
    <label for="natureza"><img class='img' src='https://image.flaticon.com/icons/png/512/740/740934.png'></label>
    <label for="natureza" class="interest">Natureza</label>
    
    <input type="checkbox" id="filmes e séries" name="Filmes e Séries">
    <label for="filmes e séries"><img class='img' src='https://image.flaticon.com/icons/png/512/5058/5058138.png'>
    </label>
    <label for="filmes e séries" class="interest">Filmes e Séries</label>

    <input type="checkbox" id="culinária" name="culinária">
    <label for="culinária"><img class='img' src='https://image.flaticon.com/icons/png/512/2972/2972043.png'>
    </label>
    <label for="culinária" class="interest">Culinária</label>

    <input type="checkbox" id="Astrologia" name="Astrologia">
    <label for="Astrologia"><img class='img' src='https://image.flaticon.com/icons/png/512/2647/2647336.png'>
    </label>
    <label for="Astrologia" class="interest">Astrologia</label>

    <input type="checkbox" id="Games" name="Games">
    <label for="Games"><img class='img' src='https://image.flaticon.com/icons/png/512/5260/5260529.png'></label>
    <label for="Games" class="interest">Games</label>

    <input type="checkbox" id="Fotografia" name="Fotografia">
    <label for="Fotografia"><img class='img' src='https://img-premium.flaticon.com/png/512/186/premium/186266.png?token=exp=1628817371~hmac=e3096a5868e48cf899058b38a39274f4'></label>
    <label for="Fotografia" class="interest">Fotografia</label>

    <input type="checkbox" id="Aprender novas línguas" name="Aprender novas línguas">
    <label for="Aprender novas línguas"><img class='img' src='https://img-premium.flaticon.com/png/512/3412/premium/3412644.png?token=exp=1628817170~hmac=41eee28b2ce5e9080ede3eee49c48eb7'></label>
    <label for="Aprender novas línguas" class="interest">Aprender novas línguas</label>

    <input type="checkbox" id="Esportes" name="Esportes">
    <label for="Esportes"><img class='img' src='https://image.flaticon.com/icons/png/512/2798/2798086.png'></label>
    <label for="Esportes" class="interest">Esportes</label>
    </div>
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;
  const inputImg = rootElement.querySelector('#input-file-profileImg');
  const userPhoto = rootElement.querySelector('#user-photo');
  const userName = rootElement.querySelector('#name-user');

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      userPhoto.src = user.photoURL
        || 'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg';
      userName.innerHTML = user.displayName;
    }
  });

  const sendNewProfileImg = (changeImage) => {
    userPhoto.addEventListener('click', () => {
      inputImg.style.opacity = 1;
      inputImg.onchange = (event) => {
        sendImg(event.target.files[0], changeImage);
        inputImg.style.opacity = 0;
      };
    });
  };

  const sendImg = () => {
    const ref = firebase.storage().ref('User-images');
    inputImg.onchange = (event) => {
      const photo = event.target.files[0];
      const reader = new FileReader();
      const uid = firebase.database().ref().push().key;

      reader.readAsDataURL(photo);
      reader.onload = function () {
        const base64 = reader.result.split('base64,')[1];

        ref
          .child(uid)
          .putString(base64, 'base64', { contentType: 'image/png' })
          .then((snapshot) => {
            console.log('snapshot', snapshot);
            ref
              .child(uid)
              .getDownloadURL()
              .then((url) => {
                console.log(url);
                userPhoto.src = url;
                firebase.auth().currentUser.updateProfile({
                  photoURL: url,
                });
              });
          });
      };
    };
  };

  sendImg();
  sendNewProfileImg();

  return rootElement;
};

export default createPage;
