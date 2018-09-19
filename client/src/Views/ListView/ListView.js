import React from "react";
import { Link } from "react-router-dom";
import listview from "../../Img/listview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        {todoArray.map(todo => (
          <li key={todo._id}>
            <Link to={`/todos/${todo._id}`}>
              {todo.title}{" "}
              <b className="BtnDone">
                <FontAwesomeIcon icon="check-circle" /> &nbsp; Done &nbsp;
              </b>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
