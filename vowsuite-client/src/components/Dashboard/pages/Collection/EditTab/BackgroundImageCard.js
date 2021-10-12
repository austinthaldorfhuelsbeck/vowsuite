import React from "react"
import { Card } from "react-bootstrap"

export default function BackgroundImageCard({ collection }) {
  return (
    <Card className="col col-md-3 mx-1">
      <Card.Body>
        <img
          src={collection.img}
          alt={collection.name}
          style={{ height: "80px" }}
          className="cover-img"
        />
        <p className="plain-link">Edit Background Image</p>
      </Card.Body>
    </Card>
  )
}
