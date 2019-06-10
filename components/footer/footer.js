import React from "react";
import "../footer.css";

const footer = props => (
  <div className="footer">
    <div>The Office</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      Score: {props.score} <span className="score">|</span> High Score:{" "}
      {props.highScore}
    </div>
  </div>
);

export default footer;
