import React from "react"
import { Card } from "react-bootstrap"

export default function EditTab({ collection, setCurrentTab }) {
  function TitleCard({ collection, setCurrentTab }) {
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

  function BackgroundImageCard({ collection }) {
    return (
      <Card className="col col-md-3 mx-1">
        <Card.Body>
          <img
            src={collection.img}
            alt={collection.name}
            style={{ height: "80px" }}
          />
          <p className="plain-link">Edit Background Image</p>
        </Card.Body>
      </Card>
    )
  }

  function EditsCard({ collection }) {
    function EditCard({ edit }) {
      const coverPhotoStyle = {
        backgroundImage: "url(" + edit.img + ")",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }

      return (
        <li className="set-li">
          <div className="set-item active">
            <div className="row main-title">
              <div className="cover">
                <div className="cover-photo" style={coverPhotoStyle}></div>
              </div>
              <div className="title">{edit.name}</div>
            </div>
          </div>
        </li>
      )
    }

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

  return (
    <>
      <div className="row my-2">
        <TitleCard collection={collection} setCurrentTab={setCurrentTab} />
        <BackgroundImageCard collection={collection} />
      </div>
      <div className="row my-2">
        <EditsCard collection={collection} />
      </div>
    </>
  )
}
