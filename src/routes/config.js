import loginPage from '../pages/login/index.js';
import homePage from '../pages/home/index.js';
import createProfilePage from '../pages/create-profile/index.js';
import feedPage from '../pages/feed/index.js';
import notFoundPage from '../pages/not-found/index.js';
import resetPasswordPage from '../pages/reset-password/index.js';

export const routes = {
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
