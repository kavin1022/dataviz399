import { useEffect, useState } from "react";
import "./stepLineChart.css";
import {Line} from "react-chartjs-2";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import MonthPicker from '@mui/lab/MonthPicker';
import YearPicker from '@mui/lab/YearPicker';
import Grid from '@mui/material/Grid';
import {format} from "date-fns"
import TextField from '@mui/material/TextField';
import { parseISO } from 'date-fns' 


const StepLineChart = (props) => {

	const [steps, setSteps] = useState(false);
	const [labels, setLabels] = useState([""]);
	const [stepData, setStepData] = useState([0]);

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
		const temp = props.stepsData.slice(0,10).reverse();
		setLabels(temp.map(x => x.dateTime));
		setStepData(temp.map(x => x.value));
		setSteps(temp);
		console.log(props.date)
	}, [])

	return(
		<div className="rowTwo">
			<div className="lineChartContainer">
				{steps && <Line data={data} height={50} options={options} />}
			</div>
			<div className="pickerContainer">
			<LocalizationProvider dateAdapter={AdapterDateFns}>
         		<CalendarPicker 
					date={new Date(Date.parse(props.date))} 
					dateFormat="YYYY-MM-DD" 
					onChange={(newValue) => {props.setDate(format(newValue, "yyyy-MM-dd"));}}
					renderInput={(params) => <TextField {...params} />}
				/>
    		</LocalizationProvider>
			</div>
		</div>
	)
}

export default StepLineChart;