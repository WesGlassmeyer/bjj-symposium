import React from "react";
import ReactDOM from "react-dom";
import TagBox from "./TagBox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TagBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
