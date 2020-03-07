import React from 'react'
import { Link } from 'react-router-dom'


export const LogoutUser = props => {
  // const accessToken = localStorage.removeItem('accessToken')


  const onLoggedOut = event => {
    event.preventDefault()
    window.localStorage.removeItem('accessToken')
  }

  return (
    <div>
      <Link to='/'>
        <button className="back-button">
          <span role="img" aria-label="take me back">  ⬅</span> HOME
          </button>
      </Link>
      <button
        className="log-out-button"
        type="submit"
        onClick={onLoggedOut}>
        LOG OUT
        </button>
    </div>
  )
}


