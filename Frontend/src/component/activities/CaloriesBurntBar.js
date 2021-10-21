import "./caloriesBurntBar.css"
import {Bar} from "react-chartjs-2";

const CaloriesBurntBar = (props) => {

	let data = {
        labels: ["Walking", "Other"],
        axis: "x",
        datasets: [{
          data: props.barData,
          backgroundColor: [
            '#5F7BC4',
            "#5FC476",
            '#C45FAE',
            "#C4a85f",
          ],
          borderColor: [
            '#5F7BC4',
            "#5FC476",
            '#C45FAE',
            "#C4a85f",
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
                    <p className="cNumber">{props.totalCalories}</p>
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