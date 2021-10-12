import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Sidenav from "../../Sidenav/Sidenav"
import EditTab from "./EditTab/EditTab"
import CustomizeTab from "./CustomizeTab/CustomizeTab"
import SettingsTab from "./SettingsTab/SettingsTab"
import ShareTab from "./ShareTab/ShareTab"
import "./Collection.css"

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
        {currentTab === "Edit" && (
          <EditTab collection={collection} setCurrentTab={setCurrentTab} />
        )}
        {currentTab === "Customize" && <CustomizeTab collection={collection} />}
        {currentTab === "Settings" && <SettingsTab collection={collection} />}
        {currentTab === "Share" && <ShareTab collection={collection} />}
      </div>
    </div>
  )
}
