<template>
  <div class="login">
    <div>{{ username }}</div>
    <div>{{ password }}</div>
    <form @submit="login">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">password</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import login from '../models/login'
// @ is an alias to /src
console.log(process.env.VUE_APP_API_URL)
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login (e) {
      // console.log(e)
      // try {
      // console.log(this.username)
        login(this.username, this.password)
        // console.log(res)
      // } catch (error) {
      //   console.log(error)
      // }
    }
  }
}
</script>
