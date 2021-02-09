import React from "react";
import ReactDOM from "react-dom";
import DropdownForm from "./DropdownForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DropdownForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
