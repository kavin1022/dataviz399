import React from "react";
import "./sleep.css"
import SleepAnalysis from "../../component/sleep/SleepAnalysis";
import SleepStageRing from "../../component/sleep/SleepStageRing";
import DatePickerSelf from "../../component/topBar/DatePickerSelf"
import SleepFeaturedInfo from "../../component/sleep/SleepFeaturedInfo";
import WeeklySleepLine from  "../../component/sleep/WeeklySleepLine"
import TopBar from "../../component/topBar/TopBar";
import { useEffect, useState } from "react";
import RangePicker from "../../component/sleep/RangePicker";

const Sleep = (props) => {

    return (
        <div className="sleep">
            <TopBar color="#5F6AC4" setLoggedIn={props.setLoggedIn} /> 
            <DatePickerSelf date={props.date} setDate={props.setDate} />
        
            <div className="sleepRowOne">
                <SleepFeaturedInfo title="Went to Sleep" value={props.wentToSleep}/>
                <SleepFeaturedInfo title="Woke Up" value={props.wakeUp}/>
                <SleepFeaturedInfo title="Time In Bed" value={props.timeInBed}/>
                <SleepFeaturedInfo title="Efficiency" value={`${props.efficiency}%`}/>
            </div>

            <div className="sleepRowTwo">
                <WeeklySleepLine data={props.sleepLineData} label={props.sleepLineLabel} />
                <SleepStageRing data={props.sleepStagesData}/>https://mail.google.com/mail/u/0/#inbox?projector=1
            </div>
            <div id="sleepRangePickerContainer"><RangePicker setSleepLineDaysNumber={props.setSleepLineDaysNumber} /></div>

        </div>
    )
}

export default Sleep;