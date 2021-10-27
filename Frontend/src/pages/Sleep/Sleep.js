import React from "react";
import "./sleep.css"
import SleepAnalysis from "../../component/sleep/SleepAnalysis";
import SleepStageRing from "../../component/sleep/SleepStageRing";
import DatePickerSelf from "../../component/topBar/DatePickerSelf"
import SleepFeaturedInfo from "../../component/sleep/SleepFeaturedInfo";
import WeeklySleepLine from  "../../component/sleep/WeeklySleepLine"
import TopBar from "../../component/topBar/TopBar";
import { useEffect, useState } from "react";

const Sleep = () => {
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState("2020-03-31");

    const [efficiency, setEfficiency] = useState(0);
    const [wentToSleep, setWentToSleep] = useState(0);
    const [wakeUp, setwakeUp] = useState(0);
    const [timeInBed, setTimeInBed] = useState(0);

    const parseDuration = (data) => {
        for(let i = 0; i < data.length; i++){
            if (data[i].dateTime === date){

                //Convert single digit to double digit (e.g. 6 => 06)
                //Set time in bed (e.g. 06:12)
                setWentToSleep(data[i].startTime.substring(data[i].startTime.length - 8, data[i].startTime.length));
                setTimeInBed(`${(Math.round(data[i].duration)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${Math.round(data[i].duration / 10 * 60)}`);
                setEfficiency(data[i].efficiency)
                setwakeUp(data[i].endTime.substring(data[i].endTime.length - 12, data[i].endTime.length-7));

                return;
            }
        }
    }

    useEffect(() => {
        const durationPromise = fetch("http://localhost:8000/api/sleep/getsleepduration").then(response => response.json()).then(res => {return res});

        const proList = [durationPromise]
        Promise.all(proList)
        .then(async() => {
            let sleepInfo = await durationPromise
            parseDuration(sleepInfo);
            
        })
    }, [date])
    
    return (
        <div className="sleep">
            <TopBar color="#5F6AC4"/> 
            <DatePickerSelf date={date} setDate={setDate}/>
            
            <div className="sleepRowOne">
                <SleepFeaturedInfo title="Time In Bed" value={timeInBed}/>
                <SleepFeaturedInfo title="Went to Sleep" value={wentToSleep}/>
                <SleepFeaturedInfo title="Woke Up" value={wakeUp}/>
                <SleepFeaturedInfo title="Efficiency" value={`${efficiency}%`}/>
            </div>

            <div className="sleepRowTwo">
                <WeeklySleepLine/>
                <SleepStageRing/>
            </div>

        </div>
    )
}

export default Sleep;