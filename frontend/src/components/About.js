import React from 'react'
import { Link } from "react-router-dom"
import './about.css'

export const About = () => {

  return (
    <div className="about">
      <div className="about-text-section">
        <h1 className="h1-about">Keep track of the items in your fridge</h1>
        <p className="about-text">Register the food items in your fridge, with their expiry date, and have the app keep track of what is about to expire and what you can hang on to a while longer.
        <span><br /><br /><br /></span>
        This is an app created during the
        <div>
            <button onClick={() => {
              let win = window.open('')
              win.location.replace('https://www.technigo.io/program')
            }} >
              <p className="link">Technigo Bootcamp</p>
            </button>
          </div> by Disa Forshaw-de Beau</p>
      </div >

      <div className="home-button-div">
        <Link to='/items'>
          <button className="home-button">
            <span role="img" aria-label="take me back">  ⬅</span> BACK TO FRIDGE
      </button>
        </Link>
      </div>
    </div >
  )
}

{/* <a href='/https://www.technigo.io/program'>Technigo Bootcamp</a> */ }