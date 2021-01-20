import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

export default function Video(props) {
  return (
    <div className="Video">
      <h2 className="Video_title">
        <Link to={`/video/${props.id}`}>{props.name}</Link>
      </h2>
      <img
        id="img"
        class="style-scope yt-img-shadow"
        alt=""
        width="360"
        src="https://i.ytimg.com/vi/GshEzcqlUbY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAWmWnbCV6ke2ZUH7zS_-_-laZQaw"
      ></img>
    </div>
  );
}
