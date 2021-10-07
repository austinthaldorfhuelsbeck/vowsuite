import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import { users } from "../../../data/users"

import "../Dashboard.css"
import Project from "../Project"

export default function Home({ currentUser }) {
  const userList = users.filter((u) => u.email === currentUser.email)
  const user = userList[0]
  const collections = user.collections

  return (
    <div className="content">
      <div className="container-flex projects">
        <div className="projects-header">
          <Button variant="outline-secondary">
            <i className="fas fa-folder-plus" />
            &nbsp;NEW COLLECTION
          </Button>
        </div>
        <div className="dashboard-nav">
          <Link to="/" className="plain-link">
            Collections
          </Link>
        </div>
        <div className="scroll-container">
          <ul className="projects-list">
            {collections.map((collection, index) => (
              <Project collection={collection} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
