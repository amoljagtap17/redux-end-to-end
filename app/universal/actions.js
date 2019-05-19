import * as actionTypes from './actionTypes'

export function updateColor(color, value) {
  return {
    type: actionTypes.SLIDE,
    color,
    value
  }
}
