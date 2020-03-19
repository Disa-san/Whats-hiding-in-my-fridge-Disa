import React from 'react'
import { Link } from 'react-router-dom'
import './logout.css'


export const LogoutUser = props => {
  // const accessToken = localStorage.removeItem('accessToken')

  const onLoggedOut = event => {
    window.localStorage.removeItem('accessToken')
  }

  return (
    <Link to='/'>
      <button
        className="log-out-button"
        type="submit"
        onClick={onLoggedOut}>

        <p className="log-out-button-text">  <span role="img" aria-label="contact" >✖️</span> LOG OUT</p>
      </button>
    </Link>
  )
}


