import React from "react";
import * as MdIcon from "react-icons/md";

export const SidebarData = [
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
        title: "Nutrition",
        path: "/nutrition",
        icon: <MdIcon.MdRestaurant color="#676767"/>,
        cName: "nav-text"
    },
    {
        title: "Sleep",
        path: "/sleep",
        icon: <MdIcon.MdLocalHotel color="#676767"/>,
        cName: "nav-text"
    },
    {
        title: "Wellness",
        path: "/wellness",
        icon: <MdIcon.MdFavorite color="#676767"/>,
        cName: "nav-text"
    },
];

