import React, { useState } from 'react'

const URL = 'http://localhost:8000/items/:_id'

export const RemoveItem = () => {
  const handleRemoveItem = () => {

    fetch(URL, {
      method: "DELETE",
    })

  }

  return (
    <button
      className="remove-item-button"
      type="submit"
      onClick={handleRemoveItem}>
      <span role="img" aria-label="remove item">  ✖️</span>
    </button>
  )
}