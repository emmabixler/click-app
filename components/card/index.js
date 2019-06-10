import React from "react";
import card from "./card.css";

const card = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img
        alt={props.image.replace(".jpg", "")}
        src={require("../../images/" + props.image)}
      />
    </div>
  </div>
);

export default card;
