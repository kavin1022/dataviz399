import React from "react";
import "./sleep.css"
import StaticDatePickers from "../component/home/StaticDatePicker";
import SleepAnalysis from "../component/sleep/SleepAnalysis";
import SleepStageRing from "../component/sleep/SleepStageRing";

const Sleep = () => {

    
    return (
        <div className="sleep">
            <h1 className="welcomeMessage">How was your sleep?</h1>

            <div className="sleepRowOne">
                <SleepAnalysis/>
                <div className="datePickerContainer">
                    <StaticDatePickers/>
                </div>
            </div>

            <div className="sleepRowTwo">
                <SleepStageRing/>
            </div>

        </div>
    )
}

export default Sleep;