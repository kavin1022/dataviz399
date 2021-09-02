import React from "react";
import FeaturedInfo from "../../component/home/FeaturedInfo";
import "./home.css"
import StepLineChart from "../../component/home/StepLineChart";

const Home = () => {
    return (
        <div className="home">
            <h1 className="welcomeMessage">Welcome back, Yu-en Goh</h1>
            <FeaturedInfo/>
            <StepLineChart/>
        </div>
    )
}

export default Home;