import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./FavItem.css";

export default function FavItem(props) {
  return (
    <li className="fav-item">
      <img
        className="style-scope yt-img-shadow fav-page-img"
        alt=""
        width="90"
        src={props.favItem && props.favItem.thumbnail}
      />
      <div className="text-flex">
        <Link to={`/video/${props.favItem && props.favItem.youtube_id}`}>
          {props.favItem && props.favItem.title}
        </Link>
        <Rating value={props.favItem && props.favItem.rating} />
        <p className="Fav-page-tags">
          Tags: {props.favItem && props.favItem.tags.join(", ")}
        </p>
      </div>
    </li>
  );
}
