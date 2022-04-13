import "./signup.css";
import mainLogo from "./assets/mainLogo.png";
import { useEffect, useState } from "react";
import axios from "axios";

function SignUpSecond() {
  const [hobbies, setHobbies] = useState(["sport", "matcot"]);
  

  const postReq = async () => {
    await axios
      .get("http://localhost:8080/SignUpThird", {
        params: {
          hobbies: hobbies
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
      <h2>What do you like to do?</h2>

      <form className="login-form" onsubmit="event.preventDefault();">
        <label>First Name:</label>
        <input
          type="checkbox"
          onChange={(event) => setHobbies(event.target.value)}
          name="first-name" placeholder="asdwsd"
        />
       
        <button className="submit-button" type="button" onClick={postReq}>
          Done
        </button>
      </form>
    </div>
  );
}

export default SignUpSecond;
