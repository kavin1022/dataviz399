import React from "react";
import "./sleep.css"
import SleepAnalysis from "../../component/sleep/SleepAnalysis";
import SleepStageRing from "../../component/sleep/SleepStageRing";
import DatePickerSelf from "../../component/topBar/DatePickerSelf"
import SleepFeaturedInfo from "../../component/sleep/SleepFeaturedInfo";
import WeeklySleepLine from  "../../component/sleep/WeeklySleepLine"
import TopBar from "../../component/topBar/TopBar";
import { useEffect, useState } from "react";

const Sleep = (props) => {
    const [loading, setLoading] = useState(false);

    const [efficiency, setEfficiency] = useState(0);
    const [wentToSleep, setWentToSleep] = useState(0);
    const [wakeUp, setwakeUp] = useState(0);
    const [timeInBed, setTimeInBed] = useState(0);

    const [sleepLineLabel, setSleepLineLabel] = useState(0);
    const [sleepLineData, setSleepLineData] = useState(0);

    const [sleepStagesData, setSleepStagesData] = useState(0);

    const parseDuration = (data) => {
        for(let i = 0; i < data.length; i++){
            if (data[i].dateTime === props.date){

                //Convert single digit to double digit (e.g. 6 => 06)
                //Set time in bed (e.g. 06:12)
                setTimeInBed(`${(Math.round(data[i].duration)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${Math.round(data[i].duration / 10 * 60)}`);
                setWentToSleep(data[i].startTime.substring(data[i].startTime.length - 8, data[i].startTime.length-3));
                setEfficiency(data[i].efficiency)
                setwakeUp(data[i].endTime.substring(data[i].endTime.length - 12, data[i].endTime.length-7));

                //Set ringdata
                let tempRingData = [];
                for (const [key, value] of Object.entries(data[i].levels)) {
                    tempRingData.push(value.minutes);
                }
                console.log(tempRingData);
                setSleepStagesData(tempRingData);

                return i;
            }
        }
    }

    useEffect(() => {
        const durationPromise = fetch("http://localhost:8000/api/sleep/getsleepduration").then(response => response.json()).then(res => {return res});

        const proList = [durationPromise]
        Promise.all(proList)
        .then(async() => {
            let sleepInfo = await durationPromise
            let dateIndex = parseDuration(sleepInfo);

            let tempData = [];
            let tempLabel = [];
            sleepInfo.slice(dateIndex - 6, dateIndex + 1).map(x => {
                tempData.push(x.duration);
                tempLabel.push(x.dateTime.substring(5))
            });
            setSleepLineData(tempData);
            setSleepLineLabel(tempLabel)
        
        })
    }, [props.date])
    
    return (
        <div className="sleep">
            <TopBar color="#5F6AC4"/> 
            <DatePickerSelf date={props.date} setDate={props.setDate} />
        
            <div className="sleepRowOne">
                <SleepFeaturedInfo title="Went to Sleep" value={wentToSleep}/>
                <SleepFeaturedInfo title="Woke Up" value={wakeUp}/>
                <SleepFeaturedInfo title="Time In Bed" value={timeInBed}/>
                <SleepFeaturedInfo title="Efficiency" value={`${efficiency}%`}/>
            </div>

            <div className="sleepRowTwo">
                <WeeklySleepLine data={sleepLineData} label={sleepLineLabel} />
                <SleepStageRing data={sleepStagesData}/>
            </div>

        </div>
    )
}

export default Sleep;