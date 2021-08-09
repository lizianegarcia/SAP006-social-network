/* eslint-disable no-use-before-define */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-cycle */
import loginPage from './pages/login/index.js';
import homePage from './pages/home/index.js';
import createProfilePage from './pages/create-profile/index.js';
import feedPage from './pages/feed/index.js';
import notFoundPage from './pages/not-found/index.js';
import resetPasswordPage from './pages/reset-password/index.js';

import firebase from './services/firebase.js';

const main = document.getElementById('main');

const routes = {
  '/': {
    title: 'Página inicial',
    protected: true,
    createPage: homePage,
  },
  '/login': {
    title: 'Acesse sua conta',
    createPage: loginPage,
  },
  '/create-profile': {
    title: 'Acesse sua conta',
    createPage: createProfilePage,
  },
  '/feed': {
    title: 'Feed',
    protected: true,
    createPage: feedPage,
  },
  '/not-found': {
    title: 'Página não encontrada',
    createPage: notFoundPage,
  },
  '/reset-password': {
    title: 'Esqueceu a senha',
    createPage: resetPasswordPage,
  },
};

export const changePage = (page) => {
  const route = routes[page];
  const title = route.title;
  window.history.pushState({}, title, page);
  printPage(page);
};

const printPage = async (page) => {
  const userIsLogged = await firebase.getUser();
  let route = routes[page];
  if (!route) {
    route = routes['/notFound'];
  }

  if (route.protected && !userIsLogged) {
    route = routes['/login'];
  }

  if (page === '/login' && userIsLogged) {
    changePage('/');
  } else {
    document.title = route.title;
    main.innerHTML = '';
    const pageElement = route.createPage();
    main.appendChild(pageElement);
  }
};

export const initiate = () => {
  window.addEventListener('popstate', () => {
    printPage(window.location.pathname);
  });

  window.addEventListener('load', () => {
    printPage(window.location.pathname);
  });
};
