import "./Home.css";
import {useEffect, useState, useRef} from "react";
import React from 'react';
import userIcon from "./assets/user.svg";
import searchIcon from "./assets/search.svg";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import Map from "./components/Map/Map";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import API_KEY from './keys.js'
import Navbar from "./components/Navbar/Navbar";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";
import { hobbiesOptions } from "./dictionary";

const name = "Omer";

  const currentActivities = [
      {type: "Running", location: "Yarkon Park, Tel Aviv", date: "1.12", time: "9:30", lat: 32.109333, lng: 34.855499, id:1},
      {type: "Running", location: "Yarkon Park, Tel Aviv", date: "1.12", time: "9:30", lat: 32.111767, lng: 34.801361, id:2},
      {type: "Running", location: "Yarkon Park, Tel Aviv", date: "1.12", time: "9:30", lat: 32.083161, lng: 34.767619, id:3}
  ]
  

function Home() {

    const [value, setValue] = React.useState(0);
    const handleClick = () => {

    }

    return (
        <div className="container">
            <div className="top-bar">
                <p> <span className="top-bar-name">{name}</span>, Welcome to the hood! </p>
                <div className="top-icons">
                    <img src={userIcon} className="icon user-icon" />
                    <img src={searchIcon} className="icon search-icon" />
                </div>
            </div>
            <div className="activity-search-bar">
            <Stack direction="row" spacing={1}>
                {hobbiesOptions.map( hobbie => { return <Chip className="hobbie-chip" variant="outlined" label={hobbie} onClick={handleClick}/>})}
            </Stack>
            </div>
            <div className="google-map-container">
            <Map activities={currentActivities}/>
            </div>
            <div className="activity-slider">
            <Stack direction="row" spacing={1}>
                { currentActivities.map(activity => 
                    <ActivityCard type={activity.type} location={activity.location} date={activity.date} time={activity.time}></ActivityCard>)
                }
            </Stack>
            </div>
            <div className="navbar">
                <Navbar></Navbar>
            </div>
        </div>
    );
  }
  
  export default Home;