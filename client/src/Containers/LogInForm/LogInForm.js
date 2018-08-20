import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class LogInForm extends React.Component {
    render() {
      return <div>
          
      <form className="LoginForm">
          <label for="username"><b><FontAwesomeIcon icon="user" /></b></label>
          <input type="text" placeholder="" name="username" required/><br />

    <label for="psw"><b><FontAwesomeIcon icon="envelope" /></b></label>
    <input type="password" placeholder="" name="password" required/>
    </form>
    <button type="submit">SIGN IN</button>
    <a className="RegisterAccountLink">register account</a>
      </div>
    }
    
  }

  export default LogInForm;