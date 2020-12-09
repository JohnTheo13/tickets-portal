<template>
  <div class="about">
    <h1 v-if="!!ticket">{{ ticket._name }}</h1>
  </div>
</template>

<script>
// @flow
import { Ticket } from '../models/types'
import api from '../utils/api'
import { isTokenValid } from '../utils/helpers'

export default {
  name: 'About',
  components: {},
  data (): { ticket: Ticket | null } {
    return {
      ticket: null
    }
  },
  methods: {
    async getTicket (): Promise<void> {
      try {
        const { data } = await api.get(
          `information/ticket/${this.$route.params.id}`
        )
        console.log(data)
        this.ticket = data
      } catch (error) {
        console.log(error)
      }
    }
  },
  created: function () {
    // this.getTickets()

    console.log('route', this.$route)
    const { routeTicket } = this.$route.params
    console.log(routeTicket)
    if (routeTicket) {
      this.ticket = JSON.parse(routeTicket)
    } else {
      this.getTicket()
    }
  },
  beforeCreate: function () {
    if (!isTokenValid()) {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped></style>
