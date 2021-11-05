import "./featuredInfo.css";
import { useEffect } from "react";
import PercentageChange from "./percentageChange.js"

const FeaturedInfo = (props) => {

    useEffect(() => {
        
    })

    const TotalSleepTime = () => {
        return(
            <div className="featuredItem">
    
                <span className="featuredTitle">Sleep Time</span>
                <div className="featuredSleepTimeContainer">
                    <span className="featuredSleepTime">{props.timeInBed}</span>
                    <PercentageChange dataBefore = {props.sleepLineData[props.sleepLineData.length-2]} dataAfter = {props.sleepLineData[props.sleepLineData.length-1]}/>
                </div>
                <span className="featuredSub">Compared to yesterday</span>
    
            </div>
        )
    }

    const TotalExercisesTime = () => {
        return(
            <div className="featuredItem">
    
                <span className="featuredTitle">Calories Burnt</span>
                <div className="featuredExercisesTimeContainer">
                    <span className="featuredExercisesTime">{props.homeTotalCalories[0].value}</span>
                    <PercentageChange dataBefore = {props.homeTotalCalories[0].value} dataAfter = {props.homeTotalCalories[1].value}/>
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
                    <PercentageChange dataBefore = {props.stepLineData[props.stepLineData.length-2]} dataAfter = {props.stepLineData[props.stepLineData.length-1]}/>
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