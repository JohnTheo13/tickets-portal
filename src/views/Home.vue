<template>
  <div class="overview">
    <div class="header">
      <div>name</div>
      <div>contact</div>
      <div>product</div>
    </div>
    <div v-cloak v-for="ticket in tickets" :key="ticket._id">
      <router-link :to="{ name: 'Details', params: { id: ticket._id, routeTicket: JSON.stringify(ticket) } }">{{
        ticket._name
      }}</router-link>
      <div>some</div>
      <div>{{ showName(ticket._name) }}</div>
    </div>
  </div>
  <Button @click="onclick">add</Button>
</template>

<script>
// @flow
import { Ticket } from '../models/types'
import api from '../utils/api'
import Button from '../components/Button.vue'

export default {
  name: 'Home',
  components: {
    Button
  },
  data (): { tickets: Ticket[] } {
    return {
      tickets: []
    }
  },
  methods: {
    async getTickets (): Promise<void> {
      try {
        const { data } = await api.get('information/ticket')
        console.log(data)
        this.tickets = data.items
      } catch (error) {
        console.log(error)
      }
    },
    showName: (str: string): string => {
      const reg = new RegExp(/^\[TIC\d*\]/)
      // ticket name not null
      // eslint-disable-next-line flowtype-errors/show-errors
      if (str.length === str.match(reg)[0].length) {
        return str
      }
      return str.replace(reg, '')
    },
    onclick: function () {
      this.$router.push('/create')
    }
  },
  created: function () {
    this.getTickets()
  }
}
</script>

<style lang="scss" scoped>
.overview {
  @extend .box;
  display: flex;
  flex-direction: column;
  background: transparent;
  padding-bottom: 0;
  > div {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-evenly;
    width: 100%;
    padding: spacer(4) 0;
    background: $white;
    margin-bottom: 1px;
    > * {
      width: 33%;
    }
  }
  .header {
    font-weight: bold;
    padding: spacer(3) 0;
    margin-bottom: 2px;
  }
  [v-cloak] {
    display: none;
  }
}
</style>
