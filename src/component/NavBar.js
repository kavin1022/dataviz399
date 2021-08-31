import React from "react"
import * as MdIcon from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar(){
    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <MdIcon.MdMenu />
                </Link>
            </div>
            <nav className="nav-menu">
                <ul className="nav-menu-items">
                    <li>
                        {SidebarData.map((item, index) =>{
                            return(
                                <li key="index" className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar