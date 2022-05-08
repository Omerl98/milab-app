
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import SignUp from "./signup";
import SignUpSecond from "./SignUpSecond";
import SignUpThird from "./SignUpThird";
import SignUpFourth from "./SignUpFourth";
import Home from "./Home";
import AddActivity from "./AddActivity"
import Activity from './Activity';
import Map from "./components/Map/Map";
import NewActivity from "./newActivity.js";


function App() {
  return (
    <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="SignUpSecond" element={<SignUpSecond />}/>
        <Route path="SignUpThird" element={<SignUpThird />}/>
        <Route path="SignUpFourth" element={<SignUpFourth />}/>
        <Route path='home' element={<Home />}  />
        <Route path='map' element={<Map />} />
        <Route path="activity/:id" element={<Activity />} />
        <Route path='addactivity' element={<AddActivity />} />
        <Route path="/newActivity" element={<NewActivity />} />

    </Routes>
  );
}

export default App;
