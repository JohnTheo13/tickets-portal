<template>
  <div class="login">
    <form @submit="login">
      <div class="input-field">
        <label for="username">Username</label>
        <input @input="change" type="text" id="username" v-model="username" />
      </div>
      <div class="input-field">
        <label for="password">password</label>
        <input  @input="change" type="password" id="password" v-model="password" />
      </div>
      <p v-show="error.length" >error</p>
      <button type="submit" :disabled="!isValid()">login</button>
    </form>
  </div>
</template>

<script>
// @flow
import login from '../models/login'

interface State {
  username: string;
  password: string;
}

export default {
  name: 'Login',
  data (): State {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login (e: Event): Promise<void> {
      // console.log(e)
      try {
        await login(this.username, this.password)
      } catch (error) {
        console.log(error)
        this.error = 'Wrong credentials'
      }
    },
    change (e: Event): void {
      this.error = ''
    },
    isValid (): boolean {
      return this.username.length > 2 && this.password.length > 2
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background: $white;
  max-width: 40%;
  margin: auto;
  padding: spacer(6);
  border: 1px solid grey;
  height: 12em;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    .input-field {
      display: flex;
      flex-direction: column;
      > input {
        height: 24px;
      }
    }
    button {
      /* color: $primary; */
      padding: spacer(4);
      background: $primary;
      height: 50px;
      &:disabled {
        background: grey;
      }
    }
  }
}
</style>
