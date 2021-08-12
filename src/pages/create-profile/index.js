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
    <i class="fas fa-book"></i>
    <i class="fas fa-globe-americas"></i>
    <i class="fab fa-pagelines"></i>
    <i class="far fa-play-circle"></i>
    <i class="fas fa-hamburger"></i>
    <i class="far fa-star"></i>
    <i class="fas fa-gamepad"></i>
    <i class="fas fa-camera"></i>
    <i class="fas fa-language"></i>
    <i class="fas fa-running"></i>
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;
  const inputImg = rootElement.querySelector('#profileImage');
  const userPhoto = rootElement.querySelector('#user-photo');
  const userName = rootElement.querySelector('#name-user');

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      userPhoto.src = user.photoURL || 'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg';
      userName.innerHTML = user.displayName;
    }
  });

  // const sendNewProfileImg = (changeImage) => {
  //   userPhoto.addEventListener('click', () => {
  //     inputImg.style.opacity = 1;
  //     inputImg.onchange = (event) => {
  //       sendImg(event.target.files[0], changeImage);
  //       inputImg.style.opacity = 0;
  //     };
  //   });
  // };

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
          .putString(base64, 'base64', { contentType: 'image/png' });
        ref
          .child(uid)
          .getDownloadURL()
          .then((url) => {
            userPhoto.src = url;
          });
      };
    };
  };
  sendImg();
  // sendNewProfileImg();
  return rootElement;
};

export default createPage;
