import React from "react";
import "./cardStyle.css";

const cardComponent = ({ name, note, link = "#", auxNote = "" }) => {
  return (
    <div class="container">
      <img
        src="data:image/jpeg;base64,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"
        alt="img"
      />
      <div class="content">
        <div>
          <a href={link}>{name}</a>
        </div>
        <p>{note}</p>
        <i>{auxNote}</i>
      </div>
    </div>
  );
};

export default cardComponent;
