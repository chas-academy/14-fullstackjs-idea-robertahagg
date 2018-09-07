import React from "react";
import { ListView } from "../../views/";

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

export default TodosList;
