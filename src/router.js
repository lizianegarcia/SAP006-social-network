/* eslint-disable import/no-cycle */
import loginPage from './pages/login/index.js';
import homePage from './pages/home/index.js';
import feedPage from './pages/feed/index.js';
import notFoundPage from './pages/not-found/index.js';

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
  '/feed': {
    title: 'Feed',
    protected: true,
    createPage: feedPage,
  },
  '/not-found': {
    title: 'Página não encontrada',
    createPage: notFoundPage,
  },
};

export const changePage = (page) => {
  const route = routes[page];
  const title = route.title;
  window.history.pushState({}, title, page);
  printPage(page);
};

const printPage = (page) => {
  let route = routes[page];
  if (!route) {
    route = routes['/notFound'];
  }

  if (route.protected && !firebase.getUser()) {
    route = routes['/login'];
  }

  if (page === '/login' && firebase.getUser()) {
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
