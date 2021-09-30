import "./waterRing.css";
import {Doughnut} from "react-chartjs-2"

const WaterRing = () => {

	const options = {
        cutout: 80,
		plugins:{
			legend:{
				display: true
			},
			title:{
				display: false,
				text: "Water Inatake"
			}
		},
	};


	const data = {
        labels: [
            'Water Consumed',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [500, 100],
          backgroundColor: [
            '#5f75c4',
            '#EFEDFF',
          ],
          hoverOffset: 4
        }]
      };

	return(
		<div className="waterRingWrapper">
			<Doughnut data={data} height={40} options={options}/>
		</div>
	)


}

export default WaterRing