import React, {useEffect, useLocation} from "react";
import "./topBar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';

const TopBar = (props) => {
    const profileIcon = {fontSize: "45", cursor: "pointer", color: props.color};
    const topBarIcon = {fontSize: "25", marginRight: "10px", cursor: "pointer", color: "white"}
    const history = useHistory();

    const handleLoutoutClick = () => {
        props.setLoggedIn(false);
        history.push("/login")
    }

    return (
        <div className="topBar">
            <LogoutIcon onClick={() => handleLoutoutClick()} style={profileIcon}/>
        </div>
    )
}

export default TopBar