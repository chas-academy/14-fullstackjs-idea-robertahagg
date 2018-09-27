import React from "react";
import { Link } from "react-router-dom";
import listview from "../../Img/listview.jpg";
import FlipMove from "react-flip-move";
import "./style.css";

import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontFamily: "'Open Sans Condensed', sans-serif"
  },

  iconSmall: {
    fontSize: 15
  }
});

const ListView = props => {
  let todoArray = props.todosInput;

  const { classes } = props;

  return (
    <div>
      <img className="BackGroundImg" src={listview} alt="handlyHeader" />
      <Link to="/addtodo">
        <Button variant="contained" color="primary" className={classes.button}>
          Add Todo
        </Button>
      </Link>
      <Link to="/progress">
        <Button variant="contained" color="primary" className={classes.button}>
          Progress
        </Button>
      </Link>
      <Link to="/search">
        <Button variant="contained" color="primary" className={classes.button}>
          Search
        </Button>
      </Link>

      <ul className="TodoListArray">
        <FlipMove>
          {todoArray.map(todo => (
            <li key={todo._id}>
              <Link to={`/todos/${todo._id}`}>{todo.title} </Link>

              <Button
                variant="fab"
                color="primary"
                aria-label="Delete"
                className={classes.button}
                onClick={event => {
                  props.deleteTodoCallback(todo._id);
                }}
              >
                <DoneOutlineIcon />
              </Button>
            </li>
          ))}
        </FlipMove>
      </ul>
    </div>
  );
};

ListView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListView);
