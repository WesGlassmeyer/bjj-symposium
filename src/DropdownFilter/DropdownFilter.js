import React from "react";
import "./DropdownFilter.css";
import VideosContext from "../VideosContext";

export default function DropdownFilter(props) {
  const options = this.props.value;
  return (
    <VideosContext.Consumer>
      {({ setFilterSelections }) => (
        <>
          <select
            className="dropdown"
            id={props.id}
            onChange={(event) => {
              setFilterSelections(event.target.value, props.id);
            }}
          >
            <option disabled selected value>
              {" "}
              -- {props.label} --{" "}
            </option>
            {options.map((value, i) => (
              <option value={props.value[i]}>{value[i]}</option>
            ))}
            {/* <option value={props.value1}>{props.value1}</option>
            <option value={props.value2}>{props.value2}</option>
            <option value={props.value3}>{props.value3}</option>
            <option value={props.value4}>{props.value4}</option> */}
          </select>
        </>
      )}
    </VideosContext.Consumer>
  );
}
