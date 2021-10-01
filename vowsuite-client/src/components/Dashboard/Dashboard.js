import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

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
      {error && <Alert variant="danger">{error}</Alert>}
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/help">
        <h1>Help</h1>
      </Route>
    </div>
  )
}
