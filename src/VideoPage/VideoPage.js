import React, { Component } from "react";
import Video from "../Video/Video";
import VideosContext from "../VideosContext";
//import { findVideo } from "../videos-helpers";
import "./VideoPage.css";
//import PropTypes from "prop-types";
import Header from "../Header/Header";

export default class VideoPage extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = VideosContext;

  handleDeleteVideo = (videoid) => {
    this.props.history.push(`/`);
  };

  render() {
    const { videos } = this.context;
    const { videoId } = this.props.match.params;
    const video = videos.find((video) => {
      return video.id.videoId === videoId;
    });
    return (
      <section className="VideoPage">
        <Header />
        <Video video={video} />
        <div>
          {videoId}
          {video.snippet.title}
        </div>
      </section>
    );
  }
}

//VideoPage.propTypes = {
//history: PropTypes.object,
//match: PropTypes.object,
//};

//<div className="VideoPage_content">
//       {video.content.split(/\n \r|\n/).map((para, i) => (
//        <p key={i}>{para}</p>
//    ))}
//</div>

//{onDeleteNote={this.handleDeleteNote}}
