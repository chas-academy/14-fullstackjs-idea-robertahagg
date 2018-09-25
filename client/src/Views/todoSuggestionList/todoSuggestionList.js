import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";
import "./style.css";

const TodoSuggestionList = props => {
  const suggestions = props.results.map(todos => (
    <FlipMove>
      <ul className="TodoSearchListArray">
        <li key={todos.id}>
          <Link to={`/todos/${todos._id}`}>{todos.title} </Link>

          <b className="BtnDone">
            <FontAwesomeIcon icon="check-circle" /> &nbsp; Done &nbsp;
          </b>
        </li>
      </ul>
    </FlipMove>
  ));
  return <ul>{suggestions}</ul>;
};

export default TodoSuggestionList;
