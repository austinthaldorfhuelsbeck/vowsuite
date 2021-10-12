import React from "react"
import { Card } from "react-bootstrap"
import EditCard from "./EditCard"

export default function EditsCard({ edits, currentEdit, setCurrentEdit }) {
  return (
    <Card className="col mx-1">
      <Card.Body>
        <Card.Title>Edits</Card.Title>
        <ul className="sets-list">
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
