import "./clinicianCompo.css"

const CActiv = (props) => {

	return(
        <div id="CActivContent">
            <div>
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Steps</p>
                <div id="sleepHour">
                    <p className="purpleSleepText">{props.steps}</p> 
                    <p className="sleepSub">steps</p>
                </div>
            </div>

            <div>
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Exercise Time</p>
                <div id="sleepHour">
                    <p className="purpleSleepText">{props.exerciseTime}</p> 
                    <p className="sleepSub">mins</p>
                </div>
            </div>

            <div>
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Calories Burnt</p>
                <div id="sleepHour">
                    <p className="purpleSleepText">{props.caloriesBurnt}</p> 
                    <p className="sleepSub">cal</p>
                </div>
            </div>
        </div>
	)
}

export default CActiv;