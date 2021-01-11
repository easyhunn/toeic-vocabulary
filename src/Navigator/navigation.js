import React from "react";
import "./style.css";

const linkStyle = {
  padding: "20px",
  border: "1px solid gray",
  backgroundColor: "lightgray",
  width: "100%",
  height: "100%",
};

const Navigation = () => {
  return (
    <div className="container">
      <nav>
        <a style={linkStyle} href="./#">
          VOCABULARY
        </a>
        <a style={linkStyle} href="./RemindWordComponent">
          REMIND WORDS
        </a>
      </nav>
    </div>
  );
};
export default Navigation;
