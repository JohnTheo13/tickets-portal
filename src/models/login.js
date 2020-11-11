import api from '../utils/api'
import { setItem } from '../utils/localStorage'

const login = async (username, password) => {
  console.log(username)
  // debugger
  const apiKey = process.env.VUE_APP_API_KEY
  const formData = new URLSearchParams()
  formData.append('username', username)
  formData.append('password', password)
  formData.append('grant_type', 'password')
  formData.append('api_key', apiKey)
  try {
    const { data } = await api.post('authentication/token', formData, {}, { 'Content-Type': 'application/x-www-form-urlencoded' })
    console.log(data)

    const expiry = new Date()
    expiry.setDate(expiry.getSeconds() + data.expires_in)
    const userToken = { userToken: 'data.acceess_token', expiry: expiry.getTime() }
    setItem('@user-token', userToken)
    location.reload()
  } catch (error) {
    console.log(error)
  }
}

export default login
