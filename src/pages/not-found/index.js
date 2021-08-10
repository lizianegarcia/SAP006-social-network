import { changePage } from '../../routes/changePage.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
    <h1>Ops! Página não encontrada.</h1>
    <a id="go-back">Voltar para página inicial</a>
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;

  const goBackButton = rootElement.querySelector('#go-back');
  goBackButton.addEventListener('click', () => {
    changePage('/');
  });

  return rootElement;
};

export default createPage;
