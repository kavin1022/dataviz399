import { useEffect, useState } from "react";
import "./stepLineChart.css";
import {Line} from "react-chartjs-2";
import StaticDatePicker from "./StaticDatePicker";


const StepLineChart = () => {

	const [steps, setSteps] = useState(false);
	const [labels, setLabels] = useState([]);
	const [stepData, setStepData] = useState([]);
	const [date, changeDate] = useState(new Date());
	//const [dateFilter, setDateFilter] = useState();

	let data = {
		labels: labels,
		datasets: [{
		  	label: 'Step Counts',
		  	backgroundColor: '#060b26',
		  	borderColor: '#060b26',
			tension: 0.3,
		  	data: stepData,
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
				text: "Steps"
			}
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true,
				}
			}]
		}
	};

	useEffect(() => {
		fetch("http://localhost:8000/api/step/getLineChartSteps")
			.then(res =>{
				return res.json();
			})
			.then(data => {
				const temp = data.reverse();
				setLabels(temp.map(x => x.dateTime));
				setStepData(temp.map(x => x.value));
				setSteps(temp);
			})
	}, [])

	return(
		<div className="rowTwo">
			<div className="lineChartContainer">
				{steps && <Line data={data} height={50} options={options} />}
			</div>
			<div className="pickerContainer">
				<StaticDatePicker/>
			</div>
		</div>
	)
}

export default StepLineChart;