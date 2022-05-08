import "./signup.css";
import mainLogo from "./assets/mainLogo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import raiseHand from "./assets/raiseHand.png";

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

  let styleButton = {
    margin: "0px auto",
    display: "block",
  };

  return (
    <div className="container" id="SignUpFourth">
      <div className="">
        <img src={raiseHand} className="raiseHand" alt="raiseHand" />
      </div>
      <h2>All Done!</h2>

      <button style={styleButton} className="submit-button" type="button" onClick={postReq}>
        Start exploring
      </button>
    </div>
  );
}

export default SignUpFourth;
