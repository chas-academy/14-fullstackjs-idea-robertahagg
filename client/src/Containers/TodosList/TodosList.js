import React from "react";
import { ListView } from "../../Views/";
import Authentication from "../../Authentication";
import { withRouter } from "react-router-dom";

class TodosList extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch("/todos", {
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

      .then(todoArray => {
        this.setState({ todos: todoArray });
      });
  }

  render() {
    let leTodos = this.state.todos;

    return <ListView todosInput={leTodos} />;
  }
}

export default withRouter(TodosList);
