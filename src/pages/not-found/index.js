import { changePage } from '../../router.js';

const createHTML = () => `
    <h1>Ops! Página não encontrada.</h1>
    <a id="go-back">Voltar para página inicial</a>
  `;

const registerListeners = (rootElement) => {
  const goBackButton = rootElement.querySelector('#go-back');
  goBackButton.addEventListener('click', () => {
    changePage('/');
  });
};

const createPage = () => {
  const rootElement = document.createElement('div')
  rootElement.innerHTML = createHTML();
  registerListeners(rootElement);
  return rootElement;
};

export default createPage;
