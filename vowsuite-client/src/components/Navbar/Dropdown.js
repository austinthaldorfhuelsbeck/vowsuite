import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Dropdown.css"

export default function Dropdown({ handleLogout }) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "menu-dropdown clicked" : "menu-dropdown"}
      >
        <li>
          <Link
            className="dropdown-link"
            to="/update-profile"
            onClick={() => setClick(false)}
          >
            Update Profile
          </Link>
        </li>
        <li>
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </li>
      </ul>
    </>
  )
}
