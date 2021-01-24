import React, { Component } from "react";
import Video from "../Video/Video";
import "./VideoList.css";
import VideosContext from "../VideosContext";

class VideoList extends Component {
  static defaultProps = {
    videos: [],
  };

  static contextType = VideosContext;

  render() {
    const { videos } = this.context;
    return (
      <section className="VideoList">
        <h2>Your videos</h2>
        <ul className="VideoList__list" aria-live="polite">
          {videos.map((video) => (
            <Video key={video.id.videoId} {...video} />
          ))}
        </ul>
      </section>
    );
  }
}

export default VideoList;
