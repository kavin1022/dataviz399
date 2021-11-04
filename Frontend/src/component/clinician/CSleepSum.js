import "./clinicianCompo.css"

const CSleepSum = (props) => {

	return(
        <div id="CSleepSumContent">
            <div className="innerSleepSum">
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Sleep length</p>
                <div id="sleepHour">
                    <p className="purpleSleepText">{props.length}</p> 
                </div>
            </div>

            <div className="innerSleepSum">
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Sleep Efficiency</p>
                <div id="sleepLength">
                <p className="purpleSleepText">{props.efficiency}</p> 
                <p className="sleepSub">%</p>
                </div>
            </div>
            
        </div>
	)
}

export default CSleepSum;