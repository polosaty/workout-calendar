<template>
  <section>
    <h1>Your Profile</h1>
    <hr/><br/>
    <div>
<!--      <p><strong>Full Name:</strong> <span>{{ user.full_name }}</span></p>-->
      <p><strong>Id:</strong> <span>{{ user ? user.id : '' }}</span></p>
      <p><strong>Username:</strong> <span>{{ user ? user.name : ''}}</span></p>
<!--      <p><button @click="deleteAccount()" class="btn btn-primary">Delete Account</button></p>-->
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Profile',
  created: async function() {
      try {
         await this.$store.dispatch('viewMe');
      } catch (error) {
          console.error(error);
          await this.$router.push('/login');
      }

  },
  computed: {
    ...mapGetters({user: 'stateUser', token: 'stateToken' }),
  },
  // methods: {
  //   ...mapActions(['deleteUser']),
  //   async deleteAccount() {
  //     try {
  //       await this.deleteUser(this.user.id);
  //       await this.$store.dispatch('logOut');
  //       this.$router.push('/');
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // },
}
</script>
