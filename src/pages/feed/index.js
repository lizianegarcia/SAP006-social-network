import createProfileComponent from '../../components/profile/profile.js';

const createHTML = () => `
    <h1>Feed</h1>
  `;

const createPage = () => {
  const rootElement = document.createElement('div')
  rootElement.innerHTML = createHTML();

  const profileElement = createProfileComponent();
  rootElement.appendChild(profileElement);

  return rootElement;
};

export default createPage;
