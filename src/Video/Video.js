import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";
//import Rating from "../Rating/Rating";

export default function Video(props) {
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
      <img
        id="img"
        className="style-scope yt-img-shadow"
        alt=""
        width="360"
        src={src}
      />
    </div>
  );
}

/*export default function Video(props) {
  return (
    <VideosContext.Consumer>
      {(context) => (
        <li className="Video">
          <div className="Video_row">
            <h3 className="Video_title">
              <a href={props.url} target="_blank" rel="noopener noreferrer">
                {props.title}
              </a>
            </h3>
            <Rating value={props.rating} />
          </div>
          <p className="Video_description">{props.description}</p>
        </li>
      )}
    </VideosContext.Consumer>
  );
}*/
