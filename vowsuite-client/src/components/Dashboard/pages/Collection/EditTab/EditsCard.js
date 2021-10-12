import React from "react"
import { Card } from "react-bootstrap"
import EditCard from "./EditCard"

export default function EditsCard({ collection }) {
  return (
    <Card className="col mx-1">
      <Card.Body>
        <Card.Title>Edits</Card.Title>
        <ul className="sets-list">
          {collection.edits.map((edit) => (
            <EditCard edit={edit} />
          ))}
        </ul>
      </Card.Body>
    </Card>
  )
}
