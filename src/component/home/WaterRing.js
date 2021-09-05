import "./waterRing.css";
import {Doughnut} from "react-chartjs-2"

const WaterRing = () => {

	const options = {
        cutout: 100,
		plugins:{
			legend:{
				display: true
			},
			title:{
				display: true,
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
            '#2e334e',
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