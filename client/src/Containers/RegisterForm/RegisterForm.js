import React from "react";
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

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        password: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newUser = { ...this.state.user };

    if (event.target.name === "username") {
      newUser.username = event.target.value;
    } else if (event.target.name === "email") {
      newUser.email = event.target.value;
    } else if (event.target.name === "password") {
      newUser.password = event.target.value;
    }

    this.setState({ user: newUser });
  }

  handleSubmit(event) {
    event.preventDefault();

    let username = this.state.user.username;
    let email = this.state.user.email;
    let password = this.state.user.password;

    if (!username || !email || !password) {
      return;
    }

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
      .then(function(response) {
        if (!response.ok) {
          throw response.status;
        }

        this.setState({ username: "", email: "", password: "" });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className="LoginForm">
          <label for="username">
            <b>
              <FontAwesomeIcon icon="user" />
            </b>
          </label>
          <input
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            placeholder=""
            name="username"
            required
          />
          <br />

          <label for="email">
            <b>
              <FontAwesomeIcon icon="envelope" />
            </b>
          </label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
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
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
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
          SIGN UP
        </Button>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
