import React, { useEffect, useState } from "react";
import "./activities.css"
import ExerciseRing from "../../component/activities/ExerciseRing";
import AFeaturedInfo from "../../component/activities/AFeaturedInfo"
import CaloriesBurntBar from "../../component/activities/CaloriesBurntBar";
import BackgroudGrey from "../../component/topBar/BackgroundGrey";
import DatePickerSelf from "../../component/topBar/DatePickerSelf";
import TopBar from "../../component/topBar/TopBar";
import useFetch from "../../component/useFetch";


const Activities = () => {
    const [date, setDate] = useState("2020-03-27");
    const [stepValue, setStepValue] = useState();
    const [distanceValue, setDistanceValue] = useState();
    const [exerciseValue, setExerciseValue] = useState();
    const [caloriesValue, setCaloriesValue] = useState();

    const update = (arr) => {
        console.log(arr);
        let sum = 0;
        for (let i=0; i<arr.length; i++){
            if (arr[i].dateTime.substring(0,10) == date){
                sum += arr[i].value;
            }
        }
        return sum;
    }
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        const stepPromise = fetch("http://localhost:8000/api/activities/getLineChartSteps", requestOptions).then(response => response.json()).then(res => {return res})
        const disPromise = fetch("http://localhost:8000/api/activities/getdailydistance", requestOptions).then(response => response.json()).then(res => {return res})
        const exerDurPromise = fetch("http://localhost:8000/api/activities/getAllExerciseDuration/p?day=" + date, requestOptions).then(response => response.json()).then(res => {return res})
        const caloriesPromise = fetch("http://localhost:8000/api/activities/GetDailyCalories", requestOptions).then(response => response.json()).then(res => {return res})

        const proList = [stepPromise, disPromise, exerDurPromise, caloriesPromise]
        Promise.all(proList)
        .then(async() => {
            setStepValue(update(await stepPromise));
            setDistanceValue(Math.round(update(await disPromise) * 100)/100);
            setExerciseValue(Math.round(update(await exerDurPromise) * 100)/100);
            setCaloriesValue(Math.round(update(await caloriesPromise) * 100)/100);
        })
    }, [date]);
      
    return (
        <div className="activities">
        <BackgroudGrey/>
        <TopBar color="#5F6AC4"/>
        <div className = "zeroRow">
            <DatePickerSelf date={date} setDate={setDate}/>
        </div>
        <div className="firstRow">
            <AFeaturedInfo title = {"Steps"} value={stepValue} sub={"steps"}/>
            <AFeaturedInfo title = {"Distance"} value={distanceValue} sub={"km"}/>
            <AFeaturedInfo title = {"Exercise"} value={exerciseValue} sub={"minutes"}/>
            <AFeaturedInfo title = {"Calories"} value={caloriesValue} sub={"calories burnt"}/>
        </div>

        <div className="secondRow">
            <ExerciseRing/>
            <CaloriesBurntBar/>
        </div>
        
        </div>

    )
}

export default Activities;