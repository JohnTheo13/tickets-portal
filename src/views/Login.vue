<template>
  <BoxWrapper classnames="login">
    <form @submit="login">
      <p v-show="error.length" class="input-error">error</p>
      <div class="input-field">
        <label for="username">Username</label>
        <div class="icon icon_profile" />
        <input @input="change" type="text" id="username" v-model="username" />
      </div>
      <div class="input-field">
        <label for="password">password</label>
        <div class="icon icon_key" />
        <input
          @input="change"
          type="password"
          id="password"
          v-model="password"
        />
      </div>
      <Button type="submit" :disabled="!isValid()">Login</Button>
    </form>
  </BoxWrapper>
</template>

<script>
// @flow
import login from '../models/login'
import { Button, BoxWrapper } from '../components'

interface State {
  username: string;
  password: string;
}

export default {
  name: 'Login',
  components: {
    Button,
    BoxWrapper
  },
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
  form {
    /* padding: spacer(12); */
    input {
      padding: 8px 8px 8px 48px;
    }
    .input-error {
      color: red;
      margin: 2px 0;
      font-size: spacer(7);
    }
    .icon {
      position: absolute;
      bottom: 0;
      background-size: 28px;
    }
    button {
      height: 50px;
    }
  }
  .icon_header {
    position: relative;
    height: 84px;
    background-size: 150px 32px;
    width: 100%;
    border-bottom: 1px solid $grey;
  }
}
</style>
