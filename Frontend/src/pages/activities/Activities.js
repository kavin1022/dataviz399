import React, { useState } from "react";
import "./activities.css"
import ExerciseRing from "../../component/activities/ExerciseRing";
import AFeaturedInfo from "../../component/activities/AFeaturedInfo"
import CaloriesBurntBar from "../../component/activities/CaloriesBurntBar";
import BackgroudGrey from "../../component/topBar/BackgroundGrey";
import DatePickerSelf from "../../component/topBar/DatePickerSelf";
import TopBar from "../../component/topBar/TopBar";


const Activities = () => {

    
    return (
        <div className="activities">
            <BackgroudGrey/>
            <TopBar color="#5F6AC4"/>
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