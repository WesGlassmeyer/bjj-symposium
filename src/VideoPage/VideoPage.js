import React, { Component } from "react";
import Video from "../Video/Video";
import VideosContext from "../VideosContext";
import "./VideoPage.css";
//import PropTypes from "prop-types";
import Rating from "../Rating/Rating";

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
    this.setState({ rating: e.target.value });
    console.log(e.target);
  };

  render() {
    const { videos } = this.context;
    const { videoId } = this.props.match.params;
    const video = videos.find((video) => {
      return video.id.videoId === videoId;
    });
    return (
      <section className="VideoPage">
        <Video video={video} />
        <Rating
          value={this.state.rating}
          clickEvent={this.handleChangeRating}
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

//{onDeleteNote={this.handleDeleteNote}}
