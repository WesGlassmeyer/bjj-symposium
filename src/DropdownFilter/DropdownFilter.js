import React from "react";
import "./DropdownFilter.css";
import VideosContext from "../VideosContext";

export default function DropdownFilter(props) {
  return (
    <VideosContext.Consumer>
      {({ setFilterSelections }) => (
        <>
          <label htmlFor="positions">{props.label}:</label>

          <select
            className="positions"
            id="positions"
            onClick={setFilterSelections}
          >
            <option value="{props.value1}">{props.value1}</option>
            <option value="{props.value2}">{props.value2}</option>
            <option value="{props.value3}">{props.value3}</option>
            <option value="{props.value4}">{props.value4}</option>
          </select>
        </>
      )}
    </VideosContext.Consumer>
  );
}
