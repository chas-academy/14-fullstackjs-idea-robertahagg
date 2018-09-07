import React from "react";
import { AddToDoForm } from "../../containers";
import city from "../../Img/city.jpg";
import "./style.css";

const AddToDo = () => {
  return (
    <div>
      <img className="BackGroundImg" src={city} alt="cityOfNewYorkHeaderImg" />
      <AddToDoForm />
    </div>
  );
};

export default AddToDo;
