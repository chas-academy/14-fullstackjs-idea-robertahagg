import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <label for="search">
          <b>Search</b>
        </label>
        <input type="text" placeholder="" />
      </div>
    );
  }
}

export default SearchForm;
