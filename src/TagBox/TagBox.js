import React from "react";
import "./TagBox.css";

export default function TagBox(props) {
  const positions = ["Mount", "Back Mount", "Side Control", "Guard"];
  const submissions = ["Choke", "Arm Bar", "Kimura", "Triangle", "Leg Locks"];
  const actions = ["Escape", "Reversal", "Control", "Attack"];

  return (
    <div>
      {positions.map((position) => (
        <>
          <input
            type="checkbox"
            key={position}
            value={position}
            onChange={props.onClick}
            aria-label={position}
          />
          <label htmlFor={position}> {position}</label>
        </>
      ))}

      {submissions.map((submission) => (
        <>
          <input
            type="checkbox"
            key={submission}
            value={submission}
            onChange={props.onClick}
            aria-label={submission}
          />
          <label htmlFor={submission}> {submission}</label>
        </>
      ))}

      {actions.map((action) => (
        <>
          <input
            type="checkbox"
            key={action}
            value={action}
            onChange={props.onClick}
            aria-label={action}
          />
          <label htmlFor={action}> {action}</label>
        </>
      ))}
    </div>
  );
}
