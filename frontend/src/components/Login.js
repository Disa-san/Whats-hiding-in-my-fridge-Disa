import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './login.css'


const URL = 'https://whats-hiding-in-my-fridge.herokuapp.com/sessions'
// const URL = 'http://localhost:8000/sessions'

export const LoginUser = props => {
  const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState('')

  const onLoggedIn = event => {
    event.preventDefault()

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('The user was not found or entered password was incorrect')
        }
        return res.json()
      })

      .then(({ accessToken }) => {
        if (accessToken) {
          window.localStorage.setItem('accessToken', accessToken)
          history.push(`/items`)
        }
      })
      .catch(err => {
        setErrorMessage(err.message)
      })
  }


  return (
    <div className="login">
      <form onSubmit={onLoggedIn}>
        <h3>Login to your fridge</h3>
        <div className="login-form">
          <label>
            <input className="login-field" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
          </label>
          <label>
            <input className="login-field" value={password} type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
          </label>
        </div>
        <div className="login-button-div">
          <button className="login-button"
            type="submit"
            disabled={password.length < 4 ? true : false}
            onClick={onLoggedIn}>
            LOG IN
            </button>
        </div>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div >
  )
}

