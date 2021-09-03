import "./happinessRing.css";
import {Doughnut} from "react-chartjs-2"

const HappinessRing = () => {

	const options = {
        cutout: 100,
		plugins:{
			legend:{
				display: true
			},
			title:{
				display: true,
				text: "Mood"
			}
		},
	};


	const data = {
        labels: [
            'Great :D',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [800, 100],
          backgroundColor: [
            'green',
            '#EFEDFF',
          ],
          hoverOffset: 4
        }]
      };

	return(
		<div className="moodRingWrapper">
			<Doughnut data={data} height={40} options={options}/>
		</div>
	)


}

export default HappinessRing