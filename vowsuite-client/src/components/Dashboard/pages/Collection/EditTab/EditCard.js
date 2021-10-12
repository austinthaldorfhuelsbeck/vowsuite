import React from "react"

export default function EditCard({ edit, currentEdit, setCurrentEdit }) {
  const coverPhotoStyle = {
    backgroundImage: "url(" + edit.img + ")",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }

  return (
    <li className="set-li" onClick={() => setCurrentEdit(edit)}>
      <div
        className={
          currentEdit === edit ? "set-item set-item-active" : "set-item"
        }
      >
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
