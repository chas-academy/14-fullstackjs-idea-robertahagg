import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class RegisterForm extends React.Component {
    render() {
      return <div>
          
          <form className="LoginForm">
<label for="username"><b><FontAwesomeIcon icon="user" /></b></label>
<input type="text" placeholder="" name="username" required/><br />

<label for="email"><b><FontAwesomeIcon icon="envelope" /></b></label>
<input type="text" placeholder="" name="email" required/><br />

<label for="psw"><b><FontAwesomeIcon icon="unlock" /></b></label>
<input type="password" placeholder="" name="password" required/>
</form>
<button type="submit">SIGN UP</button>
  </div>
    }
  }

  export default RegisterForm;