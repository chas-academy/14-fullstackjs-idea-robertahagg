import React from "react";
import { UserDetail } from "../../Containers";
import admindashboard from "../../Img/admindashboard.jpg";

const UserDetailView = () => {
  return (
    <div>
      <img className="BackGroundImg" src={admindashboard} alt="handlyHeader" />
      <UserDetail />
    </div>
  );
};

export default UserDetailView;
