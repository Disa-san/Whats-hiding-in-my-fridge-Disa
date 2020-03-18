import React, { useState } from 'react'
import { items } from 'reducers/items'
// import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const URL = 'http://localhost:8000/items/'

export const RemoveItem = ({ id, afterRemoval }) => {
  // const dispatch = useDispatch()
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState("")

  const handleRemoveItem = () => {
    const accessToken = window.localStorage.getItem('accessToken')
    // const id = req.params.id
    fetch(URL + id, {
      method: "DELETE",
      headers: { "Authorization": accessToken }
    })
      .then(res => res.json())
      .then(result => {
        afterRemoval()
        console.log("result", result)
        // dispatch(items.actions.removeItem(id))

        history.push('/items')
      })
      .catch(err => {
        setErrorMessage(err.message)
      })
  }



  return (
    <button
      className="remove-item-button"
      type="submit"
      onClick={handleRemoveItem}>
      <span role="img" aria-label="remove item">  ✖️</span>
    </button>

    // <>

    //   {errorMessage && <div><p>{errorMessage}</p></div>}
    //   {message && <div><p>{message}</p></div>}

    // </>
  )
  // return (
  //   <ul key={item._id}>{item.food} <RemoveItem /></ul>
  // )
}