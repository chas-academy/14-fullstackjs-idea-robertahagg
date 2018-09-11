import React from "react";

const TodoSuggestionList = props => {
  const suggestions = props.results.map(todos => (
    <li key={todos.id}>{todos.title}</li>
  ));
  return <ul>{suggestions}</ul>;
};

export default TodoSuggestionList;
