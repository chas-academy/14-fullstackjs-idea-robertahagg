import React from "react";
import { SearchForm } from "../../containers";
import imgsearch from "../../Img/imgsearch.jpg";
import "./style.css";

const Search = () => {
  return (
    <div>
      <img className="BackGroundImg" src={imgsearch} alt="searchHeaderImg" />
      <SearchForm />
    </div>
  );
};

export default Search;
