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
    window.history.pushState({}, '...', '/');// histórico de navegacão entre as paginas.
    window.dispatchEvent(new PopStateEvent('popstate'));// dispara o evento que troca de página.
  } else {
    document.title = route.title;
    main.innerHTML = '';
    const pageElement = route.createPage();
    main.appendChild(pageElement);
  }
};
