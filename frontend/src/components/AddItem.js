import React, { useState } from 'react'

const URL = 'http://localhost:8000/items'

export const NewItem = () => {
  const [food, setFood] = useState("")
  const [number, setNumber] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")

  const accessToken = window.localStorage.getItem('accessToken')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ food, number, date }),
      headers: { "Content-Type": "application/json" }
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

    // .catch(err => {
    //   console.log("error:", err)
    //   setErrorMessage(err.message)
    // })

  }

  return (

    <form onSubmit={handleSubmit}>
      <h3>Add food to my fridge</h3>
      <div className="additem-form">
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
      <button
        className="button"
        type="submit"
        disabled={food.length < 4 || number.length < 4 ? true : false}
        onClick={handleSubmit}>
        ADD ITEM
        </button>
      {message && <div><p>{message}</p></div>}
    </form>

  )
}