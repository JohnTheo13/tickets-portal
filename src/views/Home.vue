<template>
  <div class="container">
    <router-link to="/create">
      <Button>
        <div class="icon icon_plus" />
        <div>{{ this.t('home_new') }}</div>
      </Button>
    </router-link>
    <router-link to="/tickets">
      <Button>
        <div class="icon icon_list" />
        <div>{{ this.t('home_tickets') }}</div>
      </Button>
    </router-link>
    <router-link to="/">
      <Button disabled>
        <div class="icon icon_profile" />
        <div>{{ this.t('home_profile') }}</div>
      </Button>
    </router-link>
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
  position: relative;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  min-height: spacer(275);
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: spacer(18);
    width: spacer(75);
    height: spacer(75);
    > div {
      &:last-child {
        margin-top: spacer(6);
      }
    }
  }
  @media (min-width: 768px) {
    margin: spacer(80) auto;
    flex-direction: row;
    max-width: 60%;
  }
}
</style>
