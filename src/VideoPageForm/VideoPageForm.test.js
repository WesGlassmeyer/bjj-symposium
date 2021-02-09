import React from "react";
import ReactDOM from "react-dom";
import VideoPageForm from "./VideoPageForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VideoPageForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
