/* eslint-disable import/no-cycle */
import { changePage } from '../../router.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
    <a id="move-on">Ir para o feed</a>
    <h1>Boas vindas</h1>
   
  `;
  rootElement.innerHTML = contentnewElement;
  const moveOn = rootElement.querySelector('#move-on');
  moveOn.addEventListener('click', () => {
    changePage('/feed');
  });
  return rootElement;
};

export default createPage;
