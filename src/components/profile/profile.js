/* eslint-disable import/no-cycle */
import { logout } from './logout.js';

const createHTML = () => `
        
        <button id="logout">Sair</button>
    `;

const registerListeners = () => {
  const logoutButton = document.getElementById('logout');
  logoutButton.addEventListener('click', logout);
};

export default { createHTML, registerListeners };
