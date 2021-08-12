/* eslint-disable no-use-before-define */
// import firebase from '../../services/firebase.js';

// import firebase from "../../services/firebase";

/* eslint-disable func-names */
const createPage = () => {
  const photoURL = firebase.auth().currentUser.photoURL;
  const rootElement = document.createElement('div');
  const contentnewElement = `
    <h1>Perfil</h1>
    <div class='profile-photo'>
      <img id='user-photo' class='user-photo' src='${photoURL}'>
      <input type="file" id="profileImage" class="profileImage">
    </div> 
    <div class='profile-name'>
    <p id='name-user'></p>
    </div>
    <div class='profile-interests'>
    <input type="checkbox" id="leitura" name="Leitura">
    <label for="leitura" class="interest"><i class="fas fa-book"></i></label>
    <label for="leitura" class="interest">Leitura</i></label>
    

    <input type="checkbox" id="viagens" name="Viagens">
    <label for="viagens" class="interest"><i class="fas fa-globe-americas"></i></label>
    <label for="viagens" class="interest">Viagens</label>


    <input type="checkbox" id="natureza" name="Natureza">
    <label for="natureza" class="interest"><i class="fab fa-pagelines"></i></label>
    <label for="natureza" class="interest">Natureza</label>

    
    <input type="checkbox" id="filmes e séries" name="Filmes e Séries">
    <label for="filmes e séries" class="interest"><i class="far fa-play-circle"></i>
    </label>
    <label for="filmes e séries" class="interest">Filmes e Séries</label>


    <input type="checkbox" id="culinária" name="culinária">
    <label for="culinária" class="interest"><i class="fas fa-hamburger"></i>
    </label>
    <label for="culinária" class="interest">Culinária</label>


    <input type="checkbox" id="Astrologia" name="Astrologia">
    <label for="Astrologia" class="interest"><i class="far fa-star"></i>
    </label>
    <label for="Astrologia" class="interest">Astrologia</label>


    <input type="checkbox" id="Games" name="Games">
    <label for="Games" class="interest"><i class="fas fa-gamepad"></i></label>
    <label for="Games" class="interest">Games</label>


    <input type="checkbox" id="Fotografia" name="Fotografia">
    <label for="Fotografia" class="interest"><i class="fas fa-camera"></i></label>
    <label for="Fotografia" class="interest">Fotografia</label>


    <input type="checkbox" id="Aprender novas línguas" name="Aprender novas línguas">
    <label for="Aprender novas línguas" class="interest"><i class="fas fa-language"></i></label>
    <label for="Aprender novas línguas" class="interest">Aprender novas línguas</label>

    <input type="checkbox" id="Esportes" name="Esportes">
    <label for="Esportes" class="interest"><i class="fas fa-running"></i></label>
    <label for="Esportes" class="interest">Esportes</label>

  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;
  const inputImg = rootElement.querySelector('#profileImage');
  const userPhoto = rootElement.querySelector('#user-photo');
  const userName = rootElement.querySelector('#name-user');

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      userPhoto.src = user.photoURL
        || 'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg';
      userName.innerHTML = user.displayName;
    }
  });

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
  // firebase.updateUser();

  return rootElement;
};

export default createPage;
