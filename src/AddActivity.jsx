import "./AddActivity.css";
import Divider from '@mui/material/Divider';
import { Routes, Route, Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Stack } from "@mui/material";
import { Chip } from "@mui/material";
import { hobbiesOptions } from "./dictionary";
import SearchIcon from '@mui/icons-material/Search';
import Slider from '@mui/material/Slider';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



function AddActivity() {

    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [location,setLocation] = useState('');
    const [startTime,setStartTime] = useState('');
    const [endTime,setEndTime] = useState('');
    const [description,setDescription] = useState('');
    const [participants, setParticipants] = useState([5,15]);
    const [participantType, setParticipantType] = useState('all');

    const handleParticipantType = (event) => {
      setParticipantType(event.target.value);
    };

    const handleParticipantsSlider = (event, newValue) => {
        setParticipants(newValue);
        console.log(newValue);
      };



    const postReq = async () => {
        // await axios.get('http://localhost:8080/userSignUp', {
        //     params: {
        //         email: email,
        //         password: password
        //       }
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    };

    return (
        <div className="container">
            <h4> Create An Activity</h4>
            <form className="main-form" onsubmit="event.preventDefault();">
                <div className="title-div input-div">
                    <label>Title</label>
                    <input type="text" onChange={event => setTitle(event.target.value)} name="title"/>
                </div>
                <div className="activity-type-div input-div">
                    <label>Activity Type</label>
                    <div className="activity-type-slider">
                    <Stack direction="row" spacing={1}>
                        <SearchIcon className="search-icon-activity"></SearchIcon>
                        {hobbiesOptions.map( hobbie => { return <Chip sx={{height: "35px", minWidth: "80px"}} className="hobbie-chip" variant="outlined" label={hobbie}/>})}
                    </Stack>
                    </div>
                </div>
                <Divider variant="middle" />
                <div className="date-div input-div">
                    <label>Date</label>
                    <input type="text" onChange={event => setDate(event.target.value)} name="date"/>
                </div>
                <div className="time-div input-div">
                    <div className="input-div starts-at-div"> 
                        <label>Starts at</label>
                        <input type="text" onChange={event => setStartTime(event.target.value)} name="start-time"/>
                    </div>
                    <div className="input-div ends-at-div">
                        <label>Ends at</label>
                        <input type="text" onChange={event => setEndTime(event.target.value)} name="end-time"/>
                    </div>
                </div>
                <div className="location-div input-div">
                    <label>Location</label>
                    <input type="text" onChange={event => setLocation(event.target.value)} name="location"/>
                </div>
                <Divider variant="middle" />
                <div className="participants-div input-div">
                    <label>Participants</label>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <PersonOutlineIcon />
                        <span>Min</span>
                        <Slider getAriaLabel={() => 'Participants'} max={20} value={participants} onChange={handleParticipantsSlider} valueLabelDisplay="auto"/>
                        <span>Max</span>
                    </Stack>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={participantType}
                            onChange={handleParticipantType}
                        >
                            <FormControlLabel sx = {{typography: 'body1'}} value="all" control={<Radio />} label="All" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Divider variant="middle" />
                <div className="activity-description-div input-div">
                    <label>Activity Description</label>
                    <input type="text" onChange={event => setDescription(event.target.value)} name="description"/>
                </div>
                <Link to={{pathname: '/signupsecond'}}><button className="submit-button" type="button" onClick={postReq} >Create activity</button></Link>

            </form>
            <navbar className="navbar">
                <Navbar></Navbar>
            </navbar>

        </div>
    )
}

export default AddActivity;