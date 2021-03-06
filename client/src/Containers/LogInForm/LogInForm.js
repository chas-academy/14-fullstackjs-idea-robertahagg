import React from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontFamily: "'Open Sans Condensed', sans-serif"
  },
  input: {
    display: "none"
  }
});

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  handleChange(event) {
    const userLoggedIn = { ...this.state.user };
    if (event.target.name === "email") {
      userLoggedIn.email = event.target.value;
    } else if (event.target.name === "password") {
      userLoggedIn.password = event.target.value;
    }
    this.setState({ user: userLoggedIn });
  }

  routeChange() {
    let path = `/list`;
    this.props.history.push(path);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;

    const { dispatch } = this.props;
    if (user.email && user.password) {
      console.log("User has sucessfully been logged in..");

      //dispatch(login(user));
    }

    const _this = this;

    fetch("/me/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(function(response) {
        if (!response.ok) {
          throw response.status;
        }

        _this.routeChange();
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { user, submitted } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <form className="LoginForm">
          <label for="email">
            <b>
              <FontAwesomeIcon icon="envelope" />
            </b>
          </label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder=""
            name="email"
            required
          />
          <br />

          <label for="psw">
            <b>
              <FontAwesomeIcon icon="unlock" />
            </b>
          </label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder=""
            name="password"
            required
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleSubmit}
          type="submit"
        >
          SIGN IN
        </Button>
        <a className="RegisterAccountLink">register account</a>
      </div>
    );
  }
}

LogInForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogInForm);
