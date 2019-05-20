import axios from 'axios'

const adapter = axios.create({
  baseURL: 'http://localhost:9999/api',
  withCredentials: true,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  session: {
    login: (username, password) => adapter.post('/session', {
      username,
      password
    })
  }
}
