import React from "react";

class ListView extends React.Component {
  render() {
    let todoList = this.props.data.map(todo => {
      return <div>{todo.title}</div>;
    });
    return <div>{todoList}</div>;
  }
}

export default ListView;
