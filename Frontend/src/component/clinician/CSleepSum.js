import "./clinicianCompo.css"

const CSleepSum = (props) => {

	return(
        <div id="CSleepSumContent">
            <div className="innerSleepSum">
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Sleep length</p>
                <div id="sleepHour">
                    <p className="purpleSleepText">7</p> 
                    <p className="sleepSub">hr</p>
                    <p className="purpleSleepText">8</p> 
                    <p className="sleepSub">min</p>
                </div>
            </div>

            <div className="innerSleepSum">
                <p style={{fontSize: 20, paddingBottom: "10px"}}>Sleep length</p>
                <div id="sleepLength">
                <p className="purpleSleepText">7</p> 
                <p className="sleepSub">%</p>
                </div>
            </div>
            
        </div>
	)
}

export default CSleepSum;