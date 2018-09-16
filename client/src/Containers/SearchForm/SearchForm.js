import React from "react";
import axios from "axios";
import { TodoSuggestionList } from "../../views";

const { API_KEY } = process.env;
const API_URL = "/todos";

class SearchForm extends React.Component {
  state = {
    query: "",
    results: []
  };

  getTodoDataInfo = () => {
    axios
      .get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data // todos returns an object named data,
          // as does axios. So... data.data
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getTodoDataInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        <TodoSuggestionList results={this.state.results} />
      </form>
    );
  }
}

export default SearchForm;
