import "./sleepStageRing.css"
import {Doughnut} from "react-chartjs-2"

const SleepStageRing = (props) => {
	const options = {
        cutout: 70,
		plugins:{
			legend:{
				display: false
			},
			title:{
				display: true,
				text: "Sleep Stages"
			}
		},
	};

	const data = {
        labels: [
            'Deep Sleep',
            "Light Sleep",
            "REM",
            "Awake"
        ],
        datasets: [{
			label: 'Sleep Stages',
			data: props.data,
			backgroundColor: [
				'#000807',
				'#C2D076',
				'#2D5D7B',
				'#457EAC',
			],
			hoverOffset: 7
        }]
    };

	return(
		<div className="sleepStageRingWrapper">
			<Doughnut data={data} height={40} options={options}/>
		</div>
	)
}

export default SleepStageRing;