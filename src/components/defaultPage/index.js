import React from "react";
import Typing from "../../assets/typing.gif";
import SearchBar from "../searchBar";
import "./index.css";

const DefaultPage = () => {
  return (
    <div className="page">
      <div className="page-container">
        <img src={Typing} alt="Weather" className="page-img" />
        <div className="page-search">
          <p>Hey! Let's start with a search :D </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
