import React from "react";
import { LogInForm } from "../../containers";
import handlymain from "../../Img/handlymain.jpg";
import "./style.css";

const Login = () => {
  return (
    <div>
      <img className="BackGroundImg" src={handlymain} alt="handlyHeader" />
      <LogInForm />
    </div>
  );
};

export default Login;
