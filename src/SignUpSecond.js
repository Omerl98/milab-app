import "./signup.css";
import mainLogo from "./assets/mainLogo.png";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function SignUpSecond() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [streetNum, setStreetNum] = useState("");

  const postReq = async () => {
    await axios
      .get("http://localhost:8080/SignUpSecond", {
        params: {
          firstName: firstName,
          lastName: lastName,
          age: age,
          city: city,
          street: street,
          street_num: streetNum,
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
    <div className="container">
      <div className="logo-wrapper">
        <img src={mainLogo} className="logo-img" />
      </div>
      <h2>Discover your neighborhood</h2>
      <div>
        <h3>Tell us about yourself,</h3>
        <h3>so we can recommend nearby activities.</h3>
      </div>

      <form className="login-form" onsubmit="event.preventDefault();">
        <label>First Name:</label>
        <input
          type="text"
          onChange={(event) => setFirstName(event.target.value)}
          name="first-name"
        />
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(event) => setLastName(event.target.value)}
          name="last-name"
        />
        <label>How old are you?</label>
        <input
          type="text"
          onChange={(event) => setAge(event.target.value)}
          name="age"
        />
        <label>Your address:</label>
        <input
          type="text"
          onChange={(event) => setCity(event.target.value)}
          name="city"
          placeholder="Your city"
        />
        <input
          type="text"
          onChange={(event) => setStreet(event.target.value)}
          name="street"
          placeholder="Your street"
        />
        <input
          type="text"
          onChange={(event) => setStreetNum(event.target.value)}
          name="street_num"
          placeholder="Your street number"
        />

        <Link className="submit-button" to={{ pathname: "/signupthird" }}>
          <button className="submit-button" type="button" onClick={postReq}>
            Next
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignUpSecond;
