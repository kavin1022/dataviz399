import "./clinicianCompo.css"

const CWellness = (props) => {

	return(
        <div id="CWellnessContent">
            <div>
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Injury</p>
                <div id="sleepHour">
                    <p className="purpleSleepText">{1}</p> 
                </div>
            </div>

            <div>
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Notes</p>
                <div id="sleepHour">
                    <p className="purpleSleepText">{props.exerciseTime}</p> 
                    <p className="sleepSub">-hand injury</p>
                </div>
            </div>

        </div>
	)
}

export default CWellness;