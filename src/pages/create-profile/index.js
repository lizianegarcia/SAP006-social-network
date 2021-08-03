export const createProfilePage = () => {
  const section = document.createElement('section');
  section.setAttribute('class', 'container');

  const createProfileTemplate = `
    <h1> Create Profile </h1>
  `;

  section.innerHTML = createProfileTemplate;

  return section;
};
