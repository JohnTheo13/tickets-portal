// @flow
import { getItem } from './localStorage'
import { Ticket } from '../models/types'

export const isTokenValid = (): boolean => {
  const userToken = getItem('@user-token')
  // console.log(userToken.expiry)
  if (!userToken) {
    return false
  }
  const expires = new Date(userToken?.expiry)
  const now = new Date()
  return now < expires
}

export const dateConverter = (d: Date, type?: string): string => {
  const date = new Date(d)
  if (type) {
    return 'some other format'
  }
  return date.toLocaleDateString()
}

export const sortByStatus = (tickets: Ticket[]) => {
  const status = {
    _name: '3. empty',
    _id: 'id',
    _self: 'self'
  }
  tickets.map(t => {
    if (!t.status) {
      t.status = status
    }
    return t
  })
  return Array.from(
    tickets.sort((a, b) => {
      // console.log(a.status?._name.charAt(0) < a?.status._name.charAt(0))
      if (a.status?._name.charAt(0) > b?.status._name.charAt(0)) {
        return 1
      }
      if (a.status?._name.charAt(0) < b?.status._name.charAt(0)) {
        return -1
      }
      return 0
    })
  )
}
