import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from "moment"
import { RemoveItem } from './RemoveItem'
import './myfridge.css'
import './logout.css'


const URL = 'https://whats-hiding-in-my-fridge.herokuapp.com/items'
// const URL = 'http://localhost:8000/items'


export const MyFridge = () => {
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState("")
  const [items, setItems] = useState([])
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
      .then(json => {
        console.log(json.items)
        setMessage(json.message)
        setItems(json.items)
      })
      .catch(err => {
        setErrorMessage(err.message)
      })
  }, [])


  return (

    < article >
      <div className="header"><h1 className="header-text">These are the items in your fridge</h1></div>
      <div className="buttons-loggedin">
        <div>
          <>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </>
        </div>
        <div className="items-result">
          {items.map((item) => {
            return (
              <ul key={item._id}>
                <div className="my-item-food">
                  <p className="my-item">{item.food}</p>
                </div>
                <div className="my-item-number-date-button">
                  <div className="my-item-number">
                    <p className="my-item">{item.number}</p>
                  </div>
                  <div className="my-item-date">
                    <p className="my-item"> {moment(item.date).format("Do-MM-YYYY")} </p>
                  </div>
                  <RemoveItem id={item._id} afterRemoval={() => {
                    const filteredItems = items.filter(listedItem => item._id !== listedItem._id)
                    setItems(filteredItems)
                  }} />
                </div>
              </ul>
            )
          })
          }
        </div>
        <Link to="/items/newitem">
          <button className="new-item-button-link">
            NEW ITEM
          </button>
        </Link>

      </div >

    </article >
  )

}