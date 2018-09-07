import React from "react";
import { LogInForm } from "../../containers";
import loginImg from "../../Img/loginImg.jpg";
import "./style.css";

const Login = () => {
  return (
    <div>
      <img className="BackGroundImg" src={loginImg} alt="handlyHeader" />
      <LogInForm />
    </div>
  );
};

export default Login;
