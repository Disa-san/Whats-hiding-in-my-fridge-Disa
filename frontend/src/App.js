import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { items } from './reducers/items'
import { NewUser } from './components/SignUp'
import { LoginUser } from './components/Login'
// import { LogoutUser } from './components/Logout'
import { MyFridge } from './components/MyFridge'
import { NewItem } from './components/AddItem'
import { Menu, Burger } from './components/HamburgerMenu'
// import { RemoveItem } from 'components/RemoveItem'
import { About } from 'components/About'

const reducer = combineReducers({
  items: items.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/About" exact>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <About />
          </Route>
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
          <Route path="/items" exact>
            <MyFridge />

            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </Route>
          <Route path="/items/newitem">
            <NewItem />
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </Route>
        </Switch>
      </BrowserRouter >
    </Provider>
  )
}
