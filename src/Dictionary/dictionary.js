import React, { useState, useEffect } from "react";
import WordCard from "./wordCard";
import "./style.css";

var Owlbot = require("owlbot-js");
var client = Owlbot("b0a10d81c766b1ba67dc49de959387281c70c686");

const Dictionary = () => {
  const [word, setWord] = useState({
    name: "hi",
    type: "",
    meaning: "",
  });
  const [definitions, setDefinitions] = useState([]);
  let tempWord = "";
  useEffect(() => {
    client.define(word.name).then((res) => {
      console.log(res.definitions);
      setDefinitions(res.definitions);
    });
    return () => {};
  }, [word.name]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setWord({ name: tempWord });
        }}
      >
        <input
          placeholder="Enter word"
          onChange={(e) => {
            tempWord = e.target.value;
          }}
        />
      </form>
      <h1>{word.name}</h1>
      {definitions.map((def) => {
        return (
          <WordCard type={def.type} meaning={def.definition} eg={def.example} />
        );
      })}
    </div>
  );
};

export default Dictionary;
