import React from 'react';

class RegisterForm extends React.Component {
    render() {
      return <div>
          
      
<label for="username"><b>Username</b></label>
<input type="text" placeholder="" name="username" required/>

<label for="email"><b>Email</b></label>
<input type="text" placeholder="" name="email" required/>

<label for="psw"><b>Password</b></label>
<input type="password" placeholder="" name="password" required/>

<button type="submit">CREATE ACCOUNT</button>
  </div>
    }
  }

  export default RegisterForm;