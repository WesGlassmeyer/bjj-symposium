import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import config from "../config";
import VideoList from "../VideoList/VideoList";
import VideosContext from "../VideosContext";
import VideoPage from "../VideoPage/VideoPage";
import { Route } from "react-router-dom";

class App extends Component {
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
    const key = config.API_KEY;
    fetch(
      config.API_ENDPOINT +
        "?key=" +
        key +
        "&part=snippet&q=bjj,danaher,instructionals,bjjfanatics"
    )
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
  }

  render() {
    const contextValue = {
      videos: this.state.videos,
    };

    return (
      <main className="App">
        <VideosContext.Provider value={contextValue}>
          <Header />
          <DropdownFilter
            label="Choose a Position"
            value1="Mount"
            value2="Back Mount"
            value3="Side Control"
            value4="Guard"
          />
          <VideoList />
          <VideoPage />
        </VideosContext.Provider>
      </main>
    );
  }
}

export default App;

//<Route path="/video/:videoid" component={VideoPage} />
