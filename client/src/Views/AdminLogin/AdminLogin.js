import React from "react";
import { LogInForm } from "../../Containers";
import loginImg from "../../Img/loginImg.jpg";

const AdminLogin = () => {
  return (
    <div>
      <img className="BackGroundImg" src={loginImg} alt="handlyHeader" />
      <LogInForm />
    </div>
  );
};

export default AdminLogin;
