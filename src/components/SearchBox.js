import React, { useState } from "react";
import { FaRocketchat, FaSearchengin } from "react-icons/fa6";

const SearchBox = ({ city, handleSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      className="search-box"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(value);
      }}
    >
      <FaRocketchat />
      <input
        type="text"
        placeholder="Which City ?"
        value={value}
        onChange={handleChange}
      ></input>
      <button type="submit">
        <FaSearchengin />
      </button>
    </form>
  );
};

export default SearchBox;
