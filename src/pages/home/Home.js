import React from "react";
import "./home.css"
import FeaturedInfo from "../../component/home/FeaturedInfo";
import StepLineChart from "../../component/home/StepLineChart";
import SummaryRadar from "../../component/home/SummaryRadar";

const Home = () => {
    return (
        <div className="home">
            <h1 className="welcomeMessage">Welcome back, Yu-en Goh</h1>
            <FeaturedInfo/>
            <StepLineChart/>
            <SummaryRadar/>
        </div>
    )
}

export default Home;