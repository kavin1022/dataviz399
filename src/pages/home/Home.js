import React from "react";
import FeaturedInfo from "../../component/home/FeaturedInfo";
import "./home.css"
import StepLineChart from "../../component/home/StepLineChart";

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <StepLineChart/>
        </div>
    )
}

export default Home;