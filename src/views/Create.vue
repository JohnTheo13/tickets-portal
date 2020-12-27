<template>
  <BoxWrapper classnames="create-edit">
    <form @submit.prevent="create">
      <div class="input-field">
        <label for="cliet">{{ this.t('create_client') }}</label>
        <input type="text" id="cliet" v-model="clientName" disabled />
      </div>
      <div class="input-field">
        <label for="title">{{ this.t('create_title') }}<span>*</span></label>
        <input type="text" id="title" v-model="title" />
      </div>
      <div class="input-field">
        <label for="description"
          >{{ this.t('create_description') }}<span>*</span></label
        >
        <textarea id="description" v-model="description" />
      </div>
      <!-- <div class="input-field">
        <label for="codename">{{ this.t('create_codename') }}</label>
        <input type="text" id="codename" v-model="codename" />
      </div> -->
      <div class="input-field">
        <label for="contact"
          >{{ this.t('create_contact') }}<span>*</span></label
        >
        <select id="contact" v-model="contact">
          <option disabled value="">{{
            this.t('create_select_contact')
          }}</option>
          <option
            v-for="option in contactOptions"
            :key="option._id"
            :value="option._id"
            >{{ option._name }}</option
          >
        </select>
      </div>
      <div class="input-field">
        <label for="product"
          >{{ this.t('create_product') }}<span>*</span></label
        >
        <select @input="selectChange" id="product" v-model="product">
          <option disabled value="">{{
            this.t('create_select_product')
          }}</option>
          <option
            v-for="option in productOptions"
            :key="option._id"
            :value="option._id"
            >{{ option._name }}</option
          >
        </select>
      </div>
      <div v-if="componentOptions.length" class="input-field">
        <label for="component"
          >{{ this.t('create_component') }}<span>*</span></label
        >
        <select id="component" v-model="component">
          <option disabled value="">{{
            this.t('create_select_component')
          }}</option>
          <option
            v-for="option in componentOptions"
            :key="option._id"
            :value="option._id"
            >{{ option._name }}</option
          >
        </select>
      </div>
      <Button type="submit" :disabled="!isValid()">{{
        this.t('create_button')
      }}</Button>
    </form>
  </BoxWrapper>
</template>

<script>
// @flow

import { useToast } from 'vue-toastification'
import { Product, Component } from '../models/types'
import { BoxWrapper, Button } from '../components'
import { getItem } from '../utils/localStorage'
import {
  createTicket,
  getProducts,
  getComponents,
  getContacts
} from '../models'

interface State {
  // codename: string;
  description: string;
  ticketDescription: string;
  product: string;
  component: string;
  // client: string;
  clientId: string;
  productOptions: Product[];
  componentOptions: Component[];
  contactOptions: string[];
}

const initialState = () => ({
  title: '',
  description: '',
  ticketDescription: '',
  product: '',
  component: '',
  // client: '',
  contact: '',
  componentOptions: []
  // codename: '',
})

export default {
  name: 'Home',
  components: {
    Button,
    BoxWrapper
  },
  data (): State {
    return {
      ...initialState(),
      clientId: '',
      productOptions: [],
      contactOptions: []
    }
  },
  setup () {
    // Get toast interface
    const toast = useToast()
    return { toast }
  },
  methods: {
    async getAll () {
      const { id, name } = getItem('@user-token')
      this.clientName = name
      this.clientId = id
      try {
        const [products, contacts] = await Promise.all([
          getProducts(),
          getContacts(id)
        ])
        this.productOptions = products.data.items
        this.contactOptions = contacts.data.items
      } catch (error) {
        console.log(error?.message)
      }
    },
    async create () {
      try {
        const ticket = {
          ticket_description: this.description,
          client: {
            _id: this.clientId
          },
          product: {
            _id: this.product
          },
          component: {
            _id: this.component
          },
          contact_person: {
            _id: this.contact
          },
          description: this.title
        }
        const res = await createTicket(ticket)
        if (res.status === 200) {
          this.toast.success(this.t('create_success'))
          Object.assign(this.$data, initialState())
        }
      } catch (error) {
        // console.log(error.message)
        this.toast.error(error.message)
      }
    },
    async selectChange (e) {
      try {
        const {
          data: { items }
        } = await getComponents(e?.target?.value)
        this.componentOptions = items
      } catch (error) {
        console.log(error?.message)
      }
    },
    isValid (): boolean {
      return (
        this.title.length > 2 &&
        this.description.length > 2 &&
        this.product &&
        this.component
      )
    }
  },
  created: function () {
    this.getAll()
  }
}
</script>

<style lang="scss" scoped>
.create-edit {
  label {
    font-weight: bold;
  }
  select {
    font-size: spacer(7);
  }
}
</style>
