import React from "react";

class ListView extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    debugger;
    fetch("/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(results => {
        return results.json();
      })

      .then(data => {
        let todos = data.results.map(todo => {
          return <div key={todo.results} />;
        });
        this.setState({ todos: todos });
      });
  }

  render() {
    debugger;
    return (
      <div>
        <ul>
          <li key={this.state.todo.title} />
          )}
        </ul>
      </div>
    );
  }
}

export default ListView;
