import React from "react";
import "./index.css";

const Tiles = (props) => {
  return (
    <div className="tiles">
      <p className="tiles__title">{props.title}</p>
      {props.children}
    </div>
  );
};

export default Tiles;
