import React, { Component } from "react";
import Video from "../Video/Video";
import VideosContext from "../VideosContext";
import "./VideoPage.css";
//import PropTypes from "prop-types";
import VideoPageForm from "../VideoPageForm/VideoPageForm";
import FavLink from "../FavLink/FavLink";

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
      console.log(video);
      return video.id.videoId === videoId;
    });
    if (!video) {
      return <section className="VideoPage">Loading...</section>;
    }

    return (
      <section className="VideoPage">
        <FavLink />
        <ul>
          <Video video={video} />
        </ul>
        <VideoPageForm video={video} />
      </section>
    );
  }
}

//VideoPage.propTypes = {
//history: PropTypes.object,
//match: PropTypes.object,
//};
