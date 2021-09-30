import { fontSize } from "@mui/system"
import "./exerciseHomeCom.css"
const ExerciseHomeCom = () => {
    const numberStyle = {
        color: "#5F75C4",
        fontSize: "60px"
    }
    const headingStyle = {
        fontSize: "27px"
    }
    const subStyle = {
        alignSelf: "flex-end",
        marginBottom: "5px",
        marginLeft: "20px"
    }
	return(
		<div className="exerciseSumWrapper">  
            <div>
                <div className="eInner">
                    <p style={headingStyle}> Weight</p>
                    <div style={{display: "flex", alignContent: "end", marginTop: "20px"}}>
                        <p style={numberStyle}>60</p>
                        <p style={subStyle}>kg</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="eInner">
                    <p style={headingStyle} >Exercise Time</p>
                    <div style={{display: "flex", alignContent: "end", marginTop: "20px"}}>
                        <p style={numberStyle}>56</p>
                        <p style={subStyle}>mins</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="eInner">
                    <p style={headingStyle}>Calories Burnt</p>
                    <div style={{display: "flex", alignContent: "end", marginTop: "20px"}}>
                        <p style={numberStyle}>550</p>
                        <p style={subStyle}>cal</p>
                    </div>
                </div>
            </div>
		</div>
	)


}

export default ExerciseHomeCom