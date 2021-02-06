import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

export default function FavItem(props) {
  return (
    <li>
      <img
        className="style-scope yt-img-shadow"
        alt=""
        width="120"
        src={props.favItem && props.favItem.snippet.thumbnails.default.url}
      />

      <Link to={`/video/${props.favItem && props.favItem.id.videoId}`}>
        {props.favItem && props.favItem.snippet.title}
      </Link>
      <Rating value={props.favItem && props.favItem.rating} />
      <p>tags:{props.favItem && props.favItem.tags.join()}</p>
    </li>
  );
}
