// // Este é o ponto de entrada da sua aplicação

import { loginPage } from './pages/login/index.js';
import { createProfilePage } from './pages/create-profile/index.js';
import { feedPage } from './pages/feed/index.js';

// myFunction();

const routes = {
  '/': loginPage,
  '/login': loginPage,
  '/create-profile': createProfilePage,
  '/feed': feedPage,
};

export const routeRender = () => {
  const root = document.getElementById('root');
  const path = window.location.pathname;
  const page = routes[path]();
  root.innerHTML = '';
  root.appendChild(page);
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', routeRender);
