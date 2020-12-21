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
  padding: spacer(6);
  background: $primary;
  width: stretch;
  color: $white;
  font-size: spacer(7);
  font-weight: bold;
  &:disabled {
    background: $grey;
  }
}
</style>
