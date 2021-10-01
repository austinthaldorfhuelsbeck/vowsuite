import React from "react"
import "./App.css"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/" component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </AuthProvider>
  )
}
