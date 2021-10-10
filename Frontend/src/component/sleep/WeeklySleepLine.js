import { useEffect, useState } from "react";
import "./WeeklySleepLine.css";
import {Line} from "react-chartjs-2";


const WeeklySleepLine = (props) => {

	const [sleepHours, setsleepHours] = useState(false);
	const [labels, setLabels] = useState([""]);
	const [sleepData, setsleepData] = useState([0]);

	const [date, changeDate] = useState(new Date());
	//const [dateFilter, setDateFilter] = useState();

	let data = {
		labels: ["Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday", "Sunday"],
		datasets: [{
		  	label: 'Step Counts',
		  	backgroundColor: '#5f75c4',
		  	borderColor: '#5f75c4',
			tension: 0.3,
		  	data: [6.7, 8.3, 7.5, 7.8, 8, 8.9, 8.4],
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