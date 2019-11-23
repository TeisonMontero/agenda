import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '../Forms/Button'

const Navegation = ({}) => {
  const onSubmit = async e => {
    e.preventDefault()
  }

  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <nav className="nav">
          <li>
            <NavLink 
              to="/home"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/pokedex"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              Pokedex
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/profile"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              My Account
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/edit"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              Edit Account
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/logout"
              className="nav__item"
              activeClassName="nav__item--active"
            >
              Log out
            </NavLink>
          </li>

          <Button
            text="Add new"
            classes="nav__button"
            onClick={e => onSubmit(e)}
          />
        </nav>
      </div>
    </div>
  )
}

export default Navegation
