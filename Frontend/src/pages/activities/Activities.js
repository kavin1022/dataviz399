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

    //const {error, isPending, stepData} = useFetch("http://localhost:8000/api/activities/getLineChartSteps");
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("http://localhost:8000/api/activities/getLineChartSteps", requestOptions).then(response => response.json())
        .then(result => {
            let step = 0;
            for (let i=0; i<result.length; i++){
                if (result[i].dateTime == date){
                    step = result[i].value;
                    break;
                }
            }
            setStepValue(step);
        })
        fetch("http://localhost:8000/api/activities/getdailydistance", requestOptions).then(response => response.json())
        .then(result => {
            let distance = 0;
            for (let i=0; i<result.length; i++){
                if (result[i].dateTime == date){
                    distance = Math.round(result[i].value * 100)/100;
                    break;
                }
            }
            setDistanceValue(distance);
        })
        fetch("http://localhost:8000/api/activities/getAllExerciseDuration/p?day=" + date, requestOptions).then(response => response.json())
        .then(result => {
            let sum = 0;
            for (let i=0; i<result.length; i++){
                sum += result[i].duration;
            }
            setExerciseValue(Math.round(sum))
        })
        fetch("http://localhost:8000/api/activities/GetDailyCalories", requestOptions).then(response => response.json())
        .then(result => {
            setCaloriesValue(Math.round(result[0].value * 100)/100)
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