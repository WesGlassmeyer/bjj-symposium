import React from "react";
import ReactDOM from "react-dom";
import DropdownFilter from "./DropdownFilter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DropdownFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
