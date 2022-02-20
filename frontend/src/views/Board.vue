<template>
    <div>
        <section>
            <div id="training_day_types">
                <span v-if="training_day_types_label" >{{training_day_types_label}}</span>
            </div>
            <div id="schedule">
                <table class="schedule">
                    <thead>
                    <tr>
                        <th v-for="week_day in header" :key="week_day">{{week_day}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="week in weeks" :key="week">
                        <td v-for="week_day in week"
                            :key="week_day"
                            :class="{ scheduled: isScheduled(week_day.format('YYYY-MM-DD'))}"
                        ><span>{{week_day.format('DD MMM')}}</span>
                            <br />
                            <p>
                                <BoardDayCell
                                        :day="week_day"
                                        :day_data="days[week_day.format('YYYY-MM-DD')]"
                                        :add_handler="onAddClick"
                                        :del_handler="onDelClick"
                                />
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

<!--            <p>days:<pre>{{prettify(days)}}</pre></p>-->
<!--            <p>schedule:<pre>{{prettify(schedule)}}</pre></p>-->
<!--            <p>training_day_types:<pre>{{prettify(training_day_types)}}</pre></p>-->
<!--            <p>openAddDayModal:<pre>{{prettify(openAddDayModal)}}</pre></p>-->
        </section>

    <br/><br/>

  </div>

  <Teleport to="body">
    <div v-if="openAddDayModal" class="modal">
      <p>Дата: {{addDayData.day.format('dd DD MMM')}}</p>
      <select v-model="addDayData.training_day_type" class="form-select form-select-lg mb-3"
              aria-label="Тип треннировки">
        <option v-for="option in training_day_types" :value="option" :key="option.id">
          {{ option.name }}
        </option>
      </select><br/>
      <select
              v-model="addDayData.training_day_subtype"
              v-if="addDayData?.training_day_type?.details?.subtypes"
              class="form-select form-select-sm">
        <option v-for="option in addDayData.training_day_type.details.subtypes" :value="option" :key="option.id">
          {{ option.name }}
        </option>
      </select>
      <div class="form-floating">
        <textarea v-model="addDayData.comment"
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Коментарий</label>
      </div>

      <!--        <p>addDayData:{{JSON.stringify(addDayData)}}</p>-->
      <div class="modal-footer">
        <button @click="closeAddDay" class="btn btn-outline-secondary">Закрыть</button>
        <button @click="createDay" style="align: right" class="btn btn-primary">Отправить</button>
      </div>
    </div>
  </Teleport>


</template>


<script>
// import { mapGetters, mapActions } from 'vuex';
import * as moment from 'moment-ru';
import { mapGetters } from 'vuex';
import BoardDayCell from '@/components/BoardDayCell.vue'
// import days from "../store/modules/days";

const ru_moment = (x) => moment(x).locale('ru');

const getWeekHeader = () => {
    let startDay = ru_moment().startOf('week');
    let endDay = ru_moment().endOf('week');

    let header = [];
    for (let d = startDay; d <= endDay; d.add(1, 'days')){
        header.push(d.format('dd'));
    }
    return header;
}

const getDaysRange = (dateStart, dateEnd) => {
    let week = [];
    for(let day = dateStart ; day <= dateEnd ; day.add(1, 'day')){
        week.push(day.clone());
    }
    return week;
}


export default {
    name: 'Board',
    components: {
        BoardDayCell
    },
    methods: {
        prettify(obj) {
            return JSON.stringify(obj, null, 2)
        },
        getPrevDay(day){
            let prev_days = [];
            for(let d in this.days){
                if (d < day){
                    prev_days.push(d)
                }
            }
            prev_days.sort()
            const prev_day_key = prev_days[prev_days.length - 1]
            if (prev_day_key) {
                return this.days[prev_day_key]
            }
            return null
        },
        getLastEx(exs){
            if (exs){
                return exs[exs.length - 1]
            }
        },
        getNextTrainingDayType(before_last_training_day_type, last_training_day_type){
            if (!last_training_day_type){
                return null
            }
            const last_training_day_type_id = last_training_day_type.training_day_type.id
            const before_last_training_day_subtype_id = before_last_training_day_type && before_last_training_day_type.details ? before_last_training_day_type.details.subtype_id : null
            let prev_inxd = null
            let next_indx = null
            for(let i in this.training_day_types){
                if (this.training_day_types[i].id === last_training_day_type_id){
                    prev_inxd = +i;
                    break;
                }
            }
            if (prev_inxd === null){
                return null
            }

            if (prev_inxd >= this.training_day_types.length - 1){
                next_indx = +0;
            }else{
                next_indx = +prev_inxd + 1;
            }
            let training_day_type = this.training_day_types[next_indx];
            if (!training_day_type?.details?.subtypes) {
                return {type: training_day_type}
            } else {
                let prev_subtype_indx = null
                let next_subtype_indx = null
                // TODO: если будет больше 2х типов тренировочных дней нужно будет сравнивать id
                //  this.training_day_types[next_indx].id и before_last_training_day_type.id
                //  а также передавать больше дней

                const subtypes = this.training_day_types[next_indx].details.subtypes;
                for(let i in this.training_day_types) {
                    if (subtypes[i].id === before_last_training_day_subtype_id) {
                        prev_subtype_indx = i;
                        break;
                    }
                }
                if (prev_subtype_indx >= subtypes.length - 1) {
                    next_subtype_indx = +0;
                } else {
                    next_subtype_indx = +prev_subtype_indx + 1;
                }
                return {
                    type: training_day_type,
                    subtype: subtypes[next_subtype_indx]
                }
            }

        },
        async onDelClick(day){
            // console.log(this.days)

            let coroutines = [];
            for(let d of this.days[day.format('YYYY-MM-DD')]){
                coroutines.push(this.$store.dispatch("deleteDay", d.date))
            }
            await Promise.all(coroutines)
            await this.$store.dispatch('getDays')
        },
        async onAddClick(day){
            // console.log('onAddClick', day)
            const last_day = this.getLastEx(this.getPrevDay(day.format('YYYY-MM-DD')))
            const before_last_day = this.getLastEx(
                this.getPrevDay(ru_moment(last_day?.date).format('YYYY-MM-DD'))
            )
            const next_training_day = this.getNextTrainingDayType(before_last_day, last_day)
            this.addDayData = {
                day: day,

                //рассчитываем на основе предыдущего дня
                training_day_type: next_training_day?.type,
                training_day_subtype: next_training_day?.subtype,
            }
            this.openAddDayModal = true
        },
        isScheduled(day){
            return !!this.schedule.dates[day];
        },
        async closeAddDay(){
            this.openAddDayModal = false
            this.addDayData = null
        },
        async createDay(){
            let details = {};

            if (this.addDayData.comment){
                details.comment = this.addDayData.comment
            }
            if (this.addDayData.training_day_subtype){
                details.subtype_id = this.addDayData.training_day_subtype.id
            }
            let day_data = {
                date: this.addDayData.day,
                training_day_type_id: this.addDayData.training_day_type.id,
                details: details
            }
            this.$store.dispatch('createDay', day_data)
            this.openAddDayModal = false
            this.addDayData = null
        }

    },

    created: async function () {
        try {
            await this.$store.commit('setRange', {
                from_date: ru_moment().startOf('week').add(-7, 'day'),
                to_date: ru_moment().endOf('week').add(7, 'day'),
            });
            await Promise.all([
                this.$store.dispatch('getDays'),
                this.$store.dispatch('getSchedule'),
                this.$store.dispatch('getTrainigDayTypes'),
            ])
            this.training_day_types_label = this.training_day_types.map((x) => {
                if (x?.details?.subtypes){
                    const subtypes = x.details.subtypes.map((y) => y.name).join(', ')
                    return `${x.name}(${subtypes})`
                }
                return x.name;
            }).join(', ')

        } catch (error) {
            console.error(error);
            // await this.$router.push('/login');
        }

    },
    data() {
        return {
            // add day modal
            openAddDayModal: false,
            addDayData: null,
            training_day_types_label: '',
            start: 10,
            header: getWeekHeader(),
            week: getDaysRange(ru_moment().startOf('week'), ru_moment().endOf('week')),
            weeks: [
                getDaysRange(
                    ru_moment().startOf('week').add(-7, 'day'),
                    ru_moment().endOf('week').add(-7, 'day')),
                getDaysRange(
                    ru_moment().startOf('week'),
                    ru_moment().endOf('week')),
                getDaysRange(
                    ru_moment().startOf('week').add(7, 'day'),
                    ru_moment().endOf('week').add(7, 'day')),
            ],
            date_start: ru_moment().startOf('week').add(-7, 'day'),
            date_end: ru_moment().endOf('week').add(7, 'day'),
            form: {
                title: '',
                content: '',
            },
        };
    },

    computed: {
        ...mapGetters({
            days: 'stateDays',
            day: 'stateDay',
            training_day_types: 'stateTrainingDayTypes',
            schedule: 'stateSchedule'
        }),
    },
  // created: function() {
  //   return this.$store.dispatch('getNotes');
  // },
  // computed: {
  //   ...mapGetters({ notes: 'stateNotes'}),
  // },
  // methods: {
  //   ...mapActions(['createNote']),
  //   async submit() {
  //     await this.createNote(this.form);
  //   },
  // },
};
</script>


<style scoped>
:root {
    --vt-c-white: #ffffff;
    --vt-c-white-soft: #f9f9f9;
    --vt-c-white-mute: #f1f1f1;
/*}*/
/*:root {*/
    --vt-c-bg: var(--vt-c-white);
    --vt-c-bg-soft: var(--vt-c-white-soft);
    --vt-c-bg-mute: var(--vt-c-white-mute);
}

    .modal {
      /*position: fixed;*/
      /*z-index: 99999999;*/
      /*top: 20%;*/
      /*left: 50%;*/
        /*width: 300px;*/
        /*margin-left: -150px;*/
        display: block;
        position: fixed;
        z-index: 999;
        top: 20%;
        left: 50%;
        width: 600px;
        height: unset;
        margin-left: -150px;
        background-color: var(--bs-light);
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 16px #00000026;
        transition: background-color .5s ease;
    }


    @media print{
    @page {
        size: landscape;
        margin: 0;  /* this affects the margin in the printer settings */
    }
    body
    {
        border: solid 1px blue ;
        margin: 10mm 15mm 10mm 15mm; /* margin you want for the content */
    }

}

.schedule {
    /* border: solid black 1px; */
    width: 100%;
    padding: 0px;
    border-spacing: 0px;
}

.schedule > tbody > tr > td {
    border: solid black 0.5px;
    padding: 0px;
    vertical-align: top;
}
.schedule > thead > tr > th {
    border: solid black 0.5px;
    padding: 0px;
}

.schedule > tbody > tr {
    height: 100px;
}

table.cell {
    height: 100%;
    width: 100%;
}

table.cell {
    font-size: small;
}

table.cell .second-cell {
    border-left: solid black 0.5px;
    border-bottom: solid black 0.5px;
}

table.cell .thrid-cell {
    border-left: solid black 0.5px;
}
table.cell .left-cell {
    width: 50%;
}

td.scheduled {
    background-color: #efefef;
}
</style>
