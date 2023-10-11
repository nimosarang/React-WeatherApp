import React, { useState } from "react";

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
      <input
        type="text"
        placeholder="도시 이름을 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchBox;
