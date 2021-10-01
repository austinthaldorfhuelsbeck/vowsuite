import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Home() {
  const collections = [
    {
      id: 1,
      name: "Megan + Anand",
    },
    {
      id: 2,
      name: "Elena + Josh",
    },
    {
      id: 3,
      name: "Gio + An",
    },
    {
      id: 4,
      name: "Amanda + Kyle",
    },
    {
      id: 5,
      name: "Barbara + Jonathan",
    },
    {
      id: 6,
      name: "Candice + Eric",
    },
  ]

  const Project = ({ collection }) => (
    <li className="tile">
      <Link to="/" className="gallery-tile">
        <div className="row">
          <div className="col col-5">img</div>
          <div className="col col-7 plain-link">{collection.name}</div>
        </div>
      </Link>
    </li>
  )

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
