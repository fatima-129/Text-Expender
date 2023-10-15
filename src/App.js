import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TextExpender>
        The reasons for space travel are countless. Population growth is a major
        problem that could be helped if space travel led to discovering
        potentially viable living environments other than Earth. Currently, the
        population is doubling every 35 years and may speed up with increased
        technology (1).
      </TextExpender>
      <TextExpender
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="collapse text"
        buttonColor="#ff6622"
      >
        Discovering the origins of the universe is a major reason, as moving
        through space means moving back in time. Eventually, scientists hope to
        be able to travel back to when the Big Bang occurred, answering
        questions that are not yet explained by current theories.
      </TextExpender>
      <TextExpender expanded={true} className="box">
        Details of micro gravity during the orbital maneuver and the interaction
        of the crew during its mission can add volumes to this report alone
      </TextExpender>
    </div>
  );
}

function TextExpender({
  collapsedNumWords = 12,
  expandButtonText = "Show more",
  collapseButtonText = "show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginleft: "6px",
    color: buttonColor
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
