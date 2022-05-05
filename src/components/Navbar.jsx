import React from 'react';
import { Router, Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";

export default function Navbar() {

    const [value, setValue] = React.useState(0);

    return(
        <BottomNavigation
            sx={{boxShadow: 1}}
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            
            <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />}/>
            <BottomNavigationAction label="Add Activity" icon={<AddCircleOutlineOutlinedIcon />} />
            <BottomNavigationAction label="Schedule" icon={<EventAvailableOutlined/>}/>
        </BottomNavigation>
    )
}