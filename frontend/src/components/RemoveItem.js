// import React, { useState } from 'react'
// import { MyFridge } from './MyFridge'

// const URL = 'http://localhost:8000/items/:id'

// export const RemoveItem = () => {

//   const [items, setItems] = useState([])
//   const handleRemoveItem = () => {

//     fetch(URL, {
//       method: "DELETE",
//     })
//       // .then(res => res.json())
//       // .then(result => {
//       //   console.log("result", result)

//       .then(json => {
//         console.log(json.items)
//         setItems(json.items)
//       })
//   }



//   return (
//     <button
//       className="remove-item-button"
//       type="submit"
//       onClick={handleRemoveItem}>
//       <span role="img" aria-label="remove item">  ✖️</span>
//     </button>
//   )
//   return (
//     <ul key={item._id}>{item.food} <RemoveItem /></ul>
//   )
// }