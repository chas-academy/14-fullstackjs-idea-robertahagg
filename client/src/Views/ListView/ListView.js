import React from "react";
import { Link } from "react-router-dom";
import listview from "../../Img/listview.jpg";
import Authentication from "../../Authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
import "./style.css";

const ListView = props => {
  let todoArray = props.todosInput;

  return (
    <div>
      <img className="BackGroundImg" src={listview} alt="handlyHeader" />
      <Link to="/addtodo">
        <button>Add a new to do</button>
      </Link>
      <Link to="/progress">
        <button>View progress</button>
      </Link>
      <Link to="/search">
        <button>
          <FontAwesomeIcon icon="search" /> Search
        </button>
      </Link>

      <ul className="TodoListArray">
        <FlipMove>
          {todoArray.map(todo => (
            <li key={todo._id}>
              <Link to={`/todos/${todo._id}`}>{todo.title} </Link>

              <button
                className="BtnDone"
                onClick={event => {
                  props.deleteTodoCallback(todo._id);
                }}
              >
                <FontAwesomeIcon icon="check-circle" /> &nbsp; Done &nbsp;
              </button>
            </li>
          ))}
        </FlipMove>
      </ul>
    </div>
  );
};

export default ListView;
