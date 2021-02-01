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
    <form>
      <DropdownFilter
        id={dropdownValues.positions.id}
        label={dropdownValues.positions.label}
        value={dropdownValues.positions.value}
      />
      <DropdownFilter
        id="submissions"
        label="Choose an Submission"
        value1="Choke"
        value2="Arm Bar"
        value3="Kimura"
        value4="Triangle"
        value5="Leg Locks"
      />
      <DropdownFilter
        id="actions"
        label="Choose an Action"
        value1="Escape"
        value2="Reversal"
        value3="Control"
        value4="Attack"
      />
      <input type="button" value="Submit" onClick={props.onClick} />
    </form>
  );
}
