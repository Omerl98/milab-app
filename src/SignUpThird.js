import "./signup.css";
import mainLogo from "./assets/mainLogo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function SignUpThird() {
  let hobbies = [];
  const postReq = async () => {
    console.log(hobbies);
    await axios
      .get("http://localhost:8080/SignUpThird", {
        params: {
          hobbies: hobbies,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const clickedHobbyButton = (hobby, element) => {
    if (element.target.className === "hobby-button-before")
      element.target.className = "hobby-button-after";
    else element.target.className = "hobby-button-before";

    if (hobbies.includes(hobby)) {
      let filtered = hobbies.filter((value) => {
        return value !== hobby;
      });
      hobbies = filtered;
    } else hobbies.push(hobby);
  };
  let hobbiesOptions = [
    "Pet",
    "Sport",
    "Yoga",
    "Play date",
    "fostering",
    "Baking",
    "Family",
    "Walk",
    "Cosmetic",
    "Trip",
    "Art",
    "Dance",
    "Fashion",
    "Pilates",
    "Cooking",
    "Swim",
    "Movies",
    "Writing",
  ];

  return (
    <div className="container">
      <div className="logo-wrapper">
        <img src={mainLogo} className="logo-img" />
      </div>
      <h2>What do you like to do?</h2>

      <form className="hobbies-form" onSubmit="event.preventDefault();">
        {hobbiesOptions.map((hobby, index) => (
          <input
            key={index}
            className="hobby-button-before"
            type="button"
            onClick={(element) =>
              clickedHobbyButton(element.target.value, element)
            }
            value={hobby}
          />
        ))}
        <Link className="submit-button" to={{ pathname: "/signupfourth" }}>
          <button className="submit-button" type="button" onClick={postReq}>
            Done
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignUpThird;
