import React from "react"
import { Card, Button } from "react-bootstrap"
import EditCard from "./EditCard"

export default function EditsCard({ edits, currentEdit, setCurrentEdit }) {
  return (
    <Card className="col mx-1">
      <Card.Body>
        <Card.Title>Edits</Card.Title>
        <Button variant="outline-secondary">
          <i className="fas fa-plus" />
          &nbsp;Add New Edit
        </Button>
        <ul className="sets-list my-3">
          {edits.map((e) => (
            <EditCard
              key={e.edit_id}
              edit={e}
              currentEdit={currentEdit}
              setCurrentEdit={setCurrentEdit}
            />
          ))}
        </ul>
      </Card.Body>
    </Card>
  )
}
