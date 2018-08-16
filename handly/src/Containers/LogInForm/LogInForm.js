import React from 'react';

class LogInForm extends React.Component {
    render() {
      return <div>
          
      
          <label for="username"><b>Username</b></label>
    <input type="text" placeholder="" name="username" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="" name="password" required/>

    <button type="submit">SIGN IN</button>
      </div>
    }
    
  }

  export default LogInForm;