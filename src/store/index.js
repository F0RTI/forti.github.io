import { createStore } from 'vuex';
import i18n from '../i18n';
import Cookies from 'js-cookie';

document.documentElement.setAttribute('data-theme', Cookies.get('theme') || 'default');
document.documentElement.setAttribute('lang', 'en');

const store = createStore({
  state: {
    lang: 'en',
    theme: Cookies.get('theme') || 'default'
    // TODO сделать отдельно смену языка для админки и для фронта
  },
  mutations: {
    setLanguage(state, lang) {
      state.lang = lang;
    },
    setTheme(state, theme) {
      state.theme = theme;
      Cookies.set('theme', theme);
    }
  },
  actions: {
    changeLang({ commit }, lang) {
      commit('setLanguage', lang);
      i18n.global.locale = lang;
      document.documentElement.setAttribute('lang', lang);
    },
    changeTheme({ commit }, theme) {
      commit('setTheme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  },
  getters: {
    lang: state => state.lang,
    theme: state => state.theme
  }
});

export default store;