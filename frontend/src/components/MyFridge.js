import React, { useState, useEffect } from 'react'
// import { items } from 'reducers/items'
import { Link } from 'react-router-dom'
import moment from "moment"
// import { NewItem } from './AddItem'
import { RemoveItem } from './RemoveItem'
import './myfridge.css'
import './logout.css'


const URL = 'http://localhost:8000/items'


export const MyFridge = () => {
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState("")
  const [items, setItems] = useState([])
  const [showText, setShowText] = useState(false)
  const accessToken = window.localStorage.getItem('accessToken')


  // Getting accessToken from localStorage in web browser,
  // and sending it in to headers. 

  // const handleMyFridge = () => {


  // const { food } = items.food
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

        // items.sort((a, b) => (a.date > b.date) ? 1 : -1)
      })
      // .then(items => {
      //   items.sort((a, b) => (a.date > b.date) ? 1 : -1)
      //   console.log(items)
      // })
      .catch(err => {
        setErrorMessage(err.message)
      })
  }, [])






  // const newDate = Item.parse(date)
  // const newMoment = moment(newDate).format("Do-MM-YYY")

  // const sortByDate = () => {
  //   fetch(URL, {
  //     method: "GET",
  //   })
  //     .then(json => {
  //       setItems(json.items)
  //     })
  //     .then
  //     (items.date.sort((a, b) =>
  //       a.date > b.date)
  //     )


  //     )
  // }

  return (

    < article >
      <div className="header"><h1 className="header-text">These are the items in your fridge</h1></div>
      <div className="buttons-loggedin">
        <div>
          {/* <button className="show-items-button"
          type='submit'
          // onClick={handleMyFridge}
          // onClick={() => setShowText(!showText), handleMyFridge}
          onClick={MyFridge}

        >
          SHOW ME MY FRIDGE
          </button> */}
          <>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </>
        </div>

        {/* {showText && */}
        <div className="items-result">

          {items.map((item) => {
            // { items.sort((item.date)) }
            // { item.sort((a, b) => (a.date > b.date) ? 1 : -1) }

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
        {/* } */}
        <Link to="/items/newitem">
          <button className="new-item-button-link">
            NEW ITEM
          </button>
        </Link>

      </div >

    </article >
  )

}

