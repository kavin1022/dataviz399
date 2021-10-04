import React from "react";
import "./sleep.css"
import SleepAnalysis from "../../component/sleep/SleepAnalysis";
import SleepStageRing from "../../component/sleep/SleepStageRing";
import DatePickerSelf from "../../component/topBar/DatePickerSelf"
import SleepFeaturedInfo from "../../component/sleep/SleepFeaturedInfo";
import WeeklySleepLine from  "../../component/sleep/WeeklySleepLine"
import TopBar from "../../component/topBar/TopBar";

const Sleep = () => {

    
    return (
        <div className="sleep">
            <TopBar color="#5F6AC4"/> 
            <DatePickerSelf/>
            
            <div className="sleepRowOne">
                <SleepFeaturedInfo title="Time In Bed" value="07:08"/>
                <SleepFeaturedInfo title="Went to Sleep" value="23:30"/>
                <SleepFeaturedInfo title="Woke Up" value="06:38"/>
                <SleepFeaturedInfo title="Regularity" value="82%"/>
            </div>

            <div className="sleepRowTwo">
                <WeeklySleepLine/>
                <SleepStageRing/>
            </div>

        </div>
    )
}

export default Sleep;