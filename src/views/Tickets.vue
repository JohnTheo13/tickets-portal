<template>
  <BoxWrapper classnames="overview">
    <div class="header">
      <div>{{ this.t('overview_status') }}</div>
      <div>name</div>
      <div>contact</div>
      <div>Date</div>
    </div>
    <div v-cloak v-for="ticket in tickets" :key="ticket._id" @click="goTo(ticket)">
      <Status />
      <div>{{ ticket._name }}</div>
      <div>
        <a :href="`mailto://${ticket.e_mail}`">{{
          ticket.contact_person?._name || 'not defined'
        }}</a>
      </div>
      <div >{{ convertDate(ticket.date) }}</div>
    </div>
  </BoxWrapper>
</template>

<script>
// @flow
import { Ticket } from '../models/types'
import { BoxWrapper, Status } from '../components'
import { dateConverter } from '../utils/helpers'
import { getTickets as getItems } from '../models/tickets'

export default {
  name: 'Home',
  components: {
    BoxWrapper,
    Status
  },
  data (): { tickets: Ticket[] } {
    return {
      tickets: []
    }
  },
  methods: {
    async getTickets (): Promise<void> {
      try {
        // eslint-disable-next-line flowtype-errors/show-errors
        const { data } = await getItems()
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
    goTo: function (ticket) {
      this.$router.push({
        name: 'Details',
        params: { id: ticket._id, routeTicket: JSON.stringify(ticket) }
      })
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
    justify-content: space-between;
    width: 100%;
    padding: spacer(4) 0;
    background: $white;
    margin-bottom: 1px;
    border-bottom: 1px solid $grey;
    &:not(:first-of-type) {
      cursor: pointer;
    }
    > div {
      &:not(:first-child) {
        flex: 30%;
      }
      &:first-child {
        flex: 10%;
        > span {
          float: left;
        }
      }
    }
    > * {
      align-self: center;
    }
    &.header {
      font-weight: bold;
      padding: spacer(3) 0;
      margin-bottom: 2px;
      border-bottom: 2px solid $grey;
    }
  }
  [v-cloak] {
    display: none;
  }
}
</style>