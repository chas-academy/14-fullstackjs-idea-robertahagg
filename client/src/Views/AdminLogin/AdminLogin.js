import React from "react";
import { LogInForm } from "../../Containers";
import handlymain from "../../Img/handlymain.jpg";

const AdminLogin = () => {
  return (
    <div>
      <img className="BackGroundImg" src={handlymain} alt="handlyHeader" />
      <LogInForm />
    </div>
  );
};

export default AdminLogin;
