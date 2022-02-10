import axios from 'axios';

const state = {
  user: null,
  token: null,
};

const getters = {
  isAuthenticated: state => !!state.token,
  stateUser: state => state.user,
  stateToken: state => state.token,
};

const actions = {
  async register({commit}, form) {
    let {data} = await axios.post('sign-up', form);

    await commit('setUser', data);
    await commit('setToken', `bearer ${data.token.access_token}`);
  },
  async logIn({dispatch, commit}, user) {
    let {data} = await axios.post('auth', user);
    await commit('setToken', `bearer ${data.access_token}`);
    await dispatch('viewMe');
  },
  async viewMe({commit}) {
    try {
      let {data} = await axios.get('users/me');
      await commit('setUser', data);
    } catch (e) {
      axios.defaults.headers.common = null;
      commit('logout', null);
    }


  },
  // eslint-disable-next-line no-empty-pattern
  // async deleteUser({}, id) {
  //   await axios.delete(`user/${id}`);
  // },
  async logOut({commit}) {
    let user = null;
    axios.defaults.headers.common = null;
    commit('logout', user);
  }
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  setToken(state, token){
    state.token = token;

    // if (token) {
    //   axios.defaults.headers.common['Authorization'] = token;
    // }else{
    //   delete axios.defaults.headers.common['Authorization'];
    // }
  },
  logout(state, user){
    state.user = user;
    this.commit('setToken', null);
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
