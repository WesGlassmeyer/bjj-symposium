import React from "react";
import "./FavLink.css";
import { Link } from "react-router-dom";

export default function FavLink() {
  return (
    <h2>
      <Link to="/community_favorites">Browse Community Favorites</Link>
    </h2>
  );
}
