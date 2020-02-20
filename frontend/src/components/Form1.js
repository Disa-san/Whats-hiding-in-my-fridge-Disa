import React, { useState } from 'react'

const URL = 'http://localhost:8000/users'

export const NewUser = props => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Fill in your name, email and password</h3>
        <label>
          <input value={name} type="text" placeholder="My name" required onChange={event => setName(event.target.value)} />
        </label>
        <label>
          <input value={email} type="text" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          <input value={password} type="text" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}>
          SIGN UP
      </button>
      </form>
    </div>
  )
}

