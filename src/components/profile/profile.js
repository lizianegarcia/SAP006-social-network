import { logout } from "./logout.js";

const createHTML = () => {
  return `
        
        <button id="logout">Sair</button>
    `;
};

const registerListeners = () => {
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", logout);
};

export default { createHTML, registerListeners };