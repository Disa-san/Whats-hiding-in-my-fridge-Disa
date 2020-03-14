import React from 'react'
import { Link } from "react-router-dom"
import './about.css'

export const About = () => {

  return (
    <div className="about-text-section">
      <div>
        <h1>Keep track of the items in your fridge</h1>
        <p className="about-text">Register the food items in your fridge, with their expiry date, and have the app keep track of what is about to expire and what you can hang on to a while longer.
        <span><br /><br /><br /></span>
        This is an app created for the<div><Link to='/https://www.technigo.io/program'>Technigo Bootcamp</Link></div> by Disa Forshaw-de Beau</p>
      </div >
    </div >
  )

}

