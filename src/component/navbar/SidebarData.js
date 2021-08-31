import React from "react";
import * as MdIcon from "react-icons/md";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <MdIcon.MdHome/>,
        cName: "nav-text"
    },
    {
        title: "Activities",
        path: "/activities",
        icon: <MdIcon.MdDirectionsWalk/>,
        cName: "nav-text"
    },
    {
        title: "Nutrition",
        path: "/nutrition",
        icon: <MdIcon.MdRestaurant/>,
        cName: "nav-text"
    },
    {
        title: "Sleep",
        path: "/sleep",
        icon: <MdIcon.MdLocalHotel/>,
        cName: "nav-text"
    },
    {
        title: "Wellness",
        path: "/wellness",
        icon: <MdIcon.MdFavorite/>,
        cName: "nav-text"
    },
];

