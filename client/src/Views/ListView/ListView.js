import React from "react";
import { Link } from "react-router-dom";
import cityNewYork from "../../Img/cityNewYork.jpg";

const ListView = () => {
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
    </div>
  );
};

export default ListView;
