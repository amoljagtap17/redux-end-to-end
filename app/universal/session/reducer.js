import reduce from '../reduce'
import * as actionTypes from './actionTypes'

const initialState = {
  user: null
}

function setUser(state, action) {
  return {
    ...state,
    user: action.user
  }
}

export default reduce(initialState, {
  [actionTypes.SET]: setUser
})
