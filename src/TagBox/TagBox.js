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

//  <div>
//         <label>Positions:</label>
//         <br></br>
//         {positions.map((position) => (
//           <>
//             <input
//               type="checkbox"
//               key={position}
//               value={position}
//               onChange={props.onClick}
//               aria-label={position}
//             />
//             <label htmlFor={position}> {position}</label>
//           </>
//         ))}
//       </div>
//       <label>Submissions:</label>
//       <br></br>
//       <div>
//         {submissions.map((submission) => (
//           <>
//             <input
//               type="checkbox"
//               key={submission}
//               value={submission}
//               onChange={props.onClick}
//               aria-label={submission}
//             />
//             <label htmlFor={submission}> {submission}</label>
//           </>
//         ))}
//       </div>
//       <div>
//         {actions.map((action) => (
//           <>
//             <input
//               type="checkbox"
//               key={action}
//               value={action}
//               onChange={props.onClick}
//               aria-label={action}
//             />
//             <label htmlFor={action}> {action}</label>
//           </>
//         ))}
//       </div>

// <div>
// <label for="tags">Tags:</label>
// <select name="tags" id="tags">
//   <optgroup label="Positions">
//     {positions.map((position) => (
//       <option
//         key={position}
//         value={position}
//         onChange={props.onClick}
//         aria-label={position}
//       >
//         {position}
//       </option>
//     ))}
//   </optgroup>
//   <optgroup label="Submissions">
//     {submissions.map((submission) => (
//       <option
//         key={submission}
//         value={submission}
//         onChange={props.onClick}
//         aria-label={submission}
//       >
//         {submission}
//       </option>
//     ))}
//   </optgroup>
//   <optgroup label="actions">
//     {actions.map((action) => (
//       <option
//         key={action}
//         value={action}
//         onChange={props.onClick}
//         aria-label={action}
//       >
//         {action}
//       </option>
//     ))}
//   </optgroup>
// </select>
// </div>
