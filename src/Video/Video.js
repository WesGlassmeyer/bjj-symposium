import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

export default function Video(props) {
  function renderVideoLink() {
    const embedLink = "https://www.youtube.com/embed/" + props.video.id.videoId;
    const renderVideoLink = props.renderVideoLink;
    const title = props.video.snippet.title;
    if (renderVideoLink === "false") {
      return (
        <div className="Video_image">
          <Link to={`/video/${props.video.id.videoId}`}>
            <img
              className="style-scope yt-img-shadow search-page-img"
              alt={title}
              width="200"
              src={src}
            />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="Video_link">
          <iframe
            className="responsive-iframe"
            title={title}
            width="300"
            height="169"
            src={embedLink}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
  }

  let src = props.video.snippet.thumbnails.high
    ? props.video.snippet.thumbnails.high.url
    : props.video.snippet.thumbnails.default.url;

  return (
    <li className="Video">
      <h3 className="Video_title">
        <Link to={`/video/${props.video.id.videoId}`}>
          {props.video.snippet.title}
        </Link>
      </h3>
      {renderVideoLink()}
    </li>
  );
}
