import React from "react";
import Card from "../Card/card";
import "./style.css";

const containerStyle = {
  width: "100%",
};
const Main = () => {
  return (
    <div style={containerStyle}>
      <Card name="Lesson 1:" note="Phrase: 1" link="./Phrase" />
      <Card name="Lesson 2" note="Vocabulary: 1" link="./" />
      <Card name="Lesson 3" note="Idioms: 1" link="./Idiom" />
    </div>
  );
};

export default Main;
