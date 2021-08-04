import { logout } from './logout.js';

const createHTML = () => `
        <button id="logout">Sair</button>
    `;

const registerListeners = (rootElement) => {
  const logoutButton = rootElement.querySelector('#logout');
  logoutButton.addEventListener('click', logout);
};

const createComponent = () => {
  const rootElement = document.createElement('div')
  rootElement.innerHTML = createHTML();
  registerListeners(rootElement);
  return rootElement;
};

export default createComponent;
