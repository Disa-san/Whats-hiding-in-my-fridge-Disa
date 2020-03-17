import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from "moment"
import { NewItem } from './AddItem'
import { RemoveItem } from './RemoveItem'
import './myfridge.css'
import './logout.css'


const URL = 'http://localhost:8000/items'


export const MyFridge = () => {
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState("")
  const [items, setItems] = useState([])
  // const [date, setDate] = useState([])
  // const [number, setNumber] = useState([])
  // const [date, setDate] = useState([])



  // Getting accessToken from localStorage in web browser,
  // and sending it in to headers. 

  const handleMyFridge = () => {
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
        console.log(json.items)
        setMessage(json.message)
        setItems(json.items)
      })

      .catch(err => {
        setErrorMessage(err.message)
      })
  }





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

  // const handleRemoveItem = () => {
  //   const accessToken = window.localStorage.getItem('accessToken')
  //   fetch('http://localhost:8000/items/:id', {
  //     method: "DELETE",
  //     headers: { "Authorization": accessToken }
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log("result", result)

  //     })
  //     .catch(err => {
  //       setErrorMessage(err.message)
  //     })
  // }



  return (

    < article >

      <div className="buttons-loggedin">
        <div>
          <button className="show-items-button"
            type='submit'
            onClick={handleMyFridge}
          >
            SHOW ME MY FRIDGE
          </button>
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
                    <p className="my-item"> {moment(item.date).format("Do-MM-YYYY")}</p>

                    {/* {moment({ date }).format("Do-MM-YYYY")} */}
                  </div>
                  <RemoveItem />
                </div>
              </ul>

            )

          })}
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

