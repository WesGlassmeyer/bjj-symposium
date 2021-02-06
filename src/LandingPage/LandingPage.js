import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <p>
        Welcome to BJJ Symposium! Our app allows you to search for BJJ videos
        from YouTube. If you find a video you think is valuable, you can rate
        it, apply tags and commit it to the Community Favorites Page.{" "}
      </p>
      <p>
        There are so many BJJ videos out there. We thought it would be useful to
        create a place where you can look for videos that have been approved by
        others in the community and help simplify your search.{" "}
      </p>
      <p>
        Click <Link to="/search">here</Link> to search YouTube or click{" "}
        <Link to="/community_favorites">here</Link> to check out the Community
        Favorites.
      </p>
    </div>
  );
}
