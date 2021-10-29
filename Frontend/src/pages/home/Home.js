import React from "react";
import { useEffect, useState } from "react";
import "./home.css"
import FeaturedInfo from "../../component/home/FeaturedInfo";
import StepLineChart from "../../component/home/StepLineChart";
import SummaryRadar from "../../component/home/SummaryRadar";
import WaterRing from "../../component/home/WaterRing";
import HappinessRing from "../../component/home/HappinessRing";
import useFetch from "../../component/useFetch";
import BackgroudGrey from "../../component/topBar/BackgroundGrey";
import ExerciseHomeCom from "../../component/home/ExerciseHomeCom";
import CircularProgress from '@material-ui/core/CircularProgress';
import PurpleBack from "../../component/topBar/PurpleBack";
import TopBar from "../../component/topBar/TopBar";

const Home = (props) => {
    let {error, isPending, data} = useFetch("http://localhost:8000/api/activities/getLineChartSteps");

    return (
        <>
        
        <PurpleBack/>
        <div className="home">
               
            {isPending && <>
                              <h1 className="welcomeMessage">Loading...</h1>
                              <div className="loading"><CircularProgress/></div>
                          </>}
            {data && <div>
                <TopBar color="white"/> 
                <h1 className="welcomeMessage">Welcome back, Yu-en Goh</h1>
                <FeaturedInfo stepsData={data}/>
                <StepLineChart stepsData={data} date={props.date} setDate={props.setDate} />

                <div className="HomeRowThree">
                    <ExerciseHomeCom/>
                    <WaterRing/>
                </div>
            </div>}
        </div>
        </>
    )
}

export default Home;