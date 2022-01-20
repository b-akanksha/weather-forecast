import React from "react";
import { useDispatch } from "react-redux";
import { getWeatherThunk } from "../weatherApp/redux/thunks";
import "./index.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = React.useState(null);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      return;
    }
    setSearchText(e.target.value);
  };

  const handleSearch = () => dispatch(getWeatherThunk(searchText));

  return (
    <div className="input-container">
      <input
        type="search"
        placeholder="London, Paris, New York ..."
        onKeyDown={(e) => handleChange(e)}
        className="input-field"
      />
    </div>
  );
};

export default SearchBar;
