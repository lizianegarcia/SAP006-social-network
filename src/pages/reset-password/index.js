/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import firebase from '../../services/firebase.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
  <section class="reset-password-container">
  <div class="container-form">
    <div class="reset-container">
      <form action="#" class="reset-password form-forger-password">
        <img src="img/Amitié1.png" alt="" class="reset-logo">
        <h2 class="title-reset">Para redefinir sua senha, informe o endereço de e-mail cadastrado:</h2>
        <div class="reset-input">
          <i class="fas fa-user"></i>
          <input type="text" id='reset-email' placeholder="digite seu e-mail." />
        </div> 
        <p id="reset-email-error"></p>
        <p id="reset-email-success"></p>       
        <input type="submit" value="redefinir senha" id="reset" class="btn-reset" />
      </form>
        </section>
  `;
  rootElement.innerHTML = contentnewElement;

  const btnResetPassword = rootElement.querySelector('.reset-password');

  btnResetPassword.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailInput = rootElement.querySelector('#reset-email');
    const emailResetError = rootElement.querySelector('#reset-email-error');
    const emailResetSuccess = rootElement.querySelector('#reset-email-success');

    const email = emailInput.value;
    let resetError = false;

    emailResetError.style.display = 'none';
    emailResetSuccess.style.display = 'none';

    if (!email) {
      emailResetError.innerHTML = 'Ops, faltou seu email!';
      emailResetError.setAttribute('style', 'color: red');
      emailResetError.style.display = 'block';
      resetError = true;
    }
    if (!resetError) {
      try {
        await firebase.forgotYourPassword(email);
        emailResetSuccess.innerHTML = 'E-mail enviado com sucesso!';
        emailResetSuccess.setAttribute('style', 'color: green');
        emailResetSuccess.style.display = 'block';
      } catch (error) {
        emailResetError.innerHTML = 'E-mail incorreto!';
        emailResetError.setAttribute('style', 'color: red');
        emailResetError.style.display = 'block';
      }
    }
  });

  return rootElement;
};

export default createPage;
