import React, { useEffect, useState } from "react";
import "./activities.css"
import ExerciseRing from "../../component/activities/ExerciseRing";
import AFeaturedInfo from "../../component/activities/AFeaturedInfo"
import CaloriesBurntBar from "../../component/activities/CaloriesBurntBar";
import BackgroudGrey from "../../component/topBar/BackgroundGrey";
import DatePickerSelf from "../../component/topBar/DatePickerSelf";
import TopBar from "../../component/topBar/TopBar";

const Activities = () => {
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState("2020-03-31");

    /* Featured info states*/
    const [stepValue, setStepValue] = useState();
    const [distanceValue, setDistanceValue] = useState();
    const [exerciseValue, setExerciseValue] = useState();
    const [caloriesValue, setCaloriesValue] = useState();

    /* Ring Chart */
    const [ringLabel, setRingLabel] = useState(["Running", "Walking"]);
    const [ringData, setRingData] = useState();
    const [runTime, setRunTime] = useState(0);
    const [walkTime, setWalkTime] = useState(0);

    /* Bar Graph */
    const [totalCalories, setTotalCalories] = useState();
    const [barLabel, setBarLabel] = useState();
    const [barData, setBarData] = useState();

    const update = (arr) => {
        let sum = 0;
        for (let i=0; i<arr.length; i++){
            if (arr[i].dateTime.substring(0,10) == date){
                sum += arr[i].value;
            }
        }
        return sum;
    }

    useEffect(() => {
        setLoading(true);
        const stepPromise = fetch("http://localhost:8000/api/activities/getLineChartSteps").then(response => response.json()).then(res => {return res})
        const disPromise = fetch("http://localhost:8000/api/activities/getdailydistance").then(response => response.json()).then(res => {return res})
        const exerDurPromise = fetch("http://localhost:8000/api/activities/getAllExerciseDuration/p?day=" + date).then(response => response.json()).then(res => {return res})
        const caloriesPromise = fetch("http://localhost:8000/api/activities/GetDailyCalories").then(response => response.json()).then(res => {return res})

        const proList = [stepPromise, disPromise, exerDurPromise, caloriesPromise]
        Promise.all(proList)
        .then(async() => {
            /* Updating featured info */
            setStepValue(update(await stepPromise));
            setDistanceValue(Math.round(update(await disPromise) * 100)/100);
            setExerciseValue(Math.round(update(await exerDurPromise) * 100)/100);
            setCaloriesValue(Math.round(update(await caloriesPromise) * 100)/100);

            /* Updating ring chart */
            const exerList = await exerDurPromise;

            let total = Array.from(exerList.reduce((m, {activityName, value}) => 
			m.set(activityName, (m.get(activityName) || 0) + value), new Map),
            ([activityName, value]) => ({activityName, value}));

            let totalButCalories = Array.from(exerList.reduce((m, {activityName, calories}) => 
			m.set(activityName, (m.get(activityName) || 0) + calories), new Map),
            ([activityName, calories]) => ({activityName, calories}));

            console.log(exerList);
            if (exerList.length !== 0){
                /* For Ring Chart */
                let tempRingLabel = [];
                let tempRingData = total.map(x => 0);
                let tempRunTime = 0;
                let tempWalkTime = 0;
                total.map(x => {
                    tempRingLabel.push(x.activityName);
                    tempRingData[tempRingLabel.indexOf(x.activityName)] += x.value;
                    if(x.activityName === "Walk"){tempWalkTime += x.value}
                    else{
                        tempRunTime += x.value;
                    }
                })
                setRingLabel(tempRingLabel);
                setRingData(tempRingData);
                setWalkTime(tempWalkTime);
                setRunTime(tempRunTime);

                /* For Bar Graph */
                let tempBarData = [0, 0];
                let tempTotalCalories = 0;
                totalButCalories.map(x => {
                    if(x.activityName == "Walk"){tempBarData[0] += x.calories;}
                    else{tempBarData[1] += x.calories};
                    tempTotalCalories += x.calories;
                })
                setTotalCalories(tempTotalCalories);
                setBarData(tempBarData);
            }else{
                setRingData([100]);
                setRingLabel(["None"]);
                setTotalCalories(0);
                setBarData([0, 0]);
                setWalkTime(0);
                setRunTime(0);
            }

            /* Update Calories Bar Graph*/
            

            setLoading(false);
        })
    }, [date]);
      
    return (
        <div className="activities">
            <BackgroudGrey/>
            <TopBar color="#5F6AC4"/>
            <div className = "zeroRow">
                <DatePickerSelf date={date} setDate={setDate}/>
                {loading && <h2 id="loading">Updating...</h2>}
            </div>
            <div className="firstRow">
                <AFeaturedInfo title = {"Steps"} value={stepValue} sub={"steps"}/>
                <AFeaturedInfo title = {"Distance"} value={distanceValue} sub={"km"}/>
                <AFeaturedInfo title = {"Exercise"} value={exerciseValue} sub={"minutes"}/>
                <AFeaturedInfo title = {"Calories"} value={caloriesValue} sub={"calories burnt"}/>
            </div>

            <div className="secondRow">
                <ExerciseRing time={exerciseValue} runTime={runTime} walkTime={walkTime} ringLabel={ringLabel} ringData={ringData} />
                <CaloriesBurntBar totalCalories={totalCalories} barData={barData} barLabel={barLabel}/>
            </div>
        </div>
    )
}

export default Activities;