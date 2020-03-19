import React, { useState } from 'react'
import './signup.css'




const URL = 'http://localhost:8000/users'

export const NewUser = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Could not gf create user')
        }
        return res.json()
      })
      .then((json) => {
        console.log(json)
        setMessage(json.message)
        setName("")
        setEmail("")
        setPassword("")
      })

      .catch(err => {
        console.log("error:", err)
        setErrorMessage(err.message)
      })

  }

  return (
    <div className="signup-section">
      <form onSubmit={handleSubmit}>
        <h5>Sign up here</h5>
        <div className="signup-form">
          <label>
            <input className="signup-field" value={name} type="text" placeholder="My name" required onChange={event => setName(event.target.value)} />
          </label>
          <label>
            <input className="signup-field" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
          </label>
          <label>
            <input className="signup-field" value={password} type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
          </label>
        </div>
        <div className="signup-button-div">
          <button className="signup-button"
            type="submit"
            disabled={name.length < 4 || password.length < 4 ? true : false}
            onClick={handleSubmit}>
            SIGN UP
          </button>
        </div>
      </form>
      {errorMessage && <div className="login-message"><p>{errorMessage}</p></div>}
      {message && <div className="login-message"><p>{message}</p></div>}
    </div >
  )
}

