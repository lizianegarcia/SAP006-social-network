const LOCALSTORAGE_USER = 'user';

const auth = {
  getUser: () => {
    const user = localStorage.getItem(LOCALSTORAGE_USER);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },

  login: (email) => {
    // chamou o firebase e fez o login
    const user = { email };
    localStorage.setItem(LOCALSTORAGE_USER, JSON.stringify(user));
  },

  logout: () => {
    localStorage.removeItem(LOCALSTORAGE_USER);
  },
};

export default auth;