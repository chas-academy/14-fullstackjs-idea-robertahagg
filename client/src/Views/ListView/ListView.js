import React from "react";
import { Link } from "react-router-dom";
import listview from "../../Img/listview.jpg";
import Authentication from "../../Authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const ListView = props => {
  let todoArray = props.todosInput;

  function deleteTodo(todoId) {
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
    });
  }

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
            <Link to={`/todos/${todo._id}`}>{todo.title} </Link>

            <button
              className="BtnDone"
              onClick={event => {
                deleteTodo(todo._id);
              }}
            >
              <FontAwesomeIcon icon="check-circle" /> &nbsp; Done &nbsp;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
