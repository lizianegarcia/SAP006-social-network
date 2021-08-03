import loginPage from "./pages/login/page.js";
import homePage from "./pages/home/page.js";
import feedPage from "./pages/feed/page.js";
import notFoundPage from "./pages/not-found/page.js";

import auth from "./services/auth.js";

const main = document.getElementById("main");

const routes = {
  login: {
    title: "Acesse sua conta",
    functions: loginPage,
  },
  home: {
    title: "Página inicial",
    protected: true,
    functions: homePage,
  },
  feed: {
    title: "Feed",
    protected: true,
    functions: feedPage,
  },
  notFound: {
    title: "Página não encontrada",
    functions: notFoundPage,
  },
};

const printPage = (page) => {
  if (!page) {
    page = "home";
  }

  let route = routes[page];
  if (!route) {
    route = routes.notFound;
  }

  if (route.protected && !auth.getUser()) {
    route = routes.login;
  }

  if (page === "login" && auth.getUser()) {
    return changePage('home');
  }

  document.title = route.title;
  main.innerHTML = route.functions.createHTML();
  route.functions.registerListeners();
};

export const initiate = () => {
  window.addEventListener("popstate", () => {
    const page = window.location.hash;
    printPage(page.replace("#", ""));
  });

  const page = window.location.hash;
  printPage(page.replace("#", ""));
};

export const changePage = (page) => {
  const title = routes[page].title;
  history.pushState({}, title, `#${page}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};