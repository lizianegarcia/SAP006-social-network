/* eslint-disable import/no-cycle */
// import firebase from '../../services/firebase.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
    <h1>Perfil</h1>
    <input type="file" id="profileImg">
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;
  const inputImg = rootElement.querySelector('#profileImg');
  const ref = firebase.storage().ref('photos');

  const sendImg = () => {
    inputImg.onchange = (event) => {
      const photo = event.target.files[0];
      const reader = new FileReader();
      const uid = firebase.database().ref().push().key;

      reader.readAsDataURL(photo);
      // eslint-disable-next-line func-names
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
                console.log('string download', url);
              });
          });
      };
    };
  };
  sendImg();
  return rootElement;
};

export default createPage;
