import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import Dropdown from "./Dropdown"

export default function Navbar({ currentUser, handleLogout }) {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo plain-link">
          VowSuite
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/help"
              className="nav-links smallcaps"
              onClick={closeMobileMenu}
            >
              Help & Support
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/update-profile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {currentUser && currentUser.email}{" "}
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown handleLogout={handleLogout} />}
          </li>
        </ul>
      </nav>
    </>
  )
}
