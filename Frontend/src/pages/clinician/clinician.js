import "./clinician.css"
import PurpleBack from "../../component/topBar/PurpleBack"
import BackgroudGrey from "../../component/topBar/BackgroundGrey"
import PatientSelector from "../../component/clinician/PatientSelector"
import CSleepSum from "../../component/clinician/CSleepSum"

const Clinician = () => {
    return (
        <>
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
                            HeartRate
                        </div>
                        <div id="activWellness">
                            <div id="cActive">
                                Activ
                            </div>
                            <div id="cWellness">
                                Wellness
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Clinician