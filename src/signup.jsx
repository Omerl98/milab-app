import "./signup.css";
import appleIcon from "./assets/apple.svg";
import googleIcon from "./assets/google.svg";
import fbIcon from "./assets/facebook.svg";
import mainLogo from "./assets/mainLogo.png";
import { Routes, Route, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postReq = async () => {
    console.log(password);
    console.log(email);
    await axios
      .get("http://localhost:8080/userSignUp", {
        params: {
          email: email,
          password: password,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container-signup">
      <div className="logo-wrapper">
        <img src={mainLogo} className="logo-img" />
      </div>
      <h3 className="signup-header">Sign Up</h3>
      <form className="login-form" onsubmit="event.preventDefault();">
        <div className="signup-input-div">
        <label>First Name</label>
          <input
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
            name="first-name"
          />
        </div>
        <div className="signup-input-div">
        <label>Last Name</label>
        <input
          type="text"
          onChange={(event) => setLastName(event.target.value)}
          name="last-name"
        />
        </div>
        <div className="signup-input-div">
        <label>Email Address</label>
        <input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          name="email"
        />
        </div>
        <div className="signup-input-div">
        <label>Password</label>
        <input
          type="text"
          onChange={(event) => setPassword(event.target.value)}
          name="password"
        />
        </div>

        <div className="signup-button-div">
          <Link to={{ pathname: "/signupsecond" }}>
            <button className="signup-button" type="button" onClick={postReq}>
              Join the hood
            </button>
          </Link>
        </div>
        
      </form>
      <p className="line-text">
        <span>OR</span>
      </p>
      <div className="social-nav">
        <img src={fbIcon} className="icon-signup fb-icon" />
        <img src={googleIcon} className="icon-signup google-icon" />
        <img src={appleIcon} className="icon-signup apple-icon" />
      </div>
      <p className="sign-in-text">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </div>
  );
}

export default SignUp;
