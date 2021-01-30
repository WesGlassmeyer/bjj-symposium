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
    dropdownFilter: {
      touched: false,
    },
    newVideo: {
      comment: {
        touched: false,
        value: "",
      },
    },
  };
  // i want the fetch query to be one thing on page load and then have the ability to change to another once you start selecting dropdown filters
  // set up a conditional check if the drop down is touched
  // set state drop down touched onchange of dropdown filters
  // have that function take in the dropdown values and create a query String.

  setDropdownStatus = (value) => {
    this.setState({
      dropdownFilter: {
        touched: true,
      },
    });
  };

  setVideos = (videos) => {
    this.setState({
      videos,
      error: null,
    });
  };

  updateVideoData = (input, value) => {
    this.setState({
      newVideo: {
        ...this.state.newVideo,
        [input]: {
          touched: true,
          value: value,
        },
      },
    });
  };

  createQueryString = () => {
    let queryString = "";
    if (this.state.dropdownFilter.touched === true) {
      queryString = "&part=snippet&q=bjj";
    } else {
      queryString = "&part=snippet&q=bjj,danaher,instructionals,bjjfanatics";
    }
    return queryString;
  };

  componentDidMount() {
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
  }

  render() {
    const contextValue = {
      videos: this.state.videos,
      updateVideoData: this.updateVideoData,
    };

    return (
      <main className="App">
        <VideosContext.Provider value={contextValue}>
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <DropdownFilter
                  label="Choose a Position"
                  value1="Mount"
                  value2="Back Mount"
                  value3="Side Control"
                  value4="Guard"
                />
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
//<Route path="/video/:videoid" component={VideoPage} />
