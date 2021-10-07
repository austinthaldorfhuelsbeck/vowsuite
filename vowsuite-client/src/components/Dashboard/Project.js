import React from "react"
import { Link } from "react-router-dom"

export default function Project({ collection }) {
  return (
    <li className="tile">
      <Link to="/" className="gallery-tile">
        <div className="row">
          <div className="col col-5">
            <img src={collection.img} alt="" className="cover-img" />
          </div>
          <div className="col col-7 plain-link collection-title mt-3">
            {collection.name}
          </div>
        </div>
      </Link>
    </li>
  )
}
