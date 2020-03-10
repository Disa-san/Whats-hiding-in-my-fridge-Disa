import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NewUser } from './components/SignUp'
import { LoginUser } from './components/Login'
import { LogoutUser } from './components/Logout'
import { MyFridge } from './components/MyFridge'
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
            <div className="header">
              <h1><span className="header-text">What's hiding in my fridge?</span></h1>
            </div>
            <div>
              <LoginUser />
              <NewUser />

            </div>
          </section>
        </Route>
        {/* <Switch> */}
        <Route path="/items" exact>
          <section className="new-item-page">
            <MyFridge />
            <LogoutUser />
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </section>
        </Route>
        <Route path="/items/newitem">
          <section className="new-item-section">
            <NewItem />
          </section>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </Route>
        {/* </Switch> */}
      </Switch>
    </BrowserRouter >
  )
}
