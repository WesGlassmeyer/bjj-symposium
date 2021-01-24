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
    const { video = [] } = this.context;
    const { videoid } = this.props.match.params;
    //const video = findVideo(Videos, videoid) || { content: "" };
    console.log(video);
    return (
      <section className="VideoPage">
        <Header />
        <Video
          id={videoid}
          name={video.name}
          //onDeleteNote={this.handleDeleteNote}
        />
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
