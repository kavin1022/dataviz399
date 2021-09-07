import React from "react";
import { useEffect, useState } from "react";
import "./home.css"
import FeaturedInfo from "../../component/home/FeaturedInfo";
import StepLineChart from "../../component/home/StepLineChart";
import SummaryRadar from "../../component/home/SummaryRadar";
import WaterRing from "../../component/home/WaterRing";
import HappinessRing from "../../component/home/HappinessRing";

const Home = () => {
    const [stepsData, setStepsData] = useState(null);

    useEffect(() => {
		fetch("http://localhost:8000/api/step/getLineChartSteps")
			.then(res =>{
				return res.json();
			})
			.then(data => {
				setStepsData(data);
			})
	}, [])

    return (
        <div className="home">
            <h1 className="welcomeMessage">Welcome back, Yu-en Goh</h1>
            {stepsData && <FeaturedInfo stepsData={stepsData}/>}
            <StepLineChart/>

            <div className="HomeRowThree">
                <HappinessRing/>
                <WaterRing/>
                <SummaryRadar/>
            </div>
        </div>
    )
}

export default Home;