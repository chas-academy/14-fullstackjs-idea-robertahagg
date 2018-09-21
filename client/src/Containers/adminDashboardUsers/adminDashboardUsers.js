import React from "react";
import { AdminDashboard } from "../../Views";
import Authentication from "../../Authentication";
import { withRouter } from "react-router-dom";

class AdminDashboardUsers extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("/users", {
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

      .then(userArray => {
        this.setState({ users: userArray });
      });
  }

  render() {
    let leUsers = this.state.users;

    return <AdminDashboard userInput={leUsers} />;
  }
}
export default withRouter(AdminDashboardUsers);
