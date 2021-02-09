import React from "react";
import ReactDOM from "react-dom";
import VideoPage from "./VideoPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VideoPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
