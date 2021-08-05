import { changePage } from '../../router.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
      <a id="move-home">Ir para a Home</a>
      <h1>Criar Perfil</h1>
     
    `;
  rootElement.innerHTML = contentnewElement;
  const moveOn = rootElement.querySelector('#move-home');
  moveOn.addEventListener('click', () => {
    changePage('/');
  });
  return rootElement;
};

export default createPage;
