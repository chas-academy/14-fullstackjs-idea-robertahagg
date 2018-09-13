import React from "react";
import "./style.css";
import admindashboard from "../../Img/admindashboard.jpg";

const AdminDashboard = () => {
  return (
    <div>
      <img
        className="BackGroundImg"
        src={admindashboard}
        alt="adminHeaderImg"
      />
    </div>
  );
};

export default AdminDashboard;
