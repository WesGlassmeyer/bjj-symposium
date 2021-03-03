import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const welcomeFont = {
    fontSize: "22px",
  };
  return (
    <div>
      <div className="welcome">
        <p>
          <span style={welcomeFont} id="title">
            Welcome!
          </span>{" "}
          <br></br> {"  "}Our app allows you to search for Brazilian Jiu Jitsu
          videos from YouTube. If you find a video you think is valuable, you
          can rate it, apply tags and commit it to the Community Favorites Page.{" "}
          <br></br>
          <br></br>There are so many BJJ videos out there. We thought it would
          be useful to create a place where you can look for videos that have
          been approved by others in the community and help simplify your
          search.{" "}
        </p>
        <div className="landing-page-button-container">
          <button className="button1">
            <Link to="/search">Search</Link>
          </button>

          <button className="button1">
            <Link to="/community_favorites">Community Favorites</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
