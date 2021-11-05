import React from "react";
import { useEffect } from "react";
import "./home.css"
import FeaturedInfo from "../../component/home/FeaturedInfo";
import StepLineChart from "../../component/home/StepLineChart";
import WaterRing from "../../component/home/WaterRing";
import ExerciseHomeCom from "../../component/home/ExerciseHomeCom";
import PurpleBack from "../../component/topBar/PurpleBack";
import TopBar from "../../component/topBar/TopBar";

const Home = (props) => {

    useEffect(() => {
        
    })

    return (
        <>
            <PurpleBack/>
            <div className="home">

                <div>
                    <TopBar color="white" setLoggedIn={props.setLoggedIn} /> 
                    <h1 className="welcomeMessage">Welcome back</h1>
                    <FeaturedInfo stepLineData={props.stepLineData} sleepLineData={props.sleepLineData} timeInBed={props.timeInBed} homeTotalCalories={props.homeTotalCalories} />
                    <StepLineChart stepLineData={props.stepLineData} stepLineLabels={props.stepLineLabels} stepsHome={props.stepsHome} date={props.date} setDate={props.setDate} />

                    <div className="HomeRowThree">
                        <ExerciseHomeCom/>
                        <WaterRing/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;