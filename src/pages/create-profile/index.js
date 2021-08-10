/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
const createPage = () => {
  // const user = firebase.getUser();
  const rootElement = document.createElement('div');
  const contentnewElement = `
    <h1>Perfil</h1>
    <figure class='profile-area-photo-box'>
      <img class='photo'>
      <input type="file" id="input-file-profileImg" class='input-file-profileImg transparency' accept=".jpg, .jpeg, .png">
    </figure>
    <div class='name-profile-area'>
    <h3 id='name-user'></h3>
    </div>
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;
  const inputImg = rootElement.querySelector('#input-file-profileImg');
  const profilePic = rootElement.querySelector('.photo');
  const userLog = rootElement.querySelector('#name-user');
  // const reF = firebase.storage().ref('profile-Images');

  const setUserData = () => {
    firebase.auth().onAuthStateChanged((userSign) => {
      userLog.innerHTML = userSign.displayName;
      profilePic.src = userSign.photoURL;
    });
  };

  const setNewProfileImg = (newPic) => {
    profilePic.src = newPic;
  };

  const changeProfileImage = (file, trocaImg) => {
    const ref = firebase.storage().ref('profileImages');
    ref
      .child(file.name)
      .put(file)
      .then(() => {
        ref.child(file.name)
          .getDownloadURL()
          .then((url) => {
            trocaImg(url);
            firebase.auth().currentUser.updateProfile({
              photoURL: url,
            });
          });
      });
  };

  const sendNewProfileImg = (changeImage) => {
    profilePic.addEventListener('click', () => {
      inputImg.style.opacity = 1;
      inputImg.onchange = (event) => {
        changeProfileImage(event.target.files[0], changeImage);
        inputImg.style.opacity = 0;
      };
    });
  };

  // const sendImg = () => {
  //   inputImg.onchange = (event) => {
  //     const photo = event.target.files[0];
  //     const reader = new FileReader();
  //     const uid = firebase.database().ref().push().key;

  //     reader.readAsDataURL(photo);
  //     reader.onload = function () {
  //       const base64 = reader.result.split('base64,')[1];

  //       reF
  //         .child(uid)
  //         .putString(base64, 'base64', { contentType: 'image/png' })
  //         .then((snapshot) => {
  //           console.log('snapshot', snapshot);
  //           reF
  //             .child(uid)
  //             .getDownloadURL()
  //             .then((url) => {
  //               console.log('string download', url);
  //   firebase.auth().currentUser.updateProfile({
  //     photoURL: url,
  // });
  //           });
  //       });
  //   };
  // };
  // sendImg();
  setUserData();
  changeProfileImage();
  sendNewProfileImg(setNewProfileImg);
  return rootElement;
};
// };

export default createPage;
