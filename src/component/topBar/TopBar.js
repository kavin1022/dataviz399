import React from "react";
import { SidebarData } from "../navbar/SidebarData";
import "./topBar.css";
import * as MdIcon from "react-icons/md";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const TopBar = () => {
    const profileIcon = {fontSize: "37", cursor: "pointer", color: "white"};
    const topBarIcon = {fontSize: "25", marginRight: "10px", cursor: "pointer", color: "white"}

    return (
        <div className="topBar">
            <AccountCircleIcon style={profileIcon}/>
            <NotificationsIcon style={topBarIcon}/>
        </div>
    )
}

export default TopBar