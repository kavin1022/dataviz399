import React, {useEffect, useLocation} from "react";
import "./topBar.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const TopBar = (props) => {
    const profileIcon = {fontSize: "45", cursor: "pointer", color: props.color};
    const topBarIcon = {fontSize: "25", marginRight: "10px", cursor: "pointer", color: "white"}

    useEffect(() => {
        console.log(window.location.pathname);
        console.log("sup");
    });

    return (
        <div className="topBar">
            <AccountCircleIcon style={profileIcon}/>
        </div>
    )
}

export default TopBar