import React from "react";
import { RegisterForm } from "../../containers";
import loginImg from "../../Img/loginImg.jpg";
import "./style.css";

const Register = () => {
  return (
    <div>
      <img className="BackGroundImg" src={loginImg} alt="handlyHeader" />
      <RegisterForm />
    </div>
  );
};

export default Register;
