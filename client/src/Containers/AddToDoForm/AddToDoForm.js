import React from 'react';

class AddToDoForm extends React.Component {
    render() {
      return <div>
      <label for="title"><b>Title</b></label>
      <input type="text" placeholder="" name="title" required/>
      
      <label for="place"><b>Place</b></label>
      <input type="text" placeholder="" name="place" required/>
      
      <textarea rows="4" cols="50" name="notes" form="notesform">Notes</textarea>
      
      <button type="submit">SAVE</button>
        </div>

      
    }
  }

  export default AddToDoForm;