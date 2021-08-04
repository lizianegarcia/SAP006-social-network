/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
import loginPage from './pages/login/index.js';
import homePage from './pages/home/index.js';
import feedPage from './pages/feed/index.js';
import notFoundPage from './pages/not-found/index.js';

import auth from './services/auth.js';

const main = document.getElementById('main');

const routes = {
  '/': {
    title: 'Página inicial',
    protected: true,
    functions: homePage,
  },
  '/login': {
    title: 'Acesse sua conta',
    functions: loginPage,
  },
  '/feed': {
    title: 'Feed',
    protected: true,
    functions: feedPage,
  },
  '/not-found': {
    title: 'Página não encontrada',
    functions: notFoundPage,
  },
};

const printPage = (page) => {
  let route = routes[page];
  if (!route) {
    route = routes['/notFound'];
  }

  if (route.protected && !auth.getUser()) {
    route = routes['/login'];
  }

  if (page === '/login' && auth.getUser()) {
    return changePage('/');
  }

  document.title = route.title;
  main.innerHTML = route.functions.createHTML();
  route.functions.registerListeners();
};

export const initiate = () => {
  window.addEventListener('popstate', () => {
    printPage(window.location.pathname);
  });

  printPage(window.location.pathname);
};

export const changePage = (page) => {
  const route = routes[page];
  const title = route.title;
  history.pushState({}, title, page);
  window.dispatchEvent(new PopStateEvent('popstate'));
};
