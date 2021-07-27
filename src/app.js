// Interação animação

const signInBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

signUpBtn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

// Mostrar/Ocultar Senha
function showHidePasswordOne() {
  const password = document.getElementById('password1');
  const show = document.getElementById('show1');
  const hide = document.getElementById('hide1');

  if (password.type === 'password') {
    password.type = 'text';
    show.style.display = 'block';
    hide.style.display = 'none';
  } else {
    password.type = 'password';
    show.style.display = 'none';
    hide.style.display = 'block';
  }
}

function showHidePasswordTwo() {
  const password = document.getElementById('password2');
  const show = document.getElementById('show2');
  const hide = document.getElementById('hide2');

  if (password.type === 'password') {
    password.type = 'text';
    show.style.display = 'block';
    hide.style.display = 'none';
  } else {
    password.type = 'password';
    show.style.display = 'none';
    hide.style.display = 'block';
  }
}

function showHidePasswordThree() {
  const password = document.getElementById('password3');
  const show = document.getElementById('show3');
  const hide = document.getElementById('hide3');

  if (password.type === 'password') {
    password.type = 'text';
    show.style.display = 'block';
    hide.style.display = 'none';
  } else {
    password.type = 'password';
    show.style.display = 'none';
    hide.style.display = 'block';
  }
}
