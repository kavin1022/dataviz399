import "./summaryRadar.css";
import {Radar} from "react-chartjs-2"

const SummaryRadar = () => {


	const options = {
		plugins:{
			legend:{
				display: true
			},
			title:{
				display: true,
				text: "Summary"
			}
		},
	};


	const data = {
		labels: [
		  'Eating',
		  'Drinking',
		  'Sleeping',
		  'Sporting',
		  'Walking',
		  'Cycling',
		  'Running'
		],
		datasets: [{
		  label: 'Current Week',
		  data: [65, 59, 90, 81, 56, 55, 40],
		  fill: true,
		  backgroundColor: 'rgba(6, 11, 38, 0.2)',
		  borderColor: 'rgb(6, 11, 38)',
		  pointBackgroundColor: 'rgb(6, 11, 38)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgb(6, 11, 38)'
		}, {
		  label: 'Last Week',
		  data: [28, 48, 40, 19, 96, 27, 100],
		  fill: true,
		  backgroundColor: 'rgba(38, 33, 6, 0.2)',
		  borderColor: 'rgb(38, 33, 6)',
		  pointBackgroundColor: 'rgb(38, 33, 6)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgb(38, 33, 6)'
		}]
	  };

	return(
		<div className="radarWrapper">
			<Radar data={data} height={20} options={options} />
		</div>
	)


}

export default SummaryRadar