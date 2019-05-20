import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

const initialState = {
  username: '',
  password: '',
  invalid: false
}

export const Login = ({ login }) => {
  const [state, setState] = useState(initialState)
  const { username, password } = state

  const update = field => e => {
    e.persist()
    setState(prevState => ({ ...prevState, [field]: e.target.value }))
  }

  const onSubmit = e => {
    e.preventDefault()

    login(username, password).catch(err => {
      if (err.response.status === 422) {
        setState(prevState => ({ ...prevState, invalid: true }))
      } else {
        throw err
      }
    })
  }

  return (
    <form className="pure-form pure-form-stacked" onSubmit={onSubmit}>
      <fieldset>
        <legend>Sign in</legend>
        {state.invalid && (
          <div style={{ height: '2rem', color: 'red' }}>
            Invalid Credentials!
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={update('username')}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={update('password')}
        />

        <button type="submit" className="pure-button pure-button-primary">
          Sign in
        </button>
      </fieldset>
    </form>
  )
}

export default connect(
  undefined,
  { login: actions.login }
)(Login)
