import React, { useState } from "react"
import TitleCard from "./TitleCard"
import BackgroundImageCard from "./BackgroundImageCard"
import EditsCard from "./EditsCard"
import VideoCard from "./VideoCard"

export default function EditTab({ collection, setCurrentTab }) {
  const [currentEdit, setCurrentEdit] = useState(collection.edits[0])

  return (
    <>
      <div className="row my-2">
        <TitleCard collection={collection} setCurrentTab={setCurrentTab} />
        <BackgroundImageCard collection={collection} />
      </div>
      <div className="row my-2">
        <EditsCard
          edits={collection.edits}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
        />
      </div>
      <div className="row my-2">
        <VideoCard currentEdit={currentEdit} />
      </div>
    </>
  )
}
