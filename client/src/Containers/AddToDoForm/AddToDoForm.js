import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Authentication from "../../Authentication";
import { withRouter } from "react-router-dom";

class AddToDoForm extends React.Component {
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

  handleChange(event) {
    const addNewTodo = { ...this.state.newTodo };

    if (event.target.name === "title") {
      addNewTodo.title = event.target.value;
    } else if (event.target.name === "place") {
      addNewTodo.place = event.target.value;
    } else if (event.target.name === "notes") {
      addNewTodo.notes = event.target.value;
    }

    this.setState({ newTodo: addNewTodo });
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

    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: title, place: place, notes: notes })
    })
      .then(function(response) {
        if (!response.ok) {
          if (response.status == 401) {
            Authentication.logOut();
            this.props.history.push("/login");
          }
          throw response.status;
        }

        this.setState({ title: "", place: "", notes: "" });
      })
      .catch(function(error) {
        console.log(error);
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
            value={this.state.title}
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
            value={this.state.place}
            onChange={this.handleChange}
            name="place"
            required
          />

          <textarea
            className="NoteBox"
            placeholder="Add notes here.."
            rows="8"
            cols="50"
            value={this.state.notes}
            onChange={this.handleChange}
            name="notes"
            form="notesform"
          />
        </form>

        <button onClick={this.handleSubmit} type="submit">
          ADD
        </button>
        <button type="cancel">CANCEL</button>
      </div>
    );
  }
}

export default withRouter(AddToDoForm);
