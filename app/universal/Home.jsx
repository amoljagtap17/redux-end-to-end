import React from 'react'
import { connect } from 'react-redux'
import Login from './session/Login'
import RGB from './RGB'

export function Home({ authenticated }) {
  if (!authenticated) {
    return <Login />
  }

  return <RGB />
}

export default connect(state => ({
  authenticated: !!state.session.user
}))(Home)
