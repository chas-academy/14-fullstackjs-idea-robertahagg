import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddToDoForm extends React.Component {
    render() {
      return <div>
         <form className="LoginForm">
      <label for="title"><b><FontAwesomeIcon icon="bell" /> Title</b></label>
      <input type="text" placeholder="" name="title" required/><br />
      
      <label for="place"><FontAwesomeIcon icon="home" /><b> Place</b></label>
      <input type="text" placeholder="" name="place" required/>
      
      <textarea className="NoteBox" rows="8" cols="50" name="notes" form="notesform">Notes</textarea>
      </form>
      <button type="submit">SAVE</button>
        </div>

      
    }
  }

  export default AddToDoForm;