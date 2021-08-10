export const changePage = (page) => {
  window.history.pushState({}, 'Loading...', page);
  window.dispatchEvent(new PopStateEvent('popstate'));
};
