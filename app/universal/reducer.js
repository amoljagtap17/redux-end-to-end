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

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SLIDE':
      return updateColor(state, action)
      break
    default:
      return state
  }
}
