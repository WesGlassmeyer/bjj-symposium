import React, { Component } from "react";
import FavItem from "../FavItem/FavItem";
// import dummydata from "../dummydata";
import config from "../config";

class FavItemList extends Component {
  state = {
    videos: [],
    error: null,
  };
  setVideos = (videos) => {
    this.setState({
      videos,
      error: null,
    });
  };

  componentDidMount() {
    fetch(config.SERVER_endpoint)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }

        return res.json();
      })
      .then((res) => this.setVideos(res))
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  }

  render() {
    const favItems = this.state.videos;
    if (this.state.videos === []) {
      return <section className="FavItemListLoad">Loading...</section>;
    }

    return (
      <section className="FavItemList">
        <ul className="FavItemList__list" aria-live="polite">
          {favItems.map((favItem) => (
            <FavItem key={favItem.id} favItem={favItem} />
          ))}
        </ul>
      </section>
    );
  }
}

export default FavItemList;
