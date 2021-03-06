import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Authentication from "../../Authentication";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontFamily: "'Open Sans Condensed', sans-serif"
  }
});

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("/users/" + this.props.userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          if (response.status == 401) {
            Authentication.logOut();
            this.props.history.push("/login");
          }
          throw response.status;
        }

        return response.json();
      })

      .then(user => {
        this.setState({ user: user });
      });
  }

  handleChange(event) {
    const updateUser = { ...this.state.user };

    if (event.target.name === "username") {
      updateUser.username = event.target.value;
    } else if (event.target.name === "email") {
      updateUser.email = event.target.value;
    }

    this.setState({ user: updateUser });
  }

  handleSubmit(event) {
    event.preventDefault();

    let username = this.state.user.username;
    let email = this.state.user.email;

    if (!username || !email) {
      return;
    }

    fetch("/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email
      })
    })
      .then(function(response) {
        if (!response.ok) {
          throw response.status;
        }

        this.setState({ username: "", email: "" });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  deleteUser() {
    console.log("Deleting user " + this.props.userId);

    fetch("/users/" + this.props.userId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        if (response.status == 401) {
          Authentication.logOut();
          this.props.history.push("/login");
        }
        throw response.status;
      }
    });
  }

  updateUser() {
    console.log("Updating user " + this.props.userId);

    fetch("/users/" + this.props.userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user)
    }).then(response => {
      if (!response.ok) {
        if (response.status == 401) {
          Authentication.logOut();
          this.props.history.push("/login");
        }
        throw response.status;
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="LoginFormContainer">
        <form className="LoginForm">
          <label for="username">
            <b>
              <FontAwesomeIcon icon="user" />
            </b>
          </label>
          <input
            value={this.state.user.username}
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
            value={this.state.user.email}
            onChange={this.handleChange}
            type="text"
            placeholder=""
            name="email"
            required
          />
          <br />
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={event => {
            this.updateUser();
          }}
          type="submit"
        >
          UPDATE
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={event => {
            this.deleteUser();
          }}
          type="submit"
        >
          DELETE
        </Button>
      </div>
    );
  }
}

UserDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserDetail);
