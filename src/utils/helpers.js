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
