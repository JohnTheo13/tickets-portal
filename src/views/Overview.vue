<template>
  <BoxWrapper classnames="about" v-if="!!ticket">
    <h1>{{ ticket._name }}</h1>
    <p>{{ ticket.ticket_description }}</p>
    <div class="details">
      <div class="title">Contact Person</div>
      <a :href="`mailto://${ticket.e_mail}`">{{
        ticket.contact_person?._name || notExist
      }}</a>
      <div class="title">{{ this.t('overview_product') }}</div>
      <div>{{ ticket.product?._name || notExist }}</div>
      <div class="title">Component</div>
      <div>{{ ticket.component?._name || notExist }}</div>
      <div class="title">date</div>
      <div>{{ convertDate(ticket.date) }}</div>
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
      notExist: '-'
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
    grid-template: repeat(4, auto) / repeat(2, auto);
    gap: 0;
    align-items: center;
    /* border-bottom: 1px solid $grey; */
    border-top: 1px solid $grey;
    max-width: 100%;
    > * {
      height: 100%;
      min-height: spacer(22);
      min-width: spacer(65);
      display: flex;
      align-items: center;
      border-right: 1px solid $grey;
      border-bottom: 1px solid $grey;
      &.title {
        font-weight: bold;
        border-left: 1px solid $grey;
      }
    }
  }
}
</style>
