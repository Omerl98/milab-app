import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import SignUp from "./signup.js";
import SignUpSecond from "./SignUpSecond.js";
import SignUpThird from "./SignUpThird.js";
import SignUpFourth from "./SignUpFourth.js";
import Home from "./Home.js";
import Map from "./components/Map.js";



function App() {

  // const [token, setToken] = useState();

  // if(!token) {
  //   return <SignUp setToken={setToken} />
  // }

  return (
    <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignUpSecond" element={<SignUpSecond />}/>
        <Route path="/SignUpThird" element={<SignUpThird />}/>
        <Route path="/SignUpFourth" element={<SignUpFourth />}/>
        <Route path='/home' element={<Home />}  />
        <Route path='/map' element={<Map />} />

    </Routes>
  );
}

export default App;
