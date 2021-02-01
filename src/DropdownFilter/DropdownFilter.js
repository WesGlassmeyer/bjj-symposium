import React from "react";
import "./DropdownFilter.css";
import VideosContext from "../VideosContext";

export default function DropdownFilter(props) {
  const options = props.value;
  const optionItems = options.map((data) => (
    <option key={data} value={data}>
      {data}
    </option>
  ));
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
            {optionItems}
          </select>
        </>
      )}
    </VideosContext.Consumer>
  );
}
