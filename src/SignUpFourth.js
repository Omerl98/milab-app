import "./signup.css";
import mainLogo from "./assets/mainLogo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import blueMan from "./assets/blueMan.png";
import blueManFinishSign from "./assets/blueManFinishSign.png";


function SignUpFourth() {
  const postReq = async () => {
    await axios
      .get("http://localhost:8080/SignUpThird", {
        // params: {
        //   hobbies: hobbies,
        // },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="container" id="SignUpFourth">
      <div className="logo-wrapper">
        <img src={blueManFinishSign} className="blueManFinishSign" />
        <img src={blueMan} className="blueMan" />
      </div>
      <h2 id="Wonderful">Wonderful!</h2>

      <form className="hobbies-form" onSubmit="event.preventDefault();">
        <button className="submit-button" type="button" onClick={postReq}>
        Start exploring
        </button>
      </form>
    </div>
  );
}

export default SignUpFourth;
