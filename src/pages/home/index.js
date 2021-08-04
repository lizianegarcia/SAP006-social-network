import createProfileComponent from '../../components/profile/profile.js';
import { changePage } from '../../router.js';

const createHTML = () => `
    <a id="move-on">Ir para o feed</a>
    <h1>Boas vindas</h1>
  `;

const registerListeners = (rootElement) => {
  const moveOn = rootElement.querySelector('#move-on');
  moveOn.addEventListener('click', () => {
    changePage('/feed');
  });
};
const createPage = () => {
  const rootElement = document.createElement('div')
  rootElement.innerHTML = createHTML();
  registerListeners(rootElement);

  const profileElement = createProfileComponent();
  rootElement.appendChild(profileElement);
  return rootElement;
};

export default createPage;

