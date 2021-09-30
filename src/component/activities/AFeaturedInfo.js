import "./aFeaturedInfo.css";
import { useEffect, useState } from "react";
import * as MdIcon from "react-icons/md";

const AFeaturedInfo = (props) => {

    return(
        <div className="featuredItem">
    
            
            <div className="featuredContainer">
                <span className="featuredTitle">Steps</span>
                <span className="featuredValue">2328</span>
                <span className="featuredSub">steps today</span>
            </div>
            

        </div>
    )
}

export default AFeaturedInfo;