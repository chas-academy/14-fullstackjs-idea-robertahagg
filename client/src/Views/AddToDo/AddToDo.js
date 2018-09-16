import React from "react";
import { AddToDoForm } from "../../Containers";
import addtodo from "../../Img/addtodo.jpg";
import "./style.css";

const AddToDo = () => {
  return (
    <div>
      <img className="BackGroundImg" src={addtodo} alt="addtodoImg" />
      <AddToDoForm />
    </div>
  );
};

export default AddToDo;
