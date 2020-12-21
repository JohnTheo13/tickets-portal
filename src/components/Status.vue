<template>
  <div>
    <span v-bind:class="backGround" />
  </div>
</template>

<script>
// @flow

export default {
  name: 'Status',
  // status one of  1. Nieuw, 2. In behandeling, 3. Afgesloten
  props: {
    status: {
      type: String
    }
  },
  computed: {
    backGround () {
      if (!this.status) {
        return 'closed'
      }
      switch (Number(this?.status.charAt(0))) {
        case 1:
          return 'new'
        case 2:
          return 'inprogress'
        default:
          return 'closed'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    height: spacer(3);
    width: spacer(3);
    border-radius: 50%;
    &.new {
      background: $green;
    }
    &.inprogress {
      background: $primary;
    }
    &.closed {
      background: $grey;
    }
  }
}
</style>
