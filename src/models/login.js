// @flow
import api from '../utils/api'
import { setItem } from '../utils/localStorage'

const login = async (username: string, password: string): Promise<void> => {
  const apiKey: string = process.env.VUE_APP_API_KEY || ''
  const formData = new URLSearchParams()
  formData.append('username', username)
  formData.append('password', password)
  formData.append('grant_type', 'password')
  formData.append('api_key', apiKey)
  try {
    const { data } = await api.post(
      'authentication/token',
      formData,
      {},
      { 'Content-Type': 'application/x-www-form-urlencoded' }
    )

    const expiry = new Date()
    expiry.setSeconds(expiry.getSeconds() + data.expires_in)
    const userToken = {
      userToken: data.access_token,
      expiry: expiry.toISOString()
    }
    setItem('@user-token', userToken)
    location.reload()
  } catch (error) {
    // console.log(error)
    throw new Error(error.message)
  }
}

export default login
