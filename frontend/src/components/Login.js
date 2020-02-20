import React, { useState } from 'react'

const URL = 'http://localhost:8000/sessions'


export const LoginUser = props => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const onLoggedIn = event => {
    //  event.preventDefault()

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('The user was not found or entered password is wrong')
        }
        return res.json()
      })
      .then(({ accessToken }) => {
        window.localStorage.setItem('accessToken', JSON.stringify(accessToken))
        onLoggedIn()
      })
      .then(json => console.log(json))
      .catch(err => console.log("error:", err))
  }


  return (
    <div>
      <form onSubmit={onLoggedIn}>
        <h3>Login</h3>
        <label>
          <input value={email} type="text" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          <input value={password} type="text" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
        </label>
        <button
          type="submit"
          onClick={onLoggedIn}>
          LOG IN
    </button>
      </form>
    </div>
  )
}


// The following snippet accesses the current domain's local Storage object and adds a data item to it using Storage.setItem().
// localStorage.setItem('accessToken');

// The syntax for reading the localStorage item is as follows:
// const access = localStorage.getItem('accessToken');

// The syntax for removing the localStorage item is as follows:
// localStorage.removeItem('myCat');

// The syntax for removing all the localStorage items is as follows:

// // Clear all items
// localStorage.clear();
