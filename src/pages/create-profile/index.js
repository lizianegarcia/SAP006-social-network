const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
    <h1>Perfil</h1>
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;

  return rootElement;
};

export default createPage;
