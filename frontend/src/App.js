import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NewUser } from './components/Form1'
import { LoginUser } from './components/Login'
import { LogoutUser } from './components/Logout'
import { Secret } from './components/Secret'
import { NewItem } from './components/AddItem'
import { Menu, Burger } from './components/HamburgerMenu'

export const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <section className="first-page">
            <h1>What's hiding in my fridge?</h1>
            <div>
              <LoginUser />
              <NewUser />

            </div>
          </section>
        </Route>
        {/* <Switch> */}
        <Route path="/items" exact>

          <section className="new-item-page">
            <Secret />
            <LogoutUser />
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </section>
        </Route>
        <Route path="/items/newitem" component={NewItem} />
        {/* </Switch> */}
      </Switch>
    </BrowserRouter>
  )
}
