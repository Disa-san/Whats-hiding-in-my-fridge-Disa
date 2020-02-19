import React from 'react'
import { NewUser } from './components/Form1'

export const App = () => {
  return (
    <div>
      <NewUser />
    </div>
  )
}


//Sign up form - localhost:8000/users
//namn, email, password
//Login form - localhost:8000/sessions
//email, password
//Authenicated content - localhost:8000/secrets
