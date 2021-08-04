import { login } from './login.js';

const createHTML = () => `
<section class="container">
<div class="forms-container">
  <div class="signin-signup">
    <form action="#" class="sign-in-form">
      <img src="img/Amitié 1.png" alt="" class="logo">
      <h2 class="title">Login</h2>
      <div class="input-field">
        <i class="fas fa-user"></i>
        <input type="text" id='sign-in-email' placeholder="E-mail" />
      </div>
      <p id="email-error"></p>
      <div class="input-field">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Senha" id="password1" class="password" />
        <div class="toggle">
          <i id="show1" class="fa fa-eye" aria-hidden="true"></i>
            <i id=" hide1" class="fa fa-eye-slash" aria-hidden="true"></i>
        </div>
      </div>
      <input type="submit" value="Entrar" id="entrar" class="btn solid" />
      <p class="social-text">Ou entre com o Google</p>
      <div class="social-media">
        <a href="#" class="social-icon">
          <i class="fab fa-google"></i>
        </a>
      </div>
    </form>
    <form action="#"  id="form-sign-up" class="sign-up-form">
      <h2 class="title">Criar uma Conta</h2>
      <div class="input-field">
        <i class="fas fa-user"></i>
        <input type="text" id="sign-up-username" placeholder="Nome" />
      </div>
      <span class='msg-erro msg-nome'></span>
      <div class="input-field">
        <i class="fas fa-envelope"></i>
        <input type="email" id="sign-up-email" placeholder="Email"  />
      </div>
      <span class='msg-erro msg-email'></span>
      <div class="input-field">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Senha" id="password2" class="password"  />
        <div class="toggle">
          <i id="show2" class="fa fa-eye" aria-hidden="true"></i>
          <i id="hide2" class="fa fa-eye-slash" aria-hidden="true"></i>
        </div>
      </div>
      <span class='msg-erro msg-senha'></span>
      <div id='msgError'></div>
      <div id='msgSuccess'></div>
      <input type="submit" class="btn" id="register" value="Cadastrar" />
      <p class="social-text">Ou cadastre-se com o Google</p>
      <div class="social-media">
        <a href="#" class="social-icon">
          <i class="fab fa-google"></i>
        </a>
      </div>
    </form>
  </div>
</div>
<div class="panels-container">
  <div class="panel left-panel">
    <div class="content">
      <h3>Nova por aqui ?</h3>
      <p>
        Participe da nossa comunidade, que é exclusiva para mulheres e te permite fazer novas amizades em um
        ambiente acolhedor e seguro! Clique abaixo e junte-se a nós!
      </p>
      <button class="btn transparent" id="sign-up-btn">
        Cadastre-se
      </button>
    </div>
    <img src="img/women.svg" class="image" alt="" />
  </div>
  <div class="panel right-panel">
    <div class="content">
      <h3>Já possui cadastro?</h3>
      <p>
        Clique baixo em <strong>Entrar</strong>, juntas somos mais fortes!
      </p>
      <button class="btn transparent" id="sign-in-btn">
        Entrar
      </button>
    </div>
    <img src="img/social-interactions.svg" class="image" alt="" />
  </div>
</div>
</section>`;

const registerListeners = (rootElement) => {
  const signInBtn = rootElement.querySelector('#sign-in-btn');
  const signUpBtn = rootElement.querySelector('#sign-up-btn');
  const container = rootElement.querySelector('.container');
  const togglePassword = rootElement.querySelectorAll('.toggle');
  const signUp = rootElement.querySelector('#register');
  const verificarEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const nameUser = rootElement.querySelector('#sign-up-username');
  const msgName = rootElement.querySelector('.msg-nome');
  let validName = false;
  const email = rootElement.querySelector('#sign-up-email');
  const msgEmail = rootElement.querySelector('.msg-email');
  let validEmail = false;
  const signUpPassword = rootElement.querySelector('#password2');
  const msgPassword = rootElement.querySelector('.msg-senha');
  let validPassword = false;
  const msgError = rootElement.querySelector('#msgError');
  const msgSuccess = rootElement.querySelector('#msgSuccess');
  const emailInput = rootElement.querySelector('#sign-in-email');
  const loginButton = rootElement.querySelector('#entrar');

  signUpBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
  });

  signInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
  });

  const showHidePassword = (event) => {
    const toggle = event.currentTarget;
    const parent = toggle.parentNode;
    const password = parent.querySelector('.password');
    const showPassword = toggle.querySelector('.fa-eye');
    const hidePassword = toggle.querySelector('.fa-eye-slash');

    if (password.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text');
      showPassword.style.display = 'block';
      hidePassword.style.display = 'none';
    } else {
      password.setAttribute('type', 'password');
      showPassword.style.display = 'none';
      hidePassword.style.display = 'block';
    }
  };

  function signUpMode() {
    if (validName && validEmail && validPassword) {
      msgSuccess.style.display = 'block';
      msgSuccess.setAttribute('style', 'color: green');
      msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
      msgError.setAttribute('style', 'display: none');
      msgError.innerHTML = '';
    } else {
      msgError.style.display = 'block';
      msgError.setAttribute('style', 'color: red');
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente </strong>';
      msgSuccess.innerHTML = '';
      msgSuccess.setAttribute('style', 'display: none');
    }
  }

  togglePassword.forEach((btn) => {
    btn.addEventListener('click', showHidePassword);
  });
  // Login
  loginButton.addEventListener('click', () => {
    const emailsgn = emailInput.value;
    login(emailsgn);
  });
  // validação
  signUp.addEventListener('click', signUpMode);

  nameUser.addEventListener('keyup', () => {
    if (nameUser.value.length <= 2) {
      nameUser.setAttribute('style', 'color: red');
      msgName.innerHTML = 'Favor preencher o Nome';
      msgName.style.display = 'block';
      msgName.setAttribute('style', 'color: red');
      validName = false;
    } else {
      nameUser.setAttribute('style', 'color: green');
      msgName.style.display = 'none';
      validName = true;
    }
  });

  email.addEventListener('keyup', () => {
    if (email.value.length <= 2) {
      email.setAttribute('style', 'color: red');
      msgEmail.innerHTML = 'Favor preencher o Email';
      msgEmail.style.display = 'block';
      msgEmail.setAttribute('style', 'color: red');
      validEmail = false;
    } else if (verificarEmail.test(email.value)) {
      email.setAttribute('style', 'color: green');
      msgEmail.style.display = 'none';
      validEmail = true;
    } else {
      msgEmail.innerHTML = 'Formato do E-mail inválido';
      msgEmail.style.display = 'block';
      validEmail = false;
    }
  });

  signUpPassword.addEventListener('keyup', () => {
    if (signUpPassword.value.length <= 5) {
      msgPassword.setAttribute('style', 'color: red');
      msgPassword.innerHTML = 'Insira no mínimo 6 caracteres';
      msgPassword.style.display = 'block';
      msgPassword.setAttribute('style', 'color: red');
      validPassword = false;
    } else {
      signUpPassword.setAttribute('style', 'color: green');
      msgPassword.style.display = 'none';
      validPassword = true;
    }
  });
};

const createPage = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = createHTML();
  registerListeners(rootElement);
  return rootElement;
};

export default createPage;
