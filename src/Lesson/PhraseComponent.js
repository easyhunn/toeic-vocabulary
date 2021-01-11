import React from "react";
import Card from "../Card/card";
import PhaseList from "../Words/phaseList.js";

const containerStyle = {
  width: "100%",
};
const LessonComponent = () => {
  return (
    <div style={containerStyle}>
      {PhaseList.map((phase) => {
        return (
          <Card
            name={phase.word}
            note={phase.meaning}
            auxNote={"eg: " + phase.eg}
          />
        );
      })}
    </div>
  );
};

export default LessonComponent;
