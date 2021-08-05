/* eslint-disable import/no-cycle */
import createComponent from '../../components/profile/profile.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
    <h1>Feed</h1>
    `;

  rootElement.innerHTML = contentnewElement;

  const profileElement = createComponent();
  rootElement.appendChild(profileElement);

  return rootElement;
};

export default createPage;
