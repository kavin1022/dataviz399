import React, { useState } from "react";
import "./activities.css"
import ExerciseRing from "../../component/activities/ExerciseRing";
import AFeaturedInfo from "../../component/activities/AFeaturedInfo"
import CaloriesBurntBar from "../../component/activities/CaloriesBurntBar";
import BackgroudGrey from "../../component/topBar/BackgroundGrey";
import DatePickerSelf from "../../component/topBar/DatePickerSelf";


const Activities = () => {

    
    return (
        <div className="activities">
            <BackgroudGrey/>
            <div className = "zeroRow">
                {/*<h1 className="welcomeMessage" style={{color: "black"}}>Good work on staying active!</h1>*/}
                <DatePickerSelf/>
            </div>
            <div className="firstRow">
                <AFeaturedInfo/>
                <AFeaturedInfo/>
                <AFeaturedInfo/>
                <AFeaturedInfo/>
            </div>

            <div className="secondRow">
                <ExerciseRing/>
                <CaloriesBurntBar/>
            </div>
            
        </div>
    )
}

export default Activities;