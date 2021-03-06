import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DropdownForm from "../DropdownForm/DropdownForm";
import config from "../config";
import VideoList from "../VideoList/VideoList";
import VideosContext from "../VideosContext";
import VideoPage from "../VideoPage/VideoPage";
import { Route } from "react-router-dom";
import FavPage from "../FavPage/FavPage";
import LandingPage from "../LandingPage/LandingPage";

class App extends Component {
  state = {
    videos: [],
    error: null,
    filterSelections: {},
  };

  setFilterSelections = (value, filterType) => {
    const { filterSelections } = this.state;
    this.setState({
      filterSelections: { ...filterSelections, [filterType]: value },
    });
  };

  setVideos = (videos) => {
    this.setState({
      videos,
      error: null,
    });
  };

  // Use a hardcoded query string unless query is built by dropdowns
  createQueryString = () => {
    let queryString = "";
    const { filterSelections } = this.state;
    const filterSelectionValues = Object.values(filterSelections);
    if (filterSelectionValues.length > 0) {
      queryString = `&part=snippet&q=bjj,${Object.values(
        filterSelectionValues
      ).join(",")}`;
    } else {
      queryString = "&part=snippet&q=bjj,danaher,instructionals,bjjfanatics";
    }
    return queryString;
  };

  fetchVideos = () => {
    const key = config.API_KEY;
    fetch(config.API_ENDPOINT + "?key=" + key + this.createQueryString())
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res.json();
      })
      .then((data) => this.setVideos(data.items))
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  componentDidMount() {
    this.fetchVideos();
  }

  render() {
    const contextValue = {
      videos: this.state.videos,
      filterSelections: this.state.filterSelections,
      setFilterSelections: this.setFilterSelections,
    };

    return (
      <main className="App">
        <VideosContext.Provider value={contextValue}>
          <Navbar />
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/community_favorites" component={FavPage} />

          <Route
            exact
            path="/search"
            render={() => (
              <div>
                <DropdownForm onClick={this.fetchVideos} />
                <VideoList />
              </div>
            )}
          />
          <Route exact path="/video/:videoId" component={VideoPage} />
        </VideosContext.Provider>
      </main>
    );
  }
}

export default App;
