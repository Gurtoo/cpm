export const state = () => ({
  menu: false,
  locales: ['ru', 'en'],
  locale: 'ru'
});

export const mutations = {
  setMenu(state, payload) {
    state.menu = payload;
  },
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
};

export const getters = {};
