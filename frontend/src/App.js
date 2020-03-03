import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NewUser } from './components/Form1'
import { LoginUser } from './components/Login'
import { LogoutUser } from './components/Logout'
import { Secret } from './components/Secret'
import { NewItem } from './components/AddItem'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <section className="first-page">
            <h1>What's hiding in your fridge?</h1>
            <div>
              <LoginUser />
              <NewUser />

            </div>
          </section>
        </Route>
        <Route path="/items" exact>
          <section>
            <Secret />
            <Route path="/items" exact>
              <NewItem />
            </Route>
            <LogoutUser />
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

