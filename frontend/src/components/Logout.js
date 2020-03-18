import React from 'react'
import { Link } from 'react-router-dom'
import './logout.css'


export const LogoutUser = props => {
  // const accessToken = localStorage.removeItem('accessToken')


  const onLoggedOut = event => {
    // event.preventDefault()
    window.localStorage.removeItem('accessToken')
  }

  //use history

  // return (
  //   <div className="action-buttons-div">
  //     <Link to='/'>
  //       <button className="back-button">
  //         <span role="img" aria-label="take me back">  ⬅</span> HOME
  //         </button>
  //     </Link>
  //     <button
  //       className="log-out-button"
  //       type="submit"
  //       onClick={onLoggedOut}>
  //       LOG OUT
  //       </button>
  //   </div>
  // )

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


