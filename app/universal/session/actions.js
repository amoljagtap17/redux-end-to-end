import api from '../api'
import * as actionTypes from './actionTypes'

export function setUser(user) {
  return {
    type: actionTypes.SET,
    user
  }
}

export function login(username, password) {
  return dispatch => api.session.login(username, password)
    .then(resp => dispatch(setUser(resp.data.user)))
}
