import React, { useState } from 'react'
// import '../index.css'



const URL = 'http://localhost:8000/users'

export const NewUser = props => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [message, setMessage] = useState('')
  const handleSubmit = event => {
    event.preventDefault()

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      // .then(() => {
      //   setName("")
      //   setEmail("")
      //   setPassword("")
      // })
      .then(json => console.log(json))
      .catch(err => console.log("error:", err))
      .catch(err => {
        setErrorMessage(err.message)
      })
      .catch(err => {
        setMessage(message)
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Fill in your name, email and password</h3>
        <div className="login-form">
          <label>
            <input className="register" value={name} type="text" placeholder="My name" required onChange={event => setName(event.target.value)} />
          </label>
          <label>
            <input className="register" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
          </label>
          <label>
            <input className="register" value={password} type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
          </label>
        </div>
        <button
          className="button"
          type="submit"
          onClick={handleSubmit}>
          SIGN UP
      </button>
      </form>
      <>
        {/* {errorMessage && <div>{errorMessage}</div>} */}
        {message && <div>{message}</div>}

      </>
    </div>
  )
}

