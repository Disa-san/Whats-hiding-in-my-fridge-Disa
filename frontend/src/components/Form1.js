import React, { useState } from 'react'

export const NewUser = props => {
  const [user, setUser] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    fetch('localhost:8000/users', {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        setUser("")
        props.onFormSubmit(user)
      })

      .catch(err => console.log("error:", err))
  }

  return (
    <form className="happy-form">
      <h3>Fill in your name, email and password</h3>

      <input type="text" name="Name" placeholder="My name" required onChange={event => setUser(event.target.value)} />
      <input type="text" name="Email" placeholder="Email" required onChange={event => setUser(event.target.value)} />
      <input type="text" name="Password" placeholder="Password" required onChange={event => setUser(event.target.value)} />
      <button
        type="submit"
        onClick={handleSubmit}>

      </button>
    </form>
  )
}

