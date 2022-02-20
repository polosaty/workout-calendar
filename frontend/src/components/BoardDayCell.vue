<template>
  <div v-if="day_data">
    <span>
      {{render_day(day_data)}}
      <i class="bi bi-trash3" @click="onDayDelClick($event, day)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>
      </i>
    <p>{{render_comment(day_data)}}</p>
    </span>
  </div>

<!--  <BIconPlusSquare v-else />-->
  <span v-else @click="onDayAddClick($event, day)"><i class="bi bi-plus-square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></i></span>
<!--<button v-else @click="onClick()">click321</button>-->
</template>

<script>
// import { BIconPlusSquare } from 'bootstrap-vue'

export default {
    name: 'BoardDayCell',
    props: ['day', 'day_data', 'add_handler', 'del_handler'],
    // components: [BIconPlusSquare],
    created: async function () {
        // console.log(123);
    },
    methods: {
        async onDayDelClick(event, day){
            await this.del_handler(day);
        },
        async onDayAddClick(event, day){
            // console.log(event, day.toISOString());
            await this.add_handler(day);
            // await this.$store.dispatch('createDay', {date: day, training_day_type: 1});

        },
        render_comment(day_data){
            return day_data.map((x) => {
                let comment = '';

                if (x.details?.comment){
                    comment = x.details.comment
                }

                return comment
            }).join(',')
        },
        render_day(day_data){
            return day_data.map((x) => {
                if (x.details?.subtype_id){
                    let subtype = x.training_day_type.details.subtypes.filter(t => t.id === x.details.subtype_id)[0];
                    if (subtype) {
                        return `${x.training_day_type.name}(${subtype.name})`;
                    }
                }

                return `${x.training_day_type.name}`
            }).join(',')
        }
    }
    // data() {
    //   return {
    //       day: '1'
    //   }
    // }
  // computed: {
  //   isLoggedIn: function() {
  //     return this.$store.getters.isAuthenticated;
  //   }
  // },
  // methods: {
    // async logout () {
    //   await this.$store.dispatch('logOut');
    //   this.$router.push('/login');
    // }
  // },
}
</script>

<style scoped>
a {
    cursor: pointer;
}
i.bi-plus-square,  i.bi-trash3 {
    cursor: pointer;
}
</style>
