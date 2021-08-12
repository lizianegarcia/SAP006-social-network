import loginPage from '../pages/login/index.js';
import createProfilePage from '../pages/create-profile/index.js';
import feedPage from '../pages/feed/index.js';
import notFoundPage from '../pages/not-found/index.js';
import resetPasswordPage from '../pages/reset-password/index.js';

export const routes = {
  '/': {
    title: 'Feed',
    protected: true,
    createPage: feedPage,
  },
  '/login': {
    title: 'Acesse sua conta',
    createPage: loginPage,
  },
  '/create-profile': {
    title: 'Acesse sua conta',
    createPage: createProfilePage,
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
