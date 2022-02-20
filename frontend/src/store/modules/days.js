import axios from 'axios';
import * as moment from 'moment-ru';

const ru_moment = (x) => moment(x).locale('ru');

const state = {
  from_date: null,
  to_date: null,
  training_day_types: null,
  schedule: null,
  days: null,
  day: null
};

const getters = {
  stateDays: state => state.days,
  stateDay: state => state.day,
  stateTrainingDayTypes: state => state.training_day_types,
  stateSchedule: state => state.schedule,
  stateDaysRange: state => {
    return {
      "from_date": state.from_date,
        "to_date": state.to_date
    }
  },
};

const actions = {
  async createDay({dispatch}, day) {
    await axios.post('day/', day);
    await dispatch('getDays');
  },
  async getDays({commit, getters}) {
    let {data} = await axios.get(
        'days/',
        {
          params: {
            from_date: getters.stateDaysRange.from_date.toISOString(),
            to_date: getters.stateDaysRange.to_date.toISOString(),
          }
        });

    commit('setDays', data);
  },
  async getSchedule({commit, getters}) {
    let {data} = await axios.get(
        'schedule/',
        {
          params: {
            from_date: getters.stateDaysRange.from_date.toISOString(),
            to_date: getters.stateDaysRange.to_date.toISOString(),
          }
        });

    commit('setSchedule', data);
  },
  async getTrainigDayTypes({commit}){
    let {data} = await axios.get('training_day_types/');
    commit('setTrainigDayTypes', data);
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
    await axios.delete(`day/${id}/`);
  }
};

const mutations = {
  setSchedule(state, schedule){
    let dates = {};
    // Object.fromEntries( schedule.dates.map( x => [x, true]) );
    for(let s of schedule){
      for(let d of s.dates){
        dates[d] = true;
      }
    }
    state.schedule = {schedules: schedule, dates: dates};
  },
  setTrainigDayTypes(state, training_day_types){
    state.training_day_types = training_day_types;
  },
  setRange(state, {from_date, to_date}) {
    state.from_date = from_date;
    state.to_date = to_date;
  },
  setDays(state, days){
    let _days = {};
    for (let d of days){
        let day = ru_moment(d.date).startOf('day').format('YYYY-MM-DD');
        // console.log(day);
        if (_days[day] === undefined) {
          _days[day] = [];
        }

        _days[day].push(d);
    }
    state.days = _days;
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
