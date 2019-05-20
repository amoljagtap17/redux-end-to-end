import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './universal/reducer'
import Home from './universal/Home'
import './app.scss'

const store = createStore(
  reducer,
  window.__PRELOADED_STATE__,
  applyMiddleware(thunk)
)

// dispatch(): takes a redux action to dispatch to the store
// getState(): returns reducer state
// subscribe(): listen for redux store change

/*
adapter
  .post('/session', {
    username: 'admin',
    password: 'notmypassword'
  })
  .then(() => adapter.get('/session'))
*/

render(
  <Provider store={store}>
    <div style={{ padding: '1rem' }}>
      <Home />
    </div>
  </Provider>,
  document.querySelector('#app')
)
