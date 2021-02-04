import React, { Component } from "react";
import "./VideoPageForm.css";
import Rating from "../Rating/Rating";
import TagBox from "../TagBox/TagBox";
import VideosContext from "../VideosContext";

export default class VideoPageForm extends Component {
  static contextType = VideosContext;
  state = {
    rating: 1,
    tags: [],
  };

  handleChangeRating = (e) => {
    this.setState({ rating: parseInt(e.target.getAttribute("index")) + 1 });
  };

  handleChangeTag = (e) => {
    console.log(e.target.value, e.target.checked);
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
    console.log(this.state);
    event.preventDefault();
    alert("Your selection has been added to the Community Favorites Page.");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          Select a rating and the tags below to add this video to the Community
          Favorites Page
        </p>
        <TagBox onClick={this.handleChangeTag} />
        <Rating
          value={this.state.rating}
          clickEvent={this.handleChangeRating}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
