import { useEffect } from "react";
import "./stepLineChart.css";
import {Line} from "react-chartjs-2";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import {format} from "date-fns"
import TextField from '@mui/material/TextField';


const StepLineChart = (props) => {

	useEffect(() => {

	})

	let data = {
		labels: props.stepLineLabels,
		datasets: [{
		  	label: 'Step Counts',
		  	backgroundColor: '#060b26',
		  	borderColor: '#060b26',
			tension: 0.3,
		  	data: props.stepLineData,
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
		//const temp = props.stepsData.slice(0,10).reverse();
		//setLabels(temp.map(x => x.dateTime));
		//setStepData(temp.map(x => x.value));
		//setSteps(temp);
	}, [])

	return(
		<div className="rowTwo">
			<div className="lineChartContainer">
				<Line data={data} height={50} options={options} />
			</div>
			<div className="pickerContainer">
			<LocalizationProvider dateAdapter={AdapterDateFns}>
         		<CalendarPicker 
					date={new Date(Date.parse(props.date))} 
					dateFormat="YYYY-MM-DD" 
					onChange={(newValue) => {
						const max = new Date("March 31, 2020 23:59:59")
						const min = new Date("November 01, 2019 00:00:00")
                        if(newValue > max || newValue < min){
                            alert("Data doesn't exist, please select a date between 2019-11-01 to 2020-03-31")
                        }else{
                            props.setDate(format(newValue, "yyyy-MM-dd")); 
                        }
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
    		</LocalizationProvider>
			</div>
		</div>
	)
}

export default StepLineChart;