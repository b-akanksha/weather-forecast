import React from "react";
import { useSelector } from "react-redux";
import ErrorImage from "../../assets/error.gif";
import SearchBar from "../searchBar";
import "./index.css";

const Error = () => {
  const { error } = useSelector((state) => state.weather);
  return (
    <div className="error">
      <div className="error-container">
        <img src={ErrorImage} alt="Error" className="error-img" />
        <p>{error?.message}</p>
        <div className="search">
          <p>How about searching again? </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Error;
