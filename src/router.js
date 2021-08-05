/* eslint-disable no-use-before-define */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-cycle */
import loginPage from './pages/login/index.js';
import homePage from './pages/home/index.js';
import feedPage from './pages/feed/index.js';
import notFoundPage from './pages/not-found/index.js';

<<<<<<< HEAD
import auth from './services/auth.js';
=======
import firebase from './services/firebase.js';
  '/': {
    title: 'Página inicial',
    protected: true,
    createPage: homePage,
  },
  '/login': {
    title: 'Acesse sua conta',
<<<<<<< HEAD
    functions: loginPage,
=======
    createPage: loginPage,
>>>>>>> b91b974154080cc02a6e410c927c885d2a7b6a0b
  },
  '/feed': {
    title: 'Feed',
    protected: true,
    createPage: feedPage,
  },
  '/not-found': {
    title: 'Página não encontrada',
<<<<<<< HEAD
    functions: notFoundPage,
  },
};

// eslint-disable-next-line consistent-return
=======
    createPage: notFoundPage,
  },
};

export const changePage = (page) => {
  const route = routes[page];
  const title = route.title;
  window.history.pushState({}, title, page);
  printPage(page);
};

>>>>>>> b91b974154080cc02a6e410c927c885d2a7b6a0b
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
<<<<<<< HEAD

  document.title = route.title;
  main.innerHTML = route.functions.createHTML();
  route.functions.registerListeners();
=======
>>>>>>> b91b974154080cc02a6e410c927c885d2a7b6a0b
};

export const initiate = () => {
  window.addEventListener('popstate', () => {
    printPage(window.location.pathname);
  });

  window.addEventListener('load', () => {
    printPage(window.location.pathname);
  });
};
<<<<<<< HEAD

export const changePage = (page) => {
  const route = routes[page];
  const title = route.title;
  history.pushState({}, title, page);
  window.dispatchEvent(new PopStateEvent('popstate'));
};
=======
>>>>>>> b91b974154080cc02a6e410c927c885d2a7b6a0b
