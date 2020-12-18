<template>
  <div class="container">
    <router-link to="/create"
      ><Button><div class="icon icon_plus"/></Button
    ></router-link>
    <router-link to="/tickets"
      ><Button><div class="icon icon_list"/></Button
    ></router-link>
    <router-link to="/"
      ><Button disabled><div class="icon icon_profile"/></Button
    ></router-link>
  </div>
</template>

<script>
// @flow
import { Button } from '../components'

export default {
  name: 'Home',
  components: {
    Button
  }
}
</script>

<style lang="scss" scopped>
.container {
  display: flex;
  margin: spacer(80) auto;
  position: relative;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    max-width: 60%;
    button {
      padding: spacer(18);
    }
  }
}
</style>
