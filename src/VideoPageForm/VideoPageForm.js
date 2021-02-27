import React, { Component } from "react";
import "./VideoPageForm.css";
import Rating from "../Rating/Rating";
import TagBox from "../TagBox/TagBox";
import VideosContext from "../VideosContext";
import config from "../config";

export default class VideoPageForm extends Component {
  static contextType = VideosContext;
  state = {
    title: this.props.video.snippet.title,
    thumbnail: this.props.video.snippet.thumbnails.default.url,
    youtube_id: this.props.video.id.videoId,
    rating: 1,
    tags: [],
  };

  addItem = (item) => {
    fetch(`${config.SERVER_endpoint}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: item.title,
        thumbnail: item.thumbnail,
        youtube_id: item.youtube_id,
        rating: item.rating,
        tags: item.tags,
      }),
    })
      .then((response) => {
        if (!response.ok)
          return response.json().then((error) => Promise.reject(error));
        return response.json();
      })
      // .then((data) => this.context.addFolder(data))
      .catch((error) => {
        console.error({ error });
      });
  };

  handleChangeRating = (e) => {
    this.setState({ rating: parseInt(e.target.getAttribute("index")) + 1 });
  };

  handleChangeTag = (e) => {
    if (e.target.checked) {
      this.setState({
        tags: [...this.state.tags, e.target.value],
      });
    } else {
      this.setState({
        tags: this.state.tags.filter((tag) => {
          return tag !== e.target.value;
        }),
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = this.state;
    this.addItem(newItem);
    alert("Your selection has been added to the Community Favorites Page.");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="video-page-label">Select tags and rating:</label>
        <TagBox onClick={this.handleChangeTag} />
        <Rating
          value={this.state.rating}
          clickEvent={this.handleChangeRating}
        />
        <input className="video-page-input" type="submit" value="Submit" />
      </form>
    );
  }
}
