import React from "react";
import "./Iframe.css";

export default function Iframe(props) {
  const embedLink = "https://www.youtube.com/embed/" + props.video.id.videoId;
  const title = props.video.snippet.title;
  return (
    <div className="Iframe">
      <h2 className="Video_title">{props.video.snippet.title}</h2>
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
    </div>
  );
}
