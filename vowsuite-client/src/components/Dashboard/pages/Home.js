import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import "../Dashboard.css"
import Project from "../Project"
import { users } from "../../../data/users"

export default function Home() {
  const user = users[0]
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
