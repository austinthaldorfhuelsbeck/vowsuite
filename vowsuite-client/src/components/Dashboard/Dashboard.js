import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "./pages/Home"
import Help from "./pages/Help"

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
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      {error && <Alert variant="danger">{error}</Alert>}
      <Route exact path="/" component={Home} />
      <Route path="/help" component={Help} />
    </div>
  )
}
