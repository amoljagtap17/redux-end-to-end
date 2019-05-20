import * as actionTypes from './actionTypes'
import reduce from './reduce'

const initialState = {
  r: 244,
  g: 158,
  b: 66
}

function updateColor(state, action) {
  return {
    ...state,
    [action.color]: action.value
  }
}

export default reduce(initialState, {
  [actionTypes.SLIDE]: updateColor
})

/*
const handlers = (state, action) => ({
  [actionTypes.SLIDE]: () => updateColor(state, action)
})

export default function reducer(state = initialState, action = {}) {
  const handler = handlers(state, action)[action.type]

  if (handler) {
    return handler()
  }

  return state
}
*/

/*
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SLIDE:
      return updateColor(state, action)
      break
    default:
      return state
  }
}
*/
