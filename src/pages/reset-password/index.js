// import { changePage } from '../../router.js';

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

  // const goBackButton = rootElement.querySelector('#go-back');
  // goBackButton.addEventListener('click', () => {
  //   changePage('/');
  // });

  return rootElement;
};

export default createPage;
