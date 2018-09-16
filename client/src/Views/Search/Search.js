import React from "react";
import { SearchForm } from "../../Containers";
import imgsearch from "../../Img/imgsearch.jpg";
import "./style.css";

const Search = props => {
  let todoArray = props.todosInput;
  return (
    <div>
      <img className="BackGroundImg" src={imgsearch} alt="searchHeaderImg" />
      <SearchForm />
    </div>
  );
};

export default Search;
