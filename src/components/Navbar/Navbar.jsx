import React from 'react';
import { Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import './Navbar.css';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";

export default function Navbar() {


    return(
        <BottomNavigation
            sx={{boxShadow: 1}}
        >
            <BottomNavigationAction component={Link} to="/home" icon={<HomeOutlinedIcon />}></BottomNavigationAction>
            <BottomNavigationAction component={Link} to="/addactivity" icon={<AddCircleOutlineOutlinedIcon />} />
            <BottomNavigationAction component={Link} to="/" icon={<EventAvailableOutlined/>}/>
        </BottomNavigation>

    )
}