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
// @flow
import login from '../models/login'

export default {
  name: 'Login',
  data (): Object {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login (e: Event) {
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
