import profileComponent from "../../components/profile/profile.js";

const createHTML = () => `
    <h1>Feed</h1>
    ${profileComponent.createHTML()}
  `;

const registerListeners = () => {
  profileComponent.registerListeners();
};

export default { createHTML, registerListeners };
