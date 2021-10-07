import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Sidenav from "../Sidenav/Sidenav"

export default function Collection({ user }) {
  const [currentTab, setCurrentTab] = useState("Edit")
  const { collection_id } = useParams()

  const collections = user.collections
  const collectionList = collections.filter(
    (c) => c.collection_id === collection_id
  )
  const collection = collectionList[0]

  return (
    <div className="content">
      <Sidenav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="wrapper">
        {currentTab === "Edit" && collection.name}
        {currentTab === "Customize" && "Customize"}
        {currentTab === "Settings" && "Settings"}
        {currentTab === "Share" && "Share"}
      </div>
    </div>
  )
}
