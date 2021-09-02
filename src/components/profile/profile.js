import { logout } from './logout.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
        
  <button id="logout">Sair</button>
`;
  rootElement.innerHTML = contentnewElement;

  const logoutButton = rootElement.querySelector('#logout');
  logoutButton.addEventListener('click', logout);

  return rootElement;
};
export default createPage;
