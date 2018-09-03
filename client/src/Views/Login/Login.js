import React from 'react';
import { LogInForm } from '../../Containers';
import loginImg from '../../Img/loginImg.jpg';
import './style.css';

const Login = () => {
    return <div>
         <img className="BackGroundImg" src={loginImg} alt="handlyHeader"/>
    <LogInForm />
    </div>
}


export default Login;

