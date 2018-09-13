import React from "react";
import "./style.css";
import admindashboard from "../../Img/admindashboard.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashboard = props => {
  let userArray = props.userInput;

  if (!userArray) {
    return <div />;
  }

  return (
    <div>
      <img
        className="BackGroundImg"
        src={admindashboard}
        alt="adminHeaderImg"
      />
      <p> List of active users </p>
      <ul className="UserListArray">
        {userArray.map(user => (
          <li key={user._id}>
            <FontAwesomeIcon className="UserIcon" icon="edit" />
            {user.username}
            <b className="BtnDone">
              {/* <FontAwesomeIcon icon="check-circle" /> &nbsp; Done &nbsp; */}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
