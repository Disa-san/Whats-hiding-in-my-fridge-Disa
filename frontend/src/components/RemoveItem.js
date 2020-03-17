import React, { useState } from 'react'

const URL = 'http://localhost:8000/items/:id'

export const RemoveItem = () => {

  const [errorMessage, setErrorMessage] = useState("")

  const handleRemoveItem = () => {
    const accessToken = window.localStorage.getItem('accessToken')
    // const id = req.params.id
    fetch(URL, {
      method: "DELETE",
      headers: { "Authorization": accessToken }
    })
      .then(res => res.json())
      .then(result => {
        console.log("result", result)

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