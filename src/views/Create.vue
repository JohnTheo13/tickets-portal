<template>
  <BoxWrapper classnames="create-edit">
    <form>
      <input type="text" id="username" v-model="username" />
      <Button type="submit">Create</Button>
    </form>
  </BoxWrapper>
</template>

<script>
// @flow
import { Ticket } from '../models/types'
import api from '../utils/api'
import { BoxWrapper, Button } from '../components'

interface FormState {
  codename: string;
  description: string;
  ticketDescription: string;
  product: string;
  compoent: string;
}

export default {
  name: 'Home',
  components: {
    Button,
    BoxWrapper
  },
  data (): FormState {
    return {
      codename: '',
      description: '',
      ticketDescription: '',
      product: '',
      compoent: ''
    }
  },
  methods: {},
  created: function () {
    // this.getTickets()
  }
}
</script>

<style lang="scss" scoped>
.create-edit {
}
</style>
