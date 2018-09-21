import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Authentication from "../../Authentication";
import { withRouter } from "react-router-dom";

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

  render() {
    return (
      <div>
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
        <button onClick={this.handleSubmit} type="submit">
          UPDATE
        </button>
        <button onClick={this.handleSubmit} type="submit">
          DELETE
        </button>
      </div>
    );
  }
}

export default withRouter(UserDetail);
