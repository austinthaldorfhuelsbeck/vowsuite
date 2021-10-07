import React from "react"
import { useHistory } from "react-router-dom"

export default function Sidenav({ currentTab, setCurrentTab }) {
  const history = useHistory()

  const sidenavItems = [
    {
      title: "Edit",
      icon: "fa-cloud",
    },
    {
      title: "Customize",
      icon: "fa-swatchbook",
    },
    {
      title: "Settings",
      icon: "fa-sliders-h",
    },
    {
      title: "Share",
      icon: "fa-paper-plane",
    },
  ]

  return (
    <div className="sidenav">
      <div className="sidenav-header" onClick={() => history.goBack()}>
        <p>
          <i className="fas fa-chevron-left" />
          &nbsp; BACK
        </p>
      </div>
      {sidenavItems.map((item, index) => (
        <li
          className={
            currentTab === item.title ? "sidenav-tab active" : "sidenav-tab"
          }
          key={index}
          onClick={() => setCurrentTab(item.title)}
        >
          <p>
            <i className={`fas ${item.icon}`} />
            &nbsp; {item.title}
          </p>
        </li>
      ))}
    </div>
  )
}
