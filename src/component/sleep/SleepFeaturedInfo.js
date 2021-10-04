import "./SleepFeaturedInfo.css";
import { useEffect, useState } from "react";
import * as MdIcon from "react-icons/md";

const SleepFeaturedInfo = (props) => {

    return(
        <div className="featuredItem">
    
            
            <div className="featuredContainer">
                <span className="featuredTitle">{props.title}</span>
                <span className="featuredValue">{props.value}</span>
            </div>
            

        </div>
    )
}

export default SleepFeaturedInfo;