import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './universal/reducer'
import RGB from './universal/RGB'
import './app.scss'

const store = createStore(reducer, window.__PRELOADED_STATE__)
// dispatch(): takes a redux action to dispatch to the store
// getState(): returns reducer state
// subscribe(): listen for redux store change

render(
  <Provider store={store}>
    <RGB />
  </Provider>,
  document.querySelector('#app')
)
