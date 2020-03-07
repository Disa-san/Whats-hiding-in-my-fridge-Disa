import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NewItem } from './AddItem'


const URL = 'http://localhost:8000/items'


export const Secret = () => {
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState("")
  const [items, setItems] = useState("")
  // const [number, setNumber] = useState("")
  // const [date, setDate] = useState("")



  // Getting accessToken from localStorage in web browser,
  // and sending it in to headers. 

  const handleSecret = () => {
    const accessToken = window.localStorage.getItem('accessToken')
    // const { food } = items.food

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
        console.log(json.items[0])
        setMessage(json.message)
        setItems(json.items)
      })

      .catch(err => {
        setErrorMessage(err.message)
      })
  }


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
        <div>
          {/* {items.items.map((item) => {
            return (
              <li key={item._id}>{item.food}</li>
            )
          })} */}
          {/* {items.food_hierarchy} */}
        </div>
        <Link to="/items/newitem">
          <button className="new-item-button-link">
            NEW ITEM
          </button>
        </Link>

      </div>

    </article >
  )
}

