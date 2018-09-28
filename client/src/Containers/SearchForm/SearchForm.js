import React from "react";
import { TodoSuggestionList } from "../../Views";
import Authentication from "../../Authentication";
import { withRouter } from "react-router-dom";

class SearchForm extends React.Component {
  state = {
    query: "",
    results: []
  };

  getTodoDataInfo = searchString => {
    fetch("/todos?search=" + searchString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          if (response.status == 401) {
            Authentication.logOut();
            this.props.history.push("/login");
          }
          throw response.status;
        }

        return response.json();
      })

      .then(resultsArray => {
        this.setState({ results: resultsArray });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.getTodoDataInfo(this.state.query);
        }
      }
    );
  };

  render() {
    return (
      <form className="MainsearchForm">
        <input
          className="Search Todos"
          placeholder="Find todos..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        <TodoSuggestionList results={this.state.results} />
      </form>
    );
  }
}

export default withRouter(SearchForm);
