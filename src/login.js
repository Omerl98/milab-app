import "./login.css";
import appleIcon from "./assets/apple.svg";
import googleIcon from "./assets/google.svg";
import fbIcon from "./assets/facebook.svg";
import mainLogo from "./assets/mainLogo.png";
import {useEffect, useState} from "react";




function Login() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return (
        <div className="container">
            <div className="logo-wrapper">
                <img src={mainLogo} className="logo-img"/>
            </div>

            <form className="login-form">
                <label>First Name</label>
                <input type="text" onChange={event => setFirstName(event.target.value)} name="first-name"/>
                <label>Last Name</label>
                <input type="text" onChange={event => setLastName(event.target.value)} name="last-name"/>
                <label>Email Address</label>
                <input type="text" onChange={event => setEmail(event.target.value)} name="email"/>
                <label>Password</label>
                <input type="text" onChange={event => setPassword(event.target.value)} name="password"/>
                <button class="submit-button" type="submit">Join the hood</button>
            </form>
            <p className="line-text"><span>OR</span></p>
            <div className="social-nav">
                <img src={fbIcon} href="#" className="icon fb-icon" />
                <img src={googleIcon} className="icon google-icon" />
                <img src={appleIcon} className="icon apple-icon" />
            </div>
            <p className="sign-in-text">Already have an account? <a href="#">Sign in</a></p>
        </div>
    );
  }
  
  export default Login;