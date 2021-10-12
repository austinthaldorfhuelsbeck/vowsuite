import React from "react"
import TitleCard from "./TitleCard"
import BackgroundImageCard from "./BackgroundImageCard"
import EditsCard from "./EditsCard"

export default function EditTab({ collection, setCurrentTab }) {
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
