/* eslint-disable import/no-cycle */
import forgotYourPassword from '../../services/firebase.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
  <link rel="stylesheet" href="./pages/reset-password/style.css" />
  
  <section class="container">
  <div class="forms-container">
    <div class="signin-signup">
      <form action="#" class="sign-in-form">
        <img src="img/Amitié1.png" alt="" class="logo">
        <h2 class="title">Para redefinir sua senha, informe o endereço de e-mail cadastrado:</h2>
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input type="text" id='sign-in-email' placeholder="digite seu e-mail." />
        </div>        
        <input type="submit" value="redefinir senha" id="entrar" class="btn solid" />
      </form>
        </section>
  `;
  // // registerListener
  rootElement.innerHTML = contentnewElement;
  const btnResetPassword = rootElement.querySelector('.sign-in-form');
  btnResetPassword.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = rootElement.querySelector('#sign-in-email');

    const email = emailInput.value;

    forgotYourPassword(email);
  });

  return rootElement;
};

export default createPage;
