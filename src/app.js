// Interação animação

const signInBtn = document.querySelector('#sign-in-btn');
const signUpBtn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const togglePassword = document.querySelectorAll('.toggle');

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
    password.setAttribute('type', 'text');;
    showPassword.style.display = 'block';
    hidePassword.style.display = 'none';
  } else {
    password.setAttribute('type', 'password');
    showPassword.style.display = 'none';
    hidePassword.style.display = 'block';
  }
}

togglePassword.forEach(btn => {
  btn.addEventListener('click', showHidePassword)
})
