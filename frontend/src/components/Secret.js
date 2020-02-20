import React, { useState, useEffect } from 'react'

const URL = 'http://localhost:8000/secrets'

export const Secret = () => {
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState("")


  // Hämtar accessToken från localStorage i webbläsaren,
  // och skickar in den i headers. Funkar det även om den är undefined i localStorage?
  const accessToken = window.localStorage.getItem('accessToken')

  useEffect(() => {
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
      .then(json => setMessage(json.message))
      .catch(err => {
        setErrorMessage(err.message)
      })
  }, [accessToken])

  if (!message) {
    return <div>We are trying to log you in</div>
  }

  return (
    <>
      <div>
        <h5>{message}</h5>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </>
  )
}