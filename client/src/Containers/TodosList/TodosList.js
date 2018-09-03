import React from "react";
import { ListView } from "../../Views";

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
    let todos = this.state.todos;

    return (
      /*  <ListView/> */

      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo._id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodosList;
