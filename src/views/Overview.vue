<template>
  <BoxWrapper classnames="about">
    <div v-if="!!ticket">
      <h1>{{ ticket._name }}</h1>
      <p>{{ ticket.ticket_description }}</p>
      <div class="details">
        <span
          ><a :href="`mailto://${ticket.e_mail}`">{{
            ticket.contact_person?._name || notExist
          }}</a></span
        >
        <span>{{ ticket.product?._name || notExist }}</span>
        <span>{{ ticket.component?._name || notExist }}</span>
        <span>{{ convertDate(ticket.date) }}</span>
      </div>
    </div>
  </BoxWrapper>
</template>

<script>
// @flow
import { Ticket } from '../models/types'
import { isTokenValid, dateConverter } from '../utils/helpers'
import { BoxWrapper } from '../components'
import { getTicket as getItem } from '../models/tickets'

export default {
  name: 'About',
  components: {
    BoxWrapper
  },
  data (): { ticket: Ticket | null } {
    return {
      ticket: null,
      notExist: 'not applicable'
    }
  },
  methods: {
    async getTicket (): Promise<void> {
      try {
        // eslint-disable-next-line flowtype-errors/show-errors
        const { data } = await getItem(this.$route.params.id)
        this.ticket = data
      } catch (error) {
        console.log(error)
      }
    },
    convertDate: dateConverter
  },
  created: function () {
    // this.getTickets()

    // console.log('route', this.$route)
    const { routeTicket } = this.$route.params
    // console.log(routeTicket)
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

<style lang="scss">
.about {
  text-align: left;
  padding: spacer(8);
  .details {
    display: grid;
    grid-template: repeat(2, spacer(22)) / repeat(2, auto);
    gap: 0;
    align-items: center;
    border-bottom: 1px solid $grey;
    > span {
      height: 100%;
      border-top: 1px solid $grey;
      padding-top: spacer(5);
      box-sizing: border-box;
      &:nth-child(2),
      &:last-of-type {
        border-left: 1px solid $grey;
        padding-left: spacer(6);
      }
    }
  }
}
</style>
