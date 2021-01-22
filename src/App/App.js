import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import Video from "../Video/Video";
//import config from "../config";
import VideoList from "../VideoList/VideoList";
import VideosContext from "../VideosContext";

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
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBccQi8mVYx8V0h3JLi1V4J8EF5ywTQeM0&part=snippet&q=bjj, danaher, instructionals, bjj fanatics",
      {
        method: "GET",
        params: {
          key: "AIzaSyBccQi8mVYx8V0h3JLi1V4J8EF5ywTQeM0",
          part: "snippet",
          q: "bjj, danaher, bjj fanatics",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res.json();
      })
      .then(this.setVideos)
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
          <Video
            name="The 3 Most Important Jiu Jitsu Techniques For A BJJ White Belt by John Danaher"
            id="1"
          />
        </VideosContext.Provider>
      </main>
    );
  }
}

export default App;
