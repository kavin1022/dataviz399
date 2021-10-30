import React, { useEffect, useState } from "react";
import "./activities.css"
import ExerciseRing from "../../component/activities/ExerciseRing";
import AFeaturedInfo from "../../component/activities/AFeaturedInfo"
import CaloriesBurntBar from "../../component/activities/CaloriesBurntBar";
import BackgroudGrey from "../../component/topBar/BackgroundGrey";
import DatePickerSelf from "../../component/topBar/DatePickerSelf";
import TopBar from "../../component/topBar/TopBar";

const Activities = (props) => {

    return (
        <div className="activities">
            <BackgroudGrey/>
            <TopBar color="#5F6AC4"/>

            <div className = "zeroRow">
                <DatePickerSelf date={props.date} setDate={props.setDate}/>
                {props.loading && <h2 id="loading">Updating...</h2>}
            </div>

            <div className="firstRow">
                <AFeaturedInfo title = {"Steps"} value={props.stepValue} sub={"steps"}/>
                <AFeaturedInfo title = {"Distance"} value={props.distanceValue} sub={"km"}/>
                <AFeaturedInfo title = {"Exercise"} value={props.exerciseValue} sub={"minutes"}/>
                <AFeaturedInfo title = {"Calories"} value={props.caloriesValue} sub={"calories burnt"}/>
            </div>

            <div className="secondRow">
                <ExerciseRing time={props.exerciseValue} runTime={props.runTime} walkTime={props.walkTime} ringLabel={props.ringLabel} ringData={props.ringData} />

                <CaloriesBurntBar totalCalories={props.totalCalories} barData={props.barData} barLabel={props.barLabel}/>
            </div>
        </div>
    )
}

export default Activities;