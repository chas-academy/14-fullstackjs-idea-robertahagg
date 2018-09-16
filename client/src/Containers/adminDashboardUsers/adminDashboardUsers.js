import React from "react";
import { AdminDashboard } from "../../views";

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
export default AdminDashboardUsers;
