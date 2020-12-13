<template>
  <div class="box-wrapper">
    <div class="icon icon_header" />
    <div :class="classnames" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
// @flow
export default {
  name: 'BoxWrapper',
  props: {
    classnames: String
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
  }
}
</style>
