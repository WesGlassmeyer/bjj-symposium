import React from "react";
import "./TagBox.css";

export default function TagBox(props) {
  const positions = ["Mount", "Back Mount", "Side Control", "Guard"];
  const submissions = ["Choke", "Arm Bar", "Kimura", "Triangle", "Leg Locks"];
  const actions = ["Escape", "Reversal", "Control", "Attack"];

  return (
    <div>
      <div className="tag-container">
        <label className="video-page-tag-label">Positions:</label>
        <br></br>
        {positions.map((position) => (
          <React.Fragment key={position}>
            <input
              id="checkbox"
              type="checkbox"
              value={position}
              onChange={props.onClick}
              aria-label={position}
            />
            <label htmlFor={position}> {position}</label>
          </React.Fragment>
        ))}
      </div>
      <div className="tag-container">
        <label className="video-page-tag-label">Submissions:</label>
        <br></br>
        <div className="checkbox">
          {submissions.map((submission) => (
            <React.Fragment key={submission}>
              <label htmlFor={submission}>
                <input
                  type="checkbox"
                  value={submission}
                  onChange={props.onClick}
                  aria-label={submission}
                />
                <span>{submission}</span>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="tag-container">
        <label className="video-page-tag-label">Actions:</label>
        <div>
          {actions.map((action) => (
            <React.Fragment key={action}>
              <input
                className="checkbox"
                type="checkbox"
                value={action}
                onChange={props.onClick}
                aria-label={action}
              />
              <label htmlFor={action}> {action}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
