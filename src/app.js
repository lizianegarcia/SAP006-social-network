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


const signUp = document.getElementById('cadastrar')
const verificarEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

let nameUser = document.getElementById('sign-up-username');
const msgName  = document.querySelector('.msg-nome');
let validName = false;

let email = document.getElementById('sign-up-email');
const msgEmail = document.querySelector('.msg-email');
let validEmail = false;

let signUpPassword = document.getElementById('password2');
const msgPassword = document.querySelector('.msg-senha');
let validPassword = false;

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

signUp.addEventListener('click', signUpMode);


nameUser.addEventListener('keyup', () => {
  if(nameUser.value.length <= 2){
    nameUser.setAttribute('style', 'color: red')
    msgName.innerHTML = 'Favor preencher o Nome';
    msgName.style.display = 'block';
    msgName.setAttribute('style', 'color: red') 
    validName = false;

  }else{

    nameUser.setAttribute('style', 'color: green')
    msgName.style.display = 'none';
    validName = true
  }
})

email.addEventListener('keyup', () => {
  if(email.value.length <= 2){
    email.setAttribute('style', 'color: red')
    msgEmail .innerHTML = 'Favor preencher o Email';
    msgEmail .style.display = 'block';
    msgEmail .setAttribute('style', 'color: red')
    validEmail = false;

  }else if(verificarEmail.test(email.value)){
    email.setAttribute('style', 'color: green')
    msgEmail .style.display = 'none';
    validEmail = true;

  } else{
    msgEmail .innerHTML = "Formato do E-mail inválido";
    msgEmail .style.display = 'block';
    validEmail = false;
  }
})

signUpPassword.addEventListener('keyup', () => {
  if(signUpPassword.value.length <= 5){
    msgPassword.setAttribute('style', 'color: red')
    msgPassword.innerHTML = 'Insira no mínimo 6 caracteres';
    msgPassword.style.display = 'block';
    msgPassword.setAttribute('style', 'color: red') 
    validPassword = false;
  }else{
    signUpPassword.setAttribute('style', 'color: green')
    msgPassword.style.display = 'none';
    validPassword = true;
  }
})

function signUpMode() {
  if(validName && validEmail && validPassword){

    // let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
    
    // listUser.push(
    // {
    //   nomeCad: nameUser.value,
    //   emailCad: email.value,
    //   senhaCad: signUpPassword.value
    // }
    // )
    
    // localStorage.setItem('listUser', JSON.stringify(listUser))


    msgSuccess.style.display = 'block';
    msgSuccess.setAttribute('style', 'color: green')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

  }else{
    msgError.style.display = 'block';
    msgError.setAttribute('style', 'color: red')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente </strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}



