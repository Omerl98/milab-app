import "./newActivity.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function NewActivity() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("all");
  const [date, setDate] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endsAt, setEndsAt] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [streetNum, setStreetNum] = useState("");
  const [participantsMin, setParticipantsMin] = useState("0");
  const [participantsMax, setParticipantsMax] = useState("10");
  const [participantsGender, setParticipantsGender] = useState("all");
  const [activityDesc, setAtivityDesc] = useState("");

  let activityType = [
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

  const postReq = async () => {
    await axios
      .get("http://localhost:8080/createactivity", {
        params: {
          title: title,
          type: type,
          date: date,
          startAt: startAt,
          endsAt: endsAt,
          city: city,
          street: street,
          street_num: streetNum,
          participantsMin: participantsMin,
          participantsMax: participantsMax,
          participantsGender: participantsGender,
          activityDesc: activityDesc,
        },
      })
      .then(function (response) {
        console.log(response);
        console.log("created activity");
      })
      .catch(function (error) {
        console.log(error);
        console.log("ERROR with creating activity");
      });
  };
  return (
    <div className="container">
      <h2>Create An activity</h2>

      <form className="new_Activity_form" onsubmit="event.preventDefault();">
        <label>Title:</label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          name="title"
        />

        <label>Activity Type:</label>
        <select onChange={(event) => setType(event.target.value)}>
          {activityType.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </select>

        <label>Date:</label>
        <input
          type="date"
          onChange={(event) => setDate(event.target.value)}
          name="date"
        />

        <label>Start At:</label>
        <input
          type="time"
          onChange={(event) => setStartAt(event.target.value)}
          name="startAt"
        />

        <label>Ends At:</label>
        <input
          type="time"
          onChange={(event) => setEndsAt(event.target.value)}
          name="endsAt"
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

        <label>Participants min:</label>
        <select onChange={(event) => setParticipantsMin(event.target.value)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
            return (
              <option key={num * 10} value={num}>
                {num}
                {num === 10 ? "+" : ""}
              </option>
            );
          })}
        </select>
        <label>Participants max:</label>
        <select onChange={(event) => setParticipantsMax(event.target.value)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
            return (
              <option key={num - 10} value={num}>
                {num}
                {num === 10 ? "+" : ""}
              </option>
            );
          })}
        </select>
        <label>Participants Gender:</label>
        <select onChange={(event) => setParticipantsGender(event.target.value)}>
          <option value={"all"}>all</option>
          <option value={"men"}>Men</option>
          <option value={"women"}>Women</option>
        </select>

        <label>Activity description:</label>
        <textarea
          name="activityDesc"
          rows="4"
          cols="50"
          onChange={(event) => setAtivityDesc(event.target.value)}
        ></textarea>

        <Link className="submit_button" to={{ pathname: "/" }}>
          <button className="submit-button" type="button" onClick={postReq}>
            Create Activity
          </button>
        </Link>
      </form>
    </div>
  );
}

export default NewActivity;
