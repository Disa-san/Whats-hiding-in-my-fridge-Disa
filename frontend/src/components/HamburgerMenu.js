import React from 'react'
import styled from 'styled-components'
import { LogoutUser } from './Logout'
import { Link } from 'react-router-dom'



const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e7f3eb;
  color: #8f8995;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  

  @media (max-width: 576px) {
      width: 100%;
      padding: 2rem; 
    }

  a {
    font-size: 1.5rem;
    color:#8f8995;
    text-transform: uppercase;
    padding: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #514e4c;
    }
  }
`



export const Menu = ({ open, setOpen }) => {
  const onLoggedOut = event => {
    event.preventDefault()
    window.localStorage.removeItem('accessToken')
  }
  return (
    <StyledMenu open={open}>
      <Link to="/items/newitem" onClick={() => setOpen(!open)}>
        <span role="img" aria-label="new item" >🥝</span>
        New item
        </Link>
      <Link to="/about" onClick={() => setOpen(!open)}>
        <span role="img" aria-label="about us">✨</span>
        About
        </Link>
      <Link to="/" onClick={() => setOpen(!open)}>
        <LogoutUser>
          <span role="img" aria-label="contact" > ✖️ </span>
        </LogoutUser>
      </Link>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#8f8995' : '#8f8995'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}



