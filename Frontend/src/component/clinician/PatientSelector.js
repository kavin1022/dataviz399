import "./clinicianCompo.css"
import CustomizedMenus from "./CustomizedMenus.js";


const PatientSelector = (props) => {

	return(
        <div id="patientSelectorContent">
            <p id="vp">View data for patient : </p>
            <CustomizedMenus setDate={props.setDate} setChangingPatient={props.setChangingPatient} />
        </div>
	)
}

export default PatientSelector;