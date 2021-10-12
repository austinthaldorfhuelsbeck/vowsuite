import React from "react"
import { Card } from "react-bootstrap"

export default function TitleCard({ collection, setCurrentTab }) {
  return (
    <Card className="col col-md-5 mx-1">
      <Card.Body>
        <Card.Title>{collection.name}</Card.Title>
        <p className="plain-link" onClick={() => setCurrentTab("Settings")}>
          Settings
        </p>
      </Card.Body>
    </Card>
  )
}
