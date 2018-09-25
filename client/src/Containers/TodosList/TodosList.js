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

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    this.refreshTodoList();
  }

  refreshTodoList() {
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

  deleteTodo(todoId) {
    console.log("Deleting todo " + todoId);

    fetch("/todos/" + todoId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        if (response.status == 401) {
          Authentication.logOut();
          this.props.history.push("/login");
        }
        throw response.status;
      }

      this.refreshTodoList();
    });
  }

  render() {
    let leTodos = this.state.todos;

    return (
      <ListView todosInput={leTodos} deleteTodoCallback={this.deleteTodo} />
    );
  }
}

export default withRouter(TodosList);
