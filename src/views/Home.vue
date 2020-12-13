<template>
  <BoxWrapper classnames="overview">
    <div class="header">
      <div>name</div>
      <div>contact</div>
      <div>product</div>
    </div>
    <div v-cloak v-for="ticket in tickets" :key="ticket._id">
      <router-link
        :to="{
          name: 'Details',
          params: { id: ticket._id, routeTicket: JSON.stringify(ticket) }
        }"
        >{{ ticket._name }}</router-link
      >
      <a :href="`mailto://${ticket.e_mail}`">{{ticket.contact_person?._name || 'not defined'}}</a>
      <div>{{ convertDate(ticket.date) }}</div>
    </div>
    <Button @click="onclick">add</Button>
  </BoxWrapper>
</template>

<script>
// @flow
import { Ticket } from '../models/types'
import api from '../utils/api'
import { Button, BoxWrapper } from '../components'
import { dateConverter } from '../utils/helpers'

export default {
  name: 'Home',
  components: {
    Button,
    BoxWrapper
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
    },
    convertDate: dateConverter
  },
  created: function () {
    this.getTickets()
  }
}
</script>

<style lang="scss">
.overview {
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-evenly;
    width: 100%;
    padding: spacer(4) 0;
    background: $white;
    margin-bottom: 1px;
    border-bottom: 1px solid $grey;
    > * {
      width: 33%;
      align-self: center;
    }
  }
  .header {
    font-weight: bold;
    padding: spacer(3) 0;
    margin-bottom: 2px;
    border-bottom: 2px solid $grey;
  }
  button {
    position: relative;
    margin: spacer(8);
  }
  [v-cloak] {
    display: none;
  }
}
</style>
