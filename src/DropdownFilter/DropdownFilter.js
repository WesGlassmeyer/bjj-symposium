import React from "react";
import "./DropdownFilter.css";

export default function DropdownFilter(props) {
  return (
    <>
      <label htmlFor="positions">{props.label}:</label>

      <select className="positions" id="positions">
        <option value="{props.value1}">{props.value1}</option>
        <option value="{props.value2}">{props.value2}</option>
        <option value="{props.value3}">{props.value3}</option>
        <option value="{props.value4}">{props.value4}</option>
      </select>
    </>
  );
}
