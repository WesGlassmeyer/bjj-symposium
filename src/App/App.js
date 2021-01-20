import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import Video from "../Video/Video";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DropdownFilter
          label="Choose a Position"
          value1="Mount"
          value2="Back Mount"
          value3="Side Control"
          value4="Guard"
        />
        <Video
          name="The 3 Most Important Jiu Jitsu Techniques For A BJJ White Belt by John Danaher"
          id="1"
        />
      </div>
    );
  }
}

export default App;
