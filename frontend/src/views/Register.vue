<template>
  <section>
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="name" class="form-label">Username:</label>
        <input type="text" name="name" v-model="user.name" class="form-control" />
      </div>
      <!--<div class="mb-3">
        <label for="full_name" class="form-label">Full Name:</label>
        <input type="text" name="full_name" v-model="user.full_name" class="form-control" />
      </div>-->
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" name="password" v-model="user.password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: '',
        // full_name: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['register']),
    async submit() {
      try {
        await this.register(this.user);
        this.$router.push('/dashboard');
      } catch (error) {
        throw 'Username already exists. Please try again.';
      }
    },
  },
};
</script>
