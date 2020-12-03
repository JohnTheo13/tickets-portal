<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @flow
import HelloWorld from '../components/HelloWorld'
import { Ticket } from '../models/types'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data (): { items: Ticket[] } {
    return {
      items: []
    }
  }
}
</script>
