import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './additem.css'

const URL = 'https://my-fridge.netlify.com/items'

export const NewItem = () => {
  const [food, setFood] = useState("")
  const [number, setNumber] = useState("")
  const [date, setDate] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [message, setMessage] = useState("")

  const accessToken = window.localStorage.getItem('accessToken')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ food, number, date }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Could not add item')
        }
        return res.json()
      })
      .then((json) => {
        console.log(json)
        setMessage(json.message)
        setFood("")
        setNumber("")
        setDate("")
      })


      .catch(err => {
        console.log("error:", err)
        setErrorMessage(err.message)
      })

  }

  return (
    <div className="new-item">
      <form className="add-item" onSubmit={handleSubmit}>
        <h3>Add food to my fridge</h3>
        <div className="add-item-form">
          <label>
            <input className="new-food" value={food} type="text" placeholder="type of food" required onChange={event => setFood(event.target.value)} />
          </label>
          <label>
            <input className="new-food" value={number} type="number" placeholder="how many" required onChange={event => setNumber(event.target.value)} />
          </label>
          <label>
            <input className="new-food" value={date} type="date" placeholder="expiry date" required onChange={event => setDate(event.target.value)} />
          </label>
        </div>
        <div className="add-item-button-div">
          <button
            className="add-item-button"
            type="submit"
            // disabled={food.length < 4 || number.length < 4 ? true : false}
            onClick={handleSubmit}>
            ADD ITEM
        </button>
        </div>
        {errorMessage && <div><p>{errorMessage}</p></div>}
        {message && <div><p>{message}</p></div>}
      </form>
      <div className="home-button-div">
        <Link to='/items'>
          <button className="home-button">
            <span role="img" aria-label="take me back">  ⬅</span> BACK TO FRIDGE
          </button>
        </Link>
      </div>
    </div>
  )
}