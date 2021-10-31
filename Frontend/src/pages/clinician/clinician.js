import "./clinician.css"
import PurpleBack from "../../component/topBar/PurpleBack"
import BackgroudGrey from "../../component/topBar/BackgroundGrey"
import PatientSelector from "../../component/clinician/PatientSelector"
import CSleepSum from "../../component/clinician/CSleepSum"
import CHeartRate from "../../component/clinician/CHeartRate"
import CActiv from "../../component/clinician/CActiv"
import CWellness from "../../component/clinician/CWellness"
import TopBar from "../../component/topBar/TopBar"

const Clinician = (props) => {
    return (
        <>
            <TopBar color="white" setLoggedIn={props.setLoggedIn} />
            <BackgroudGrey/>
            <PurpleBack/>
            <div id="c">
                <h1 id="welcomeMessage">Welcome Back, Doctor Yu-en Goh</h1>
                <h4 id="patientReminder">Take a look at the latest updates for your patients</h4>

                <div id="cContentWrapper">
                    <div id="cRowOne">
                        <div id="patientSelector">
                            <PatientSelector/>
                        </div>
                        <div id="sleepSum">
                            <CSleepSum/>
                        </div>
                    </div>

                    <div id="cRowTwo">
                        <div id="cHeartRate">
                            <CHeartRate/>
                        </div>
                        <div id="activWellness">
                            <div id="cActive">
                                <CActiv steps={2328} exerciseTime={56} caloriesBurnt={550}/>
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