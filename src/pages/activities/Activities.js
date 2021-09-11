import React from "react";
import "./activities.css"
import ExerciseRing from "../../component/activities/ExerciseRing";

const Activities = () => {
    
    return (
        <div className="activities">
            <h1 className="welcomeMessage">Activities</h1>
            <ExerciseRing/>
        </div>
    )
}

export default Activities;