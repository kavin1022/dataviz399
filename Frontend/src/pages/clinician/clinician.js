import "./clinician.css"
import PurpleBack from "../../component/topBar/PurpleBack"
import BackgroudGrey from "../../component/topBar/BackgroundGrey"
import PatientSelector from "../../component/clinician/PatientSelector"
import CSleepSum from "../../component/clinician/CSleepSum"
import CHeartRate from "../../component/clinician/CHeartRate"
import CActiv from "../../component/clinician/CActiv"
import CWellness from "../../component/clinician/CWellness"
import TopBar from "../../component/topBar/TopBar"
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from "react"


const Clinician = (props) => {
    const [changingPatient, setChangingPatient] = useState(false);
    return (
        <>  
            {changingPatient && <div className="loading"><CircularProgress/></div>}

            <TopBar color="white" setLoggedIn={props.setLoggedIn} />
            <BackgroudGrey/>
            <PurpleBack/>
            <div id="c">
                <h1 id="welcomeMessage">Welcome Back, Doctor Yu-en Goh</h1>
                <h4 id="patientReminder">Take a look at the latest updates for your patients</h4>

                <div id="cContentWrapper">
                    <div id="cRowOne">
                        <div id="patientSelector">
                            <PatientSelector date={props.date} setDate={props.setDate} setHomeLoading={props.setHomeLoading} setChangingPatient={setChangingPatient} />
                        </div>
                        <div id="sleepSum">
                            <CSleepSum length={props.timeInBed} efficiency={props.efficiency} />
                        </div>
                    </div>

                    <div id="cRowTwo">
                        <div id="cHeartRate">
                            <CHeartRate avg={props.avgHeartRate} min={props.minHeartRate} max={props.maxHeartRate} total={props.totalHeartRate} />
                        </div>
                        <div id="activWellness">
                            <div id="cActive">
                                <CActiv steps={props.stepValue} exerciseTime={props.exerciseValue} caloriesBurnt={props.caloriesValue}/>
                            </div>
                            <div id="cWellness">
                                <CWellness/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Clinician