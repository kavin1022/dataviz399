import "./caloriesBurntBar.css"
import {Bar} from "react-chartjs-2";
import { Ticks } from "chart.js";

const CaloriesBurntBar = () => {

	let data = {
        labels: ["Runing", "Walking"],
        axis: "x",
        datasets: [{
          data: [50, 20],
          backgroundColor: [
            '#C2D076',
            '#2D5D7B',

          ],
          borderColor: [
            "#C2D076",
            "#2D5D7B",

          ],
          borderWidth: 1
        }]
      };

    const options = {
        indexAxis: 'y',
        plugins:{
			legend:{
				display: false
			},
			title:{
				display: false,
				text: "Steps"
			}
		},
        scales: {
            x: {
                ticks: {
                    display: false,
                    
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
                
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false,
                }
            },
        }
    }

    return (
        <div className="burntWrapper">
            <div className="headingText">
                <h3 style={{fontSize: "30px", fontWeight: "500", marginTop: "60px", marginBottom: "50px"}}>Exercise</h3>
                <h4 style={{fontSize: "20px", fontWeight: "500", marginBottom: "10px"}}>Runing</h4>
                <h4 style={{fontSize: "20px", fontWeight: "500"}}>Walking</h4>
            </div>

            <div className="barWrapper">
                <Bar data={data} options={options}/>
            </div>
                
            <div>
                Text 34
            </div>
        </div>
    )
}

export default CaloriesBurntBar