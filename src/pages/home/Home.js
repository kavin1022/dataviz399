import React from "react";
import { useEffect, useState } from "react";
import "./home.css"
import FeaturedInfo from "../../component/home/FeaturedInfo";
import StepLineChart from "../../component/home/StepLineChart";
import SummaryRadar from "../../component/home/SummaryRadar";
import WaterRing from "../../component/home/WaterRing";
import HappinessRing from "../../component/home/HappinessRing";
import useFetch from "../../component/useFetch";

const Home = (props) => {

    const {error, isPending, data} = useFetch("http://localhost:8000/api/step/getLineChartSteps");

    return (
        <div className="home">
            <h1 className="welcomeMessage">Welcome back, Yu-en Goh</h1>
            {isPending && <div>Loading...</div>}
            {data && <div>
                <FeaturedInfo stepsData={data}/>
                <StepLineChart stepsData={data}/>

                <div className="HomeRowThree">
                    <HappinessRing/>
                    <WaterRing/>
                    <SummaryRadar/>
                </div>
            </div>}
        </div>
    )
}

export default Home;