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
        <button>
          <span role="img" aria-label="take me back">  ⬅</span> BACK
          </button>
      </Link>
      <button
        className="button"
        type="submit"
        onClick={onLoggedOut}>
        LOG OUT
        </button>
    </div>
  )
}
