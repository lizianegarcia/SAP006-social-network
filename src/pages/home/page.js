import profile from "../../components/profile/profile.js";
import { changePage } from "../../router.js";

const createHTML = () => {
  return `
  <a id="move-on">Ir para o feed</a>
    <h1>Boas vindas</h1>
    ${profile.createHTML()}
    
  `;
};

const registerListeners = () => {
  profile.registerListeners();

  const moveOn = document.getElementById("move-on");
  moveOn.addEventListener("click", () => {
    changePage('/feed');
  });
};

export default { createHTML, registerListeners };