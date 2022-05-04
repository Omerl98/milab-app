import "./Home.css";
import {useEffect, useState, useRef} from "react";
import React from 'react';
import userIcon from "./assets/user.svg";
import searchIcon from "./assets/search.svg";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./components/Map.js";



const name = "Omer";

const hobbiesOptions = [
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

  const API_KEY = "AIzaSyBVW1cV_eXNMYX00F7NWSG7x4fisH15-f4";
  

function Home() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return (
        <div className="container">
            <div className="top-bar">
                <p> <span className="top-bar-name">{name}</span>, Welcome to the hood! </p>
                <img src={userIcon} className="icon user-icon" />
                <img src={searchIcon} className="icon search-icon" />
            </div>
            <div className="activity-search-bar">

            </div>
            <div className="google-map-container">
            <Map />
            </div>
            <div className="activity-slider">
                
            </div>
            <div className="navbar">

            </div>
        </div>
    );
  }
  
  export default Home;