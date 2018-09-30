import React from "react";
import "./style.css";
import admindashboard from "../../Img/admindashboard.jpg";
import FlipMove from "react-flip-move";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontFamily: "'Open Sans Condensed', sans-serif"
  }
});

const AdminDashboard = props => {
  let userArray = props.userInput;
  const { classes } = props;

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
        <FlipMove>
          {userArray.map(user => (
            <li key={user._id}>
              <Link to={`/admin/users/${user._id}`}>
                {user.username}
                <Button
                  variant="fab"
                  mini
                  color="primary"
                  aria-label="Delete"
                  className={classes.button}
                >
                  <EditIcon fontSize="small" />
                  {/* <FontAwesomeIcon icon="check-circle" /> &nbsp; Done &nbsp; */}
                </Button>
              </Link>
            </li>
          ))}
        </FlipMove>
      </ul>
    </div>
  );
};

AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminDashboard);
