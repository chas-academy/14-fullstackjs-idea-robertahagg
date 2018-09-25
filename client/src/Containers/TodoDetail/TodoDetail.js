import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Authentication from "../../Authentication";
import { withRouter } from "react-router-dom";

class TodoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: {
        title: "",
        place: "",
        notes: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("/todos/" + this.props.todoId, {
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

      .then(todo => {
        this.setState({ newTodo: todo });
      });
  }

  handleChange(event) {
    const updateTodo = { ...this.state.newTodo };

    if (event.target.name === "title") {
      updateTodo.title = event.target.value;
    } else if (event.target.name === "place") {
      updateTodo.place = event.target.value;
    } else if (event.target.name === "notes") {
      updateTodo.notes = event.target.value;
    }

    this.setState({ newTodo: updateTodo });
  }

  handleSubmit(e) {
    e.preventDefault();

    let title = this.state.newTodo.title;
    let place = this.state.newTodo.place;
    let notes = this.state.newTodo.notes;

    if (!title || !place || !notes) {
      return;
    }

    //this.props.onSubmit({ title: title, place: place, notes: notes });

    fetch("/todos/", {
      //Använd för update users
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        place: place,
        notes: notes
      })
    })
      .then(function(response) {
        if (!response.ok) {
          throw response.status;
        }

        this.setState({ title: "", place: "", notes: "" });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteTodo() {
    console.log("Deleting todo " + this.props.todoId);

    fetch("/todos/" + this.props.todoId, {
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

  updateTodo() {
    console.log("Updating todo " + this.props.todoId);

    fetch("/todos/" + this.props.todoId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.newTodo)
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
    return (
      <div>
        <form className="LoginForm">
          <label for="title">
            <b>
              <FontAwesomeIcon icon="bell" /> Title
            </b>
          </label>
          <input
            type="text"
            placeholder=""
            value={this.state.newTodo.title}
            onChange={this.handleChange}
            name="title"
            required
          />
          <br />

          <label for="place">
            <FontAwesomeIcon icon="home" />
            <b> Place</b>
          </label>
          <input
            type="text"
            placeholder=""
            value={this.state.newTodo.place}
            onChange={this.handleChange}
            name="place"
            required
          />

          <textarea
            className="NoteBox"
            placeholder="Add notes here.."
            rows="8"
            cols="50"
            value={this.state.newTodo.notes}
            onChange={this.handleChange}
            name="notes"
            form="notesform"
          />
        </form>

        <button
          onClick={event => {
            this.updateTodo();
          }}
          type="submit"
        >
          UPDATE
        </button>
        <button
          onClick={event => {
            this.deleteTodo();
          }}
          type="submit"
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default withRouter(TodoDetail);
