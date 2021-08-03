import { changePage } from "../../router.js";

const createHTML = () => {
  return `
    
    <h1>Ops! Página não encontrada.</h1>
    <a id="go-back">Voltar para página inicial</a>
  `;
};

const registerListeners = () => {
  const goBackButton = document.getElementById("go-back");
  goBackButton.addEventListener("click", () => {
    changePage('/');
  });
};

export default { createHTML, registerListeners };