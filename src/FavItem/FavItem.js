import React, { Link } from "react";

export default function FavItem() {
  return (
    <div>
      <img
        id="img"
        className="style-scope yt-img-shadow"
        alt=""
        width="120"
        src="https://i.ytimg.com/vi/jdv82OdlTO8/default.jpg"
      />
      <h3>
        <Link to="/video/:videoId">
          Go Further Faster: BJJ Fundamentals (Gi) by John Danaher
        </Link>
      </h3>
    </div>
  );
}
