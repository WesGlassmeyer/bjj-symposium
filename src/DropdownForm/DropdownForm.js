import React from "react";
import "./DropdownForm.css";
import DropdownFilter from "../DropdownFilter/DropdownFilter";

export default function DropdownForm(props) {
  return (
    <form>
      <DropdownFilter
        id="positions"
        label="Choose a Position"
        value1="Mount"
        value2="Back Mount"
        value3="Side Control"
        value4="Guard"
      />
      <DropdownFilter
        id="submissions"
        label="Choose an Submission"
        value1="Choke"
        value2="Arm Bar"
        value3="Kimura"
        value4="Triangle"
        value5="Leg LockS"
      />
      <input type="submit" value="Submit" onClick={props.onClick} />
    </form>
  );
}
