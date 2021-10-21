import "./exerciseRing.css"
import {Doughnut} from "react-chartjs-2"
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import { useEffect, useState } from "react";

const ExerciseRing = (props) => {

    const exerciseIconStyleWalk = {fontSize: 50, color: "#2D5D7B"}
    const exerciseIconStyleRun = {fontSize: 50, color: "#C2D076"}
	const options = {
        cutout: 70,
		plugins:{
			legend:{
				display: false
			},
			title:{
				display: false,
				text: "Sleep Stages"
			}
		},
	};

	const data = {
        labels: ["Walking", "Treadmill"],
        datasets: [{
            label: 'Sleep Stages',
            data: props.ringData,
            backgroundColor: [
                '#2DAA8C',
                '#5f75c4'
            ],
            hoverOffset: 7
        }]
    };

	return(
        <div className="exerciseInfo">

            <div className="totalExercise">
                <h3 style={{fontSize: "30px", fontWeight: "500", marginTop: "60px"}}>Exercise</h3>
                <p style={{fontSize: "30px", fontWeight: "500",color: "#5f75c4", marginTop: "50px"}}>{props.time}</p>
                <p style={{fontSize: "20px", color: "grey"}}>min today</p>
            </div>

            <div className="exerciseRingWrapper">
                <Doughnut data={data} height={40} options={options}/>
            </div>

            <div className="exerciseType">
                <div className="exerciseTabWrapper">
                    <DirectionsRunIcon style={exerciseIconStyleRun}/>
                    <div>
                        <h3 style={{fontSize: "25px", fontWeight: "500"}}>Runing</h3>
                        <p>{props.runTime} min</p>
                    </div>
                </div>

                <div className="exerciseTabWrapper" style={{marginTop: "50px"}}>
                    <DirectionsWalkIcon style={exerciseIconStyleWalk}/>
                    <div>
                        <h3 style={{fontSize: "25px", fontWeight: "500"}}>Walking</h3>
                        <p>{props.walkTime} min</p>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default ExerciseRing;