import { useEffect, useState } from "react";
import "./WeeklySleepLine.css";
import {Line} from "react-chartjs-2";


const WeeklySleepLine = (props) => {

	let data = {
		labels: props.label,
		datasets: [{
		  	label: 'Hours of Sleep',
		  	backgroundColor: '#5f75c4',
		  	borderColor: '#5f75c4',
			tension: 0.3,
		  	data: props.data,
		}]
	};

	const options = {
		maintainAspectRatio: false,
		responsive: true,
		plugins:{
			legend:{
				display: false
			},
			title:{
				display: true,
				text: "Weekly Hours of Sleep"
			}
		},
        scales: {
            x: {
                ticks: {
                    display: true,
                    
                },
                grid: {
                    display: true,
                    drawBorder: true,
                },
                
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: true,
                },
				suggestedMin: 8,
				suggestedMax: 10
            },
        },
	};

	return(
		<div className="lineChartContainer">
			<Line data={data} height={50} options={options}/>
		</div>
	)
}

export default WeeklySleepLine;