import "./clinicianCompo.css"
import CustomizedMenus from "./CustomizedMenus.js";

const PatientSelector = (props) => {

	return(
        <div id="patientSelectorContent">
            <p id="vp">View data for patient : </p>
            <CustomizedMenus/>
        </div>
	)
}

export default PatientSelector;