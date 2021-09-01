import { useEffect, useState } from "react";
import "./stepLineChart.css"
import {Line} from "react-chartjs-2"

const StepLineChart = () => {

	const [steps, setSteps] = useState(false);
	const [labels, setLabels] = useState([]);
	const [stepData, setStepData] = useState([]);
	//const [dateFilter, setDateFilter] = useState();

	let data = {
		labels: labels,
		datasets: [{
		  	label: 'Step Counts',
		  	backgroundColor: '#060b26',
		  	borderColor: '#060b26',
		  	data: stepData,
		}]
	};

	const options = {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true,
				},
			},
		  	],
		},
	};

	useEffect(() => {
		fetch("http://localhost:8000/steps")
			.then(res =>{
				return res.json();
			})
			.then(data => {
				const temp = data.slice(-10)
				setLabels(temp.map(x => x.dateTime.substring(5)));
				setStepData(temp.map(x => x.Count));
				setSteps(temp);
			})
	}, [])

	return(
		<div className="lineChartContainer">
			{steps && <Line data={data} height= {50} ptions={options} />}
		</div>
	)
}

export default StepLineChart;