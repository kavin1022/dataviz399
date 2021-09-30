import React from "react"
import * as MdIcon from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <nav className="nav-menu">
                <ul className="nav-menu-items">
                    <li>
                        <div className="placeholder-logo">
                            <Link to="/">
                                <MdIcon.MdPolymer size="60%" color="#5F6AC4"/>
                            </Link>
                        </div>
                    </li>
                    {SidebarData.map((item, index) =>{
                        return(
                            <li key={item.title} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar