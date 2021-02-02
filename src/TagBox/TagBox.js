import React from "react";
import "./TagBox.css";

export default function TagBox(props) {
  return (
    <div>
      <input
        type="checkbox"
        id="Positions"
        name="Mount"
        value="Mount"
        onChange={props.onClick}
      />
      <label htmlFor="Mount"> Mount</label>
      <input
        type="checkbox"
        id="Positions"
        name="Back Mount"
        value="Back Mount"
        onChange={props.onClick}
      />
      <label htmlFor="Back Mount"> Back Mount</label>
      <input
        type="checkbox"
        id="Positions"
        name="Side Control"
        value="Side Control"
        onChange={props.onClick}
      />
      <label htmlFor="Side Control"> Side Control</label>
      <input
        type="checkbox"
        id="Positions"
        name="Guard"
        value="Guard"
        onChange={props.onClick}
      />
      <label htmlFor="Guard"> Guard</label>
      <input
        type="checkbox"
        id="Submissions"
        name="Choke"
        value="Choke"
        onChange={props.onClick}
      />
      <label htmlFor="Choke"> Choke</label>
      <input
        type="checkbox"
        id="Submissions"
        name="Arm Bar"
        value="Arm Bar"
        onChange={props.onClick}
      />
      <label htmlFor="Arm Bar"> Arm Bar</label>
      <input
        type="checkbox"
        id="Submissions"
        name="Kimura"
        value="Kimura"
        onChange={props.onClick}
      />
      <label htmlFor="Kimura"> Kimura</label>
      <input
        type="checkbox"
        id="Submissions"
        name="Triangle"
        value="Triangle"
        onChange={props.onClick}
      />
      <label htmlFor="Triangle"> Triangle</label>
      <input
        type="checkbox"
        id="Submissions"
        name="Leg Locks"
        value="Leg Locks"
        onChange={props.onClick}
      />
      <label htmlFor="Leg Locks"> Leg Locks</label>
      <input
        type="checkbox"
        id="action"
        name="Escape"
        value="Escape"
        onChange={props.onClick}
      />
      <label htmlFor="Escape"> Escape</label>
      <input
        type="checkbox"
        id="action"
        name="Control"
        value="Control"
        onChange={props.onClick}
      />
      <label htmlFor="Control"> Control</label>
      <input
        type="checkbox"
        id="action"
        name="Attack"
        value="Attack"
        onChange={props.onClick}
      />
      <label htmlFor="Attack"> Attack</label>
      <input
        type="checkbox"
        id="action"
        name="Reversal"
        value="Reversal"
        onChange={props.onClick}
      />
      <label htmlFor="Reversal"> Reversal</label>
    </div>
  );
}
