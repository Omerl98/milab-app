import "./signup.css";
import appleIcon from "./assets/apple.svg";
import googleIcon from "./assets/google.svg";
import fbIcon from "./assets/facebook.svg";
import mainLogo from "./assets/mainLogo.png";
import {useEffect, useState} from "react";
import axios from "axios";



function SignUp() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const postReq = async () => {
        console.log(password)
        console.log(email)
        await axios.post('http://localhost:8080/userSignUp', {
            email: email,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    return (
        <div className="container">
            <div className="logo-wrapper">
                <img src={mainLogo} className="logo-img"/>
            </div>

            <form className="login-form" onsubmit="event.preventDefault();">
                <label>First Name</label>
                <input type="text" onChange={event => setFirstName(event.target.value)} name="first-name"/>
                <label>Last Name</label>
                <input type="text" onChange={event => setLastName(event.target.value)} name="last-name"/>
                <label>Email Address</label>
                <input type="text" onChange={event => setEmail(event.target.value)} name="email"/>
                <label>Password</label>
                <input type="text" onChange={event => setPassword(event.target.value)} name="password"/>
                <button class="submit-button" type="button" onClick={postReq}>Join the hood</button>
            </form>
            <p className="line-text"><span>OR</span></p>
            <div className="social-nav">
                <img src={fbIcon} className="icon fb-icon" />
                <img src={googleIcon} className="icon google-icon" />
                <img src={appleIcon} className="icon apple-icon" />
            </div>
            <p className="sign-in-text">Already have an account? <a href="#">Sign in</a></p>
        </div>
    );
  }
  
  export default SignUp;