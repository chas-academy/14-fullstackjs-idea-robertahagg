import React from "react";
import { Link } from "react-router-dom";
import cityNewYork from "../../Img/cityNewYork.jpg";

const ListView = props => {
  let todoArray = props.todosInput;

  return (
    <div>
      <img className="BackGroundImg" src={cityNewYork} alt="handlyHeader" />
      <Link to="/addtodo">
        <button>Add a new to do</button>
      </Link>
      <Link to="/progress">
        <button>View progress</button>
      </Link>
      <Link to="/search">
        <button>Search</button>
      </Link>

      <ul>
        {todoArray.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
