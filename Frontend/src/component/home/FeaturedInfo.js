import "./featuredInfo.css";
import { useEffect, useState } from "react";
import * as MdIcon from "react-icons/md";
import PercentageChange from "./percentageChange.js"

const FeaturedInfo = (props) => {
    
    const positiveStyle = {color: "green", ffontSize: "1.4em", marginLeft:"10px", marginTop: "1px"};
    const negativeStyle = {color: "red", fontSize: "1.4em", marginLeft:"10px", marginTop: "1px"};

    useEffect(() => {
        console.log(props.stepLineData[props.stepLineData.length-1])
    })

    const TotalSleepTime = () => {
        return(
            <div className="featuredItem">
    
                <span className="featuredTitle">Sleep Time</span>
                <div className="featuredSleepTimeContainer">
                    <span className="featuredSleepTime">7 Hour 56 Minutes</span>
                    <span className="featuredSleepTimePercentageChange">-10%</span>
                    <MdIcon.MdArrowDownward style={negativeStyle}/>
                </div>
                <span className="featuredSub">Compared to yesterday</span>
    
            </div>
        )
    }

    const TotalExercisesTime = () => {
        return(
            <div className="featuredItem">
    
                <span className="featuredTitle">Exercises Time</span>
                <div className="featuredExercisesTimeContainer">
                    <span className="featuredExercisesTime">1 Hour 13 Minutes</span>
                    <span className="featuredExercisesTimePercentageChange">+12%</span>
                    <MdIcon.MdArrowDownward style={negativeStyle}/>
                </div>
                <span className="featuredSub">Compared to yesterday</span>
    
            </div>
        )
    }

    const Steps = () => {
        return(
            <div className="featuredItem">
    
                <span className="featuredTitle">Steps</span>
                <div className="featuredStepsContainer">
                    <span className="featuredSteps">{props.stepLineData[props.stepLineData.length-1]}</span>
                    <PercentageChange dataBefore = {props.stepLineData[props.stepLineData.length-1]} dataAfter = {props.stepLineData[props.stepLineData.length-2]}/>
                </div>
                <span className="featuredSub">Compared to yesterday</span>
    
            </div>
        )
    }

    return(
        <div className="featured">
            <Steps/>
            <TotalExercisesTime/>
            <TotalSleepTime/>
        </div>
    )
}

export default FeaturedInfo;