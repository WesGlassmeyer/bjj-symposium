import React from "react";
import ReactDOM from "react-dom";
import DropdownFilter from "./DropdownFilter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const dropdownValues = {
    positions: {
      id: "positions",
      label: "Choose a Position",
      value: ["Mount", "Back Mount", "Side Control", "Guard"],
    },
  };
  ReactDOM.render(
    <DropdownFilter
      id={dropdownValues.positions.id}
      label={dropdownValues.positions.label}
      value={dropdownValues.positions.value}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
