import firebase from '../services/firebase.js';
import { routes } from './config.js';

export const printPage = async (page) => {
  const main = document.getElementById('main');
  const userIsLogged = await firebase.getUser();
  let route = routes[page];
  if (!route) {
    route = routes['/notFound'];
  }

  if (route.protected && !userIsLogged) {
    route = routes['/login'];
  }

  if (page === '/login' && userIsLogged) {
    window.history.pushState({}, '...', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  } else {
    document.title = route.title;
    main.innerHTML = '';
    const pageElement = route.createPage();
    main.appendChild(pageElement);
  }
};
