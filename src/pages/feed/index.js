export const feedPage = () => {
  const section = document.createElement('section');
  section.setAttribute('class', 'container');

  const feedPageTemplate = `
    <h1> Feed Page </h1>
  `;

  section.innerHTML = feedPageTemplate;

  return section;
};
