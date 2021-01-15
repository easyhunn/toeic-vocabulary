import React from "react";

const WordCard = ({ word, eg, meaning, type }) => {
  return (
    <div className="wordCard">
      <h1>{word}</h1>
      <p>type: {type}</p>
      <p>Meaning: {meaning}</p>
      <i>eg: {eg}</i>
    </div>
  );
};

export default WordCard;
