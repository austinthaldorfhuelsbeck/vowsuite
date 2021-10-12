import React from "react"

export default function EditCard({ edit }) {
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
