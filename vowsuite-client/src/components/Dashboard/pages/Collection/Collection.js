import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Sidenav from "../../Sidenav/Sidenav"
import Edit from "./Edit"
import "./Collection.css"

export default function Collection({ user }) {
  const [currentTab, setCurrentTab] = useState("Edit")
  const { collection_id } = useParams()

  const collections = user.collections
  const collectionList = collections.filter(
    (c) => c.collection_id === collection_id
  )
  const collection = collectionList[0]

  function Customize({ collection }) {
    return <p>Customize</p>
  }

  function Settings({ collection }) {
    return <p>Settings</p>
  }

  function Share({ collection }) {
    return <p>Share</p>
  }

  return (
    <div className="content">
      <Sidenav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="wrapper">
        {currentTab === "Edit" && (
          <Edit collection={collection} setCurrentTab={setCurrentTab} />
        )}
        {currentTab === "Customize" && <Customize collection={collection} />}
        {currentTab === "Settings" && <Settings collection={collection} />}
        {currentTab === "Share" && <Share collection={collection} />}
      </div>
    </div>
  )
}
