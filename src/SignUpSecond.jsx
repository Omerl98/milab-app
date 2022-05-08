import "./SignUpSecond.css";
import appleIcon from "./assets/apple.svg";
import googleIcon from "./assets/google.svg";
import fbIcon from "./assets/facebook.svg";
import mainLogo from "./assets/mainLogo.png";
import { Routes, Route, Link } from "react-router-dom";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

import { useEffect, useState } from "react";
import axios from "axios";

function SignUpSecond() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

  
    const postReq = async () => {
      await axios
        .get("http://localhost:8080/SignUpSecond", {
          params: {
            age: age,
            address:address
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
    <div className="container-signup-second">
      <div className="logo-wrapper">
        <img src={mainLogo} className="logo-img" />
      </div>
      <h3 className="signup-second-header">Discover your neighborhood</h3>
      <p className="signup-second-p">Please tell us about yourself, so we can recommend nearby activities!</p>
      <form className="signup-second-form" onsubmit="event.preventDefault();">
        <div className="signup-second-input-div">
        <label>How old are you?</label>
        <input
          type="text"
          onChange={(event) => setAge(event.target.value)}
          name="email"
        />
        </div>
        <div className="signup-second-input-div">
        <label>Your address</label>
        <input
          type="text"
          onChange={(event) => setAddress(event.target.value)}
          name="password"
        />
        </div>
        <div className="signup-second-input-div profile-pic-input">
            <AddCircleOutlineSharpIcon></AddCircleOutlineSharpIcon>
            <button>Add a profile pic</button>
        </div>

        <div className="next-button-div">
          <Link to={{ pathname: "/signupthird" }}>
            <button className="next-button" type="button" onClick={postReq}>
              Next
            </button>
          </Link>
        </div>
        
      </form>

    </div>
  );
}

export default SignUpSecond;
