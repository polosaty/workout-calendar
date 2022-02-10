import createPersistedState from "vuex-persistedstate";
import Vuex from 'vuex';

import notes from './modules/days';
import users from './modules/users';


export default new Vuex.Store({
  modules: {
    notes,
    users,
  },
  plugins: [createPersistedState()]
});
