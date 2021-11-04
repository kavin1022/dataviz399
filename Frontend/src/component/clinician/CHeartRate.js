import "./clinicianCompo.css"

const CHeartRate = (props) => {

	return(
        <div id="CHeartRateContent">
            <div className="innerHeartRow">
                <div>
                    <p style={{fontSize: 20, paddingBottom: "10px"}}>Min</p>
                    <div id="sleepHour">
                        <p className="purpleSleepText">{props.min}</p> 
                        <p className="sleepSub">bpm</p>
                    </div>
                </div>

                <div>
                    <p style={{fontSize: 20, paddingBottom: "10px"}}>Max</p>
                    <div id="sleepHour">
                        <p className="purpleSleepText">{props.max}</p> 
                        <p className="sleepSub">bpm</p>
                    </div>
                </div>

                <div>
                    <p style={{fontSize: 20, paddingBottom: "10px"}}>Resting</p>
                    <div id="sleepHour">
                        <p className="purpleSleepText">51</p> 
                        <p className="sleepSub">bpm</p>
                    </div>
                </div>
                
            </div>

            <div className="innerHeartRow">
                <div>
                    <p style={{fontSize: 20, paddingBottom: "10px"}}>Average</p>
                    <div id="sleepHour">
                        <p className="purpleSleepText">{props.avg}</p> 
                        <p className="sleepSub">bpm</p>
                    </div>
                </div>

                <div>
                    <p style={{fontSize: 20, paddingBottom: "10px"}}>Total</p>
                    <div id="sleepHour">
                        <p className="purpleSleepText">{props.total}</p> 
                        <p className="sleepSub">bpm</p>
                    </div>
                </div>
            </div>
            
        </div>
	)
}

export default CHeartRate;