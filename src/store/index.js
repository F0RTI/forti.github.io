import { createStore } from 'vuex';
import i18n from '../i18n';

const store = createStore({
  state: {
    lang: 'en'
  },
  mutations: {
    setLanguage(state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    changeLang({ commit }, lang) {
      commit('setLanguage', lang);
      i18n.global.locale = lang;
    }
  },
  getters: {
    lang: state => state.lang
  }
});

export default store;