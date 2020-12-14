// @flow
import api from '../utils/api'
import { Contact } from './types'

export const getContacts = (clientId: string): Promise<Contact[]> =>
  api.get(
    `information/contact_person/contact_persons_client?filter.client_id=${clientId}`
  )
