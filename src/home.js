import "./home.css";
import {Button} from '@mui/material';
import {useEffect, useState} from "react";



function Home() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return (
        <div className="container">
            <div className="top-text">
                Welcome to the hood!
                <Button>Button</Button>
            </div>
           <div className="activity-search-bar">

           </div>
           <div className="google-map-container">

           </div>
           <div className="activity-slider">
               
           </div>
           <navbar className="navbar">

           </navbar>
        </div>
    );
  }
  
  export default Home;