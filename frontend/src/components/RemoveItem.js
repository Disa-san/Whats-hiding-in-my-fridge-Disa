import React, { useState } from 'react'
// import { Link, useHistory } from 'react-router-dom'
import './myfridge.css'

const URL = 'https://whats-hiding-in-my-fridge.herokuapp.com/items/'
// const URL = 'http://localhost:8000/items'

export const RemoveItem = ({ id, afterRemoval }) => {


  const [errorMessage, setErrorMessage] = useState("")

  const handleRemoveItem = () => {
    const accessToken = window.localStorage.getItem('accessToken')
    fetch(URL + id, {
      method: "DELETE",
      headers: { "Authorization": accessToken }
    })
      .then(res => res.json())
      .then(result => {
        afterRemoval()
        console.log("result", result)
      })
      .catch(err => {
        setErrorMessage(err.message, { errorMessage })
      })
  }

  return (
    <button
      className="remove-item-button"
      type="submit"
      onClick={handleRemoveItem}>
      <span role="img" aria-label="remove item" > ✖️ </span>
    </button>
  )
}