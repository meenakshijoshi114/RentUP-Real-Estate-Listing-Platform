import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <header>
      <div className="container header-flex">

        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-items">

          <div className="mylist">
            <span>2</span> My List
          </div>

          <Link to="/signin">
            <button className="signin-btn">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="signup-btn">
              <i className="fa fa-user-plus"></i> Sign Up
            </button>
          </Link>

        </div>

      </div>
    </header>
  )
}

export default Header
