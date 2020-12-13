<template>
  <button :type="type" :disabled="disabled" @click="$emit('onclick')" ><slot></slot></button>
</template>

<script>
// @flow
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean
    }
  },
  emits: ['onclick']
}
</script>

<style lang="scss" scoped>
button {
  padding: spacer(4);
  background: $primary;
  width: fill;
  &:disabled {
    background: $grey;
  }
}
</style>
