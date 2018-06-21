import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import 'components/Header.scss'

const Header = () => (
  <div className="bg-dark text-white">
    <header className="wrapper d-flex align-items-center">
      <h1 className="mr-5 my-0">
        <Link to="/" className="text-white">
          Shoptime
        </Link>
      </h1>
      <nav className="nav">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link py-0 text-white" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/orders" className="nav-link py-0 text-white" activeClassName="active">
            ORDERS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/product" className="nav-link py-0 text-white" activeClassName="active">
            PRODUCT
          </NavLink>
        </li>
      </nav>
      <h3 className="ml-auto mb-0 loginUser">Admin</h3>
    </header>
  </div>
)

export default Header