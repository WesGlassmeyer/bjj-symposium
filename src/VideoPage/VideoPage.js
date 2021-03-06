import React, { Component } from "react";
import Iframe from "../Iframe/Iframe";
import VideosContext from "../VideosContext";
import "./VideoPage.css";
import VideoPageForm from "../VideoPageForm/VideoPageForm";

export default class VideoPage extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = VideosContext;
  state = {
    rating: 1,
  };

  handleChangeRating = (e) => {
    this.setState({ rating: parseInt(e.target.getAttribute("index")) + 1 });
  };

  render() {
    const { videos } = this.context;
    const { videoId } = this.props.match.params;
    const video = videos.find((video) => {
      return video.id.videoId === videoId;
    });
    if (!video) {
      return <section className="VideoPageLoad">Loading...</section>;
    }

    return (
      <section className="VideoPage">
        <Iframe video={video} />
        <VideoPageForm video={video} />
      </section>
    );
  }
}
