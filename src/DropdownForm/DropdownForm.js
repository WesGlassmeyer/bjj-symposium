import React from "react";
import "./DropdownForm.css";
import DropdownFilter from "../DropdownFilter/DropdownFilter";

export default function DropdownForm(props) {
  const dropdownValues = {
    positions: {
      id: "positions",
      label: "Choose a Position",
      value: ["Mount", "Back Mount", "Side Control", "Guard"],
    },
    submissions: {
      id: "submissions",
      label: "Choose a Submission",
      value: ["Choke", "Arm Bar", "Kimura", "Triangle", "Leg Locks"],
    },
    actions: {
      id: "actions",
      label: "Choose an Action ",
      value: ["Escape", "Reversal", "Control", "Attack"],
    },
  };
  return (
    <form className="dropdown_column">
      <label className="refine-label">Refine your search:</label>
      <DropdownFilter
        id={dropdownValues.positions.id}
        label={dropdownValues.positions.label}
        value={dropdownValues.positions.value}
      />
      <DropdownFilter
        id={dropdownValues.submissions.id}
        label={dropdownValues.submissions.label}
        value={dropdownValues.submissions.value}
      />
      <DropdownFilter
        id={dropdownValues.actions.id}
        label={dropdownValues.actions.label}
        value={dropdownValues.actions.value}
      />
      <input
        className="submit drop-down-input"
        type="button"
        value="Submit"
        onClick={props.onClick}
      />
    </form>
  );
}
