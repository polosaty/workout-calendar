import axios from 'axios';

const state = {
  days: null,
  day: null
};

const getters = {
  stateDays: state => state.days,
  stateDay: state => state.day,
};

const actions = {
  async createDay({dispatch}, day) {
    await axios.post('days', day);
    await dispatch('getDays');
  },
  async getDays({commit}) {
    let {data} = await axios.get('days');
    commit('setDays', data);
  },
  async viewDay({commit}, id) {
    let {data} = await axios.get(`day/${id}`);
    commit('setDay', data);
  },
  // eslint-disable-next-line no-empty-pattern
  async updateDay({}, day) {
    await axios.patch(`day/${day.id}`, day.form);
  },
  // eslint-disable-next-line no-empty-pattern
  async deleteDay({}, id) {
    await axios.delete(`day/${id}`);
  }
};

const mutations = {
  setDays(state, days){
    state.days = days;
  },
  setDay(state, day){
    state.day = day;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
