import React from 'react'
import { NewUser } from './components/Form1'
import { LoginUser } from './components/Login'
import { Secret } from './components/Secret'

export const App = () => {
  return (
    <section>
      <h1>Tell us who you are!</h1>
      <div>
        <NewUser />
        <LoginUser />
        <Secret />
      </div>
    </section>
  )
}


//Sign up form - localhost:8000/users
//namn, email, password
//Login form - localhost:8000/sessions
//email, password
//Authenicated content - localhost:8000/secrets
