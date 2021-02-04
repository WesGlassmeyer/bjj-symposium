import React, { Component } from "react";
import { Link } from "react-router-dom";
import dummydata from "../dummydata";
import Rating from "../Rating/Rating";

export default class FavPage extends Component {
  render() {
    return (
      <div>
        <img
          id="img"
          className="style-scope yt-img-shadow"
          alt=""
          width="120"
          src={dummydata.items[0].snippet.thumbnails.default.url}
        />

        <Link to={`/video/${dummydata.items[0].id.videoId}`}>
          {dummydata.items[0].snippet.title}
        </Link>
        <Rating value={dummydata.items[0].rating} />
        <p>tags:{dummydata.items[0].tags.join()}</p>
      </div>
    );
  }
}
