import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import SignUp from "./signup.js";



function App() {

  // const [token, setToken] = useState();

  // if(!token) {
  //   return <SignUp setToken={setToken} />
  // }

  return (
    <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path='/home' render={() => {return <div> HERE </div>}}  />
    </Routes>
  );
}

export default App;
