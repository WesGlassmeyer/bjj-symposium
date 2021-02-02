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
        <img
          id="img"
          className="style-scope yt-img-shadow"
          alt=""
          width="360"
          src={src}
        />
      );
    } else {
      return (
        <iframe
          title={title}
          width="560"
          height="315"
          src={embedLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
  }

  let src = props.video.snippet.thumbnails.high
    ? props.video.snippet.thumbnails.high.url
    : props.video.snippet.thumbnails.default.url;

  return (
    <div className="Video">
      <h2 className="Video_title">
        <Link to={`/video/${props.video.id.videoId}`}>
          {props.video.snippet.title}
        </Link>
      </h2>
      {renderVideoLink()}
    </div>
  );
}
