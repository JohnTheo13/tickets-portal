<template>
  <div>
    <span />
  </div>
</template>

<script>
export default {
  name: 'Status'
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    /* &:first-child { */
      height: spacer(3);
      width: spacer(3);
      border-radius: 50%;
      background-color: green;
    /* } */
  }
}
</style>
