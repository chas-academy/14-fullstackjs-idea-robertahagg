import React from "react";
import { SearchForm } from "../../Containers";
import HandlySearch from "../../Img/HandlySearch.jpg";
import "./style.css";

const Search = props => {
  let resultsArray = props.todosInput;
  return (
    <div>
      <img className="BackGroundImg" src={HandlySearch} alt="searchHeaderImg" />
      <SearchForm />
    </div>
  );
};

export default Search;
