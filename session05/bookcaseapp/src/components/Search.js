import React from "react";
// import Search from "./Search.Module.css";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label>Search:</label>
          <input
            type="text"
            name="search"
            value={props.keyword}
            onChange={(e) => props.setKeyword(e.target.value)}
          ></input>
          <input type="submit" value="Submit" />
        </p>
        <p style={{ color: "black" }}>
          <em>{props.keyword && "Keywords Typed: " + props.keyword}</em>
        </p>
      </form>
    </div>
  );
};
export default Search;
