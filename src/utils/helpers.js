// @flow
import { getItem } from './localStorage'

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
