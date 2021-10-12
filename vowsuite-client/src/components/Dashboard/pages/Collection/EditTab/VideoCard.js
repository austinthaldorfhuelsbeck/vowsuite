import React from "react"
import { Card, Button } from "react-bootstrap"
import ReactPlayer from "react-player"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileVideo } from "@fortawesome/free-solid-svg-icons"

export default function VideoCard({ currentEdit }) {
  return (
    <Card className="mx-1">
      <Card.Body>
        <Card.Title>{currentEdit.name}</Card.Title>
        {currentEdit.video ? (
          <>
            <ReactPlayer url={currentEdit.video} controls />
            Delete Video
          </>
        ) : (
          <div className="row video-missing">
            <FontAwesomeIcon
              icon={faFileVideo}
              className="file-video-icon my-3"
            />
            <div className="row support-articles">
              <a
                className="theme-link"
                target="_blank"
                href="https://wedflow.zendesk.com/hc/en-us/articles/360020714351"
                rel="noreferrer"
              >
                <i className="fas fa-external-link-square-alt"></i> Recommended
                Video Formats & Codecs
              </a>
            </div>
            <div className="row my-3">
              <Button
                variant="secondary"
                className="mx-auto col col-4 col-md-2"
              >
                <i className="fas fa-cloud-upload-alt"></i>
                &nbsp;Upload
              </Button>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}
