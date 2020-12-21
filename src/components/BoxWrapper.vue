<template>
  <div class="box-wrapper">
    <Button @click="goBack" v-if="isDetails()" v-cloak>
      <div class="icon icon_back" />
    </Button>
    <div class="icon icon_header" @click="goHome" />
    <div :class="classnames">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// @flow
import { Button } from '../components'

export default {
  name: 'BoxWrapper',
  components: {
    Button
  },
  props: {
    classnames: String
  },
  methods: {
    goHome () {
      this.$router.push({ path: '/' })
    },
    isDetails () {
      return this.$route.name === 'Details'
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.box-wrapper {
  position: relative;
  background: $white;
  width: 40%;
  margin: spacer(35) auto;
  border: 1px solid $grey;
  height: fit-content;
  /* padding-bottom: spacer(6); */
  @media (max-width: 960px) {
    width: 100%;
    margin: auto;
  }
  .icon_header {
    position: relative;
    height: 84px;
    background-size: 150px 32px;
    width: 100%;
    cursor: pointer;
  }
  > button {
    background: transparent;
    border: transparent;
    position: absolute;
    left: 0;
    width: 60px;
    z-index: 1;
    [v-cloak] {
      display: none;
    }
  }
}
</style>
