import React from "react";
import "./TagBox.css";

export default function TagBox() {
  return (
    <div>
      <input type="checkbox" id="Positions" name="Mount" value="Mount" />
      <label htmlFor="Mount"> Mount</label>
      <input
        type="checkbox"
        id="Positions"
        name="Back Mount"
        value="Back Mount"
      />
      <label htmlFor="Back Mount"> Back Mount</label>
      <input
        type="checkbox"
        id="Positions"
        name="Side Control"
        value="Side Control"
      />
      <label htmlFor="Side Control"> Side Control</label>
      <input type="checkbox" id="Positions" name="Guard" value="Guard" />
      <label htmlFor="Guard"> Guard</label>
      <input type="checkbox" id="Submissions" name="Choke" value="Choke" />
      <label htmlFor="Choke"> Choke</label>
      <input type="checkbox" id="Submissions" name="Arm Bar" value="Arm Bar" />
      <label htmlFor="Arm Bar"> Arm Bar</label>
      <input type="checkbox" id="Submissions" name="Kimura" value="Kimura" />
      <label htmlFor="Kimura"> Kimura</label>
      <input
        type="checkbox"
        id="Submissions"
        name="Triangle"
        value="Triangle"
      />
      <label htmlFor="Triangle"> Triangle</label>
      <input
        type="checkbox"
        id="Submissions"
        name="Leg Locks"
        value="Leg Locks"
      />
      <label htmlFor="Leg Locks"> Leg Locks</label>
      <input type="checkbox" id="action" name="Escape" value="Escape" />
      <label htmlFor="Escape"> Escape</label>
      <input type="checkbox" id="action" name="Control" value="Control" />
      <label htmlFor="Control"> Control</label>
      <input type="checkbox" id="action" name="Attack" value="Attack" />
      <label htmlFor="Attack"> Attack</label>
      <input type="checkbox" id="action" name="Reversal" value="Reversal" />
      <label htmlFor="Reversal"> Reversal</label>
    </div>
  );
}
