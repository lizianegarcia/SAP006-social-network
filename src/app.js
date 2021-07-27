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
  const x = document.getElementById('password1');
  const y = document.getElementById('show1');
  const z = document.getElementById('hide1');

  if (x.type === 'password') {
    x.type = 'text';
    y.style.display = 'block';
    z.style.display = 'none';
  } else {
    x.type = 'password';
    y.style.display = 'none';
    z.style.display = 'block';
  }
}

function showHidePasswordTwo() {
  const x = document.getElementById('password2');
  const y = document.getElementById('show2');
  const z = document.getElementById('hide2');

  if (x.type === 'password') {
    x.type = 'text';
    y.style.display = 'block';
    z.style.display = 'none';
  } else {
    x.type = 'password';
    y.style.display = 'none';
    z.style.display = 'block';
  }
}

function showHidePasswordThree() {
  const x = document.getElementById('password3');
  const y = document.getElementById('show3');
  const z = document.getElementById('hide3');

  if (x.type === 'password') {
    x.type = 'text';
    y.style.display = 'block';
    z.style.display = 'none';
  } else {
    x.type = 'password';
    y.style.display = 'none';
    z.style.display = 'block';
  }
}
