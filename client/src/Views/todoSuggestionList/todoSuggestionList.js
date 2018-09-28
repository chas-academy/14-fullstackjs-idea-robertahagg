import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import "./style.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontFamily: "'Open Sans Condensed', sans-serif"
  }
});

const TodoSuggestionList = props => {
  const { classes } = props;
  const suggestions = props.results.map(todos => (
    <FlipMove>
      <ul className="TodoSearchListArray">
        <li key={todos.id}>
          <Link to={`/todos/${todos._id}`}>{todos.title} </Link>

          <Button
            alignItems="flex-end"
            variant="fab"
            mini
            marginLeft="30"
            color="primary"
            aria-label="Delete"
            className={classes.button}
          >
            <DoneOutlineIcon fontSize="small" />
          </Button>
        </li>
      </ul>
    </FlipMove>
  ));
  return <ul>{suggestions}</ul>;
};

TodoSuggestionList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoSuggestionList);
