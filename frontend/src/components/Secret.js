import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const URL = 'http://localhost:8000/items'


export const Secret = () => {
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState("")



  // Hämtar accessToken från localStorage i webbläsaren,
  // och skickar in den i headers. 

  const handleSecret = () => {
    const accessToken = window.localStorage.getItem('accessToken')

    setErrorMessage('')
    fetch(URL, {
      method: "GET",
      headers: { "Authorization": accessToken }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Access denied')
        }
        return res.json()

      })
      .then(json => {
        console.log(json)
        setMessage(json.message)
      })

      .catch(err => {
        setErrorMessage(err.message)
      })
  }
  // We can not get this error message to work
  // if (!message) {
  //   return <div>We are trying to log you in</div>
  // }

  return (
    <article>

      <div className="buttons-loggedin">
        <div>
          <button className="show-items-button"
            type='submit'
            onClick={handleSecret}
          >
            SHOW ME MY FRIDGE
          </button>
          <>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </>
        </div>
        <h4>{message}</h4>
        <Link to='/items'>
          <button>
            <span role="img" aria-label="take me back">  </span> NEW ITEM
          </button>
        </Link>

      </div>

    </article >
  )
}

