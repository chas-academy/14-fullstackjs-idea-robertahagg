import React from "react";
import { RegisterForm } from "../../Containers";
import handlymain from "../../Img/handlymain.jpg";
import "./style.css";

const Register = () => {
  return (
    <div>
      <img className="BackGroundImg" src={handlymain} alt="handlyHeader" />
      <RegisterForm />
    </div>
  );
};

export default Register;
