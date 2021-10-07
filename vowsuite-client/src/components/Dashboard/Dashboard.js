import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Route } from "react-router-dom"

import { users } from "../../data/users"
import "./Dashboard.css"

import Navbar from "./Navbar/Navbar"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Help from "./pages/Help"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  // Find the logged-in user
  const userList = users.filter((u) => u.email === currentUser.email)
  const user = userList[0]

  const handleLogout = async () => {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="dashboard">
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      {error && <Alert variant="danger">{error}</Alert>}
      <Route exact path="/">
        <Home user={user} />
      </Route>
      <Route path="/collections/:collection_id">
        <Collection user={user} />
      </Route>
      <Route path="/help" component={Help} />
    </div>
  )
}
