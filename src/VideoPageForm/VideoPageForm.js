import React, { Component } from "react";
import "./VideoPageForm.css";
import Rating from "../Rating/Rating";
import TagBox from "../TagBox/TagBox";
import VideosContext from "../VideosContext";
import config from "../config";

export default class VideoPageForm extends Component {
  static contextType = VideosContext;
  state = {
    rating: 1,
    tags: [],
  };

  addItem = (item) => {
    fetch(`${config.SERVER_endpoint}/fav_items`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ item }),
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
    const newItem = this.state;
    this.addItem(newItem);
    alert("Your selection has been added to the Community Favorites Page.");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select a rating and the tags below to add this video to the Community
          Favorites Page:
        </label>
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
