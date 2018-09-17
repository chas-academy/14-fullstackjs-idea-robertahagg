import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const TodoSuggestionList = props => {
  const suggestions = props.results.map(todos => (
    <ul className="TodoSearchListArray">
      <li key={todos.id}>
        {todos.title}{" "}
        <b className="BtnDone">
          <FontAwesomeIcon icon="check-circle" /> &nbsp; Done &nbsp;
        </b>
      </li>
    </ul>
  ));
  return <ul>{suggestions}</ul>;
};

export default TodoSuggestionList;
