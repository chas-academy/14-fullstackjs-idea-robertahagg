import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Authentication from "../../Authentication";
import "./style.css";

const TodoSuggestionList = props => {
  const suggestions = props.results.map(todos => (
    <ul className="TodoSearchListArray">
      <li key={todos.id}>
        <Link to={`/todos/${todos._id}`}>{todos.title} </Link>

        <b className="BtnDone">
          <FontAwesomeIcon icon="check-circle" /> &nbsp; Done &nbsp;
        </b>
      </li>
    </ul>
  ));
  return <ul>{suggestions}</ul>;
};

export default TodoSuggestionList;
