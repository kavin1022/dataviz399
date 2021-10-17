import "./caloriesBurntBar.css"
import {Bar} from "react-chartjs-2";
import { Ticks } from "chart.js";

const CaloriesBurntBar = () => {

	let data = {
        labels: ["Runing", "Other"],
        axis: "x",
        datasets: [{
          data: [50, 20],
          backgroundColor: [
            '#2DAA8C',
            '#5f75c4'

          ],
          borderColor: [
            "#C2D076",
            '#5f75c4'

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
                <h3 style={{fontSize: "25px", fontWeight: "400"}}>Daily Calories Burnt</h3>
                <div>
                    <p className="cNumber">550</p>
                    <p className="cSub">Calories Today</p>
                </div>
            </div>

            <div className="barWrapper">
                <Bar data={data} options={options}/>
            </div>
                
        </div>
    )
}

export default CaloriesBurntBar