import { changePage } from '../../routes/changePage.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
  <section class="not-found-container">
  <div class="not-found-glass">
    <div class="not-found-content">
     <img class="not-found-logo" src="./img/Amitié2.png" alt="">
      <h1 class="not-found-title">Ops! Página não encontrada.</h1>
      <a class="go-back-feed">Clique aqui para ir para o feed!</a>
      <img src="./img/undraw_happy_women_day_fbjt.svg" class='image-not-found' alt=''/>
    </div>
  </div>
</section>
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;

  const goBackButton = rootElement.querySelector('.go-back-feed');
  goBackButton.addEventListener('click', () => {
    changePage('/');
  });

  return rootElement;
};

export default createPage;
