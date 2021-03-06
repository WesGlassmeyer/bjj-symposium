import React, { Component } from "react";
import Video from "../Video/Video";
import "./VideoList.css";
import VideosContext from "../VideosContext";

class VideoList extends Component {
  static contextType = VideosContext;

  render() {
    const { videos } = this.context;

    if (this.context.videos.length === 0) {
      return <section className="VideoListLoad">Loading...</section>;
    }
    return (
      <section className="VideoList">
        <ul className="VideoList__list" aria-live="polite">
          {videos.map((video) => (
            <Video
              key={video.id.videoId}
              video={video}
              renderVideoLink="false"
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default VideoList;
