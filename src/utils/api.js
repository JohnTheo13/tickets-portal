import axios from 'axios'

/**
 *
 * @param {Object} axiosError the error thrown by axios
 */
export const finalizeAxiosError = axiosError => {
  // Offline / No Connection
  if (!axiosError.response) {
    // Error { message: "Network Error" }
    const error = new Error('Connection Error')
    error.title = 'Network error'
    error.text = error.message
    return error
  }
  // Online & Connected
  // error 3xx, 4xx, 5xx
  const { data } = axiosError.response
  const error = new Error()
  // setting status code
  error.status = data.status || axiosError.response.status
  if (data) {
    // setting message
    if (data.code) {
      // might return some code for error type
      error.message = data.code.toLowerCase()
    } else {
      error.message = data.message
    }
    // filling missing part, make sure error has message
    if (error.message) {
      // result payload
      error.title = data.status === 404 ? 'not found' : data.error
    } else {
      // frame might not fill the message prop
      error.message = data.error
    }
  } else {
    error.message = axiosError.message
  }
  // match the result payload
  if (error.title) {
    error.text = error.message
  } else {
    error.title = error.message
  }

  return error
}

/**
 * @see https://github.com/axios/axios#handling-errors
 */
const api = {
  /**
   *
   * @param {string} method
   * @param {string} url
   * @param {Object} [data]
   * @param {Object} [params]
   * @param {Object} [headers]
   */
  send: async (method, url, data = {}, params = {}, headers = {}) => {
    try {
      const API_URL = process.env.VUE_APP_API_URL
      return await axios({
        method,
        url: `${API_URL}/${url}`,
        data,
        params: {
          ...params
        },
        headers: {
          Accept: 'application/json',
          ...headers
        }
      })
    } catch (error) {
      throw finalizeAxiosError(error)
    }
  },
  get: (url, data = {}, params = {}, headers = {}) =>
    api.send('get', url, data, params, headers),

  post: (url, data = {}, params = {}, headers = {}) =>
    api.send('post', url, data, params, headers),

  put: (url, data = {}, params = {}, headers = {}) =>
    api.send('put', url, data, params, headers)
}

export default api
