import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./FavItem.css";

export default function FavItem(props) {
  return (
    <li className="fav-item">
      <Link
        to={`/video/${props.favItem && props.favItem.youtube_id}`}
        className="text-flex"
      >
        <h3>{props.favItem && props.favItem.title}</h3>
      </Link>
      <Link to={`/video/${props.favItem && props.favItem.youtube_id}`}>
        <img
          className="style-scope yt-img-shadow fav-page-img"
          alt={props.favItem.title}
          width="200"
          src={props.favItem && props.favItem.thumbnail}
        />
      </Link>

      <div className="text-flex">
        <Rating value={props.favItem && props.favItem.rating} />
        <p className="Fav-page-tags">
          Tags: {props.favItem && props.favItem.tags.join(", ")}
        </p>
      </div>
    </li>
  );
}
