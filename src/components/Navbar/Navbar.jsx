import React from 'react'
import { Link } from "react-router-dom";

import Search from "../SearchComponent/Search"
import Logo from "../../img/logo.png"
import "./Navbar.css"

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/popular" className="navbar-brand">
            <img className="logo" src={Logo} alt="" />
          </Link>
          <Search />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
