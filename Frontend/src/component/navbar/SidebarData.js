import React from "react";
import * as MdIcon from "react-icons/md";

export const SidebarData = [
    {
        title: "Summary",
        path: "/clinician-summary",
        icon: <MdIcon.MdHome color="#676767"/>,
        cName: "nav-text"
    },
    {
        title: "Home",
        path: "/",
        icon: <MdIcon.MdHome color="#676767"/>,
        cName: "nav-text"
    },
    {
        title: "Activities",
        path: "/activities",
        icon: <MdIcon.MdDirectionsWalk color="#676767"/>,
        cName: "nav-text"
    },
    {
        title: "Sleep",
        path: "/sleep",
        icon: <MdIcon.MdLocalHotel color="#676767"/>,
        cName: "nav-text"
    },
];

